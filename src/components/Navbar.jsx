import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/ma-logo.jpeg";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img
                    src={logo}
                    alt="Material Advantage logo"
                    className="navbar-logo"
                />

                <div className="brand-text">
                    <span className="brand-name">Material Advantage</span>
                    <span className="brand-school">NC State University</span>
                </div>
            </div>

            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
                <li><NavLink to="/career-fair">Career Fair</NavLink></li>
                <li><NavLink to="/conferences">Conferences</NavLink></li>
                <li><NavLink to="/resources">Resources</NavLink></li>
                <li><NavLink to="/officers">Officers</NavLink></li>
                <li><NavLink to="/newsletter">Newsletter</NavLink></li>
                <li>
                    <NavLink
                        to="/get-involved"
                        className="join-link"
                    >
                        Join Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;