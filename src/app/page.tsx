'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { articles as staticArticles } from '@/data/articles';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  emoji: string;
  author: string;
  image?: string;
}

export default function Home() {
  const [liveArticles, setLiveArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then(r => r.json())
      .then(data => {
        setLiveArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const allArticles = [...liveArticles, ...staticArticles];
  const featured = allArticles[0];
  const secondary = allArticles.slice(1, 4);
  const rest = allArticles.slice(4);

  if (loading) return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4 animate-pulse">🤖</div>
        <p className="text-white/50">กำลังโหลดข่าวล่าสุด...</p>
      </div>
    </main>
  );

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xs font-black text-black">AI</div>
            <span className="font-black text-xl tracking-tight">AINEWSTH<span className="text-cyan-400">.</span>COM</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <Link href="/" className="text-white font-medium">หน้าแรก</Link>
            <Link href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</Link>
            <Link href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</Link>
          </nav>
          <span className="text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full font-medium">🤖 AI-Powered</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Breaking ticker */}
        {featured && (
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <span className="bg-red-500 text-white text-xs font-black px-3 py-1 rounded shrink-0">BREAKING</span>
            <div className="text-sm text-white/60 truncate">{featured.title}</div>
          </div>
        )}

        {/* Hero grid */}
        {featured && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
            <Link href={`/article/${featured.slug}`} className="lg:col-span-2 group relative overflow-hidden rounded-2xl bg-[#111118] border border-white/10 hover:border-cyan-400/40 transition-all duration-300">
              <div className="h-72 lg:h-80 relative overflow-hidden">
                {featured.image ? (
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-cyan-900/30 flex items-center justify-center text-[120px] opacity-30">{featured.emoji}</div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-400 text-black text-xs font-black px-3 py-1 rounded-full">{featured.category}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/50 text-xs mb-2">{featured.date} · {featured.readTime} นาที</p>
                <h2 className="text-xl lg:text-2xl font-black leading-tight mb-3 group-hover:text-cyan-300 transition-colors">{featured.title}</h2>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2">{featured.excerpt}</p>
              </div>
            </Link>

            <div className="flex flex-col gap-4">
              {secondary.map((a) => (
                <Link key={a.slug} href={`/article/${a.slug}`} className="group flex gap-4 p-4 rounded-xl bg-[#111118] border border-white/8 hover:border-cyan-400/30 transition-all">
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                    {a.image ? (
                      <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-900/60 to-purple-900/60 flex items-center justify-center text-2xl">{a.emoji}</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-cyan-400 font-medium">{a.category}</span>
                    <h3 className="text-sm font-bold leading-tight mt-1 group-hover:text-cyan-300 transition-colors line-clamp-2">{a.title}</h3>
                    <p className="text-white/40 text-xs mt-1">{a.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Adsense */}
        <div className="w-full h-20 rounded-xl border border-dashed border-white/20 flex items-center justify-center mb-14">
          <span className="text-white/30 text-sm">📢 Google Adsense — Leaderboard 728×90</span>
        </div>

        {/* Latest news */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-lg font-black">ข่าวล่าสุด</h2>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a) => (
              <Link key={a.slug} href={`/article/${a.slug}`} className="group rounded-xl bg-[#111118] border border-white/8 hover:border-cyan-400/30 overflow-hidden transition-all">
                <div className="h-40 overflow-hidden relative">
                  {a.image ? (
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-purple-900/30 flex items-center justify-center text-5xl">{a.emoji}</div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/10 backdrop-blur text-white/70 text-xs px-2 py-0.5 rounded-full">{a.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm leading-tight mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">{a.title}</h3>
                  <p className="text-white/50 text-xs line-clamp-2 mb-3">{a.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-white/30">
                    <span>{a.date}</span>
                    <span>{a.readTime} นาทีอ่าน</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 mt-8 py-8 text-center text-white/30 text-sm">
        <p className="mb-3">© 2026 AiNewsTH.com · ข่าว AI และเทคโนโลยีภาษาไทย · Powered by Claude AI</p>
        <div className="flex items-center justify-center gap-6">
          <a href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</a>
          <a href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</a>
          <a href="/privacy" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a>
        </div>
      </footer>
    </main>
  );
}