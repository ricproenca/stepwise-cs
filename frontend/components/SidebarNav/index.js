'use client';

import { useEffect, useState } from 'react';
import styles from './SidebarNav.module.css';

export default function SidebarNav({ sections }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const headings = document.querySelectorAll('h2[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    headings.forEach(h => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav}>
      <p className={styles.title}>Contents</p>
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`${styles.link} ${activeId === id ? styles.active : ''}`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
