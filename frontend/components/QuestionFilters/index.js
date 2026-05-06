'use client';

import styles from './QuestionFilters.module.css';

const DIFFICULTIES = ['all', 'Easy', 'Medium', 'Hard'];

export default function QuestionFilters({ difficulty, command, commands, onDifficulty, onCommand }) {
  return (
    <div className={styles.filters}>
      <div>
        <p className={styles.label}>Difficulty</p>
        <div className={styles.tabGroup} role="group" aria-label="Filter by difficulty">
          {DIFFICULTIES.map(d => (
            <button
              key={d}
              className={`${styles.tab} ${difficulty === d ? styles.active : ''}`}
              onClick={() => onDifficulty(d)}
              aria-pressed={difficulty === d}
            >
              {d === 'all' ? 'All' : d}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className={styles.label}>Command Word</p>
        <select
          className={styles.select}
          value={command}
          onChange={e => onCommand(e.target.value)}
          aria-label="Filter by command word"
        >
          <option value="all">All</option>
          {commands.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    </div>
  );
}
