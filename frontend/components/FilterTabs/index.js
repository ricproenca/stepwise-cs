'use client';

import { useState } from 'react';
import styles from './FilterTabs.module.css';

export default function FilterTabs({ sections }) {
  const [active, setActive] = useState('all');

  const visible = active === 'all' ? sections : sections.filter(s => s.level === active);

  return (
    <>
      <div className={styles.tabBar} role="group" aria-label="Filter by level">
        {['all', 'AS', 'A Level'].map(level => (
          <button
            key={level}
            className={`${styles.tab} ${active === level ? styles.active : ''}`}
            onClick={() => setActive(level)}
            data-filter={level}
          >
            {level === 'all' ? 'All topics' : level}
          </button>
        ))}
      </div>
      {visible.map(section => (
        <section key={section.level} className={styles.section} aria-labelledby={`heading-${section.level.replace(' ', '-')}`}>
          {visible.length > 1}
          <div className={styles.grid}>
            {section.topics.map(topic => (
              <TopicCardSlot key={topic.ref} topic={topic} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

function TopicCardSlot({ topic }) {
  const isPending = topic.status === 'pending';
  return (
    <article className={`${styles.card} ${isPending ? styles.pending : ''}`} data-level={topic.level} data-slug={topic.slug}>
      <div className={styles.cardHeader}>
        <span className={isPending ? styles.badgeOutline : styles.badge}>{topic.ref}</span>
        <span className={styles.badgeOutline}>{topic.paper}</span>
        <h4 className={styles.cardTitle}>{topic.title}</h4>
      </div>
      <p className={styles.cardBody}>{isPending ? 'Not yet available' : topic.stats}</p>
      <div className={styles.cardFooter}>
        {isPending ? (
          <span className={styles.tag}>Coming soon</span>
        ) : (
          <>
            <a href={`/topics/${topic.slug}`} className={styles.btn}>Notes</a>
            <a href={`/topics/${topic.slug}/questions`} className={`${styles.btn} ${styles.btnOutline}`}>Questions</a>
            <a href={`/topics/${topic.slug}/glossary`} className={`${styles.btn} ${styles.btnOutline}`}>Glossary</a>
          </>
        )}
      </div>
    </article>
  );
}
