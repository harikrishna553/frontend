import express, { Request, Response } from 'express';
import { SqlGenerator } from '../services/sql-generator';
import { SemanticValidator } from '../services/semantic-validator';
import { QueryValidator } from '../services/query-validator';
import { SqlDialect } from '../types';
import * as yaml from 'js-yaml';

const router = express.Router();
const sqlGenerator = new SqlGenerator();
const semanticValidator = new SemanticValidator();
const queryValidator = new QueryValidator();

/**
 * POST /api/generate-sql
 * Generate SQL from a query spec and semantic model
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const {
      querySpec,
      semanticSpec,
      dialect = SqlDialect.POSTGRES,
      format = 'yaml',
      skipValidation = false,
    } = req.body;

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

    // Reject array-shaped querySpecs — a common mistake when a user pastes a Cube
    // measure definition (array of measure objects) into the Query Spec editor instead
    // of a proper query object like { measures: ["orders.total_revenue"] }.
    if (Array.isArray(querySpec) || typeof querySpec !== 'object') {
      return res.status(400).json({
        error: 'Invalid querySpec: expected a JSON object, not an array or primitive.',
        hint: 'The Query Spec must be an object with fields like "measures", "dimensions", etc.',
        example: { measures: ['cubeName.measureName'], dimensions: ['cubeName.dimensionName'] },
      });
    }

    // Validate dialect
    const validDialects = Object.values(SqlDialect);
    if (!validDialects.includes(dialect)) {
      return res.status(400).json({
        error: `Invalid dialect: ${dialect}`,
        validDialects,
      });
    }

    // Optional validation before SQL generation
    if (!skipValidation) {
      // Validate semantic model
      const semanticValidation = await semanticValidator.validateSemanticModel(semanticSpec, format);
      
      if (!semanticValidation.valid) {
        return res.status(400).json({
          error: 'Semantic model validation failed',
          validation: semanticValidation,
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
      
      if (!queryValidation.valid) {
        return res.status(400).json({
          error: 'Query validation failed',
          validation: queryValidation,
        });
      }
    }

    // Generate SQL
    const result = await sqlGenerator.generateSql(querySpec, semanticSpec, dialect, format);
    
    res.json(result);
  } catch (error: any) {
    console.error('SQL generation error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      error: 'SQL generation failed',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
});

export { router as generateSqlRouter };
