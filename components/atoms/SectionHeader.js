import styles from '../../styles/atoms/SectionHeader.module.css';

function SectionHeader({ headingText, paragraphText }) {
  return (
    <header className={styles.sectionHeader}>
      <h2>{headingText}</h2>
      <p>{paragraphText}</p>
    </header>
  )
}

export default SectionHeader;