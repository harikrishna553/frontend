import express, { Request, Response } from 'express';
import { SemanticValidator } from '../services/semantic-validator';
import { QueryValidator } from '../services/query-validator';
import * as yaml from 'js-yaml';

const router = express.Router();
const semanticValidator = new SemanticValidator();
const queryValidator = new QueryValidator();

/**
 * POST /api/validate/semantic
 * Validate a semantic model (Cube schema)
 */
router.post('/semantic', async (req: Request, res: Response) => {
  try {
    const { semanticSpec, format = 'yaml' } = req.body;

    if (!semanticSpec) {
      return res.status(400).json({
        error: 'Missing required field: semanticSpec',
      });
    }

    const result = await semanticValidator.validateSemanticModel(semanticSpec, format);
    
    res.json(result);
  } catch (error: any) {
    console.error('Semantic validation error:', error);
    res.status(500).json({
      error: 'Validation failed',
      message: error.message,
    });
  }
});

/**
 * POST /api/validate/query
 * Validate a query spec against a semantic model
 */
router.post('/query', async (req: Request, res: Response) => {
  try {
    const { querySpec, semanticSpec, format = 'yaml' } = req.body;

    if (!querySpec) {
      return res.status(400).json({
        error: 'Missing required field: querySpec',
      });
    }

    if (!semanticSpec) {
      return res.status(400).json({
        error: 'Missing required field: semanticSpec',
      });
    }

    // First validate semantic model
    const semanticValidation = await semanticValidator.validateSemanticModel(semanticSpec, format);
    
    if (!semanticValidation.valid) {
      return res.json({
        valid: false,
        errors: [
          {
            message: 'Semantic model has errors. Please fix them first.',
            type: 'error',
          },
          ...semanticValidation.errors,
        ],
        warnings: semanticValidation.warnings,
      });
    }

    // Parse semantic model
    let parsedModel: any;
    if (format === 'yaml') {
      const yaml = require('js-yaml');
      parsedModel = yaml.load(semanticSpec);
    } else {
      parsedModel = JSON.parse(semanticSpec);
    }

    // Validate query
    const result = await queryValidator.validateQuery(querySpec, parsedModel);
    
    res.json(result);
  } catch (error: any) {
    console.error('Query validation error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      error: 'Validation failed',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
});

/**
 * POST /api/validate/all
 * Validate both semantic model and query spec
 */
router.post('/all', async (req: Request, res: Response) => {
  try {
    const { querySpec, semanticSpec, format = 'yaml' } = req.body;

    if (!querySpec) {
      return res.status(400).json({
        error: 'Missing required field: querySpec',
      });
    }

    if (!semanticSpec) {
      return res.status(400).json({
        error: 'Missing required field: semanticSpec',
      });
    }

    // Validate semantic model
    const semanticValidation = await semanticValidator.validateSemanticModel(semanticSpec, format);
    
    if (!semanticValidation.valid) {
      return res.json({
        valid: false,
        semanticValidation,
        queryValidation: null,
      });
    }

    // Parse semantic model
    let parsedModel: any;
    if (format === 'yaml') {
      parsedModel = yaml.load(semanticSpec);
    } else {
      parsedModel = JSON.parse(semanticSpec);
    }

    // Validate query
    const queryValidation = await queryValidator.validateQuery(querySpec, parsedModel);
    
    res.json({
      valid: semanticValidation.valid && queryValidation.valid,
      semanticValidation,
      queryValidation,
    });
  } catch (error: any) {
    console.error('Validation error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      error: 'Validation failed',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
});

export { router as validateRouter };
