import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Gallery from '../components/Gallery';
import styles from './gallery-page.module.css';

const images = [
  '/images/photos/1.jpg',
  '/images/photos/3.jpg',
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
