'use client';
import Link from 'next/link';
import { articles } from '@/data/articles';
import { useParams } from 'next/navigation';

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const article = articles.find(a => a.slug === slug);

  if (!article) return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center justify-center gap-4">
      <p className="text-xl">ไม่พบบทความ</p>
      <Link href="/" className="text-cyan-400 hover:underline">← กลับหน้าแรก</Link>
    </div>
  );

  const related = articles.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="border-b border-white/10 sticky top-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xs font-black text-black">AI</div>
            <span className="font-black text-xl tracking-tight">THAIAITECH<span className="text-cyan-400">.</span>NEWS</span>
          </Link>
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">← กลับหน้าแรก</Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
          <Link href="/" className="hover:text-white transition-colors">หน้าแรก</Link>
          <span>/</span>
          <span className="text-cyan-400">{article.category}</span>
        </div>

        <span className="bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 text-xs font-bold px-3 py-1 rounded-full">{article.category}</span>
        <h1 className="text-2xl md:text-3xl font-black leading-tight mt-4 mb-4">{article.title}</h1>
        <div className="flex items-center gap-4 text-white/40 text-sm mb-8">
          <span>✍️ {article.author}</span>
          <span>📅 {article.date}</span>
          <span>⏱️ {article.readTime} นาที</span>
        </div>

        <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-cyan-900/30 flex items-center justify-center text-8xl mb-8 border border-white/10">
          {article.emoji}
        </div>

        <div className="w-full h-20 rounded-xl border border-dashed border-white/20 flex items-center justify-center mb-8">
          <span className="text-white/30 text-sm">📢 Google Adsense</span>
        </div>

        <div className="text-white/70 leading-relaxed text-base mb-10 whitespace-pre-wrap">
          <p className="text-lg text-white/80 mb-6 font-medium">{article.excerpt}</p>
          {article.content}
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {['AI', 'เทคโนโลยี', article.category].map(tag => (
            <span key={tag} className="bg-white/5 border border-white/10 text-white/50 text-xs px-3 py-1 rounded-full">#{tag}</span>
          ))}
        </div>

        <div className="w-full h-20 rounded-xl border border-dashed border-white/20 flex items-center justify-center mb-12">
          <span className="text-white/30 text-sm">📢 Google Adsense</span>
        </div>

        <div>
          <h2 className="text-xl font-black mb-6">บทความที่เกี่ยวข้อง</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map(a => (
              <Link key={a.slug} href={`/article/${a.slug}`} className="group rounded-xl bg-[#111118] border border-white/8 hover:border-cyan-400/30 p-4 transition-all">
                <div className="text-3xl mb-3">{a.emoji}</div>
                <h3 className="font-bold text-sm leading-tight group-hover:text-cyan-300 transition-colors line-clamp-2">{a.title}</h3>
                <p className="text-white/40 text-xs mt-2">{a.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 mt-16 py-8 text-center text-white/30 text-sm">
        <p>© 2025 ThaiAITech.News · ข่าว AI และเทคโนโลยีภาษาไทย · Powered by Claude AI</p>
      </footer>
    </main>
  );
}