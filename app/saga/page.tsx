import { notFound } from 'next/navigation';
import Link from 'next/link';
import { RELICS } from '../../../src/lib/relics';

export async function generateStaticParams() {
  return RELICS.map((relic) => ({ slug: relic.id }));
}

export default function SagaChapter({ params }: { params: { slug: string } }) {
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
        <Link href="/saga" style={{
          color:'#d4af37',
          textDecoration:'none',
          fontSize:'14px',
          fontFamily:'system-ui, sans-serif',
          display:'inline-block',
          marginBottom:'60px'
        }}>
          ← Back to The Saga
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
        <div style={{
          fontSize:'11px',
          letterSpacing:'4px',
          color:'#d4af37',
          marginBottom:'16px',
          fontFamily:'system-ui, sans-serif'
        }}>
          {relic.subtitle} | {relic.scripture}
        </div>
        <h1 style={{
          fontSize:'56px',
          color:'#fff',
          margin:'0 0 40px 0',
          lineHeight:'1.1'
        }}>
          {relic.title}
        </h1>
        <div style={{
          background:'#0a0a0a',
          border:'1px solid #1a1a1a',
          borderLeft:'3px solid #d4af37',
          padding:'24px',
          marginBottom:'40px',
          borderRadius:'4px'
        }}>
          <p style={{
            fontSize:'18px',
            fontStyle:'italic',
            color:'#d4af37',
            lineHeight:'1.6',
            margin:0
          }}>
            "{relic.prophecy}"
          </p>
        </div>
        <div style={{
          fontSize:'18px',
          lineHeight:'1.8',
          color:'#ccc'
        }}>
          <p>Your testimony for {relic.title} goes here.</p>
          <p>This is where you tell the story behind the weapon.</p>
        </div>
      </div>
    </div>
  );
}
