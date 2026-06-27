import Link from 'next/link';
import { relics } from '@/lib/relics';

export default function HallOfRelics() {
  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      fontFamily:'system-ui, -apple-system, sans-serif'
    }}>
      {/* HEADER */}
      <div style={{
        padding:'120px 24px 80px',
        textAlign:'center',
        borderBottom:'1px solid #111'
      }}>
        <div style={{
          fontSize:'11px',
          color:'#555',
          marginBottom:'20px',
          letterSpacing:'4px'
        }}>
          ARCHIVE INDEX
        </div>
        <h1 style={{
          fontSize:'clamp(48px, 8vw, 72px)',
          margin:'0 0 20px 0',
          fontFamily:'Georgia, serif',
          fontWeight:'700'
        }}>
          HALL OF RELICS
        </h1>
        <p style={{
          fontSize:'18px',
          color:'#777',
          maxWidth:'500px',
          margin:'0 auto',
          fontStyle:'italic'
        }}>
          Each song, an artifact. Each artifact, a chapter.
        </p>
      </div>

      {/* RELIC GRID */}
      <div style={{
        maxWidth:'1200px',
        margin:'0 auto',
        padding:'80px 24px'
      }}>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))',
          gap:'40px'
        }}>
          {relics.map((relic) => (
            <Link 
              key={relic.slug} 
              href={`/music/${relic.slug}`}
              style={{ textDecoration:'none' }}
            >
              <div style={{
                border:'1px solid #1a1a1a',
                transition:'all 0.3s ease',
                cursor:'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#333';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                {/* COVER */}
                <div style={{
                  aspectRatio:'1/1',
                  backgroundImage:`url(${relic.coverImage})`,
                  backgroundSize:'cover',
                  backgroundPosition:'center',
                  position:'relative'
                }}>
                  <div style={{
                    position:'absolute',
                    top:'16px',
                    left:'16px',
                    fontSize:'10px',
                    color:'#fff',
                    background:'rgba(0,0,0,0.6)',
                    padding:'6px 10px',
                    letterSpacing:'2px'
                  }}>
                    RELIC {String(relic.relicNumber).padStart(2, '0')}
                  </div>
                  <div style={{
                    position:'absolute',
                    bottom:0,left:0,right:0,
                    height:'60%',
                    background:'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)'
                  }}></div>
                </div>
                
                {/* INFO */}
                <div style={{ padding:'24px' }}>
                  <h3 style={{
                    fontSize:'20px',
                    margin:'0 0 8px 0',
                    color:'#fff',
                    fontFamily:'Georgia, serif'
                  }}>
                    {relic.title}
                  </h3>
                  <p style={{
                    fontSize:'14px',
                    color:'#666',
                    margin:0,
                    fontStyle:'italic'
                  }}>
                    {relic.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
