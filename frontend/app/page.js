import FilterTabs from '../components/FilterTabs';
import Footer from '../components/Footer';
import { topicSections } from '../data/topics';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <svg width="56" height="68" viewBox="0 0 30 36" fill="none" aria-hidden="true" focusable="false">
            <path d="M15 1L2 6v14c0 9 5.5 13 13 15C22.5 33 28 29 28 20V6L15 1z" fill="#133844" stroke="#8EE8D8" strokeWidth="0.5"/>
            <path d="M15 5L6 9v11c0 7 4 11 9 13 5-2 9-6 9-13V9L15 5z" fill="#8EE8D8"/>
            <path d="M15 9L8 12v8c0 5 3 8 7 10 4-2 7-5 7-10V12L15 9z" fill="#133844"/>
            <rect x="13.5" y="12" width="3" height="10" rx="0.5" fill="#8EE8D8"/>
            <rect x="9.5" y="15.5" width="11" height="3" rx="0.5" fill="#8EE8D8"/>
            <circle cx="11" cy="13.5" r="1.2" fill="#8EE8D8" opacity="0.7"/>
            <circle cx="19" cy="13.5" r="1.2" fill="#8EE8D8" opacity="0.7"/>
            <circle cx="11" cy="23" r="1.2" fill="#8EE8D8" opacity="0.7"/>
            <circle cx="19" cy="23" r="1.2" fill="#8EE8D8" opacity="0.7"/>
          </svg>
          <div>
            <p className={styles.eyebrow}>Cambridge International Education</p>
            <h1 className={styles.title}>AS &amp; A Level Computer Science</h1>
            <p className={styles.subtitle}>Syllabus 9618 &nbsp;·&nbsp; Revision notes, practice questions, and glossary</p>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.topicsHeader}>
          <h2 className={styles.topicsTitle}>Topics</h2>
        </div>
        <FilterTabs sections={topicSections} />
      </main>

      <Footer />
    </>
  );
}
