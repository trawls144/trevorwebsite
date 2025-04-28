import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../company.module.css';

export default function EVOPage() {
  return (
    <section className={styles.companyPage}>
      <div className="container">
        <Link href="/experience" className={styles.backToExperience}>
          Back to Experience
        </Link>
        
        <div className={styles.companyHeader}>
          <div className={styles.companyLogoLarge}>
            <Image 
              src="/images/evo.svg" 
              alt="EVO Payments Logo"
              width={90}
              height={90}
            />
          </div>
          <div className={styles.companyTitle}>
            <h1>EVO Payments International</h1>
            <div className={styles.companyMeta}>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Position:</span>
                <span className={styles.metaValue}>Sales and Marketing Operations Manager</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Duration:</span>
                <span className={styles.metaValue}>August 2013 - February 2016</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Industry:</span>
                <span className={styles.metaValue}>Financial Services</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Company Size:</span>
                <span className={styles.metaValue}>1001 - 5000 employees</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.companyDescription}>
          <p>
            At EVO Payments International, I managed sales and marketing operations for a global payment processing company, focusing on process optimization and performance tracking. My role involved developing and implementing operational strategies to support sales and marketing initiatives across multiple regions.
          </p>
          <p>
            EVO Payments International is a leading payment technology and services provider, operating in more than 50 markets and supporting more than 150 currencies globally. The company provides a range of payment solutions to merchants, from small businesses to multinational corporations, helping them accept electronic payments securely and efficiently.
          </p>
          <p>
            As Sales and Marketing Operations Manager, I was responsible for overseeing operational processes, analyzing performance metrics, and implementing improvements to enhance efficiency and effectiveness across the sales and marketing functions. I worked closely with cross-functional teams to ensure alignment of operational initiatives with business objectives.
          </p>
        </div>
        
        <div className={styles.achievementsSection}>
          <h2>Key Achievements</h2>
          <ul className={styles.achievementsList}>
            <li>Developed and implemented standardized sales processes across multiple regions, improving efficiency and reducing sales cycle time by 25%</li>
            <li>Created comprehensive reporting dashboards that provided real-time visibility into key performance metrics for executive leadership</li>
            <li>Led the implementation of a new CRM system, including requirements gathering, configuration, and user training, resulting in 90% user adoption</li>
            <li>Established lead management processes that improved lead quality and increased conversion rates by 30%</li>
            <li>Collaborated with marketing team to develop and implement campaign tracking and ROI measurement frameworks</li>
            <li>Managed cross-functional projects to streamline operations and improve collaboration between sales, marketing, and product teams</li>
            <li>Conducted regular analysis of sales performance data to identify trends and opportunities for improvement</li>
            <li>Developed and maintained sales forecasting models that improved accuracy by 35% and supported more effective resource allocation</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 