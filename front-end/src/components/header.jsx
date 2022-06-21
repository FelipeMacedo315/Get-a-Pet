import { Link } from "react-router-dom";
import logo from "../assets/dog_logo.png";
import "../assets/header.css";
function Header() {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="Logo Get a Pet" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/register">About</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
export default Header;
