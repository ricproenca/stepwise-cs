import styles from './Footer.module.css';

export default function Footer({ topicLabel, links }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.credit}>
          {topicLabel
            ? `Cambridge AS & A Level Computer Science (9618) · ${topicLabel}`
            : 'Cambridge AS & A Level Computer Science (9618) · Revision resource'}
        </p>
        {links ? (
          <div className={styles.actions}>{links}</div>
        ) : (
          <p className={styles.disclaimer}>Not affiliated with Cambridge Assessment International Education</p>
        )}
      </div>
    </footer>
  );
}
