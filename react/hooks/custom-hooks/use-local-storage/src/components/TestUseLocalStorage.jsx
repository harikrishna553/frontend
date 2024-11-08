import useLocalStorage from "../hooks/useLocalStorge";
import "./styles.css";

export default function TestUseLocalStorage() {
  const [appName, setAppName] = useLocalStorage("appName", "none");
  const [appVersion, setAppVersion] = useLocalStorage("appVersion", "1.0");

  return (
    <div className="container">
      <div className="app">
        <div className="appName">
          <label htmlFor="appName">Enter Application Name</label>
          <input
            type="text"
            value={appName}
            id="appName"
            onChange={(event) => {
              setAppName(event.target.value);
            }}
          />
        </div>

        <div className="appVersion">
          <label htmlFor="appVersion">Enter Application Version</label>
          <input
            type="text"
            value={appVersion}
            id="appVersion"
            onChange={(event) => {
              setAppVersion(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
