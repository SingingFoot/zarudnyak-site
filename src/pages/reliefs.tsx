import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Gallery from '../components/Gallery';
import styles from './gallery-page.module.css';

const images = [1,2,3,4,5,6,7,8,9,11,12].map((n) => `/images/reliefs/${n}.jpg`);

export default function ReliefsPage(): ReactNode {
  return (
    <Layout title="Reliefs" description="Relief works by Serhiy Zarudnyak">
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Reliefs</h1>
        </header>
        <div className={styles.description}>
          <p>Serhiy Zarudnyak's relief works are defined by a tactile, architectural language that transforms clay into what can be described as a "clay symphony" of ancient urban forms. These compositions rely on the physical depth of the medium, where densely packed clusters of houses, towers, and arched portals create intricate three-dimensional landscapes. The works vary in their structural orientation, ranging from vertical, mountain-like accumulations of buildings to sprawling horizontal cityscapes that suggest a long, historical narrative.</p>
          <p>The architectural subjects focus on the rhythmic relationship between stone-like structures and the spaces they inhabit. Elements such as winding staircases, narrow streets, and small recessed windows are depicted with a high degree of texture, mirroring the weathered surfaces of old European or Mediterranean towns. In these works, the tower or the central dwelling often serves as a structural anchor, dictating the upward or outward flow of the entire composition.</p>
          <p>Figurative reliefs, such as the ensemble of characters crowded into a boat, extend this language of architecture into narrative sculpture. Here, the hull of the vessel functions almost like a travelling fragment of a city wall: the planks are modelled with the same care as stone blocks, while the characters seated inside it are rendered with highly specific surface treatments—knitted wool, rough hair, military cloth—that turn the relief into a compact theatre of types. The scene balances humour and drama: each figure seems absorbed in a different action or state of mind, so that the small boat becomes a miniature social microcosm adrift in an undefined space.</p>
          <p>Other works abandon recognisable figuration altogether in favour of atmospheric or ornamental structures. One large wall‑mounted composition consists of a vertical sequence of fan‑like impressions pressed directly into a plastered surface. These radiating forms read simultaneously as plant motifs, geological strata, and abstract pattern, depending on the viewer's distance. The relief is activated by natural light: as the sun moves across the room, wedges of shadow sharpen and dissolve each ridge, turning the wall into a slow, time‑based sculpture.</p>
          <p>Another key piece is a blue, cloth‑like panel whose swirling centre suggests a vortex or a spiral galaxy. The material appears at once soft and stone‑like, as if fabric had been fossilised in motion. Small protrusions and scars across the surface evoke stars, droplets, or debris caught in the spiral, while the deep ultramarine colouring connects the work to both maritime and cosmic imagery. Here Zarudnyak strips away architectural reference and still preserves a strong sense of depth, movement, and latent narrative.</p>
          <p>A significant portion of the collection thus explores symbolic and metaphorical arrangements of space. This is evident in a unique circular composition where a ring of dwellings forms a wreath-like frame around a central void, perhaps suggesting the self-contained nature of a community or a "city-mirror". Other works lean toward the purely decorative or abstract, such as the vibrant blue spiral relief mentioned above or the large-scale, fan-like wall pieces that merge sculpture and architecture into a single skin.</p>
          <p>The use of light and shadow is fundamental to Zarudnyak's technique, as the physical protrusions of the clay catch ambient light to define volume without the need for artificial shading. The color palette remains largely earthy and atmospheric, utilizing ochres, terracottas, and pale blues to create a sense of timelessness, while more saturated accents—navy blues, rusts, and vegetal greens—are reserved for key narrative or ornamental moments. While most cityscapes are isolated within wooden frames, emphasizing their status as "islands" of memory, the inclusion of organic elements like cypress trees, sculpted greenery, fan-like vegetal patterns, and animated human figures moves the work into a realm where architecture, landscape, and human presence are inextricably joined.</p>
        </div>
        <Gallery images={images} alt="Relief" />
      </div>
    </Layout>
  );
}
