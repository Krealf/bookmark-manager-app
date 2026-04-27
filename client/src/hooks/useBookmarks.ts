import { useEffect, useState } from 'react';
import { Bookmark } from 'shared/types';
import { api } from '@/services/api.ts';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<Bookmark[]>('/api/bookmarks')
      .then((data) => setBookmarks(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { bookmarks, loading, error };
}
