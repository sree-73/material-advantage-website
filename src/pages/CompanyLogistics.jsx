import { Link } from "react-router-dom";

import {
  companyLogisticsInfo,
  logisticsSections,
  providedItems,
  companyPreparation,
  companyFaqs,
} from "../data/companyLogistics";

import "../styles/CompanyLogistics.css";

function CompanyLogistics() {
  return (
    <main className="company-logistics-page">

      {/* HERO */}
      <section className="company-logistics-hero">
        <div className="company-logistics-hero-content">

          <p className="company-logistics-eyebrow">
            Material Advantage Career Fair
          </p>

          <h1>{companyLogisticsInfo.title}</h1>

          <p className="company-logistics-subtitle">
            {companyLogisticsInfo.subtitle}
          </p>

          <Link
            to="/career-fair"
            className="company-logistics-back"
          >
            ← Back to Career Fair
          </Link>

        </div>
      </section>

      {/* QUICK INFORMATION */}
      <section className="company-logistics-summary-wrapper">

        <div className="company-logistics-summary">

          <div>
            <span>Event Date</span>
            <strong>
              {companyLogisticsInfo.eventDate}
            </strong>
          </div>

          <div>
            <span>Career Fair</span>
            <strong>
              {companyLogisticsInfo.careerFairTime}
            </strong>
          </div>

          <div>
            <span>Employer Arrival</span>
            <strong>
              {companyLogisticsInfo.employerArrivalTime}
            </strong>
          </div>

          <div>
            <span>Location</span>
            <strong>
              {companyLogisticsInfo.location}
            </strong>
          </div>

        </div>

      </section>

      {/* DAY OF LOGISTICS */}
      <section className="company-logistics-section">
        <div className="company-logistics-container">

          <div className="company-logistics-heading">
            <p>Day-of Information</p>
            <h2>Career Fair Logistics</h2>
          </div>

          <div className="company-logistics-grid">

            {logisticsSections.map((section) => (
              <article
                className="company-logistics-card"
                key={section.title}
              >
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="company-logistics-section company-logistics-alt">
        <div className="company-logistics-container">

          <div className="company-logistics-heading">
            <p>Your Space</p>
            <h2>What We Provide</h2>
          </div>

          <div className="company-provided-list">

            {providedItems.map((item) => (
              <div
                className="company-provided-item"
                key={item}
              >
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PREPARATION */}
      <section className="company-logistics-section">
        <div className="company-logistics-container">

          <div className="company-logistics-heading">
            <p>Before the Event</p>
            <h2>Prepare for the Career Fair</h2>
          </div>

          <div className="company-preparation-grid">

            {companyPreparation.map((item) => (
              <article
                className="company-preparation-card"
                key={item.number}
              >
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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

        <div className="company-contact-content">

          <p>Still have questions?</p>

          <h2>We're here to help.</h2>

          <p>
            Contact {companyLogisticsInfo.contact.name} for
            questions about parking, arrival, registration,
            or event logistics.
          </p>

          <strong>
            {companyLogisticsInfo.contact.email}
          </strong>

        </div>

      </section>

    </main>
  );
}

export default CompanyLogistics;