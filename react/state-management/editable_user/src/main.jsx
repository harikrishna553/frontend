import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import User from "./components/User";

const userDetails = {
  name: "Krishna",
  age: 34,
  email: "krishna@abc.com",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <User user={userDetails} />
  </StrictMode>
);
