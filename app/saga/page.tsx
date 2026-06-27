import Link from 'next/link';

const CHAPTERS = [
  {
    id: 'darkness',
    number: 'I',
    title: 'The Darkness',
    subtitle: 'Where it began',
    excerpt: 'Addiction. Brokenness. The valley of dry bones.'
  },
  {
    id: 'crossroads',
    number: 'II',
    title: 'The Crossroads',
    subtitle: 'The moment of choice',
    excerpt: 'When heaven collided with hell in my living room.'
  },
  {
    id: 'calling',
    number: 'III',
    title: 'The Calling',
    subtitle: 'RunningWolf is born',
    excerpt: 'From death to life. From addict to apostle.'
  },
  {
    id: 'stormbreakers',
    number: 'IV',
    title: 'The Stormbreakers',
    subtitle: 'Forging the weapons',
    excerpt: 'Why worship is warfare. Why the songs exist.'
  },
  {
    id: 'journey',
    number: 'V',
    title: 'The Journey Continues',
    subtitle: 'Where we go from here',
    excerpt: 'The pack is gathering. The storm is rising.'
  }
];

export default function Saga() {
  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      padding:'60px 24px',
      fontFamily:'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth:'800px', margin:'0 auto' }}>
        
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
            This is not my story. It's His story written in my scars.<br/>
            Five chapters. One redemption.
          </p>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:'24px' }}>
          {CHAPTERS.map((chapter) => (
            <Link 
              key={chapter.id} 
              href={`/saga/${chapter.id}`}
              style={{ textDecoration:'none' }}
            >
              <div style={{
                background:'#0a0a0a',
                border:'1px solid #1a1a1a',
                borderLeft:'4px solid #d4af37',
                padding:'32px',
                borderRadius:'4px',
                transition:'all 0.3s ease'
              }}>
                <div style={{
                  fontSize:'11px',
                  letterSpacing:'3px',
                  color:'#d4af37',
                  marginBottom:'12px'
                }}>
                  CHAPTER {chapter.number}
                </div>
                <h2 style={{
                  fontSize:'32px',
                  fontFamily:'Georgia, serif',
                  color:'#fff',
                  margin:'0 0 8px 0'
                }}>
                  {chapter.title}
                </h2>
                <div style={{
                  fontSize:'14px',
                  color:'#999',
                  fontStyle:'italic',
                  marginBottom:'12px'
                }}>
                  {chapter.subtitle}
                </div>
                <p style={{
                  fontSize:'16px',
                  color:'#666',
                  lineHeight:'1.6',
                  margin:0
                }}>
                  {chapter.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
