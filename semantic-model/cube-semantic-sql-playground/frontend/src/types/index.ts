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

export interface ValidationError {
  message: string;
  type: 'error' | 'warning';
  line?: number;
  column?: number;
  path?: string;
  suggestion?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationError[];
}

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

export interface Filter {
  member: string;
  operator: string;
  values: any[];
}

export interface TimeDimension {
  dimension: string;
  granularity?: 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  dateRange?: string | string[];
}

export interface OrderItem {
  id: string;
  desc?: boolean;
}

export interface SqlGenerationResult {
  sql: string;
  dialect: SqlDialect;
  executionPlan?: any;
  compilerLogs?: string[];
}

export interface Sample {
  name: string;
  format?: string;
  content: any;
}
