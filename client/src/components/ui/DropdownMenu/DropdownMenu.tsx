import styles from './DrowdownMenu.module.scss';
import { DropdownMenuItem } from 'shared/types';

interface DropdownMenuProps {
  items: DropdownMenuItem[];
  onClose: () => void;
}

export const DropdownMenu = ({ items, onClose }: DropdownMenuProps) => {
  const renderItem = (item: DropdownMenuItem, index: number) => {
    if (item.type === 'link') {
      return (
        <li className={styles.dropdownItem} key={index}>
          <a
            href={item.link}
            target="_blank"
            role="menuitem"
            className={styles.dropdownControl}
            rel="noreferrer"
            onClick={onClose}
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        </li>
      );
    }

    return (
      <li className={styles.dropdownItem} key={index}>
        <button
          type="button"
          role="menuitem"
          className={styles.dropdownControl}
          onClick={() => {
            item.onClick();
            onClose();
          }}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      </li>
    );
  };

  return (
    <ul className={styles.dropdown} role="menu">
      {items.map((item, index) => renderItem(item, index))}
    </ul>
  );
};
