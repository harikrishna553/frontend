import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  function gotoHome() {
    navigate("/");
  }

  return (
    <>
      <h3>About Page</h3>
      <button className="nav-button" onClick={gotoHome}>
        Home
      </button>
    </>
  );
}
