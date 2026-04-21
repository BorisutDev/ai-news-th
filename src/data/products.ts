export interface Product {
  id: string;
  name: string;
  description: string;
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
    description: 'เมาส์เกมมิ่งไร้สายสุดพรีเมียม ตอบสนองทุกการเคลื่อนไหวด้วย HERO 25K sensor ความแม่นยำสูงสุด',
    price: 3590,
    originalPrice: 4290,
    rating: 4.8,
    reviews: 2341,
    category: 'mouse',
    badge: 'ขายดี',
    emoji: '🖱️',
    shopeeUrl: 'https://shopee.co.th/search?keyword=logitech+g502+x+plus',
    specs: ['HERO 25K Sensor', 'ไร้สาย LIGHTSPEED', 'แบต 130 ชั่วโมง', 'น้ำหนัก 89g'],
    pros: ['ความแม่นยำสูงมาก', 'แบตอึด', 'ปุ่มกดดี'],
  },
  {
    id: 'razer-deathadder-v3',
    name: 'Razer DeathAdder V3',
    description: 'เมาส์ที่นักโปรใช้มากที่สุดในโลก ดีไซน์ ergonomic รองรับมือขวาพอดี เล่น FPS ได้ดีที่สุด',
    price: 2590,
    originalPrice: 2990,
    rating: 4.9,
    reviews: 5621,
    category: 'mouse',
    badge: 'Pro Pick',
    emoji: '🖱️',
    shopeeUrl: 'https://shopee.co.th/search?keyword=razer+deathadder+v3',
    specs: ['Focus Pro 30K Sensor', 'น้ำหนัก 59g', 'สาย Speedflex', '6 ปุ่ม'],
    pros: ['เบามาก', 'จับถนัดมือ', 'นักโปรใช้เยอะ'],
  },
  {
    id: 'keychron-q1',
    name: 'Keychron Q1 Pro',
    description: 'คีย์บอร์ด mechanical ไร้สายตัวดัง บอดี้อลูมิเนียมแข็งแกร่ง เสียงพิมพ์หนักแน่น น่าใช้ที่สุดในราคานี้',
    price: 5490,
    originalPrice: 6200,
    rating: 4.7,
    reviews: 1823,
    category: 'keyboard',
    badge: 'Editor\'s Choice',
    emoji: '⌨️',
    shopeeUrl: 'https://shopee.co.th/search?keyword=keychron+q1+pro',
    specs: ['บอดี้อลูมิเนียม', 'Bluetooth 5.1', 'Hotswap', 'RGB Backlight'],
    pros: ['Build quality ดีมาก', 'เสียงนุ่ม', 'ไร้สายได้'],
  },
  {
    id: 'hyperx-cloud-alpha',
    name: 'HyperX Cloud Alpha',
    description: 'หูฟังเกมมิ่งระดับตำนาน เสียงชัด bass แน่น mic ตัดเสียงรบกวนดี ใส่นานไม่ปวดหัว',
    price: 2490,
    originalPrice: 2990,
    rating: 4.8,
    reviews: 8432,
    category: 'headset',
    badge: 'ขายดี',
    emoji: '🎧',
    shopeeUrl: 'https://shopee.co.th/search?keyword=hyperx+cloud+alpha',
    specs: ['Driver 50mm', '7.1 Surround Sound', 'Mic ถอดได้', 'บอดี้อลูมิเนียม'],
    pros: ['เสียงดีมาก', 'ทนทาน', 'ราคาคุ้ม'],
  },
  {
    id: 'asus-rog-swift-pg248qp',
    name: 'ASUS ROG Swift PG248QP',
    description: 'จอเกมมิ่ง 360Hz สำหรับสาย FPS โดยเฉพาะ ภาพนิ่งสนิท ตอบสนองเร็วที่สุดในตลาด',
    price: 18900,
    originalPrice: 21900,
    rating: 4.9,
    reviews: 432,
    category: 'monitor',
    badge: 'Top Rated',
    emoji: '🖥️',
    shopeeUrl: 'https://shopee.co.th/search?keyword=asus+rog+swift+pg248qp',
    specs: ['24.1" 1080p', '360Hz', '0.3ms GtG', 'G-Sync Compatible'],
    pros: ['ลื่นมากที่สุด', 'ภาพคมชัด', 'เหมาะ FPS'],
  },
  {
    id: 'secretlab-titan',
    name: 'Secretlab TITAN Evo',
    description: 'เก้าอี้เกมมิ่งระดับโลกที่นักโปร esports ใช้ นั่งได้ทั้งวันไม่ปวดหลัง รับประกัน 5 ปี',
    price: 19900,
    originalPrice: 22900,
    rating: 4.8,
    reviews: 3241,
    category: 'chair',
    badge: 'Premium',
    emoji: '🪑',
    shopeeUrl: 'https://shopee.co.th/search?keyword=secretlab+titan+evo',
    specs: ['Memory Foam หัว', 'Lumbar Support', 'เอน 165°', 'รับน้ำหนัก 130kg'],
    pros: ['นั่งสบายมาก', 'ทนทาน', 'ดีไซน์สวย'],
  },
];