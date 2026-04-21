'use client';
import Link from 'next/link';
import { useState } from 'react';
import { products, categories } from '@/data/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const featured = products.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Header */}
      <header className="border-b border-white/5 sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-xl">
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
                {c.name}
              </button>
            ))}
          </nav>
          <div className="text-xs bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/30 px-3 py-1 rounded-full font-bold tracking-wider">
            🎮 GAMING GEAR
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/5 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#39ff14]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#39ff14]/10 border border-[#39ff14]/20 px-4 py-2 rounded-full text-[#39ff14] text-xs font-bold tracking-widest mb-6">
              ⚡ BEST GAMING GEAR 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
              อุปกรณ์เกม<br/>
              <span className="text-[#39ff14]">ระดับโปร</span><br/>
              ราคาคุ้มค่า
            </h1>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              รีวิวและแนะนำอุปกรณ์เกมมิ่งที่ดีที่สุด คัดมาแล้วโดยทีมงานผู้เชี่ยวชาญ พร้อมลิงก์ซื้อราคาดีที่สุดจาก Shopee
            </p>
            <div className="flex items-center gap-4">
              <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#39ff14] text-black font-black px-8 py-4 rounded-lg hover:bg-[#39ff14]/90 transition-all hover:scale-105 tracking-wider">
                ดูสินค้าทั้งหมด →
              </button>
              <div className="text-white/40 text-sm">
                <span className="text-white font-bold">{products.length}+</span> สินค้าแนะนำ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-8 bg-[#39ff14]" />
          <h2 className="text-2xl font-black tracking-tight">⭐ แนะนำพิเศษ</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {featured.map((p) => (
            <Link key={p.id} href={`/product/${p.id}`}
              className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#39ff14]/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/0 group-hover:from-[#39ff14]/5 transition-all duration-500" />
              {p.badge && (
                <div className="absolute top-4 left-4 z-10 bg-[#39ff14] text-black text-xs font-black px-2 py-1 rounded tracking-wider">
                  {p.badge}
                </div>
              )}
              <div className="h-48 bg-gradient-to-br from-[#1a1a1a] to-[#111] flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                {p.emoji}
              </div>
              <div className="p-5">
                <div className="text-[#39ff14] text-xs font-bold tracking-widest mb-1 uppercase">{p.category}</div>
                <h3 className="font-black text-lg leading-tight mb-2 group-hover:text-[#39ff14] transition-colors">{p.name}</h3>
                <p className="text-white/40 text-sm line-clamp-2 mb-4">{p.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#39ff14] font-black text-xl">฿{p.price.toLocaleString()}</div>
                    {p.originalPrice && <div className="text-white/30 text-xs line-through">฿{p.originalPrice.toLocaleString()}</div>}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    ⭐ {p.rating}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Adsense */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="w-full h-20 rounded-xl border border-dashed border-white/10 flex items-center justify-center bg-white/2">
          <span className="text-white/20 text-sm">📢 Google Adsense — Leaderboard</span>
        </div>
      </div>

      {/* All Products */}
      <section id="products" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-8 bg-[#39ff14]" />
          <h2 className="text-2xl font-black tracking-tight">🎮 สินค้าทั้งหมด</h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <Link key={p.id} href={`/product/${p.id}`}
              className="group bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#39ff14]/40 transition-all duration-300">
              <div className="h-40 bg-gradient-to-br from-[#1a1a1a] to-[#111] flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300 relative">
                {p.emoji}
                {p.badge && (
                  <div className="absolute top-3 right-3 bg-[#39ff14] text-black text-xs font-black px-2 py-0.5 rounded tracking-wider">
                    {p.badge}
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#39ff14] text-xs font-bold tracking-widest uppercase">{p.category}</span>
                  <span className="text-yellow-400 text-xs">⭐ {p.rating} ({p.reviews.toLocaleString()})</span>
                </div>
                <h3 className="font-black text-base leading-tight mb-2 group-hover:text-[#39ff14] transition-colors line-clamp-1">{p.name}</h3>
                <p className="text-white/40 text-xs line-clamp-2 mb-4">{p.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#39ff14] font-black text-lg">฿{p.price.toLocaleString()}</div>
                    {p.originalPrice && (
                      <div className="text-white/30 text-xs line-through">฿{p.originalPrice.toLocaleString()}</div>
                    )}
                  </div>
                  <div className="bg-[#39ff14]/10 border border-[#39ff14]/30 text-[#39ff14] text-xs font-bold px-3 py-1 rounded-lg">
                    ดูเพิ่มเติม →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center text-white/20 text-sm">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 border-2 border-[#39ff14]/50 rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#39ff14]/50" />
          </div>
          <span className="font-black text-white/40 tracking-widest">GEARZONE.TH</span>
        </div>
        <p className="mb-3">© 2026 GearZone.TH · แนะนำอุปกรณ์เกมมิ่งที่ดีที่สุด</p>
        <div className="flex items-center justify-center gap-6">
          <a href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</a>
          <a href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</a>
          <a href="/privacy" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a>
        </div>
      </footer>
    </main>
  );
}