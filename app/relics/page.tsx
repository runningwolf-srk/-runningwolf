import Link from 'next/link'

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <div className="max-w-3xl mx-auto px-6 py-20">
        
        {/* Top Nav */}
        <div className="flex justify-between text-sm text-zinc-500 mb-16 font-sans">
          <Link href="/" className="hover:text-amber-500">← Home</Link>
          <span className="tracking-widest">HALL OF RELICS</span>
          <Link href="/saga" className="hover:text-amber-500">Iron Collide →</Link>
        </div>

        {/* Quote Block */}
        <div className="text-center py-24">
          <div className="w-24 h-px bg-amber-500/50 mx-auto mb-12"></div>
          
          <h1 className="text-3xl md:text-5xl font-serif text-amber-500 leading-relaxed mb-12">
            The horn does not promise<br />
            an easy battle. It calls the<br />
            faithful to stand.
          </h1>
          
          <div className="w-24 h-px bg-amber-500/50 mx-auto"></div>
        </div>

      </div>
    </main>
  )
}
