import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './contacts.module.css';

/* ── SVG icons ─────────────────────────────────────────────────────────── */

function MessengerIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 2C6.477 2 2 6.145 2 11.259c0 2.83 1.29 5.357 3.333 7.07V22l3.06-1.681A10.7 10.7 0 0 0 12 20.518c5.523 0 10-4.145 10-9.259C22 6.145 17.523 2 12 2Z"
        fill="#1877F2"
      />
      <path
        d="m6.667 14.074 2.916-3.1 1.485 1.5 2.875-1.5 2.918 3.1-2.916-3.115-1.485 1.485-2.875-1.485-2.918 3.115Z"
        fill="#fff"
      />
    </svg>
  );
}

function EmailIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m2 7 9.293 6.293a1 1 0 0 0 1.414 0L22 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function ContactsPage(): ReactNode {
  return (
    <Layout
      title="Contacts — Serhiy Zarudnyak"
      description="Get in touch with Serhiy Zarudnyak — artist from Zaporizhzhia, Ukraine."
    >
      <main className={styles.page}>
        <header className={styles.header}>
          <h1>Contacts</h1>
          <p className={styles.subtitle}>
            Reach out via the channels below.
          </p>
        </header>

        <div className={styles.cards}>
          {/* Facebook Messenger */}
          <a
            className={styles.card}
            href="https://www.facebook.com/profile.php?id=61587589902429"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.iconWrap}>
              <MessengerIcon />
            </span>
            <span className={styles.cardBody}>
              <span className={styles.cardLabel}>Facebook</span>
              <span className={styles.cardName}>Messenger</span>
            </span>
          </a>

          {/* Email — placeholder */}
          <span className={`${styles.card} ${styles.cardDisabled}`}>
            <span className={styles.iconWrap}>
              <EmailIcon />
            </span>
            <span className={styles.cardBody}>
              <span className={styles.cardLabel}>Email</span>
              <span className={styles.cardName}>Coming soon</span>
              <span className={styles.cardNote}>to be added</span>
            </span>
          </span>
        </div>
      </main>
    </Layout>
  );
}
