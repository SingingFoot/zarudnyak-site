import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Gallery from '../components/Gallery';
import styles from './gallery-page.module.css';

const images = [
  '/images/photos/1.jpg',
  '/images/photos/4.jpeg',
  '/images/photos/6.jpg',
  '/images/photos/7.jpg',
  '/images/photos/8.jpg',
  '/images/photos/9.jpg',
  '/images/photos/10.jpg',
  '/images/photos/11.jpg',
  '/images/photos/12.jpg',
  '/images/photos/13.jpg',
  '/images/photos/14.jpg',
  '/images/photos/15.jpg',
  '/images/photos/16.jpg',
  '/images/photos/17.jpg',
  '/images/photos/18.jpg',
  '/images/photos/19.jpg',
  '/images/photos/20.jpg',
  '/images/photos/23.jpg',
  '/images/photos/25.jpg',
  '/images/photos/26.jpg',
  '/images/photos/27.jpg',
  '/images/photos/1989.jpg',
  '/images/photos/1989-1.jpg',
];

export default function PhotosPage(): ReactNode {
  return (
    <Layout title="Photos" description="Photography by Serhiy Zarudnyak">
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Photos</h1>
        </header>
        <div className={styles.description}>
          <p>Serhiy Zarudnyak's photographic collection is defined by a meticulous balance between geometric minimalism and symbolic documentation. The minimalist works utilize distinct color blocking and textured planes to create a sense of structured harmony. This is exemplified in compositions where organic spheres, such as yarn balls, are placed against a starkly divided background of textured blue, striped beige, and deep black. This interest in geometric precision extends to the natural world, where a sharp, yellow square of parched grass creates a jarring visual anomaly within a lush, green landscape, highlighting the intersection of organic growth and rigid form.</p>
          <p>The collection frequently employs utilitarian objects to construct cultural and temporal narratives. A significant focus is placed on the artifacts of the early 2020s, where a blue medical mask on coarse asphalt is framed by the hand-drawn numbers "20 20," serving as a poignant record of a global era. Musical and industrial motifs further this narrative, particularly in the depiction of a guitar body transformed into a mechanical collage. Metal hardware — bolts, nuts, and screws — form the name "ЦОЙ," while wooden fragments spell out "ЖИВ," merging the warmth of the musical instrument with the cold texture of industrial parts to evoke a sense of enduring cultural memory.</p>
          <p>Atmospheric compositions conclude the series by emphasizing the theatricality of light and shadow. High-contrast night scenes utilize artificial illumination to carve forms out of total darkness, such as a glowing park gazebo that stands as a solitary beacon against the night. Figures appear as dark, isolated silhouettes on benches, their forms defined entirely by the spill of light from nearby structures. This use of heavy chiaroscuro creates a sense of material enclosure and mystery, inviting the viewer to explore the symbolic depth of the artist's "environmental visions".</p>
        </div>
        <Gallery images={images} alt="Photo" />
      </div>
    </Layout>
  );
}
