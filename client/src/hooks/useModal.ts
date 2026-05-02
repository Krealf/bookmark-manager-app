import { Bookmark } from 'shared/types';
import { useState } from 'react';

// Определяем возможные типы модального окна
type ModalState =
  | { type: 'add'; bookmark: Bookmark; id: string }
  | { type: 'edit'; bookmark: Bookmark; id: string }
  | { type: 'confirm-archive'; bookmark: Bookmark; id: string }
  | { type: 'confirm-unarchive'; bookmark: Bookmark; id: string }
  | { type: 'confirm-delete'; bookmark: Bookmark; id: string }
  | null;

export function useModal() {
  // Говорим какие значения может принимать useState
  const [activeModal, setActiveModal] = useState<ModalState>(null);

  // Функция для открытия модального окна нужного типа
  const openModal = (modal: NonNullable<ModalState>) => setActiveModal(modal);

  // Функция для закрытия модального окна
  const closeModal = () => setActiveModal(null);

  return { activeModal, openModal, closeModal };
}
