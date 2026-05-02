import styles from './HomePage.module.scss';
import { Card } from '@/components/ui/Card';
import { useBookmarks } from '@/hooks/useBookmarks.ts';
import {
  IconArchived,
  IconCopy,
  IconEdit,
  IconPin,
  IconUnarchived,
  IconUnpin,
  IconVisit,
} from 'shared/icons';
import { useModal } from '@/hooks/useModal.ts';
import { ConfirmModal } from '@/components/ui/ConfirmModal';

export const HomePage = () => {
  const { bookmarks, togglePin, toggleArchived, loading, clickToCopyUrl } = useBookmarks();
  const { activeModal, openModal, closeModal } = useModal();

  const activeBookmarks = bookmarks.filter((b) => !b.isArchived);

  if (loading)
    return (
      <section className={styles.section}>
        <h1 className={styles.title}>Loading...</h1>
      </section>
    );

  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.title}>All bookmarks</h1>
        <div className={styles.container}>
          {activeBookmarks.map((bookmark, index) => (
            <Card
              bookmark={bookmark}
              onTogglePin={togglePin}
              // onToggleArchived={toggleArchived}
              menuItems={[
                { type: 'link', label: 'Visit', icon: <IconVisit size={16} />, link: bookmark.url },
                {
                  type: 'action',
                  label: 'Copy URL',
                  icon: <IconCopy size={16} />,
                  link: bookmark.url,
                  onClick: () => clickToCopyUrl(bookmark.url),
                },
                {
                  type: 'action',
                  label: bookmark.pinned ? 'Unpin' : 'Pin',
                  icon: bookmark.pinned ? <IconUnpin size={16} /> : <IconPin size={16} />,
                  onClick: () => togglePin(bookmark.id),
                },
                {
                  type: 'action',
                  label: 'Edit',
                  icon: <IconEdit size={16} />,
                  onClick: () => console.log('Click to Edit'),
                },
                {
                  type: 'action',
                  label: bookmark.isArchived ? 'Unarchive' : 'Archive',
                  icon: bookmark.isArchived ? (
                    <IconUnarchived size={16} />
                  ) : (
                    <IconArchived size={16} />
                  ),
                  onClick: () => openModal({ type: 'confirm-archive', bookmark, id: bookmark.id }),
                },
              ]}
              key={index}
            />
          ))}
        </div>
      </section>

      {activeModal?.type === 'confirm-archive' && (
        <ConfirmModal
          title="Archive bookmark"
          description="Are you sure you want to archive this bookmark?"
          confirmLabel="Archive"
          onConfirm={() => {
            closeModal();
            toggleArchived(activeModal?.id);
          }}
          onCancel={() => closeModal()}
        />
      )}
    </>
  );
};
