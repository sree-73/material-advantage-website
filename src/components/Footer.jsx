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

                <div className="footer-links">
                    <Link to="/events">Events</Link>
                    <Link to="/conferences">Conferences</Link>
                    <Link to="/opportunities">Opportunities</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/officers">Officers</Link>
                </div>

                <div className="footer-contact">
                    <h4>Get Involved</h4>
                    <Link to="/get-involved">Become a Member</Link>
                    <p>Instagram • LinkedIn • Email</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 Material Advantage at NC State University
                </p>
            </div>
        </footer>
    );
}

export default Footer;