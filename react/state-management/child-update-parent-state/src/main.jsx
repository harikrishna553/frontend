import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UsersInfo from "./components/UsersInfo";

let users = [
  {
    id: 1,
    name: "Krishna",
    age: 36,
  },
  {
    id: 2,
    name: "Ram",
    email: "ram@abc.com",
    age: 37,
  }
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsersInfo users={users} />
  </StrictMode>
);
