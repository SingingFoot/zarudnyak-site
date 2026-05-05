import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Gallery from '../components/Gallery';
import styles from './gallery-page.module.css';

const images = Array.from({length: 9}, (_, i) => `/images/watercolors/${i + 1}.jpg`);

export default function WatercolorsPage(): ReactNode {
  return (
    <Layout title="Watercolors" description="Watercolor paintings by Serhiy Zarudnyak">
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Watercolors</h1>
        </header>
        <Gallery images={images} alt="Watercolor" />
      </div>
    </Layout>
  );
}
