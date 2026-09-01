import officerGroups from "../data/officers";
import "../styles/Officers.css";

function Officers() {
    return (
        <main className="officers-page">

            <section className="officers-header">
                <p className="officers-label">Meet the Team</p>

                <h1>Our Officers</h1>

                <p className="officers-intro">
                    Meet the students who help lead Material Advantage at NC State.
                </p>
            </section>

            {officerGroups.map((group) => (
                <section className="officers-section" key={group.year}>

                    <div className="section-heading">
                        <h2>{group.year}</h2>
                    </div>

                    <div className="officers-grid">

                        {group.officers.map((officer) => (
                            <div className="officer-card" key={officer.id}>

                                <div className="officer-image">
                                    {officer.image ? (
                                        <img
                                            src={officer.image}
                                            alt={officer.name}
                                        />
                                    ) : (
                                        <span>Officer Photo</span>
                                    )}
                                </div>

                                <div className="officer-info">

                                    <p className="officer-role">
                                        {officer.role}
                                    </p>

                                    <h3>{officer.name}</h3>

                                    {officer.bio && (
                                        <p className="officer-bio">
                                            {officer.bio}
                                        </p>
                                    )}

                                </div>

                            </div>
                        ))}

                    </div>

                </section>
            ))}

        </main>
    );
}

export default Officers;