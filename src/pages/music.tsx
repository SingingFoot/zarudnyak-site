import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './music.module.css';

const tracks = [
  {
    title: 'Song 1',
    description: 'Text 1',
    src: '/audio/dream.mp3',
  },
  {
    title: 'Song 2',
    description: 'Text 2',
    src: '/audio/steamer.mp3',
  },
  {
    title: 'Song 3',
    description: 'Text 3',
    src: '/audio/van.mp3',
  },
  {
    title: 'Song 4',
    description: 'Text 4',
    src: '/audio/girl.wav',
  },
  {
    title: 'Song 5',
    description: 'Text 5',
    src: '/audio/guys.wav',
  },
  {
    title: 'Song 6',
    description: 'Text 6',
    src: '/audio/tristesse.wav',
  },
];

export default function MusicPage(): ReactNode {
  return (
    <Layout title="Music" description="Music by Serhiy Zarudnyak">
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Music</h1>
        </header>
        <div className={styles.tracklist}>
          {tracks.map((track) => (
            <div key={track.src} className={styles.track}>
              <h2 className={styles.trackTitle}>{track.title}</h2>
              <p className={styles.trackText}>{track.description}</p>
              <audio className={styles.player} controls preload="none">
                <source src={track.src} />
              </audio>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
