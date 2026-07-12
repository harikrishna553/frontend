import { useQuery, useQueryClient } from "react-query";

async function fetchFirstUserDetails() {
  console.log("Fetching user details from the server...");

  // Simulate network delay with a 3-second timer
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      resolve(data);
    }, 1000); // 3-second delay
  });
}

export default function UserInfo() {
  const queryClient = useQueryClient();

  const { data, error, isLoading, isFetching } = useQuery(
    "first-user-details",
    fetchFirstUserDetails
  );

  if (isLoading) return <div>Loading initial data...</div>;

  if (error) return <div>Error: {error.message}</div>;

  const handleInvalidate = () => {
    console.log("Invalidating query and triggering refetch...");
    queryClient.invalidateQueries("first-user-details");
  };

  return (
    <>
      <h3>User details for the id 1</h3>
      <ul>
        <li>Name: {data.name}</li>
        <li>Email: {data.email}</li>
      </ul>

      <button onClick={handleInvalidate}>Invalidate & Refetch</button>

      <div style={{ marginTop: "20px" }}>
        <strong>Query Status:</strong>
        <ul>
          <li>{isFetching ? "Refetching..." : "Data is up-to-date"}</li>
        </ul>
      </div>
    </>
  );
}
