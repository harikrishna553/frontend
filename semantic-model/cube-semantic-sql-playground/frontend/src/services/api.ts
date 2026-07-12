import axios from 'axios';
import { QuerySpec, ValidationResult, SqlGenerationResult, SqlDialect } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  /**
   * Validate semantic model
   */
  async validateSemanticModel(semanticSpec: string, semanticFormat: 'yaml' | 'json' = 'yaml'): Promise<ValidationResult> {
    const response = await api.post('/validate/semantic', {
      semanticSpec,
      format: semanticFormat,
    });
    return response.data;
  },

  /**
   * Validate query spec
   */
  async validateQuery(
    querySpec: QuerySpec,
    semanticSpec: string,
    semanticFormat: 'yaml' | 'json' = 'yaml'
  ): Promise<ValidationResult> {
    const response = await api.post('/validate/query', {
      querySpec,
      semanticSpec,
      format: semanticFormat,
    });
    return response.data;
  },

  /**
   * Validate both semantic model and query
   */
  async validateAll(
    querySpec: QuerySpec,
    semanticSpec: string,
    semanticFormat: 'yaml' | 'json' = 'yaml'
  ): Promise<any> {
    const response = await api.post('/validate/all', {
      querySpec,
      semanticSpec,
      format: semanticFormat,
    });
    return response.data;
  },

  /**
   * Generate SQL from query spec
   */
  async generateSql(
    querySpec: QuerySpec,
    semanticSpec: string,
    dialect: SqlDialect,
    semanticFormat: 'yaml' | 'json' = 'yaml'
  ): Promise<SqlGenerationResult> {
    const response = await api.post('/generate-sql', {
      querySpec,
      semanticSpec,
      dialect,
      format: semanticFormat,
    });
    return response.data;
  },

  /**
   * Load sample semantic models
   */
  async getSamples(): Promise<any> {
    const response = await api.get('/samples/all');
    return response.data;
  },

  /**
   * Health check
   */
  async healthCheck(): Promise<any> {
    const response = await api.get('/health');
    return response.data;
  },
};
