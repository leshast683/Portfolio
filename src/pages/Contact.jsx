import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.init('cSgkGdG-556T5nigW');
    emailjs.sendForm('template_i9by06s', 'template_i9by06s', form.current, 'cSgkGdG-556T5nigW')
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <motion.div
      className={styles.contact}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Contact</h1>
      <div className={styles.formContainer}>
        <div className={styles.leftSection}>
          <div className={styles.badge}>My Social Media Platforms</div>
          <div className={styles.socialMediaIcons}>
            <a href="https://www.instagram.com/im_a.l.e.x/?igsh=NWl0OWdsOGVsejZn&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <img src="/img/instagram.png" alt="Instagram" className={styles.socialIcon} />
            </a>
            <a href="https://www.tiktok.com/@im_a.l.e.x_" target="_blank" rel="noopener noreferrer">
              <img src="/img/tiktok.png" alt="TikTok" className={styles.socialIcon} />
            </a>
            <a href="https://www.youtube.com/@alexadventurez5043" target="_blank" rel="noopener noreferrer">
              <img src="/img/youtube.png" alt="YouTube" className={styles.socialIcon} />
            </a>
            <a href="https://www.linkedin.com/in/alex-stoliarchuk/?profileId=ACoAAC7fmAQBT6_Z9cuuSMTiytFceWL2C2x7DYI" target="_blank" rel="noopener noreferrer">
              <img src="/img/lin.png" alt="LinkedIn" className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="user_name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="user_email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Have any questions? Let me know!</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className={styles.formActions}>
            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
      {status === 'success' && <p className={styles.success}>Thank you for contacting me!</p>}
      {status === 'error' && <p className={styles.error}>Failed to send message. Please try again.</p>}
    </motion.div>
  );
}