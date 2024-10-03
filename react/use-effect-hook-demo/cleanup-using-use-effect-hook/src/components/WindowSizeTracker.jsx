import React, { useState, useEffect } from "react";

const WindowSizeTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect to handle window resize event
  useEffect(() => {
    console.log("Component mounted");
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on unmount
    return () => {
      console.log("Component unmounted, un-registering resize event");
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures this effect runs only once

  return (
    <div>
      <h1>Window Width: {windowWidth}</h1>
    </div>
  );
};

export default WindowSizeTracker;
