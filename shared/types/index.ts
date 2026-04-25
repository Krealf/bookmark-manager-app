export interface Bookmark {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  createdAt: string;
}

export type CreateBookmarkDto = Omit<Bookmark, 'id' | 'createdAt'>;

export type UpdateBookmarkDto = Partial<CreateBookmarkDto>;

export interface ApiResponse<T> {
  data: T;
  message?: string;
}
