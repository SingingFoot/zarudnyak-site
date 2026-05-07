import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import {tracks} from './_tracks';
import styles from './music.module.css';

const INTRO_PARAGRAPH = 'Shkola Tanziv is a musical group founded by composer and visual artist Serhiy Zarudnyak, whose work is guided by an economy of artistic means to achieve a polysemy of meaning — a philosophy he applies equally to his music and his visual art.';

const VIDEO_SRC = '/videos/shkola-tanziv.mp4';

const VIDEO_CAPTION = 'This archival live recording captures the Zaporizhzhia band "Shkola Tantsev" ("School of Dances") performing at the 1995 concert "Songs on Poems by Brodsky." The group is led by Serhiy Zarudnyak, who performs guitars, vocals, and is the author of both music and lyrics. He is joined by Olya Volodina (vocals and stage presence), Shura Myalnytsia (guitars, backing vocals, arrangements), Aleksei Suranov (drums), Serhiy Sergeyev (guitar), Jean Seleznyov (bass, backing vocals, energy), and Kostya "Schubert" on bongos, with additional guitar and vocals by Serhiy Kozub. The video has been preserved and digitized from the only surviving tape, thanks to Yuka Gavrilova, who organized the original filming and editing, and especially to Ilia Vologurov, who rediscovered and digitized the recording 23 years later.';

const REST_PARAGRAPHS = [
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
              <p>{INTRO_PARAGRAPH}</p>
            </div>

            <div className={styles.videoBlock}>
              <video
                className={styles.videoPlayer}
                controls
                preload="metadata"
              >
                <source src={VIDEO_SRC} type="video/mp4" />
              </video>
              <div className={styles.videoCaption}>
                <p>{VIDEO_CAPTION}</p>
              </div>
            </div>

            <div className={styles.trackText}>
              {REST_PARAGRAPHS.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
