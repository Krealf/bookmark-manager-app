import styles from './EditModal.module.scss';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Bookmark } from 'shared/types';
import React, { useState } from 'react';

interface EditModal {
  title: string;
  description: string;
  confirmLabel: string;
  danger?: boolean;
  onClose: () => void;
  onSave: (id: string, body: object) => void;
  bookmark: Bookmark;
}

export const EditModal = ({
  title,
  description,
  confirmLabel,
  danger,
  bookmark,
  onClose,
  onSave,
  ...rest
}: EditModal) => {
  const [titleBookmark, setTitleBookmark] = useState(bookmark.title);
  const [descriptionBookmark, setDescriptionBookmark] = useState(bookmark.description);
  const [urlBookmark, setUrlBookmark] = useState(bookmark.url);
  const [tagsBookmark, setTagsBookmark] = useState(bookmark.tags.join(', '));
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<null | string>(null);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      onSave(bookmark.id, {
        title: titleBookmark.trim(),
        description: descriptionBookmark.trim(),
        url: urlBookmark.trim(),
        tags: tagsBookmark
          .split(', ')
          .map((tag) => tag.trim())
          .filter(Boolean),
      });
      onClose();
    } catch (err) {
      console.error(err);
      setError('Failed to save changes');
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <Modal onClose={onClose} className={styles.modalWindow}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.body}>
          <label className={styles.field}>
            <div className={styles.label}>
              Title <span className={styles.required}>*</span>
            </div>
            <input
              value={titleBookmark}
              className={styles.input}
              onChange={(e) => setTitleBookmark(e.target.value)}
              required
              name=""
            />
          </label>
          <label className={styles.field}>
            <div className={styles.label}>
              Description <span className={styles.required}>*</span>
            </div>
            <textarea
              className={`${styles.textarea} ${styles.input}`}
              value={descriptionBookmark}
              onChange={(e) => setDescriptionBookmark(e.target.value)}
              required
              name=""
            />
          </label>
          <label className={styles.field}>
            <div className={styles.label}>
              Website URL <span className={styles.required}>*</span>
            </div>
            <input
              className={styles.input}
              value={urlBookmark}
              onChange={(e) => setUrlBookmark(e.target.value)}
              required
              name=""
            />
          </label>
          <label className={styles.field}>
            <div className={styles.label}>
              Tags <span className={styles.required}>*</span>
            </div>
            <input
              className={styles.input}
              value={tagsBookmark}
              onChange={(e) => setTagsBookmark(e.target.value)}
              required
              name=""
            />
          </label>
        </div>
        <div className={styles.actions}>
          <Button
            variant="secondary"
            size="md"
            onClick={onClose}
            type="button"
            className={`${styles.cancel}`}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            size="md"
            type="submit"
            className={`${styles.cancel}`}
            disabled={isSaving}
          >
            {confirmLabel}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
