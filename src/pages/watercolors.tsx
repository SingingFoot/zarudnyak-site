import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Gallery from '../components/Gallery';
import styles from './gallery-page.module.css';

const images = Array.from({length: 15}, (_, i) => `/images/watercolors/${i + 1}.jpg`);

export default function WatercolorsPage(): ReactNode {
  return (
    <Layout
      title="Акварелі | Watercolors — Сергій Зарудняк / Сергей Зарудняк"
      description="Акварельні роботи Сергія Зарудняка, Запоріжжя. Watercolors by Serhiy Zarudnyak — Запоріжжя / Запорожье."
    >
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Watercolors</h1>
        </header>
        <div className={styles.description}>
          <p>Serhyi Zarudnyak's watercolor collection is defined by two distinct visual approaches: ethereal abstraction characterized by translucent washes and dense, structural compositions. The lighter works rely on the active role of white space and soft, bleeding edges, where forms like a glowing central orb or a delicate keyhole-like shape emerge without rigid boundaries. In contrast, the tonal pieces utilize heavy textures and high contrast, featuring dark, atmospheric backgrounds where shapes are defined by sharp, negative-space cutouts or intense light-and-shadow modeling.</p>
          <p>Musical and biomorphic motifs serve as recurring subjects, emphasizing a harmony between organic and manufactured forms. This is most evident in the depiction of guitars, where the warm, amber curves of the instruments become a structural anchor for the composition, their shapes echoing the fluid nature of the watercolor medium. Other works lean into biological surrealism, featuring skeletal, leaf-like structures that stretch vertically across the frame, merging the botanical with the architectural.</p>
          <p>A significant portion of the collection utilizes metaphorical and architectural imagery to create a sense of mystery. Tower-like structures are built from stacked horizontal white segments that rise against golden, atmospheric skies. Other works focus on the concept of the portal, using geometric cutouts—such as diamond-shaped windows in a pyramidal form or frames looking out into blue voids—to suggest a transition between different dimensions of reality. Figures, when they appear, are often depicted as elongated, monochromatic silhouettes isolated within a vast, misty landscape, emphasizing a sense of existential solitude.</p>
          <p>The use of space varies between vast, open voids and a sense of material enclosure. Minimalist drawings place isolated forms within a neutral field, highlighting the delicate gesture of the brush. Conversely, the textured works create a thick, visceral environment, particularly in compositions featuring dark, crater-like patterns or complex grids. The inclusion of handwritten text, ranging from the simple greeting "HI" to Latin-inspired fragments like "PATRIA," moves the work into the realm of philosophical narrative, inviting the viewer to decode the symbolic language of the artist's "architectural visions".</p>
        </div>
        <Gallery images={images} alt="Watercolor" />
      </div>
    </Layout>
  );
}
