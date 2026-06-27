import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getRelicBySlug, getAdjacentRelics, relics } from '@/lib/relics';

export async function generateStaticParams() {
  return relics.map(relic => ({ slug: relic.slug }));
}

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = getRelicBySlug(params.slug);
  if (!relic) notFound();

  const { prev, next } = getAdjacentRelics(params.slug);

  return (
    <div style={{ background:'#000', color:'#fff', minHeight:'100vh', fontFamily:'system-ui, -apple-system, sans-serif' }}>
      
      {/* HERO */}
      <div style={{
        height:'85vh',
        backgroundImage:`url(${relic.bgImage})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        position:'relative',
        display:'flex',
        alignItems:'flex-end'
      }}>
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.95) 100%)'
        }}></div>
        <div style={{ position:'relative', padding:'0 24px 80px', maxWidth:'900px', margin:'0 auto', width:'100%' }}>
          <div style={{ fontSize:'11px', color:'#555', marginBottom:'20px', letterSpacing:'4px' }}>
            RELIC {String(relic.relicNumber).padStart(2, '0')} / {String(relics.length).padStart(2, '0')}
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
          <p style={{ fontSize:'20px', fontStyle:'italic', color:'#ccc', margin:'0 0 16px 0', maxWidth:'600px' }}>
            {relic.tagline}
          </p>
          <p style={{ fontSize:'13px', color:'#666', margin:0, fontFamily:'Georgia, serif', letterSpacing:'1px' }}>
            {relic.byLine}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth:'680px', margin:'0 auto', padding:'120px 24px' }}>
        
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${relic.youtubeId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius:'2px', marginBottom:'120px' }}
        />

        <div style={{ marginBottom:'100px' }}>
          <div style={{ fontSize:'10px', color:'#444', marginBottom:'50px', letterSpacing:'3px', fontFamily:'monospace' }}>
            WRITTEN {relic.written} · {relic.origin}
          </div>
          {relic.story.map((line, i) => (
            <p key={i} style={{ fontSize:'19px', lineHeight:'2.1', marginBottom:'32px', color:'#aaa', fontWeight:'300' }}>
              {line}
            </p>
          ))}
        </div>

        <div style={{ paddingTop:'50px', borderTop:'1px solid #111', marginBottom:'120px' }}>
          <p style={{
            fontSize: relic.meaningType === 'unresolved'? '18px' : '26px',
            lineHeight:'1.6',
            color:'#fff',
            margin:0,
            fontFamily:'Georgia, serif',
            fontStyle: relic.meaningType === 'metaphor'? 'italic' : 'normal',
            fontWeight: relic.meaningType === 'unresolved'? '300' : '400',
            opacity: relic.meaningType === 'unresolved'? 0.7 : 1
          }}>
            {relic.meaning}
          </p>
        </div>

      </div>

      {/* NAV - SINGLE SYSTEM ONLY */}
      <div style={{ borderTop:'1px solid #111', padding:'50px 24px' }}>
        <div style={{ maxWidth:'900px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center', gap:'40px' }}>
          <Link href={`/music/${prev.slug}`} style={{ color:'#555', textDecoration:'none', fontSize:'13px', letterSpacing:'1px' }}>
            ← {prev.title.toUpperCase()}
          </Link>
          <Link href="/music" style={{ color:'#777', textDecoration:'none', fontSize:'11px', letterSpacing:'3px', border:'1px solid #222', padding:'12px 24px' }}>
            HALL OF RELICS
          </Link>
          <Link href={`/music/${next.slug}`} style={{ color:'#999', textDecoration:'none', fontSize:'13px', letterSpacing:'1px', textAlign:'right' }}>
            {next.title.toUpperCase()} →
          </Link>
        </div>
      </div>
    </div>
  );
}
