import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import {tracks} from './_tracks';
import styles from './music.module.css';

const BAND_DESCRIPTION = [
  'Shkola Tanziv is a musical group founded by composer and visual artist Serhiy Zarudnyak, whose work is guided by an economy of artistic means to achieve a polysemy of meaning — a philosophy he applies equally to his music and his visual art.',
  'The group\'s recordings bring together a constellation of collaborating artists, including vocalists Olha Volodina and Nastya Shylo, and multi-instrumentalist Oleg Shynkarenko, whose spare arrangements of voice and guitar allow the deepest questions to emerge from silence.',
  'Active from 1989 to 2005 in different combinations, the band also collaborated with guitarists Serhiy Kozub and Olexandr Myalnitsa, whose contributions shaped the evolving sound of the group across its various incarnations.',
  'Shkola Tanziv draws on a wide cultural palette — adapting the poetry of Joseph Brodsky, the literary imagery of Edgar Allan Poe, and melodies rooted in Bulgarian folk tradition — weaving classical intellectual poetry into a contemporary indie sound.',
  'A recurring thread across their compositions is the tragic essence of the human condition: the fleeting nature of time and reality, the loss of cultural eras, and the search for transcendence through art, themes Zarudnyak explores through his favourite genre — tragicomedy.',
  'Positioning folklore and canonical literary works as a breath of fresh air in the exhausted era of postmodernism, Shkola Tanziv uses art and memory as tools for navigating life\'s moral crossroads, always with a transcendent plane in mind.',
];

function Sidebar() {
  const {pathname} = useLocation();
  return (
    <aside className={styles.sidebar}>
      <p className={styles.sidebarTitle}>Songs</p>
      <ul className={styles.sidebarNav}>
        {tracks.map((track) => {
          const href = `/music/${track.slug}`;
          const isActive = pathname === href || pathname === `${href}/`;
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

export default function MusicPage(): ReactNode {
  return (
    <Layout title="Music" description="Music by Serhiy Zarudnyak">
      <div className={styles.page}>
        <Sidebar />
        <div className={styles.content}>
          <header className={styles.header}>
            <h1>Music</h1>
          </header>
          <div className={styles.track}>
            <h2 className={styles.trackTitle}>Shkola Tanziv</h2>
            <div className={styles.trackText}>
              {BAND_DESCRIPTION.map((sentence, i) => (
                <p key={i}>{sentence}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
