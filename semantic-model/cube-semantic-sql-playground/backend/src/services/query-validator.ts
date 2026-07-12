import { QuerySpec, ValidationResult, ValidationError, SemanticModel } from '../types';

/**
 * Service for validating query specifications against semantic models
 */
export class QueryValidator {
  /**
   * Validate a query spec against a semantic model
   */
  async validateQuery(
    querySpec: QuerySpec,
    semanticModel: SemanticModel
  ): Promise<ValidationResult> {
    const errors: ValidationError[] = [];
    const warnings: ValidationError[] = [];

    try {
      // Build cube/view lookup
      const cubeMap = this.buildCubeMap(semanticModel);

      // Validate measures
      if (querySpec.measures && querySpec.measures.length > 0) {
        querySpec.measures.forEach((measure, index) => {
          this.validateMember(measure, 'measure', cubeMap, errors, warnings);
        });
      }

      // Validate dimensions
      if (querySpec.dimensions && querySpec.dimensions.length > 0) {
        querySpec.dimensions.forEach((dimension, index) => {
          this.validateMember(dimension, 'dimension', cubeMap, errors, warnings);
        });
      }

      // Validate filters
      if (querySpec.filters && querySpec.filters.length > 0) {
        querySpec.filters.forEach((filter, index) => {
          this.validateFilter(filter, cubeMap, errors, warnings);
        });
      }

      // Validate time dimensions
      if (querySpec.timeDimensions && querySpec.timeDimensions.length > 0) {
        querySpec.timeDimensions.forEach((timeDim, index) => {
          this.validateTimeDimension(timeDim, cubeMap, errors, warnings);
        });
      }

      // Validate segments
      if (querySpec.segments && querySpec.segments.length > 0) {
        querySpec.segments.forEach((segment, index) => {
          this.validateSegment(segment, cubeMap, errors, warnings);
        });
      }

      // Validate limit
      if (querySpec.limit !== undefined) {
        if (typeof querySpec.limit !== 'number' || querySpec.limit < 0) {
          errors.push({
            message: 'Limit must be a positive number',
            type: 'error',
            path: 'limit',
          });
        }
      }

      // Validate offset
      if (querySpec.offset !== undefined) {
        if (typeof querySpec.offset !== 'number' || querySpec.offset < 0) {
          errors.push({
            message: 'Offset must be a positive number',
            type: 'error',
            path: 'offset',
          });
        }
      }

      // Validate order
      if (querySpec.order && querySpec.order.length > 0) {
        querySpec.order.forEach((orderItem, index) => {
          this.validateOrderItem(orderItem, cubeMap, querySpec, errors, warnings);
        });
      }

      return {
        valid: errors.length === 0,
        errors,
        warnings,
      };
    } catch (error: any) {
      errors.push({
        message: `Query validation error: ${error.message}`,
        type: 'error',
      });

      return { valid: false, errors, warnings };
    }
  }

