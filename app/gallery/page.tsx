import Link from 'next/link';
import { RELICS } from '../../lib/relics';

export default function Gallery() {
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
            THE CHRONICLES
          </div>
          <h1 style={{
            fontSize:'40px',
            fontFamily:'Georgia, serif',
            color:'#d4af37',
            margin:'0 0 16px 0'
          }}>
            Gallery of Relics
          </h1>
          <p style={{ fontSize:'16px', color:'#666' }}>
            The visions behind the weapons. Each cover art holds a prophecy.
          </p>
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))',
          gap:'24px'
        }}>
          {RELICS.map((relic) => (
            <Link 
              key={relic.id} 
              href={`/saga/${relic.id}`}
              style={{ textDecoration:'none' }}
            >
              <div style={{
                background:'#0a0a0a',
                border:'1px solid #1a1a1a',
                borderRadius:'4px',
                overflow:'hidden'
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
                    margin:0
                  }}>
                    {relic.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
