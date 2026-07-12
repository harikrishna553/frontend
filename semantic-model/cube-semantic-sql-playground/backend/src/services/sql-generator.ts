import { QuerySpec, SqlDialect, SqlGenerationResult } from '../types';
import * as yaml from 'js-yaml';
import { prepareCompiler, PostgresQuery, MysqlQuery, MssqlQuery } from '@cubejs-backend/schema-compiler';

/**
 * Resolve Cube preset date-range strings (e.g. "Last 30 days") to a concrete
 * [from, to] ISO-date pair that the schema-compiler query classes can consume.
 * If dateRange is already an array it is returned unchanged.
 */
function resolveDateRange(dateRange: string | string[]): string[] {
  if (Array.isArray(dateRange)) return dateRange;

  const fmt = (d: Date) => d.toISOString().split('T')[0];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const preset = dateRange.toLowerCase().trim();

  if (preset === 'today') return [fmt(today), fmt(today)];

  if (preset === 'yesterday') {
    const d = new Date(today);
    d.setDate(d.getDate() - 1);
    return [fmt(d), fmt(d)];
  }

  const lastNDays = preset.match(/^last (\d+) days?$/);
  if (lastNDays) {
    const n = parseInt(lastNDays[1], 10);
    const from = new Date(today);
    from.setDate(from.getDate() - n + 1);
    return [fmt(from), fmt(today)];
  }

  if (preset === 'last week') {
    const dow = today.getDay() || 7; // Mon=1…Sun=7
    const mon = new Date(today);
    mon.setDate(today.getDate() - dow - 6);
    const sun = new Date(mon);
    sun.setDate(mon.getDate() + 6);
    return [fmt(mon), fmt(sun)];
  }

  if (preset === 'this week') {
    const dow = today.getDay() || 7;
    const mon = new Date(today);
    mon.setDate(today.getDate() - dow + 1);
    return [fmt(mon), fmt(today)];
  }

  if (preset === 'last month') {
    const from = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const to = new Date(today.getFullYear(), today.getMonth(), 0);
    return [fmt(from), fmt(to)];
  }

  if (preset === 'this month') {
    const from = new Date(today.getFullYear(), today.getMonth(), 1);
    return [fmt(from), fmt(today)];
  }

  if (preset === 'last quarter') {
    const q = Math.floor(today.getMonth() / 3);
    const from = new Date(today.getFullYear(), (q - 1) * 3, 1);
    const to = new Date(today.getFullYear(), q * 3, 0);
    return [fmt(from), fmt(to)];
  }

  if (preset === 'this quarter') {
    const q = Math.floor(today.getMonth() / 3);
    const from = new Date(today.getFullYear(), q * 3, 1);
    return [fmt(from), fmt(today)];
  }

  if (preset === 'last year') {
    const from = new Date(today.getFullYear() - 1, 0, 1);
    const to = new Date(today.getFullYear() - 1, 11, 31);
    return [fmt(from), fmt(to)];
  }

  if (preset === 'this year') {
    const from = new Date(today.getFullYear(), 0, 1);
    return [fmt(from), fmt(today)];
  }

  // Unrecognised — return as single-element fallback (will surface a clear SQL error)
  return [dateRange, dateRange];
}

// These query classes are internal to schema-compiler but stable within 0.35.x
/* eslint-disable @typescript-eslint/no-var-requires */
const { BigqueryQuery } = require('@cubejs-backend/schema-compiler/dist/src/adapter/BigqueryQuery');
const { SnowflakeQuery } = require('@cubejs-backend/schema-compiler/dist/src/adapter/SnowflakeQuery');
const { ClickHouseQuery } = require('@cubejs-backend/schema-compiler/dist/src/adapter/ClickHouseQuery');
const { RedshiftQuery } = require('@cubejs-backend/schema-compiler/dist/src/adapter/RedshiftQuery');
const { PrestodbQuery } = require('@cubejs-backend/schema-compiler/dist/src/adapter/PrestodbQuery'); // Athena
const { HiveQuery } = require('@cubejs-backend/schema-compiler/dist/src/adapter/HiveQuery');         // Databricks
/* eslint-enable @typescript-eslint/no-var-requires */

