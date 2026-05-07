import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import WritingLayout from './_WritingLayout';
import styles from './writings.module.css';

const poems: string[][][] = [
  [
    [
      'Обычно в разгар зимы',
      'меняется цифра года',
      'и для простого народа',
      'это повод накрыть столы',
    ],
    [
      'Весной ничего такого',
      'резкого не бывает',
      'просто медленно прирастает',
      'настроение и погода',
    ],
    [
      'Лето вообще не считается',
      'с нашим стремлением к умеренности',
      'жжёт себе и набирает',
      'градусы',
    ],
    [
      'А осени ей по барабану',
      'хотим мы её или нет',
      'пришла — ноги на стол и привет',
      'подставляй стаканы',
    ],
  ],
  [
    [
      'Практически весь Голливуд',
      'уж перешёл на овощ и на фрукт',
      'и чувствуют подъём сил небывалый',
      'поднимем же и мы свои бокалы',
    ],
    [
      'за семечки орешки корешки',
      'капусту тамбур и кешью',
      'нефиг животным кишки выпускать',
      'они тоже хотят существовать',
    ],
  ],
];

export default function PoemsPage(): ReactNode {
  return (
    <Layout title="Poems — Writings" description="Poems by Serhiy Zarudnyak">
      <WritingLayout>
        <header className={styles.poemsHeader}>
          <h1>Poems</h1>
        </header>
        <div className={styles.poem}>
          {poems.map((stanzas, pi) => (
            <div key={pi}>
              {pi > 0 && (
                <p className={styles.poemDivider}>* * *</p>
              )}
              {stanzas.map((lines, si) => (
                <div key={si} className={styles.stanza}>
                  {lines.map((line, li) => (
                    <p key={li}>{line}</p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </WritingLayout>
    </Layout>
  );
}
