import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import {tracks} from './_tracks';
import styles from './music.module.css';

const TRACKLIST: {n: number; title: string; time: string}[] = [
  {n: 1,  title: 'Letters',                      time: '0:00'},
  {n: 2,  title: 'Evening',                       time: '1:45'},
  {n: 3,  title: 'The Pipe (Trumpet)',             time: '3:59'},
  {n: 4,  title: 'Accomplices',                   time: '5:36'},
  {n: 5,  title: 'Password',                      time: '7:29'},
  {n: 6,  title: 'Evening',                       time: '9:42'},
  {n: 7,  title: 'Trolleybuses',                  time: '11:59'},
  {n: 8,  title: 'Palace of Culture (DK)',         time: '13:51'},
  {n: 9,  title: 'Teeth',                         time: '16:36'},
  {n: 10, title: 'Saber (Shablya)',               time: '19:31'},
  {n: 11, title: 'Expectations',                  time: '22:55'},
  {n: 12, title: 'Dolphins',                      time: '25:59'},
  {n: 13, title: 'Home',                          time: '29:24'},
  {n: 14, title: 'Moon',                          time: '32:19'},
  {n: 15, title: 'Understand',                    time: '35:31'},
  {n: 16, title: 'Heroine',                       time: '36:19'},
  {n: 17, title: 'Expectations',                  time: '38:25'},
  {n: 18, title: 'Drink to the Bottom',           time: '40:34'},
  {n: 19, title: 'You and I',                     time: '42:10'},
  {n: 20, title: 'Baby',                          time: '44:28'},
  {n: 21, title: 'Upside Down (Do hory nohamy)',  time: '46:57'},
  {n: 22, title: 'Moon',                          time: '49:29'},
  {n: 23, title: 'Lonely Sailor',                 time: '52:29'},
  {n: 24, title: 'Our Ensemble',                  time: '54:30'},
];

// Split tracklist into two columns of 12 each
const COL1 = TRACKLIST.slice(0, 12);
const COL2 = TRACKLIST.slice(12);

const LINEUP: {name: string; role: string}[] = [
  {name: 'Serhiy Zarudnyak',     role: 'Vocals, Guitars'},
  {name: 'Oleksandr Myalnitsya', role: 'Guitars, Vocals'},
  {name: 'Serhiy Kozub',         role: 'Bass, Vocals, Guitars'},
  {name: 'Serhiy Vasepov',       role: 'Drums'},
];

function TrackColumn({items}: {items: typeof TRACKLIST}) {
  return (
    <table style={{width: '100%', borderCollapse: 'collapse'}}>
      <tbody>
        {items.map(({n, title, time}) => (
          <tr key={n} style={{borderBottom: '1px solid #f0ece6'}}>
            <td style={{padding: '0.35rem 0.5rem 0.35rem 0', fontSize: '0.82rem', color: '#bbb', width: '1.8rem', textAlign: 'right'}}>
              {n}.
            </td>
            <td style={{padding: '0.35rem 0.8rem 0.35rem 0.5rem', fontSize: '0.86rem', color: '#555'}}>
              {title}
            </td>
            <td style={{padding: '0.35rem 0', fontSize: '0.8rem', color: '#aaa', textAlign: 'right', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap'}}>
              {time}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Sidebar() {
  const {pathname} = useLocation();
  return (
    <aside className={styles.sidebar}>
      <p className={styles.sidebarTitle}>Songs</p>
      <ul className={styles.sidebarNav}>
        {tracks.map((track) => {
          const href = `/music/${track.slug}`;
          const isActive =
            track.slug === 'cold-snack' ||
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

export default function ColdSnackPage(): ReactNode {
  return (
    <Layout
      title="Cold Snack — Music"
      description="Cold Snack (Holodna Zakuska), 1989. A full album recording by Shkola Tanziv."
    >
      <div className={styles.page}>
        <Sidebar />
        <div className={styles.content}>
          <header className={styles.header}>
            <h1>Cold Snack</h1>
          </header>

          <div className={styles.track}>

            {/* Description */}
            <div className={styles.trackText}>
              <p>
                <em>Cold Snack</em> (Holodna Zakuska), 1989. A full album recording by Shkola Tanziv.
              </p>
            </div>

            {/* Photo */}
            <img
              src="/images/photos/1989.jpg"
              alt="Shkola Tanziv, 1989"
              style={{
                width: '100%',
                maxHeight: '420px',
                objectFit: 'cover',
                objectPosition: 'center top',
                borderRadius: '3px',
                display: 'block',
                marginBottom: '1.2rem',
              }}
            />

            {/* Audio player */}
            <audio className={styles.player} controls preload="none">
              <source src="/audio/cold-snack.mp3" type="audio/mpeg" />
            </audio>

            {/* Tracklist — 2 columns */}
            <div className={styles.trackText} style={{marginTop: '2rem'}}>
              <h3 style={{marginBottom: '0.8rem'}}>Tracklist</h3>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem'}}>
                <TrackColumn items={COL1} />
                <TrackColumn items={COL2} />
              </div>
            </div>

            {/* Line-up */}
            <div className={styles.trackText} style={{marginTop: '2rem'}}>
              <h3 style={{marginBottom: '0.8rem'}}>Line-up</h3>
              <ul style={{paddingLeft: '1.2rem', margin: 0}}>
                {LINEUP.map(({name, role}) => (
                  <li key={name} style={{fontSize: '0.88rem', color: '#666', lineHeight: 1.9}}>
                    <strong>{name}</strong> — {role}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
