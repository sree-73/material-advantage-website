import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Material Advantage</h3>
          <p>NC State University</p>
        </div>

        <div className="footer-contact">
          <Link to="/get-involved">Become a Member</Link>

          <a
            href="https://www.instagram.com/material.advantage.ncsu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/ncsu-mat-adv/posts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:materialadvantage@ncsu.edu">
            Email
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Material Advantage at NC State University</p>
      </div>
    </footer>
  );
}

export default Footer;