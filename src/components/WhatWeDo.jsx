import "../styles/WhatWeDo.css";

function WhatWeDo() {
    return (
        <section className="what-we-do">
            <div className="section-heading">
                <p>What We Do</p>
                <h2>More than just a student organization</h2>
            </div>

            <div className="feature-grid">
                <div className="feature-card">
                    <h3>Conferences</h3>
                    <p>
                        Attend national materials science conferences,
                        explore new research, and connect with professionals.
                    </p>
                </div>

                <div className="feature-card">
                    <h3>Professional Development</h3>
                    <p>
                        Build industry connections through company events,
                        workshops, networking, and career opportunities.
                    </p>
                </div>

                <div className="feature-card">
                    <h3>Community</h3>
                    <p>
                        Meet students interested in materials science,
                        engineering, research, and related fields.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;
