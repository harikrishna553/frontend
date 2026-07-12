import { useEffect } from 'react';
import { useAppStore } from './store';
import Toolbar from './components/Toolbar';
import EditorPanel from './components/EditorPanel';
import OutputPanel from './components/OutputPanel';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';

function App() {
  const isDarkMode = useAppStore((state) => state.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`w-screen h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground h-full flex flex-col">
        {/* Toolbar */}
        <Toolbar />

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <PanelGroup direction="vertical">
            {/* Top Panel - Editors */}
            <Panel defaultSize={65} minSize={30}>
              <EditorPanel />
            </Panel>

            <PanelResizeHandle className="h-1 bg-border hover:bg-blue-500 transition-colors cursor-row-resize" />

            {/* Bottom Panel - Output */}
            <Panel defaultSize={35} minSize={20}>
              <OutputPanel />
            </Panel>
          </PanelGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
