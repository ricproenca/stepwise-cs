import styles from './TopicHeader.module.css';

export default function TopicHeader({ topicData, levelLabel, paperLabel }) {
  return (
    <header className={styles.topicHeader}>
      <div className={styles.topicHeaderInner}>
        <div className={styles.badgeRow}>
          {topicData.ref && <span className={styles.badge}>{topicData.ref}</span>}
          {levelLabel && <span className={styles.badgeLight}>{levelLabel}</span>}
          {paperLabel && <span className={styles.badgeLight}>{paperLabel}</span>}
        </div>
        <h1 className={styles.topicTitle}>{topicData.title}</h1>
        {topicData.meta && <p className={styles.topicMeta}>{topicData.meta}</p>}
      </div>
    </header>
  );
}
