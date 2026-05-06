import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './music.module.css';

const tracks = [
  {
    title: 'A Dream Within a Dream',
    description: "This song is a musical interpretation of Edgar Allan Poe's evocative poem \"A Dream Within a Dream,\" featuring the vocals of Olha Volodina and the guitar accompaniment of Serhiy Zarudnyak. As the founder of the musical group \"Shkola Tantsiv\" and a recognized composer, Zarudnyak brings his distinct artistic vision to this collaboration.\n\nThe composition embodies several key elements of Zarudnyak's creative philosophy. Much like his visual art, Zarudnyak's music employs an economy of artistic means to achieve a polysemy of meaning — the sparse arrangement of voice and guitar allows the weight of Poe's existential questions to emerge from the darkness. The song explores the tragic essence of the human condition: the fleeting nature of time and reality. Zarudnyak considers tragicomedy his favorite genre because it reflects how life is always a mixture of the sad and the funny, a theme central to Poe's poem.\n\nThe choice of Poe's text aligns with Zarudnyak's belief that an artist must have a transcendent plane in mind. By questioning whether life is a \"dream within a dream,\" the song touches on the mystical experience that Zarudnyak strives to create in all his works. Zarudnyak also views traditional and folklore motifs as a breath of fresh air in the exhausted era of postmodernism — this adaptation of a classic literary work enriches a traditional structure with modern emotional depth.",
    src: '/audio/dream.mp3',
  },
  {
    title: 'Steamer',
    description: "The musical composition \"Steamer\" (also titled \"И услышавши это...\") is a collaborative work featuring music composed by Serhiy Zarudnyak with vocals and guitar performance by Oleg Shynkarenko.\n\nThe song's lyrical foundation is drawn from the poem \"Fin de Siècle\" by the renowned poet Joseph Brodsky. The text expresses a sudden, profound desire to abandon mundane or exhausting labor — metaphorized as \"digging the earth\" — in favor of boarding a steamer to sail away.\n\nUnlike traditional voyages of exploration, the journey described is not intended to find new islands, plants, or new organisms in exotic latitudes — the purpose is exactly the opposite. The poem concludes with a cryptic and poignant focus on \"the mouth\" (главным образом — рот), which in the context of Brodsky's work often suggests a movement toward silence, the cessation of speech, or a purely internal realization. The track stands as a musical interpretation of classical intellectual poetry.",
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
              <div className={styles.trackText}>
                {track.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
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
