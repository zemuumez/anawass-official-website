import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'https://anawass.yonatansemere2.chatgpt.site'),
  title: 'ANAWASS | HIV education and smart vending access',
  description: 'Clear HIV and STI education connected to the ANAWASS smart health vending solution for private prevention access in Ethiopia.',
  icons: { icon: '/favicon.svg' },
  alternates: { languages: { en: '/', am: '/am' } },
  openGraph: {
    title: 'ANAWASS | HIV education and smart vending access',
    description: 'Clear HIV education connected to the ANAWASS smart health vending solution for private prevention access in Ethiopia.',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'ANAWASS — Clear knowledge. Dignified access.' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANAWASS | HIV education and smart vending access',
    description: 'Clear HIV education connected to the ANAWASS smart health vending solution for private prevention access in Ethiopia.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
