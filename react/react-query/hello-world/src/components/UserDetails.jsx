import React from "react";
import { useQuery } from "react-query";

const fetchUserDetails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function UserDetails() {
  // Using useQuery to fetch the data
  const { data, error, isLoading } = useQuery("user-details", fetchUserDetails);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>User Details</h1>
      <hr />
      <ul>
        <li>id: {data.id}</li>
        <li>name: {data.name}</li>
        <li>username: {data.username}</li>
        <li>email: {data.email}</li>
      </ul>
    </>
  );
}
