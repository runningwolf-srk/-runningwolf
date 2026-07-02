import Link from 'next/link'
import { relics } from './relics'

export default function ArmoryPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-500 text-sm uppercase mb-2">Hall of Relics</p>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-2">THE ARMORY</h1>
          <p className="text-zinc-500">Seven relics have awakened</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relics.map(relic => (
            <Link key={relic.slug} href={`/music/track?slug=${relic.slug}`}>
              <div className="border border-amber-500/30 p-6 hover:bg-amber-500/5 hover:border-amber-500 transition-all cursor-pointer h-full rounded-lg">
                <h2 className="text-2xl text-amber-500 mb-2">{relic.title}</h2>
                <p className="text-zinc-400 text-sm mb-4">{relic.artist}</p>
                <p className="text-zinc-500 text-sm mb-4 italic">"{relic.scripture}"</p>
                <div className="flex gap-2 flex-wrap">
                  {relic.tags.slice(0,2).map(tag => (
                    <span key={tag} className="text-xs border border-zinc-800 px-2 py-1 text-zinc-600 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/saga">
            <button className="border border-amber-500 text-amber-500 px-8 py-3 font-bold hover:bg-amber-500/10 transition-colors">
              READ THE SAGA →
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
