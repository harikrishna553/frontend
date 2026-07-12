import { useEffect } from "react";

export default function useLogger(componentName) {
  useEffect(() => {
    console.log(`${componentName} mounted`);

    // Cleanup called when the component is unmounted
    return () => {
      console.log(`${componentName} unmounted`);
    };
  }, []); // Empty dependency array means this runs only on mount and unmount

  useEffect(() => {
    console.log(`${componentName} updated`);
  });
}
