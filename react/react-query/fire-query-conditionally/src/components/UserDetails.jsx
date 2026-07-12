import { useQuery } from "react-query";

async function fetchUserDetails(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json(); // Parse the JSON body if the request is successful
}

export default function UserDetails({ userId }) {
  const { data, error, isLoading } = useQuery(
    ["user-details", userId],
    () => fetchUserDetails(userId),
    {
      // The query will only be enabled if userId is a valid integer
      enabled: userId > 0 && userId < 10,
    }
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div id="error">Error: {error.message}</div>;

  if (data === undefined) return <h3 className="notTrigger">Can't fetch</h3>;

  return (
    <div id="user-details">
      <ul>
        <li>name: {data.name}</li>
        <li>email: {data.email}</li>
        <li>phone: {data.phone}</li>
      </ul>
    </div>
  );
}
