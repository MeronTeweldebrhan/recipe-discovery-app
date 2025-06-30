import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
  const value = localStorage.getItem(key);
  if (!value) return initialValue;
  try {
    return JSON.parse(value);
  } catch (e) {
    // If value is not valid JSON, return as is
    return value;
  }
});


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;