import React, { useState } from "react";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    alert("Comment Posted Successfully Successfully!!!!");

    setInputValue("");
  };

  // Handler for input change to update state
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form method="post" action="/api/comments" onSubmit={handleLogin}>
      <label htmlFor="comment">Enter Your Comment</label>
      <br />
      <input
        type="text"
        id="comment"
        name="comment"
        value={inputValue}
        onChange={handleInputChange}
        required
      />
      <br />
      <br />

      <button type="submit">Post Comment</button>
    </form>
  );
}
