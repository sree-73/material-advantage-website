import { Link } from "react-router-dom";

import {
  companyLogisticsInfo,
  parkingInfo,
  directionsToHall,
  officialLinks,
  hotels,
  contacts,
  companyFaqs,
} from "../data/companyLogistics";

import parkingMap from "../images/parking-map.png";
import huntFloorMap from "../images/hunt-floor-map.png";

import "../styles/CompanyLogistics.css";

function CompanyLogistics() {
  return (
    <main className="company-logistics-page">

      {/* HERO */}
      <section className="company-logistics-hero">
        <div className="company-logistics-container">

          <p className="company-logistics-eyebrow">
            Material Advantage + AIChE Career Fair
          </p>

          <h1>{companyLogisticsInfo.title}</h1>

          <p className="company-logistics-subtitle">
            {companyLogisticsInfo.subtitle}
          </p>

          <Link to="/career-fair" className="company-logistics-back">
            ← Back to Career Fair
          </Link>

        </div>
      </section>

      {/* EVENT INFO */}
      <section className="company-logistics-section">
        <div className="company-logistics-container">

          <div className="company-info-grid">

            <div>
              <span>Date</span>
              <strong>{companyLogisticsInfo.eventDate}</strong>
            </div>

            <div>
              <span>Employer Arrival</span>
              <strong>{companyLogisticsInfo.employerArrivalTime}</strong>
            </div>

            <div>
              <span>Career Fair</span>
              <strong>{companyLogisticsInfo.careerFairTime}</strong>
            </div>

            <div>
              <span>Venue</span>
              <strong>{companyLogisticsInfo.venue}</strong>
            </div>

          </div>

          <p className="company-address">
            {companyLogisticsInfo.address}
          </p>

        </div>
      </section>

      {/* PARKING */}
      <section className="company-logistics-section company-logistics-alt">
        <div className="company-logistics-container">

          <div className="company-logistics-heading">
            <p>Arrival</p>
            <h2>Parking & Directions</h2>
          </div>

          <div className="parking-layout">

            <div className="parking-text">

              <div className="parking-card">
                <h3>{parkingInfo.recommended.name}</h3>
                <p>{parkingInfo.recommended.description}</p>
              </div>

              <div className="parking-card">
                <h3>{parkingInfo.alternative.name}</h3>
                <p>{parkingInfo.alternative.description}</p>
              </div>

              <div className="parking-note">
                <strong>Parking after 5 PM</strong>
                <p>{parkingInfo.note}</p>
              </div>

            </div>

            <div className="parking-map-wrapper">
              <img
                src={parkingMap}
                alt="Map showing Poulton Pay Lot, Partners Way Parking Deck, and Hunt Library"
              />
            </div>

          </div>

        </div>
      </section>

      {/* HUNT DIRECTIONS */}
      <section className="company-logistics-section">
        <div className="company-logistics-container">

          <div className="company-logistics-heading">
            <p>Inside Hunt Library</p>
            <h2>Getting to Duke Energy Hall</h2>
          </div>

          <div className="directions-layout">

            <ol className="directions-list">
              {directionsToHall.map((direction) => (
                <li key={direction}>{direction}</li>
              ))}
            </ol>

            <div className="floor-map-wrapper">
              <img
                src={huntFloorMap}
                alt="Level 2 floor map of James B. Hunt Jr. Library showing Duke Energy Hall"
              />
            </div>

          </div>

        </div>
      </section>

      {/* OFFICIAL LINKS */}
      <section className="company-logistics-section company-logistics-alt">
        <div className="company-logistics-container">

          <div className="company-logistics-heading">
            <p>Resources</p>
            <h2>Official NC State Links</h2>
          </div>

          <div className="official-links-grid">

            {officialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="official-link-card"
              >
                {link.label}
                <span>↗</span>
              </a>
            ))}

          </div>

        </div>
      </section>

      {/* HOTELS */}
      <section className="company-logistics-section">
        <div className="company-logistics-container">

          <div className="company-logistics-heading">
            <p>Travel</p>
            <h2>Recommended Hotels</h2>
          </div>

          <p className="hotel-intro">
            Rates and availability vary by date. Companies should book
            directly with the hotel.
          </p>

          <div className="hotel-grid">

            {hotels.map((hotel) => (
              <article className="hotel-card" key={hotel.name}>

                <h3>{hotel.name}</h3>

                <p className="hotel-address">
                  {hotel.address}
                </p>

                <p>{hotel.description}</p>

                <a
                  href={hotel.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Hotel →
                </a>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="company-logistics-section company-logistics-alt">
        <div className="company-logistics-container">

          <div className="company-logistics-heading">
            <p>Employer FAQ</p>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="company-logistics-faq">

            {companyFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="company-contact-section">
        <div className="company-logistics-container">

          <p className="company-contact-label">
            Need Assistance?
          </p>

          <h2>Contact Us</h2>

          <div className="contact-grid">

            {contacts.map((contact) => (
              <div className="contact-card" key={contact.role}>

                <span>{contact.role}</span>

                <strong>{contact.name}</strong>

                <a href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}

export default CompanyLogistics;