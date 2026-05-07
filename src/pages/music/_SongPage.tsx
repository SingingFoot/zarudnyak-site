import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import {tracks} from './_tracks';
import styles from './music.module.css';

function Sidebar({currentSlug}: {currentSlug: string}) {
  const {pathname} = useLocation();
  return (
    <aside className={styles.sidebar}>
      <p className={styles.sidebarTitle}>Songs</p>
      <ul className={styles.sidebarNav}>
        {tracks.map((track) => {
          const href = `/music/${track.slug}`;
          const isActive =
            track.slug === currentSlug ||
            pathname === href ||
            pathname === `${href}/`;
          return (
            <li key={track.slug}>
              <Link
                to={href}
                className={`${styles.sidebarLink}${isActive ? ` ${styles.active}` : ''}`}
              >
                {track.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

interface SongPageProps {
  slug: string;
}

export default function SongPage({slug}: SongPageProps): ReactNode {
  const track = tracks.find((t) => t.slug === slug);

  if (!track) {
    return (
      <Layout title="Not Found">
        <div className={styles.page}>
          <p>Song not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${track.title} — Music`} description={track.description.slice(0, 160)}>
      <div className={styles.page}>
        <Sidebar currentSlug={slug} />
        <div className={styles.content}>
          <header className={styles.header}>
            <h1>{track.title}</h1>
          </header>
          <div className={styles.track}>
            <div className={styles.trackText}>
              {track.description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <audio className={styles.player} controls preload="none">
              <source src={track.src} />
            </audio>
          </div>
        </div>
      </div>
    </Layout>
  );
}