function getQueryClass(dialect: SqlDialect): any {
  switch (dialect) {
    case SqlDialect.POSTGRES:    return PostgresQuery;
    case SqlDialect.BIGQUERY:    return BigqueryQuery;
    case SqlDialect.SNOWFLAKE:   return SnowflakeQuery;
    case SqlDialect.MYSQL:       return MysqlQuery;
    case SqlDialect.MSSQL:       return MssqlQuery;
    case SqlDialect.DATABRICKS:  return HiveQuery;
    case SqlDialect.CLICKHOUSE:  return ClickHouseQuery;
    case SqlDialect.ATHENA:      return PrestodbQuery;
    case SqlDialect.REDSHIFT:    return RedshiftQuery;
    default:                     return PostgresQuery;
  }
}

function getAdapterName(dialect: SqlDialect): string {
  switch (dialect) {
    case SqlDialect.POSTGRES:    return 'postgres';
    case SqlDialect.BIGQUERY:    return 'bigquery';
    case SqlDialect.SNOWFLAKE:   return 'snowflake';
    case SqlDialect.MYSQL:       return 'mysql';
    case SqlDialect.MSSQL:       return 'mssql';
    case SqlDialect.DATABRICKS:  return 'hive';
    case SqlDialect.CLICKHOUSE:  return 'clickhouse';
    case SqlDialect.ATHENA:      return 'prestodb';
    case SqlDialect.REDSHIFT:    return 'redshift';
    default:                     return 'postgres';
  }
}

/**
 * Service for generating SQL from query specs using the real Cube compiler pipeline
 */
