'use client';

import { useState } from 'react';
import ChapterCard from '../ChapterCard';
import styles from './FilterTabs.module.css';

export default function FilterTabs({ chapters }) {
  const [active, setActive] = useState('all');

  const visible = active === 'all' ? chapters : chapters.filter(c => c.level === active);

  return (
    <>
      <div className={styles.tabBar} role="group" aria-label="Filter by level">
        {['all', 'AS', 'A Level'].map(level => (
          <button
            key={level}
            className={`${styles.tab} ${active === level ? styles.active : ''}`}
            onClick={() => setActive(level)}
          >
            {level === 'all' ? 'All chapters' : level}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {visible.map(chapter => (
          <ChapterCard key={chapter.slug} chapter={chapter} />
        ))}
      </div>
    </>
  );
}
