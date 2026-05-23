import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About & Education</h2>
        <div className={styles.aboutGrid}>
          <div className="glass-card">
            <h3>University of the West of England Bristol</h3>
            <p className={styles.degree}>B.S. in Computer Science - Artificial Intelligence</p>
            <p className={styles.duration}>Aug 2022 - Expected May 2026</p>
            <p className={styles.details}>Current Honours Mark: 75.39%</p>
            <div className={styles.cert}>
              <strong>Certifications:</strong> IELTS 6.5 (Valid through May 2025)
            </div>
          </div>
          <div className="glass-card">
            <h3>My Journey</h3>
            <p className={styles.text}>
              I am passionate about creating impactful software that leverages the power of Artificial Intelligence. 
              My journey involves working with state-of-the-art frameworks like PyTorch and Hugging Face, 
              deploying LLMs locally, and building robust backend systems that can handle complex workflows seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
