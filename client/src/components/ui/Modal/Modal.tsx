import styles from './Modal.module.scss';
import React, { useRef } from 'react';
import { useClickToCloseOutside } from '@/hooks/useClickToCloseOutside.ts';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({ onClose, children, className }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null); // Создаём ссылку на само меню для отслеживания клика
  useClickToCloseOutside(modalRef, onClose)

  return (
    <div className={`${styles.overlay} ${styles.fadeIn}`}>
      <div className={styles.modalWindowWrap}>
        <div className={`${styles.modalWindow} ${className || ''}`} role="dialog" aria-modal="true" ref={modalRef}>
          {children}
        </div>
      </div>
    </div>
  );
};
