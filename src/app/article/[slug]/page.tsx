'use client';
import Link from 'next/link';
import { articles } from '@/data/articles';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const staticArticle = articles.find(a => a.slug === slug);
    if (staticArticle) {
      setArticle(staticArticle);
      setLoading(false);
      return;
    }
    fetch('/api/news')
      .then(r => r.json())
      .then(data => {
        const found = Array.isArray(data) ? data.find((a: any) => a.slug === slug) : null;
        setArticle(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return (
    <main className="min-h-screen bg-[#050508] text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-black mx-auto mb-4 animate-pulse">AI</div>
        <p className="text-white/30 text-sm">กำลังโหลด...</p>
      </div>
    </main>
  );

  if (!article) return (
    <main className="min-h-screen bg-[#050508] text-white flex flex-col items-center justify-center gap-4">
      <p className="text-xl font-bold">ไม่พบบทความ</p>
      <Link href="/" className="text-violet-400 hover:underline text-sm">← กลับหน้าแรก</Link>
    </main>
  );

  const related = articles.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <main className="min-h-screen text-white">

      {/* Header */}
      <header className="border-b border-white/5 sticky top-0 z-50 bg-[#050508]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-black text-sm">AI</div>
            <span className="font-black text-xl tracking-tight">AINEWSTH<span className="text-violet-400">.</span>COM</span>
          </Link>
          <Link href="/" className="text-white/30 text-sm hover:text-white transition-colors">← กลับหน้าแรก</Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-white/25 mb-8">
          <Link href="/" className="hover:text-white transition-colors">หน้าแรก</Link>
          <span>/</span>
          <span className="text-violet-400 uppercase tracking-wider font-semibold">{article.category}</span>
        </div>

        {/* Category + Title */}
        <div className="mb-8">
          <span className="inline-flex bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mt-4 mb-5">{article.title}</h1>
          <div className="flex items-center gap-4 text-white/30 text-xs border-b border-white/5 pb-6">
            <span>✍️ {article.author}</span>
            <span>·</span>
            <span>📅 {article.date}</span>
            <span>·</span>
            <span>⏱️ {article.readTime} นาที</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-10 border border-white/5 bg-gradient-to-br from-violet-900/20 to-blue-900/20">
          {article.image ? (
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-8xl">{article.emoji}</div>
          )}
        </div>

        {/* Adsense top */}
        <div className="w-full h-20 rounded-2xl border border-dashed border-white/10 flex items-center justify-center mb-10">
          <span className="text-white/20 text-sm">📢 Google Adsense</span>
        </div>

        {/* Content */}
        <article className="mb-12">
          <p className="text-lg text-white/70 font-medium leading-relaxed mb-6 border-l-2 border-violet-500 pl-4">{article.excerpt}</p>
          <div className="text-white/60 leading-loose text-base whitespace-pre-wrap">{article.content}</div>
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {['AI', 'เทคโนโลยี', article.category, '2026'].map(tag => (
            <span key={tag} className="bg-white/5 border border-white/8 text-white/40 text-xs px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>

        {/* Adsense bottom */}
        <div className="w-full h-20 rounded-2xl border border-dashed border-white/10 flex items-center justify-center mb-12">
          <span className="text-white/20 text-sm">📢 Google Adsense</span>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
              <h2 className="text-xl font-black">บทความที่เกี่ยวข้อง</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map(a => (
                <Link key={a.slug} href={`/article/${a.slug}`}
                  className="group bg-[#0d0d12] border border-white/5 rounded-2xl p-5 hover:border-violet-500/20 transition-all hover:-translate-y-1">
                  <div className="text-3xl mb-3">{a.emoji}</div>
                  <span className="text-violet-400 text-xs font-semibold uppercase tracking-wider">{a.category}</span>
                  <h3 className="font-bold text-sm leading-snug mt-1 group-hover:text-violet-300 transition-colors line-clamp-2">{a.title}</h3>
                  <p className="text-white/30 text-xs mt-2">{a.date}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
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