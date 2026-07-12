/**
 * Supported SQL dialects for query generation
 */
export enum SqlDialect {
  POSTGRES = 'postgres',
  BIGQUERY = 'bigquery',
  SNOWFLAKE = 'snowflake',
  MYSQL = 'mysql',
  MSSQL = 'mssql',
  DATABRICKS = 'databricks',
  CLICKHOUSE = 'clickhouse',
  ATHENA = 'athena',
  REDSHIFT = 'redshift',
}

/**
 * Validation error details
 */
export interface ValidationError {
  message: string;
  type: 'error' | 'warning';
  line?: number;
  column?: number;
  path?: string;
  suggestion?: string;
}

/**
 * Validation result
 */
export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationError[];
}

/**
 * Query specification
 */
export interface QuerySpec {
  measures?: string[];
  dimensions?: string[];
  filters?: Filter[];
  timeDimensions?: TimeDimension[];
  segments?: string[];
  limit?: number;
  offset?: number;
  order?: OrderItem[];
  timezone?: string;
}

/**
 * Filter specification
 */
export interface Filter {
  member: string;
  operator: FilterOperator;
  values: any[];
}

export type FilterOperator =
  | 'equals'
  | 'notEquals'
  | 'contains'
  | 'notContains'
  | 'startsWith'
  | 'endsWith'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  | 'set'
  | 'notSet'
  | 'inDateRange'
  | 'notInDateRange'
  | 'beforeDate'
  | 'afterDate';

/**
 * Time dimension specification
 */
export interface TimeDimension {
  dimension: string;
  granularity?: 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  dateRange?: string | string[];
}

/**
 * Order specification
 */
export interface OrderItem {
  id: string;
  desc?: boolean;
}

/**
 * SQL generation result
 */
export interface SqlGenerationResult {
  sql: string;
  dialect: SqlDialect;
  executionPlan?: any;
  compilerLogs?: string[];
}

/**
 * Semantic model (Cube schema)
 */
export interface SemanticModel {
  cubes?: CubeDefinition[];
  views?: ViewDefinition[];
}

/**
 * Cube definition
 */
export interface CubeDefinition {
  name: string;
  sql?: string;
  sql_table?: string;
  extends?: string;
  measures?: MeasureDefinition[];
  dimensions?: DimensionDefinition[];
  segments?: SegmentDefinition[];
  joins?: JoinDefinition[];
  pre_aggregations?: any[];
}

/**
 * View definition
 */
export interface ViewDefinition {
  name: string;
  cubes?: any[];
  includes?: any[];
}

/**
 * Measure definition
 */
export interface MeasureDefinition {
  name: string;
  sql?: string;
  type: 'count' | 'sum' | 'avg' | 'min' | 'max' | 'countDistinct' | 'countDistinctApprox' | 'number';
  filters?: any[];
  drill_members?: string[];
  rolling_window?: any;
}

/**
 * Dimension definition
 */
export interface DimensionDefinition {
  name: string;
  sql: string;
  type: 'string' | 'number' | 'time' | 'boolean' | 'geo';
  primary_key?: boolean;
  shown?: boolean;
  case?: any;
}

/**
 * Segment definition
 */
export interface SegmentDefinition {
  name: string;
  sql: string;
}

/**
 * Join definition
 */
export interface JoinDefinition {
  name: string;
  sql: string;
  relationship: 'one_to_one' | 'one_to_many' | 'many_to_one';
}
