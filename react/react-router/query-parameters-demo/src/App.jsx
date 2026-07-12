import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import UserSearchPage from "./pages/UserSearchPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/" element={<UserSearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
