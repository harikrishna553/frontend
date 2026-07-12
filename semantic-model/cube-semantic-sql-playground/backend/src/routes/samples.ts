import express, { Request, Response } from 'express';
import { sampleSemanticModels, sampleQuerySpecs } from '../data/samples';

const router = express.Router();

/**
 * GET /api/samples/semantic
 * Get sample semantic models
 */
router.get('/semantic', (req: Request, res: Response) => {
  res.json(sampleSemanticModels);
});

/**
 * GET /api/samples/query
 * Get sample query specs
 */
router.get('/query', (req: Request, res: Response) => {
  res.json(sampleQuerySpecs);
});

/**
 * GET /api/samples/all
 * Get all samples
 */
router.get('/all', (req: Request, res: Response) => {
  res.json({
    semanticModels: sampleSemanticModels,
    querySpecs: sampleQuerySpecs,
  });
});

export { router as samplesRouter };
