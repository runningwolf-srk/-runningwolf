import Link from 'next/link'
import { notFound } from 'next/navigation'

const tracks = [
  {
    slug: "horn-of-war",
    relicNumber: 1,
    title: "Horn of War",
    subtitle: "The Battle Cry",
    verse: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    verseRef: "Joel 2:1",
    tags: ["CINEMATIC WORSHIP", "VIKING WAR HYMN", "ORCHESTRAL"],
    youtubeId: "your-youtube-id-here",
    saga: "Before the horn, there is silence. Not peace - silence. The moment before war breaks. God uses silence to prepare warriors."
  },
  {
    slug: "heaven-calling",
    relicNumber: 2,
    title: "Heaven Calling",
    subtitle: "A Worship Anthem",
    verse: "Your verse here",
    verseRef: "Reference",
    tags: ["WORSHIP"],
    youtubeId: "your-youtube-id-here", 
    saga: "Your saga text for relic 2..."
  },
  // Add relics 3-7 with same structure
]

type Props = {
  searchParams: { slug?: string }
}

export async function generateMetadata({ searchParams }: Props) {
  const track = tracks.find(t => t.slug === searchParams.slug)
  if (!track) return { title: 'Relic Not Found' }
  
  return {
    title: `${track.title} | The Armory`,
    description: track.subtitle
  }
}

export default function TrackPage({ searchParams }: Props) {
  const track = tracks.find(t => t.slug === searchParams.slug)
  
  if (!track) {
    notFound()
  }

  const currentIndex = tracks.findIndex(t => t.slug === searchParams.slug)
  const prevRelic = tracks[currentIndex - 1]
  const nextRelic = tracks[currentIndex + 1]

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Progress Header */}
        <div className="flex justify-between text-sm text-amber-500 mb-8">
          <span>0{track.relicNumber} / 07</span>
          <span>Journey Progress: 0{track.relicNumber} of 07 Relics</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-2">
          {track.title}
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          {track.subtitle}
        </p>

        {/* Verse Block */}
        <div className="border-l-2 border-amber-500 pl-6 mb-4">
          <p className="text-lg text-zinc-300 italic leading-relaxed">
            "{track.verse}"
          </p>
        </div>
        <p className="text-sm text-zinc-500 mb-4 ml-8">
          {track.verseRef}
        </p>

        {/* Tags */}
        <p className="text-xs text-zinc-600 uppercase tracking-widest mb-12">
          {track.tags.join(' • ')}
        </p>

        <div className="w-full h-px bg-zinc-800 mb-12"></div>

        {/* Relic Experience */}
        <h2 className="text-amber-500 font-bold mb-6 flex items-center gap-2">
          <span>▶</span> RELIC EXPERIENCE
        </h2>
        
        {/* YouTube Embed */}
        <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-12">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${track.youtubeId}`}
            title={track.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full h-px bg-zinc-800 mb-12"></div>

        {/* Saga Section */}
        <h2 className="text-amber-500 text-2xl font-bold mb-6">
          THE SILENCE
        </h2>
        <p className="text-zinc-300 leading-relaxed mb-12">
          {track.saga}
        </p>

        <div className="w-full h-px bg-zinc-800 mb-8"></div>

        {/* Relic Navigation */}
        <div className="flex justify-between text-zinc-500">
          {prevRelic ? (
            <Link href={`/music/track?slug=${prevRelic.slug}`} className="hover:text-amber-500">
              ← Relic {prevRelic.relicNumber}
            </Link>
          ) : <div></div>}
          
          {nextRelic ? (
            <Link href={`/music/track?slug=${nextRelic.slug}`} className="hover:text-amber-500">
              Relic {nextRelic.relicNumber} →
            </Link>
          ) : <div></div>}
        </div>

      </div>
    </main>
  )
}
