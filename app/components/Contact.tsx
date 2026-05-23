"use client";
import React, { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/py/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.status === 'success') {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className={styles.contactWrapper}>
          <div className="glass-card">
            <h3 className={styles.contactTitle}>Let's build something amazing together.</h3>
            <p className={styles.contactText}>
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className={styles.contactInfo}>
              <p>Email: minhhsgs.1@gmail.com</p>
              <p>Phone: +84 912 390 127</p>
              <p>Location: Hanoi, Vietnam</p>
            </div>
          </div>
          <form className={`glass-card ${styles.form}`} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                required 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                required 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                required
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className={styles.successMsg}>Message sent successfully!</p>}
            {status === 'error' && <p className={styles.errorMsg}>Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
