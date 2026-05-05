import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Gallery from '../components/Gallery';
import styles from './gallery-page.module.css';

const images = [1, 3].map((n) => `/images/photos/${n}.jpg`);

export default function PhotosPage(): ReactNode {
  return (
    <Layout title="Photos" description="Photography by Serhiy Zarudnyak">
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Photos</h1>
        </header>
        <Gallery images={images} alt="Photo" />
      </div>
    </Layout>
  );
}
