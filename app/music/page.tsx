// app/music/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music - Stormbreakers",
  description: "Stormbreakers tracks: Horn of War Mahalla, Iron Collide Hybrid.",
};

export default function MusicPage() {
  return (
    <main className="min-h-screen text-white antialiased relative z-0 flex flex-col">
      
      <header className="w-full border-b border-gray-900 bg-black/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-amber-500 font-black tracking-tight text-lg">
            Stormbreakers - RunningWolf
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/music" className="text-amber-500">Music</Link>
            <Link href="/gallery" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center gap-1">
              Gallery <span className="text-amber-500">LOCKED</span>
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex-1 px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-4xl md:text-6xl font-black text-amber-500 mb-4 text-center tracking-tight">
            THE SOUND
          </h1>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Cinematic worship. Epic spiritual rock. Forged in fire.
          </p>

          <div className="space-y-12">
            
            {/* Horn of War */}
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                Horn of War <span className="text-amber-500">Mahalla</span>
              </h2>
              <p className="text-gray-400 mb-6 text-sm tracking-[0.2em]">THE BATTLE CRY</p>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/REPLACE_WITH_YOUR_ID_1"
                  title="Horn of War - Mahalla"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Iron Collide */}
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                Iron Collide <span className="text-amber-500">Hybrid</span>
              </h2>
              <p className="text-gray-400 mb-6 text-sm tracking-[0.2em]">WHERE WORSHIP MEETS WAR</p>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/REPLACE_WITH_YOUR_ID_2"
                  title="Iron Collide - Hybrid"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
