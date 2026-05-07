import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import WritingLayout from './_WritingLayout';
import styles from './writings.module.css';

const DESCRIPTION = [
  'This section gathers the written and spoken word of Serhiy Zarudnyak — a space where his artistic philosophy finds expression beyond canvas, plaster, and sound.',
  'The centrepiece is a 2006 interview conducted by Oleh Shynkarenko for the newspaper Establishment, in which Zarudnyak reflects on the origins of his practice, his use of eccentricity and tragicomedy, and the metaphysical underpinnings of his work in bas-relief, sgraffito, graphics, and music.',
  'Throughout the conversation, Zarudnyak articulates a consistent worldview: that the most enduring art operates on a transcendent plane, that folklore offers the last breath of fresh air in a postmodern era exhausted by collage and parody, and that the boundary between the tragic and the comic is where the most honest human truths reside.',
  'The poems offer a contrasting register — brief, colloquial, and laced with dry wit — turning the cycle of seasons and the Hollywood vegan moment into quiet meditations on habit, time, and the stubborn will of all living things to simply exist.',
  'Together, these texts reveal an artist whose thinking is as layered and elliptical as his visual work: modest in form, expansive in implication, and always alert to the comedy lurking inside the serious.',
];

export default function WritingsPage(): ReactNode {
  return (
    <Layout title="Writings" description="Writings by Serhiy Zarudnyak">
      <WritingLayout>
        <header className={styles.poemsHeader}>
          <h1>Writings</h1>
        </header>
        <div className={styles.description}>
          {DESCRIPTION.map((sentence, i) => (
            <p key={i}>{sentence}</p>
          ))}
        </div>
      </WritingLayout>
    </Layout>
  );
}
