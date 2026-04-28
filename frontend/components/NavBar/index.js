'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { chapters } from '../../data/chapters';
import styles from './NavBar.module.css';

function buildCrumbs(pathname, chapters) {
  const chapterMatch = pathname.match(/^\/chapters\/([\w-]+)/);
  if (chapterMatch) {
    const ch = chapters.find(c => c.slug === chapterMatch[1]);
    if (!ch) return [];
    return [
      { label: 'Chapters', href: '/' },
      { label: `Chapter ${ch.number} — ${ch.title}`, href: null },
    ];
  }

  const topicMatch = pathname.match(/^\/topics\/([\w-]+)/);
  if (topicMatch) {
    const ch = chapters.find(c => c.topics.some(t => t.slug === topicMatch[1]));
    const topic = ch?.topics.find(t => t.slug === topicMatch[1]);
    if (!ch || !topic) return [];
    return [
      { label: 'Chapters', href: '/' },
      { label: `Chapter ${ch.number}`, href: `/chapters/${ch.slug}` },
      { label: `${topic.ref} ${topic.title}`, href: null },
    ];
  }

  return [];
}

export default function NavBar() {
  const pathname = usePathname();
  const crumbs = buildCrumbs(pathname, chapters);

  return (
    <nav className={styles.nav} role="navigation" aria-label="Site navigation">
      <Link href="/" className={styles.logo} aria-label="Cambridge 9618 home">
        <svg width="32" height="38" viewBox="0 0 30 36" fill="none" aria-hidden="true" focusable="false">
          <path d="M15 1L2 6v14c0 9 5.5 13 13 15C22.5 33 28 29 28 20V6L15 1z" fill="#133844" stroke="#8EE8D8" strokeWidth="0.5"/>
          <path d="M15 5L6 9v11c0 7 4 11 9 13 5-2 9-6 9-13V9L15 5z" fill="#8EE8D8"/>
          <path d="M15 9L8 12v8c0 5 3 8 7 10 4-2 7-5 7-10V12L15 9z" fill="#133844"/>
          <rect x="13.5" y="12" width="3" height="10" rx="0.5" fill="#8EE8D8"/>
          <rect x="9.5" y="15.5" width="11" height="3" rx="0.5" fill="#8EE8D8"/>
        </svg>
        <div>
          <span className={styles.logoMain}>9618 CS</span>
          <span className={styles.logoSub}>Cambridge AS &amp; A Level</span>
        </div>
      </Link>

      {crumbs.length > 0 && (
        <ol className={styles.breadcrumb} aria-label="Breadcrumb">
          {crumbs.map((crumb, i) => (
            <li key={i} className={styles.crumb}>
              {i > 0 && <span className={styles.separator} aria-hidden="true">›</span>}
              {crumb.href
                ? <Link href={crumb.href} className={styles.crumbLink}>{crumb.label}</Link>
                : <span className={styles.crumbCurrent}>{crumb.label}</span>}
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
