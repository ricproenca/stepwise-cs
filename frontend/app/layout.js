import { Open_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Cambridge 9618 CS — Revision',
  description: 'AS & A Level Computer Science (9618) revision notes, practice questions, and glossary.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
