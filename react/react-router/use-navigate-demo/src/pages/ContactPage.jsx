import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const navigate = useNavigate();

  function gotoHome() {
    navigate("/");
  }

  return (
    <>
      <h3>Contact Page</h3>
      <button className="nav-button" onClick={gotoHome}>
        Home
      </button>
    </>
  );
}
