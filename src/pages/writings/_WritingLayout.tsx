import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import styles from './writings.module.css';

const PAGES = [
  {slug: 'interview', label: 'Interview'},
  {slug: 'poems', label: 'Poems'},
];

export function Sidebar() {
  const {pathname} = useLocation();
  return (
    <aside className={styles.sidebar}>
      <p className={styles.sidebarTitle}>Writings</p>
      <ul className={styles.sidebarNav}>
        {PAGES.map(({slug, label}) => {
          const href = `/writings/${slug}`;
          const isActive = pathname === href || pathname === `${href}/`;
          return (
            <li key={slug}>
              <Link
                to={href}
                className={`${styles.sidebarLink}${isActive ? ` ${styles.active}` : ''}`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default function WritingLayout({children}: {children: ReactNode}) {
  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
