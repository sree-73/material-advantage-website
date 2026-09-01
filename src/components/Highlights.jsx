import { useState } from "react";
import highlights from "../data/highlights";
import "../styles/Highlights.css";

function Highlights() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousHighlight = () => {
        setCurrentIndex((currentIndex - 1 + highlights.length) % highlights.length);
    };

    const nextHighlight = () => {
        setCurrentIndex((currentIndex + 1) % highlights.length);
    };

    const currentHighlight = highlights[currentIndex];

    return (
        <section className="highlights">
            <div className="highlights-heading">
                <p>Our Chapter</p>
                <h2>Highlights</h2>
            </div>

            <div className="highlight-carousel">

                <button
                    className="carousel-button left"
                    onClick={previousHighlight}
                >
                    ‹
                </button>

                <div className="highlight-card">
                    <img
                        src={currentHighlight.image}
                        alt={currentHighlight.title}
                    />

                    <div className="highlight-overlay">
                        <h3>{currentHighlight.title}</h3>

                        {currentHighlight.description && (
                            <p>{currentHighlight.description}</p>
                        )}
                    </div>
                </div>

                <button
                    className="carousel-button right"
                    onClick={nextHighlight}
                >
                    ›
                </button>

            </div>

            <div className="carousel-dots">
                {highlights.map((highlight, index) => (
                    <button
                        key={highlight.id}
                        className={
                            index === currentIndex
                                ? "carousel-dot active"
                                : "carousel-dot"
                        }
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Highlights;