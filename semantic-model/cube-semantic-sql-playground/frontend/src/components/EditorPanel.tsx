import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import * as yaml from 'js-yaml';
import MonacoEditor from './MonacoEditor';
import { useAppStore, EditorFormat } from '../store';

const FORMAT_OPTIONS: { value: EditorFormat; label: string }[] = [
  { value: 'yaml', label: 'YAML' },
  { value: 'json', label: 'JSON' },
];

function convertContent(content: string, from: EditorFormat, to: EditorFormat): string {
  if (from === to || !content.trim()) return content;
  try {
    if (from === 'yaml' && to === 'json') {
      const parsed = yaml.load(content);
      return JSON.stringify(parsed, null, 2);
    } else {
      const parsed = JSON.parse(content);
      return yaml.dump(parsed, { indent: 2 });
    }
  } catch {
    // Conversion failed – keep existing content, just switch editor language
    return content;
  }
}

const FormatSelect = ({
  value,
  onChange,
}: {
  value: EditorFormat;
  onChange: (f: EditorFormat) => void;
}) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value as EditorFormat)}
    className="ml-2 px-2 py-0.5 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
    title="Select input format"
  >
    {FORMAT_OPTIONS.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ))}
  </select>
);

const EditorPanel = () => {
  const {
    semanticSpec,
    querySpec,
    semanticFormat,
    queryFormat,
    setSemanticSpec,
    setQuerySpec,
    setSemanticFormat,
    setQueryFormat,
    isDarkMode,
  } = useAppStore();

  const handleSemanticFormatChange = (newFormat: EditorFormat) => {
    if (newFormat === semanticFormat) return;
    setSemanticSpec(convertContent(semanticSpec, semanticFormat, newFormat));
    setSemanticFormat(newFormat);
  };

  const handleQueryFormatChange = (newFormat: EditorFormat) => {
    if (newFormat === queryFormat) return;
    setQuerySpec(convertContent(querySpec, queryFormat, newFormat));
    setQueryFormat(newFormat);
  };

  return (
    <div className="h-full">
      <PanelGroup direction="horizontal">
        {/* Left Panel - Semantic Model */}
        <Panel defaultSize={50} minSize={30}>
          <div className="h-full flex flex-col border-r border-border">
            <div className="px-4 py-2 border-b border-border bg-gray-50 dark:bg-gray-900 flex items-center">
              <h2 className="text-sm font-semibold">Semantic Model</h2>
              <FormatSelect value={semanticFormat} onChange={handleSemanticFormatChange} />
            </div>
            <div className="flex-1 overflow-hidden">
              <MonacoEditor
                value={semanticSpec}
                onChange={setSemanticSpec}
                language={semanticFormat}
                theme={isDarkMode ? 'vs-dark' : 'vs-light'}
              />
            </div>
          </div>
        </Panel>

        <PanelResizeHandle className="w-1 bg-border hover:bg-blue-500 transition-colors cursor-col-resize" />

        {/* Right Panel - Query Spec */}
        <Panel defaultSize={50} minSize={30}>
          <div className="h-full flex flex-col">
            <div className="px-4 py-2 border-b border-border bg-gray-50 dark:bg-gray-900 flex items-center">
              <h2 className="text-sm font-semibold">Query Spec</h2>
              <FormatSelect value={queryFormat} onChange={handleQueryFormatChange} />
            </div>
            <div className="flex-1 overflow-hidden">
              <MonacoEditor
                value={querySpec}
                onChange={setQuerySpec}
                language={queryFormat}
                theme={isDarkMode ? 'vs-dark' : 'vs-light'}
              />
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default EditorPanel;

