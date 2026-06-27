import Link from 'next/link';
import { RELICS } from '../../lib/relics';

export default function Saga() {
  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      padding:'60px 24px',
      fontFamily:'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth:'900px', margin:'0 auto' }}>
        
        <div style={{ textAlign:'center', marginBottom:'80px' }}>
          <div style={{
            fontSize:'11px',
            letterSpacing:'4px',
            color:'#444',
            marginBottom:'16px'
          }}>
            THE CHRONICLES
          </div>
          <h1 style={{
            fontSize:'48px',
            fontFamily:'Georgia, serif',
            color:'#d4af37',
            margin:'0 0 16px 0'
          }}>
            The Saga
          </h1>
          <p style={{ 
            fontSize:'18px', 
            color:'#999',
            lineHeight:'1.7',
            maxWidth:'600px',
            margin:'0 auto'
          }}>
            Seven weapons. Seven wounds. Seven victories.<br/>
            Each relic holds a chapter of the testimony.
          </p>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:'32px' }}>
          {RELICS.map((relic, index) => (
            <Link 
              key={relic.id} 
              href={`/saga/${relic.id}`}
              style={{ textDecoration:'none' }}
            >
              <div style={{
                display:'grid',
                gridTemplateColumns:'200px 1fr',
                gap:'32px',
                background:'#0a0a0a',
                border:'1px solid #1a1a1a',
                borderLeft:'4px solid #d4af37',
                padding:'0',
                borderRadius:'4px',
                overflow:'hidden',
                transition:'all 0.3s ease'
              }}>
                <div style={{
                  width:'200px',
                  height:'200px',
                  backgroundImage:`url(${relic.cover})`,
                  backgroundSize:'cover',
                  backgroundPosition:'center',
                  backgroundColor:'#111'
                }}></div>
                
                <div style={{ padding:'32px 32px 32px 0' }}>
                  <div style={{
                    fontSize:'11px',
                    letterSpacing:'3px',
                    color:'#d4af37',
                    marginBottom:'12px'
                  }}>
                    CHAPTER {index + 1} | {relic.subtitle}
                  </div>
                  <h2 style={{
                    fontSize:'32px',
                    fontFamily:'Georgia, serif',
                    color:'#fff',
                    margin:'0 0 8px 0'
                  }}>
                    {relic.title}
                  </h2>
                  <div style={{
                    fontSize:'14px',
                    color:'#666',
                    fontStyle:'italic',
                    marginBottom:'16px'
                  }}>
                    {relic.scripture}
                  </div>
                  <p style={{
                    fontSize:'16px',
                    color:'#999',
                    lineHeight:'1.6',
                    margin:0
                  }}>
                    "{relic.prophecy}"
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
