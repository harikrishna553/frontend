import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CollegePage from "./pages/CollegePage";
import HomePage from "./pages/HomePage";
import SportsPage from "./pages/SportsPage";
import "./styles.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {/* Exact matching */}
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          {/* Non-exact matching */}
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          {/* Another link under "/about" */}
          <NavLink to="/about/college" activeClassName="active">
            College
          </NavLink>
        </li>
        <li>
          <NavLink to="sports" activeClassName="active">
            Sports
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/college" element={<CollegePage />} />
          <Route path="/sports" element={<SportsPage />} />
        </Routes>

        <footer>
          <p>&copy; 2024 ABC Engineering. All rights reserved.</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
