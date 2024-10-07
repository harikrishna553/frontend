import { useState, useEffect } from "react";

const fetchUserDetails = (userId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(`Fetching user details for ${userId}`);
      setLoading(true);
      setError(null);

      try {
        console.log(`Adding a delay fo 2 seconds`);
        // Simulate a delay using setTimeout
        await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const result = await response.json();
        console.log(`Setting the user details for the id ${userId}`);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  console.log(`Returned data : ${JSON.stringify(data)}, loading : ${loading} and error : ${error}`);
  return { data, loading, error };
};

export default fetchUserDetails;
