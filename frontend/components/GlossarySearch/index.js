'use client';

import { useState } from 'react';
import GlossaryTerm from '../GlossaryTerm';
import styles from './GlossarySearch.module.css';

export default function GlossarySearch({ terms, letters, notesBase }) {
  const [query, setQuery] = useState('');
  const q = query.toLowerCase().trim();

  const filtered = q ? terms.filter(t => {
    const hay = `${t.name} ${t.definition} ${t.plain} ${t.example || ''} ${t.differentiator || ''}`.toLowerCase();
    return hay.includes(q);
  }) : terms;

  const visibleLetters = letters.filter(letter =>
    filtered.some(t => t.letter === letter)
  );

  return (
    <>
      <div className={styles.controls}>
        <div>
          <label htmlFor="gloss-search" className="visually-hidden">Search glossary terms</label>
          <input
            type="text"
            id="gloss-search"
            className={styles.searchInput}
            placeholder="Search terms…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search glossary terms"
          />
        </div>
        <nav className={styles.letterNav} aria-label="Jump to letter">
          {letters.map(letter => (
            <a key={letter} href={`#letter-${letter.toLowerCase()}`} aria-label={`Terms starting with ${letter}`}>
              {letter}
            </a>
          ))}
        </nav>
      </div>

      {filtered.length === 0 && (
        <p className={styles.noResults}>No terms match your search.</p>
      )}

      {visibleLetters.map(letter => (
        <section key={letter} id={`letter-${letter.toLowerCase()}`} aria-labelledby={`heading-${letter}`}>
          <h2 id={`heading-${letter}`} className={styles.letterHeading}>{letter}</h2>
          {filtered.filter(t => t.letter === letter).map(term => (
            <GlossaryTerm key={term.id} term={term} notesBase={notesBase} />
          ))}
        </section>
      ))}
    </>
  );
}
