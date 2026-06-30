// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <header className="w-full border-b border-gray-900 bg-black/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-amber-500 font-black tracking-tight text-lg">
            Stormbreakers - RunningWolf
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-amber-500">
              Home
            </Link>
            <Link href="/saga" className="text-gray-400 hover:text-white transition-colors">
              Saga
            </Link>
            <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
              Gallery
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="relative mb-8">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-amber-500/60 p-1 bg-black shadow-[0_0_40px_rgba(245,158,11,0.25)] overflow-hidden">
            <img 
              src="/729068345_1706992463868756_7233760520950384832_n~2.jpg" 
              alt="RunningWolf" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-amber-500 mb-2 tracking-tight">
          Jessy Marquez
        </h1>
        <p className="text-gray-500 text-sm tracking-[0.3em] mb-8">
          RUNNINGWOLF
        </p>

        <p className="max-w-xl text-gray-300 text-lg leading-relaxed mb-2">
          Cinematic worship and epic spiritual rock forged in fire.
        </p>
        <p className="max-w-xl text-gray-300 text-lg leading-relaxed mb-12">
          <span className="text-amber-500 font-semibold">Stormbreakers</span> is for the addicted, the broken, the chosen.
        </p>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <Link 
            href="/saga" 
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span className="text-xl">⚔️</span> Enter The Saga
          </Link>
          <Link 
            href="/gallery" 
            className="w-full border border-amber-500/50 hover:bg-amber-500/10 text-amber-500 font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span className="text-xl">🖼️</span> View the Gallery
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-amber-500 tracking-[0.4em] mb-6">THE SAGA</p>
          <div className="border-t border-gray-800 w-24 mx-auto mb-6"></div>
          <blockquote className="text-2xl md:text-3xl font-black text-amber-500 leading-tight">
            "Worship is your weapon.<br />
            The storm is your calling."
          </blockquote>
          <div className="border-t border-gray-800 w-24 mx-auto mt-6"></div>
        </div>
      </section>

      <footer className="border-t border-gray-900 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs text-gray-600">
            Stormbreakers © 2026 — JESSY MARQUEZ // RUNNINGWOLF
          </p>
        </div>
      </footer>
    </main>
  );
}
