import { createElement } from "react";

export default function UserProfile() {
  return createElement(
    "div",
    null,
    <div>
      <h1>User Basic Information</h1>
      <ul>
        <li>First Name: Krishna</li>
        <li>Last Name: Gurram</li>
        <li>Age: 35</li>
      </ul>
    </div>,
    <section>
      <h1>Hobbies</h1>
      <ul>
        <li>Trekking</li>
        <li>Cooking</li>
        <li>Blogging</li>
      </ul>
    </section>
  );
}
