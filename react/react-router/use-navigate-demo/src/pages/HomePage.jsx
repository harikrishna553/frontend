import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function gotoAbout() {
    navigate("/about");
  }
  function gotoContact() {
    navigate("/contact");
  }
  return (
    <>
      <h3>Home Page</h3>
      <button className="nav-button" onClick={gotoAbout}>
        About
      </button>
      <button className="nav-button" onClick={gotoContact}>
        Contact
      </button>
    </>
  );
}
