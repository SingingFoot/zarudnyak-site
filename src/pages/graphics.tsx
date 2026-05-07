import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Gallery from '../components/Gallery';
import styles from './gallery-page.module.css';

const images = Array.from({length: 62}, (_, i) => `/images/graphics/${i + 1}.jpg`);

export default function GraphicsPage(): ReactNode {
  return (
    <Layout
      title="Графіка | Graphics — Сергій Зарудняк / Сергей Зарудняк"
      description="Графічні роботи Сергія Зарудняка, Запоріжжя. Graphics by Serhiy Zarudnyak — Запоріжжя / Запорожье."
    >
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Graphics</h1>
        </header>
        <div className={styles.description}>
          <p>Serhyi Zarudnyak's graphic work is defined by two distinct visual approaches: minimalist line drawings and dense, tonal compositions. The linear works rely on the active role of white space, where thin contours define figures without the use of shading or volume. In contrast, the tonal pieces utilize heavy textures and high contrast, often featuring dark backgrounds from which subjects emerge through light-and-shadow modeling.</p>
          <p>Musical subjects appear frequently across both styles, focusing on the physical relationship between performers and their instruments. Figures such as pianists, guitarists, and double bass players are depicted with elongated forms that often mirror the curves or rigid lines of the instruments themselves. In these works, the instrument serves as a structural anchor for the composition, dictating the overall rhythm of the piece.</p>
          <p>A significant portion of the collection utilizes social satire and metaphorical imagery. This is evident in the depiction of a "sobering station" built in the shape of a large brick bottle and the illustration of runners in leg chains accompanied by text regarding the "long path to oneself". Other works lean into surrealism, such as the image of two heads joined by a single braid or figures composed of pebble-like clusters.</p>
          <p>The use of space varies significantly between the two techniques. The linear drawings often place isolated figures within a vast void, emphasizing gesture and silhouette. The tonal works create a sense of enclosure, where the environment feels thick and atmospheric, particularly in still lifes and landscapes. The inclusion of handwritten text in several pieces moves the work into the realm of social commentary and narrative illustration.</p>
        </div>
        <Gallery images={images} alt="Graphics" />
      </div>
    </Layout>
  );
}
