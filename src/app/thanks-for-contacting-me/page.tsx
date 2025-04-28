import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../app/styles/styles.css';
import '../../app/styles/responsive.css';
import '../../app/styles/enhancements.css';
import '../../app/styles/animations.css';

export default function ThankYou() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <Link href="/" className="gradient-text-animated">Trevor Rawls</Link>
            </div>
            <ul className="nav-links">
              <li><Link href="/" className="animated-underline">Home</Link></li>
              <li><Link href="/experience" className="animated-underline">Experience</Link></li>
              <li><Link href="/#about" className="animated-underline">About</Link></li>
              <li><Link href="/ask-trevor-bot" className="contact-button button-glow">Talk to Trevor Bot</Link></li>
            </ul>
            <div className="hamburger" aria-label="Menu" role="button" tabIndex={0}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="thank-you-message">
          <h1 className="gradient-text-animated">Thanks for reaching out! I'll be in touch soon!</h1>
        </div>

        <section className="experience section-transition">
          <div className="section-header">
            <h2 className="gradient-border gradient-text-animated">Trevor's Experience</h2>
            <div className="section-line"></div>
          </div>
          <div className="experience-grid">
            <div className="experience-card card-hover-effect card-3d">
              <div className="company-logo">
                <img src="/images/activecampaign.svg" alt="ActiveCampaign Logo" width={100} height={100} />
              </div>
              <div className="experience-content">
                <h3>Demand Generation Marketing Lead, Postmark</h3>
                <div className="company-info">
                  <span className="company-name">ActiveCampaign</span>
                  <span className="date-range">August 2023 - Present</span>
                </div>
                <p className="experience-description">
                  Leading demand generation strategy and execution for Postmark, a transactional email service within ActiveCampaign.
                </p>
                <Link href="/companies/activecampaign" className="read-more animated-underline">Read More</Link>
              </div>
            </div>

            <div className="experience-card card-hover-effect card-3d">
              <div className="company-logo">
                <img src="/images/mailgun.svg" alt="Mailgun Logo" width={100} height={100} />
              </div>
              <div className="experience-content">
                <h3>Performance Marketing Manager - Team Lead</h3>
                <div className="company-info">
                  <span className="company-name">Mailgun by Sinch</span>
                  <span className="date-range">January 2022 - August 2023</span>
                </div>
                <p className="experience-description">
                  Led performance marketing initiatives and managed a team of digital marketers focused on driving user acquisition.
                </p>
                <Link href="/companies/mailgun" className="read-more animated-underline">Read More</Link>
              </div>
            </div>

            <div className="experience-card card-hover-effect card-3d">
              <div className="company-logo">
                <img src="/images/emailonacid.svg" alt="Email on Acid Logo" width={100} height={100} />
              </div>
              <div className="experience-content">
                <h3>Digital Marketing Manager</h3>
                <div className="company-info">
                  <span className="company-name">Email on Acid</span>
                  <span className="date-range">December 2020 - January 2022</span>
                </div>
                <p className="experience-description">
                  Managed comprehensive digital marketing strategy including paid search, social media advertising, and email marketing campaigns.
                </p>
                <Link href="/companies/emailonacid" className="read-more animated-underline">Read More</Link>
              </div>
            </div>

            <div className="experience-card card-hover-effect card-3d">
              <div className="company-logo">
                <img src="/images/mersive.svg" alt="Mersive Logo" width={100} height={100} />
              </div>
              <div className="experience-content">
                <h3>Demand Generation Manager</h3>
                <div className="company-info">
                  <span className="company-name">Mersive Technologies</span>
                  <span className="date-range">September 2020 - December 2020</span>
                </div>
                <p className="experience-description">
                  Led demand generation efforts through digital advertising and email marketing campaigns for a B2B technology company.
                </p>
                <Link href="/companies/mersive" className="read-more animated-underline">Read More</Link>
              </div>
            </div>
          </div>
          <div className="view-all-container">
            <Link href="/experience" className="view-all-button button-glow">View All Experience</Link>
          </div>
        </section>
      </div>
    </>
  );
} 