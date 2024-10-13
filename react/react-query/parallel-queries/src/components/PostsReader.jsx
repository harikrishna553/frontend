import React from "react";
import { useQueries } from "react-query";

const fetchData = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function Posts() {
  const postIdsToRead = [1, 2, 3, 4, 5, 6, 7];

  // Create an array of query configurations with queryKey and queryFn
  const queries = postIdsToRead.map((id) => ({
    queryKey: ["post", id], // Unique query key
    queryFn: () => fetchData(id), // Fetch function
  }));

  // Execute the queries
  const results = useQueries(queries);

  return (
    <div>
      {results.map((result, index) => {
        if (result.isLoading) return <div key={index}>Loading...</div>;

        if (result.isError)
          return <div key={index}>Error: {result.error.message}</div>;

        // Get the queryKey from the original queries array
        const [queryTitle, postId] = queries[index].queryKey;
        return (
          <div key={index}>
            <h3>For the Post {postId}</h3>
            <div>{result.data.title}</div>
          </div>
        ); // Display the fetched data
      })}
    </div>
  );
}
