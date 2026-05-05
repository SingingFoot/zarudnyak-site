import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Gallery from '../components/Gallery';
import styles from './gallery-page.module.css';

const images = Array.from({length: 62}, (_, i) => `/images/graphics/${i + 1}.jpg`);

export default function GraphicsPage(): ReactNode {
  return (
    <Layout title="Graphics" description="Graphic works by Serhiy Zarudnyak">
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Graphics</h1>
        </header>
        <Gallery images={images} alt="Graphics" />
      </div>
    </Layout>
  );
}
