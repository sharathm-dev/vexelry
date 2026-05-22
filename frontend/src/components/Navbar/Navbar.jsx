import "./Navbar.css";

import logo from "../../assets/images/logo.png";

function Navbar() {

  return (
    <nav className="navbar">

      <div className="logo-container">

        <img
          src={logo}
          alt="Vexelry Logo"
          className="logo-img"
        />

        <div className="logo-text">

          <h2>VEXELRY</h2>

          <span>
            Built pixel by pixel
          </span>

        </div>

      </div>

      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#whychoose">Why Us</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      <button
        className="nav-btn"
        onClick={()=>{
          document
            .getElementById("contact")
            ?.scrollIntoView({
              behavior:"smooth"
            });
        }}
      >
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;