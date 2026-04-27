import styles from './GlossaryTerm.module.css';

export default function GlossaryTerm({ term }) {
  return (
    <div className={styles.term} id={term.id}>
      <h3 className={styles.name}>
        {term.name}
        {term.subtitle && <span className={styles.subtitle}> {term.subtitle}</span>}
      </h3>
      <p className={styles.definition}>{term.definition}</p>
      <p className={styles.plain}>{term.plain}</p>
      {term.example && (
        <p className={styles.example}><strong>Example:</strong> {term.example}</p>
      )}
      {term.differentiator && (
        <div className={styles.differentiator}>{term.differentiator}</div>
      )}
      <p className={styles.refs}>
        {term.refs.map(r => <span key={r} className={styles.tag}>{r}</span>)}
      </p>
    </div>
  );
}
