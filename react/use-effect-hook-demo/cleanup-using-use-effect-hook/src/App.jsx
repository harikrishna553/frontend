import React, { useState } from "react";
import WindowSizeTracker from "./components/WindowSizeTracker";

const App = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "Hide Component" : "Show Component"}
      </button>
      {showComponent && <WindowSizeTracker />}
    </div>
  );
};

export default App;
