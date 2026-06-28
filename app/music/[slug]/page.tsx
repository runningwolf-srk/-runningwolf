import { notFound } from 'next/navigation';
import Link from 'next/link';
import { RELICS } from '../../../src/lib/relics';

export async function generateStaticParams() {
  return RELICS.map((relic) => ({ slug: relic.id }));
}

export default function MusicTrack({ params }: { params: { slug: string } }) {
  const relic = RELICS.find(r => r.id === params.slug);
  if (!relic) notFound();
  return (
    <div style={{ background:'#000', color:'#fff', minHeight:'100vh', padding:'60px 24px', fontFamily:'Georgia, serif' }}>
      <div style={{ maxWidth:'700px', margin:'0 auto' }}>
        <Link href="/music" style={{ color:'#d4af37', textDecoration:'none', fontSize:'14px', fontFamily:'system-ui, sans-serif', display:'inline-block', marginBottom:'60px' }}>← Back to Music</Link>
        
        {/* Cover Art */}
        <div style={{ width:'100%', aspectRatio:'16/9', backgroundImage:`url(${relic.cover})`, backgroundSize:'cover', backgroundPosition:'center', backgroundColor:'#111', marginBottom:'40px', borderRadius:'4px', border:'1px solid #1a1a1a' }}></div>
        
        {/* Title */}
        <h1 style={{ fontSize:'48px', color:'#fff', margin:'0 0 16px 0', lineHeight:'1.1' }}>{relic.title}</h1>
        <div style={{ fontSize:'14px', color:'#d4af37', marginBottom:'40px', fontFamily:'system-ui, sans-serif' }}>{relic.scripture}</div>
        
        {/* BLOG: WHAT THIS TRACK IS ABOUT */}
        <div style={{ marginBottom:'40px' }}>
          <div style={{ fontSize:'12px', letterSpacing:'4px', color:'#d4af37', marginBottom:'16px', fontFamily:'system-ui, sans-serif' }}>
            WHAT THIS RELIC MEANS
          </div>
          <div style={{ background:'#0a0a0a', border:'1px solid #1a1a1a', borderLeft:'3px solid #d4af37', padding:'32px' }}>
            <p style={{ fontSize:'18px', fontStyle:'italic', color:'#d4af37', lineHeight:'1.8', margin:'0 0 24px 0' }}>
              "{relic.prophecy}"
            </p>
            <p style={{ fontSize:'16px', color:'#ccc', lineHeight:'1.7', margin:0, fontFamily:'system-ui, sans-serif' }}>
              This weapon was forged in the fire of {relic.subtitle.toLowerCase()}. 
              When you hear this track, you are not just listening — you are being called to war. 
              The sound carries the weight of the {relic.title} and the promise of {relic.scripture}.
            </p>
          </div>
        </div>

        {/* Music Player */}
        <div style={{ background:'#0a0a0a', border:'1px solid #1a1a1a', padding:'40px', borderRadius:'4px', textAlign:'center' }}>
          <div style={{ fontSize:'48px', marginBottom:'16px' }}>🎵</div>
          <p style={{ color:'#666', fontFamily:'system-ui, sans-serif' }}>YouTube player goes here</p>
        </div>
      </div>
    </div>
  );
}
