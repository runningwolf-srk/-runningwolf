import { notFound } from 'next/navigation';
import Link from 'next/link';

const relics = [
  { 
    slug: 'horn-of-war', 
    title: 'Horn of War', 
    tagline: 'The call to stand before the battle begins.',
    byLine: 'By His Call We Rise',
    bgImage: '/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Composed when silence felt like surrender.',
    story: [
      'Before the first sword was drawn, the horn sounded.',
      'Not to signal fear, but to awaken courage.',
      'When you hear that sound, you choose.',
      'Cower, or charge.'
    ],
    meaning: 'The horn does not ask if you are ready.',
    meaningType: 'unresolved'
  },
  { 
    slug: 'iron-collide', 
    title: 'Iron Collide', 
    tagline: 'Faith sharpened in the fire of resistance.',
    byLine: 'By His Strength We Endure',
    bgImage: '/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Born where comfort died.',
    story: [
      'Two blades. One forge. No mercy.',
      'Iron only strengthens when it strikes iron.',
      'Every trial was a hammer. Every enemy, an anvil.',
      'Stop praying for easy battles. Start praying for stronger steel.'
    ],
    meaning: 'The anvil knows your name.',
    meaningType: 'poetic'
  },
  { 
    slug: 'iron-collide-worship', 
    title: 'Iron Collide Worship', 
    tagline: 'Where the battlefield becomes an altar.',
    byLine: 'By His Presence We Surrender',
    bgImage: '/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Written on knees in war dirt.',
    story: [
      'The same battlefield. The same scars. A different sound.',
      'Where defiance once screamed, surrender now kneels.',
      'Not weakness. Weaponized worship.',
      'The enemy expected a sword. He got a song.'
    ],
    meaning: 'Some wars are won bowing.',
    meaningType: 'declarative'
  },
  { 
    slug: 'blood-of-cross', 
    title: 'Blood of the Cross', 
    tagline: 'Mercy written in sacrifice. Hope carried through suffering.',
    byLine: 'By His Blood We Are Redeemed',
    bgImage: '/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Written where the sky went dark.',
    story: [
      'Golgotha was not a defeat. It was an invasion.',
      'Hell celebrated for three days.',
      'Then the stone moved.',
      'Every drop was a declaration: "You are mine."'
    ],
    meaning: 'The grave is empty.',
    meaningType: 'unresolved'
  },
  { 
    slug: 'heaven-calling', 
    title: 'Heaven Is Calling', 
    tagline: 'When every other voice falls silent, heaven still speaks.',
    byLine: 'By His Voice We Are Known',
    bgImage: '/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Forged when worship became the only weapon.',
    story: [
      '"Heaven is calling out my name."',
      'Even in stillness, we are not forgotten.',
      'What once felt distant became the sound that draws near.',
      'Divine calling is not earned—it is answered.'
    ],
    meaning: 'God speaks most clearly when words fail.',
    meaningType: 'declarative'
  },
  { 
    slug: 'im-on-fire', 
    title: 'I\'m On Fire', 
    tagline: 'The flame of faith was never meant to stay hidden.',
    byLine: 'By His Fire We Are Ignited',
    bgImage: '/file_0000000065a071f5832301f52d11fb80.png',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Born when lukewarm became unbearable.',
    story: [
      'Tongues of fire. Hurricane wind.',
      'Dead religion catching flame.',
      'You cannot fake this fire. You can only carry it.',
      'The difference between a spark and a wildfire is surrender.'
    ],
    meaning: 'The fire does not ask permission.',
    meaningType: 'poetic'
  },
  { 
    slug: 'spiritual-journey', 
    title: 'Spiritual Journey', 
    tagline: 'Survival was never the goal. Purpose was.',
    byLine: 'By His Purpose We Are Led',
    bgImage: '/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Written in the middle of nowhere.',
    story: [
      'The road was longer than promised.',
      'The night, darker than expected.',
      'He was not lost. He was being led.',
      'The destination was never the point. The transformation was.'
    ],
    meaning: 'And the road continues...',
    meaningType: 'unresolved'
  },
];

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = relics.find(r => r.slug === params.slug);
  
  if (!relic) {
    notFound();
  }

  const currentIndex = relics.findIndex(r => r.slug === params.slug);
  const nextRelic = relics[currentIndex + 1] || relics[0];
  const prevRelic = relics[currentIndex - 1] || relics[relics.length - 1];

  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      fontFamily:'system-ui, -apple-system, sans-serif'
    }}>
      {/* Hero */}
      <div style={{
        height:'80vh',
        backgroundImage:`url(${relic.bgImage})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        position:'relative',
        display:'flex',
        alignItems:'flex-end'
      }}>
        <div style={{
          position:'absolute',
          top:0,left:0,right:0,bottom:0,
          background:'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.9) 100%)'
        }}></div>
        <div style={{
          position:'relative',
          padding:'0 24px 80px',
          maxWidth:'900px',
          margin:'0 auto',
          width:'100%'
        }}>
          <div style={{
            fontSize:'11px',
            color:'#555',
            marginBottom:'20px',
            letterSpacing:'4px'
          }}>
            RELIC {String(currentIndex + 1).padStart(2, '0')} / {String(relics.length).padStart(2, '0')}
          </div>
          <h1 style={{
            fontSize:'clamp(48px, 8vw, 88px)',
            margin:'0 0 20px 0',
            fontFamily:'Georgia, serif',
            fontWeight:'700',
            lineHeight:'0.9',
            textShadow:'0 4px 20px rgba(0,0,0,0.9)'
          }}>
            {relic.title}
          </h1>
          <p style={{
            fontSize:'20px',
            fontStyle:'italic',
            color:'#ccc',
            margin:'0 0 16px 0',
            maxWidth:'600px'
          }}>
            {relic.tagline}
          </p>
          <p style={{
            fontSize:'13px',
            color:'#666',
            margin:0,
            fontFamily:'Georgia, serif',
            letterSpacing:'1px'
          }}>
            {relic.byLine}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{
        maxWidth:'680px',
        margin:'0 auto',
        padding:'120px 24px'
      }}>
        
        {/* YouTube */}
        <div style={{marginBottom:'120px'}}>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${relic.youtubeId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{borderRadius:'2px'}}
          ></iframe>
        </div>

        {/* The Story */}
        <div style={{marginBottom:'100px'}}>
          <div style={{
            fontSize:'10px',
            color:'#444',
            marginBottom:'50px',
            letterSpacing:'3px',
            fontFamily:'monospace'
          }}>
            WRITTEN {relic.written} · {relic.origin}
          </div>
          {relic.story.map((line, i) => (
            <p key={i} style={{
              fontSize:'19px',
              lineHeight:'2.1',
              marginBottom:'32px',
              color:'#aaa',
              fontWeight:'300'
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Meaning - Varied */}
        <div style={{
          marginBottom:'120px',
          paddingTop:'50px',
          borderTop:'1px solid #111',
        }}>
          <p style={{
            fontSize: relic.meaningType === 'unresolved'? '18px' : '26px',
            lineHeight:'1.6',
            color:'#fff',
            margin:0,
            fontFamily:'Georgia, serif',
            fontStyle: relic.meaningType === 'poetic'? 'italic' : 'normal',
            fontWeight: relic.meaningType === 'unresolved'? '300' : '400',
            opacity: relic.meaningType === 'unresolved'? 0.7 : 1
          }}>
            {relic.meaning}
          </p>
        </div>

      </div>

      {/* SINGLE NAV SYSTEM */}
      <div style={{
        borderTop:'1px solid #111',
        padding:'50px 24px',
      }}>
        <div style={{
          maxWidth:'900px',
          margin:'0 auto',
          display:'grid',
          gridTemplateColumns:'1fr auto 1fr',
          alignItems:'center',
          gap:'40px'
        }}>
          <Link href={`/music/${prevRelic.slug}`} style={{
            color:'#555',
            textDecoration:'none',
            fontSize:'13px',
            letterSpacing:'1px'
          }}>
            ← {prevRelic.title.toUpperCase()}
          </Link>
          <Link href="/music" style={{
            color:'#777',
            textDecoration:'none',
            fontSize:'11px',
            letterSpacing:'3px',
            border:'1px solid #222',
            padding:'12px 24px'
          }}>
            HALL OF RELICS
          </Link>
          <Link href={`/music/${nextRelic.slug}`} style={{
            color:'#999',
            textDecoration:'none',
            fontSize:'13px',
            letterSpacing:'1px',
            textAlign:'right'
          }}>
            {nextRelic.title.toUpperCase()} →
          </Link>
        </div>
      </div>
    </div>
  );
        }
