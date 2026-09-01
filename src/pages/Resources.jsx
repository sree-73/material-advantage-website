import resources from "../data/resources";
import "../styles/Resources.css";

function Resources() {
    return (
        <main className="resources-page">
            <section className="resources-header">
                <p className="resources-label">Helpful Links</p>

                <h1>Resources</h1>

                <p className="resources-intro">
                    Explore useful materials science resources, scholarships,
                    career opportunities, professional organizations, and
                    other links for students.
                </p>
            </section>

            <section className="resources-section">
                <div className="resources-grid">
                    {resources.map((resource) => (
                        <a
                            key={resource.id}
                            href={resource.link}
                            className="resource-card"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p>{resource.category}</p>
                            <h3>{resource.title}</h3>
                            <span>Explore →</span>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Resources;