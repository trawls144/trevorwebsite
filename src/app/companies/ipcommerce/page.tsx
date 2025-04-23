import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../company.module.css';

export default function IPCommercePage() {
  return (
    <section className={styles.companyPage}>
      <div className="container">
        <Link href="/experience" className={styles.backToExperience}>
          Back to Experience
        </Link>
        
        <div className={styles.companyHeader}>
          <div className={styles.companyLogoLarge}>
            <Image 
              src="/images/ipcommerce-logo.jpg" 
              alt="IP Commerce Logo"
              width={90}
              height={90}
            />
          </div>
          <div className={styles.companyTitle}>
            <h1>IP Commerce</h1>
            <div className={styles.companyMeta}>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Position:</span>
                <span className={styles.metaValue}>Marketing Operations Manager</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Duration:</span>
                <span className={styles.metaValue}>March 2010 - June 2011</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Industry:</span>
                <span className={styles.metaValue}>Financial Technology</span>
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
            At IP Commerce, I managed marketing operations for a financial technology company that provided payment processing solutions and APIs. My role focused on developing and implementing operational processes to support marketing initiatives and drive business growth.
          </p>
          <p>
            IP Commerce was a financial technology company that developed payment processing solutions and APIs for businesses. The company provided a platform that enabled developers to integrate payment processing capabilities into their applications, making it easier for businesses to accept electronic payments.
          </p>
          <p>
            As Marketing Operations Manager, I was responsible for overseeing marketing technology infrastructure, managing lead generation processes, and implementing data-driven strategies to optimize marketing performance. I worked closely with sales, product, and engineering teams to ensure alignment of marketing initiatives with business objectives.
          </p>
        </div>
        
        <div className={styles.achievementsSection}>
          <h2>Key Achievements</h2>
          <ul className={styles.achievementsList}>
            <li>Implemented marketing automation platform that improved lead nurturing and increased conversion rates by 30%</li>
            <li>Developed and maintained comprehensive marketing dashboards that provided real-time visibility into campaign performance</li>
            <li>Established lead scoring and qualification processes that improved sales efficiency and reduced response time</li>
            <li>Created and managed content distribution strategy across multiple channels to increase brand awareness</li>
            <li>Implemented A/B testing framework for marketing campaigns that improved engagement and conversion metrics</li>
            <li>Collaborated with sales team to develop and implement lead routing and follow-up processes</li>
            <li>Managed marketing technology stack and ensured integration with CRM and other business systems</li>
            <li>Developed and maintained marketing operations documentation and best practices</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 