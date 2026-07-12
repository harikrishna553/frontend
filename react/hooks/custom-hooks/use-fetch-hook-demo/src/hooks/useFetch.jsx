import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      console.log(`Fetching Data from the url ${url}`);

      const response = await fetch(url);

      if (!response.ok) {
        setError("Response Is Not OK....");
        return;
      }

      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("Triggering the url " + url);
    fetchData();
  }, [url]);

  return { loading, error, data };
}
