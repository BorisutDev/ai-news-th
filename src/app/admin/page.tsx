'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const generate = async () => {
    if (!topic) return;
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setError('เกิดข้อผิดพลาด ลองใหม่อีกครั้ง');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white p-8">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-cyan-400 text-sm hover:underline">← กลับหน้าแรก</a>
        <h1 className="text-3xl font-black mt-6 mb-2">🤖 Admin — Generate บทความ</h1>
        <p className="text-white/40 text-sm mb-8">ใช้ Claude AI เขียนบทความอัตโนมัติ</p>

        {/* Input */}
        <div className="flex gap-3 mb-8">
          <input
            type="text"
            value={topic}
            onChange={e => setTopic(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && generate()}
            placeholder="ใส่หัวข้อข่าว เช่น GPT-5 เปิดตัวแล้ว..."
            className="flex-1 bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400"
          />
          <button
            onClick={generate}
            disabled={loading || !topic}
            className="bg-cyan-400 text-black font-black px-6 py-3 rounded-xl hover:bg-cyan-300 transition-colors disabled:opacity-50"
          >
            {loading ? '⏳ กำลังเขียน...' : '✨ Generate'}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl mb-6">
            {error}
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{result.emoji}</span>
              <span className="bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 text-xs px-3 py-1 rounded-full">{result.category}</span>
            </div>
            <h2 className="text-xl font-black">{result.title}</h2>
            <p className="text-white/60 text-sm">{result.excerpt}</p>
            <div className="border-t border-white/10 pt-4 text-white/70 text-sm leading-relaxed whitespace-pre-wrap">
              {result.content}
            </div>

            {/* Copy JSON */}
            <div className="border-t border-white/10 pt-4">
              <p className="text-white/40 text-xs mb-2">JSON สำหรับเพิ่มใน articles.ts:</p>
              <pre className="bg-black/40 rounded-lg p-4 text-xs text-green-400 overflow-auto">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}