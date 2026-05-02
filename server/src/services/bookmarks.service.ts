import { Bookmark } from 'shared/types';
import { join } from 'node:path';
import { existsSync, writeFileSync } from 'node:fs';
import { readFileSync } from 'fs';

const DB_PATH = join(process.env.DATA_PATH || '/data', 'data.json');

function load(): Bookmark[] {
  console.log(DB_PATH);
  // Если файла не существует, то возвращаем пустой массив
  if (!existsSync(DB_PATH)) return [];

  console.log(JSON.parse(readFileSync(DB_PATH, 'utf-8')));
  // Иначе парсим файл с данными и берём оттуда данные по ключу bookmarks
  return JSON.parse(readFileSync(DB_PATH, 'utf-8')).bookmarks;
}

function save(data: Bookmark[]): void {
  console.log(JSON.parse(readFileSync(DB_PATH, 'utf-8')));
  writeFileSync(DB_PATH, JSON.stringify({ bookmarks: data }, null, 2));
  console.log(JSON.parse(readFileSync(DB_PATH, 'utf-8')));
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
