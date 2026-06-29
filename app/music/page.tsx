// app/music/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Seven Relics | RUNNINGWOLF",
  description: "A sealed archive of seven cinematic worship artifacts. Each relic forged in battle, scripture, and sound.",
};

const relics = [
  {
    slug: "horn-of-war",
    title: "Horn of War",
    subtitle: "The Battle Cry",
    track: "01 / 07",
    rune: "ᚺ",
    active: true
  },
  {
    slug: "iron-collide",
    title: "Iron Collide", 
    subtitle: "Sharpened Together",
    track: "02 / 07",
    rune: "ᚠ",
    active: true
  },
  {
    slug: "blood-of-the-cross",
    title: "Blood of the Cross",
    subtitle: "The Sacrifice", 
    track: "03 / 07",
    rune: "ᛉ",
    active: true
  },
  {
    slug: "white-horse",
    title: "White Horse",
    subtitle: "The Return",
    track: "04 / 07", 
    rune: "ᛋ",
    active: true
  },
  {
    slug: "crown-of-thorns",
    title: "Crown of Thorns",
    subtitle: "The King of Pain",
    track: "05 / 07",
    rune: "ᚾ",
    active: false
  },
  {
    slug: "lion-and-lamb", 
    title: "Lion and Lamb",
    subtitle: "The Paradox",
    track: "06 / 07",
    rune: "ᛚ",
    active: true
  },
  {
    slug: "seven-seals",
    title: "Seven Seals",
    subtitle: "The End and Beginning", 
    track: "07 / 07",
    rune: "ᛟ",
    active: false
  }
];

export default function HallOfRelics() {
  return (
    <main className="min-h-screen text-white antialiased relative z-0">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        
        <header className="text-center mb-16 md:mb-24">
          <p className="text-amber-500 text-xs md:text-sm tracking-[0.4em] mb-6 font-mono">
            RUNNINGWOLF ARCHIVE
          </p>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
            THE SEVEN RELICS
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            A sealed archive of cinematic worship artifacts. Each relic forged in battle, scripture, and sound.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2">
          {relics.map((relic) => (
            <Link 
              key={relic.slug}
              href={`/music/${relic.slug}`}
              className={`group relative bg-gradient-to-b from-gray-950/80 to-black/80 border border-gray-900 hover:border-amber-500/50 transition-all duration-500 p-8 md:p-10 ${
                !relic.active ? 'opacity-60' : ''
              }`}
            >
              <div className="absolute top-6 right-6 text-6xl md:text-7xl text-gray-900 group-hover:text-amber-500/10 transition-colors duration-700 font-black">
                {relic.rune}
              </div>
              
              <p className="text-xs text-amber-500/70 tracking-[0.3em] mb-4 font-mono relative z-10">
                {relic.track}
              </p>
              
              <h2 className="text-2xl md:text-3xl font-black mb-2 tracking-tight relative z-10 group-hover:text-amber-500 transition-colors">
                {relic.title}
              </h2>
              
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors relative z-10">
                {relic.subtitle}
              </p>

              {!relic.active && (
                <p className="text-xs text-gray-700 mt-4 tracking-widest relative z-10">
                  SEALED
                </p>
              )}

              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        <footer className="mt-16 md:mt-24 text-center">
          <div className="inline-block border-t border-gray-900 pt-8">
            <p className="text-xs text-gray-700 tracking-[0.3em] uppercase">
              Canon Sealed • 7 of 7
            </p>
          </div>
        </footer>

      </div>
    </main>
  );
}
