'use client'

import Link from 'next/link';
import { relics } from '@/lib/relics';

export default function HallOfRelics() {
  console.log('RELICS LOADED:', relics); // ← This will tell us if data exists
  
  if (!relics || relics.length === 0) {
    return <div style={{background:'#000',color:'#fff',padding:'100px'}}>
      ERROR: No relics found. Check lib/relics.ts
    </div>
  }

  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      fontFamily:'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        padding:'120px 24px 80px',
        textAlign:'center',
        borderBottom:'1px solid #111'
      }}>
        <h1 style={{
          fontSize:'48px',
          margin:'0 0 20px 0',
          fontFamily:'Georgia, serif'
        }}>
          HALL OF RELICS - {relics.length} FOUND
        </h1>
      </div>

      <div style={{ padding:'40px' }}>
        {relics.map((relic) => (
          <div key={relic.slug} style={{marginBottom:'20px', border:'1px solid #333', padding:'20px'}}>
            <h3>{relic.relicNumber}. {relic.title}</h3>
            <p>Slug: {relic.slug}</p>
            <Link href={`/music/${relic.slug}`} style={{color:'#0ff'}}>Go to relic →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
