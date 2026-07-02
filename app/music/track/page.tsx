import { relics } from '@/app/music/relics'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function RelicPage({ searchParams }: { searchParams: { slug: string } }) {
  const relic = relics.find(r => r.slug === searchParams.slug)
  
  if (!relic) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/music">
          <button className="text-amber-500 mb-8 hover:text-amber-400">← THE ARMORY</button>
        </Link>

        <div className="text-center mb-8">
          <p className="text-amber-500 text-sm uppercase mb-2">Hall of Relics</p>
          <h1 className="text-4xl font-bold mb-2">{relic.title}</h1>
          <p className="text-zinc-400">{relic.artist}</p>
        </div>

        <div className="mb-8 rounded-lg overflow-hidden border border-zinc-800">
          <iframe 
            width="100%" 
            height="315" 
            src={`https://www.youtube.com/embed/${relic.youtubeId}`} 
            title={relic.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full aspect-video"
          />
        </div>

        <div className="border-l-4 border-amber-500 pl-4 mb-8 bg-zinc-900/50 py-4 rounded-r">
          <p className="text-zinc-300 italic">"{relic.description}"</p>
          <p className="text-amber-500 text-sm mt-2">{relic.scripture}</p>
        </div>

        <div className="flex gap-2 mb-12 flex-wrap">
          {relic.tags.map(tag => (
            <span key={tag} className="text-xs border border-zinc-700 px-3 py-1 text-zinc-500 rounded">{tag}</span>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-serif text-white mb-4">{relic.loreTitle}</h2>
          <p className="text-zinc-300 leading-loose font-sans">{relic.lore}</p>
        </div>

        <div className="text-center">
          <Link href="/saga" className="text-zinc-500 hover:text-amber-500 text-sm">
            Read the full saga → THE CODEX
          </Link>
        </div>
      </div>
    </main>
  )
}
