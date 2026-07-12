import React from "react";
import { useQuery } from "react-query";

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json(); // Parse the JSON body if the request is successful
}

export default function UsersInfoPage() {
  // Using useQuery to fetch the data
  const { data, error, isLoading } = useQuery("users-info", fetchUsers, {
    refetchInterval: 5000,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div id="error">Error: {error.message}</div>;

  return (
    <>
      <h1>Users Informaiton</h1>

      <div id="usersInfo">
        {data.map((user) => {
          return (
            <ul>
              <li>username: {user.name} </li>
              <li>email: {user.email} </li>
              <li>phone: {user.phone} </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
