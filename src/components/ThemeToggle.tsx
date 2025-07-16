// src/components/ThemeToggle.tsx
import React from 'react';

export const ThemeToggle = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
  };

  React.useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="btn focus:outline-none focus:ring focus:ring-blue-400"
      aria-label="Toggle Dark Mode"
    >
      🌗 Toggle Theme
    </button>
  );
};
