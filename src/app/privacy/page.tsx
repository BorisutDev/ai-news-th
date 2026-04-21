import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="border-b border-white/10 sticky top-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xs font-black text-black">AI</div>
            <span className="font-black text-xl tracking-tight">AINEWSTH<span className="text-cyan-400">.</span>COM</span>
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-black mb-2">นโยบายความเป็นส่วนตัว</h1>
        <p className="text-white/40 text-sm mb-8">อัปเดตล่าสุด: เมษายน 2025</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. ข้อมูลที่เราเก็บรวบรวม</h2>
            <p>เราเก็บรวบรวมข้อมูลที่คุณให้โดยตรง เช่น เมื่อคุณติดต่อเรา และข้อมูลการใช้งานเว็บไซต์โดยอัตโนมัติ เช่น IP address, ประเภทเบราว์เซอร์ และหน้าที่เข้าชม</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. การใช้ข้อมูล</h2>
            <p>เราใช้ข้อมูลที่รวบรวมเพื่อปรับปรุงเว็บไซต์ วิเคราะห์การใช้งาน และแสดงโฆษณาที่เกี่ยวข้องผ่าน Google AdSense</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Google AdSense และคุกกี้</h2>
            <p>เว็บไซต์นี้ใช้ Google AdSense ในการแสดงโฆษณา Google อาจใช้คุกกี้เพื่อแสดงโฆษณาตามความสนใจของคุณ คุณสามารถปิดการใช้งานคุกกี้ได้ในการตั้งค่าเบราว์เซอร์</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. การแชร์ข้อมูล</h2>
            <p>เราไม่ขายหรือแชร์ข้อมูลส่วนตัวของคุณกับบุคคลภายนอก ยกเว้นในกรณีที่กฎหมายกำหนด</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. ความปลอดภัย</h2>
            <p>เราใช้มาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลของคุณ อย่างไรก็ตาม ไม่มีการส่งข้อมูลทางอินเทอร์เน็ตใดที่ปลอดภัย 100%</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. ติดต่อเรา</h2>
            <p>หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว กรุณาติดต่อเราที่ <span className="text-cyan-400">contact@ainewsth.com</span></p>
          </section>
        </div>
      </div>

      <footer className="border-t border-white/10 mt-16 py-8 text-center text-white/30 text-sm">
        <p>© 2025 AiNewsTH.com · <Link href="/" className="hover:text-white transition-colors">หน้าแรก</Link> · <Link href="/privacy" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</Link></p>
      </footer>
    </main>
  );
}