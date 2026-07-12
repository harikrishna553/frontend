import User from "./User";
import Address from "./Address";

export default function UsersInfo({ users }) {
  return (
    <>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <User {...user} />
              <Address {...user} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
