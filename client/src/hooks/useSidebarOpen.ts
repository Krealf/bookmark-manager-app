import { useEffect, useState } from 'react';

const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

export function useSidebarOpen() {
  const [isOpen, setIsOpen] = useState(() => !isMobile());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handler = (e: MediaQueryListEvent) => {
      setIsOpen(!e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen(prev => !prev)

  return {isOpen, open, close, toggle};
}
