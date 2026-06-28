import { RELICS } from '../../lib/relics';

export default function Gallery() {
  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      padding:'60px 24px',
      fontFamily:'Georgia, serif'
    }}>
      <div style={{ maxWidth:'1000px', margin:'0 auto' }}>
        <div style={{
          fontSize:'12px',
          letterSpacing:'4px',
          color:'#d4af37',
          marginBottom:'40px',
          fontFamily:'system-ui, sans-serif'
        }}>
          THE VISUALS
        </div>
        <h1 style={{
          fontSize:'48px',
          color:'#d4af37',
          margin:'0 0 60px 0',
          letterSpacing:'3px'
        }}>
          GALLERY
        </h1>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill, minmax(250px, 1fr))',
          gap:'24px'
        }}>
          {RELICS.map((relic) => (
            <div key={relic.id} style={{
              background:'#0a0a0a',
              border:'1px solid #1a1a1a',
              borderRadius:'4px',
              overflow:'hidden'
            }}>
              <div style={{
                width:'100%',
                aspectRatio:'16/9',
                backgroundImage:`url(${relic.cover})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundColor:'#111'
              }}></div>
              <div style={{ padding:'16px' }}>
                <div style={{
                  fontSize:'11px',
                  color:'#666',
                  letterSpacing:'2px',
                  marginBottom:'4px',
                  fontFamily:'system-ui, sans-serif'
                }}>
                  {relic.subtitle}
                </div>
                <div style={{
                  fontSize:'16px',
                  color:'#fff',
                  letterSpacing:'1px'
                }}>
                  {relic.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
