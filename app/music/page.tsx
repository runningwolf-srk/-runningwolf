import Image from "next/image";
import Link from "next/link";

const hymns = [
  {
    slug: "heaven-calling",
    title: "Heaven Is Calling",
    cover: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tagline: "A Worship Anthem",
    story: "Written when worship was the only weapon left."
  },
  // Add more hymns here when ready:
  // {
  //   slug: "iron-collide",
  //   title: "Iron Collide",
  //   cover: "/iron-collide-cover.jpg",
  //   tagline: "Strength and perseverance through fire",
  //   story: "A battle anthem for when life hits you like hammer on anvil."
  // },
];

export default function MusicPage() {
  return (
    <main className="bg-[#0b0b0f] text-[#e8e6e3] min-h-screen">
      {/* HEADER */}
      <header className="bg-black/80 backdrop-blur-md border-b border-yellow-900/30 px-4 py-3 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-base tracking-wide text-yellow-500">
            Stormbreakers - RunningWolf
          </Link>
          <nav className="flex gap-5 text-xs md:text-sm">
            <Link href="/" className="hover:text-yellow-500">Home</Link>
            <Link href="/music" className="text-yellow-500">Music</Link>
            <Link href="/gallery" className="hover:text-yellow-500">Gallery</Link>
          </nav>
        </div>
      </header>

      {/* HALL OF RELICS */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-yellow-500 tracking-[0.3em] mb-3 font-semibold">
              HALL OF RELICS
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2" style={{fontFamily: 'Cinzel, serif', fontWeight: 900}}>
              The Hymns
            </h1>
            <p className="text-white/60">Each song is a weapon. Choose yours.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hymns.map((hymn) => (
              <div key={hymn.slug} className="bg-black border border-yellow-900/30 rounded-xl overflow-hidden shadow-xl shadow-yellow-900/10 hover:shadow-yellow-900/30 transition-all hover:-translate-y-1">
                <div className="relative aspect-square">
                  <Image src={hymn.cover} alt={hymn.title} fill className="object-cover" priority />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">{hymn.title}</h3>
                  <p className="text-sm text-white/70 mb-4 italic">{hymn.tagline}</p>
                  <p className="text-xs text-white/50 mb-6">{hymn.story}</p>
                  <div className="flex gap-3">
                    <Link 
                      href={`/music/${hymn.slug}`}
                      className="flex-1 bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded text-center text-sm transition-all hover:scale-105"
                    >
                      ▶️ Play
                    </Link>
                    <Link 
                      href={`/music/${hymn.slug}#story`}
                      className="flex-1 border border-yellow-600/60 hover:bg-yellow-600/10 text-yellow-500 py-2 px-4 rounded text-center text-sm transition-all"
                    >
                      📖 Story
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hymns.length === 1 && (
            <div className="text-center mt-16 py-12 border-t border-yellow-900/20">
              <p className="text-white/50 text-sm mb-4">More hymns are being forged in the fire...</p>
              <p className="text-yellow-500 text-xs tracking-[0.3em]">THE SAGA CONTINUES</p>
            </div>
          )}
        </div>
      </section>

      <footer className="bg-[#0b0b0f] py-8 text-center text-white/40 text-xs border-t border-yellow-900/20">
        <p>Stormbreakers © 2026 — JESSY MARQUEZ // RUNNINGWOLF</p>
      </footer>
    </main>
  );
}
