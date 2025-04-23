import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../company.module.css';

export default function MersivePage() {
  return (
    <section className={styles.companyPage}>
      <div className="container">
        <Link href="/experience" className={styles.backToExperience}>
          Back to Experience
        </Link>
        
        <div className={styles.companyHeader}>
          <div className={styles.companyLogoLarge}>
            <Image 
              src="/images/mersive-logo.jpg" 
              alt="Mersive Technologies Logo"
              width={90}
              height={90}
            />
          </div>
          <div className={styles.companyTitle}>
            <h1>Mersive Technologies</h1>
            <div className={styles.companyMeta}>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Duration:</span>
                <span className={styles.metaValue}>February 2019 - December 2020</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Industry:</span>
                <span className={styles.metaValue}>Information Technology & Services</span>
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
            At Mersive Technologies, I held two positions over a nearly two-year period, progressing from Email Marketing Manager to Demand Generation Manager. Mersive is a leading provider of wireless collaboration solutions that transform the way people work together in meeting rooms and learning spaces.
          </p>
          <p>
            Mersive's flagship product, Solstice, enables multiple users to simultaneously share content from their devices to the room display, creating a more collaborative and productive meeting environment. The company serves customers across various industries including corporate, education, and government sectors.
          </p>
          <p>
            During my time at Mersive, I contributed to the company's marketing efforts through strategic email marketing campaigns, digital advertising initiatives, and demand generation strategies aimed at driving qualified leads and supporting the sales team.
          </p>
        </div>
        
        <div className={styles.roleSection}>
          <h2>Roles at Mersive Technologies</h2>
          
          <div className={styles.roleCard}>
            <h3 className={styles.roleTitle}>Demand Generation Manager – Digital Advertising and Email Marketing</h3>
            <div className={styles.roleDuration}>September 2020 - December 2020</div>
            <p className={styles.roleDescription}>
              Led demand generation efforts through digital advertising and email marketing campaigns for Mersive's wireless collaboration solutions. Responsible for developing and implementing multi-channel marketing strategies to drive qualified leads and support sales objectives.
            </p>
            <h4 className={styles.achievementsTitle}>Key Achievements:</h4>
            <ul className={styles.achievementsList}>
              <li>Developed integrated digital advertising strategy across search, display, and social media platforms to drive qualified leads</li>
              <li>Optimized campaign targeting and messaging to improve engagement with key decision-makers in target industries</li>
              <li>Collaborated with sales team to align marketing initiatives with sales objectives and improve lead quality</li>
              <li>Implemented A/B testing framework for digital campaigns, resulting in 25% improvement in click-through rates</li>
              <li>Managed and optimized marketing budget to maximize ROI across channels</li>
            </ul>
          </div>
          
          <div className={styles.roleCard}>
            <h3 className={styles.roleTitle}>Email Marketing Manager</h3>
            <div className={styles.roleDuration}>February 2019 - September 2020</div>
            <p className={styles.roleDescription}>
              Managed email marketing strategy and execution, focusing on lead nurturing, customer engagement, and retention campaigns. Responsible for developing and implementing email marketing programs that supported the company's growth objectives.
            </p>
            <h4 className={styles.achievementsTitle}>Key Achievements:</h4>
            <ul className={styles.achievementsList}>
              <li>Developed and executed comprehensive email marketing strategy that increased engagement rates by 40%</li>
              <li>Created automated email nurture programs that improved lead-to-opportunity conversion by 35%</li>
              <li>Implemented segmentation strategies that increased email open rates by 25% and click-through rates by 30%</li>
              <li>Collaborated with content team to develop targeted email content for different stages of the buyer's journey</li>
              <li>Managed email marketing calendar and coordinated campaigns with other marketing initiatives</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 