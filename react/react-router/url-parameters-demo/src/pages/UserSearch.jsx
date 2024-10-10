import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserSearch() {
  const [userId, updateUserId] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let url = "/user-profile/" + userId;
          navigate(url);
        }}
      >
        <label htmlFor="userId">Enter User Id</label> &nbsp;&nbsp;
        <input
          type="text"
          placeholder="userId"
          value={userId}
          onChange={(event) => {
            updateUserId(event.target.value);
          }}
        />
        <br />
        <br />
        <button>Fetch User Details</button>
      </form>
    </>
  );
}