  /**
   * Build a map of all cubes, measures, dimensions, and segments.
   * Also registers views as queryable entities by resolving the members
   * exposed through their `cubes[].join_path` + `includes` configuration.
   */
  private buildCubeMap(semanticModel: SemanticModel): Map<string, any> {
    const cubeMap = new Map<string, any>();

    // ── 1. Register every cube ──────────────────────────────────────────────
    if (semanticModel.cubes) {
      semanticModel.cubes.forEach((cube) => {
        const cubeData: any = {
          name: cube.name,
          measures: new Set<string>(),
          dimensions: new Set<string>(),
          segments: new Set<string>(),
        };

        if (cube.measures) {
          cube.measures.forEach((measure) => {
            cubeData.measures.add(measure.name);
          });
        }

        if (cube.dimensions) {
          cube.dimensions.forEach((dimension) => {
            cubeData.dimensions.add(dimension.name);
          });
        }

        if (cube.segments) {
          cube.segments.forEach((segment) => {
            cubeData.segments.add(segment.name);
          });
        }

        cubeMap.set(cube.name, cubeData);
      });
    }

    // ── 2. Register every view as a queryable entity ────────────────────────
    // A view exposes a flattened set of members drawn from one or more cubes
    // via its `cubes[].join_path` + `includes` configuration.
    if (semanticModel.views) {
      semanticModel.views.forEach((view) => {
        const viewData: any = {
          name: view.name,
          measures: new Set<string>(),
          dimensions: new Set<string>(),
          segments: new Set<string>(),
        };

        if (view.cubes) {
          view.cubes.forEach((viewCubeEntry: any) => {
            // join_path may be "orders" or "orders.customers" – the leaf
            // segment is the cube whose members we resolve.
            const joinPath: string = viewCubeEntry.join_path ?? '';
            const leafCubeName = joinPath.includes('.')
              ? joinPath.split('.').pop()!
              : joinPath;

            const sourceCube = cubeMap.get(leafCubeName);
            if (!sourceCube) return; // skip if the referenced cube is unknown

            const usePrefix: boolean = viewCubeEntry.prefix === true;
            const prefix = usePrefix ? `${leafCubeName}_` : '';

            const includes: any[] = viewCubeEntry.includes ?? [];

            includes.forEach((inc: any) => {
              // `includes` entries are either plain strings or objects with
              // { name, alias } when the member is exposed under a new name.
              const originalName: string =
                typeof inc === 'string' ? inc : inc.name;
              const exposedName: string =
                typeof inc === 'string'
                  ? `${prefix}${inc}`
                  : inc.alias ?? `${prefix}${inc.name}`;

              if (sourceCube.measures.has(originalName)) {
                viewData.measures.add(exposedName);
              } else if (sourceCube.dimensions.has(originalName)) {
                viewData.dimensions.add(exposedName);
              } else if (sourceCube.segments.has(originalName)) {
                viewData.segments.add(exposedName);
              }
            });
          });
        }

        cubeMap.set(view.name, viewData);
      });
    }

    return cubeMap;
  }

  /**
   * Validate a member reference (measure or dimension)
   */
  private validateMember(
    member: string,
    type: 'measure' | 'dimension',
    cubeMap: Map<string, any>,
    errors: ValidationError[],
    warnings: ValidationError[]
  ): void {
    const parts = member.split('.');
    
    if (parts.length !== 2) {
      errors.push({
        message: `Invalid ${type} reference: "${member}". Must be in format "cubeName.${type}Name"`,
        type: 'error',
        path: type === 'measure' ? 'measures' : 'dimensions',
        suggestion: 'Use the format: cubeName.memberName',
      });
      return;
    }

    const [cubeName, memberName] = parts;
    const cube = cubeMap.get(cubeName);

    if (!cube) {
      errors.push({
        message: `Unknown cube: "${cubeName}"`,
        type: 'error',
        path: type === 'measure' ? 'measures' : 'dimensions',
        suggestion: `Available cubes: ${Array.from(cubeMap.keys()).join(', ')}`,
      });
      return;
    }

    const memberSet = type === 'measure' ? cube.measures : cube.dimensions;
    if (!memberSet.has(memberName)) {
      errors.push({
        message: `${type.charAt(0).toUpperCase() + type.slice(1)} "${member}" does not exist`,
        type: 'error',
        path: type === 'measure' ? 'measures' : 'dimensions',
        suggestion: `Available ${type}s in ${cubeName}: ${Array.from(memberSet).join(', ') || 'none'}`,
      });
    }
  }

