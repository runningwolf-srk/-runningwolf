import Link from 'next/link';
import { RELICS } from '@/lib/relics';

export default function MusicGallery() {
  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      padding:'60px 24px',
      fontFamily:'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        
        <div style={{ textAlign:'center', marginBottom:'60px' }}>
          <div style={{
            fontSize:'11px',
            letterSpacing:'4px',
            color:'#444',
            marginBottom:'16px'
          }}>
            THE HALL OF RELICS
          </div>
          <h1 style={{
            fontSize:'40px',
            fontFamily:'Georgia, serif',
            color:'#d4af37',
            margin:'0 0 16px 0'
          }}>
            Stormbreakers Archive
          </h1>
          <p style={{ fontSize:'16px', color:'#666' }}>
            Seven weapons. One calling. Choose your relic.
          </p>
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',
          gap:'32px'
        }}>
          {RELICS.map((relic) => (
            <Link 
              key={relic.id} 
              href={`/music/${relic.id}`}
              style={{ textDecoration:'none' }}
            >
              <div style={{
                background:'#0a0a0a',
                border:'1px solid #1a1a1a',
                borderRadius:'4px',
                overflow:'hidden',
                transition:'all 0.3s ease',
                cursor:'pointer'
              }}>
                <div style={{
                  width:'100%',
                  aspectRatio:'1/1',
                  backgroundImage:`url(${relic.cover})`,
                  backgroundSize:'cover',
                  backgroundPosition:'center',
                  backgroundColor:'#111'
                }}></div>
                
                <div style={{ padding:'20px' }}>
                  <div style={{
                    fontSize:'11px',
                    letterSpacing:'2px',
                    color:'#d4af37',
                    marginBottom:'8px'
                  }}>
                    {relic.subtitle}
                  </div>
                  <h3 style={{
                    fontSize:'18px',
                    fontFamily:'Georgia, serif',
                    color:'#fff',
                    margin:'0 0 12px 0'
                  }}>
                    {relic.title}
                  </h3>
                  <div style={{
                    fontSize:'12px',
                    color:'#666',
                    fontStyle:'italic'
                  }}>
                    {relic.scripture}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
