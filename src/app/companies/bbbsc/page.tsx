import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../company.module.css';

export default function BBBSCPage() {
  return (
    <section className={styles.companyPage}>
      <div className="container">
        <Link href="/experience" className={styles.backToExperience}>
          Back to Experience
        </Link>
        
        <div className={styles.companyHeader}>
          <div className={styles.companyLogoLarge}>
            <Image 
              src="/images/bbbsc.svg" 
              alt="Big Brothers Big Sisters Logo"
              width={90}
              height={90}
            />
          </div>
          <div className={styles.companyTitle}>
            <h1>Big Brothers Big Sisters of Colorado</h1>
            <div className={styles.companyMeta}>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Position:</span>
                <span className={styles.metaValue}>Marketing and Communications Manager</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Duration:</span>
                <span className={styles.metaValue}>June 2011 - August 2013</span>
              </div>
              <div className={styles.companyMetaItem}>
                <span className={styles.metaLabel}>Industry:</span>
                <span className={styles.metaValue}>Non-Profit</span>
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
            At Big Brothers Big Sisters of Colorado, I managed marketing and communications initiatives for a non-profit organization dedicated to creating and supporting one-to-one mentoring relationships. My role focused on developing and implementing comprehensive marketing strategies to increase volunteer recruitment, donor engagement, and community awareness.
          </p>
          <p>
            Big Brothers Big Sisters of Colorado is a non-profit organization that matches children facing adversity with adult mentors who provide guidance, support, and friendship. The organization operates across multiple regions in Colorado, helping young people achieve their full potential through meaningful mentoring relationships.
          </p>
          <p>
            As Marketing and Communications Manager, I was responsible for developing and executing marketing campaigns, managing digital and traditional media channels, and creating compelling content to support the organization's mission. I worked closely with program staff, volunteers, and community partners to ensure consistent messaging and effective outreach.
          </p>
        </div>
        
        <div className={styles.achievementsSection}>
          <h2>Key Achievements</h2>
          <ul className={styles.achievementsList}>
            <li>Developed and implemented integrated marketing campaigns that increased volunteer applications by 40% and improved donor retention rates</li>
            <li>Created and managed content strategy across multiple channels including website, social media, email, and print materials</li>
            <li>Led rebranding initiative that modernized the organization's visual identity and messaging framework</li>
            <li>Implemented digital marketing strategies that increased online donations by 35% and improved engagement metrics</li>
            <li>Managed media relations and secured coverage in local and regional publications, increasing community awareness</li>
            <li>Developed and executed event marketing strategies that increased attendance and fundraising at key events</li>
            <li>Created and maintained brand guidelines to ensure consistent messaging across all communication channels</li>
            <li>Collaborated with program staff to develop compelling success stories that demonstrated the impact of mentoring relationships</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 