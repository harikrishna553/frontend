import { useState } from "react";

export default function UserRegistration() {
  const [myName, setUsername] = useState("");
  const [myEmail, setEmail] = useState("");
  let [disableRegistration, setDisableRegistration] = useState(true);

  function registerUser(event) {
    event.preventDefault();
    console.log(`User ${myName} registered successfully!!!!!`);
  }

  function handleNameChange(event) {
    setUsername(event.target.value);
    handleRegistraiton()
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    handleRegistraiton()
  }

  
  function handleRegistraiton(){
    setDisableRegistration(!myName || !myEmail);
  }

  return (
    <form method="POST" onSubmit={registerUser}>
      <label forname="username">Enter Username : </label>
      <input
        type="text"
        id="username"
        value={myName}
        onChange={handleNameChange}
      />
      <br />
      <br />

      <label forname="email">Enter Email : </label>
      <input
        type="text"
        id="email"
        value={myEmail}
        onChange={handleEmailChange}
      />
      <br />
      <br />

      <button disabled={disableRegistration}>Register</button>
    </form>
  );
}
