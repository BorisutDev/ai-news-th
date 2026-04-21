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
    messages: [
      {
        role: 'user',
        content: `เขียนบทความข่าว AI/Tech ภาษาไทยเกี่ยวกับ "${topic}" ตอบเป็น JSON เท่านั้น ห้ามมี markdown ห้ามมี backtick ห้ามมีข้อความอื่น ตอบแค่ JSON object นี้เท่านั้น:
{"title":"หัวข้อบทความ","excerpt":"สรุปย่อ 1-2 ประโยค","content":"เนื้อหาบทความยาว 3-4 ย่อหน้า","category":"AI","emoji":"🤖"}`
      }
    ],
  });

  const text = message.content[0].type === 'text' ? message.content[0].text : '';
  const clean = text.replace(/```json|```/g, '').trim();
  const article = JSON.parse(clean);

  return NextResponse.json(article);
}