import styles from './SearchField.module.scss';
import React from 'react';

interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  children?: React.ReactNode;
  placeholder: string;
  isError?: boolean;
  icon?: React.ElementType;
}

export const SearchField = ({
  isLoading = false,
  isError = false,
  children,
  className,
  disabled,
  placeholder,
  icon: Icon,
  ...rest
}: SearchFieldProps) => {
  return (
    <search className={styles.search}>
      <label htmlFor="search" className={`${styles.label}`}>
        <span className={`visually-hidden`}>Search bookmarks by title</span>
        {Icon && <Icon size={20} aria-hidden={true} />}
      </label>
      <input
        id="search"
        type="search"
        name="search"
        placeholder={placeholder}
        autoComplete="off"
        aria-label="Search"
        aria-invalid={isError}
        className={`${styles.input} ${className ?? ''} ${isError ? styles.error : ''} `}
        disabled={disabled || isLoading}
        {...rest}
      />
      {isLoading ? 'Загрузка...' : children}
    </search>
  );
};
