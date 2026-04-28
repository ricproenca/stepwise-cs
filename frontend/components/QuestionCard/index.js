'use client';

import { useState } from 'react';
import styles from './QuestionCard.module.css';

export default function QuestionCard({ question, onAttempted, onCorrect, attempted, correct }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className={styles.card}
      data-difficulty={question.difficulty}
      data-command={question.command}
      id={question.id}
    >
      <header className={styles.header}>
        <span className={styles.badge}>{question.marks} mark{question.marks !== 1 ? 's' : ''}</span>
        <span className={styles.badgeOutline}>{question.command}</span>
        <span className={styles.badgeOutline}>{question.difficulty}</span>
        <span className={styles.tag}>{question.ref}</span>
        {question.pastPaper && <span className={styles.badgeDark}>Past Paper</span>}
      </header>

      {question.textHtml ? (
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: question.textHtml }} />
      ) : (
        <p className={styles.text}>{question.text}</p>
      )}

      {question.preText && (
        <pre className={styles.pre}><code>{question.preText}</code></pre>
      )}

      <div className={styles.reveal}>
        <div className={styles.actions}>
          <button
            className={`${styles.btn} ${styles.btnOutline}`}
            onClick={() => setIsOpen(v => !v)}
            aria-expanded={isOpen}
          >
            {isOpen ? 'Hide Answer' : 'Show Answer'}
          </button>
          <button
            className={`${styles.btn} ${styles.btnOutline} ${styles.btnSm} ${attempted ? styles.btnTeal : ''}`}
            onClick={() => onAttempted(question.id)}
            aria-label={`Mark question ${question.id} as attempted`}
          >
            {attempted ? '✓ Attempted' : 'Mark attempted'}
          </button>
          <button
            className={`${styles.btn} ${styles.btnSm} ${styles.btnGreen}`}
            onClick={() => onCorrect(question.id)}
            aria-label={`Mark question ${question.id} as correct`}
          >
            {correct ? '✓ Correct' : 'Mark correct'}
          </button>
        </div>

        {isOpen && (
          <div className={styles.answerContent}>
            <ul className={styles.markScheme}>
              {question.answer.map((point, i) => <li key={`${question.id}-${i}`}>{point}</li>)}
            </ul>
            {question.tip && <p className={styles.tip}>{question.tip}</p>}
          </div>
        )}
      </div>
    </article>
  );
}
