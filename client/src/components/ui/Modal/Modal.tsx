import styles from './Modal.module.scss';
import React from 'react';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({ onClose, children, className }: ModalProps) => {
  return (
    <div className={`${styles.overlay} ${styles.fadeIn}`} aria-hidden="true">
      <div className={styles.modalWindowWrap}>
        <div className={`${styles.modalWindow} ${className || ''}`} role="dialog" aria-modal="true">
          {children}
        </div>
      </div>
    </div>
  );
};
