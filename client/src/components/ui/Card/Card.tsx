import styles from './Card.module.scss';
import { BookmarkMenu } from '@/components/ui/BookmarkMenu/BookmarkMenu.tsx';
import { IconCreatedAt, IconLastVisited, IconPin, IconVisitCount } from 'shared/icons';

export const Card = () => {
  const faviconUrl = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://frontendmentor.io&size=128`;

  return (
    <article className={styles.card}>
      <div className={styles.heading}>
        <div className={styles.header}>
          <div className={styles.info}>
            <div className={styles.favicon}>
              <img src={faviconUrl} alt="" width={44} height={44} />
            </div>
            <div className={styles.names}>
              <h3 className={styles.title}>Frontend Mentor</h3>
              <div className={styles.url}>
                <p>frontendmentor.io</p>
              </div>
            </div>
          </div>
          <BookmarkMenu />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.description}>
          Improve your front-end coding skills by building real projects. Solve real-world HTML, CSS
          and JavaScript challenges whilst working to professional designs.
        </div>
        <div className={styles.tags}>
          <ul className={styles.tagsList}>
            <li className={styles.tagsItem}>Practice</li>
            <li className={styles.tagsItem}>Practice</li>
            <li className={styles.tagsItem}>Practice</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.statsWrapper}>
          <div className={`${styles.statsVisitCount} ${styles.stat}`}>
            <IconVisitCount size={12} />
            <span>47</span>
          </div>
          <div className={`${styles.statsLastVisited} ${styles.stat}`}>
            <IconLastVisited size={12} />
            <span>23 Sep</span>
          </div>
          <div className={`${styles.statsCreatedAt} ${styles.stat}`}>
            <IconCreatedAt size={12} />
            <span>15 Jan</span>
          </div>
        </div>
        <button className={styles.buttonPin} type="button" aria-label="Pin bookmark">
          <IconPin size={20} />
        </button>
      </div>
    </article>
  );
};
