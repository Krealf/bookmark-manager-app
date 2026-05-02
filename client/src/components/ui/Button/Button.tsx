import styles from './Button.module.scss';
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'white';
type ButtonSize = 'sm' | 'md';
type ButtonType = 'Default' | 'Error';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: React.ReactNode;
  typeButton?: ButtonType;
  icon?: React.ElementType;
  sizeIcon?: number;
  onClick?: () => void;
}

export const Button = ({
  variant = 'primary',
  size = 'sm',
  isLoading = false,
  typeButton = 'Default',
  children,
  className,
  disabled,
  icon: Icon,
  sizeIcon = 20,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${styles[typeButton]} ${className ?? ''}`}
      disabled={disabled || isLoading}
      {...rest}
      onClick={onClick}
    >
      {Icon && <Icon size={sizeIcon} aria-hidden={true} />}
      <span>{isLoading ? 'Загрузка...' : children}</span>
    </button>
  );
};
