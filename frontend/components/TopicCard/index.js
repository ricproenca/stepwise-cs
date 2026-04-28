import Link from 'next/link';
import styles from './TopicCard.module.css';

export default function TopicCard({ topic }) {
  const isPending = topic.status === 'pending';
  return (
    <article className={`${styles.card} ${isPending ? styles.pending : ''}`}>
      <div className={styles.cardHeader}>
        <span className={isPending ? styles.badgeOutline : styles.badge}>{topic.ref}</span>
        <h4 className={styles.cardTitle}>{topic.title}</h4>
      </div>
      <p className={styles.cardBody}>{isPending ? 'Not yet available' : topic.stats}</p>
      <div className={styles.cardFooter}>
        {isPending ? (
          <span className={styles.tag}>Coming soon</span>
        ) : (
          <>
            <Link href={`/topics/${topic.slug}`} className={styles.btn}>Notes</Link>
            <Link href={`/topics/${topic.slug}/questions`} className={`${styles.btn} ${styles.btnOutline}`}>Questions</Link>
            <Link href={`/topics/${topic.slug}/glossary`} className={`${styles.btn} ${styles.btnOutline}`}>Glossary</Link>
          </>
        )}
      </div>
    </article>
  );
}
