import { useState } from "react";

export default function User({ user }) {
    const [userInfo, setUserInfo] = useState(user);
    const [isEditing, setIsEditing] = useState(false); // Default to non-edit mode

    // Save user details or handle form validation
    function saveUserDetails(event) {
        event.preventDefault();
        setIsEditing(false); // Switch back to view mode after saving
        // Add logic to persist data if necessary
    }

    // JSX for displaying or editing user info
    const contentToDisplay = isEditing ? (
        <>
            <label>Username : </label>
            <input
                type="text"
                value={userInfo.name}
                onChange={(event) => setUserInfo({
                    ...userInfo, 
                    name: event.target.value,
                })}
            />
            <br />
            <label>Email : </label>
            <input
                type="email"
                value={userInfo.email}
                onChange={(event) => setUserInfo({
                    ...userInfo, 
                    email: event.target.value,
                })}
            />
            <br />
            <label>Age : </label>
            <input
                type="text"
                value={userInfo.age}
                onChange={(event) => setUserInfo({
                    ...userInfo, 
                    age: event.target.value,
                })}
            />
            <br />
        </>
    ) : (
        <>
            <label>Username : {userInfo.name}</label>
            <br />
            <label>Email : {userInfo.email}</label>
            <br />
            <label>Age : {userInfo.age}</label>
            <br />
        </>
    );

    return (
        <form onSubmit={saveUserDetails}>
            {contentToDisplay}
            <br />
            {/* Toggle between Edit and Save button */}
            <button type="button" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </form>
    );
}
