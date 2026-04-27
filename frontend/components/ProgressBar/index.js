import styles from './ProgressBar.module.css';

export default function ProgressBar({ attempted, correct, total, onReset }) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <div className={styles.container}>
      <div>
        <span className={styles.label}>Progress</span>
        <div className={styles.counts}>
          <span className={styles.attempted}><strong>{attempted}</strong> attempted</span>
          <span className={styles.correct}><strong>{correct}</strong> correct</span>
          <span className={styles.total}>of {total}</span>
        </div>
      </div>
      <div className={styles.barWrap}>
        <div className={styles.barTrack}>
          <div className={styles.barFill} style={{ width: `${pct}%` }} />
        </div>
      </div>
      <button className={styles.resetBtn} onClick={onReset} aria-label="Reset all progress">
        Reset
      </button>
    </div>
  );
}
