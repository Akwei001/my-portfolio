// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeProvider } from './providers';
import ScrollProgress from './components/shared/ScrollProgress';
import ScrollToTop from './components/shared/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';

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
      {/* The ThemeProvider from next-themes will likely be applied in providers.tsx */}
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress />
          <Navbar />
          <main className="flex-grow">
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}