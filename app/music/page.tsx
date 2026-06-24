import Link from "next/link";
import Image from "next/image";

const hymns = [
  {
    slug: "heaven-calling",
    title: "Heaven Is Calling",
    cover: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tagline: "A Worship Anthem"
  },
];

export default function MusicPage() {
  return (
    <main className="bg-[#0b0b0f] text-[#e8e6e3] min-h-screen">
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

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-xs text-yellow-500 tracking-[0.3em] mb-4 font-semibold">HALL OF RELICS</p>
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-4" style={{fontFamily: 'Cinzel, serif', fontWeight: 900}}>
            THE HYMNS
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            These are not songs. These are weapons forged in fire for the war you’re in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hymns.map((hymn) => (
            <div key={hymn.slug} className="bg-black/60 border border-yellow-900/30 rounded-xl overflow-hidden hover:border-yellow-600/60 transition-all duration-300">
              <div className="relative aspect-square">
                <Image src={hymn.cover} alt={hymn.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-yellow-500 mb-1" style={{fontFamily: 'Cinzel, serif'}}>
                  {hymn.title}
                </h3>
                <p className="text-white/50 text-sm italic mb-4">{hymn.tagline}</p>
                <div className="flex gap-3">
                  <Link href={`/music/${hymn.slug}`} className="flex-1 bg-yellow-500 text-black text-center py-2 rounded-lg font-semibold text-sm hover:bg-yellow-400">
                    ▶️ Play
                  </Link>
                  <Link href={`/music/${hymn.slug}#story`} className="flex-1 bg-white/10 text-white text-center py-2 rounded-lg font-semibold text-sm hover:bg-white/20">
                    📖 Story
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#0b0b0f] py-8 text-center text-white/40 text-xs border-t border-yellow-900/20">
        <p>Stormbreakers © 2026 — JESSY MARQUEZ // RUNNINGWOLF</p>
      </footer>
    </main>
  );
}
