import { RefObject, useEffect } from 'react';

export function useClickToCloseOutside<T extends HTMLElement>(currentRef: RefObject<T | null>, onClose: () => void): void {
  useEffect(() => {
    // Создаём функцию-слушитель
    const handleOutsideClick = (event: MouseEvent) => {
      console.log(event);
      // Есть ли вообще меню в DOM и Был ли клик внутри мен-обёртки?
      if (currentRef.current && !currentRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Вешаем обработчик на событие клика
    document.addEventListener('mousedown', handleOutsideClick);

    // Удаляем обработчик при закрытии меню
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [currentRef, onClose]);
}