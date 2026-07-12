import { Link, useParams } from "react-router-dom";

let users = [
  { id: "1", name: "Krishna", age: 36 },
  { id: "2", name: "Ram", age: 39 },
];

function getUser(id) {
  for (let user of users) {
    if (user.id === id) {
      return user;
    }
  }

  return undefined;
}

export default function UserProfile() {
  const { id } = useParams();
  let user = getUser(id);

  if (user === undefined) {
    return (
      <>
        <h3>User details not found</h3>
        <Link to="/">Click here to search users</Link>
      </>
    );
  }

  return (
    <>
      <h3>User Details</h3>
      <ul>
        <li>Id: {user.id}</li>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}</li>
      </ul>
      <br />
      <Link to="/">Click here to search users</Link>
    </>
  );
}
