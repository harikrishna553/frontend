import { create } from 'zustand';
import { SqlDialect, ValidationResult, SqlGenerationResult } from '../types';

export type OutputTab = 'sql' | 'validation' | 'logs';
export type EditorFormat = 'yaml' | 'json';

interface AppState {
  // Editors content
  semanticSpec: string;
  querySpec: string;
  generatedSql: string;

  // Editor formats
  semanticFormat: EditorFormat;
  queryFormat: EditorFormat;

  // Settings
  dialect: SqlDialect;
  isDarkMode: boolean;
  activeTab: OutputTab;
  
  // Validation results
  validationResult: ValidationResult | null;
  sqlGenerationResult: SqlGenerationResult | null;
  
  // Loading states
  isValidating: boolean;
  isGeneratingSql: boolean;
  
  // Actions
  setSemanticSpec: (spec: string) => void;
  setQuerySpec: (spec: string) => void;
  setGeneratedSql: (sql: string) => void;
  setSemanticFormat: (format: EditorFormat) => void;
  setQueryFormat: (format: EditorFormat) => void;
  setDialect: (dialect: SqlDialect) => void;
  toggleDarkMode: () => void;
  setActiveTab: (tab: OutputTab) => void;
  setValidationResult: (result: ValidationResult | null) => void;
  setSqlGenerationResult: (result: SqlGenerationResult | null) => void;
  setIsValidating: (isValidating: boolean) => void;
  setIsGeneratingSql: (isGenerating: boolean) => void;
  loadSample: (semanticSpec: string, querySpec: string) => void;
  clearAll: () => void;
}

const defaultSemanticSpec = `cubes:
  - name: orders
    sql_table: orders
    
    measures:
      - name: count
        type: count
      
      - name: total_revenue
        sql: amount
        type: sum
        
      - name: average_order_value
        sql: amount
        type: avg
    
    dimensions:
      - name: id
        sql: id
        type: number
        primary_key: true
      
      - name: status
        sql: status
        type: string
      
      - name: created_at
        sql: created_at
        type: time
`;

const defaultQuerySpec = `{
  "measures": ["orders.total_revenue", "orders.count"],
  "dimensions": ["orders.status"],
  "timeDimensions": [
    {
      "dimension": "orders.created_at",
      "granularity": "day",
      "dateRange": "Last 30 days"
    }
  ],
  "order": [
    { "id": "orders.total_revenue", "desc": true }
  ],
  "limit": 100
}`;

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  semanticSpec: defaultSemanticSpec,
  querySpec: defaultQuerySpec,
  generatedSql: '',
  semanticFormat: 'yaml',
  queryFormat: 'json',
  dialect: SqlDialect.POSTGRES,
  isDarkMode: false,
  activeTab: 'sql',
  validationResult: null,
  sqlGenerationResult: null,
  isValidating: false,
  isGeneratingSql: false,

  // Actions
  setSemanticSpec: (spec) => set({ semanticSpec: spec }),
  
  setQuerySpec: (spec) => set({ querySpec: spec }),
  
  setGeneratedSql: (sql) => set({ generatedSql: sql }),

  setSemanticFormat: (format) => set({ semanticFormat: format }),

  setQueryFormat: (format) => set({ queryFormat: format }),
  
  setDialect: (dialect) => set({ dialect }),
  
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  
  setActiveTab: (tab) => set({ activeTab: tab }),
  
  setValidationResult: (result) => set({ validationResult: result }),
  
  setSqlGenerationResult: (result) => set({ 
    sqlGenerationResult: result,
    generatedSql: result?.sql || '',
  }),
  
  setIsValidating: (isValidating) => set({ isValidating }),
  
  setIsGeneratingSql: (isGenerating) => set({ isGeneratingSql: isGenerating }),
  
  loadSample: (semanticSpec, querySpec) => set({
    semanticSpec,
    querySpec,
    semanticFormat: 'yaml',
    queryFormat: 'json',
    generatedSql: '',
    validationResult: null,
    sqlGenerationResult: null,
  }),
  
  clearAll: () => set({
    semanticSpec: '',
    querySpec: '',
    generatedSql: '',
    validationResult: null,
    sqlGenerationResult: null,
  }),
}));
