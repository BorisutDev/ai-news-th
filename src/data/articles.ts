export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  emoji: string;
  author: string;
}

export const articles: Article[] = [
  {
    slug: "gpt-5-launch-2025",
    title: "OpenAI เปิดตัว GPT-5 อย่างเป็นทางการ: ฉลาดกว่า GPT-4o ถึง 3 เท่า",
    excerpt: "OpenAI ประกาศเปิดตัว GPT-5 โมเดลใหม่นี้มาพร้อมความสามารถในการให้เหตุผลที่ดีขึ้นอย่างมาก รองรับหลายโมดัล และทำงานอัตโนมัติได้ซับซ้อนขึ้น",
    content: "OpenAI ได้ประกาศเปิดตัว GPT-5 อย่างเป็นทางการ ซึ่งถือเป็นก้าวกระโดดครั้งใหญ่ในวงการ AI โมเดลใหม่นี้มีประสิทธิภาพสูงกว่า GPT-4o ถึง 3 เท่าในการทดสอบมาตรฐาน\n\nความสามารถใหม่ที่น่าสนใจ:\n- Multimodal ขั้นสูง รองรับภาพ วิดีโอ และเสียงในเวลาเดียวกัน\n- Long Context รองรับ context ยาวถึง 1 ล้าน token\n- Autonomous Agents ทำงานแบบ agentic ได้ซับซ้อนมากขึ้น\n\nGPT-5 จะเปิดให้ใช้งานสำหรับผู้ใช้ ChatGPT Plus ก่อน โดยมีราคา $0.015 ต่อ 1K input tokens",
    category: "AI",
    date: "20 เม.ย. 2025",
    readTime: 5,
    emoji: "🤖",
    author: "ทีมข่าว ThaiAITech"
  },
  {
    slug: "google-gemini-ultra-thailand",
    title: "Google Gemini Ultra เปิดให้ใช้งานในไทยแล้ว! รองรับภาษาไทยเต็มรูปแบบ",
    excerpt: "Google ประกาศเปิดให้บริการ Gemini Ultra ในประเทศไทยอย่างเป็นทางการ พร้อมความสามารถภาษาไทยที่ดีขึ้นกว่าเดิมมาก",
    content: "Google ได้ขยายบริการ Gemini Ultra มายังประเทศไทยแล้ว นับเป็นข่าวดีสำหรับผู้ใช้ชาวไทยที่รอคอยมานาน\n\nความสามารถใหม่:\n- รองรับภาษาไทยได้ดีขึ้นอย่างเห็นได้ชัด\n- เชื่อมต่อกับ Google Workspace ได้ครบวงจร\n- ราคาเริ่มต้น 900 บาทต่อเดือน สำหรับ Google One AI Premium",
    category: "AI",
    date: "19 เม.ย. 2025",
    readTime: 4,
    emoji: "✨",
    author: "ทีมข่าว ThaiAITech"
  },
  {
    slug: "nvidia-blackwell-b200-review",
    title: "รีวิว NVIDIA Blackwell B200: GPU สำหรับ AI ที่ทรงพลังที่สุดในโลก",
    excerpt: "เราทดสอบ NVIDIA B200 GPU ตัวใหม่ล่าสุดที่อ้างว่าเร็วกว่า H100 ถึง 5 เท่า มาดูกันว่าผลลัพธ์จริงเป็นอย่างไร",
    content: "NVIDIA B200 เป็น GPU รุ่นใหม่ที่ออกแบบมาเพื่อ AI โดยเฉพาะ มาพร้อม VRAM ขนาด 192GB และ bandwidth สูงถึง 8 TB/s\n\nจากการทดสอบจริง B200 ทำได้ดีกว่า H100 ในงาน LLM training ประมาณ 4.5 เท่า ซึ่งใกล้เคียงกับที่ NVIDIA อ้างไว้\n\nราคาอยู่ที่ประมาณ $40,000 ต่อการ์ด 1 ใบ เหมาะสำหรับองค์กรขนาดใหญ่เท่านั้น",
    category: "Hardware",
    date: "18 เม.ย. 2025",
    readTime: 7,
    emoji: "⚡",
    author: "ทีมข่าว ThaiAITech"
  },
  {
    slug: "thai-startup-ai-2025",
    title: "Startup ไทย 5 บริษัทที่น่าจับตามองด้าน AI ในปี 2025",
    excerpt: "เปิดรายชื่อ startup ไทยที่กำลังใช้ AI เปลี่ยนอุตสาหกรรมต่างๆ ตั้งแต่สุขภาพไปจนถึงการเกษตร",
    content: "Startup ไทยกำลังตื่นตัวกับ AI อย่างมากในปี 2025 นี้\n\n1. MedAI Thailand - AI วินิจฉัยโรคจากภาพ X-ray\n2. FarmBot TH - AI วิเคราะห์โรคพืชจากรูปถ่าย\n3. LegalAI - ช่วยร่างสัญญาและวิเคราะห์กฎหมายไทย\n4. EduTech.AI - ระบบสอนภาษาอังกฤษส่วนตัว\n5. FinBot Thai - วิเคราะห์หุ้นและพอร์ตการลงทุน",
    category: "Startup",
    date: "18 เม.ย. 2025",
    readTime: 6,
    emoji: "🚀",
    author: "ทีมข่าว ThaiAITech"
  },
  {
    slug: "claude-4-anthropic",
    title: "Anthropic เปิดตัว Claude 4: AI ที่เน้นความปลอดภัยและความฉลาดควบคู่กัน",
    excerpt: "Anthropic ประกาศเปิดตัว Claude 4 ที่มาพร้อม Constitutional AI ขั้นสูง และความสามารถในการเขียนโค้ดที่ดีขึ้นมาก",
    content: "Anthropic ได้เปิดตัว Claude 4 โดยโฟกัสที่ความปลอดภัยและความสามารถด้านการให้เหตุผล\n\nจุดเด่น:\n- Extended Thinking คิดแบบ step-by-step ก่อนตอบ\n- Code generation ที่แม่นยำขึ้นมาก\n- ลดการ hallucinate ได้ถึง 60% เทียบกับรุ่นก่อน\n- รองรับ context 200K tokens",
    category: "AI",
    date: "17 เม.ย. 2025",
    readTime: 5,
    emoji: "🧠",
    author: "ทีมข่าว ThaiAITech"
  },
  {
    slug: "meta-llama-4-open-source",
    title: "Meta ปล่อย Llama 4 แบบ Open Source: โมเดลฟรีที่แรงพอๆ กับ GPT-4",
    excerpt: "Meta เปิดตัว Llama 4 ที่ทุกคนสามารถดาวน์โหลดและใช้งานได้ฟรี พร้อม benchmark ที่ทัดเทียมโมเดลเชิงพาณิชย์",
    content: "Meta ได้ปล่อย Llama 4 ให้ใช้งานฟรีแล้ว ถือเป็นข่าวดีสำหรับนักพัฒนาทั่วโลก\n\nLlama 4 มาใน 3 ขนาด:\n- Llama 4 Scout (17B) เหมาะสำหรับ consumer GPU\n- Llama 4 Maverick (400B) สำหรับ server\n- Llama 4 Behemoth (2T) flagship model\n\nทดสอบได้เลยที่ llama.meta.com",
    category: "Open Source",
    date: "16 เม.ย. 2025",
    readTime: 4,
    emoji: "🦙",
    author: "ทีมข่าว ThaiAITech"
  },
  {
    slug: "ai-jobs-thailand-2025",
    title: "10 อาชีพ AI ที่ตลาดงานไทยต้องการมากที่สุดในปี 2025",
    excerpt: "เปิดรายชื่ออาชีพด้าน AI ที่บริษัทไทยกำลังหาตัวจริง พร้อมเงินเดือนเฉลี่ยที่น่าสนใจมาก",
    content: "ตลาดงาน AI ในไทยกำลังร้อนแรงมากในปี 2025\n\n1. AI/ML Engineer เงินเดือน 80,000-150,000 บาท\n2. Data Scientist 60,000-120,000 บาท\n3. Prompt Engineer 40,000-80,000 บาท\n4. AI Product Manager 70,000-130,000 บาท\n5. LLM Application Developer 65,000-110,000 บาท",
    category: "Career",
    date: "15 เม.ย. 2025",
    readTime: 6,
    emoji: "💼",
    author: "ทีมข่าว ThaiAITech"
  },
  {
  slug: "apple-intelligence-คืออะไร",
  title: "Apple Intelligence คืออะไร ระบบ AI ใหม่ที่จะเปลี่ยนวิธีใช้งาน iPhone และ Mac",
  excerpt: "Apple Intelligence เป็นระบบปัญญาประดิษฐ์ที่บูรณาการเข้ากับ iOS, iPadOS และ macOS เพื่อให้อุปกรณ์ Apple ทำงานได้อย่างฉลาดและเป็นส่วนตัวยิ่งขึ้น",
  content: "Apple Intelligence คือสาขาใหม่ของปัญญาประดิษฐ์ที่ Apple เปิดตัวครั้งแรกในปี 2024 ซึ่งออกแบบมาเพื่อทำให้ iPhone, iPad และ Mac มีความสามารถด้าน AI มากขึ้น\n\nลักษณะเด่นของ Apple Intelligence คือการประมวลผลเกิดขึ้นบนอุปกรณ์ (on-device processing) ซึ่งหมายความว่าข้อมูลส่วนใหญ่ของผู้ใช้จะไม่ต้องส่งไปยังเซิร์ฟเวอร์ของ Apple\n\nระบบนี้มีฟีเจอร์มากมาย เช่น Writing Tools, Genmoji, Image Playground และความสามารถใหม่ของ Siri ที่เข้าใจบริบทได้ดีขึ้น",
  category: "AI",
  date: "21 เม.ย. 2025",
  readTime: 5,
  emoji: "🤖",
  author: "ทีมข่าว AiNewsTH"
},
  
];