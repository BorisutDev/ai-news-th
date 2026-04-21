'use client';
import Link from 'next/link';
import { articles } from '@/data/articles';

export default function Home() {
  const featured = articles[0];
  const secondary = articles.slice(1, 3);
  const rest = articles.slice(3);

  return (
    <main style={{
      minHeight: '100vh',
      background: '#08080f',
      backgroundImage: `
        radial-gradient(at 20% 10%, rgba(139,92,246,0.18) 0px, transparent 50%),
        radial-gradient(at 80% 5%, rgba(6,182,212,0.12) 0px, transparent 50%),
        radial-gradient(at 50% 80%, rgba(139,92,246,0.08) 0px, transparent 50%),
        linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
      `,
      backgroundSize: 'auto, auto, auto, 64px 64px, 64px 64px',
      color: 'white',
      fontFamily: "'Noto Sans Thai', sans-serif"
    }}>

      {/* Header */}
      <header style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(8,8,15,0.85)',
        backdropFilter: 'blur(24px)',
      }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: 13,
              boxShadow: '0 0 30px rgba(139,92,246,0.4), 0 0 60px rgba(139,92,246,0.15)',
              transition: 'transform 0.2s',
            }} className="group-hover:scale-105">AI</div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 20, letterSpacing: '-0.02em', lineHeight: 1 }}>AINEWSTH</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', marginTop: 2 }}>ข่าว AI ภาษาไทย</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Link href="/" style={{ color: 'white', fontWeight: 600 }}>หน้าแรก</Link>
            <Link href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</Link>
            <Link href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</Link>
          </nav>
<Link href="/game" style={{
  fontSize: 12, fontWeight: 700,
  background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
  color: 'white',
  padding: '8px 16px', borderRadius: 999,
  display: 'flex', alignItems: 'center', gap: 6,
  textDecoration: 'none',
  boxShadow: '0 0 20px rgba(139,92,246,0.35)',
  transition: 'transform 0.2s',
}}
onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.05)'}
onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'}>
  🎮 เล่นเกม
</Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div style={{ width: 3, height: 20, borderRadius: 4, background: 'linear-gradient(to bottom, #8b5cf6, #06b6d4)' }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#a78bfa' }}>ข่าวเด่น</span>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(255,255,255,0.08), transparent)' }} />
        </div>

        {/* Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-5">

          {/* Featured */}
          {featured && (
            <Link href={`/article/${featured.slug}`} className="lg:col-span-3 group" style={{ textDecoration: 'none' }}>
              <div style={{
                borderRadius: 24,
                overflow: 'hidden',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-4px)';
                el.style.borderColor = 'rgba(139,92,246,0.35)';
                el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.4), 0 16px 48px rgba(0,0,0,0.4), 0 0 60px rgba(139,92,246,0.12), inset 0 1px 0 rgba(255,255,255,0.07)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)';
              }}>
                {/* Image */}
                <div style={{
                  height: 300, position: 'relative', overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(88,28,220,0.3), rgba(15,23,42,0.8), rgba(8,70,100,0.3))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ fontSize: 120, opacity: 0.12, filter: 'blur(20px)', position: 'absolute', userSelect: 'none' }}>{featured.emoji}</div>
                  <div style={{ fontSize: 90, position: 'relative', zIndex: 1 }}>{featured.emoji}</div>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #08080f 0%, rgba(8,8,15,0.3) 60%, transparent 100%)' }} />
                  <div style={{
                    position: 'absolute', top: 20, left: 20,
                    background: 'rgba(109,40,217,0.85)', backdropFilter: 'blur(8px)',
                    color: 'white', fontSize: 11, fontWeight: 700,
                    padding: '6px 14px', borderRadius: 999,
                    border: '1px solid rgba(167,139,250,0.3)',
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                  }}>{featured.category}</div>
                </div>
                {/* Content */}
                <div style={{ padding: '28px 28px 32px' }}>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginBottom: 10, display: 'flex', gap: 8 }}>
                    <span>{featured.date}</span><span>·</span><span>อ่าน {featured.readTime} นาที</span>
                  </div>
                  <h2 style={{ fontWeight: 900, fontSize: 24, lineHeight: 1.3, marginBottom: 10, letterSpacing: '-0.01em' }}>{featured.title}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, lineHeight: 1.7 }} className="line-clamp-2">{featured.excerpt}</p>
                </div>
              </div>
            </Link>
          )}

          {/* Secondary */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {secondary.map(a => (
              <Link key={a.slug} href={`/article/${a.slug}`} className="group flex-1" style={{ textDecoration: 'none' }}>
                <div style={{
                  borderRadius: 20, overflow: 'hidden', height: '100%',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.01) 100%)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
                  transition: 'all 0.3s ease',
                  display: 'flex', flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(-3px)';
                  el.style.borderColor = 'rgba(139,92,246,0.3)';
                  el.style.boxShadow = '0 8px 30px rgba(0,0,0,0.4), 0 0 40px rgba(139,92,246,0.08), inset 0 1px 0 rgba(255,255,255,0.06)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(0)';
                  el.style.borderColor = 'rgba(255,255,255,0.07)';
                  el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)';
                }}>
                  <div style={{
                    height: 130, position: 'relative', overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(88,28,220,0.2), rgba(15,23,42,0.9))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{ fontSize: 60, opacity: 0.1, filter: 'blur(12px)', position: 'absolute' }}>{a.emoji}</div>
                    <div style={{ fontSize: 40, position: 'relative', zIndex: 1 }}>{a.emoji}</div>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,15,0.9), transparent)' }} />
                    <span style={{
                      position: 'absolute', top: 10, left: 10,
                      background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
                      color: 'rgba(255,255,255,0.6)', fontSize: 10,
                      padding: '4px 10px', borderRadius: 999,
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}>{a.category}</span>
                  </div>
                  <div style={{ padding: '16px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', marginBottom: 8 }}>{a.date} · {a.readTime} นาที</p>
                    <h3 style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.5, flex: 1 }} className="line-clamp-2 group-hover:text-violet-300 transition-colors">{a.title}</h3>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginTop: 8 }} className="line-clamp-2">{a.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Adsense */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div style={{
          width: '100%', height: 80, borderRadius: 16,
          border: '1px dashed rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(255,255,255,0.01)',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: 13 }}>📢 Google Adsense — 728×90</span>
        </div>
      </div>

      {/* Latest */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <div style={{ width: 3, height: 22, borderRadius: 4, background: 'linear-gradient(to bottom, #8b5cf6, #06b6d4)' }} />
          <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: '-0.01em' }}>ข่าวล่าสุด</span>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(255,255,255,0.08), transparent)' }} />
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>{rest.length} บทความ</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map(a => (
            <Link key={a.slug} href={`/article/${a.slug}`} className="group" style={{ textDecoration: 'none' }}>
              <div style={{
                borderRadius: 20, overflow: 'hidden',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-4px)';
                el.style.borderColor = 'rgba(139,92,246,0.3)';
                el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5), 0 0 50px rgba(139,92,246,0.1), inset 0 1px 0 rgba(255,255,255,0.07)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)';
              }}>
                <div style={{
                  height: 180, position: 'relative',
                  background: 'linear-gradient(135deg, rgba(88,28,220,0.2), rgba(8,8,15,1))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                }}>
                  <div style={{ fontSize: 100, opacity: 0.08, filter: 'blur(20px)', position: 'absolute', userSelect: 'none' }}>{a.emoji}</div>
                  <div style={{ fontSize: 50, position: 'relative', zIndex: 1, transition: 'transform 0.4s ease' }} className="group-hover:scale-110">{a.emoji}</div>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,15,0.95), transparent 60%)' }} />
                  <span style={{
                    position: 'absolute', top: 12, left: 12,
                    background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
                    color: 'rgba(255,255,255,0.55)', fontSize: 10,
                    padding: '4px 10px', borderRadius: 999,
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}>{a.category}</span>
                </div>
                <div style={{ padding: '18px 20px 22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(255,255,255,0.22)', marginBottom: 10 }}>
                    <span>{a.date}</span>
                    <span>{a.readTime} นาที</span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.5, marginBottom: 8 }} className="line-clamp-2 group-hover:text-violet-300 transition-colors">{a.title}</h3>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 1.7 }} className="line-clamp-3">{a.excerpt}</p>
                  <div style={{
                    marginTop: 16, paddingTop: 14,
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.18)' }}>{a.author}</span>
                    <span style={{ fontSize: 12, color: '#a78bfa', fontWeight: 600, opacity: 0, transition: 'opacity 0.2s' }} className="group-hover:opacity-100">อ่านเพิ่ม →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px 0' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div style={{
              width: 32, height: 32, borderRadius: 10,
              background: 'linear-gradient(135deg, rgba(139,92,246,0.5), rgba(6,182,212,0.5))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: 11,
            }}>AI</div>
            <div>
              <div style={{ fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '-0.01em' }}>AINEWSTH.COM</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.18)' }}>ข่าว AI และเทคโนโลยีภาษาไทย</div>
            </div>
          </div>
          <div className="flex items-center gap-8" style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>
            <Link href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</Link>
            <Link href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</Link>
          </div>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.15)' }}>© 2026 AiNewsTH.com</p>
        </div>
      </footer>
    </main>
  );
}