// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollProgress from './components/shared/ScrollProgress';
import ScrollToTop from './components/shared/ScrollToTop';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akwei - Portfolio',
  description: 'Personal portfolio website showcasing projects and blog posts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main>
            {children}
            <ScrollToTop />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}