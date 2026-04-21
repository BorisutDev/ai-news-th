'use client';
import Link from 'next/link';
import { products } from '@/data/products';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string;
  const product = products.find(p => p.id === id);
  const related = products.filter(p => p.id !== id && p.category === product?.category).slice(0, 3);

  if (!product) return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center gap-4">
      <p className="text-xl">ไม่พบสินค้า</p>
      <Link href="/" className="text-[#39ff14] hover:underline">← กลับหน้าแรก</Link>
    </div>
  );

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

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
          <Link href="/" className="text-white/40 text-sm hover:text-white transition-colors">← กลับหน้าแรก</Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/30 mb-8">
          <Link href="/" className="hover:text-white transition-colors">หน้าแรก</Link>
          <span>/</span>
          <span className="text-[#39ff14] uppercase tracking-wider">{product.category}</span>
          <span>/</span>
          <span className="text-white/60 truncate">{product.name}</span>
        </div>

        {/* Product main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-2xl border border-white/5 flex items-center justify-center text-[180px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/5 to-transparent" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#39ff14]/5 rounded-full blur-3xl" />
              {product.emoji}
              {product.badge && (
                <div className="absolute top-6 left-6 bg-[#39ff14] text-black text-sm font-black px-3 py-1 rounded tracking-wider">
                  {product.badge}
                </div>
              )}
              {discount > 0 && (
                <div className="absolute top-6 right-6 bg-red-500 text-white text-sm font-black px-3 py-1 rounded">
                  -{discount}%
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="text-[#39ff14] text-xs font-bold tracking-widest uppercase mb-3">{product.category}</div>
            <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className={i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-white/20'}>★</span>
                ))}
              </div>
              <span className="text-yellow-400 font-bold">{product.rating}</span>
              <span className="text-white/30 text-sm">({product.reviews.toLocaleString()} รีวิว)</span>
            </div>

            <p className="text-white/60 leading-relaxed mb-8">{product.description}</p>

            {/* Price */}
            <div className="flex items-end gap-4 mb-8">
              <div className="text-[#39ff14] font-black text-5xl">฿{product.price.toLocaleString()}</div>
              {product.originalPrice && (
                <div className="text-white/30 text-xl line-through mb-1">฿{product.originalPrice.toLocaleString()}</div>
              )}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <a href={product.shopeeUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#ee4d2d] hover:bg-[#ee4d2d]/90 text-white font-black py-4 px-8 rounded-xl transition-all hover:scale-105 text-lg tracking-wide">
                🛒 ซื้อเลยที่ Shopee
              </a>
              <p className="text-white/20 text-xs text-center">* ราคาอาจเปลี่ยนแปลงตามช่วงเวลา กดลิงก์เพื่อดูราคาปัจจุบัน</p>
            </div>
          </div>
        </div>

        {/* Adsense */}
        <div className="w-full h-20 rounded-xl border border-dashed border-white/10 flex items-center justify-center mb-16">
          <span className="text-white/20 text-sm">📢 Google Adsense</span>
        </div>

        {/* Specs & Pros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
            <h2 className="font-black text-lg mb-4 flex items-center gap-2">
              <span className="text-[#39ff14]">⚙️</span> สเปคหลัก
            </h2>
            <div className="space-y-3">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#39ff14] rounded-full shrink-0" />
                  <span className="text-white/70 text-sm">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
            <h2 className="font-black text-lg mb-4 flex items-center gap-2">
              <span className="text-[#39ff14]">✅</span> จุดเด่น
            </h2>
            <div className="space-y-3">
              {product.pros.map((pro, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-[#39ff14] text-lg">✓</div>
                  <span className="text-white/70 text-sm">{pro}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-8 bg-[#39ff14]" />
              <h2 className="text-xl font-black">สินค้าที่คล้ายกัน</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map(p => (
                <Link key={p.id} href={`/product/${p.id}`}
                  className="group bg-[#111] border border-white/5 rounded-xl p-4 hover:border-[#39ff14]/40 transition-all">
                  <div className="text-4xl mb-3">{p.emoji}</div>
                  <h3 className="font-bold text-sm leading-tight group-hover:text-[#39ff14] transition-colors mb-2">{p.name}</h3>
                  <div className="text-[#39ff14] font-black">฿{p.price.toLocaleString()}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <footer className="border-t border-white/5 mt-16 py-8 text-center text-white/20 text-sm">
        <p>© 2026 GearZone.TH · แนะนำอุปกรณ์เกมมิ่งที่ดีที่สุด</p>
      </footer>
    </main>
  );
}