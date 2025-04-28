import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../company.module.css';

export default function ActiveCampaignPage() {
  return (
    <section className={styles.companyPage}>
      <div className="container">
        <Link href="/experience" className={styles.backToExperience}>
          Back to Experience
        </Link>
        
        <div className={styles.companyHeader}>
          <div className={styles.companyLogoLarge}>
            <Image 
              src="/images/activecampaign.svg" 
              alt="ActiveCampaign Logo"
              width={90}
              height={90}
            />
          </div>
          <div className={styles.companyTitle}>
            <h1>ActiveCampaign</h1>
            <div className={styles.companyMeta}>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Position:</span>
                <span className={styles.metaValue}>Demand Generation Marketing Lead, Postmark</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Duration:</span>
                <span className={styles.metaValue}>August 2023 - Present</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Industry:</span>
                <span className={styles.metaValue}>Computer Software</span>
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
            At ActiveCampaign, I lead demand generation strategy and execution for Postmark, a transactional email service within the ActiveCampaign ecosystem. My role focuses on driving profitable user acquisition and growth through multi-channel digital marketing campaigns.
          </p>
          <p>
            ActiveCampaign is a leading provider of customer experience automation software, helping businesses connect and engage with their customers through email marketing, marketing automation, CRM, and messaging. Postmark, as part of ActiveCampaign, specializes in delivering transactional emails with industry-leading deliverability and speed.
          </p>
          <p>
            In my position, I am responsible for developing and implementing comprehensive marketing strategies that drive qualified leads, optimize conversion rates, and maximize return on investment across various digital channels. I work closely with cross-functional teams including product, sales, and creative to ensure alignment of marketing initiatives with business objectives and customer needs.
          </p>
        </div>
        
        <div className={styles.achievementsSection}>
          <h2>Key Achievements</h2>
          <ul className={styles.achievementsList}>
            <li>Developed and executed comprehensive digital advertising strategy across Google, Microsoft, and Meta platforms, resulting in 35% increase in qualified leads</li>
            <li>Optimized campaign performance through rigorous A/B testing and data analysis, improving conversion rates by 28% and reducing cost per acquisition by 22%</li>
            <li>Led cross-functional collaboration with product and sales teams to align marketing initiatives with business objectives and customer needs</li>
            <li>Implemented advanced tracking and attribution models to accurately measure campaign performance and ROI across multiple channels</li>
            <li>Spearheaded the development of targeted content marketing initiatives that increased organic traffic by 45% and improved lead quality</li>
            <li>Managed and optimized marketing automation workflows to nurture leads through the sales funnel, resulting in 30% higher conversion rates from MQL to SQL</li>
            <li>Conducted comprehensive competitive analysis to identify market opportunities and refine positioning strategy</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 