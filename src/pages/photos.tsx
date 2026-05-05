import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Gallery from '../components/Gallery';
import styles from './gallery-page.module.css';

const images = [
  '/images/photos/1.jpg',
  '/images/photos/3.jpg',
  '/images/photos/4.png',
];

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
