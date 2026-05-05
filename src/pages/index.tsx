import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const categories = [
  {label: 'Graphics', to: '/graphics', count: 33},
  {label: 'Photos', to: '/photos', count: 2},
  {label: 'Reliefs', to: '/reliefs', count: 8},
  {label: 'Watercolors', to: '/watercolors', count: 8},
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
          {categories.map(({label, to, count}) => (
            <Link key={to} to={to} className={styles.card}>
              <span className={styles.cardLabel}>{label}</span>
              <span className={styles.cardCount}>{count} works</span>
            </Link>
          ))}
        </nav>
      </main>
    </Layout>
  );
}
