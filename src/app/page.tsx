'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { articles as staticArticles, Article } from '@/data/articles';

export default function Home() {
  const [liveArticles, setLiveArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then(r => r.json())
      .then(data => {
        setLiveArticles(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const all = liveArticles.length > 0 ? [...liveArticles, ...staticArticles] : staticArticles;
  const featured = all[0];
  const secondary = all.slice(1, 3);
  const rest = all.slice(3);

  if (loading) return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-black mx-auto animate-pulse">AI</div>
        <p className="text-white/30 text-sm">กำลังโหลดข่าวล่าสุด...</p>
      </div>
    </main>
  );

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Header */}
      <header className="border-b border-white/8 sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-black text-sm">AI</div>
            <div>
              <div className="font-black text-lg leading-none tracking-tight">AINEWSTH</div>
              <div className="text-[10px] text-white/30 tracking-widest">ข่าว AI ภาษาไทย</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/40">
            <Link href="/" className="text-white font-semibold">หน้าแรก</Link>
            <Link href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</Link>
            <Link href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</Link>
          </nav>
          <div className="flex items-center gap-2 text-xs bg-violet-500/10 text-violet-400 border border-violet-500/20 px-3 py-1.5 rounded-full font-semibold">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
            Live
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Featured + Secondary */}
        {featured && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">

            {/* Featured — ใหญ่ซ้าย */}
            <Link href={`/article/${featured.slug}`} className="lg:col-span-2 group rounded-2xl overflow-hidden bg-[#141414] border border-white/6 hover:border-violet-500/30 transition-all duration-300">
              <div className="relative h-72 overflow-hidden">
                {featured.image
                  ? <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                  : <div className="w-full h-full bg-gradient-to-br from-violet-900/30 to-blue-900/30 flex items-center justify-center text-8xl">{featured.emoji}</div>
                }
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute top-4 left-4 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{featured.category}</span>
              </div>
              <div className="p-6">
                <p className="text-white/30 text-xs mb-2">{featured.date} · {featured.readTime} นาทีอ่าน</p>
                <h2 className="text-xl font-black leading-snug mb-2 group-hover:text-violet-300 transition-colors">{featured.title}</h2>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{featured.excerpt}</p>
              </div>
            </Link>

            {/* Secondary — 2 บทความขวา */}
            <div className="flex flex-col gap-4">
              {secondary.map(a => (
                <Link key={a.slug} href={`/article/${a.slug}`} className="group flex-1 rounded-2xl overflow-hidden bg-[#141414] border border-white/6 hover:border-violet-500/20 transition-all">
                  <div className="relative h-36 overflow-hidden">
                    {a.image
                      ? <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                      : <div className="w-full h-full bg-gradient-to-br from-violet-900/30 to-blue-900/30 flex items-center justify-center text-5xl">{a.emoji}</div>
                    }
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 left-3 bg-black/50 backdrop-blur text-white/80 text-xs px-2 py-0.5 rounded-full">{a.category}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-white/25 text-xs mb-1">{a.date}</p>
                    <h3 className="text-sm font-bold leading-snug group-hover:text-violet-300 transition-colors line-clamp-2">{a.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Adsense */}
        <div className="w-full h-20 rounded-xl border border-dashed border-white/8 flex items-center justify-center mb-10">
          <span className="text-white/20 text-sm">📢 Google Adsense — 728×90</span>
        </div>

        {/* Latest news grid */}
        <div className="mb-6 flex items-center gap-3">
          <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
          <h2 className="text-lg font-black">ข่าวล่าสุด</h2>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {rest.map(a => (
            <Link key={a.slug} href={`/article/${a.slug}`} className="group bg-[#141414] border border-white/6 rounded-2xl overflow-hidden hover:border-violet-500/20 transition-all hover:-translate-y-0.5">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-violet-900/20 to-blue-900/20">
                {a.image
                  ? <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                  : <div className="w-full h-full flex items-center justify-center text-5xl">{a.emoji}</div>
                }
                <span className="absolute top-3 left-3 bg-black/50 backdrop-blur text-white/70 text-xs px-2.5 py-1 rounded-full">{a.category}</span>
              </div>
              {/* Text */}
              <div className="p-5">
                <h3 className="font-bold text-sm leading-snug mb-2 group-hover:text-violet-300 transition-colors line-clamp-2">{a.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed line-clamp-2 mb-4">{a.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-white/25">
                  <span>{a.date}</span>
                  <span>{a.readTime} นาที</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Adsense bottom */}
        <div className="w-full h-20 rounded-xl border border-dashed border-white/8 flex items-center justify-center">
          <span className="text-white/20 text-sm">📢 Google Adsense</span>
        </div>
      </div>

      <footer className="border-t border-white/5 mt-16 py-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500/40 to-cyan-500/40 flex items-center justify-center font-black text-xs">AI</div>
          <span className="font-black text-white/30 tracking-tight">AINEWSTH.COM</span>
        </div>
        <p className="text-white/20 text-sm mb-4">© 2026 AiNewsTH.com · ข่าว AI และเทคโนโลยีภาษาไทย</p>
        <div className="flex items-center justify-center gap-6 text-white/20 text-sm">
          <a href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</a>
          <a href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</a>
          <a href="/privacy" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a>
        </div>
      </footer>
    </main>
  );
}