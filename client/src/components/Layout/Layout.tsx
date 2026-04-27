import { Outlet } from 'react-router';
import styles from './Layout.module.scss';
import { Button } from '@/components/ui/Button';
import { SearchField } from '@/components/ui/SearchField';
import { IconMenuHamburger, IconPlus, IconSearch } from 'shared/icons';
import { SideBar } from '@/components/ui/SideBar/SideBar.tsx';
import { useSidebarOpen } from '@/hooks/useSidebarOpen.ts';

export const Layout = () => {
  const { isOpen, close, toggle } = useSidebarOpen();

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.controls}>
          <button
            className={`${styles.burgerButton} visible-mobile`}
            aria-expanded={isOpen}
            aria-controls="sidebar"
            aria-label="Open menu"
            type="button"
            onClick={toggle}
          >
            <IconMenuHamburger size={20} />
          </button>
          <div className={styles.searchWrapper}>
            <SearchField placeholder="Search by title..." icon={IconSearch} />
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            variant="primary"
            size="md"
            icon={IconPlus}
            sizeIcon={25}
            className={styles.addBookmark}
          >
            Add Bookmark
          </Button>
          <a href="/" className={styles.avatar}>
            <img
              src="./assets/avatars/image-avatar.webp"
              alt=""
              height="40"
              width="40"
              loading="lazy"
            />
          </a>
        </div>
      </header>

      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={close} />

      <SideBar className={styles.sidebar} id="sidebar" isOpen={isOpen} />

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
