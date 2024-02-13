import "./css/Navbar.css";
import Sxitch from "./microComponents/Sxitch";
import logo from "./Images/logo.svg";
function Navbar() {
  return (
    <>
      <div id="navbarContainer">
        <nav id="navbar">
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="/"
            className="navItem Home"
          >
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" />
              SilverCast
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/PankajKDev"
            style={{ textDecoration: "none", color: "black" }}
            className="navItem"
          >
            Github
          </a>
          <li>
            <Sxitch />
          </li>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
