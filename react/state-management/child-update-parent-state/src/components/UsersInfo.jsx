import User from "./User";
import { useState } from "react";

export default function UserList({ users }) {
  const [usersInfo, setUsersInfo] = useState(users);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // Validate the input fields before adding a user
          if (!username || !age) {
            alert("Username and Age are required!");
            return;
          }
          if (isNaN(age)) {
            alert("Age must be a number");
            return;
          }

          if (age < 18 && age > 60) {
            alert("Age must be in between 18 and 60");
          }

          setUsersInfo((currentUsers) => {
            const newId = currentUsers.length + 1;
            return [
              ...currentUsers,
              { id: newId, name: username, age: Number(age) }, // Ensure age is a number
            ];
          });
          // Clear input fields after user is added
          setUsername("");
          setAge("");
        }}
      >
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        &nbsp;
        <label htmlFor="age">Age : </label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        &nbsp;
        <button type="submit">Add User</button>
      </form>

      {usersInfo.map((user) => (
        <div key={user.id}>
          <User user={user} setUsersInfo={setUsersInfo} />
        </div>
      ))}
    </>
  );
}
