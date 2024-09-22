import PropTypes from "prop-types";

export default function UserDetails(props) {
  return (
    <div>
      <h1>User Information</h1>
      <ul>
        <li>Username : {props.username}</li>
        <li>Email : {props.email}</li>
        <li>Age : {props.age}</li>
      </ul>

      <h1>User Hobbies</h1>
      <ul>
        {props.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

UserDetails.propTypes = {
  username: PropTypes.string.isRequired, // name must be a string and required
  age: PropTypes.number.isRequired, // age must be a number and required
  email: PropTypes.string, // email must be a string and required
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired, // hobbies must be an array of strings
};