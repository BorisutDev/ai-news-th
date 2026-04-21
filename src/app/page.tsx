'use client';
import Link from 'next/link';
import { useState } from 'react';
import { products, categories } from '@/data/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const featured = products[0];

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">

      {/* Header */}
      <header className="border-b border-white/5 sticky top-0 z-50 bg-[#0c0c0c]/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-[#39ff14] rotate-45 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#39ff14]" />
            </div>
            <span className="font-black text-xl tracking-widest uppercase">GearZone<span className="text-[#39ff14]">.</span>TH</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/50">
            {categories.slice(1).map(c => (
              <button key={c.id} onClick={() => setActiveCategory(c.id)}
                className={`hover:text-[#39ff14] transition-colors ${activeCategory === c.id ? 'text-[#39ff14]' : ''}`}>
                {c.emoji} {c.name}
              </button>
            ))}
          </nav>
          <div className="text-xs bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/30 px-3 py-1 rounded-full font-bold">
            🎮 รีวิวโดยผู้เชี่ยวชาญ
          </div>
        </div>
      </header>

      {/* Hero — Featured Review */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-[#39ff14] text-xs font-bold tracking-widest mb-4 uppercase">⭐ รีวิวแนะนำ</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full text-white/40 text-xs mb-4 uppercase tracking-wider">
                {featured.category} · {featured.badge}
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                {featured.name}
              </h1>
              <p className="text-[#39ff14] font-bold text-lg mb-4">{featured.tagline}</p>
              <p className="text-white/50 leading-relaxed mb-6 line-clamp-3">{featured.review}</p>

              {/* Score preview */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {Object.entries(featured.scores).map(([key, val]) => (
                  <div key={key} className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
                      {key === 'performance' ? 'ประสิทธิภาพ' : key === 'build' ? 'ความทนทาน' : key === 'value' ? 'ความคุ้มค่า' : 'ความสะดวก'}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#39ff14] rounded-full" style={{ width: `${val}%` }} />
                      </div>
                      <span className="text-[#39ff14] font-black text-sm">{val}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link href={`/product/${featured.id}`}
                className="inline-flex items-center gap-2 bg-[#39ff14] text-black font-black px-8 py-4 rounded-xl hover:bg-[#39ff14]/90 transition-all hover:scale-105 tracking-wider">
                อ่านรีวิวเต็ม →
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-72 h-72 bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-3xl border border-white/5 flex items-center justify-center text-[140px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/5 to-transparent rounded-3xl" />
                {featured.emoji}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adsense */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="w-full h-20 rounded-xl border border-dashed border-white/10 flex items-center justify-center">
          <span className="text-white/20 text-sm">📢 Google Adsense</span>
        </div>
      </div>

      {/* All Reviews */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-[#39ff14]" />
            <h2 className="text-2xl font-black">รีวิวทั้งหมด</h2>
          </div>
          <span className="text-white/30 text-sm">{filtered.length} รีวิว</span>
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map(c => (
            <button key={c.id} onClick={() => setActiveCategory(c.id)}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-bold tracking-wider transition-all ${
                activeCategory === c.id
                  ? 'bg-[#39ff14] text-black'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
              }`}>
              {c.emoji} {c.name}
            </button>
          ))}
        </div>

        {/* Review cards */}
        <div className="space-y-4">
          {filtered.map((p) => (
            <Link key={p.id} href={`/product/${p.id}`}
              className="group flex flex-col md:flex-row gap-6 bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-[#39ff14]/30 transition-all">

              {/* Emoji */}
              <div className="w-full md:w-32 h-32 bg-gradient-to-br from-[#1a1a1a] to-[#0c0c0c] rounded-xl flex items-center justify-center text-6xl shrink-0 group-hover:scale-105 transition-transform">
                {p.emoji}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#39ff14] text-xs font-bold tracking-widest uppercase">{p.category}</span>
                  {p.badge && <span className="bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/20 text-xs px-2 py-0.5 rounded font-bold">{p.badge}</span>}
                </div>
                <h3 className="font-black text-xl mb-1 group-hover:text-[#39ff14] transition-colors">{p.name}</h3>
                <p className="text-[#39ff14]/70 text-sm font-medium mb-2">{p.tagline}</p>
                <p className="text-white/40 text-sm line-clamp-2 mb-4">{p.review}</p>

                {/* Pros preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.pros.slice(0, 3).map((pro, i) => (
                    <span key={i} className="flex items-center gap-1 text-xs text-white/50 bg-white/5 px-2 py-1 rounded-full">
                      <span className="text-[#39ff14]">✓</span> {pro}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(i => (
                        <span key={i} className={`text-sm ${i <= Math.floor(p.rating) ? 'text-yellow-400' : 'text-white/20'}`}>★</span>
                      ))}
                    </div>
                    <span className="text-white/40 text-xs">({p.reviews.toLocaleString()} รีวิว)</span>
                  </div>
                  <span className="text-[#39ff14] font-black text-sm group-hover:gap-3 transition-all">
                    อ่านรีวิว →
                  </span>
                </div>
              </div>

              {/* Score */}
              <div className="hidden lg:flex flex-col justify-center items-center w-24 shrink-0">
                <div className="text-4xl font-black text-[#39ff14]">{p.scores.performance}</div>
                <div className="text-white/30 text-xs text-center mt-1">คะแนน<br/>รวม</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 text-center text-white/20 text-sm">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 border-2 border-[#39ff14]/50 rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#39ff14]/50" />
          </div>
          <span className="font-black text-white/40 tracking-widest">GEARZONE.TH</span>
        </div>
        <p className="mb-3">© 2026 GearZone.TH · รีวิวอุปกรณ์เกมมิ่งโดยผู้เชี่ยวชาญ</p>
        <div className="flex items-center justify-center gap-6">
          <a href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</a>
          <a href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</a>
          <a href="/privacy" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a>
        </div>
      </footer>
    </main>
  );
}