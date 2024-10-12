import { useState } from "react";
import UserDetails from "./UserDetails";

export default function UserSearch() {
  const [userId, setUserId] = useState("");
  const [submittedUserId, setSubmittedUserId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedUserId(userId);
  };

  return (
    <div id="searchForm">
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="userId">Enter User Id</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)} // Update state on input change
            required
          />
        </p>

        <p>
          <button type="submit">Fetch User Details</button>
        </p>
      </form>

      {/* Ensure non-empty value before rendering UserDetails */}
      {submittedUserId && <UserDetails userId={submittedUserId} />}
    </div>
  );
}
