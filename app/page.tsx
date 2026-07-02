import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        
        {/* Avatar */}
        <div className="w-48 h-48 rounded-full mx-auto mb-8 border-2 border-amber-500/30 overflow-hidden">
          <img
            src="/avatar.jpg"
            alt="RunningWolf - Stormbreaker"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-amber-500 mb-4 font-serif">
          STORMBREAKERS
        </h1>
        
        <p className="text-zinc-400 text-lg mb-2">
          RunningWolf - Jessy Marquez
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-amber-500/50 mx-auto my-6"></div>

        {/* Tagline */}
        <p className="text-zinc-500 mb-12">
          Cinematic Worship • Spirit Led • 🔥🐺⚔️
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full">
          <Link href="https://youtube.com/@your-channel">
            <button className="bg-amber-500 text-black px-8 py-3 w-full font-bold text-lg hover:bg-amber-400 transition-colors">
              LISTEN NOW
            </button>
          </Link>
          
          <Link href="/music">
            <button className="border border-amber-500 text-amber-500 px-8 py-3 w-full font-bold text-lg hover:bg-amber-500/10 transition-colors">
              READ THE SAGA
            </button>
          </Link>
        </div>

        {/* Footer Quote */}
        <p className="text-zinc-600 text-sm mt-16 italic">
          By His call we rise.
        </p>

      </div>
    </main>
  )
}