  /**
   * Validate a filter
   */
  private validateFilter(
    filter: any,
    cubeMap: Map<string, any>,
    errors: ValidationError[],
    warnings: ValidationError[]
  ): void {
    if (!filter.member) {
      errors.push({
        message: 'Filter is missing required field: member',
        type: 'error',
        path: 'filters',
      });
      return;
    }

    if (!filter.operator) {
      errors.push({
        message: `Filter for "${filter.member}" is missing required field: operator`,
        type: 'error',
        path: 'filters',
      });
    }

    // Validate the member exists
    const parts = filter.member.split('.');
    if (parts.length === 2) {
      const [cubeName, memberName] = parts;
      const cube = cubeMap.get(cubeName);
      
      if (cube) {
        const isValidMember = cube.measures.has(memberName) || cube.dimensions.has(memberName);
        if (!isValidMember) {
          errors.push({
            message: `Filter member "${filter.member}" does not exist`,
            type: 'error',
            path: 'filters',
            suggestion: 'Check that the measure or dimension exists in the semantic model',
          });
        }
      }
    }

    // Validate operator
    const validOperators = [
      'equals',
      'notEquals',
      'contains',
      'notContains',
      'startsWith',
      'endsWith',
      'gt',
      'gte',
      'lt',
      'lte',
      'set',
      'notSet',
      'inDateRange',
      'notInDateRange',
      'beforeDate',
      'afterDate',
    ];

    if (filter.operator && !validOperators.includes(filter.operator)) {
      errors.push({
        message: `Invalid filter operator: "${filter.operator}"`,
        type: 'error',
        path: 'filters',
        suggestion: `Valid operators: ${validOperators.join(', ')}`,
      });
    }

    // Validate values
    if (!['set', 'notSet'].includes(filter.operator) && !filter.values) {
      errors.push({
        message: `Filter for "${filter.member}" with operator "${filter.operator}" requires values`,
        type: 'error',
        path: 'filters',
      });
    }
  }

  /**
   * Validate a time dimension
   */
  private validateTimeDimension(
    timeDim: any,
    cubeMap: Map<string, any>,
    errors: ValidationError[],
    warnings: ValidationError[]
  ): void {
    if (!timeDim.dimension) {
      errors.push({
        message: 'Time dimension is missing required field: dimension',
        type: 'error',
        path: 'timeDimensions',
      });
      return;
    }

    // Validate the dimension exists and is of type 'time'
    const parts = timeDim.dimension.split('.');
    if (parts.length === 2) {
      const [cubeName, dimensionName] = parts;
      const cube = cubeMap.get(cubeName);
      
      if (cube && !cube.dimensions.has(dimensionName)) {
        errors.push({
          message: `Time dimension "${timeDim.dimension}" does not exist`,
          type: 'error',
          path: 'timeDimensions',
        });
      }
    }

    // Validate granularity if provided
    if (timeDim.granularity) {
      const validGranularities = ['second', 'minute', 'hour', 'day', 'week', 'month', 'quarter', 'year'];
      if (!validGranularities.includes(timeDim.granularity)) {
        errors.push({
          message: `Invalid time granularity: "${timeDim.granularity}"`,
          type: 'error',
          path: 'timeDimensions',
          suggestion: `Valid granularities: ${validGranularities.join(', ')}`,
        });
      }
    }
  }

  /**
   * Validate a segment
   */
  private validateSegment(
    segment: string,
    cubeMap: Map<string, any>,
    errors: ValidationError[],
    warnings: ValidationError[]
  ): void {
    const parts = segment.split('.');
    
    if (parts.length !== 2) {
      errors.push({
        message: `Invalid segment reference: "${segment}". Must be in format "cubeName.segmentName"`,
        type: 'error',
        path: 'segments',
      });
      return;
    }

    const [cubeName, segmentName] = parts;
    const cube = cubeMap.get(cubeName);

    if (!cube) {
      errors.push({
        message: `Unknown cube: "${cubeName}"`,
        type: 'error',
        path: 'segments',
      });
      return;
    }

    if (!cube.segments.has(segmentName)) {
      errors.push({
        message: `Segment "${segment}" does not exist`,
        type: 'error',
        path: 'segments',
        suggestion: `Available segments in ${cubeName}: ${Array.from(cube.segments).join(', ') || 'none'}`,
      });
    }
  }

  /**
   * Validate an order item
   */
  private validateOrderItem(
    orderItem: any,
    cubeMap: Map<string, any>,
    querySpec: QuerySpec,
    errors: ValidationError[],
    warnings: ValidationError[]
  ): void {
    if (!orderItem.id) {
      errors.push({
        message: 'Order item is missing required field: id',
        type: 'error',
        path: 'order',
      });
      return;
    }

    // Check if the order member is in the query
    const allMembers = [
      ...(querySpec.measures || []),
      ...(querySpec.dimensions || []),
    ];

    if (!allMembers.includes(orderItem.id)) {
      warnings.push({
        message: `Order by "${orderItem.id}" is not in the query measures or dimensions`,
        type: 'warning',
        path: 'order',
        suggestion: 'Order by members should be included in the query',
      });
    }
  }
}
