import React, { useState, useEffect } from 'react';

export default function UsersInfo() {
  const [users, setUsers] = useState([]);  // State to hold the users

  useEffect(() => {
    // This effect will run when the component is first rendered

    // Fetching data from an API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))  // Update the state with the fetched data
      .catch(error => console.error('Error fetching users:', error));

  }, []);  // The empty dependency array means this runs only on the first render (once)

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}