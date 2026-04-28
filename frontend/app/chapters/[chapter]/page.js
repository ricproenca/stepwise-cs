import { notFound } from 'next/navigation';
import TopicCard from '../../../components/TopicCard';
import Footer from '../../../components/Footer';
import { chapters } from '../../../data/chapters';
import styles from './page.module.css';

export function generateStaticParams() {
  return chapters.map(c => ({ chapter: c.slug }));
}

export default async function ChapterPage({ params }) {
  const { chapter: slug } = await params;
  const chapter = chapters.find(c => c.slug === slug);

  if (!chapter) notFound();

  const available = chapter.topics.filter(t => t.status === 'available').length;

  return (
    <>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Chapter {chapter.number} &nbsp;·&nbsp; {chapter.level} &nbsp;·&nbsp; {chapter.paper}</p>
          <h1 className={styles.title}>{chapter.title}</h1>
          <p className={styles.subtitle}>
            {available === 0
              ? `${chapter.topics.length} topic${chapter.topics.length !== 1 ? 's' : ''} — coming soon`
              : `${available} of ${chapter.topics.length} topic${chapter.topics.length !== 1 ? 's' : ''} available`}
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {chapter.topics.map(topic => (
            <TopicCard key={topic.ref} topic={topic} />
          ))}
        </div>
      </main>

      <Footer topicLabel={`Chapter ${chapter.number} — ${chapter.title}`} />
    </>
  );
}
