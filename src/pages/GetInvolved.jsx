import getInvolvedLinks from "../data/getInvolved";
import "../styles/GetInvolved.css";

function GetInvolved() {
    return (
        <main className="get-involved-page">

            <section className="get-involved-header">
                <p className="get-involved-label">Join Our Community</p>

                <h1>Get Involved</h1>

                <p className="get-involved-intro">
                    Whether you're interested in conferences, professional
                    development, materials research, or simply meeting other
                    students, there are plenty of ways to get involved with
                    Material Advantage at NC State.
                </p>
            </section>

            <section className="get-involved-section">

                <div className="get-involved-grid">
                    {getInvolvedLinks.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="get-involved-card"
                        >
                            <h2>{item.title}</h2>

                            <p>{item.description}</p>

                            <span>Continue →</span>
                        </a>
                    ))}
                </div>

            </section>

        </main>
    );
}

export default GetInvolved;