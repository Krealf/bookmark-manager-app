import styles from './Modal.module.scss';
import React from 'react';

interface Modal {
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({ onClose, children, className }: Modal) => {
  return (
    <div className={styles.overlay}>
      <div className={`${styles.modalWindow} ${className || ''}`}>{children}</div>
    </div>
  );
};
