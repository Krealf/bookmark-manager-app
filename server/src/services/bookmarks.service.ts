import { randomUUID } from 'node:crypto';
import { Bookmark } from 'shared/types';

const bookmarks: Bookmark[] = [
  {
    id: randomUUID(),
    title: 'GitHub',
    url: 'https://github.com',
    description: 'Хостинг кода',
    tags: ['dev', 'git'],
    createdAt: new Date().toISOString(),
  },
];

export const BookmarksService = {
  findAll(): Bookmark[] {
    return bookmarks;
  },
};
