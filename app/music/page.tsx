import Link from 'next/link';

const relics = [
  { 
    slug: 'heaven-calling', 
    title: 'Heaven Is Calling', 
    hook: 'When every other voice falls silent, heaven still speaks.',
    bgImage: '/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp'
  },
  { 
    slug: 'iron-collide', 
    title: 'Iron Collide', 
    hook: 'Faith sharpened in the fire of resistance.',
    bgImage: '/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp'
  },
  { 
    slug: 'iron-collide-worship', 
    title: 'Iron Collide Worship', 
    hook: 'Where the battlefield becomes an altar.',
    bgImage: '/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp'
  },
  { 
    slug: 'blood-of-cross', 
    title: 'Blood of the Cross', 
    hook: 'Mercy written in sacrifice. Hope carried through suffering.',
    bgImage: '/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp'
  },
  { 
    slug: 'horn-of-war', 
    title: 'Horn of War', 
    hook: 'The call to stand before the battle begins.',
    bgImage: '/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp'
  },
  { 
    slug: 'im-on-fire', 
    title: 'I\'m On Fire', 
    hook: 'Holy fire cannot be contained. It must be released.',
    bgImage: '/file_0000000065a071f5832301f52d11fb80.png' // ← YOUR NEW FIRE ART
  },
  { 
    slug: 'spiritual-journey', 
    title: 'Spiritual Journey', 
    hook: 'Survival was never the goal. Purpose was.',
    bgImage: '/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp'
  },
];

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
                height:'280px',
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
                background:'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-end',
                padding:'30px',
                textAlign:'left'
              }}>
                <h2 style={{
                  fontSize:'36px',
                  margin:'0 0 10px 0',
                  color:'white',
                  fontFamily:'Georgia, serif',
                  fontWeight:'bold',
                  textShadow:'2px 2px 4px rgba(0,0,0,0.8)'
                }}>
                  {relic.title}
                </h2>
                <p style={{
                  color:'#ddd',
                  margin:0,
                  fontSize:'16px',
                  fontStyle:'italic',
                  textShadow:'1px 1px 2px rgba(0,0,0,0.8)'
                }}>
                  {relic.hook}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
