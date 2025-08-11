import type React from 'react';
import type { Metadata } from 'next';
import { Encode_Sans_Condensed as Noto_Sans_Condensed, Anton } from 'next/font/google';
import './globals.css';

const notoSansCondensed = Noto_Sans_Condensed({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
  variable: '--font-noto-condensed',
});

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-anton',
});

export const metadata: Metadata = {
  title: 'Midori coLAB',
  description: 'Midori coLAB - Seus serviços especializados',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${notoSansCondensed.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
