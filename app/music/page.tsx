import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      fontFamily:'system-ui, -apple-system, sans-serif'
    }}>
      {/* NAV */}
      <nav style={{
        borderBottom:'1px solid #111',
        padding:'16px 24px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <div style={{
          fontSize:'18px',
          fontFamily:'Georgia, serif',
          fontWeight:'700',
          color:'#d4af37'
        }}>
          Stormbreakers - RunningWolf
        </div>
        <div style={{ display:'flex', gap:'32px', fontSize:'14px' }}>
          <Link href="/" style={{ color:'#fff', textDecoration:'none' }}>Home</Link>
          <Link href="/music" style={{ color:'#777', textDecoration:'none' }}>Music</Link>
        </div>
      </nav>

      {/* HERO */}
      <div style={{
        maxWidth:'600px',
        margin:'0 auto',
        padding:'120px 24px',
        textAlign:'center'
      }}>
        <div style={{
          width:'180px',
          height:'180px',
          borderRadius:'50%',
          backgroundImage:'url(/wolf-logo.webp)', // REPLACE WITH YOUR LOGO PATH
          backgroundSize:'cover',
          backgroundPosition:'center',
          margin:'0 auto 32px',
          border:'2px solid #d4af37',
          boxShadow:'0 0 40px rgba(212, 175, 55, 0.3)'
        }}></div>

        <h1 style={{
          fontSize:'48px',
          margin:'0 0 8px 0',
          fontFamily:'Georgia, serif',
          color:'#d4af37'
        }}>
          Jessy Marquez
        </h1>
        
        <div style={{
          fontSize:'12px',
          letterSpacing:'4px',
          color:'#666',
          marginBottom:'32px'
        }}>
          RUNNINGWOLF
        </div>

        <p style={{
          fontSize:'18px',
          lineHeight:'1.7',
          color:'#999',
          marginBottom:'16px'
        }}>
          Cinematic worship and epic spiritual rock forged in fire.
        </p>
        
        <p style={{
          fontSize:'18px',
          lineHeight:'1.7',
          color:'#999',
          marginBottom:'48px'
        }}>
          <span style={{ color:'#d4af37', fontWeight:'600' }}>Stormbreakers</span> is for the addicted, the broken, the chosen.
        </p>

        {/* SINGLE BUTTON - NO GALLERY BUTTON */}
        <Link href="/music" style={{ textDecoration:'none' }}>
          <div style={{
            background:'#d4af37',
            color:'#000',
            padding:'18px 32px',
            borderRadius:'2px',
            fontSize:'16px',
            fontWeight:'600',
            display:'inline-flex',
            alignItems:'center',
            gap:'12px',
            transition:'all 0.2s ease'
          }}>
            <span>🎵</span> Enter Music
          </div>
        </Link>
      </div>

      {/* THE SAGA */}
      <div style={{
        borderTop:'1px solid #111',
        padding:'80px 24px',
        textAlign:'center'
      }}>
        <div style={{
          fontSize:'11px',
          letterSpacing:'4px',
          color:'#444',
          marginBottom:'24px'
        }}>
          THE SAGA
        </div>
        <p style={{
          fontSize:'28px',
          fontFamily:'Georgia, serif',
          fontStyle:'italic',
          color:'#d4af37',
          maxWidth:'600px',
          margin:'0 auto',
          lineHeight:'1.4'
        }}>
          "Worship is your weapon.<br/>
          The storm is your calling."
        </p>
      </div>

      {/* FOOTER */}
      <div style={{
        borderTop:'1px solid #111',
        padding:'40px 24px',
        textAlign:'center',
        fontSize:'12px',
        color:'#444'
      }}>
        Stormbreakers © 2026 — JESSY MARQUEZ // RUNNINGWOLF
      </div>
    </div>
  );
}
