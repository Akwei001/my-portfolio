// app/layout.tsx
import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
// import { Providers } from './providers';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Akwei Acquaye | Front-End Developer',
  description: 'Portfolio showcasing my work as a front-end developer specializing in React, Next.js and modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-zinc-950 text-zinc-200`}>
        {/* <Providers>
          {children}
        </Providers> */}
      </body>
    </html>
  );
}