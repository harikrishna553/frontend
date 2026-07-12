import { Outlet, Link } from "react-router-dom";
import "../styles.css";

export default function University() {
  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/university">About</Link>
          </li>
          <li>
            <Link to="/university/alumni">Alumni</Link>
          </li>
          <li>
            <Link to="/university/news">News</Link>
          </li>
        </ul>
      </nav>

      <h1>ABC Autonomous University</h1>
      <p>
        Welcome to ABC University, a place where tradition meets innovation.
        Since our founding in 1901, we have been committed to academic
        excellence, fostering a diverse and inclusive community, and preparing
        students to lead and make a difference in the world.
      </p>

      <Outlet />
    </>
  );
}
