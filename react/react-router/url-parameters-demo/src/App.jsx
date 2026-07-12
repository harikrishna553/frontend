import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import UserSearch from "./pages/UserSearch";
import UserProfile from "./pages/UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user-profile/:id" element={<UserProfile />} />
          <Route path="/" element={<UserSearch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
