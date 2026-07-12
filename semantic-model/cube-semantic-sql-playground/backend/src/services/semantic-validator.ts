import { SemanticModel, ValidationResult, ValidationError } from '../types';
import * as yaml from 'js-yaml';

/**
 * Service for validating semantic models (Cube schemas)
 */
export class SemanticValidator {
  /**
   * Validate a semantic model specification
   */
  async validateSemanticModel(
    semanticSpec: string,
    format: 'yaml' | 'json' = 'yaml'
  ): Promise<ValidationResult> {
    const errors: ValidationError[] = [];
    const warnings: ValidationError[] = [];

    try {
      let parsedModel: any;

      // Parse the semantic spec
      if (format === 'yaml') {
        try {
          // Parse YAML using js-yaml
          parsedModel = yaml.load(semanticSpec);
        } catch (error: any) {
          errors.push({
            message: `YAML parsing error: ${error.message}`,
            type: 'error',
            suggestion: 'Check YAML syntax - ensure proper indentation and structure',
          });
          return { valid: false, errors, warnings };
        }
      } else {
        try {
          parsedModel = JSON.parse(semanticSpec);
        } catch (error: any) {
          errors.push({
            message: `JSON parsing error: ${error.message}`,
            type: 'error',
            suggestion: 'Check JSON syntax - ensure valid JSON format',
          });
          return { valid: false, errors, warnings };
        }
      }

      // Validate structure
      this.validateStructure(parsedModel, errors, warnings);

      // Validate cubes
      if (parsedModel.cubes && Array.isArray(parsedModel.cubes)) {
        parsedModel.cubes.forEach((cube: any, index: number) => {
          this.validateCube(cube, index, errors, warnings);
        });
      }

      // Validate views
      if (parsedModel.views && Array.isArray(parsedModel.views)) {
        parsedModel.views.forEach((view: any, index: number) => {
          this.validateView(view, index, errors, warnings);
        });
      }

      return {
        valid: errors.length === 0,
        errors,
        warnings,
      };
    } catch (error: any) {
      errors.push({
        message: `Validation error: ${error.message}`,
        type: 'error',
      });

      return { valid: false, errors, warnings };
    }
  }

  /**
   * Validate basic structure of semantic model
   */
  private validateStructure(model: any, errors: ValidationError[], warnings: ValidationError[]): void {
    if (!model || typeof model !== 'object') {
      errors.push({
        message: 'Invalid semantic model: must be an object',
        type: 'error',
      });
      return;
    }

    if (!model.cubes && !model.views) {
      errors.push({
        message: 'Semantic model must contain at least one cube or view',
        type: 'error',
        suggestion: 'Add a "cubes" or "views" array to your semantic model',
      });
    }
  }

  /**
   * Validate a single cube definition
   */
  private validateCube(cube: any, index: number, errors: ValidationError[], warnings: ValidationError[]): void {
    const path = `cubes[${index}]`;

    // Name is required
    if (!cube.name) {
      errors.push({
        message: `Cube at index ${index} is missing required field: name`,
        type: 'error',
        path,
        suggestion: 'Add a "name" field to the cube definition',
      });
      return;
    }

    // Must have sql or sql_table
    if (!cube.sql && !cube.sql_table && !cube.extends) {
      errors.push({
        message: `Cube "${cube.name}" must have either "sql", "sql_table", or "extends" field`,
        type: 'error',
        path: `${path}.${cube.name}`,
        suggestion: 'Add a "sql_table" field with the table name',
      });
    }

    // Validate measures
    if (cube.measures && Array.isArray(cube.measures)) {
      cube.measures.forEach((measure: any, mIndex: number) => {
        this.validateMeasure(measure, cube.name, mIndex, errors, warnings);
      });
    }

    // Validate dimensions
    if (cube.dimensions && Array.isArray(cube.dimensions)) {
      cube.dimensions.forEach((dimension: any, dIndex: number) => {
        this.validateDimension(dimension, cube.name, dIndex, errors, warnings);
      });
    }

    // Validate joins
    if (cube.joins && Array.isArray(cube.joins)) {
      cube.joins.forEach((join: any, jIndex: number) => {
        this.validateJoin(join, cube.name, jIndex, errors, warnings);
      });
    }
  }

