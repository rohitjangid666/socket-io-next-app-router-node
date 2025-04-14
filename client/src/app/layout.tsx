import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import Header from '@/components/ui/Header';
import { SocketProvider } from '@/provider/socket';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Socket IO Chat',
  description: 'A simple chat application using Socket.IO',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SocketProvider>
          <Header />

          <div className='h-screen pt-20'>{children}</div>
        </SocketProvider>
      </body>
    </html>
  );
}
