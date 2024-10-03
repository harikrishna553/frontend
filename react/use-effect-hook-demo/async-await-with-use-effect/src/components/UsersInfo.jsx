import React, { useState, useEffect } from "react";

export default function UsersInfo() {
  const [users, setUsers] = useState([]); // State to hold the users

  useEffect(() => {
    // This effect will run when the component is first rendered

    async function fetchUsers() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }

    fetchUsers();
  }, []); // The empty dependency array means this runs only on the first render (once)

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
