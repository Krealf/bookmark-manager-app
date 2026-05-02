import styles from './SibeBar.module.scss';
import React from 'react';

import { IconHome, IconArchived } from 'shared/icons';
import { NavLink } from 'react-router';
import { Checkbox } from '@/components/ui/Checkbox/Checkbox.tsx';
import { useBookmarks } from '@/hooks/useBookmarks.ts';
import { getTagsCount } from '@/utils/getTagsCount.ts';

interface SideBarProps extends React.HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
  isOpen: boolean;
}

export const SideBar = ({
  // isLoading = false,
  className,
  isOpen,
  ...rest
}: SideBarProps) => {
  const { bookmarks, loading } = useBookmarks();
  const { keys, entries } = getTagsCount(bookmarks);

  return (
    <aside
      className={`${styles.sidebar} ${className ?? ''} ${isOpen ? styles.open : ''}`}
      {...rest}
      aria-hidden={!isOpen}
      inert={!isOpen || undefined}
    >
      <header className={styles.header}>
        <a href="/" className={styles.headerLogo}>
          <img
            src="./assets/icons/logo-light-theme.svg"
            alt=""
            loading="lazy"
            className={styles.logoLight}
          />
          <img
            src="./assets/icons/logo-dark-theme.svg"
            alt=""
            loading="lazy"
            className={styles.logoDark}
          />
        </a>
      </header>
      <div className={styles.body}>
        <nav className={styles.panels} aria-label="Main navigation">
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                to="/"
              >
                <IconHome size={25} />
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                to="/archived"
              >
                <IconArchived size={25} />
                Archived
              </NavLink>
            </li>
          </ul>
        </nav>
        <section aria-labelledby="tags-title" className={styles.section}>
          <h2 id="tags-title" className={styles.sectionTitle}>
            Tags
          </h2>
          <ul className={styles.tagList} role="list">
            {entries.map((tag, index) => (
              <li className={styles.tagItem} key={index}>
                <label htmlFor={tag[0].toLowerCase()} className={styles.tagLabel}>
                  <Checkbox label={tag[0]} checked={false} id={tag[0].toLowerCase()} />
                  <span className={styles.tagQuantity}>{tag[1]}</span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
};
