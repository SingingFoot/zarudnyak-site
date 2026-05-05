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
        <Gallery images={images} alt="Relief" />
      </div>
    </Layout>
  );
}
