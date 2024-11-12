import React from "react";
import GridLayout from "react-grid-layout";
import "./App.css";

function App() {
  // Define a layout with `x`, `y`, `w`, `h` (position and dimensions).
  const layout = [
    { i: "1", x: 0, y: 0, w: 2, h: 2 },
    { i: "2", x: 2, y: 0, w: 2, h: 2 },
    { i: "3", x: 0, y: 1, w: 2, h: 2 },
    { i: "4", x: 2, y: 1, w: 2, h: 2 },
  ];  

  return (
    <div className="app">
      <h1>Hello World Grid Layout</h1>
      <GridLayout
        className="layout"
        layout={layout}
        cols={6}
        rowHeight={100}
        width={1000}
        style={{
          width: "60vw",
          marginLeft: 20,
        }}
      >
        <div key="1" className="grid-item grid-item-1">
          Item 1
        </div>
        <div key="2" className="grid-item grid-item-2">
          Item 2
        </div>
        <div key="3" className="grid-item grid-item-3">
          Item 3
        </div>
        <div key="4" className="grid-item grid-item-4">
          Item 4
        </div>
      </GridLayout>
    </div>
  );
}

export default App;
