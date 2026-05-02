import styles from './ConfirmModal.module.scss';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

interface ConfirmModal {
  title: string;
  description: string;
  confirmLabel: string;
  danger?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal = ({
  title,
  description,
  confirmLabel,
  danger,
  onConfirm,
  onCancel,
}: ConfirmModal) => {
  return (
    <Modal onClose={onCancel} className={styles.modalWindow}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.actions}>
        <Button
          variant="secondary"
          size="md"
          onClick={onCancel}
          type="button"
          className={`${styles.cancel}`}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          size="md"
          onClick={onConfirm}
          type="button"
          className={`${styles.cancel}`}
        >
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
};
