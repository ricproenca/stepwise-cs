export function generateStaticParams() {
  return [{ topic: 'data-representation' }];
}

import NavBar from '../../../components/NavBar';
import TopicNav from '../../../components/TopicNav';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { chapters } from '../../../data/chapters';
import styles from './layout.module.css';

export default async function TopicLayout({ children, params }) {
  const { topic } = await params;
  const base = `/topics/${topic}`;

  const chapter = chapters.find(c => c.topics.some(t => t.slug === topic));
  const topicData = chapter?.topics.find(t => t.slug === topic) ?? {};
  const levelLabel = chapter?.level === 'AS' ? 'AS Level' : (chapter?.level ?? '');
  const paperLabel = chapter?.paper ?? '';

  const footerLinks = (
    <>
      <Link href={base} className={styles.footerBtn}>Notes</Link>
      <Link href={`${base}/questions`} className={styles.footerBtn}>Questions</Link>
      <Link href={`${base}/glossary`} className={styles.footerBtn}>Glossary</Link>
    </>
  );

  return (
    <>
      <NavBar />
      <TopicNav topic={topic} />
      <header className={styles.topicHeader}>
        <div className={styles.topicHeaderInner}>
          <div className={styles.badgeRow}>
            {topicData.ref && <span className={styles.badge}>{topicData.ref}</span>}
            {levelLabel && <span className={styles.badgeLight}>{levelLabel}</span>}
            {paperLabel && <span className={styles.badgeLight}>{paperLabel}</span>}
          </div>
          <h1 className={styles.topicTitle}>{topicData.title}</h1>
          {topicData.meta && <p className={styles.topicMeta}>{topicData.meta}</p>}
        </div>
      </header>
      {children}
      <Footer topicLabel={`Section ${topicData.ref} ${topicData.title}`} links={footerLinks} />
    </>
  );
}
