import React, { useState } from "react";
import fetchUserDetails from "./hooks/fetchUserDetails";

const App = () => {
  const [userId, setUserId] = useState(1); // Default user ID is 1
  const { data, loading, error } = fetchUserDetails(userId);

  return (
    <div>
      <h1>User Details</h1>
      <div>
        <label htmlFor="userId">User ID: </label>
        <input id="userId" type="text" placeholder="1" />
        &nbsp;&nbsp;
        <button
          onClick={(e) => {
            setUserId(document.getElementById("userId").value);
          }}
        >
          Fetch Details
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error || data === undefined ? (
        <p>
          <p style={{ color: "red" }}>Error: {error}</p>
        </p>
      ) : (
        <div>
          <h2>{data.name}</h2>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Website: {data.website}</p>
        </div>
      )}
    </div>
  );
};

export default App;
