import styles from './Card.module.scss';
import { BookmarkMenu } from '@/components/ui/BookmarkMenu/BookmarkMenu.tsx';
import { IconCreatedAt, IconLastVisited, IconPin, IconUnpin, IconVisitCount } from 'shared/icons';
import { Bookmark, DropdownMenuItem } from 'shared/types';
import React from 'react';

interface CardProps {
  bookmark: Bookmark;
  onTogglePin: (id: string) => void;
  menuItems: DropdownMenuItem[];
}

export const Card = ({ bookmark, onTogglePin, menuItems }: CardProps) => {
  const faviconUrl = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${bookmark.url}&size=128`;

  return (
    <article className={styles.card}>
      <div className={styles.heading}>
        <div className={styles.header}>
          <div className={styles.info}>
            <div className={styles.favicon}>
              <img src={faviconUrl} alt="" width={44} height={44} />
            </div>
            <div className={styles.names}>
              <h3 className={styles.title}>{bookmark.title}</h3>
              <div className={styles.url}>
                <p>{bookmark.url}</p>
              </div>
            </div>
          </div>
          <BookmarkMenu items={menuItems} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.description}>{bookmark.description}</div>
        <div className={styles.tags}>
          <ul className={styles.tagsList}>
            {bookmark.tags.map((item, index) => (
              <li className={styles.tagsItem} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.statsWrapper}>
          <div className={`${styles.statsVisitCount} ${styles.stat}`}>
            <IconVisitCount size={12} />
            <span>{bookmark.visitCount}</span>
          </div>
          <div className={`${styles.statsLastVisited} ${styles.stat}`}>
            <IconLastVisited size={12} />
            <span>
              <time dateTime={bookmark.lastVisited}>
                {new Date(bookmark.lastVisited).toLocaleString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                })}
              </time>
            </span>
          </div>
          <div className={`${styles.statsCreatedAt} ${styles.stat}`}>
            <IconCreatedAt size={12} />
            <span>
              <time dateTime={bookmark.createdAt}>
                {new Date(bookmark.createdAt).toLocaleString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                })}
              </time>
            </span>
          </div>
        </div>
        <button
          className={styles.buttonPin}
          type="button"
          aria-label="Pin bookmark"
          onClick={() => onTogglePin(bookmark.id)}
        >
          {bookmark.pinned ? <IconUnpin size={20} /> : <IconPin size={20} />}
        </button>
      </div>
    </article>
  );
};
