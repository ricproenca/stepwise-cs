'use client';

import { useState, useEffect, Fragment } from 'react';
import QuestionCard from '../../../../components/QuestionCard';
import QuestionFilters from '../../../../components/QuestionFilters';
import ProgressBar from '../../../../components/ProgressBar';
import { questions } from '../../../../data/questions-data-representation';
import styles from './questions.module.css';

const STORAGE_KEY = '9618-data-representation-progress';
const COMMANDS = [...new Set(questions.map(q => q.command))].sort();

function loadProgress() {
  if (typeof window === 'undefined') return { attempted: new Set(), correct: new Set() };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      attempted: new Set(saved.attempted || []),
      correct: new Set(saved.correct || []),
    };
  } catch {
    return { attempted: new Set(), correct: new Set() };
  }
}

export default function QuestionsPage() {
  const [difficulty, setDifficulty] = useState('all');
  const [command, setCommand] = useState('all');
  const [attempted, setAttempted] = useState(new Set());
  const [correct, setCorrect] = useState(new Set());

  useEffect(() => {
    const p = loadProgress();
    setAttempted(p.attempted);
    setCorrect(p.correct);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      attempted: [...attempted],
      correct: [...correct],
    }));
  }, [attempted, correct]);

  function toggleAttempted(id) {
    setAttempted(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function toggleCorrect(id) {
    setCorrect(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function resetProgress() {
    setAttempted(new Set());
    setCorrect(new Set());
  }

  const filtered = questions.filter(q => {
    const diffOk = difficulty === 'all' || q.difficulty === difficulty;
    const cmdOk = command === 'all' || q.command === command;
    return diffOk && cmdOk;
  });

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1 className={styles.title}>Practice Questions</h1>
          <p className={styles.subtitle}>Data Representation — Cambridge 9618 &bull; {questions.length} questions</p>
        </header>

        <ProgressBar
          attempted={attempted.size}
          correct={correct.size}
          total={questions.length}
          onReset={resetProgress}
        />

        <QuestionFilters
          difficulty={difficulty}
          command={command}
          commands={COMMANDS}
          onDifficulty={setDifficulty}
          onCommand={setCommand}
        />

        {filtered.length === 0 && (
          <p className={styles.noResults}>No questions match the selected filters.</p>
        )}

        {filtered.map((q, index) => (
          <Fragment key={q.id}>
            <QuestionCard
              question={q}
              attempted={attempted.has(q.id)}
              correct={correct.has(q.id)}
              onAttempted={toggleAttempted}
              onCorrect={toggleCorrect}
            />
            {index < filtered.length - 1 && <hr className={styles.separator} />}
          </Fragment>
        ))}
      </div>
    </main>
  );
}
