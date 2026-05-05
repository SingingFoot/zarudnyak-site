import type {ReactNode} from 'react';
import {useState, useCallback} from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './Gallery.module.css';

interface GalleryProps {
  images: string[];
  alt?: string;
}

export default function Gallery({images, alt = ''}: GalleryProps): ReactNode {
  const [index, setIndex] = useState(-1);

  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(-1), []);

  const slides = images.map((src) => ({src}));

  return (
    <>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <button
            key={src}
            className={styles.cell}
            onClick={() => open(i)}
            aria-label={`${alt} image ${i + 1}`}
          >
            <img src={src} alt={`${alt} ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={close}
        slides={slides}
        styles={{
          container: {backgroundColor: 'rgba(0,0,0,0.92)'},
        }}
      />
    </>
  );
}
