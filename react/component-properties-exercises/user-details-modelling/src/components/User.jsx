export default function User({ user }) {
  return (
    <>
      <li>
        <p>username : {user.name}</p>
        <p>email : {user.email}</p>
        <p>age : {user.age}</p>
      </li>
    </>
  );
}
