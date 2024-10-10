import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate successful login
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    // Redirect to welcome page
    return <Navigate to="/welcome" />;
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <p>
          <label htmlFor="username">Enter Username : </label>
          <input type="text" placeholder="Username" id="usernane" required />
        </p>

        <p>
          <label htmlFor="password">Enter Password : </label>
          <input type="password" placeholder="Password" required />
        </p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
