import "./Footer.css";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">

          <h2 className="footer-logo">
            VEXELRY
          </h2>

          <p className="footer-desc">

            Innovate. Build. Scale.

            <br /><br />

            We create modern digital solutions,
            scalable web applications and premium
            user experiences for businesses and startups.

          </p>

        </div>

        <div className="footer-col">

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#whychoose">Why Choose Us</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>

        </div>

        <div className="footer-col">

          <h3>
            Services
          </h3>

          <ul>

            <li>
              Web Development
            </li>

            <li>
              Mobile App Development
            </li>

            <li>
              Portfolio Websites
            </li>

            <li>
              UI/UX Design
            </li>

          </ul>

        </div>

        <div className="footer-col">

          <h3>
            Contact Info
          </h3>

          <p>
            📞 +91 9342347936
          </p>

          <p>
            ✉️ vexelry@gmail.com
          </p>

          <p>
            📸 @vexelry
          </p>

          <p>
            📍 Puducherry, India
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Vexelry. All Rights Reserved.
        </p>

        <div className="footer-socials">

          <a href="https://www.instagram.com/vexelry?igsh=eGRzeWs3eWl5cjJp">
            Instagram
          </a>

          <a href="#">
            LinkedIn
          </a>

          
        </div>

      </div>

    </footer>
  );
}

export default Footer;