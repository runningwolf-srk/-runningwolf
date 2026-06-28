import { notFound } from 'next/navigation';
import Link from 'next/link';
import { RELICS } from '../../../src/lib/relics';

export async function generateStaticParams() {
  return RELICS.map((relic) => ({ slug: relic.id }));
}

export default function MusicTrack({ params }: { params: { slug: string } }) {
  const relic = RELICS.find(r => r.id === params.slug);
  
  if (!relic) {
    notFound();
  }

  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      padding:'60px 24px',
      fontFamily:'Georgia, serif'
    }}>
      <div style={{ maxWidth:'700px', margin:'0 auto' }}>
        <Link href="/music" style={{
          color:'#d4af37',
          textDecoration:'none',
          fontSize:'14px',
          fontFamily:'system-ui, sans-serif',
          display:'inline-block',
          marginBottom:'60px'
        }}>
          ← Back to Music
        </Link>
        <div style={{
          width:'100%',
          aspectRatio:'16/9',
          backgroundImage:`url(${relic.cover})`,
          backgroundSize:'cover',
          backgroundPosition:'center',
          backgroundColor:'#111',
          marginBottom:'40px',
          borderRadius:'4px',
          border:'1px solid #1a1a1a'
        }}></div>
        <h1 style={{
          fontSize:'48px',
          color:'#fff',
          margin:'0 0 16px 0',
          lineHeight:'1.1'
        }}>
          {relic.title}
        </h1>
        <div style={{
          fontSize:'14px',
          color:'#d4af37',
          marginBottom:'40px',
          fontFamily:'system-ui, sans-serif'
        }}>
          {relic.scripture}
        </div>
        <div style={{
          background:'#0a0a0a',
          border:'1px solid #1a1a1a',
          padding:'40px',
          borderRadius:'4px',
          textAlign:'center'
        }}>
          <div style={{ fontSize:'48px', marginBottom:'16px' }}>🎵</div>
          <p style={{ color:'#666', fontFamily:'system-ui, sans-serif' }}>
            YouTube player goes here
          </p>
        </div>
      </div>
    </div>
  );
}
