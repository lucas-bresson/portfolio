import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import NavigateNextButton from './ui/components/NavigateNextButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lucas Bresson',
  description: 'Portfolio | Next.js, Tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          {children}
          <NavigateNextButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
