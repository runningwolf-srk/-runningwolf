import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'RunningWolf - Hall of Relics',
  description: 'Worship is Warfare. Seven weapons forged in fire.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#000' }}>
        <nav style={{
          background:'#000',
          borderBottom:'1px solid #1a1a1a',
          padding:'20px 24px',
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center'
        }}>
          <Link href="/" style={{ textDecoration:'none' }}>
            <div style={{
              fontSize:'16px',
              letterSpacing:'3px',
              color:'#d4af37',
              fontFamily:'Georgia, serif'
            }}>
              RUNNINGWOLF
            </div>
          </Link>
          <div style={{ display:'flex', gap:'32px', fontSize:'14px' }}>
            <Link href="/" style={{ color:'#fff', textDecoration:'none' }}>Home</Link>
            <Link href="/music" style={{ color:'#d4af37', textDecoration:'none' }}>Relics</Link>
            <Link href="/saga" style={{ color:'#fff', textDecoration:'none' }}>Saga</Link>
            <Link href="/gallery" style={{ color:'#fff', textDecoration:'none' }}>Gallery</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
