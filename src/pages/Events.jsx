import "../styles/Events.css";
import pickleball from "../images/events/pickleball.jpg";
import potluck from "../images/events/potluck.png";
import qorvo from "../images/events/qorvo.png";

function Events() {
    return (
        <main className="events-page">
            <section className="events-header">
                <p className="events-label">Stay Connected</p>

                <h1>Events</h1>

                <p className="events-intro">
                    Keep up with Material Advantage meetings, professional
                    events, conference deadlines, industry visits, and other
                    chapter activities.
                </p>

                <a
                    href="https://calendar.google.com/calendar/embed?src=c_97c3a1bcd5f612f60b8bafa5c9ad310dedb3da5fe3e6214b17eb86040e48c8d8%40group.calendar.google.com&ctz=America%2FNew_York"
                    target="_blank"
                    rel="noreferrer"
                    className="calendar-button"
                >
                    Open Full Google Calendar
                </a>
            </section>

            <section className="calendar-section">
                <div className="section-heading">
                    <p>Calendar</p>
                    <h2>What's Coming Up</h2>
                </div>

                <div className="calendar-container">
                    <iframe
                        src="https://calendar.google.com/calendar/u/0/embed?src=c_6423046b6299a83923236ab452e7393407bc66978a357ffed08d08b3dee2221d@group.calendar.google.com&ctz=America/New_York"
                        title="Material Advantage Google Calendar"
                        frameBorder="0"
                        scrolling="no"
                    ></iframe>
                </div>
            </section>

            <section className="past-events-section">
                <div className="section-heading">
                    <p>Our Chapter</p>
                    <h2>Past Events</h2>
                </div>

                <p className="past-events-text">
                    A look back at meetings, professional development events,
                    tours, socials, and other Material Advantage experiences.
                </p>

                <div className="past-events-grid">
                    <div className="past-event-card">
                        <img src={potluck} alt="MS&T 2025" />

                        <h3 className="past-event-title">
                            Periodic Potluck
                        </h3>
                    </div>

                    <div className="past-event-card">
                        <img src={qorvo} alt="MS&T 2025" />
                        <h3 className="past-event-title">
                            Qorvo Company Dinner
                        </h3>
                    </div>

                    <div className="past-event-card">
                        <img src={pickleball} alt="MS&T 2025" />
                        <h3 className="past-event-title">
                            Pickleball Social
                        </h3>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Events;