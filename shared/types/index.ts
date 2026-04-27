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

export interface DropdownMenuItem {
  label: string;
  icon: React.ReactNode;
}

export interface DropdownMenuProps {
  items: DropdownMenuItem[];
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export type CreateBookmarkDto = Omit<Bookmark, 'id' | 'createdAt'>;

export type UpdateBookmarkDto = Partial<CreateBookmarkDto>;
