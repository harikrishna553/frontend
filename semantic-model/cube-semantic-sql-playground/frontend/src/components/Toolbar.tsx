import { Play, CheckCircle, FileDown, Trash2, Moon, Sun, Database } from 'lucide-react';
import * as yaml from 'js-yaml';
import { useAppStore } from '../store';
import { apiService } from '../services/api';
import { SqlDialect } from '../types';

const Toolbar = () => {
  const {
    semanticSpec,
    querySpec,
    semanticFormat,
    queryFormat,
    dialect,
    isDarkMode,
    isValidating,
    isGeneratingSql,
    setDialect,
    toggleDarkMode,
    setIsValidating,
    setIsGeneratingSql,
    setValidationResult,
    setSqlGenerationResult,
    setActiveTab,
    clearAll,
    loadSample,
  } = useAppStore();

  const parseQuerySpec = () => {
    if (queryFormat === 'yaml') {
      return yaml.load(querySpec) as object;
    }
    return JSON.parse(querySpec);
  };

  const handleValidate = async () => {
    setIsValidating(true);
    try {
      let querySpecObj;
      try {
        querySpecObj = parseQuerySpec();
      } catch (e) {
        setValidationResult({
          valid: false,
          errors: [{ message: `Invalid ${queryFormat.toUpperCase()} in Query Spec`, type: 'error' }],
          warnings: [],
        });
        setIsValidating(false);
        return;
      }

      const result = await apiService.validateAll(querySpecObj, semanticSpec, semanticFormat);
      
      if (result.semanticValidation && result.queryValidation) {
        const combinedErrors = [
          ...result.semanticValidation.errors,
          ...result.queryValidation.errors,
        ];
        const combinedWarnings = [
          ...result.semanticValidation.warnings,
          ...result.queryValidation.warnings,
        ];
        
        setValidationResult({
          valid: result.valid,
          errors: combinedErrors,
          warnings: combinedWarnings,
        });
      } else {
        setValidationResult(result.semanticValidation || result.queryValidation);
      }
      
      // Switch to validation tab
      setActiveTab('validation');
    } catch (error: any) {
      console.error('Validation error:', error);
      setValidationResult({
        valid: false,
        errors: [{ 
          message: error.response?.data?.message || error.message || 'Validation failed', 
          type: 'error' 
        }],
        warnings: [],
      });
    } finally {
      setIsValidating(false);
    }
  };

  const handleGenerateSql = async () => {
    setIsGeneratingSql(true);
    try {
      let querySpecObj;
      try {
        querySpecObj = parseQuerySpec();
      } catch (e) {
        setSqlGenerationResult({
          sql: `-- Error: Invalid ${queryFormat.toUpperCase()} in Query Spec`,
          dialect,
          compilerLogs: [`Invalid ${queryFormat.toUpperCase()} in Query Spec`],
        });
        setIsGeneratingSql(false);
        return;
      }

      const result = await apiService.generateSql(querySpecObj, semanticSpec, dialect, semanticFormat);
      setSqlGenerationResult(result);
      
      // Switch to SQL tab
      setActiveTab('sql');
    } catch (error: any) {
      console.error('SQL generation error:', error);
      setSqlGenerationResult({
        sql: `-- Error generating SQL:\n-- ${error.response?.data?.message || error.message}`,
        dialect,
        compilerLogs: [error.response?.data?.message || error.message],
      });
    } finally {
      setIsGeneratingSql(false);
    }
  };

  const handleLoadSample = async () => {
    try {
      const samples = await apiService.getSamples();
      if (samples.semanticModels?.ecommerce && samples.querySpecs?.basicQuery) {
        loadSample(
          samples.semanticModels.ecommerce.content,
          JSON.stringify(samples.querySpecs.basicQuery.content, null, 2)
        );
      }
    } catch (error) {
      console.error('Failed to load sample:', error);
    }
  };

  const dialects = [
    { value: SqlDialect.POSTGRES, label: 'PostgreSQL' },
    { value: SqlDialect.BIGQUERY, label: 'BigQuery' },
    { value: SqlDialect.SNOWFLAKE, label: 'Snowflake' },
    { value: SqlDialect.MYSQL, label: 'MySQL' },
    { value: SqlDialect.MSSQL, label: 'MS SQL Server' },
    { value: SqlDialect.DATABRICKS, label: 'Databricks' },
    { value: SqlDialect.CLICKHOUSE, label: 'ClickHouse' },
    { value: SqlDialect.ATHENA, label: 'Athena' },
    { value: SqlDialect.REDSHIFT, label: 'Redshift' },
  ];

  return (
    <div className="border-b border-border bg-background px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Database className="w-6 h-6 text-blue-500" />
        <h1 className="text-lg font-semibold">Cube Semantic SQL Playground</h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Dialect Selector */}
        <select
          value={dialect}
          onChange={(e) => setDialect(e.target.value as SqlDialect)}
          className="px-3 py-1.5 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {dialects.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>

        {/* Buttons */}
        <button
          onClick={handleValidate}
          disabled={isValidating}
          className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <CheckCircle className="w-4 h-4" />
          {isValidating ? 'Validating...' : 'Validate'}
        </button>

        <button
          onClick={handleGenerateSql}
          disabled={isGeneratingSql}
          className="px-4 py-1.5 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white rounded text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <Play className="w-4 h-4" />
          {isGeneratingSql ? 'Generating...' : 'Generate SQL'}
        </button>

        <button
          onClick={handleLoadSample}
          className="px-4 py-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <FileDown className="w-4 h-4" />
          Load Sample
        </button>

        <button
          onClick={clearAll}
          className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Clear
        </button>

        <button
          onClick={toggleDarkMode}
          className="p-2 border border-border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
