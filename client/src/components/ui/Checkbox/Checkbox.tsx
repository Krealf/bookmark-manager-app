import styles from './Checkbox.module.scss';
import React from 'react';

import { CheckboxProps } from 'shared/types';

export const Checkbox = ({ label, checked, onChange, disabled, id }: CheckboxProps) => {
  return (
    <div className={styles.checkbox}>
      <input
        id={id}
        name=""
        type="checkbox"
        className={`${styles.input}`}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className={styles.label}>{label}</span>
    </div>
  );
};
