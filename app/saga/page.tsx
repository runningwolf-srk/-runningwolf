import Link from 'next/link';
import { RELICS } from '../../lib/relics';

export default function SagaList() {
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
          THE TESTIMONY
        </div>
        <h1 style={{
          fontSize:'48px',
          color:'#d4af37',
          margin:'0 0 60px 0',
          letterSpacing:'3px'
        }}>
          THE SAGA
        </h1>
        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          {RELICS.map((relic) => (
            <Link 
              key={relic.id} 
              href={`/saga/${relic.id}`}
              style={{
                display:'flex',
                alignItems:'center',
                gap:'24px',
                padding:'24px',
                background:'#0a0a0a',
                border:'1px solid #1a1a1a',
                textDecoration:'none'
              }}
            >
              <div style={{
                width:'80px',
                height:'80px',
                backgroundImage:`url(${relic.cover})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundColor:'#111',
                border:'1px solid #1a1a1a',
                flexShrink:0
              }}></div>
              <div style={{ flex:1 }}>
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
                  fontSize:'20px',
                  color:'#fff',
                  letterSpacing:'2px'
                }}>
                  {relic.title}
                </div>
                <div style={{
                  fontSize:'12px',
                  color:'#d4af37',
                  marginTop:'4px',
                  fontFamily:'system-ui, sans-serif'
                }}>
                  {relic.scripture}
                </div>
              </div>
              <div style={{ fontSize:'24px', color:'#333' }}>→</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
