'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RELICS } from '../../src/lib/relics';
export default function BookOfWeapons() {
  const [page, setPage] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [readPages, setReadPages] = useState<number[]>([]);
  const relic = RELICS;
  const totalPages = RELICS.length;
  const progress = ((page + 1) / totalPages) * 100;

  useEffect(() => {
    if (!readPages.includes(page)) {
      setReadPages([...readPages, page]);
    }
  }, );

  const playSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  const nextPage = () => {
    if (page < totalPages - 1) {
      playSound();
      setPage(page + 1);
      setUnlocked(false);
      window.speechSynthesis.cancel();
    }
  };

  const prevPage = () => {
    if (page > 0) {
      playSound();
      setPage(page - 1);
      setUnlocked(false);
      window.speechSynthesis.cancel();
    }
  };

  const speakPage = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = `${relic.title}. ${relic.scripture}. ${relic.prophecy}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      utterance.pitch = 0.7;
      window.speechSynthesis.speak(utterance);
    }
  };

  const revealSecret = () => {
    setUnlocked(true);
    playSound();
  };

  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      fontFamily:'Georgia, serif',
      overflow:'hidden'
    }}>
      <div style={{
        position:'fixed',
        top:0,
        left:0,
        width:`${progress}%`,
        height:'3px',
        background:'linear-gradient(90deg, #d4af37, #f4d03f)',
        transition:'width 0.5s ease',
        zIndex:100,
        boxShadow:'0 0 10px #d4af37'
      }}></div>

      <div style={{
        padding:'24px',
        borderBottom:'1px solid #1a1a1a',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        backdropFilter:'blur(10px)',
        background:'rgba(0,0,0,0.8)'
      }}>
        <Link href="/" style={{ color:'#d4af37', textDecoration:'none', fontFamily:'system-ui, sans-serif' }}>
          ← RUNNINGWOLF
        </Link>
        <div style={{ display:'flex', gap:'16px', alignItems:'center' }}>
          <div style={{ fontSize:'11px', color:'#666', fontFamily:'system-ui, sans-serif' }}>
            🔥 {readPages.length}/{totalPages} READ
          </div>
          <div style={{ fontSize:'12px', letterSpacing:'4px', color:'#d4af37', fontFamily:'system-ui, sans-serif' }}>
            PAGE {page + 1} OF {totalPages}
          </div>
        </div>
      </div>

      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'40px 24px',
        minHeight:'calc(100vh - 140px)'
      }}>
        <div
          key={page}
          style={{
            maxWidth:'800px',
            width:'100%',
            animation:'fadeInSlide 0.6s ease-out'
          }}
        >
          <div
            onClick={revealSecret}
            style={{
              width:'100%',
              aspectRatio:'16/9',
              backgroundImage:`url(${relic.cover})`,
              backgroundSize:'cover',
              backgroundPosition:'center',
              backgroundColor:'#0a0a0a',
              border:'2px solid #1a1a1a',
              marginBottom:'40px',
              position:'relative',
              cursor:'pointer',
              transition:'all 0.4s ease',
              boxShadow: unlocked? '0 0 40px rgba(212,175,55,0.4)' : 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              position:'absolute',
              top:'16px',
              left:'16px',
              background:'rgba(0,0,0,0.9)',
              padding:'8px 16px',
              border:'1px solid #d4af37',
              fontSize:'11px',
              letterSpacing:'2px',
              fontFamily:'system-ui, sans-serif'
            }}>
              {relic.subtitle}
            </div>
            {!unlocked && (
              <div style={{
                position:'absolute',
                bottom:'16px',
                right:'16px',
                background:'rgba(212,175,55,0.9)',
                color:'#000',
                padding:'8px 16px',
                fontSize:'10px',
                letterSpacing:'2px',
                fontFamily:'system-ui, sans-serif',
                animation:'pulse 2s infinite'
              }}>
                CLICK TO UNLOCK ⚡
              </div>
            )}
          </div>

          <div style={{ textAlign:'center', marginBottom:'40px' }}>
            <div style={{
              fontSize:'12px',
              letterSpacing:'4px',
              color:'#d4af37',
              marginBottom:'16px',
              fontFamily:'system-ui, sans-serif'
            }}>
              {relic.scripture}
            </div>
            <h1 style={{
              fontSize:'56px',
              color:'#fff',
              margin:'0 0 32px 0',
              letterSpacing:'3px',
              lineHeight:'1.1',
              textShadow:'0 0 20px rgba(212,175,55,0.3)'
            }}>
              {relic.title}
            </h1>
            <div style={{
              background:'#0a0a0a',
              border:'1px solid #1a1a1a',
              borderLeft:'3px solid #d4af37',
              padding:'32px',
              margin:'0 auto',
              maxWidth:'600px',
              transform: unlocked? 'scale(1.02)' : 'scale(1)',
              transition:'all 0.3s ease'
            }}>
              <p style={{
                fontSize:'20px',
                fontStyle:'italic',
                color:'#d4af37',
                lineHeight:'1.8',
                margin:0,
                opacity: unlocked? 1 : 0.5,
                transition:'opacity 0.5s ease'
              }}>
                "{unlocked? relic.prophecy : 'Click the image to reveal the prophecy...'}"
              </p>
            </div>

            {unlocked && (
              <button
                onClick={speakPage}
                style={{
                  background:'#1a1a1a',
                  color:'#d4af37',
                  border:'1px solid #d4af37',
                  padding:'12px 32px',
                  fontSize:'12px',
                  letterSpacing:'2px',
                  cursor:'pointer',
                  marginTop:'24px',
                  fontFamily:'system-ui, sans-serif',
                  transition:'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#d4af37';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#1a1a1a';
                  e.currentTarget.style.color = '#d4af37';
                }}
              >
                🔊 HEAR THE PROPHECY
              </button>
            )}
          </div>

          <div style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            maxWidth:'400px',
            margin:'0 auto'
          }}>
            <button
              onClick={prevPage}
              disabled={page === 0}
              style={{
                background: page === 0? '#0a0a0a' : '#d4af37',
                color: page === 0? '#333' : '#000',
                border:'none',
                padding:'16px 32px',
                fontSize:'14px',
                letterSpacing:'2px',
                cursor: page === 0? 'not-allowed' : 'pointer',
                fontFamily:'system-ui, sans-serif',
                fontWeight:'bold',
                transition:'all 0.3s ease'
              }}
              onMouseEnter={(e) => page!== 0 && (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              ← PREV
            </button>

            <div style={{ fontSize:'14px', color:'#666', fontFamily:'system-ui, sans-serif' }}>
              {page + 1} / {totalPages}
            </div>

            <button
              onClick={nextPage}
              disabled={page === totalPages - 1}
              style={{
                background: page === totalPages - 1? '#0a0a0a' : '#d4af37',
                color: page === totalPages - 1? '#333' : '#000',
                border:'none',
                padding:'16px 32px',
                fontSize:'14px',
                letterSpacing:'2px',
                cursor: page === totalPages - 1? 'not-allowed' : 'pointer',
                fontFamily:'system-ui, sans-serif',
                fontWeight:'bold',
                transition:'all 0.3s ease'
              }}
              onMouseEnter={(e) => page!== totalPages - 1 && (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              NEXT →
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
                  }
