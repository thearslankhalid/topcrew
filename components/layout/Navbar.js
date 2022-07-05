import Image from 'next/image';
import styles from '../../styles/layout/Navbar.module.css';
import buttonStyles from '../../styles/atoms/Button.module.css';

function Navbar() {
  return (
    <nav className={`${styles.nav}`}>
      <div className="container">
        <div className={styles.navbar}>
          <Image
            src="/assets/logo.png"
            alt="TopCrew Logo"
            width={150}
            height={40}
          />

          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
          </ul>

          <a href="#contact" className={`${buttonStyles.btn} ${buttonStyles.bordered}`}>
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
