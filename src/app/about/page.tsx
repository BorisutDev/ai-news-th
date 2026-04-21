import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-white/5 sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-black text-sm">AI</div>
            <div>
              <div className="font-black text-lg leading-none tracking-tight">AINEWSTH</div>
              <div className="text-[10px] text-white/30 tracking-widest">ข่าว AI ภาษาไทย</div>
            </div>
          </Link>
          <Link href="/" className="text-white/30 text-sm hover:text-white transition-colors">← กลับหน้าแรก</Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-violet-400 text-xs font-bold tracking-widest uppercase mb-4">
            <div className="w-4 h-px bg-violet-400" /> เกี่ยวกับเรา
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            แหล่งข่าว AI<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">ภาษาไทย</span><br/>
            ที่คุณไว้ใจได้
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            AiNewsTH.com คือแหล่งรวมข่าวสาร บทวิเคราะห์ และความรู้ด้าน AI และเทคโนโลยีภาษาไทย อัปเดตทุกวัน โดยทีมงานที่ติดตามวงการ AI อย่างใกล้ชิด
          </p>
        </div>

        {/* Mission */}
        <div className="bg-[#141414] border border-white/6 rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xl">🎯</div>
            <h2 className="text-xl font-black">พันธกิจของเรา</h2>
          </div>
          <p className="text-white/60 leading-relaxed">
            เราเชื่อว่าคนไทยทุกคนควรมีโอกาสเข้าถึงข้อมูลด้าน AI ที่ถูกต้อง ทันสมัย และเข้าใจง่ายในภาษาของตัวเอง โดยไม่ต้องพึ่งพาการอ่านภาษาอังกฤษเพียงอย่างเดียว
          </p>
        </div>

        <div className="bg-[#141414] border border-white/6 rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-xl">🤖</div>
            <h2 className="text-xl font-black">AI-Powered Content</h2>
          </div>
          <p className="text-white/60 leading-relaxed">
            เราใช้ Claude AI ของ Anthropic เป็นเครื่องมือช่วยในการรวบรวม สรุป และเขียนข่าวภาษาไทยให้อ่านง่ายและเข้าใจได้ โดยทีมงานมนุษย์เป็นผู้ตรวจสอบความถูกต้องทุกชิ้น
          </p>
        </div>

        <div className="bg-[#141414] border border-white/6 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xl">📰</div>
            <h2 className="text-xl font-black">เนื้อหาที่เราครอบคลุม</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['Large Language Models', 'AI Startups & Funding', 'Open Source AI', 'AI Policy & Ethics', 'Machine Learning', 'AI Tools & Products'].map(topic => (
              <div key={topic} className="flex items-center gap-2 text-white/50 text-sm">
                <div className="w-1.5 h-1.5 bg-violet-400 rounded-full shrink-0" />
                {topic}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            { number: '7+', label: 'บทความ' },
            { number: '2026', label: 'ก่อตั้ง' },
            { number: '100%', label: 'ภาษาไทย' },
          ].map(stat => (
            <div key={stat.label} className="bg-[#141414] border border-white/6 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-1">{stat.number}</div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-xl transition-all">
            ติดต่อเรา →
          </Link>
        </div>
      </div>

      <footer className="border-t border-white/5 mt-16 py-10 text-center">
        <p className="text-white/20 text-sm mb-4">© 2026 AiNewsTH.com · ข่าว AI และเทคโนโลยีภาษาไทย</p>
        <div className="flex items-center justify-center gap-6 text-white/20 text-sm">
          <Link href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</Link>
          <Link href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</Link>
        </div>
      </footer>
    </main>
  );
}