import React from 'react';

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  favicon: string;
  description: string;
  tags: string[];
  pinned: boolean;
  isArchived: boolean;
  visitCount: number;
  createdAt: string;
  lastVisited: string;
}

export interface SvgProps extends React.SVGProps<SVGSVGElement> {
  size: number;
  fill?: string;
}

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  id: string;
}

// Тип для ссылки
type DropdownMenuLinkItem = {
  type: 'link';
  label: string;
  icon: React.ReactNode;
  link: string; // Обязательно поле link
};

// Тип для кнопки действия
type DropdownMenuActionItem = {
  type: 'action';
  link?: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
};

export type DropdownMenuItem = DropdownMenuLinkItem | DropdownMenuActionItem;

export interface ApiResponse<T> {
  data: T;
  message?: string;
}
