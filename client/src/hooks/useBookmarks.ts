import { useEffect, useState } from 'react';
import { api } from '@/services/api.ts';
import { Bookmark } from 'shared/types';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]); // Создаём переменную для закладок
  const [loading, setLoading] = useState(true); // Создаём переменную для статуса загрузки
  const [error, setError] = useState<string | null>(null); // Создаём переменную для ошибки

  function togglePin(id: string) {
    const previous = bookmarks;

    setBookmarks(bookmarks.map((b) => (b.id === id ? { ...b, pinned: !b.pinned } : b)));

    const bookmark = bookmarks.find((b) => b.id === id);

    api
      .patch<Bookmark[]>(`/api/bookmarks/${id}`, {
        pinned: !bookmark?.pinned,
      })
      .catch(() => {
        setBookmarks(previous);
      });
  }

  // Partial делает все ключи объекта Bookmark необязательными
  function updateBookmark(id: string, body: Partial<Bookmark>) {
    const previous = bookmarks;

    setBookmarks(bookmarks.map((b) => (b.id === id ? { ...b, ...body } : b)));

    api.patch<Bookmark[]>(`/api/bookmarks/${id}`, body).catch((err) => {
      console.error(err);
      setBookmarks(previous);
    });
  }

  function toggleArchived(id: string) {
    const previous = bookmarks;

    setBookmarks(bookmarks.map((b) => (b.id === id ? { ...b, isArchived: !b.isArchived } : b)));

    const bookmark = bookmarks.find((b) => b.id === id);

    api
      .patch<Bookmark[]>(`/api/bookmarks/${id}`, {
        isArchived: !bookmark?.isArchived,
      })
      .catch(() => {
        setBookmarks(previous);
      });
  }

  async function clickToCopyUrl(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      console.log('Copy URL successful');
    } catch (err) {
      console.error('Failed copy URL: ', err);
    }
  }

  // Делаем один запрос на получение закладок из сервера
  useEffect(() => {
    api
      .get<Bookmark[]>('/api/bookmarks')
      .then((res) => setBookmarks(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return {
    bookmarks,
    loading,
    error,
    togglePin,
    toggleArchived,
    clickToCopyUrl,
    updateBookmark,
  };
}
