import "../styles/Hero.css";
import heroImage from "../images/hero.jpeg";

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

                    <button className="primary-button">
                        Become a Member
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;