'use client';
import Link from 'next/link';
import { products } from '@/data/products';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string;
  const product = products.find(p => p.id === id);
  const related = products.filter(p => p.id !== id).slice(0, 3);

  if (!product) return (
    <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col items-center justify-center gap-4">
      <p className="text-xl">ไม่พบบทความ</p>
      <Link href="/" className="text-[#39ff14] hover:underline">← กลับหน้าแรก</Link>
    </div>
  );

  const overallScore = Math.round(
    Object.values(product.scores).reduce((a, b) => a + b, 0) / Object.values(product.scores).length
  );

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
          <Link href="/" className="text-white/40 text-sm hover:text-white transition-colors">← กลับหน้าแรก</Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/30 mb-8">
          <Link href="/" className="hover:text-white transition-colors">หน้าแรก</Link>
          <span>/</span>
          <span className="text-[#39ff14] uppercase tracking-wider">{product.category}</span>
          <span>/</span>
          <span className="text-white/50 truncate">{product.name}</span>
        </div>

        {/* Article header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/20 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">{product.category}</span>
            {product.badge && <span className="bg-white/5 text-white/50 text-xs px-3 py-1 rounded-full">{product.badge}</span>}
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">{product.name}</h1>
          <p className="text-[#39ff14] text-xl font-bold mb-6">{product.tagline}</p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-white/30 text-sm border-b border-white/5 pb-6">
            <span>✍️ ทีมงาน GearZone.TH</span>
            <span>·</span>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <span key={i} className={i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-white/20'}>★</span>
              ))}
              <span className="ml-1 text-yellow-400">{product.rating}</span>
            </div>
            <span>·</span>
            <span>{product.reviews.toLocaleString()} รีวิว</span>
          </div>
        </div>

        {/* Hero image + Score */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-2xl border border-white/5 flex items-center justify-center text-[120px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/5 to-transparent" />
            {product.emoji}
          </div>

          {/* Overall score */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center">
            <div className="text-white/40 text-xs uppercase tracking-widest mb-2">คะแนนรวม</div>
            <div className="text-7xl font-black text-[#39ff14] mb-2">{overallScore}</div>
            <div className="text-white/30 text-xs mb-6">จาก 100</div>
            <div className="w-full space-y-3">
              {Object.entries(product.scores).map(([key, val]) => (
                <div key={key}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-white/40">
                      {key === 'performance' ? 'ประสิทธิภาพ' : key === 'build' ? 'ความทนทาน' : key === 'value' ? 'ความคุ้มค่า' : 'ความสะดวก'}
                    </span>
                    <span className="text-[#39ff14] font-bold">{val}</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#39ff14] rounded-full transition-all" style={{ width: `${val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Adsense top */}
        <div className="w-full h-20 rounded-xl border border-dashed border-white/10 flex items-center justify-center mb-12">
          <span className="text-white/20 text-sm">📢 Google Adsense</span>
        </div>

        {/* Review content */}
        <article className="mb-12">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-[#39ff14]" />
            รีวิวละเอียด
          </h2>
          <div className="text-white/70 leading-relaxed text-base space-y-4 whitespace-pre-line">
            {product.review}
          </div>
        </article>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-[#39ff14]/5 border border-[#39ff14]/20 rounded-2xl p-6">
            <h3 className="font-black text-lg mb-4 text-[#39ff14]">✅ ข้อดี</h3>
            <div className="space-y-3">
              {product.pros.map((pro, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#39ff14] mt-0.5 shrink-0">✓</span>
                  <span className="text-white/70 text-sm">{pro}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
            <h3 className="font-black text-lg mb-4 text-red-400">❌ ข้อเสีย</h3>
            <div className="space-y-3">
              {product.cons.map((con, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                  <span className="text-white/70 text-sm">{con}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Best for */}
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-12">
          <h3 className="font-black text-lg mb-4">🎯 เหมาะสำหรับใคร?</h3>
          <div className="flex flex-wrap gap-3">
            {product.bestFor.map((b, i) => (
              <span key={i} className="bg-white/5 text-white/60 text-sm px-4 py-2 rounded-full border border-white/10">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-12">
          <h3 className="font-black text-lg mb-4">⚙️ สเปคหลัก</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 bg-[#39ff14] rounded-full shrink-0" />
                <span className="text-white/60">{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Verdict */}
        <div className="bg-gradient-to-br from-[#39ff14]/10 to-transparent border border-[#39ff14]/20 rounded-2xl p-8 mb-12">
          <h3 className="font-black text-xl mb-4 text-[#39ff14]">🏆 สรุปรีวิว</h3>
          <p className="text-white/80 leading-relaxed text-base">{product.verdict}</p>
        </div>

        {/* Adsense middle */}
        <div className="w-full h-20 rounded-xl border border-dashed border-white/10 flex items-center justify-center mb-12">
          <span className="text-white/20 text-sm">📢 Google Adsense</span>
        </div>

        {/* Buy button */}
        <div className="bg-[#111] border border-white/5 rounded-2xl p-8 mb-12 text-center">
          <div className="text-white/40 text-sm mb-2">ราคาอ้างอิง</div>
          <div className="text-5xl font-black text-white mb-1">฿{product.price.toLocaleString()}</div>
          {product.originalPrice && (
            <div className="text-white/30 line-through mb-6">฿{product.originalPrice.toLocaleString()}</div>
          )}
          <a href={product.shopeeUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#ee4d2d] hover:bg-[#ee4d2d]/90 text-white font-black py-4 px-12 rounded-xl transition-all hover:scale-105 text-lg w-full max-w-sm">
            🛒 ดูราคาและซื้อที่ Shopee
          </a>
          <p className="text-white/20 text-xs mt-4">* ราคาอาจเปลี่ยนแปลงตามโปรโมชั่น กดเพื่อดูราคาปัจจุบัน</p>
        </div>

        {/* Related reviews */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-8 bg-[#39ff14]" />
            <h2 className="text-xl font-black">รีวิวที่น่าสนใจอื่นๆ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map(p => (
              <Link key={p.id} href={`/product/${p.id}`}
                className="group bg-[#111] border border-white/5 rounded-xl p-5 hover:border-[#39ff14]/30 transition-all">
                <div className="text-4xl mb-3">{p.emoji}</div>
                <div className="text-[#39ff14] text-xs font-bold uppercase tracking-wider mb-1">{p.category}</div>
                <h3 className="font-bold text-sm leading-tight group-hover:text-[#39ff14] transition-colors mb-2 line-clamp-2">{p.name}</h3>
                <p className="text-white/40 text-xs line-clamp-2 mb-3">{p.tagline}</p>
                <span className="text-[#39ff14] text-xs font-bold">อ่านรีวิว →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-white/5 mt-16 py-8 text-center text-white/20 text-sm">
        <p>© 2026 GearZone.TH · รีวิวอุปกรณ์เกมมิ่งโดยผู้เชี่ยวชาญ</p>
      </footer>
    </main>
  );
}