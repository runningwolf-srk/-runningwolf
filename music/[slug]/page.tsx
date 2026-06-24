import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const musicCatalog = [
  {
    slug: "heaven-calling",
    title: "Heaven Is Calling",
    youtubeId: "oxNauKuxg4Q",
    cover: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tagline: "A Worship Anthem",
    story: {
      written: "2023, outside a rehab center in Guymon, OK",
      origin: "The ruins weren’t a metaphor. I was walking through real broken homes, addiction, silent fathers. This hymn is what I heard when I stopped swinging and started listening.",
      lyric: "If the sky falls, I’ll still be singing",
      meaning: "For the ones who think God went silent. He didn’t. You just have to get quiet enough to hear Him calling."
    }
  },
];

export async function generateStaticParams() {
  return musicCatalog.map((track) => ({ slug: track.slug }));
}

export default function TrackPage({ params }: { params: { slug: string } }) {
  const track = musicCatalog.find((t) => t.slug === params.slug);
  if (!track) notFound();

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

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs text-yellow-500 tracking-[0.3em] mb-3 font-semibold">THE HYMNS</p>
            <h1 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-4" style={{fontFamily: 'Cinzel, serif', fontWeight: 900}}>
              {track.title}
            </h1>
            <p className="text-white/60 italic">{track.tagline}</p>
          </div>

          <div className="relative aspect-square max-w-2xl mx-auto rounded-xl overflow-hidden border border-yellow-900/30 shadow-2xl shadow-yellow-900/20 mb-12">
            <Image src={track.cover} alt={track.title} fill className="object-cover" priority />
          </div>

          <div className="max-w-3xl mx-auto mb-8">
            <h2 className="text-xl font-semibold mb-4 text-center text-white/80">Listen</h2>
            <div className="aspect-video w-full bg-black rounded-xl overflow-hidden border border-yellow-900/30">
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${track.youtubeId}`}
                title={track.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </div>

          <div className="text-center">
            <Link href="/music" className="text-yellow-500 hover:text-yellow-400 text-sm font-semibold">
              ← Back to Hall of Relics
            </Link>
          </div>
        </div>
      </section>

      <section id="story" className="bg-black py-16 px-4 border-t border-yellow-900/20 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-yellow-500 tracking-[0.3em] mb-4 text-center font-semibold">
            THE STORY BEHIND THE SONG
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{track.title}</h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <div>
              <p className="text-sm text-white/50 mb-1">Written</p>
              <p className="text-yellow-500 font-semibold">{track.story.written}</p>
            </div>
            <div>
              <p className="text-sm text-white/50 mb-2">Origin</p>
              <p>{track.story.origin}</p>
            </div>
            <div className="py-6 my-8 border-y border-yellow-900/30">
              <p className="text-lg md:text-xl text-yellow-500 font-semibold text-center" style={{fontFamily: 'Cinzel, serif'}}>
                &quot;{track.story.lyric}&quot;
              </p>
            </div>
            <div>
              <p className="text-sm text-white/50 mb-2">Meaning</p>
              <p>{track.story.meaning}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b0b0f] py-8 text-center text-white/40 text-xs border-t border-yellow-900/20">
        <p>Stormbreakers © 2026 — JESSY MARQUEZ // RUNNINGWOLF</p>
      </footer>
    </main>
  );
            }
