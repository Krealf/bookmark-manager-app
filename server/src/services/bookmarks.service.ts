import { Bookmark } from 'shared/types';
import { join } from 'node:path';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { readFileSync } from 'fs';

const DATA_DIR = process.env.DATA_PATH
  ? join(process.cwd(), process.env.DATA_PATH)
  : join(__dirname, '../data');

const DB_PATH = join(DATA_DIR, 'data.json');

function ensureFile(): void {
  // Создаём директорию если нет
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
  // Создаём файл если нет
  if (!existsSync(DB_PATH)) {
    writeFileSync(
      DB_PATH,
      JSON.stringify(
        {
          bookmarks: [
            {
              id: 'bm-001',
              title: 'GitHub',
              url: 'https://github.com',
              favicon: './assets/images/favicon-github.png',
              description: "I don't",
              tags: ['Tools', 'Community', 'Git'],
              pinned: false,
              isArchived: false,
              visitCount: 198,
              createdAt: '2024-01-05T06:00:00Z',
              lastVisited: '2025-09-24T15:30:00Z',
            },
          ],
        },
        null,
        2
      )
    );
  }
}

function load(): Bookmark[] {
  ensureFile();
  return JSON.parse(readFileSync(DB_PATH, 'utf-8')).bookmarks;
}

function save(data: Bookmark[]): void {
  writeFileSync(DB_PATH, JSON.stringify({ bookmarks: data }, null, 2));
}

// Сервис bookmarks с методами для работы с БД
export const BookmarksService = {
  // Описываем метод findAll, который возвращает все закладки с типизацией
  findAll(): Bookmark[] {
    // Возвращаем результат вызова функции load
    return load();
  },

  findById(id: string): Bookmark {
    // Возвращаем результат вызова функции load
    const bookmarks = load();
    const bookmark = bookmarks.find((bookmark) => bookmark.id === id);

    if (!bookmark) {
      throw new Error('Bookmark not found');
    }

    return bookmark;
  },

  update(id: string, dto: Partial<Omit<Bookmark, 'id' | 'createdAt'>>): Bookmark {
    const bookmarks = load();
    const index = bookmarks.findIndex((b) => b.id === id);

    if (index === -1) {
      throw new Error('Bookmark not found');
    }

    bookmarks[index] = { ...bookmarks[index], ...dto };
    save(bookmarks);

    return bookmarks[index];
  },
};
