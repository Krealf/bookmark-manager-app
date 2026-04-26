import styles from './SibeBar.module.scss';
import React from 'react';

import { IconHome, IconArchived } from 'shared/icons';
import { NavLink } from 'react-router';
import { Checkbox } from '@/components/ui/Checkbox/Checkbox.tsx';

interface SideBarProps extends React.HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
  isOpen: boolean;
}

export const SideBar = ({ isLoading = false, className, isOpen, ...rest }: SideBarProps) => {
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
            src="./icons/logo-light-theme.svg"
            alt=""
            loading="lazy"
            className={styles.logoLight}
          />
          <img
            src="./icons/logo-dark-theme.svg"
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
            <li className={styles.tagItem}>
              <label htmlFor="ai" className={styles.tagLabel}>
                <Checkbox label="Ai" checked={true} id="ai" />
                <span className={styles.tagQuantity}>2</span>
              </label>
            </li>
            <li className={styles.tagItem}>
              <label htmlFor="community" className={styles.tagLabel}>
                <Checkbox label="Community" checked={false} id="community" />
                <span className={styles.tagQuantity}>2</span>
              </label>
            </li>
            <li className={styles.tagItem}>
              <label htmlFor="compatibility" className={styles.tagLabel}>
                <Checkbox label="Compatibility" checked={true} id="compatibility" disabled={true} />
                <span className={styles.tagQuantity}>2</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </aside>
  );
};
