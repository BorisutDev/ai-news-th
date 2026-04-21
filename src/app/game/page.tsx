'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const sentences = [
  "Anthropic launched Claude Opus 4.7 with stronger coding abilities in April 2026",
  "Artificial intelligence is transforming every industry at an unprecedented speed",
  "NVIDIA invested thirty billion dollars in OpenAI before their planned IPO",
  "Meta released Llama 4 as open weight models with 200 languages support",
  "The future belongs to those who understand artificial intelligence deeply",
  "Machine learning models now process billions of parameters in real time",
  "Claude Code has become the leading AI coding assistant for developers worldwide",
  "Deep learning neural networks mimic the structure of the human brain",
];

interface Score {
  wpm: number;
  accuracy: number;
  date: string;
}

export default function TypingGame() {
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [errors, setErrors] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'finished'>('idle');
  const [scores, setScores] = useState<Score[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('typing-scores');
    if (saved) setScores(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (gameState !== 'playing') return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          finishGame();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameState]);

  useEffect(() => {
    if (!startTime || gameState !== 'playing') return;
    const elapsed = (Date.now() - startTime) / 1000 / 60;
    const wordsTyped = input.trim().split(' ').filter(Boolean).length;
    setWpm(Math.round(wordsTyped / elapsed) || 0);

    let errorCount = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== text[i]) errorCount++;
    }
    setErrors(errorCount);
    setAccuracy(input.length === 0 ? 100 : Math.round(((input.length - errorCount) / input.length) * 100));
  }, [input, startTime, text, gameState]);

  const startGame = () => {
    const random = sentences[Math.floor(Math.random() * sentences.length)];
    setText(random);
    setInput('');
    setStartTime(Date.now());
    setEndTime(null);
    setErrors(0);
    setWpm(0);
    setAccuracy(100);
    setTimeLeft(60);
    setGameState('playing');
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const finishGame = () => {
    setEndTime(Date.now());
    setGameState('finished');
    const newScore: Score = {
      wpm,
      accuracy,
      date: new Date().toLocaleString('th-TH'),
    };
    const updated = [newScore, ...scores].slice(0, 10).sort((a, b) => b.wpm - a.wpm);
    setScores(updated);
    localStorage.setItem('typing-scores', JSON.stringify(updated));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (gameState !== 'playing') return;
    const val = e.target.value;
    setInput(val);
    if (val === text) finishGame();
  };

  return (
    <main style={{ minHeight: '100vh', color: 'white', fontFamily: "'Noto Sans Thai', sans-serif" }}>

      {/* Header */}
      <header style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(8,8,15,0.85)', backdropFilter: 'blur(24px)',
      }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: 13,
              boxShadow: '0 0 30px rgba(139,92,246,0.4)',
            }}>AI</div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 20, lineHeight: 1 }}>AINEWSTH</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', marginTop: 2 }}>ข่าว AI ภาษาไทย</div>
            </div>
          </Link>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, textDecoration: 'none' }}>← กลับหน้าแรก</Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)', padding: '6px 14px', borderRadius: 999, fontSize: 12, color: '#c4b5fd', fontWeight: 600, marginBottom: 16 }}>
            🎮 MINI GAME
          </div>
          <h1 style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 12 }}>
            Typing <span style={{ background: 'linear-gradient(135deg, #c4b5fd, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Speed Test</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>ทดสอบความเร็วการพิมพ์ของคุณด้วยประโยคเกี่ยวกับ AI</p>
        </div>

        {/* Stats bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
          {[
            { label: 'WPM', value: wpm, color: '#a78bfa' },
            { label: 'Accuracy', value: `${accuracy}%`, color: '#67e8f9' },
            { label: 'Errors', value: errors, color: '#f87171' },
            { label: 'Time', value: `${timeLeft}s`, color: '#fbbf24' },
          ].map(s => (
            <div key={s.label} style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01))',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 16, padding: '16px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
            }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Game area */}
        <div style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 24, padding: 32, marginBottom: 24,
          boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}>
          {gameState === 'idle' && (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: 80, marginBottom: 16 }}>⌨️</div>
              <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>พร้อมเริ่มเกม?</h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 28, fontSize: 14 }}>คุณมีเวลา 60 วินาทีเพื่อพิมพ์ประโยคให้ได้มากที่สุด</p>
              <button onClick={startGame} style={{
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                color: 'white', fontWeight: 800, fontSize: 16,
                padding: '14px 36px', borderRadius: 12, border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 30px rgba(139,92,246,0.4)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                🚀 เริ่มเกม
              </button>
            </div>
          )}

          {gameState === 'playing' && (
            <>
              <div style={{
                fontSize: 22, lineHeight: 1.8,
                padding: '20px 24px', borderRadius: 16,
                background: 'rgba(0,0,0,0.3)',
                fontFamily: "'Courier New', monospace",
                marginBottom: 20, letterSpacing: 0.5,
                minHeight: 140,
              }}>
                {text.split('').map((char, i) => {
                  let color = 'rgba(255,255,255,0.3)';
                  let bg = 'transparent';
                  if (i < input.length) {
                    color = input[i] === char ? '#86efac' : '#fca5a5';
                    if (input[i] !== char) bg = 'rgba(248,113,113,0.15)';
                  }
                  if (i === input.length) {
                    bg = 'rgba(139,92,246,0.25)';
                    color = '#fff';
                  }
                  return <span key={i} style={{ color, background: bg, padding: '0 1px', borderRadius: 3 }}>{char}</span>;
                })}
              </div>
              <input
                ref={inputRef}
                value={input}
                onChange={handleInput}
                autoFocus
                style={{
                  width: '100%',
                  background: 'rgba(0,0,0,0.4)',
                  border: '2px solid rgba(139,92,246,0.3)',
                  borderRadius: 12, padding: '14px 18px',
                  color: 'white', fontSize: 16,
                  fontFamily: "'Courier New', monospace",
                  outline: 'none',
                }}
                placeholder="เริ่มพิมพ์ที่นี่..."
              />
              <button onClick={() => setGameState('idle')} style={{
                marginTop: 16, background: 'transparent',
                color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)',
                padding: '8px 20px', borderRadius: 8, fontSize: 13,
                cursor: 'pointer',
              }}>
                ⏹ ยกเลิก
              </button>
            </>
          )}

          {gameState === 'finished' && (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: 60, marginBottom: 12 }}>🏆</div>
              <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>จบเกม!</h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 28 }}>
                <div style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>ความเร็ว</div>
                  <div style={{ fontSize: 32, fontWeight: 900, color: '#a78bfa' }}>{wpm}</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>WPM</div>
                </div>
                <div style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>ความแม่นยำ</div>
                  <div style={{ fontSize: 32, fontWeight: 900, color: '#67e8f9' }}>{accuracy}%</div>
                </div>
                <div style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>ข้อผิดพลาด</div>
                  <div style={{ fontSize: 32, fontWeight: 900, color: '#f87171' }}>{errors}</div>
                </div>
              </div>

              <button onClick={startGame} style={{
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                color: 'white', fontWeight: 800, fontSize: 15,
                padding: '12px 32px', borderRadius: 12, border: 'none',
                cursor: 'pointer', marginRight: 12,
                boxShadow: '0 0 30px rgba(139,92,246,0.4)',
              }}>
                🔁 เล่นอีกครั้ง
              </button>
              <button onClick={() => setGameState('idle')} style={{
                background: 'transparent', color: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '12px 32px', borderRadius: 12, fontSize: 15,
                cursor: 'pointer', fontWeight: 600,
              }}>
                กลับหน้าหลัก
              </button>
            </div>
          )}
        </div>

        {/* Leaderboard */}
        <div style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01))',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 20, padding: 24,
          boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 3, height: 20, borderRadius: 4, background: 'linear-gradient(to bottom, #8b5cf6, #06b6d4)' }} />
            <h2 style={{ fontSize: 18, fontWeight: 800 }}>🏅 Top 10 High Scores</h2>
            {scores.length > 0 && (
              <button onClick={() => { setScores([]); localStorage.removeItem('typing-scores'); }} style={{
                marginLeft: 'auto', background: 'transparent',
                color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.08)',
                padding: '4px 10px', borderRadius: 6, fontSize: 11, cursor: 'pointer',
              }}>ล้างคะแนน</button>
            )}
          </div>

          {scores.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 40, color: 'rgba(255,255,255,0.25)', fontSize: 14 }}>
              ยังไม่มีสถิติ — เล่นเกมเพื่อบันทึกคะแนน!
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {scores.map((s, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '12px 16px',
                  background: i === 0 ? 'rgba(251,191,36,0.08)' : 'rgba(255,255,255,0.02)',
                  border: i === 0 ? '1px solid rgba(251,191,36,0.2)' : '1px solid rgba(255,255,255,0.04)',
                  borderRadius: 10,
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: i === 0 ? '#fbbf24' : i === 1 ? '#d1d5db' : i === 2 ? '#f59e0b' : 'rgba(255,255,255,0.08)',
                    color: i < 3 ? '#000' : 'rgba(255,255,255,0.5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 900, fontSize: 13,
                  }}>
                    {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}
                  </div>
                  <div style={{ flex: 1, fontSize: 14, fontWeight: 700 }}>{s.wpm} WPM</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{s.accuracy}% แม่นยำ</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{s.date}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px 0', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>
        <p>© 2026 AiNewsTH.com · ข่าว AI และเทคโนโลยีภาษาไทย</p>
      </footer>
    </main>
  );
}