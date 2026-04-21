import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AiNewsTH — ข่าว AI และเทคโนโลยีภาษาไทย',
  description: 'แหล่งข่าว AI และเทคโนโลยีภาษาไทย อัปเดตทุกวัน',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3703745500383337"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}