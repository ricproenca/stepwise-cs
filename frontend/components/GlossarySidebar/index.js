import Link from 'next/link';
import styles from './GlossarySidebar.module.css';

const keyTerms = [
  { id: 'ascii', label: 'ASCII' },
  { id: 'bcd', label: 'Binary Coded Decimal' },
  { id: 'bit', label: 'Bit' },
  { id: 'byte', label: 'Byte' },
  { id: 'gibibyte', label: 'Gibibyte (GiB)' },
  { id: 'hexadecimal', label: 'Hexadecimal' },
  { id: 'kibibyte', label: 'Kibibyte (KiB)' },
  { id: 'kilobyte', label: 'Kilobyte (KB)' },
  { id: 'nibble', label: 'Nibble' },
  { id: 'ones-complement', label: "One's Complement" },
  { id: 'overflow', label: 'Overflow' },
  { id: 'twos-complement', label: "Two's Complement" },
  { id: 'unicode', label: 'Unicode' },
];

export default function GlossarySidebar({ topic }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Key Terms</p>
      <nav>
        {keyTerms.map(({ id, label }) => (
          <Link key={id} href={`/topics/${topic}/glossary#${id}`} className={styles.link}>
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
