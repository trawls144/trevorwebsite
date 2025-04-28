import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../company.module.css';

export default function PlaceablePage() {
  return (
    <section className={styles.companyPage}>
      <div className="container">
        <Link href="/experience" className={styles.backToExperience}>
          Back to Experience
        </Link>
        
        <div className={styles.companyHeader}>
          <div className={styles.companyLogoLarge}>
            <Image 
              src="/images/placeable.png" 
              alt="Placeable Logo"
              width={90}
              height={90}
            />
          </div>
          <div className={styles.companyTitle}>
            <h1>Placeable</h1>
            <div className={styles.companyMeta}>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Position:</span>
                <span className={styles.metaValue}>Sales and Marketing Operations Analyst</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Duration:</span>
                <span className={styles.metaValue}>February 2016 - July 2017</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Industry:</span>
                <span className={styles.metaValue}>Marketing and Advertising</span>
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
            At Placeable, I supported sales and marketing operations through data analysis, reporting, and process optimization. My role focused on providing analytical support to drive decision-making and improve operational efficiency across the sales and marketing functions.
          </p>
          <p>
            Placeable was a location marketing technology company that helped multi-location brands manage their location data and improve their local search visibility. The company provided solutions for enterprise businesses to ensure accurate location information across digital platforms, enhancing customer experiences and driving foot traffic to physical locations.
          </p>
          <p>
            As a Sales and Marketing Operations Analyst, I worked closely with both the sales and marketing teams to streamline processes, analyze performance metrics, and implement data-driven strategies to support business growth objectives.
          </p>
        </div>
        
        <div className={styles.achievementsSection}>
          <h2>Key Achievements</h2>
          <ul className={styles.achievementsList}>
            <li>Developed and maintained comprehensive sales and marketing dashboards that provided real-time visibility into key performance metrics</li>
            <li>Implemented lead scoring and qualification processes that improved sales efficiency and increased conversion rates by 20%</li>
            <li>Conducted in-depth analysis of marketing campaign performance to identify optimization opportunities and improve ROI</li>
            <li>Streamlined CRM processes and data management practices, resulting in improved data quality and user adoption</li>
            <li>Collaborated with cross-functional teams to develop and implement sales forecasting models that improved accuracy by 30%</li>
            <li>Created and maintained sales enablement materials to support the sales team in effectively communicating product value</li>
            <li>Managed marketing automation platform to ensure efficient lead routing and nurturing workflows</li>
            <li>Supported the development and implementation of sales compensation plans aligned with business objectives</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 