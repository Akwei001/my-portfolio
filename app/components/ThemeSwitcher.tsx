'use client';

import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { themes, ThemeNames } from '../themes';

export default function ThemeSwitcher() {
  const { currentTheme, setTheme, isLoaded } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Don't render anything until the theme is loaded
  if (!isLoaded) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-md bg-opacity-10 hover:bg-opacity-20 transition-all duration-200"
        style={{ backgroundColor: themes[currentTheme].colors.primary }}
      >
        <span className="text-sm font-medium">{themes[currentTheme].name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 py-2 w-48 bg-opacity-95 rounded-md shadow-lg z-50"
          style={{ backgroundColor: themes[currentTheme].colors.background }}
        >
          {Object.entries(themes).map(([themeKey, theme]) => (
            <button
              key={themeKey}
              onClick={() => {
                setTheme(themeKey as ThemeNames);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-opacity-10 transition-colors duration-200 ${
                currentTheme === themeKey ? 'font-medium' : ''
              }`}
              style={{
                color: theme.colors.text,
                backgroundColor: currentTheme === themeKey ? theme.colors.accent : 'transparent'
              }}
            >
              {theme.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 