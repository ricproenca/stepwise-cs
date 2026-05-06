import FilterTabs from '../components/FilterTabs';
import { chapters } from '../data/chapters';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div>
            <p className={styles.eyebrow}>Cambridge International Education</p>
            <h1 className={styles.title}>AS &amp; A Level Computer Science</h1>
            <p className={styles.subtitle}>Syllabus 9618 &nbsp;·&nbsp; Revision notes, practice questions, and glossary</p>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.topicsHeader}>
          <h2 className={styles.topicsTitle}>Chapters</h2>
        </div>
        <FilterTabs chapters={chapters} />
      </main>

    </>
  );
}
