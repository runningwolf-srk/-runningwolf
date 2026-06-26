import Link from 'next/link';

const relics = [
  { 
    slug: 'heaven-calling', 
    title: 'Heaven Is Calling', 
    hook: 'When every other voice falls silent, heaven still speaks.',
    bgImage: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=1200&q=80'
  },
  { 
    slug: 'iron-collide', 
    title: 'Iron Collide', 
    hook: 'Faith sharpened in the fire of resistance.',
    bgImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80'
  },
  { 
    slug: 'iron-collide-worship', 
    title: 'Iron Collide Worship', 
    hook: 'Where the battlefield becomes an altar.',
    bgImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80'
  },
  { 
    slug: 'blood-of-cross', 
    title: 'Blood of the Cross', 
    hook: 'Mercy written in sacrifice. Hope carried through suffering.',
    bgImage: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1200&q=80'
  },
  { 
    slug: 'horn-of-war', 
    title: 'Horn of War', 
    hook: 'The call to stand before the battle begins.',
    bgImage: 'https://images.unsplash.com/photo-1519563459339-59bb6d7f5e5e?w=1200&q=80'
  },
  { 
    slug: 'im-on-fire', 
    title: 'I\'m On Fire', 
    hook: 'Holy fire cannot be contained. It must be released.',
    bgImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80'
  },
  { 
    slug: 'spiritual-journey', 
    title: 'Spiritual Journey', 
    hook: 'Survival was never the goal. Purpose was.',
    bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80'
  }
]; // ← THIS LINE WAS MISSING IN YOUR FILE

export default function Page() {
  return (
    <div style={{
      background:'black',
      color:'white',
      minHeight:'100vh',
      padding:'100px 20px',
      fontFamily:'system-ui, sans-serif'
    }}>
      <div style={{maxWidth:'1000px',margin:'0 auto',textAlign:'center'}}>
        <h1 style={{
          fontSize:'60px',
          marginBottom:'20px',
          fontFamily:'Georgia, serif',
          fontWeight:'bold',
          letterSpacing:'2px'
        }}>
          HALL OF RELICS
        </h1>
        <p style={{
          fontSize:'18px',
          color:'#999',
          marginBottom:'60px',
          fontStyle:'italic'
        }}>
          A cinematic worship mythology database
        </p>
        
        <div style={{display:'grid',gap:'30px'}}>
          {relics.map((relic) => (
            <a 
              key={relic.slug}
              href={`/music/${relic.slug}`}
              style={{
                display:'block',
                height:'200px',
                borderRadius:'8px',
                overflow:'hidden',
                border:'1px solid #333',
                textDecoration:'none',
                position:'relative',
                backgroundImage:`url(${relic.bgImage})`,
                backgroundSize:'cover',
                backgroundPosition:'center'
              }}
            >
              <div style={{
                position:'absolute',
                top:0,
                left:0,
                right:0,
                bottom:0,
                background:'rgba(0,0,0,0.7)',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                padding:'30px',
                textAlign:'left'
              }}>
                <h2 style={{
                  fontSize:'32px',
                  margin:'0 0 10px 0',
                  color:'white',
                  fontFamily:'Georgia, serif',
                  fontWeight:'bold'
                }}>
                  {relic.title}
                </h2>
                <p style={{
                  color:'#ccc',
                  margin:0,
                  fontSize:'16px',
                  fontStyle:'italic'
                }}>
                  {relic.hook}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div style={{
          marginTop:'80px',
          paddingTop:'40px',
          borderTop:'1px solid #333'
        }}>
          <p style={{
            color:'#666',
            fontSize:'12px',
            letterSpacing:'2px'
          }}>
            SEVEN RELICS. ONE KINGDOM.
          </p>
        </div>
      </div>
    </div>
  );
}
