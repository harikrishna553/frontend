import { useState } from "react";
import UserDetails from "./UserDetails";

export default function UserSearch() {
  const [userId, updateUserId] = useState();
  const [userIdoFtech, updateUserIdToFech] = useState(null);

  return (
    <div id="user-search">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          updateUserIdToFech(userId);
        }}
      >
        <p>
          <label htmlFor="userId">Enter UserId</label>
          <input
            type="number"
            id="userId"
            value={userId}
            onChange={(event) => {
              updateUserId(event.target.value);
            }}
          />
        </p>

        <button>Fetch User Details</button>
      </form>

      {userIdoFtech !== null && <UserDetails userId={userIdoFtech} />}
    </div>
  );
}
