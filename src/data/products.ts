export interface Product {
  id: string;
  name: string;
  tagline: string;
  review: string;
  verdict: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  badge?: string;
  emoji: string;
  shopeeUrl: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  scores: {
    performance: number;
    build: number;
    value: number;
    comfort: number;
  };
}

export const categories = [
  { id: 'all', name: 'ทั้งหมด', emoji: '🎮' },
  { id: 'mouse', name: 'เมาส์', emoji: '🖱️' },
  { id: 'keyboard', name: 'คีย์บอร์ด', emoji: '⌨️' },
  { id: 'headset', name: 'หูฟัง', emoji: '🎧' },
  { id: 'monitor', name: 'จอ', emoji: '🖥️' },
  { id: 'chair', name: 'เก้าอี้', emoji: '🪑' },
];

export const products: Product[] = [
  {
    id: 'logitech-g502-x',
    name: 'Logitech G502 X Plus',
    tagline: 'เมาส์ไร้สายที่ดีที่สุดสำหรับ FPS ในปี 2026',
    review: `Logitech G502 X Plus คือหนึ่งในเมาส์เกมมิ่งที่เราแนะนำมากที่สุดในปีนี้ ด้วย HERO 25K sensor ที่แม่นยำสูงสุดในตลาด ทำให้การเล่น FPS อย่าง Valorant หรือ CS2 รู้สึกได้ถึงความแตกต่างทันที

ในด้านการออกแบบ G502 X Plus มาพร้อมน้ำหนัก 89 กรัม ซึ่งเบากว่ารุ่นก่อนมาก และยังมี LIGHTFORCE hybrid switch ที่ตอบสนองเร็วกว่า mechanical switch ทั่วไป แบตเตอรี่อยู่ได้นานถึง 130 ชั่วโมง ซึ่งเพียงพอสำหรับการใช้งานหลายสัปดาห์

สิ่งที่ทำให้เมาส์ตัวนี้โดดเด่นคือ scroll wheel แบบใหม่ที่สามารถสลับระหว่าง tactile และ freespin ได้ในปุ่มเดียว เหมาะทั้งการเล่นเกมและการทำงาน`,
    verdict: 'G502 X Plus เป็นเมาส์ที่คุ้มค่ามากสำหรับคนที่ต้องการ performance สูงสุดในแบบไร้สาย ถ้าบัดเจทถึงและเล่น FPS เป็นหลัก นี่คือตัวเลือกอันดับ 1 ของเรา',
    price: 3590,
    originalPrice: 4290,
    rating: 4.8,
    reviews: 2341,
    category: 'mouse',
    badge: 'แนะนำ',
    emoji: '🖱️',
    shopeeUrl: 'https://shopee.co.th/search?keyword=logitech+g502+x+plus',
    specs: ['HERO 25K Sensor', 'ไร้สาย LIGHTSPEED', 'แบต 130 ชั่วโมง', 'น้ำหนัก 89g', 'LIGHTFORCE Switch'],
    pros: ['Sensor แม่นยำที่สุดในตลาด', 'แบตอึดมาก', 'scroll wheel ยืดหยุ่น', 'ไม่มี input lag'],
    cons: ['ราคาค่อนข้างสูง', 'หนักกว่าเมาส์ ultralight ทั่วไป', 'จับถนัดมือขวาเท่านั้น'],
    bestFor: ['นักเล่น FPS จริงจัง', 'คนที่ต้องการไร้สายคุณภาพสูง', 'Gamer ที่ใช้งานยาวนาน'],
    scores: { performance: 98, build: 90, value: 82, comfort: 88 },
  },
  {
    id: 'razer-deathadder-v3',
    name: 'Razer DeathAdder V3',
    tagline: 'เมาส์ที่นักโปร esports เลือกใช้มากที่สุดในโลก',
    review: `DeathAdder V3 คือวิวัฒนาการของเมาส์ตระกูลที่โด่งดังที่สุดในวงการ esports ด้วยน้ำหนักเพียง 59 กรัม และดีไซน์ ergonomic ที่ผ่านการพัฒนามากว่า 20 ปี ทำให้เมาส์ตัวนี้รู้สึกเหมือนเป็นส่วนหนึ่งของมือเลย

Focus Pro 30K optical sensor ให้ความแม่นยำในระดับที่แทบไม่ต่างจาก G502 X Plus แต่ข้อดีคือราคาถูกกว่าพอสมควร และน้ำหนักที่เบากว่าทำให้การ flick shot ใน FPS ทำได้ง่ายและแม่นขึ้น

สายเคเบิล Speedflex ของ Razer นิ่มมากจนแทบลืมไปว่าเป็นแบบมีสาย ไม่รบกวนการเคลื่อนไหวเลย`,
    verdict: 'ถ้าบัดเจทจำกัดแต่อยากได้ performance ระดับโปร DeathAdder V3 คือคำตอบ ราคาคุ้มค่ามากและเหมาะกับมือทุกขนาด',
    price: 2590,
    originalPrice: 2990,
    rating: 4.9,
    reviews: 5621,
    category: 'mouse',
    badge: 'Best Value',
    emoji: '🖱️',
    shopeeUrl: 'https://shopee.co.th/search?keyword=razer+deathadder+v3',
    specs: ['Focus Pro 30K Sensor', 'น้ำหนัก 59g', 'สาย Speedflex', '6 ปุ่ม', 'Optical Switch Gen-3'],
    pros: ['เบามาก ควบคุมง่าย', 'จับถนัดมือมาก', 'ราคาคุ้มค่า', 'นักโปรใช้เยอะมาก'],
    cons: ['มีสาย (ไม่มีรุ่นไร้สาย)', 'เหมาะมือขวาเท่านั้น', 'RGB ไม่สวยเท่าคู่แข่ง'],
    bestFor: ['นักเล่น FPS ทุกระดับ', 'คนที่งบไม่เกิน 3,000', 'มือขนาดกลาง-ใหญ่'],
    scores: { performance: 95, build: 88, value: 95, comfort: 92 },
  },
  {
    id: 'keychron-q1',
    name: 'Keychron Q1 Pro',
    tagline: 'คีย์บอร์ด mechanical ไร้สายที่ดีที่สุดในราคาไม่เกิน 6,000',
    review: `Keychron Q1 Pro สร้างมาตรฐานใหม่ให้กับคีย์บอร์ด mechanical ระดับกลาง ด้วยบอดี้อลูมิเนียม CNC ที่ให้ความรู้สึกหนักแน่นและมีคุณภาพสูงมาก เมื่อพิมพ์แล้วเสียงดังก้อง fullness ที่ทำให้รู้สึกพึงพอใจทุกครั้งที่กดแป้น

ระบบ Bluetooth 5.1 เชื่อมต่อได้พร้อมกัน 3 อุปกรณ์ สลับได้ง่ายด้วยปุ่มด้านบน และยังมี USB-C wired mode สำหรับตอนเล่นเกมที่ต้องการ latency ต่ำที่สุด

Hotswap socket ทำให้เปลี่ยน switch ได้โดยไม่ต้องบัดกรี เหมาะมากสำหรับคนที่อยากทดลอง switch ต่างๆ โดยไม่ต้องซื้อคีย์บอร์ดใหม่`,
    verdict: 'Q1 Pro คือคีย์บอร์ดที่ให้ premium experience ในราคาที่จ่ายได้ ถ้าอยากได้คีย์บอร์ดดีๆ ที่ใช้ได้ทั้งเล่นเกมและทำงาน นี่คือตัวเลือกอันดับ 1',
    price: 5490,
    originalPrice: 6200,
    rating: 4.7,
    reviews: 1823,
    category: 'keyboard',
    badge: 'Editor\'s Choice',
    emoji: '⌨️',
    shopeeUrl: 'https://shopee.co.th/search?keyword=keychron+q1+pro',
    specs: ['บอดี้อลูมิเนียม CNC', 'Bluetooth 5.1 + USB-C', 'Hotswap socket', 'RGB Backlight', 'QMK/VIA support'],
    pros: ['Build quality ดีมากในราคานี้', 'ไร้สายและมีสายในตัว', 'เปลี่ยน switch ได้', 'customize ได้เต็มที่'],
    cons: ['หนักมากถ้าต้องพกพา', 'แบตหมดเร็วถ้าเปิด RGB', 'ไม่มี numpad'],
    bestFor: ['คนที่ต้องการทั้งเล่นเกมและทำงาน', 'สาย keyboard enthusiast มือใหม่', 'คนงบไม่เกิน 6,000'],
    scores: { performance: 90, build: 95, value: 90, comfort: 88 },
  },
  {
    id: 'hyperx-cloud-alpha',
    name: 'HyperX Cloud Alpha',
    tagline: 'หูฟังเกมมิ่งระดับตำนานที่ยังไม่มีใครแทนที่ได้',
    review: `HyperX Cloud Alpha ถูกเรียกว่า "ราชาหูฟังเกมมิ่ง" มานานกว่า 5 ปี และด้วยเหตุผลที่ดีมาก dual chamber driver design แยก bass กับ mid/high ออกจากกัน ทำให้เสียงชัดเจนและไม่ overlap กันแม้เปิดดังมาก

ไมโครโฟน cardioid แบบถอดได้นั้นชัดมากเมื่อเทียบกับหูฟังในราคาเดียวกัน เพื่อนในปาร์ตี้ได้ยินเสียงชัดเจนไม่มีเสียงรบกวน

บอดี้อลูมิเนียมทำให้แข็งแรงมาก หูฟังตัวนี้ใช้มาหลายปียังดีอยู่เป็นเรื่องปกติ ฟองน้ำหูนิ่มมาก ใส่ได้ทั้งวันไม่ปวดหู`,
    verdict: 'Cloud Alpha ยังคงเป็นหูฟังเกมมิ่งที่คุ้มค่าที่สุดในตลาดแม้จะออกมาหลายปีแล้ว ถ้างบไม่เกิน 3,000 และอยากได้เสียงดี ตัวนี้ไม่ผิดหวังแน่นอน',
    price: 2490,
    originalPrice: 2990,
    rating: 4.8,
    reviews: 8432,
    category: 'headset',
    badge: 'ขายดีที่สุด',
    emoji: '🎧',
    shopeeUrl: 'https://shopee.co.th/search?keyword=hyperx+cloud+alpha',
    specs: ['Dual Chamber Driver 50mm', '7.1 Surround Sound', 'Mic ถอดได้', 'บอดี้อลูมิเนียม', 'Jack 3.5mm'],
    pros: ['เสียงดีมากในราคานี้', 'ทนทานใช้ได้นานหลายปี', 'ใส่สบายทั้งวัน', 'mic ชัดมาก'],
    cons: ['ไม่มีไร้สาย', 'ไม่มี EQ software', 'ดีไซน์ไม่ได้อัปเดตมานาน'],
    bestFor: ['นักเล่นเกมทั่วไป', 'คนงบไม่เกิน 3,000', 'ใครที่ใส่หูฟังนานๆ'],
    scores: { performance: 90, build: 92, value: 98, comfort: 94 },
  },
  {
    id: 'asus-rog-swift-pg248qp',
    name: 'ASUS ROG Swift PG248QP',
    tagline: 'จอ 360Hz ที่เร็วที่สุดสำหรับสาย FPS มืออาชีพ',
    review: `ROG Swift PG248QP คือจอที่ออกแบบมาเพื่อ competitive FPS gaming โดยเฉพาะ ด้วย refresh rate 360Hz และ response time เพียง 0.3ms ทำให้ภาพนิ่งสนิทและตอบสนองเร็วที่สุดในตลาด ณ ตอนนี้

ความแตกต่างระหว่าง 144Hz กับ 360Hz นั้นเห็นได้ชัดมากในเกมอย่าง CS2 หรือ Valorant โดยเฉพาะตอน peek มุมหรือ tracking เป้าที่เคลื่อนที่เร็ว ทำให้มองเห็นได้ชัดกว่าและ react ได้เร็วกว่า

G-Sync Compatible ทำงานได้ดีกับ GPU ทั้ง NVIDIA และ AMD ภาพไม่ขาดและไม่ tear แม้ fps จะไม่ถึง 360`,
    verdict: 'ถ้าเล่น competitive FPS จริงจังและงบถึง จอตัวนี้จะให้ advantage จริงๆ ในเกม แต่ถ้าเล่นแบบ casual 144Hz ก็เพียงพอแล้วครับ',
    price: 18900,
    originalPrice: 21900,
    rating: 4.9,
    reviews: 432,
    category: 'monitor',
    badge: 'Top Rated',
    emoji: '🖥️',
    shopeeUrl: 'https://shopee.co.th/search?keyword=asus+rog+swift+pg248qp',
    specs: ['24.1" Full HD 1080p', '360Hz refresh rate', '0.3ms GtG', 'G-Sync Compatible', 'ELMB Sync'],
    pros: ['เร็วที่สุดในตลาด', 'ภาพนิ่งสนิทมาก', 'ได้เปรียบใน competitive จริง', 'build quality ดี'],
    cons: ['ราคาสูงมาก', '1080p เท่านั้น ไม่มี 1440p', 'HDR ธรรมดา', 'ขนาดเล็กเกินไปสำหรับบางคน'],
    bestFor: ['นักเล่น FPS ระดับ competitive', 'คนที่ fps ถึง 200+ ตลอด', 'ใครที่ต้องการ advantage สูงสุด'],
    scores: { performance: 99, build: 90, value: 75, comfort: 85 },
  },
  {
    id: 'secretlab-titan',
    name: 'Secretlab TITAN Evo',
    tagline: 'เก้าอี้ที่นักโปร esports ทั่วโลกเลือกใช้',
    review: `Secretlab TITAN Evo คือเก้าอี้เกมมิ่งที่ได้รับการยอมรับมากที่สุดในวงการ esports ระดับโลก ทีม T1, Cloud9, และอีกหลายทีมใช้เก้าอี้นี้ในการแข่งขัน ซึ่งบอกได้เลยว่าคุณภาพนั้นไม่ต้องสงสัย

Integrated lumbar system สามารถปรับได้ 4 ระดับ รองรับหลังส่วนล่างได้พอดี ทำให้นั่งได้นาน 6-8 ชั่วโมงโดยไม่ปวดหลัง ซึ่งเป็นสิ่งสำคัญมากสำหรับ gamer ที่เล่นหนัก

หนังที่ใช้เป็น SoftWeave Plus fabric ระบายอากาศได้ดีกว่า PU leather ทั่วไปมาก ไม่รู้สึกร้อนแม้นั่งนานๆ รับประกัน 5 ปี ซึ่งดีที่สุดในตลาด`,
    verdict: 'ราคาสูงแต่คุ้มค่ามากสำหรับคนที่นั่งเล่นเกมหรือทำงานวันละหลายชั่วโมง ลงทุนครั้งเดียวใช้ได้หลายปี ดีกว่าซื้อเก้าอี้ถูกๆ แล้วปวดหลังในระยะยาว',
    price: 19900,
    originalPrice: 22900,
    rating: 4.8,
    reviews: 3241,
    category: 'chair',
    badge: 'Premium Pick',
    emoji: '🪑',
    shopeeUrl: 'https://shopee.co.th/search?keyword=secretlab+titan+evo',
    specs: ['SoftWeave Plus Fabric', 'Integrated Lumbar 4-way', 'เอน 165°', 'รับน้ำหนัก 130kg', 'รับประกัน 5 ปี'],
    pros: ['นั่งสบายมาก ไม่ปวดหลัง', 'ทนทานใช้ได้นานหลายปี', 'ระบายอากาศดี', 'รับประกันดีที่สุดในตลาด'],
    cons: ['ราคาสูงมาก', 'หนักเคลื่อนย้ายลำบาก', 'ต้องประกอบเองใช้เวลานาน'],
    bestFor: ['คนที่นั่งเกิน 4 ชั่วโมงต่อวัน', 'คนที่มีปัญหาหลัง', 'ใครที่อยากลงทุนระยะยาว'],
    scores: { performance: 95, build: 96, value: 82, comfort: 98 },
  },
];