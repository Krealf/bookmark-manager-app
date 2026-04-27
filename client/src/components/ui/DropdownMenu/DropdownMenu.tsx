import styles from './DrowdownMenu.module.scss';
import { DropdownMenuProps } from 'shared/types';

export const DropdownMenu = ({ items }: DropdownMenuProps) => {
  return (
    <ul className={styles.dropdown} role="menu">
      {items.map((item, index) => (
        <li className={styles.dropdownItem} role="menuitem" key={index}>
          {item.icon}
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};
