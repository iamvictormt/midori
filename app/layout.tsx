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
      <head>
        {/* Ícone padrão */}
        <link rel="icon" href="/favicon.ico" />
        {/* Ícones para diferentes tamanhos de tela */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        {/* Ícones para dispositivos Android */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
