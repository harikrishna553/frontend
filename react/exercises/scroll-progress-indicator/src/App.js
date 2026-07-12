import CountriesInfo from "./components/CountriesInfo";
import { useEffect, useState } from "react";
import "./components/styles.css";

function App() {
  const [scrollPercent, setScrollPercent] = useState(0);

  function handleScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    console.log("Scrolled Percentage:", scrollPercent.toFixed(2) + "%");
    setScrollPercent(scrollPercent);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="percentTracker">
        <div
          style={{
            backgroundColor: "lightgreen",
            height: "100%",
            width: `${scrollPercent}%`,
            fontSize: "1.2em",
          }}
        >
          {Math.ceil(scrollPercent)}%
        </div>
      </div>
      <CountriesInfo />
    </>
  );
}

export default App;
