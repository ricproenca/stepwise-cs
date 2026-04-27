'use client';

import { useParams } from 'next/navigation';
import GlossarySearch from '../../../../components/GlossarySearch';
import { glossaryTerms, glossaryLetters } from '../../../../data/glossary-data-representation';
import styles from './glossary.module.css';

export default function GlossaryPage() {
  const { topic } = useParams();
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1 className={styles.title}>Glossary</h1>
          <p className={styles.subtitle}>Key terms for Data Representation — Cambridge 9618</p>
        </header>
        <GlossarySearch terms={glossaryTerms} letters={glossaryLetters} notesBase={`/topics/${topic}`} />
      </div>
    </main>
  );
}
