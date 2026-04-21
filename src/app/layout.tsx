import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'AiNewsTH — ข่าว AI และเทคโนโลยีภาษาไทย',
  description: 'แหล่งข่าว AI และเทคโนโลยีภาษาไทย อัปเดตทุกวัน',
  icons: {
    icon: '/favicon.svg',
  },
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
      <body style={{
  minHeight: '100vh',
  background: '#08080f',
  backgroundImage: `
    radial-gradient(at 20% 10%, rgba(139,92,246,0.18) 0px, transparent 50%),
    radial-gradient(at 80% 5%, rgba(6,182,212,0.12) 0px, transparent 50%),
    radial-gradient(at 50% 80%, rgba(139,92,246,0.08) 0px, transparent 50%),
    linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
  `,
  backgroundSize: 'auto, auto, auto, 64px 64px, 64px 64px',
  backgroundAttachment: 'fixed',
  color: 'white',
  fontFamily: "'Noto Sans Thai', sans-serif"
}}>
  {children}
</body>
    </html>
  );
}

