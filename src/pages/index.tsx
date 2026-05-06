import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const categories = [
  {label: 'Graphics', to: '/graphics', sub: '62 works'},
  {label: 'Photos', to: '/photos', sub: '19 works'},
  {label: 'Reliefs', to: '/reliefs', sub: '11 works'},
  {label: 'Watercolors', to: '/watercolors', sub: '15 works'},
  {label: 'Music', to: '/music', sub: '6 tracks'},
  {label: 'Interview', to: '/interview', sub: '2006'},
];

export default function Home(): ReactNode {
  return (
    <Layout title="Serhiy Zarudnyak" description="Artist portfolio">
      <main className={styles.main}>
        <header className={styles.hero}>
          <h1 className={styles.name}>Serhiy Zarudnyak</h1>

          <div className={styles.heroPhoto}>
            <img
              src="/images/photos/3.jpg"
              alt="Serhiy Zarudnyak"
              className={styles.heroImg}
            />
          </div>

          <p className={styles.tagline}>
            Graphics&ensp;·&ensp;Reliefs&ensp;·&ensp;Watercolors&ensp;·&ensp;Photos
          </p>
        </header>

        <nav className={styles.grid}>
          {categories.map(({label, to, sub}) => (
            <Link key={to} to={to} className={styles.card}>
              <span className={styles.cardLabel}>{label}</span>
              <span className={styles.cardCount}>{sub}</span>
            </Link>
          ))}
        </nav>
      </main>
    </Layout>
  );
}
