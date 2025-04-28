import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../company.module.css';

export default function MailgunPage() {
  return (
    <section className={styles.companyPage}>
      <div className="container">
        <Link href="/experience" className={styles.backToExperience}>
          Back to Experience
        </Link>
        
        <div className={styles.companyHeader}>
          <div className={styles.companyLogoLarge}>
            <Image 
              src="/images/mailgun.svg" 
              alt="Mailgun Logo"
              width={90}
              height={90}
            />
          </div>
          <div className={styles.companyTitle}>
            <h1>Mailgun by Sinch</h1>
            <div className={styles.companyMeta}>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Position:</span>
                <span className={styles.metaValue}>Performance Marketing Manager - Team Lead</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Duration:</span>
                <span className={styles.metaValue}>January 2022 - August 2023</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Industry:</span>
                <span className={styles.metaValue}>Computer Software</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Company Size:</span>
                <span className={styles.metaValue}>201 - 500 employees</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.companyDescription}>
          <p>
            At Mailgun by Sinch, I led performance marketing initiatives and managed a team of digital marketers focused on driving user acquisition and revenue growth for Mailgun's email API services. My role involved developing and executing comprehensive digital marketing strategies across multiple channels to achieve business growth objectives.
          </p>
          <p>
            Mailgun is a leading email delivery platform that provides powerful APIs that enable businesses to send, receive, and track emails with ease. As part of Sinch, a global leader in cloud communications for mobile customer engagement, Mailgun serves developers and marketers with reliable email infrastructure.
          </p>
          <p>
            In my position as Performance Marketing Manager and Team Lead, I was responsible for planning, implementing, and optimizing digital marketing campaigns to drive qualified leads and customer acquisition. I managed a team of marketing specialists and worked closely with product, sales, and engineering teams to ensure alignment of marketing initiatives with business goals.
          </p>
        </div>
        
        <div className={styles.achievementsSection}>
          <h2>Key Achievements</h2>
          <ul className={styles.achievementsList}>
            <li>Scaled Google App Campaigns resulting in 45% year-over-year growth in new customer acquisition while maintaining target cost per acquisition</li>
            <li>Successfully launched and optimized Microsoft Advertising campaigns, establishing a new profitable acquisition channel that contributed 18% of total lead volume</li>
            <li>Developed and implemented creative testing framework for Meta advertising, increasing click-through rates by 32% and reducing cost per click by 24%</li>
            <li>Managed $1.2M annual digital advertising budget, consistently achieving ROI targets through strategic allocation and continuous optimization</li>
            <li>Led and mentored a team of three digital marketing specialists, implementing structured processes for campaign management and performance reporting</li>
            <li>Collaborated with product marketing to develop targeted messaging for different customer segments, resulting in improved conversion rates across the funnel</li>
            <li>Implemented advanced attribution modeling to accurately measure the impact of marketing initiatives on revenue, enabling more effective budget allocation</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 