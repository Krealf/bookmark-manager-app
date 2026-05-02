import styles from './ConfirmModal.module.scss';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

interface ConfirmModal {
  title: string;
  description: string;
  confirmLabel: string;
  danger?: boolean;
  onClose: () => void;
  onSave: () => void;
}

export const ConfirmModal = ({
  title,
  description,
  confirmLabel,
  danger,
  onClose,
  onSave,
  ...rest
}: ConfirmModal) => {
  return (
    <Modal onClose={onClose} className={styles.modalWindow}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.description}>{description}</div>
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
          onClick={() => {
            onClose();
            onSave();
          }}
          type="button"
          className={`${styles.cancel}`}
        >
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
};
