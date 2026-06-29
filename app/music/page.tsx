// app/music/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Relics - Stormbreakers",
  description: "Cinematic worship artifacts. Each track is Scripture forged in sound.",
};

const relics = [
  {
    number: "01",
    slug: "horn-of-war",
    title: "Horn of War",
    subtitle: "The Battle Cry",
    verse: "Joel 2:1",
    verseText: "Blow the trumpet in Zion; sound the alarm on my holy hill.",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    status: "released"
  },
  {
    number: "02", 
    slug: "iron-collide",
    title: "Iron Collide",
    subtitle: "Sharpened Together", 
    verse: "Proverbs 27:17",
    verseText: "As iron sharpens iron, so one person sharpens another.",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    status: "released"
  },
  {
    number: "03",
    slug: "crown-of-thorns",
    title: "Crown of Thorns",
    subtitle: "The King of Pain",
    verse: "Matthew 27:29",
    verseText: "They twisted together a crown of thorns and set it on his head.",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL",
    status: "released"
  },
  {
    number: "04",
    slug: "lion-and-lamb",
    title: "Lion and Lamb",
    subtitle: "The Paradox",
    verse: "Revelation 5:5",
    verseText: "See, the Lion of the tribe of Judah has triumphed.",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL",
    status: "released"
  },
  {
    number: "05",
    slug: "blood-of-cross",
    title: "Blood of Cross",
    subtitle: "The Covenant", 
    verse: "Colossians 1:20",
    verseText: "Making peace through his blood, shed on the cross.",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL • SACRED",
    status: "released"
  },
  {
    number: "06",
    slug: "heaven-calling",
    title: "Heaven Calling",
    subtitle: "The Summoning", 
    verse: "1 Samuel 3:10",
    verseText: "Speak, for your servant is listening.",
    tags: "CINEMATIC WORSHIP • VIKING • ORCHESTRAL • CHORAL",
    status: "released"
  }
];

export default function MusicPage() {
  return (
    <main className="min-h-screen text-white antialiased relative z-0 flex flex-col bg-black">
      
      <header className="w-full border-b border-gray-900 bg-black/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-amber-500 font-black tracking-tight text-lg">
            Stormbreakers - RunningWolf
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/music" className="text-amber-500">Relics</Link>
            <Link href="/gallery" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center gap-1">
              Gallery <span className="text-amber-500">LOCKED</span>
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex-1 px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            The Relics
          </h1>
          <p className="text-gray-400 mb-16 text-lg">
            Scripture forged in sound. Click a relic to enter the experience.
          </p>

          <div className="space-y-6">
            {relics.map((relic) => (
              <Link 
                key={relic.slug}
                href={relic.status === 'released' ? `/music/${relic.slug}` : '#'}
                className={`block border border-gray-800 hover:border-amber-500/50 p-6 transition-colors group ${relic.status === 'sealed' ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-amber-500 font-mono mb-2">{relic.number} / 07</p>
                    <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-amber-500 transition-colors">
                      {relic.title}
                    </h2>
                    <p className="text-gray-500 mb-4">{relic.subtitle}</p>
                    <p className="text-xs text-gray-600 tracking-wider">{relic.tags}</p>
                  </div>
                  <span className="text-amber-500 text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
