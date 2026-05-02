import styles from './BookmarkMenu.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { IconDots } from 'shared/icons';
import { DropdownMenu } from '@/components/ui/DropdownMenu';
import { DropdownMenuItem } from 'shared/types';

interface BookmarkMenuProps {
  items: DropdownMenuItem[];
}

export const BookmarkMenu = ({ items }: BookmarkMenuProps) => {
  const [isOpen, setIsOpen] = useState(false); // Определяем показывать меню или нет
  const menuRef = useRef<HTMLDivElement>(null); // Создаём ссылку на само меню для отслеживания клика

  useEffect(() => {
    // Создаём функцию-слушитель
    const handleOutsideClick = (event: MouseEvent) => {
      // Есть ли вообще меню в DOM и Был ли клик внутри мен-обёртки?
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Вешаем обработчик на событие клика
    document.addEventListener('mousedown', handleOutsideClick);

    // Удаляем обработчик при закрытии меню
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className={styles.menu} ref={menuRef}>
      <button
        className={`${styles.button} ${isOpen ? styles.active : ''}`}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Open bookmark menu"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <IconDots size={20} />
      </button>

      {isOpen && <DropdownMenu items={items} onClose={() => setIsOpen(false)} />}
    </div>
  );
};
