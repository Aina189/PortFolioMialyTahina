import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alex Johnson - Full Stack Developer Portfolio',
  description: 'Passionate Full Stack Developer creating beautiful, functional web applications with modern technologies.',
  keywords: 'web developer, full stack developer, react, next.js, node.js, portfolio',
  authors: [{ name: 'Alex Johnson' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}