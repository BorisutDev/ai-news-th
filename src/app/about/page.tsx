export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <a href="/" className="text-cyan-400 text-sm hover:underline">← กลับหน้าแรก</a>
        <h1 className="text-3xl font-black mt-6 mb-2">เกี่ยวกับเรา</h1>
        <p className="text-white/40 text-sm mb-10">AiNewsTH.com</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-lg mb-3">เราคือใคร</h2>
            <p>AiNewsTH.com คือแหล่งข่าว AI และเทคโนโลยีภาษาไทยที่อัปเดตทุกวัน เราเชื่อว่าคนไทยทุกคนควรเข้าถึงข้อมูลด้าน AI ที่ถูกต้องและทันสมัยในภาษาของตัวเอง</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">พันธกิจของเรา</h2>
            <p>เราตั้งใจนำเสนอข่าวสาร บทวิเคราะห์ และคู่มือด้าน AI และเทคโนโลยีที่เข้าใจง่าย เพื่อให้คนไทยไม่พลาดทุกความเคลื่อนไหวในโลกเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็ว</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">เนื้อหาของเรา</h2>
            <p>เราครอบคลุมหัวข้อหลากหลายได้แก่ ปัญญาประดิษฐ์ (AI), Machine Learning, Large Language Models, Startup เทคโนโลยี, Hardware, และอาชีพในวงการ Tech ทั้งในไทยและต่างประเทศ</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">ติดต่อเรา</h2>
            <p>มีข้อเสนอแนะหรืออยากร่วมงานกับเรา ติดต่อได้ที่ <a href="/contact" className="text-cyan-400 hover:underline">หน้าติดต่อเรา</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}