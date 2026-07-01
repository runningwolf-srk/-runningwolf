export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        
        {/* Optional: Add your logo here if you have one in /public */}
        {/* <img src="/logo.png" className="w-24 h-24 mx-auto mb-8 opacity-90" alt="RunningWolf" /> */}
        
        <h1 className="text-5xl md:text-7xl font-black text-amber-400 mb-4 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">
          STORMBREAKERS
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-300 mb-2 tracking-wide">
          RunningWolf - Jessy Marquez
        </p>
        
        <div className="w-20 h-px bg-amber-500/50 mx-auto my-8"></div>
        
        <p className="text-zinc-400 mb-12 text-sm md:text-base">
          Cinematic Worship • Spirit Led • 🔥🐺⚔️
        </p>
        
        <a 
          href="/music" 
          className="inline-block bg-amber-500 text-black px-10 py-4 rounded-lg font-black text-lg hover:bg-amber-400 transition-colors duration-200 shadow-lg shadow-amber-500/20"
        >
          LISTEN NOW
        </a>
        
        <p className="text-zinc-700 mt-16 text-xs">
          Clean slate. Rebuilt right.
        </p>
        
      </div>
    </main>
  );
}
