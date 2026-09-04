import "../styles/Hero.css";
import heroImage from "../images/hero.jpeg";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>Material Advantage</h1>

                    <p className="hero-school">
                        NC State University
                    </p>

                    <Link
                        to="/get-involved"
                        className="primary-button"
                        >
                        Become a Member
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;