import { useState } from "react";

export default function PublishAndDisplayPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  async function createNewPost() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: title, // Corrected
            body: body, // Corrected
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const responseData = await response.json();
      console.log(`responseData : ${JSON.stringify(responseData)}`);

      setTitle("");
      setBody("");

      const newPost = {
        title: responseData.title,
        body: responseData.body,
      };

      console.log(`newPost is ${JSON.stringify(newPost)}`);

      setPosts([...posts, newPost]); // Corrected
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          createNewPost();
        }}
      >
        <p>
          <label htmlFor="title">Provide a title for your post</label> &nbsp;
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="body">Provide Body for your post</label> &nbsp; &nbsp;
          <textarea
            type="text"
            id="body"
            name="body"
            value={body}
            rows="10"
            cols="50"
            onChange={(event) => {
              setBody(event.target.value);
            }}
          />
        </p>
        <p>
          <button>Submit</button>
        </p>
        <ul>
          {posts.length > 0 ? <h1>Your posts</h1> : ""}
          {posts.map((post, index) => (
            <li key={index}>
              <strong>{post.title}:</strong> {post.body}
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}
