import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-zinc-200 flex flex-col items-center justify-center px-6">
      
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-amber-500/30 mb-8 bg-zinc-900">
      </div>

      <h1 className="text-5xl md:text-7xl font-serif text-amber-500 mb-4 text-center">
        STORMBREAKERS
      </h1>

      <p className="text-zinc-400 text-lg mb-2 text-center">
        RunningWolf - Jessy Marquez
      </p>

      <div className="w-24 h-px bg-amber-500/50 mx-auto my-6"></div>

      <p className="text-zinc-500 text-sm tracking-widest mb-12 text-center">
        Cinematic Worship • Spirit Led • 🔥🐺⚔️
      </p>

      <div className="space-y-4 w-full max-w-sm">
        <Link
          href="/relics"
          className="block w-full bg-amber-500 text-black text-center py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors"
        >
          LISTEN NOW
        </Link>

        <Link
          href="/saga"
          className="block w-full border-2 border-amber-500 text-amber-500 text-center py-4 rounded-lg font-bold text-lg hover:bg-amber-500/10 transition-colors"
        >
          READ THE SAGA
        </Link>
      </div>

      <p className="text-zinc-600 text-sm mt-16 text-center">
        By His call we rise.
      </p>

    </main>
  )
}
