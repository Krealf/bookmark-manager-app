import { Bookmark } from 'shared/types';
import { join } from 'node:path';
import { existsSync, writeFileSync } from 'node:fs';
import { readFileSync } from 'fs';

const DB_PATH = join(__dirname, '../data/data.json');

function load(): Bookmark[] {
  if (!existsSync(DB_PATH)) return [];
  return JSON.parse(readFileSync(DB_PATH, 'utf-8'));
}

function save(data: Bookmark[]): void {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

export const BookmarksService = {
  findAll(): Bookmark[] {
    return load();
  },
};
