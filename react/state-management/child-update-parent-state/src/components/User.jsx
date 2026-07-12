import { useState } from "react";

export default function User({ user, setUsersInfo }) {
  const [editEnabled, setEditEnabled] = useState(true);
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      <h1>User Details</h1>
      {editEnabled && (
        <ul>
          <li>id : {userInfo.id}</li>
          <li>username : {userInfo.name}</li>
          <li>age : {userInfo.age}</li>
        </ul>
      )}

      {!editEnabled && (
        <div>
          <p>
            <label htmlFor="id">ID : </label>
            <input id="id" type="text" value={userInfo.id} disabled />
          </p>
          <p>
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              id="username"
              value={userInfo.name}
              onChange={(event) => {
                setUserInfo((currentUser) => ({
                  ...currentUser,
                  name: event.target.value,
                }));
              }}
            />
          </p>
          <p>
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              value={userInfo.age}
              onChange={(event) => {
                setUserInfo((currentUser) => ({
                  ...currentUser,
                  age: Number(event.target.value), // Ensure age is treated as a number
                }));
              }}
            />
          </p>
          <br /> <br />
          <button
            onClick={() => {
              setUsersInfo((currentUsers) =>
                currentUsers.map((currentUser) => {
                  if (currentUser.id === userInfo.id) {
                    return {
                      ...currentUser,
                      name: userInfo.name,
                      age: userInfo.age,
                    };
                  }
                  return currentUser;
                })
              );
              setEditEnabled(true);
            }}
          >
            Save
          </button>
        </div>
      )}

      {editEnabled && (
        <div>
          <button
            onClick={() => {
              setEditEnabled(false);
            }}
          >
            Edit
          </button>
          &nbsp;
          <button
            onClick={() => {
              setUsersInfo((currentUsers) =>
                currentUsers.filter(
                  (currentUser) => currentUser.id !== userInfo.id
                )
              );
            }}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}
