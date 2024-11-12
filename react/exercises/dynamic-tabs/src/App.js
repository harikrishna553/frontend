import content from "./components/content.json";
import MultiTab from "./components/MultiTab";

function App() {
  return (
    <div className="rootContainer">
      <MultiTab tabsContent={content} />
    </div>
  );
}

export default App;
