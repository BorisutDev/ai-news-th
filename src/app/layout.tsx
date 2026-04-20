import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ThaiAITech.News — ข่าว AI และเทคโนโลยีภาษาไทย',
  description: 'แหล่งข่าว AI และเทคโนโลยีภาษาไทย อัปเดตทุกวัน',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}