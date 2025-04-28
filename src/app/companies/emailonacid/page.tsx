import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../company.module.css';

export default function EmailOnAcidPage() {
  return (
    <section className={styles.companyPage}>
      <div className="container">
        <Link href="/experience" className={styles.backToExperience}>
          Back to Experience
        </Link>
        
        <div className={styles.companyHeader}>
          <div className={styles.companyLogoLarge}>
            <Image 
              src="/images/emailonacid.svg" 
              alt="Email on Acid Logo"
              width={90}
              height={90}
            />
          </div>
          <div className={styles.companyTitle}>
            <h1>Email on Acid</h1>
            <div className={styles.companyMeta}>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Position:</span>
                <span className={styles.metaValue}>Digital Marketing Manager</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Duration:</span>
                <span className={styles.metaValue}>December 2020 - January 2022</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Industry:</span>
                <span className={styles.metaValue}>Computer Software</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Company Size:</span>
                <span className={styles.metaValue}>11 - 50 employees</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.companyDescription}>
          <p>
            At Email on Acid, I managed comprehensive digital marketing strategy including paid search, social media advertising, and email marketing campaigns for an email testing and deliverability platform. My role focused on driving user acquisition, lead generation, and customer retention through data-driven marketing initiatives.
          </p>
          <p>
            Email on Acid is a leading email testing and deliverability platform that helps marketers ensure their emails look great and reach the inbox across all email clients and devices. The platform offers pre-deployment testing, email analytics, and deliverability tools to optimize email marketing performance.
          </p>
          <p>
            As Digital Marketing Manager, I was responsible for planning, implementing, and optimizing digital marketing campaigns across multiple channels to achieve business growth objectives. I worked closely with the content, product, and sales teams to develop integrated marketing strategies that drove qualified leads and customer acquisition.
          </p>
        </div>
        
        <div className={styles.achievementsSection}>
          <h2>Key Achievements</h2>
          <ul className={styles.achievementsList}>
            <li>Restructured Google Ads account architecture and implemented advanced bidding strategies, resulting in 40% improvement in conversion rates</li>
            <li>Expanded digital advertising presence to new platforms including LinkedIn and Twitter, diversifying acquisition channels and reducing dependency on single platforms</li>
            <li>Collaborated with content team to develop high-converting landing pages and marketing assets, improving overall campaign performance</li>
            <li>Implemented comprehensive analytics framework to track user journey from first touch to conversion, enabling more effective budget allocation</li>
            <li>Developed and executed email marketing campaigns that increased trial signups by 25% and improved customer retention rates</li>
            <li>Optimized website conversion paths through A/B testing and user behavior analysis, resulting in 30% increase in trial-to-paid conversions</li>
            <li>Managed SEO initiatives that improved organic search rankings for key terms, increasing organic traffic by 35% year-over-year</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 