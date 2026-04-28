import { notFound } from 'next/navigation';
import TopicCard from '../../../components/TopicCard';
import { chapters } from '../../../data/chapters';
import styles from './page.module.css';

export function generateStaticParams() {
  return chapters.map(c => ({ chapter: c.slug }));
}

export default async function ChapterPage({ params }) {
  const { chapter: slug } = await params;
  const chapter = chapters.find(c => c.slug === slug);

  if (!chapter) notFound();

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <a href="/" className={styles.backLink}>← All Chapters</a>
        <header className={styles.header}>
          <div className={styles.badges}>
            <span className={styles.chapterBadge}>Chapter {chapter.number}</span>
            <span className={styles.levelBadge}>{chapter.level} · {chapter.paper}</span>
          </div>
          <h1 className={styles.title}>{chapter.title}</h1>
          <p className={styles.meta}>{chapter.topics.length} topic{chapter.topics.length !== 1 ? 's' : ''}</p>
        </header>
        <div className={styles.grid}>
          {chapter.topics.map(topic => (
            <TopicCard key={topic.ref} topic={topic} />
          ))}
        </div>
      </div>
    </main>
  );
}
