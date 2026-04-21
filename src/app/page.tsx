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

  const allArticles = liveArticles.length > 0 ? [...liveArticles, ...staticArticles] : staticArticles;
  const featured = allArticles[0];
  const secondary = allArticles.slice(1, 4);
  const rest = allArticles.slice(4);

  if (loading) return (
    <main className="min-h-screen bg-[#050508] text-white flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center gap-3 justify-center mb-6">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-black text-lg animate-pulse">AI</div>
          </div>
          <span className="font-black text-2xl tracking-tight">AINEWSTH<span className="text-violet-400">.</span>COM</span>
        </div>
        <div className="flex items-center gap-2 justify-center text-white/30 text-sm">
          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-bounce" />
          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-bounce" style={{animationDelay:'0.1s'}} />
          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-bounce" style={{animationDelay:'0.2s'}} />
        </div>
      </div>
    </main>
  );

  return (
    <main className="min-h-screen bg-[#050508] text-white">

      {/* Header */}
      <header className="border-b border-white/5 sticky top-0 z-50 bg-[#050508]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-black text-sm">AI</div>
            <span className="font-black text-xl tracking-tight">AINEWSTH<span className="text-violet-400">.</span>COM</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/40">
            <Link href="/" className="text-white font-semibold">หน้าแรก</Link>
            <Link href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</Link>
            <Link href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</Link>
          </nav>
          <span className="hidden md:flex text-xs bg-violet-500/10 text-violet-400 border border-violet-500/20 px-3 py-1.5 rounded-full font-semibold items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
            Live News
          </span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Breaking ticker */}
        {featured && (
          <div className="flex items-center gap-4 mb-12 overflow-hidden bg-white/3 border border-white/5 rounded-full px-4 py-2">
            <span className="bg-red-500 text-white text-xs font-black px-2.5 py-1 rounded-full shrink-0 animate-pulse">BREAKING</span>
            <p className="text-sm text-white/50 truncate">{featured.title}</p>
          </div>
        )}

        {/* Hero */}
        {featured && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-16">

            {/* Main featured */}
            <Link href={`/article/${featured.slug}`}
              className="lg:col-span-3 group relative rounded-3xl overflow-hidden border border-white/5 hover:border-violet-500/30 transition-all duration-500 bg-[#0d0d12]">
              <div className="relative h-72 lg:h-96 overflow-hidden">
                {featured.image ? (
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-violet-900/30 via-blue-900/20 to-cyan-900/20 flex items-center justify-center text-[100px]">{featured.emoji}</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="bg-violet-500 text-white text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider">{featured.category}</span>
                </div>
              </div>
              <div className="p-7">
                <p className="text-white/30 text-xs mb-3 flex items-center gap-2">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime} นาที</span>
                </p>
                <h2 className="text-2xl font-black leading-tight mb-3 group-hover:text-violet-300 transition-colors">{featured.title}</h2>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{featured.excerpt}</p>
              </div>
            </Link>

            {/* Secondary stack */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {secondary.map((a, i) => (
                <Link key={a.slug} href={`/article/${a.slug}`}
                  className="group flex gap-4 p-4 rounded-2xl bg-[#0d0d12] border border-white/5 hover:border-violet-500/20 transition-all">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-gradient-to-br from-violet-900/40 to-blue-900/40">
                    {a.image ? (
                      <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-2xl">{a.emoji}</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-violet-400 text-xs font-semibold uppercase tracking-wider">{a.category}</span>
                    <h3 className="text-sm font-bold leading-tight mt-1 group-hover:text-violet-300 transition-colors line-clamp-2">{a.title}</h3>
                    <p className="text-white/30 text-xs mt-1.5">{a.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Adsense */}
        <div className="w-full h-20 rounded-2xl border border-dashed border-white/10 flex items-center justify-center mb-16 bg-white/1">
          <span className="text-white/20 text-sm">📢 Google Adsense</span>
        </div>

        {/* Latest */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-7 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
              <h2 className="text-xl font-black">ข่าวล่าสุด</h2>
            </div>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((a) => (
              <Link key={a.slug} href={`/article/${a.slug}`}
                className="group bg-[#0d0d12] border border-white/5 rounded-2xl overflow-hidden hover:border-violet-500/20 transition-all duration-300 hover:-translate-y-1">
                <div className="h-44 overflow-hidden relative bg-gradient-to-br from-violet-900/20 to-blue-900/20">
                  {a.image ? (
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl">{a.emoji}</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12]/80 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/10 backdrop-blur text-white/70 text-xs px-2.5 py-1 rounded-full font-medium">{a.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sm leading-snug mb-2 group-hover:text-violet-300 transition-colors line-clamp-2">{a.title}</h3>
                  <p className="text-white/40 text-xs line-clamp-2 mb-4 leading-relaxed">{a.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-white/25">
                    <span>{a.date}</span>
                    <span>{a.readTime} นาทีอ่าน</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Adsense bottom */}
        <div className="w-full h-20 rounded-2xl border border-dashed border-white/10 flex items-center justify-center bg-white/1">
          <span className="text-white/20 text-sm">📢 Google Adsense</span>
        </div>
      </div>

      <footer className="border-t border-white/5 mt-16 py-10 text-center text-white/20 text-sm">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500/50 to-cyan-500/50 flex items-center justify-center font-black text-xs">AI</div>
          <span className="font-black tracking-tight text-white/30">AINEWSTH.COM</span>
        </div>
        <p className="mb-4">© 2026 AiNewsTH.com · ข่าว AI และเทคโนโลยีภาษาไทย</p>
        <div className="flex items-center justify-center gap-6">
          <a href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</a>
          <a href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</a>
          <a href="/privacy" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a>
        </div>
      </footer>
    </main>
  );
}