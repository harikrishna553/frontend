import { useAppStore } from '../store';
import MonacoEditor from './MonacoEditor';
import { AlertCircle, CheckCircle2, AlertTriangle, Code, FileText } from 'lucide-react';
import type { OutputTab } from '../store';

const OutputPanel = () => {
  const {
    generatedSql,
    validationResult,
    sqlGenerationResult,
    isDarkMode,
    activeTab,
    setActiveTab,
  } = useAppStore();

  const tabs = [
    { id: 'sql' as OutputTab, label: 'Generated SQL', icon: Code },
    { id: 'validation' as OutputTab, label: 'Validation', icon: CheckCircle2 },
    { id: 'logs' as OutputTab, label: 'Compiler Logs', icon: FileText },
  ];

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Tabs */}
      <div className="flex border-b border-border bg-gray-50 dark:bg-gray-900">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'sql' && (
          <div className="h-full">
            <MonacoEditor
              value={generatedSql || '-- No SQL generated yet\n-- Click "Generate SQL" to generate SQL from your query spec'}
              onChange={() => {}}
              language="sql"
              theme={isDarkMode ? 'vs-dark' : 'vs-light'}
              readOnly={true}
            />
          </div>
        )}

        {activeTab === 'validation' && (
          <div className="h-full overflow-auto p-4">
            {!validationResult ? (
              <div className="text-gray-500 text-sm">
                No validation results yet. Click "Validate" to validate your semantic model and query spec.
              </div>
            ) : (
              <div className="space-y-4">
                {/* Validation Status */}
                <div className={`flex items-center gap-2 p-3 rounded-lg ${
                  validationResult.valid 
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                }`}>
                  {validationResult.valid ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-medium">Validation Passed</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-medium">Validation Failed</span>
                    </>
                  )}
                </div>

                {/* Errors */}
                {validationResult.errors.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      Errors ({validationResult.errors.length})
                    </h3>
                    {validationResult.errors.map((error, index) => (
                      <div
                        key={index}
                        className="p-3 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded"
                      >
                        <p className="text-sm font-medium text-red-700 dark:text-red-400">
                          {error.message}
                        </p>
                        {error.path && (
                          <p className="text-xs text-red-600 dark:text-red-500 mt-1">
                            Path: {error.path}
                          </p>
                        )}
                        {error.suggestion && (
                          <p className="text-xs text-red-600 dark:text-red-500 mt-1 italic">
                            💡 {error.suggestion}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Warnings */}
                {validationResult.warnings.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      Warnings ({validationResult.warnings.length})
                    </h3>
                    {validationResult.warnings.map((warning, index) => (
                      <div
                        key={index}
                        className="p-3 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 rounded"
                      >
                        <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">
                          {warning.message}
                        </p>
                        {warning.path && (
                          <p className="text-xs text-yellow-600 dark:text-yellow-500 mt-1">
                            Path: {warning.path}
                          </p>
                        )}
                        {warning.suggestion && (
                          <p className="text-xs text-yellow-600 dark:text-yellow-500 mt-1 italic">
                            💡 {warning.suggestion}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="h-full overflow-auto p-4">
            {!sqlGenerationResult?.compilerLogs || sqlGenerationResult.compilerLogs.length === 0 ? (
              <div className="text-gray-500 text-sm">
                No compiler logs available. Generate SQL to see compiler logs.
              </div>
            ) : (
              <div className="space-y-2 font-mono text-sm">
                {sqlGenerationResult.compilerLogs.map((log, index) => (
                  <div key={index} className="text-gray-700 dark:text-gray-300">
                    [{index + 1}] {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputPanel;
