import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/layout/Footer.module.css';
import buttonStyles from '../../styles/atoms/Button.module.css';

const infoList = [
  {
    icon: '/assets/email.png',
    info: 'hello@topcrew.agency',
  },
  {
    icon: '/assets/location.png',
    info: 'Building no. 4, Street 3, Sector I8/1, Islamabad',
  },
];

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Email received');
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.flexContainer}>
          <Image
            src="/assets/logo-white.png"
            alt="TopCrew Logo"
            width={151}
            height={40}
          />

          <ul className={styles.infoList}>
            {infoList.map((info, index) => (
              <li key={`info-item-${index}`}>
                <Image src={info.icon} alt="icon" width={24} height={24} />
                <span>{info.info}</span>
              </li>
            ))}
          </ul>

          <form className={styles.emailForm} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <Image
                src="/assets/email.png"
                alt="Email icon"
                width={24}
                height={24}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className={`${buttonStyles.btn} ${buttonStyles.primary} ${buttonStyles.primaryDark}`}
            >
              Send
            </button>
          </form>
        </div>

        <hr />

        <div className={styles.footerBottomContainer}>
          <span>&copy; 2022 TopCrew. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
