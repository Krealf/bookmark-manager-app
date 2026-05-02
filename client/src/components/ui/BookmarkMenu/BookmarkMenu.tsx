import styles from './BookmarkMenu.module.scss';
import React, { useRef, useState } from 'react';
import { IconDots } from 'shared/icons';
import { DropdownMenu } from '@/components/ui/DropdownMenu';
import { DropdownMenuItem } from 'shared/types';
import { useClickToCloseOutside } from '@/hooks/useClickToCloseOutside.ts';

interface BookmarkMenuProps {
  items: DropdownMenuItem[];
}

export const BookmarkMenu = ({ items }: BookmarkMenuProps) => {
  const [isOpen, setIsOpen] = useState(false); // Определяем показывать меню или нет
  const menuRef = useRef<HTMLDivElement>(null); // Создаём ссылку на само меню для отслеживания клика
  useClickToCloseOutside(menuRef, () => setIsOpen(false))

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
