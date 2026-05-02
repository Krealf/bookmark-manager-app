import { Bookmark } from 'shared/types';

interface TagsResult {
  keys: string[];
  entries: [string, number][];
}

export function getTagsCount(bookmarks: Bookmark[]): TagsResult {
  const tagsObject = bookmarks.reduce(
    (accumulator, currentValue) => {
      currentValue.tags.forEach((tag) => {
        accumulator[tag] = (accumulator[tag] ?? 0) + 1;
      });
      return accumulator;
    },
    {} as Record<string, number>
  );

  return {
    keys: Object.keys(tagsObject),
    entries: Object.entries(tagsObject).sort((a, b) => a[0].localeCompare(b[0])),
  };
}
