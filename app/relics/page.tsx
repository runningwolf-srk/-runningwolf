import Link from 'next/link'

const relics = [
  {
    id: 1,
    title: "HORN OF WAR",
    subtitle: "The Battle Cry Relic",
    verse: "Joel 2:1",
    excerpt: "The horn does not promise an easy battle. It calls the faithful to stand."
  },
  {
    id: 2,
    title: "HEAVEN CALLING",
    subtitle: "The Ascent Relic",
    verse: "Revelation 4:1",
    excerpt: "Come up here, and I will show you what must take place."
  },
  {
    id: 3,
    title: "IRON COLLIDE",
    subtitle: "The Choice Relic",
    verse: "Joshua 24:15",
    excerpt: "Choose this day whom you will serve."
  },
  {
    id: 4,
    title: "SPIRITUAL JOURNEY",
    subtitle: "The Path Relic",
    verse: "Psalm 119:105",
    excerpt: "Your word is a lamp to my feet and a light to my path."
  },
  {
    id: 5,
    title: "BLOOD OF CROSS",
    subtitle: "The Sacrifice Relic",
    verse: "Hebrews 9:22",
    excerpt: "Without the shedding of blood there is no forgiveness."
  },
  {
    id: 6,
    title: "I'M ON FIRE",
    subtitle: "The Wildfire Relic",
    verse: "Matthew 3:11",
    excerpt: "He will baptize you with the Holy Spirit and fire."
  }
]

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex justify-between text-sm text-zinc-500 mb-24 tracking-widest font-sans">
          <Link href="/" className="hover:text-amber-500">← RUNNINGWOLF</Link>
          <span>HALL OF RELICS</span>
          <Link href="/saga" className="hover:text-amber-500">Saga →</Link>
        </div>

        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-serif text-amber-500 mb-4">RELICS</h1>
          <p className="text-zinc-500">Click a relic to enter its meaning</p>
          <div className="w-24 h-px bg-amber-500/50 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relics.map((relic) => (
            <Link
              key={relic.id}
              href={`/relics/${relic.id}`}
              className="block border border-zinc-800 rounded-lg p-8 hover:border-amber-500 hover:bg-zinc-900/30 transition-all cursor-pointer"
            >
              <p className="text-amber-500 text-xs tracking-[0.3em] mb-3 font-sans">
                RELIC {String(relic.id).padStart(2, '0')}
              </p>
              <h2 className="text-2xl font-serif text-white mb-2 hover:text-amber-500 transition-colors">
                {relic.title}
              </h2>
              <p className="text-zinc-500 text-sm mb-6 font-sans">
                {relic.subtitle}
              </p>
              <div className="border-l-2 border-zinc-800 pl-4">
                <p className="text-zinc-400 text-sm italic font-serif mb-1">
                  "{relic.excerpt}"
                </p>
                <p className="text-amber-500/70 text-xs font-sans">{relic.verse}</p>
              </div>
              <p className="text-amber-500 text-sm mt-6 font-sans">
                Enter the Relic →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
