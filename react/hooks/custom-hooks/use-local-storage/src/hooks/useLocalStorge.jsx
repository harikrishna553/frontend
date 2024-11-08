import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const existingInfo = localStorage.getItem(key);
      return existingInfo ? JSON.parse(existingInfo) : defaultValue;
    } catch (error) {
      console.error(`Error parsing localStorage key "${key}":`, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  // Optional clear function for removing the value from local storage
  const clear = () => {
    try {
      localStorage.removeItem(key);
      setValue(defaultValue);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  return [value, setValue, clear];
}
