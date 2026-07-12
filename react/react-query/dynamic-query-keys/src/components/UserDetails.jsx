import React from "react";
import { useQuery } from "react-query";

async function fetchUserDetailsById(userId) {
  console.log(`Fetching user details for the id: ${userId}`);

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );

  if (!response.ok) {
    // Use response.status to check the status code
    if (response.status === 404) {
      throw new Error("Not Found");
    }
    throw new Error("Network response was not ok");
  }

  return response.json(); // Parse the JSON body if the request is successful
}

export default function UserDetails({ userId }) {
  // Using useQuery to fetch the data
  const { data, error, isLoading } = useQuery(
    ["userDetails", userId],
    () => fetchUserDetailsById(userId),
    {
      retry: (failureCount, error) => {
        // Stop retrying if the error is a 404 (Not Found)
        if (error.message === "Not Found") {
          return false; // No retries for 404
        }
        return true; // Retry for other errors (default behavior)
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div id="error">Error: {error.message}</div>;

  return (
    <div id="userDetails">
      <h1>User Details</h1>
      <hr />
      <ul>
        <li>id: {data.id}</li>
        <li>name: {data.name}</li>
        <li>username: {data.username}</li>
        <li>email: {data.email}</li>
      </ul>
    </div>
  );
}