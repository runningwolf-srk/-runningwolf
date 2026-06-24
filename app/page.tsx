import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#0b0b0f] text-[#e8e6e3] min-h-screen">
      <header className="bg-black/80 backdrop-blur-md border-b border-yellow-900/30 px-4 py-3 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-bold text-base tracking-wide text-yellow-500">
            Stormbreakers - RunningWolf
          </span>
          <nav className="flex gap-5 text-xs md:text-sm">
            <Link href="/" className="text-yellow-500">Home</Link>
            <Link href="/music" className="hover:text-yellow-500">Music</Link>
            <Link href={`/${hymn.slug}#story`}>📖 Story</Link>
            <Link href="/gallery" className="hover:text-yellow-500">Gallery</Link>
          </nav>
        </div>
      </header>

      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-2 border-yellow-600/60 shadow-xl shadow-yellow-900/30 mb-4">
            <Image 
              src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
              alt="RunningWolf"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-2" style={{fontFamily: 'Cinzel, serif', fontWeight: 900}}>
            Jessy Marquez
          </h1>
          <p className="text-sm text-white/60 tracking-[0.3em] mb-5">
            RUNNINGWOLF
          </p>

          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Cinematic worship and epic spiritual rock forged in fire. 
            <span className="text-yellow-500 font-semibold"> Stormbreakers</span> is for the addicted, the broken, the chosen.
          </p>
          
          {/* DUAL CTA - Choose your path */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/music" 
              className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg text-base transition-all hover:scale-105 shadow-lg shadow-yellow-900/40"
            >
              🎵 Enter Music
            </Link>
            <Link 
              href="/gallery" 
              className="border border-yellow-600/60 hover:bg-yellow-600/10 text-yellow-500 font-semibold py-3 px-8 rounded-lg text-base transition-all"
            >
              🖼️ View the Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* THE SAGA - shortened for focus */}
      <section className="bg-black py-12 px-4 border-t border-yellow-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-yellow-500 tracking-[0.3em] mb-4 font-semibold">
            THE SAGA
          </p>
          <p className="text-lg text-yellow-500 font-semibold py-4 border-y border-yellow-900/30 max-w-xl mx-auto" style={{fontFamily: 'Cinzel, serif'}}>
            &quot;Worship is your weapon.<br/>The storm is your calling.&quot;
          </p>
          <div className="mt-6">
            <Link href="/stories" className="text-yellow-500 hover:text-yellow-400 text-sm">
              Read the full story →
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b0b0f] py-6 text-center text-white/40 text-xs border-t border-yellow-900/20">
        <p>Stormbreakers © 2026 — JESSY MARQUEZ // RUNNINGWOLF</p>
      </footer>
    </main>
  );
}
