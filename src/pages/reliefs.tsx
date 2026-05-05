import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Gallery from '../components/Gallery';
import styles from './gallery-page.module.css';

const images = Array.from({length: 11}, (_, i) => `/images/reliefs/${i + 1}.jpg`);

export default function ReliefsPage(): ReactNode {
  return (
    <Layout title="Reliefs" description="Relief works by Serhiy Zarudnyak">
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Reliefs</h1>
        </header>
        <Gallery images={images} alt="Relief" />
      </div>
    </Layout>
  );
}
