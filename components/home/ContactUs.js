import { useState } from 'react';
import SectionHeader from '../atoms/SectionHeader';
import styles from '../../styles/home/ContactUs.module.css';
import buttonStyles from '../../styles/atoms/Button.module.css';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Message received');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className={styles.contactUs}>
      <div className="container">
        <SectionHeader
          headingText="Get in touch with us"
          paragraphText="Please submit your business information and an TopCrew Business representative will follow up with you within 24 hours."
        />

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            id="email"
            className={styles.contactInput}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />

          <textarea
            id="message"
            className={styles.contactTextarea}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={10}
          ></textarea>

          <button
            type="submit"
            className={`${buttonStyles.btn} ${buttonStyles.borderedDark} ${styles.contactFormButton}`}
          >
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
