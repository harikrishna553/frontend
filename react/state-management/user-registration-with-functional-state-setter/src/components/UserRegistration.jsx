import { useState } from "react";

export default function UserRegistration() {
  const [userDetails, setUserDetails] = useState({
    myName: "",
    myEmail: "",
    disableRegistration: true,
  });

  function handleNameChange(event) {
    setUserDetails((prevState) => ({
      ...prevState,
      myName: event.target.value,
      disableRegistration: !event.target.value || !prevState.myEmail,
    }));
  }

  function handleEmailChange(event) {
    setUserDetails((prevState) => ({
      ...prevState,
      myEmail: event.target.value,
      disableRegistration: !prevState.myName || !event.target.value,
    }));
  }

  function registerUser(event) {
    event.preventDefault();

    console.log(JSON.stringify(userDetails));
  }

  return (
    <form method="POST" onSubmit={registerUser}>
      <label forname="username">Enter Username : </label>
      <input
        type="text"
        id="username"
        value={userDetails.myName}
        onChange={handleNameChange}
      />
      <br />
      <br />

      <label forname="email">Enter Email : </label>
      <input
        type="email"
        id="email"
        value={userDetails.myEmail}
        onChange={handleEmailChange}
      />
      <br />
      <br />

      <button disabled={userDetails.disableRegistration}>Register</button>
    </form>
  );
}
