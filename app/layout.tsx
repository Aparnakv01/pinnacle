import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Pinnacle – Enterprise Solutions',
  description: 'Premium services for modern enterprises',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">
        {children}
      </body>
    </html>
  );
}