  /**
   * Validate a measure definition
   */
  private validateMeasure(
    measure: any,
    cubeName: string,
    index: number,
    errors: ValidationError[],
    warnings: ValidationError[]
  ): void {
    const path = `cubes.${cubeName}.measures[${index}]`;

    if (!measure.name) {
      errors.push({
        message: `Measure at index ${index} in cube "${cubeName}" is missing required field: name`,
        type: 'error',
        path,
      });
      return;
    }

    if (!measure.type) {
      errors.push({
        message: `Measure "${cubeName}.${measure.name}" is missing required field: type`,
        type: 'error',
        path: `${path}.${measure.name}`,
        suggestion: 'Add a "type" field (e.g., count, sum, avg, min, max)',
      });
    }

    const validTypes = ['count', 'sum', 'avg', 'min', 'max', 'countDistinct', 'countDistinctApprox', 'number'];
    if (measure.type && !validTypes.includes(measure.type)) {
      errors.push({
        message: `Measure "${cubeName}.${measure.name}" has invalid type: "${measure.type}"`,
        type: 'error',
        path: `${path}.${measure.name}`,
        suggestion: `Valid types are: ${validTypes.join(', ')}`,
      });
    }

    // SQL is required for most types except count
    if (measure.type !== 'count' && !measure.sql) {
      warnings.push({
        message: `Measure "${cubeName}.${measure.name}" of type "${measure.type}" should have a "sql" field`,
        type: 'warning',
        path: `${path}.${measure.name}`,
      });
    }
  }

  /**
   * Validate a dimension definition
   */
  private validateDimension(
    dimension: any,
    cubeName: string,
    index: number,
    errors: ValidationError[],
    warnings: ValidationError[]
  ): void {
    const path = `cubes.${cubeName}.dimensions[${index}]`;

    if (!dimension.name) {
      errors.push({
        message: `Dimension at index ${index} in cube "${cubeName}" is missing required field: name`,
        type: 'error',
        path,
      });
      return;
    }

    if (!dimension.sql && !dimension.case) {
      errors.push({
        message: `Dimension "${cubeName}.${dimension.name}" must have either "sql" or "case" field`,
        type: 'error',
        path: `${path}.${dimension.name}`,
        suggestion: 'Add a "sql" field with the column reference',
      });
    }

    if (!dimension.type) {
      errors.push({
        message: `Dimension "${cubeName}.${dimension.name}" is missing required field: type`,
        type: 'error',
        path: `${path}.${dimension.name}`,
        suggestion: 'Add a "type" field (e.g., string, number, time, boolean)',
      });
    }

    const validTypes = ['string', 'number', 'time', 'boolean', 'geo'];
    if (dimension.type && !validTypes.includes(dimension.type)) {
      errors.push({
        message: `Dimension "${cubeName}.${dimension.name}" has invalid type: "${dimension.type}"`,
        type: 'error',
        path: `${path}.${dimension.name}`,
        suggestion: `Valid types are: ${validTypes.join(', ')}`,
      });
    }
  }

  /**
   * Validate a join definition
   */
  private validateJoin(
    join: any,
    cubeName: string,
    index: number,
    errors: ValidationError[],
    warnings: ValidationError[]
  ): void {
    const path = `cubes.${cubeName}.joins[${index}]`;

    if (!join.name) {
      errors.push({
        message: `Join at index ${index} in cube "${cubeName}" is missing required field: name`,
        type: 'error',
        path,
      });
      return;
    }

    if (!join.sql) {
      errors.push({
        message: `Join "${join.name}" in cube "${cubeName}" is missing required field: sql`,
        type: 'error',
        path: `${path}.${join.name}`,
        suggestion: 'Add a "sql" field with the JOIN condition',
      });
    }

    if (!join.relationship) {
      errors.push({
        message: `Join "${join.name}" in cube "${cubeName}" is missing required field: relationship`,
        type: 'error',
        path: `${path}.${join.name}`,
        suggestion: 'Add a "relationship" field (e.g., one_to_one, one_to_many, many_to_one)',
      });
    }

    const validRelationships = ['one_to_one', 'one_to_many', 'many_to_one'];
    if (join.relationship && !validRelationships.includes(join.relationship)) {
      errors.push({
        message: `Join "${join.name}" has invalid relationship: "${join.relationship}"`,
        type: 'error',
        path: `${path}.${join.name}`,
        suggestion: `Valid relationships are: ${validRelationships.join(', ')}`,
      });
    }
  }

  /**
   * Validate a view definition
   */
  private validateView(view: any, index: number, errors: ValidationError[], warnings: ValidationError[]): void {
    const path = `views[${index}]`;

    if (!view.name) {
      errors.push({
        message: `View at index ${index} is missing required field: name`,
        type: 'error',
        path,
      });
      return;
    }

    if (!view.cubes && !view.includes) {
      errors.push({
        message: `View "${view.name}" must have either "cubes" or "includes" field`,
        type: 'error',
        path: `${path}.${view.name}`,
        suggestion: 'Add a "cubes" or "includes" array to define the view',
      });
    }
  }
}
