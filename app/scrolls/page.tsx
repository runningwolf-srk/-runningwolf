import { RELICS } from '../../lib/relics';

export default function Scrolls() {
  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      padding:'60px 24px',
      fontFamily:'Georgia, serif'
    }}>
      <div style={{ maxWidth:'700px', margin:'0 auto' }}>
        <div style={{
          fontSize:'12px',
          letterSpacing:'4px',
          color:'#d4af37',
          marginBottom:'40px',
          fontFamily:'system-ui, sans-serif'
        }}>
          THE WORD
        </div>
        <h1 style={{
          fontSize:'48px',
          color:'#d4af37',
          margin:'0 0 60px 0',
          letterSpacing:'3px'
        }}>
          SCROLLS
        </h1>
        <div style={{ display:'flex', flexDirection:'column', gap:'40px' }}>
          {RELICS.map((relic) => (
            <div key={relic.id} style={{
              padding:'32px',
              background:'#0a0a0a',
              border:'1px solid #1a1a1a',
              borderLeft:'3px solid #d4af37',
              borderRadius:'4px'
            }}>
              <div style={{
                fontSize:'11px',
                color:'#666',
                letterSpacing:'2px',
                marginBottom:'8px',
                fontFamily:'system-ui, sans-serif'
              }}>
                {relic.scripture}
              </div>
              <div style={{
                fontSize:'24px',
                color:'#d4af37',
                marginBottom:'16px',
                letterSpacing:'2px'
              }}>
                {relic.title}
              </div>
              <p style={{
                fontSize:'18px',
                fontStyle:'italic',
                color:'#ccc',
                lineHeight:'1.6',
                margin:0
              }}>
                "{relic.prophecy}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
