import conferences from "../data/conferences";
import "../styles/Conferences.css";

function Conferences() {
    return (
        <main className="conferences-page">

            <section className="conference-header">
                <p className="conference-label">Material Advantage</p>

                <h1>Conferences</h1>

                <p className="conference-intro">
                    Conferences give our members the opportunity to explore
                    materials science beyond the classroom, connect with
                    professionals, and experience the broader materials
                    community.
                </p>
            </section>

            <section className="why-attend">
                <div className="section-heading">
                    <p>Why Attend?</p>
                    <h2>Grow beyond the classroom</h2>
                </div>

                <div className="benefit-grid">
                    <div className="benefit-card">
                        <h3>Networking</h3>
                        <p>
                            Connect with students, researchers, industry
                            professionals, and employers from across the
                            materials science community.
                        </p>
                    </div>

                    <div className="benefit-card">
                        <h3>Research & Learning</h3>
                        <p>
                            Attend technical sessions, explore new research,
                            and learn about developments across materials
                            science and engineering.
                        </p>
                    </div>

                    <div className="benefit-card">
                        <h3>Professional Growth</h3>
                        <p>
                            Discover career paths, build professional skills,
                            and gain exposure to opportunities in industry
                            and academia.
                        </p>
                    </div>
                </div>
            </section>

            <section className="past-conferences">
                <div className="section-heading">
                    <p>Our Experiences</p>
                    <h2>Past Conferences</h2>
                </div>

                <div className="conference-grid">
                    {conferences.map((conference) => (
                        <div className="conference-card" key={conference.id}>
                            <img
                                className="conference-photo"
                                src={conference.image}
                                alt={conference.name}
                            />

                            <div className="conference-card-content">
                                <h3>{conference.name}</h3>

                                <p className="conference-location">
                                    {conference.location}
                                </p>

                                <p className="conference-description">
                                    {conference.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="student-experience">
                <div className="section-heading">
                    <p>From Our Members</p>
                    <h2>Student Experience</h2>
                </div>

                <blockquote>
                    “YAY Conference is great guys!”
                </blockquote>

                <p className="quote-author">
                    — Material Advantage Member
                </p>
            </section>


        </main>
    );
}

export default Conferences;