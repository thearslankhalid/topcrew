import Image from 'next/image';
import styles from '../../styles/home/Hero.module.css';
import buttonStyles from '../../styles/atoms/Button.module.css';

function Hero() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <h1>
            Hire professionals for your
            <br />
            next big project
          </h1>
          <p>Connect to the professionals and make your projects successful</p>
          <a
            href="#contact"
            className={`${buttonStyles.btn} ${buttonStyles.primary} ${buttonStyles.primaryLight}`}
          >
            Let&apos;s get Started
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
