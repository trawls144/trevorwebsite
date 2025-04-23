import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../company.module.css';

export default function SpheroPage() {
  return (
    <section className={styles.companyPage}>
      <div className="container">
        <Link href="/experience" className={styles.backToExperience}>
          Back to Experience
        </Link>
        
        <div className={styles.companyHeader}>
          <div className={styles.companyLogoLarge}>
            <Image 
              src="/images/sphero-logo.jpg" 
              alt="Sphero Logo"
              width={90}
              height={90}
            />
          </div>
          <div className={styles.companyTitle}>
            <h1>Sphero</h1>
            <div className={styles.companyMeta}>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Position:</span>
                <span className={styles.metaValue}>Ecommerce Marketing Manager</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Duration:</span>
                <span className={styles.metaValue}>June 2017 - February 2019</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Industry:</span>
                <span className={styles.metaValue}>Primary/Secondary Education</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Company Size:</span>
                <span className={styles.metaValue}>51 - 200 employees</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.companyDescription}>
          <p>
            At Sphero, I led ecommerce marketing initiatives for an educational robotics company, focusing on driving online sales and customer acquisition. My role involved developing and implementing comprehensive digital marketing strategies to increase website traffic, improve conversion rates, and maximize revenue through the company's ecommerce platform.
          </p>
          <p>
            Sphero is an innovative company that creates programmable robots and STEAM-based educational tools that transform the way students learn and create through coding, science, music, and the arts. The company's products include app-enabled robots that make learning and creating fun while helping to build essential skills for the future.
          </p>
          <p>
            As Ecommerce Marketing Manager, I was responsible for managing the company's online store, optimizing the customer journey, and implementing marketing campaigns to drive sales. I worked closely with product, creative, and development teams to ensure a seamless shopping experience and effective marketing messaging.
          </p>
        </div>
        
        <div className={styles.achievementsSection}>
          <h2>Key Achievements</h2>
          <ul className={styles.achievementsList}>
            <li>Managed digital marketing campaigns across multiple channels to drive traffic and conversions to the ecommerce platform, resulting in 40% year-over-year growth in online sales</li>
            <li>Optimized product pages and checkout process to improve conversion rates, increasing overall conversion rate by 25%</li>
            <li>Implemented email marketing strategies to increase customer retention and lifetime value, achieving a 30% increase in repeat purchases</li>
            <li>Developed and executed seasonal promotional campaigns that generated record-breaking sales during key shopping periods</li>
            <li>Collaborated with product team to create compelling product launches that drove pre-orders and initial sales momentum</li>
            <li>Implemented analytics tracking and reporting to measure campaign performance and identify optimization opportunities</li>
            <li>Managed relationships with third-party marketplaces (Amazon, Best Buy, etc.) to expand sales channels and increase brand visibility</li>
            <li>Coordinated with international distributors to support global ecommerce initiatives and ensure consistent brand messaging</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 