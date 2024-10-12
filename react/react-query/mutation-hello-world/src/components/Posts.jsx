import { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";

async function getAllPosts() {
  console.log(`Triggered to get all the posts`);

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

async function createPost(post) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response.status !== 201) {
      throw new Error("Error occurred while creating the post");
    }

    return response.json();
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export default function Posts() {
  const { data, error, isLoading } = useQuery("all-posts", getAllPosts, {
    refetchOnWindowFocus: false, // Disable refetching on window focus
  });

  const queryClient = useQueryClient();
  const mutation = useMutation(createPost, {
    onSuccess: () => {
      console.log("Invalidating all-posts");
      // Invalidate and refetch the user data after a successful mutation
      queryClient.invalidateQueries("all-posts");
    },
    onError: (error) => {
      console.error("Error creating the post:", error);
    },
  });

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newPost = {
            title,
            body,
            userId,
          };
          mutation.mutate(newPost);
        }}
      >
        <p>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="title"
            required
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </p>

        <p>
          <label htmlFor="body">Body : </label>
          <input
            type="text"
            id="body"
            required
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          />
        </p>

        <p>
          <label htmlFor="userId">User Id : </label>
          <input
            type="number"
            id="userId"
            required
            value={userId}
            onChange={(event) => {
              setUserId(event.target.value);
            }}
          />
        </p>

        <p>
          <button>Add New Post</button>
        </p>
      </form>

      <div id="all-posts">
        <h2>Total Posts are : {data.length}</h2>
        {data.map((post, index) => {
          return (
            <div key={index}>
              {index + 1} . {post.title}
            </div>
          );
        })}
      </div>
    </>
  );
}
