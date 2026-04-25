import { Outlet } from 'react-router';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <input id="" name="" className={styles.search} />
        <div>
          <button type="button"></button>
          <a href="/"></a>
        </div>
      </header>

      <aside className={styles.sidebar}>
        <header>
          <a href="/">
            <img src="" alt="" width="" height="" loading="lazy" />
            <h1>Bookmark manager</h1>
          </a>
        </header>
        <div className={styles.panels}>
          <div>Home</div>
          <div>Archived</div>
        </div>
        <div>
          <h2>Tags</h2>
          <ul>
            <li>AI</li>
            <li>AI</li>
            <li>AI</li>
            <li>AI</li>
            <li>AI</li>
            <li>AI</li>
          </ul>
        </div>
      </aside>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
