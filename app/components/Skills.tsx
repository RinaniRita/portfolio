import React from 'react';
import styles from './Skills.module.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'Flask', 'FastAPI', 'SQLAlchemy', 'SQLModel']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Docker', 'Git', 'Nginx', 'Uvicorn', 'SQLite', 'MySQL', 'FAISS', 'Redis']
    },
    {
      title: 'Soft Skills',
      skills: ['Time Management', 'Teamwork', 'Communication', 'Analytical Thinking', 'Problem Solving']
    }
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card">
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.badges}>
                {category.skills.map((skill, idx) => (
                  <span key={idx} className={styles.badge}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
