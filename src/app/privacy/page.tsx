import Link from 'next/link';

export default function PrivacyPage() {
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
            <div className="w-4 h-px bg-violet-400" /> นโยบายความเป็นส่วนตัว
          </div>
          <h1 className="text-4xl font-black mb-4">Privacy Policy</h1>
          <p className="text-white/30 text-sm">อัปเดตล่าสุด: เมษายน 2026</p>
        </div>

        <div className="space-y-4">
          {[
            {
              icon: '📊',
              title: '1. ข้อมูลที่เราเก็บรวบรวม',
              content: 'เราเก็บข้อมูลการใช้งานเว็บไซต์ผ่าน Google Analytics และ Google AdSense เพื่อปรับปรุงประสบการณ์การใช้งานและแสดงโฆษณาที่เกี่ยวข้อง ข้อมูลที่เก็บได้แก่ IP address, ประเภทเบราว์เซอร์, หน้าที่เข้าชม และระยะเวลาที่ใช้บนเว็บไซต์ เราไม่เก็บข้อมูลส่วนตัวเช่น ชื่อ อีเมล หรือข้อมูลการชำระเงินใดๆ'
            },
            {
              icon: '🍪',
              title: '2. การใช้คุกกี้',
              content: 'เว็บไซต์นี้ใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งาน Google AdSense และ Google Analytics อาจใช้คุกกี้เพื่อแสดงโฆษณาตามความสนใจของคุณ คุณสามารถปิดการใช้งานคุกกี้ได้ในการตั้งค่าเบราว์เซอร์ อย่างไรก็ตาม การปิดคุกกี้อาจทำให้บางฟีเจอร์ของเว็บไม่ทำงานอย่างสมบูรณ์'
            },
            {
              icon: '📢',
              title: '3. Google AdSense และโฆษณา',
              content: 'เราใช้ Google AdSense เพื่อแสดงโฆษณาบนเว็บไซต์ Google อาจใช้คุกกี้เพื่อแสดงโฆษณาตามการเข้าชมเว็บไซต์ของคุณ คุณสามารถเลือกไม่รับโฆษณาส่วนบุคคลได้ที่ Google Ads Settings รายได้จากโฆษณาช่วยให้เราสามารถดำเนินงานและพัฒนาเนื้อหาต่อไปได้'
            },
            {
              icon: '🤖',
              title: '4. การใช้ AI ในการผลิตเนื้อหา',
              content: 'เราใช้ Claude AI ของ Anthropic เป็นเครื่องมือช่วยในการเขียนและสรุปข่าว เนื้อหาทั้งหมดผ่านการตรวจสอบโดยทีมงานก่อนเผยแพร่ การใช้ AI เป็นเพียงเครื่องมือช่วย ไม่ใช่แหล่งข้อมูลหลัก'
            },
            {
              icon: '🔒',
              title: '5. การแชร์ข้อมูล',
              content: 'เราไม่ขายหรือแชร์ข้อมูลส่วนตัวของคุณกับบุคคลที่สาม ยกเว้นในกรณีที่จำเป็นตามกฎหมาย หรือเพื่อให้บริการของเว็บไซต์ เช่น การส่งข้อมูลให้ Google Analytics และ Google AdSense ซึ่งมีนโยบายความเป็นส่วนตัวของตัวเอง'
            },
            {
              icon: '✉️',
              title: '6. ติดต่อเรา',
              content: 'หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว กรุณาติดต่อเราที่ contact@ainewsth.com ทีมงานจะตอบกลับภายใน 24 ชั่วโมงในวันทำการ'
            },
          ].map((section, i) => (
            <div key={i} className="bg-[#141414] border border-white/6 rounded-2xl p-6">
              <h2 className="font-black text-lg mb-3 flex items-center gap-3">
                <span className="text-2xl">{section.icon}</span>
                {section.title}
              </h2>
              <p className="text-white/50 leading-relaxed text-sm">{section.content}</p>
            </div>
          ))}
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