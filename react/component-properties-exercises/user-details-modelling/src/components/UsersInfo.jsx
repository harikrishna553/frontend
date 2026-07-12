import User from "./User";

export default function UsersInfo({ users }) {
  return (
    <>
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}
