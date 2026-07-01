import Link from 'next/link'

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-200 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20">
        
        {/* Nav */}
        <div className="flex justify-between text-sm text-zinc-500 mb-16 tracking-widest">
          <Link href="/" className="hover:text-amber-500">← RUNNINGWOLF</Link>
          <span>HALL OF RELICS</span>
          <Link href="/saga" className="hover:text-amber-500">Saga →</Link>
        </div>

        {/* Relic Title */}
        <div className="mb-12">
          <p className="text-amber-500 text-sm tracking-[0.3em] mb-2">RELIC 01</p>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">HORN OF WAR</h1>
          <p className="text-zinc-400">A BATTLE CRY. A LEGEND RISES.</p>
        </div>

        {/* Video Player */}
        <div className="aspect-video mb-12">
          <iframe 
            className="w-full h-full rounded-lg border border-amber-500/20"
            src="https://www.youtube.com/embed/M4wGCg5oCx0"
            title="Horn of War"
            frameBorder="0" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>

        {/* Blog Section - Devotional Reading */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-amber-500 font-serif text-2xl mb-6">The Devotional</h2>
          
          <div className="border-l-2 border-amber-500 pl-6 mb-8">
            <p className="text-xl italic text-white font-serif mb-2">
              "Blow the trumpet in Zion, declare a holy fast, call a sacred assembly."
            </p>
            <p className="text-amber-500 text-sm">Joel 2:1</p>
          </div>

          <h3 className="text-white text-xl font-bold mt-12 mb-4">The horn does not promise an easy battle.</h3>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Vikings didn't blow horns to start parties. They blew them to start wars. When you hear 
            HORN OF WAR, understand this: God is not calling you to comfort. He's calling you to 
            combat. The faithful don't wait for peace. They stand when the horn sounds.
          </p>

          <h3 className="text-white text-xl font-bold mt-12 mb-4">It calls the faithful to stand.</h3>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Standing is a choice. Retreating is easier. But Stormbreakers were not forged in retreat. 
            Every time you press play on this track, you're making a covenant: "I will not bow to fear. 
            I will not surrender to silence. I will rise when He calls."
          </p>

          <h3 className="text-white text-xl font-bold mt-12 mb-4">Declare a holy fast.</h3>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Before Vikings went to battle, they fasted. Before Jesus went to the cross, He fasted. 
            Fasting empties you of self so God can fill you with war fire. This song hits different 
            when you're hungry for Him instead of comfort.
          </p>

          <div className="mt-16 pt-8 border-t border-zinc-800 text-center">
            <p className="text-zinc-500 italic">Posted in the Hall of Relics</p>
          </div>
        </div>

      </div>
    </main>
  )
}
