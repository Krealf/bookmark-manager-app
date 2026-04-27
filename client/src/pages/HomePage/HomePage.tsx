import styles from './HomePage.module.scss';
// import { useBookmarks } from '@/hooks/useBookmarks.ts';
import { Card } from '@/components/ui/Card';

export const HomePage = () => {
  // const { bookmarks, loading, error } = useBookmarks();

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>All bookmarks</h1>
      <div className={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
