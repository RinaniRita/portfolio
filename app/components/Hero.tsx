import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection} id="home">
      <div className={`container ${styles.heroContainer}`}>
        <div className={`animate-fade-up ${styles.heroContent}`}>
          <h2 className={styles.greeting}>Hi, I am</h2>
          <h1 className={styles.name}>Nguyen Nhat Minh</h1>
          <h3 className={styles.role}>
            <span className="gradient-text">AI Engineer</span> & Backend Developer
          </h3>
          <p className={styles.bio}>
            I specialize in building intelligent, scalable systems. With expertise in PyTorch, LLMs, and Python backends (FastAPI/Flask), I transform complex AI research into production-ready software.
          </p>
          <div className={styles.actions}>
            <a href="https://github.com/RinaniRita" target="_blank" rel="noreferrer" className={styles.primaryBtn}>
              GitHub Profile
            </a>
            <a href="https://drive.google.com/drive/folders/16qall6is6ZkbzDCqLtAr-cf2fIFELgTA" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
