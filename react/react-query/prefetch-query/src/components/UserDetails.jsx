import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";

const fetchUserDetails = async () => {
  console.log("Fetching User Details");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  console.log("Fetched User Details Successfully!!!!!");
  return response.json();
};

export default function UserDetails() {
  const queryClient = useQueryClient();

  // Prefetch the query when the component mounts
  useEffect(() => {
    console.log("Calling prefetchQuery");
    queryClient.prefetchQuery("all-users", fetchUserDetails, {
      staleTime: 5 * 60 * 1000, // 5 minutes
    });
  }, [queryClient]);

  const [userRequested, setUserRequested] = useState(false);

  const { data, error, isLoading } = useQuery("all-users", fetchUserDetails, {
    enabled: userRequested, // Only run the query if userRequested is true
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {userRequested && (
        <div>
          {data.map((user) => (
            <ul key={user.id}>
              <li>id: {user.id}</li>
              <li>name: {user.name}</li>
              <li>email: {user.email}</li>
            </ul>
          ))}
        </div>
      )}

      {!userRequested && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setUserRequested(true);
          }}
        >
          <p>
            <button type="submit">Get All Users</button>
          </p>
        </form>
      )}
    </>
  );
}
