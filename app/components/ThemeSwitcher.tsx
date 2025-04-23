'use client';

import { useState, useEffect } from 'react';
// import { useTheme } from '../contexts/ThemeContext'; // Remove custom context
// import { themes, ThemeNames } from '../themes'; // Remove theme definitions import
import { useTheme } from 'next-themes'; // Import from next-themes

// Define the themes we want to offer in the switcher
// Match these names with the keys used in next-themes (e.g., 'light', 'dark')
// We can add more themes here later if needed and configured in tailwind.config.js
const availableThemes = {
  light: { name: 'Light' },
  dark: { name: 'Dark' },
  // Add other themes if they are configured in tailwind and next-themes provider
  // serika: { name: 'Serika' },
  // botanical: { name: 'Botanical' },
};

type AvailableThemeKey = keyof typeof availableThemes;

export default function ThemeSwitcher() {
  // Use theme and setTheme from next-themes
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering UI that depends on theme
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a placeholder or null to avoid hydration mismatch
    return <div className="w-24 h-10"></div>; // Placeholder size
  }

  // Determine the display name of the current theme
  const currentThemeName = availableThemes[theme as AvailableThemeKey]?.name || theme || 'System';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        // Apply Tailwind classes for styling - adjust as needed
        className="flex items-center px-4 py-2 space-x-2 transition-colors duration-200 rounded-md bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
        // Remove inline style
        // style={{ backgroundColor: themes[currentTheme].colors.primary }}
      >
        {/* Display current theme name */}
        <span className="text-sm font-medium">{currentThemeName}</span>
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
          // Apply Tailwind classes for styling - adjust as needed
          className="absolute right-0 z-50 w-48 py-2 mt-2 bg-white rounded-md shadow-lg dark:bg-zinc-900 ring-1 ring-black ring-opacity-5"
          // Remove inline style
          // style={{ backgroundColor: themes[currentTheme].colors.background }}
        >
          {/* Map over availableThemes defined above */}
          {Object.entries(availableThemes).map(([themeKey, themeData]) => (
            <button
              key={themeKey}
              onClick={() => {
                setTheme(themeKey); // Use setTheme from next-themes
                setIsOpen(false);
              }}
              // Apply Tailwind classes for styling - adjust as needed
              className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 
                ${
                  theme === themeKey
                    ? 'font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              // Remove inline styles
              // style={{
              //   color: theme.colors.text,
              //   backgroundColor: currentTheme === themeKey ? theme.colors.accent : 'transparent'
              // }}
            >
              {themeData.name} {/* Display theme name from our config */}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 