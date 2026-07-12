import { useState } from "react";
import CounterChildApp from "./CounterChildApp";

let projectNames = ["Nebula", "Orion", "Nexus", "Lyra", "Zypher"];
let projectIndex = -1;
let keyCount = 0;

function getProjectName() {
  if (projectIndex == projectNames.length - 1) {
    projectIndex = -1;
  }

  projectIndex++;
  return projectNames[projectIndex];
}

function updateKey() {
  keyCount++;
}

export default function CounterParentApp() {
  const [pjtName, setPjtName] = useState(getProjectName());
  const [appKey, setAppKey] = useState(keyCount);

  return (
    <div className="container">
      <div className="demoApp">
        <CounterChildApp name={pjtName} key={appKey} />

        <div className="buttonGroup">
          <button
            onClick={() => {
              setPjtName(getProjectName());
            }}
          >
            Update Name
          </button>

          <button
            onClick={() => {
              updateKey();
              setAppKey(keyCount);
            }}
          >
            Update Key
          </button>
        </div>
      </div>
    </div>
  );
}
