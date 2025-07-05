'use client';

import { useState, useEffect } from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    const rootHasDarkClass = document.documentElement.classList.contains('dark');
    const themeCookie = document.cookie.match(/theme=(dark|light)/)?.[1];
    
    const initialTheme = themeCookie || (rootHasDarkClass ? 'dark' : 'light');
    setTheme(initialTheme as 'light' | 'dark');

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (!document.cookie.includes('theme=')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const toggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    document.cookie = `theme=${nextTheme}; Secure; SameSite=Lax; max-age=${60 * 60 * 24 * 3}; path=/`;
    
    setTheme(nextTheme);
  };

  if (theme === null) return null;
  return (
    <div onClick={toggle} role="switch" aria-checked={theme === 'dark'} className="fixed bottom-4 right-4 flex items-center space-x-2">
      <div className="relative w-10 h-7 bg-gray-300 rounded-full cursor-pointer dark:bg-gray-700">
        <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full flex items-center justify-center transition-all ease-in-out duration-300 ${theme === 'dark' ? 'left-4' : 'left-0'}`}>
          <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} className="w-3 h-3 text-gray-800" />
        </div>
      </div>
    </div>
  );
}