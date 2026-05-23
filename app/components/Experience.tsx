import React from 'react';
import styles from './Experience.module.css';

export default function Experience() {
  const experiences = [
    {
      role: 'AI Engineer Intern',
      company: 'Authentic Education Hub (AEH)',
      location: 'Hanoi, Vietnam',
      duration: 'Dec 2024 - Mar 2025',
      points: [
        'Assisted in the development and enhancement of proprietary AI tools using leading frameworks including PyTorch, TensorFlow, and Hugging Face Transformers.',
        'Configured and deployed the Vintern-1b-v3.5 LLM locally to perform selective text and image information extraction, augmenting the system\'s NLP capabilities.'
      ]
    },
    {
      role: 'Image Processing Intern',
      company: 'Phenikaa X',
      location: 'Hanoi, Vietnam',
      duration: 'Jun 2022 - Aug 2022',
      points: [
        'Assisted in image processing and data annotation workflows to optimize object recognition and detection models for autonomous vehicles.'
      ]
    }
  ];

  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className="glass-card">
                <div className={styles.header}>
                  <h3>{exp.role}</h3>
                  <span className={styles.duration}>{exp.duration}</span>
                </div>
                <h4 className={styles.company}>{exp.company} | {exp.location}</h4>
                <ul className={styles.points}>
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
