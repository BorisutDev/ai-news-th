import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  const { topic } = await request.json();

  const message = await client.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 2048,
    tools: [
      {
        type: "web_search_20250305",
        name: "web_search",
      } as any
    ],
    messages: [
      {
        role: 'user',
        content: `ค้นหาข่าวล่าสุดเกี่ยวกับ "${topic}" แล้วเขียนบทความข่าว AI/Tech ภาษาไทยที่มีข้อมูลเป็นปัจจุบัน ตอบเป็น JSON เท่านั้น ไม่มี markdown ไม่มี backtick:
{"title":"หัวข้อบทความ","excerpt":"สรุปย่อ 1-2 ประโยค","content":"เนื้อหาบทความยาว 3-4 ย่อหน้าพร้อมข้อมูลปัจจุบัน","category":"AI","emoji":"🤖"}`
      }
    ],
  });

  const textBlock = message.content.find(b => b.type === 'text');
  const text = textBlock && textBlock.type === 'text' ? textBlock.text : '';
  const clean = text.replace(/```json|```/g, '').trim();
  const article = JSON.parse(clean);

  return NextResponse.json(article);
}