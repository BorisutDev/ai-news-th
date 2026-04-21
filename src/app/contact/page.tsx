import Link from 'next/link';

export default function ContactPage() {
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
        <div className="mb-12">
          <div className="flex items-center gap-2 text-violet-400 text-xs font-bold tracking-widest uppercase mb-4">
            <div className="w-4 h-px bg-violet-400" /> ติดต่อเรา
          </div>
          <h1 className="text-4xl font-black mb-4">มีคำถาม?<br/>เราพร้อมตอบ</h1>
          <p className="text-white/50 leading-relaxed">ต้องการติดต่อทีมงาน AiNewsTH ไม่ว่าจะเป็นเรื่องการนำเสนอข่าว ความร่วมมือ หรือโฆษณา ติดต่อเราได้เลยครับ</p>
        </div>

        {/* Contact cards */}
        <div className="space-y-4 mb-16">
          <div className="bg-[#141414] border border-white/6 rounded-2xl p-6 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-2xl shrink-0">📧</div>
            <div>
              <div className="text-white/40 text-xs uppercase tracking-wider mb-1">อีเมลทั่วไป</div>
              <div className="font-bold text-white">contact@ainewsth.com</div>
              <div className="text-white/30 text-sm mt-0.5">ตอบกลับภายใน 24 ชั่วโมง</div>
            </div>
          </div>

          <div className="bg-[#141414] border border-white/6 rounded-2xl p-6 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl shrink-0">📢</div>
            <div>
              <div className="text-white/40 text-xs uppercase tracking-wider mb-1">โฆษณาและพาร์ทเนอร์</div>
              <div className="font-bold text-white">ads@ainewsth.com</div>
              <div className="text-white/30 text-sm mt-0.5">สำหรับโฆษณาและความร่วมมือทางธุรกิจ</div>
            </div>
          </div>

          <div className="bg-[#141414] border border-white/6 rounded-2xl p-6 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-2xl shrink-0">🌐</div>
            <div>
              <div className="text-white/40 text-xs uppercase tracking-wider mb-1">เว็บไซต์</div>
              <div className="font-bold text-white">ainewsth.com</div>
              <div className="text-white/30 text-sm mt-0.5">ข่าว AI และเทคโนโลยีภาษาไทย</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-xl font-black mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
            คำถามที่พบบ่อย
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'ข้อมูลข่าวมาจากไหน?',
                a: 'เราติดตามแหล่งข่าวชั้นนำด้าน AI จากทั่วโลก เช่น Anthropic, OpenAI, Meta AI Blog รวมถึงสื่อเทคโนโลยีชั้นนำ และใช้ Claude AI ช่วยสรุปและแปลเป็นภาษาไทย'
              },
              {
                q: 'สามารถนำข่าวไปใช้ต่อได้ไหม?',
                a: 'สามารถอ้างอิงข้อมูลจากเว็บเราได้ โดยระบุแหล่งที่มาว่า AiNewsTH.com หากต้องการใช้เนื้อหาเชิงพาณิชย์กรุณาติดต่อทีมงานก่อนครับ'
              },
              {
                q: 'ต้องการลงโฆษณาทำยังไง?',
                a: 'ติดต่อเราทาง ads@ainewsth.com พร้อมระบุประเภทโฆษณาและช่วงเวลาที่ต้องการ ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง'
              },
            ].map((faq, i) => (
              <div key={i} className="bg-[#141414] border border-white/6 rounded-2xl p-6">
                <h3 className="font-bold mb-2 text-violet-300">{faq.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-white/5 py-10 text-center">
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