'use client';
import Link from 'next/link';
import { articles } from '@/data/articles';

export default function Home() {
  const featured = articles[0];
  const secondary = articles.slice(1, 3);
  const rest = articles.slice(3);

  return (
    <main className="min-h-screen bg-mesh bg-grid noise text-white">

      {/* Header */}
      <header className="border-b border-white/5 sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-black text-sm glow-violet transition-all group-hover:scale-105">AI</div>
            <div>
              <div className="font-display font-black text-xl leading-none tracking-tight">AINEWSTH</div>
              <div className="text-[10px] text-white/30 tracking-widest mt-0.5">ข่าว AI ภาษาไทย</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/40">
            <Link href="/" className="text-white font-semibold">หน้าแรก</Link>
            <Link href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</Link>
            <Link href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</Link>
          </nav>
          <div className="flex items-center gap-2 text-xs bg-violet-500/10 text-violet-300 border border-violet-500/20 px-3 py-1.5 rounded-full font-semibold backdrop-blur">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
            อัปเดตล่าสุด
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2 text-violet-400 text-xs font-bold tracking-widest uppercase">
            <div className="w-1 h-4 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
            ข่าวเด่น
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        {/* Featured + Secondary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-5">

          {/* Featured */}
          {featured && (
            <Link href={`/article/${featured.slug}`}
              className="lg:col-span-3 group relative card-depth rounded-3xl overflow-hidden">
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-cyan-500/0 group-hover:from-violet-500/5 group-hover:to-cyan-500/5 transition-all duration-700 z-10 rounded-3xl" />

              {/* Image area */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-violet-900/40 via-blue-900/20 to-cyan-900/20">
                <div className="absolute inset-0 flex items-center justify-center text-[120px] opacity-20 select-none">{featured.emoji}</div>
                <div className="absolute inset-0 flex items-center justify-center text-[80px]">{featured.emoji}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] via-[#0f0f14]/40 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="bg-violet-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-violet-400/30">
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-20 p-7">
                <div className="flex items-center gap-3 text-white/25 text-xs mb-3">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>อ่าน {featured.readTime} นาที</span>
                  <span>·</span>
                  <span>{featured.author}</span>
                </div>
                <h2 className="font-display font-black text-2xl md:text-3xl leading-tight mb-3 group-hover:gradient-text transition-all duration-300">
                  {featured.title}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{featured.excerpt}</p>
                <div className="mt-5 flex items-center gap-2 text-violet-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                  อ่านบทความเต็ม <span>→</span>
                </div>
              </div>
            </Link>
          )}

          {/* Secondary */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {secondary.map((a) => (
              <Link key={a.slug} href={`/article/${a.slug}`}
                className="group flex-1 card-depth rounded-2xl overflow-hidden flex flex-col">
                <div className="relative h-40 bg-gradient-to-br from-violet-900/30 via-blue-900/20 to-cyan-900/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-[60px] opacity-15 select-none blur-sm">{a.emoji}</div>
                  <div className="absolute inset-0 flex items-center justify-center text-[40px]">{a.emoji}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14]/90 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/40 backdrop-blur text-white/70 text-xs px-2.5 py-1 rounded-full border border-white/10">{a.category}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-white/25 text-xs mb-2">{a.date} · {a.readTime} นาที</p>
                  <h3 className="font-display font-bold text-base leading-snug group-hover:text-violet-300 transition-colors line-clamp-2 flex-1">{a.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed line-clamp-2 mt-2">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Adsense */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="w-full h-20 rounded-2xl border border-dashed border-white/8 flex items-center justify-center bg-white/1">
          <span className="text-white/15 text-sm">📢 Google Adsense — 728×90</span>
        </div>
      </div>

      {/* Latest News */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2 text-white text-sm font-black tracking-wider uppercase">
            <div className="w-1 h-5 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
            ข่าวล่าสุด
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          <span className="text-white/20 text-xs">{rest.length} บทความ</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((a, i) => (
            <Link key={a.slug} href={`/article/${a.slug}`}
              className="group card-depth rounded-2xl overflow-hidden"
              style={{ animationDelay: `${i * 0.05}s` }}>

              {/* Emoji header */}
              <div className="relative h-48 bg-gradient-to-br from-violet-900/20 via-blue-900/15 to-[#0a0a0a] overflow-hidden">
                {/* Big blurred emoji bg */}
                <div className="absolute inset-0 flex items-center justify-center text-[100px] opacity-10 select-none blur-xl">{a.emoji}</div>
                {/* Main emoji */}
                <div className="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">{a.emoji}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] via-[#0f0f14]/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/50 backdrop-blur text-white/60 text-xs px-2.5 py-1 rounded-full border border-white/8">{a.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between text-white/25 text-xs mb-3">
                  <span>{a.date}</span>
                  <span>{a.readTime} นาทีอ่าน</span>
                </div>
                <h3 className="font-display font-bold text-base leading-snug mb-2 group-hover:text-violet-300 transition-colors duration-200 line-clamp-2">{a.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed line-clamp-3">{a.excerpt}</p>

                {/* Bottom */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-white/20 text-xs">{a.author}</span>
                  <span className="text-violet-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200">อ่านเพิ่ม →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Adsense bottom */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="w-full h-20 rounded-2xl border border-dashed border-white/8 flex items-center justify-center bg-white/1">
          <span className="text-white/15 text-sm">📢 Google Adsense</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500/60 to-cyan-500/60 flex items-center justify-center font-black text-xs">AI</div>
              <div>
                <div className="font-display font-black text-base text-white/60 tracking-tight">AINEWSTH.COM</div>
                <div className="text-white/20 text-xs">ข่าว AI และเทคโนโลยีภาษาไทย</div>
              </div>
            </div>
            <div className="flex items-center gap-8 text-white/20 text-sm">
              <Link href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</Link>
              <Link href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</Link>
            </div>
            <p className="text-white/15 text-xs">© 2026 AiNewsTH.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}