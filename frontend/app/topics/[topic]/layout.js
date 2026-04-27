export function generateStaticParams() {
  return [{ topic: 'data-representation' }];
}

import NavBar from '../../../components/NavBar';
import TopicNav from '../../../components/TopicNav';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import styles from './layout.module.css';

export default function TopicLayout({ children, params }) {
  const { topic } = params;
  const base = `/topics/${topic}`;

  const footerLinks = (
    <>
      <Link href={base} className={styles.footerBtn}>Notes</Link>
      <Link href={`${base}/questions`} className={styles.footerBtn}>Questions</Link>
      <Link href={`${base}/glossary`} className={styles.footerBtn}>Glossary</Link>
    </>
  );

  return (
    <>
      <NavBar />
      <TopicNav topic={topic} />
      {children}
      <Footer topicLabel="Section 1.1 Data Representation" links={footerLinks} />
    </>
  );
}
