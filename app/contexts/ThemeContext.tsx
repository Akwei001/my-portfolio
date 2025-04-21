'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { themes, ThemeNames } from '../themes';

type ThemeContextType = {
  currentTheme: ThemeNames;
  setTheme: (theme: ThemeNames) => void;
  isLoaded: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeNames>('light');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeNames;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
    setIsLoaded(true);
  }, []);

  const setTheme = (theme: ThemeNames) => {
    setCurrentTheme(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      
      // Apply theme colors to CSS variables
      const root = document.documentElement;
      const colors = themes[theme].colors;
      
      root.style.setProperty('--background-main', colors.background);
      root.style.setProperty('--text-color', colors.text);
      root.style.setProperty('--primary-color', colors.primary);
      root.style.setProperty('--accent-color', colors.accent);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 