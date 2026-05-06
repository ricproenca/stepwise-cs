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
      <Link href="/" className={styles.logo} aria-label="Stepwise CS home">
        <img src="/assets/logo.png" alt="" className={styles.logoImg} />
        <span className={styles.logoText}>Stepwise CS</span>
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
