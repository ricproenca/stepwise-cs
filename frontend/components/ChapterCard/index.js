import Link from 'next/link';
import styles from './ChapterCard.module.css';

export default function ChapterCard({ chapter }) {
  const available = chapter.topics.filter(t => t.status === 'available').length;
  const total = chapter.topics.length;

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.badges}>
          <span className={styles.chapterBadge}>Chapter {chapter.number}</span>
          <span className={styles.levelBadge}>{chapter.level} · {chapter.paper}</span>
        </div>
        <h3 className={styles.title}>{chapter.title}</h3>
      </div>
      <p className={styles.availability}>
        {available === 0
          ? `${total} topic${total !== 1 ? 's' : ''} — coming soon`
          : `${available} of ${total} topic${total !== 1 ? 's' : ''} available`}
      </p>
      <div className={styles.cardFooter}>
        {available > 0 ? (
          <Link href={`/chapters/${chapter.slug}`} className={styles.btn}>View Chapter</Link>
        ) : (
          <span className={styles.tag}>Coming soon</span>
        )}
      </div>
    </article>
  );
}
