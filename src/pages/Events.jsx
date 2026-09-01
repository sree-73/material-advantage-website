import "../styles/Events.css";

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
                        src="https://calendar.google.com/calendar/embed?src=c_97c3a1bcd5f612f60b8bafa5c9ad310dedb3da5fe3e6214b17eb86040e48c8d8%40group.calendar.google.com&ctz=America%2FNew_York"
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
                    <div className="past-event-placeholder">
                        Event Photo
                    </div>

                    <div className="past-event-placeholder">
                        Event Photo
                    </div>

                    <div className="past-event-placeholder">
                        Event Photo
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Events;