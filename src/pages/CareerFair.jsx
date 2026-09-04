import { Link } from "react-router-dom";

import {
  careerFairInfo,
  careerFairHighlights,
  participatingCompanies,
  preparationSteps,
  careerFairFaqs,
} from "../data/careerFair";

import "../styles/CareerFair.css";

function CareerFair() {
  return (
    <main className="career-fair-page">

      {/* HERO */}
      <section className="career-fair-hero">
        <div className="career-fair-hero-content">
          <p className="career-fair-eyebrow">
            Material Advantage @ NC State
          </p>

          <h1>{careerFairInfo.title}</h1>

          <p className="career-fair-subtitle">
            {careerFairInfo.subtitle}
          </p>

          <div className="career-fair-details">
            <span>{careerFairInfo.date}</span>
            <span>{careerFairInfo.time}</span>
            <span>{careerFairInfo.location}</span>
          </div>

          <p className="career-fair-address">{careerFairInfo.address} </p>

          <a
            href={careerFairInfo.registrationLink}
            className="career-fair-primary-button"
          >
            Registration Coming Soon
          </a>
        </div>
      </section>

      {/* EMPLOYER BANNER */}
      <section className="employer-callout-wrapper">
        <div className="employer-callout">

          <div className="employer-callout-text">
            <p className="employer-callout-label">
              For Employers
            </p>

            <h2>Participating in the Career Fair?</h2>

            <p>
              Find parking information, arrival instructions, and other day-of
              logistics for company representatives.
            </p>
          </div>

          <Link
            to="/career-fair/company-logistics"
            className="employer-callout-button"
          >
            View Company Logistics →
          </Link>

        </div>
      </section>

      {/* WHY ATTEND */}
      <section className="career-fair-section">
        <div className="career-fair-container">

          <div className="career-fair-section-heading">
            <p>For Students</p>
            <h2>Why Attend?</h2>
          </div>

          <div className="career-fair-highlight-grid">
            {careerFairHighlights.map((item) => (
              <article
                className="career-fair-highlight-card"
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PARTICIPATING COMPANIES */}
      <section className="career-fair-section career-fair-section-alt">
        <div className="career-fair-container">

          <div className="career-fair-section-heading">
            <p>Who's Attending</p>
            <h2>Participating Companies</h2>
          </div>

          {participatingCompanies.length > 0 ? (
            <div className="career-fair-company-grid">

              {participatingCompanies.map((company) => (
                <article
                  className="career-fair-company-card"
                  key={company.name}
                >
                  <h3>{company.name}</h3>

                  <p>{company.description}</p>

                  {company.website && (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Website →
                    </a>
                  )}
                </article>
              ))}

            </div>
          ) : (
            <div className="career-fair-coming-soon">
              <h3>Companies Coming Soon</h3>
              <p>
                Our participating employers will be announced
                as they are confirmed. Check back for updates.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* PREPARATION */}
      <section className="career-fair-section">
        <div className="career-fair-container">

          <div className="career-fair-section-heading">
            <p>Before You Attend</p>
            <h2>Prepare for the Fair</h2>
          </div>

          <div className="career-fair-prep-grid">
            {preparationSteps.map((step) => (
              <article
                className="career-fair-prep-card"
                key={step.number}
              >
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="career-fair-section career-fair-section-alt">
        <div className="career-fair-container">

          <div className="career-fair-section-heading">
            <p>Need to Know</p>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="career-fair-faqs">

            {careerFairFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}

export default CareerFair;