export class SqlGenerator {
  /**
   * Generate SQL from a query spec and semantic model using Cube's prepareCompiler + dialect query class
   */
  async generateSql(
    querySpec: QuerySpec,
    semanticSpec: string,
    dialect: SqlDialect,
    format: 'yaml' | 'json' = 'yaml'
  ): Promise<SqlGenerationResult> {
    const compilerLogs: string[] = [];

    try {
      // Normalise the semantic spec to YAML for the Cube compiler
      let yamlContent: string;
      if (format === 'json') {
        const parsed = JSON.parse(semanticSpec);
        yamlContent = yaml.dump(parsed);
      } else {
        yamlContent = semanticSpec;
      }

      // Build an in-memory SchemaFileRepository
      const repo = {
        localPath: () => '/tmp/cube-playground',
        dataSchemaFiles: () => Promise.resolve([{ fileName: 'model.yml', content: yamlContent }]),
      };

      const adapter = getAdapterName(dialect);
      compilerLogs.push(`Compiling semantic model (adapter: ${adapter})…`);

      const { compiler, cubeEvaluator, joinGraph } = prepareCompiler(repo as any, { adapter });
      await compiler.compile();
      compilerLogs.push('Semantic model compiled successfully.');

      // Guard: querySpec must be a plain object, not an array or primitive.
      // A common mistake is pasting a cube *measure definition* (an array) into
      // the Query Spec editor instead of a proper query object.
      if (Array.isArray(querySpec) || typeof querySpec !== 'object' || querySpec === null) {
        throw new Error(
          'Invalid Query Spec format. Expected a JSON/YAML object with fields like ' +
          '"measures", "dimensions", etc. ' +
          'Example: { "measures": ["orders.total_revenue"] }\n\n' +
          'You may have accidentally pasted a Cube measure definition instead of a query spec.'
        );
      }

      // Build Cube query options from the query spec
      const queryOptions: Record<string, any> = {};
      if (querySpec.measures?.length)        queryOptions.measures        = querySpec.measures;
      if (querySpec.dimensions?.length)      queryOptions.dimensions      = querySpec.dimensions;
      if (querySpec.filters?.length)         queryOptions.filters         = querySpec.filters;
      if (querySpec.timeDimensions?.length) {
        queryOptions.timeDimensions = querySpec.timeDimensions.map((td) => ({
          ...td,
          ...(td.dateRange ? { dateRange: resolveDateRange(td.dateRange as string | string[]) } : {}),
        }));
      }
      if (querySpec.segments?.length)        queryOptions.segments        = querySpec.segments;
      if (querySpec.limit  !== undefined)    queryOptions.rowLimit        = querySpec.limit;
      if (querySpec.offset !== undefined)    queryOptions.offset          = querySpec.offset;
      // Always set a timezone. When omitted from the query spec the Cube schema-compiler
      // resolves its internal `this.timezone` as JavaScript `undefined`, which then gets
      // serialised verbatim into the SQL string as AT TIME ZONE 'undefined' — causing a
      // Postgres error: "time zone \"undefined\" not recognized".
      queryOptions.timezone = querySpec.timezone ?? 'UTC';
      // BaseQuery.orderHashToString expects array of {id, desc} objects — pass directly
      if (querySpec.order?.length)           queryOptions.order           = querySpec.order;

      // Guard: at least one of measures / dimensions / timeDimensions / segments must be
      // present, otherwise the Cube schema-compiler will try to build a join graph for an
      // empty set of cubes, receive null from the graph traversal, and crash reading
      // `.joins` on that null — producing the cryptic "Cannot read properties of null
      // (reading 'joins')" error.
      const hasQueryableMembers =
        queryOptions.measures?.length ||
        queryOptions.dimensions?.length ||
        queryOptions.timeDimensions?.length ||
        queryOptions.segments?.length;

      if (!hasQueryableMembers) {
        throw new Error(
          'Query Spec must include at least one measure, dimension, timeDimension, or segment. ' +
          'Reference members using the "cubeName.memberName" format.\n\n' +
          'Example:\n' +
          '  { "measures": ["orders.total_revenue"], "dimensions": ["orders.status"] }'
        );
      }

      // Instantiate the dialect-specific query class and build SQL
      const QueryClass = getQueryClass(dialect);
      const query = new QueryClass({ joinGraph, cubeEvaluator, compiler }, queryOptions);

      compilerLogs.push('Building SQL…');
      const [rawSql, params]: [string, any[]] = query.buildSqlAndParams();
      compilerLogs.push(`SQL built. ${params.length} bound parameter(s).`);

      // Interpolate parameters so the output is human-readable
      const sql = this.interpolateParams(rawSql, params, dialect);

      return {
        sql,
        dialect,
        compilerLogs,
        executionPlan: {
          measures:       querySpec.measures       || [],
          dimensions:     querySpec.dimensions     || [],
          filters:        querySpec.filters        || [],
          timeDimensions: querySpec.timeDimensions || [],
          parameterCount: params.length,
        },
      };
    } catch (error: any) {
      throw new Error(`SQL generation failed: ${error.message}`);
    }
  }

  /**
   * Replace parameterised placeholders with literal values for friendly display.
   *
   * Cube dialect placeholders:
   *   PostgreSQL / Redshift  → $1, $2, …
   *   MySQL / ClickHouse     → ?
   *   MSSQL                  → @p1, @p2, …
   *   Others (BigQuery etc.) → ? (positional)
   */
  private interpolateParams(sql: string, params: any[], dialect: SqlDialect): string {
    if (params.length === 0) return sql;

    let result = sql;

    if (dialect === SqlDialect.POSTGRES || dialect === SqlDialect.REDSHIFT) {
      // Replace $N in reverse order to avoid $1 matching $10
      for (let i = params.length; i >= 1; i--) {
        result = result.split(`$${i}`).join(this.literalParam(params[i - 1]));
      }
    } else if (dialect === SqlDialect.MSSQL) {
      for (let i = params.length; i >= 1; i--) {
        result = result.split(`@p${i}`).join(this.literalParam(params[i - 1]));
      }
    } else {
      // ? style
      let idx = 0;
      result = result.replace(/\?/g, () =>
        idx < params.length ? this.literalParam(params[idx++]) : '?'
      );
    }

    return result;
  }

  private literalParam(value: any): string {
    if (value === null || value === undefined) return 'NULL';
    if (typeof value === 'number') return String(value);
    if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE';
    return `'${String(value).replace(/'/g, "''")}'`;
  }
}
