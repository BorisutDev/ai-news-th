export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <a href="/" className="text-cyan-400 text-sm hover:underline">← กลับหน้าแรก</a>
        <h1 className="text-3xl font-black mt-6 mb-2">ติดต่อเรา</h1>
        <p className="text-white/40 text-sm mb-10">AiNewsTH.com</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-lg mb-3">ช่องทางติดต่อ</h2>
            <p>หากมีคำถาม ข้อเสนอแนะ หรืออยากร่วมงานกับเรา สามารถติดต่อได้ผ่านช่องทางด้านล่างนี้</p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-white font-medium">อีเมล</p>
                <p className="text-cyan-400">contact@ainewsth.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <p className="text-white font-medium">เว็บไซต์</p>
                <p className="text-cyan-400">ainewsth.com</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">สำหรับนักข่าวและพาร์ทเนอร์</h2>
            <p>หากต้องการร่วมมือด้านเนื้อหา โฆษณา หรือพาร์ทเนอร์ชิป กรุณาติดต่อทางอีเมลพร้อมระบุหัวข้อให้ชัดเจนครับ</p>
          </section>
        </div>
      </div>
    </main>
  );
}