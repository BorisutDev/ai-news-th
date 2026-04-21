import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function GET() {
  // ดึงข่าว AI จริงจาก NewsAPI
  const newsRes = await fetch(
    `https://newsapi.org/v2/everything?q=artificial+intelligence+OR+AI+technology&language=en&sortBy=publishedAt&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`
  );
  const newsData = await newsRes.json();
  const articles = newsData.articles.filter((a: any) => a.urlToImage);

  // แปลและสรุปแต่ละข่าวเป็นภาษาไทยด้วย Claude
  const translated = await Promise.all(
    articles.slice(0, 6).map(async (article: any) => {
      const message = await client.messages.create({
        model: 'claude-haiku-4-5',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: `แปลและสรุปข่าวนี้เป็นภาษาไทย ตอบเป็น JSON เท่านั้น ไม่มี markdown:
{"title":"หัวข้อภาษาไทย","excerpt":"สรุปย่อ 1-2 ประโยคภาษาไทย","content":"เนื้อหา 2-3 ย่อหน้าภาษาไทย","category":"AI"}

ข่าวต้นฉบับ:
หัวข้อ: ${article.title}
เนื้อหา: ${article.description || ''} ${article.content || ''}`
          }
        ],
      });

      const text = message.content[0].type === 'text' ? message.content[0].text : '';
      const clean = text.replace(/```json|```/g, '').trim();
      const translated = JSON.parse(clean);

      return {
        slug: article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50),
        title: translated.title,
        excerpt: translated.excerpt,
        content: translated.content,
        category: translated.category || 'AI',
        date: new Date(article.publishedAt).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' }),
        readTime: 5,
        emoji: '🤖',
        author: article.source.name || 'ทีมข่าว AiNewsTH',
        image: article.urlToImage,
      };
    })
  );

  return NextResponse.json(translated);
}