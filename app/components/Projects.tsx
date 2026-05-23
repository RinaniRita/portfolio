import React from 'react';
import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'Apollo Hotel AI Concierge',
      tech: 'Python, FastAPI, Redis, Docker, FAISS, SQLite',
      description: 'Engineered a production-grade hospitality automation system integrating Retrieval-Augmented Generation (RAG) and Autonomous Tool-Calling for luxury hotels. Orchestrated specialized staff bots alongside a Guest Bot.',
      link: '#'
    },
    {
      title: 'Food Network Modernization',
      tech: 'Django, JavaScript, LLM',
      description: 'Led frontend development and UI/UX modernization for a multi-vendor culinary marketplace. Integrated LLM functionalities to enrich the user experience and intelligent filtering.',
      link: '#'
    },
    {
      title: 'Restaurant Chain Management System',
      tech: 'Python, Flask, HTML/CSS/JS, MySQL, Docker',
      description: 'Built a full-stack web application to manage business operations for multiple restaurants concurrently, including reservations, ordering, and HRMS state management.',
      link: '#'
    },
    {
      title: 'LLM Vintern Chatbot API',
      tech: 'FastAPI, SQLModel, JWT, Uvicorn',
      description: 'Created a RESTful API backend for a chatbot powered by the Vintern-1B-v3.5 LLM, supporting text and image analysis with JWT-based authentication.',
      link: '#'
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Notable Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((proj, index) => (
            <div key={index} className="glass-card">
              <h3 className={styles.title}>{proj.title}</h3>
              <p className={styles.tech}>{proj.tech}</p>
              <p className={styles.description}>{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
