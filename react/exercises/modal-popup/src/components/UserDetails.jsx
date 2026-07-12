import { useState } from "react";
import "./styles.css";

export default function UserDetails({ user, address }) {
  const [showUserDetails, setShowUserDetails] = useState(false);

  function handleShowUserDetails() {
    setShowUserDetails((prevValue) => !prevValue);
  }

  return (
    <div className="user-container">
      {!showUserDetails && (
        <button onClick={handleShowUserDetails}>Show User Details</button>
      )}

      {showUserDetails && (
        <div className="user-details">
          <div className="title">
            User Information
            <span className="close-button" onClick={handleShowUserDetails}>
              &times;
            </span>
          </div>

          <div className="user-basic-info">
            <ul>
              <li>Name: {user.name}</li>
              <li>Age: {user.age}</li>
              <li>Email: {user.email}</li>
            </ul>
          </div>

          <div className="user-address">
            <address>
              {address.street}, {address.city}, {address.state},{" "}
              {address.country}
            </address>
          </div>
        </div>
      )}
    </div>
  );
}
