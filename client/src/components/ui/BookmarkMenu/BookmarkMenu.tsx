import styles from './BookmarkMenu.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { IconDots, IconVisit, IconCopy, IconUnpin, IconEdit, IconArchived } from 'shared/icons';
import { DropdownMenu } from '@/components/ui/DropdownMenu';

export const BookmarkMenu = () => {
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

  const menu = [
    { label: 'Visit', icon: <IconVisit size={16} /> },
    { label: 'Copy URL', icon: <IconCopy size={16} /> },
    { label: 'Unpin', icon: <IconUnpin size={16} /> },
    { label: 'Edit', icon: <IconEdit size={16} /> },
    { label: 'Archive', icon: <IconArchived size={16} /> },
  ];

  return (
    <div className={styles.menu} ref={menuRef}>
      <button
        className={styles.button}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Open bookmark menu"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <IconDots size={20} />
      </button>

      {isOpen && <DropdownMenu items={menu} />}
    </div>
  );
};
