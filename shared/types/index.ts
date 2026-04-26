import React from 'react';

export interface Bookmark {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  createdAt: string;
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

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export type CreateBookmarkDto = Omit<Bookmark, 'id' | 'createdAt'>;

export type UpdateBookmarkDto = Partial<CreateBookmarkDto>;
