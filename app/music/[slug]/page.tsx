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
    meaningType: 'silence' // declarative | metaphor | silence
  },
  { 
    slug: 'iron-collide', 
    title: 'Iron Collide', 
    tagline: 'Faith sharpened in the fire of resistance.',
    byLine: 'By His Strength We Endure',
    bgImage: '/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Born where comfort died and calling began.',
    story: [
      'Two blades. One forge. No mercy.',
      'Iron only strengthens when it strikes iron.',
      'Every trial was a hammer. Every enemy, an anvil.',
      'Stop praying for easy battles. Start praying for stronger steel.'
    ],
    meaning: 'The anvil knows your name.',
    meaningType: 'metaphor'
  },
  { 
    slug: 'iron-collide-worship', 
    title: 'Iron Collide Worship', 
    tagline: 'Where the battlefield becomes an altar.',
    byLine: 'By His Presence We Surrender',
    bgImage: '/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Written on knees in the same dirt where we once stood to fight.',
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
    origin: 'Written at the place where sky went dark and earth shook.',
    story: [
      'Golgotha was not a defeat. It was an invasion.',
      'Hell celebrated for three days. Then the stone moved.',
      'The blood that fell did not just cover sin—it conquered death.',
      'Every drop was a declaration: "You are mine."'
    ],
    meaning: 'The grave is empty.',
    meaningType: 'silence'
  },
  { 
    slug: 'heaven-calling', 
    title: 'Heaven Is Calling', 
    tagline: 'When every other voice falls silent, heaven still speaks.',
    byLine: 'By His Voice We Are Known',
    bgImage: '/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Forged when worship became the only weapon against silence.',
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
      'Tongues of fire. Hurricane wind. Dead religion catching flame.',
      'The same Spirit that raised Christ now burns in ordinary men.',
      'You cannot fake this fire. You can only carry it.',
      'The difference between a spark and a wildfire is surrender.'
    ],
    meaning: 'The fire does not ask permission.',
    meaningType: 'metaphor'
  },
  { 
    slug: 'spiritual-journey', 
    title: 'Spiritual Journey', 
    tagline: 'Survival was never the goal. Purpose was.',
    byLine: 'By His Purpose We Are Led',
    bgImage: '/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Written in the middle of nowhere, on the road between broken and whole.',
    story: [
      'The road was longer than promised. The night, darker than expected.',
      'But every detour had a purpose. Every delay, a lesson.',
      'He was not lost. He was being led.',
      'The destination was never the point. The transformation was.'
    ],
    meaning: 'You are not behind.',
    meaningType: 'silence'
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
        height:'75vh',
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
          padding:'0 24px 60px',
          maxWidth:'900px',
          margin:'0 auto',
          width:'100%'
        }}>
          <Link href="/music" style={{
            color:'#888',
            textDecoration:'none',
            fontSize:'14px',
            display:'inline-block',
            marginBottom:'24px',
            letterSpacing:'1px'
          }}>
            ← HALL OF RELICS
          </Link>
          <div style={{
            fontSize:'12px',
            color:'#666',
            marginBottom:'16px',
            letterSpacing:'3px'
          }}>
            RELIC {String(currentIndex + 1).padStart(2, '0')} / {String(relics.length).padStart(2, '0')}
          </div>
          <h1 style={{
            fontSize:'clamp(48px, 8vw, 80px)',
            margin:'0 0 16px 0',
            fontFamily:'Georgia, serif',
            fontWeight:'700',
            lineHeight:'0.95',
            textShadow:'0 4px 12px rgba(0,0,0,0.8)'
          }}>
            {relic.title}
          </h1>
          <p style={{
            fontSize:'20px',
            fontStyle:'italic',
            color:'#ccc',
            margin:'0 0 12px 0',
            maxWidth:'600px'
          }}>
            {relic.tagline}
          </p>
          <p style={{
            fontSize:'14px',
            color:'#777',
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
        padding:'100px 24px'
      }}>
        
        {/* YouTube */}
        <div style={{marginBottom:'100px'}}>
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
        <div style={{marginBottom:'80px'}}>
          <div style={{
            fontSize:'11px',
            color:'#555',
            marginBottom:'40px',
            letterSpacing:'2px',
            fontFamily:'monospace'
          }}>
            WRITTEN {relic.written} · {relic.origin}
          </div>
          {relic.story.map((line, i) => (
            <p key={i} style={{
              fontSize:'19px',
              lineHeight:'2',
              marginBottom:'28px',
              color:'#bbb',
              fontWeight:'300'
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Meaning */}
        <div style={{
          marginBottom:'100px',
          paddingTop:'40px',
          borderTop:'1px solid #1a1a1a',
        }}>
          <p style={{
            fontSize: relic.meaningType === 'silence'? '20px' : '24px',
            lineHeight:'1.5',
            color:'#fff',
            margin:0,
            fontFamily:'Georgia, serif',
            fontStyle: relic.meaningType === 'metaphor'? 'italic' : 'normal',
            fontWeight: relic.meaningType === 'silence'? '300' : '400'
          }}>
            {relic.meaning}
          </p>
        </div>

      </div>

      {/* Footer Nav - Clean */}
      <div style={{
        borderTop:'1px solid #1a1a1a',
        padding:'40px 24px',
      }}>
        <div style={{
          maxWidth:'900px',
          margin:'0 auto',
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          gap:'20px'
        }}>
          <Link href={`/music/${prevRelic.slug}`} style={{
            color:'#666',
            textDecoration:'none',
            fontSize:'14px',
            flex:'1',
            textAlign:'left'
          }}>
            ← {prevRelic.title}
          </Link>
          <Link href="/music" style={{
            color:'#888',
            textDecoration:'none',
            fontSize:'12px',
            letterSpacing:'2px',
            textAlign:'center'
          }}>
            HALL
          </Link>
          <Link href={`/music/${nextRelic.slug}`} style={{
            color:'#fff',
            textDecoration:'none',
            fontSize:'14px',
            flex:'1',
            textAlign:'right'
          }}>
            {nextRelic.title} →
          </Link>
        </div>
      </div>
    </div>
  );
      }
