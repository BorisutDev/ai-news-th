import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  const { topic } = await request.json();

  const message = await client.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: `เขียนบทความข่าว AI/Tech ภาษาไทยเกี่ยวกับ "${topic}" ในรูปแบบ JSON ดังนี้:
{
  "title": "หัวข้อบทความ",
  "excerpt": "สรุปย่อ 1-2 ประโยค",
  "content": "เนื้อหาบทความยาว 3-4 ย่อหน้า",
  "category": "หมวดหมู่ (AI, Hardware, Startup, Career, หรือ Open Source)",
  "emoji": "emoji ที่เกี่ยวข้อง"
}
ตอบเป็น JSON เท่านั้น ไม่ต้องมีข้อความอื่น`
      }
    ],
  });

  const text = message.content[0].type === 'text' ? message.content[0].text : '';
  const article = JSON.parse(text);

  return NextResponse.json(article);
}