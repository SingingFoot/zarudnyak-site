import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

const categories = [
  {label: 'Graphics', to: '/graphics', sub: '62 works'},
  {label: 'Photos', to: '/photos', sub: '19 works'},
  {label: 'Reliefs', to: '/reliefs', sub: '11 works'},
  {label: 'Watercolors', to: '/watercolors', sub: '15 works'},
  {label: 'Music', to: '/music', sub: '6 tracks'},
  {label: 'Interview', to: '/writings/interview', sub: '2006'},
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Сергій Зарудняк | Сергей Зарудняк | Serhiy Zarudnyak — Artist, Zaporizhzhia"
      description="Сергій Зарудняк (Сергей Зарудняк) — художник із Запоріжжя. Графіка, рельєфи, акварелі, Школа Танців. Serhiy Zarudnyak — artist from Zaporizhzhia, Ukraine."
    >
      <Head>
        <html lang="uk" />
        <meta
          name="keywords"
          content="Сергій Зарудняк, Сергей Зарудняк, Зарудняк, Школа Танців, Школа Танцев, Запоріжжя, Запорожье, художник Запоріжжя, художник Запорожье, Serhiy Zarudnyak, Sergiy Zarudnyak, Sergei Zarudnyak, Zarudnyak artist, Zaporizhzhia artist, dance school Zaporizhzhia, графіка, рельєфи, акварелі"
        />
        <meta name="author" content="Сергій Зарудняк" />
        <link rel="canonical" href="https://zarudnyak.art/" />
        <meta name="geo.region" content="UA-23" />
        <meta name="geo.placename" content="Запоріжжя" />
        <meta name="geo.position" content="47.8388;35.1396" />
        <meta name="ICBM" content="47.8388, 35.1396" />
      </Head>

      <main className={styles.main}>
        <header className={styles.hero}>
          <h1 className={styles.name}>Serhiy Zarudnyak</h1>

          <div className={styles.heroPhoto}>
            <img
              src="/images/photos/3.jpg"
              alt="Сергій Зарудняк — художник, Запоріжжя / Serhiy Zarudnyak artist Zaporizhzhia"
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

        {/*
          Visually hidden block — readable by search engine crawlers.
          Contains Cyrillic name variants and location keywords so Google
          indexes both Ukrainian and Russian spellings.
        */}
        <p
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          Сергій Зарудняк — художник із Запоріжжя, Україна. Графіка, рельєфи,
          акварелі, фотографія, музика. Школа Танців Зарудняк у Запоріжжі.
          Сергей Зарудняк — художник из Запорожья, Украина. Графика, рельефы,
          акварели, фотография, музыка. Школа Танцев Зарудняк в Запорожье.
          Serhiy Zarudnyak — artist from Zaporizhzhia (Zaporizhia), Ukraine.
          Graphics, reliefs, watercolors, photography, music.
          Zarudnyak Dance School, Zaporizhzhia.
        </p>
      </main>
    </Layout>
  );
}
