import { Link } from "react-router-dom";
import events from "../data/events";
import "../styles/Upcoming.css";

function Upcoming() {
    const today = new Date();

    const upcomingEvents = events
        .filter((event) => new Date(event.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3);

    return (
        <section className="upcoming">
            <div className="upcoming-heading">
                <p>Stay Updated</p>
                <h2>Upcoming</h2>
            </div>

            <div className="upcoming-list">
                {upcomingEvents.map((event) => {
                    const eventDate = new Date(event.date);

                    const month = eventDate
                        .toLocaleString("en-US", { month: "short" })
                        .toUpperCase();

                    const day = eventDate.getDate();

                    return (
                        <div className="upcoming-item" key={event.id}>
                            <div className="date-box">
                                <span className="date-month">
                                    {month}
                                </span>

                                <span className="date-day">
                                    {day}
                                </span>
                            </div>

                            <div className="upcoming-info">
                                <span className="upcoming-type">
                                    {event.type}
                                </span>

                                <h3>{event.title}</h3>

                                <p>
                                    {event.time}
                                    {event.time && event.location && " • "}
                                    {event.location}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Link to="/events" className="view-calendar">
                View all events and deadlines →
            </Link>
        </section>
    );
}

export default Upcoming;