'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './TopicNav.module.css';

export default function TopicNav({ topic }) {
  const pathname = usePathname();
  const base = `/topics/${topic}`;

  const isNotes = pathname === base || pathname === `${base}/`;
  const isQuestions = pathname.startsWith(`${base}/questions`);
  const isGlossary = pathname.startsWith(`${base}/glossary`);

  return (
    <nav className={styles.subnav} aria-label="Topic pages">
      <Link href={base} className={`${styles.link} ${isNotes ? styles.active : ''}`} aria-current={isNotes ? 'page' : undefined}>Notes</Link>
      <Link href={`${base}/questions`} className={`${styles.link} ${isQuestions ? styles.active : ''}`} aria-current={isQuestions ? 'page' : undefined}>Questions</Link>
      <Link href={`${base}/glossary`} className={`${styles.link} ${isGlossary ? styles.active : ''}`} aria-current={isGlossary ? 'page' : undefined}>Glossary</Link>
    </nav>
  );
}
