import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UsersInfo from "./components/UsersInfo";

let users = [
  {
    id: 1,
    name: "Krishna",
    age: 34,
    email: "krishna@abc.com",
  },
  {
    id: 2,
    name: "Lahari",
    age: 36,
    email: "lahari@abc.com",
  },
];
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsersInfo users={users} />
  </StrictMode>
);
