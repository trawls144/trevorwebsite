import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Experience() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <Link href="/">Trevor Rawls</Link>
            </div>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/experience" className="active">Experience</Link></li>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/ask-trevor-bot" className="contact-button">Talk to Trevor Bot</Link></li>
            </ul>
            <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </div>
      </header>

      <section className={styles.experiencePage}>
        <div className="container">
          <Link href="/" className={styles.backToHome}>Back to Home</Link>
          
          <div className={styles.sectionHeader}>
            <h2>Professional Experience</h2>
            <div className={styles.sectionLine}></div>
          </div>
          
          <div className={styles.allExperienceGrid}>
            <div className={styles.experienceCard}>
              <div className={styles.companyLogo}>
                <Image 
                  src="/images/activecampaign-logo.jpg" 
                  alt="ActiveCampaign Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.experienceContent}>
                <h3>Demand Generation Marketing Lead, Postmark</h3>
                <div className={styles.companyInfo}>
                  <span className="company-name">ActiveCampaign</span>
                  <span className="date-range">August 2023 - Present</span>
                </div>
                <p className={styles.experienceDescription}>
                  Leading demand generation strategy and execution for Postmark, a transactional email service within ActiveCampaign. Responsible for driving profitable user acquisition and growth through multi-channel digital marketing campaigns.
                </p>
                <Link href="/companies/activecampaign" className={styles.readMore}>Read More</Link>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.companyLogo}>
                <Image 
                  src="/images/mailgun-logo.jpg" 
                  alt="Mailgun Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.experienceContent}>
                <h3>Performance Marketing Manager - Team Lead</h3>
                <div className={styles.companyInfo}>
                  <span className="company-name">Mailgun by Sinch</span>
                  <span className="date-range">January 2022 - August 2023</span>
                </div>
                <p className={styles.experienceDescription}>
                  Led performance marketing initiatives and managed a team of digital marketers focused on driving user acquisition and revenue growth for Mailgun's email API services.
                </p>
                <Link href="/companies/mailgun" className={styles.readMore}>Read More</Link>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.companyLogo}>
                <Image 
                  src="/images/emailonacid-logo.jpg" 
                  alt="Email on Acid Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.experienceContent}>
                <h3>Digital Marketing Manager</h3>
                <div className={styles.companyInfo}>
                  <span className="company-name">Email on Acid</span>
                  <span className="date-range">December 2020 - January 2022</span>
                </div>
                <p className={styles.experienceDescription}>
                  Managed comprehensive digital marketing strategy including paid search, social media advertising, and email marketing campaigns for an email testing and deliverability platform.
                </p>
                <Link href="/companies/emailonacid" className={styles.readMore}>Read More</Link>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.companyLogo}>
                <Image 
                  src="/images/mersive-logo.jpg" 
                  alt="Mersive Technologies Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.experienceContent}>
                <h3>Demand Generation Manager – Digital Advertising and Email Marketing</h3>
                <div className={styles.companyInfo}>
                  <span className="company-name">Mersive Technologies</span>
                  <span className="date-range">September 2020 - December 2020</span>
                </div>
                <p className={styles.experienceDescription}>
                  Led demand generation efforts through digital advertising and email marketing campaigns for a B2B technology company specializing in wireless collaboration solutions.
                </p>
                <Link href="/companies/mersive" className={styles.readMore}>Read More</Link>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.companyLogo}>
                <Image 
                  src="/images/mersive-logo.jpg" 
                  alt="Mersive Technologies Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.experienceContent}>
                <h3>Email Marketing Manager</h3>
                <div className={styles.companyInfo}>
                  <span className="company-name">Mersive Technologies</span>
                  <span className="date-range">February 2019 - September 2020</span>
                </div>
                <p className={styles.experienceDescription}>
                  Managed email marketing strategy and execution, focusing on lead nurturing, customer engagement, and retention campaigns.
                </p>
                <Link href="/companies/mersive" className={styles.readMore}>Read More</Link>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.companyLogo}>
                <Image 
                  src="/images/sphero-logo.jpg" 
                  alt="Sphero Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.experienceContent}>
                <h3>Ecommerce Marketing Manager</h3>
                <div className={styles.companyInfo}>
                  <span className="company-name">Sphero</span>
                  <span className="date-range">June 2017 - February 2019</span>
                </div>
                <p className={styles.experienceDescription}>
                  Led ecommerce marketing initiatives for an educational robotics company, focusing on driving online sales and customer acquisition.
                </p>
                <Link href="/companies/sphero" className={styles.readMore}>Read More</Link>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.companyLogo}>
                <Image 
                  src="/images/placeable-logo.jpg" 
                  alt="Placeable Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.experienceContent}>
                <h3>Sales and Marketing Operations Analyst</h3>
                <div className={styles.companyInfo}>
                  <span className="company-name">Placeable</span>
                  <span className="date-range">February 2016 - July 2017</span>
                </div>
                <p className={styles.experienceDescription}>
                  Supported sales and marketing operations through data analysis, reporting, and process optimization.
                </p>
                <Link href="/companies/placeable" className={styles.readMore}>Read More</Link>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.companyLogo}>
                <Image 
                  src="/images/evo-logo.jpg" 
                  alt="EVO Payments Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.experienceContent}>
                <h3>Sales and Marketing Operations Manager</h3>
                <div className={styles.companyInfo}>
                  <span className="company-name">EVO Payments International</span>
                  <span className="date-range">August 2013 - February 2016</span>
                </div>
                <p className={styles.experienceDescription}>
                  Managed sales and marketing operations for a global payment processing company, focusing on process optimization and performance tracking.
                </p>
                <Link href="/companies/evo" className={styles.readMore}>Read More</Link>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.companyLogo}>
                <Image 
                  src="/images/ipcommerce-logo.jpg" 
                  alt="IP Commerce Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.experienceContent}>
                <h3>Marketing Engineer</h3>
                <div className={styles.companyInfo}>
                  <span className="company-name">IP Commerce</span>
                  <span className="date-range">November 2010 - April 2013</span>
                </div>
                <p className={styles.experienceDescription}>
                  Combined technical and marketing expertise to support product marketing initiatives for a payment processing software company.
                </p>
                <Link href="/companies/ipcommerce" className={styles.readMore}>Read More</Link>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.companyLogo}>
                <Image 
                  src="/images/bbbsc-logo.jpg" 
                  alt="Big Brothers Big Sisters Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.experienceContent}>
                <h3>Fund Development Vista</h3>
                <div className={styles.companyInfo}>
                  <span className="company-name">Big Brothers Big Sisters of Colorado</span>
                  <span className="date-range">June 2009 - September 2010</span>
                </div>
                <p className={styles.experienceDescription}>
                  Served as an AmeriCorps VISTA member supporting fund development initiatives for Big Brothers Big Sisters of Colorado.
                </p>
                <Link href="/companies/bbbsc" className={styles.readMore}>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 