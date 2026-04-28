import GlossaryTerm from '../GlossaryTerm';
import styles from './GlossarySearch.module.css';

export default function GlossarySearch({ terms, letters, notesBase }) {
  const byLetter = letter => terms.filter(t => t.letter === letter);

  return (
    <>
      <nav className={styles.letterNav} aria-label="Jump to letter">
        {letters.map(letter => (
          <a key={letter} href={`#letter-${letter.toLowerCase()}`} aria-label={`Terms starting with ${letter}`}>
            {letter}
          </a>
        ))}
      </nav>

      {letters.map(letter => (
        <section key={letter} id={`letter-${letter.toLowerCase()}`} aria-labelledby={`heading-${letter}`}>
          <h2 id={`heading-${letter}`} className={styles.letterHeading}>{letter}</h2>
          {byLetter(letter).map(term => (
            <GlossaryTerm key={term.id} term={term} notesBase={notesBase} />
          ))}
        </section>
      ))}
    </>
  );
}
