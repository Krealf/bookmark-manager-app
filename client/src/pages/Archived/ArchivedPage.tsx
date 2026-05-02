import styles from './ArchivedPage.module.scss';
import { useBookmarks } from '@/hooks/useBookmarks.ts';
import { Card } from '@/components/ui/Card';
import { IconArchived, IconCopy, IconDelete, IconUnarchived, IconVisit } from 'shared/icons';
import { useModal } from '@/hooks/useModal.ts';
import { ConfirmModal } from '@/components/ui/ConfirmModal';

export const ArchivedPage = () => {
  const { activeModal, openModal, closeModal } = useModal();
  const { bookmarks, togglePin, toggleArchived, loading } = useBookmarks();

  const archivedBookmarks = bookmarks.filter((b) => b.isArchived);

  if (loading)
    return (
      <section className={styles.section}>
        <h1 className={styles.title}>Loading...</h1>
      </section>
    );

  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.title}>Archived bookmarks</h1>
        <div className={styles.container}>
          {archivedBookmarks.map((bookmark, index) => (
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
                  onClick: () => console.log('Click to copy'),
                },
                {
                  type: 'action',
                  label: bookmark.isArchived ? 'Unarchive' : 'Archive',
                  icon: bookmark.isArchived ? (
                    <IconUnarchived size={16} />
                  ) : (
                    <IconArchived size={16} />
                  ),
                  onClick: () =>
                    openModal({ type: 'confirm-unarchive', bookmark: bookmark, id: bookmark.id }),
                },
                {
                  type: 'action',
                  label: 'Delete Permanently',
                  icon: <IconDelete size={16} />,
                  onClick: () => console.log('Click to Delete'),
                },
              ]}
              key={index}
            />
          ))}
        </div>
      </section>

      {activeModal?.type === 'confirm-unarchive' && (
        <ConfirmModal
          title="Unarchive bookmark"
          description="Move this bookmark back to your active list?"
          confirmLabel="Unarchive"
          onClose={closeModal}
          onSave={() => toggleArchived(activeModal?.id)}
        />
      )}
    </>
  );
};
