import Link from 'next/link'

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-200 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20">
        
        {/* Nav */}
        <div className="flex justify-between text-sm text-zinc-500 mb-20 tracking-widest">
          <Link href="/" className="hover:text-amber-500">← RUNNINGWOLF</Link>
          <span>HALL OF RELICS</span>
          <Link href="/saga" className="hover:text-amber-500">Iron Collide →</Link>
        </div>

        {/* Main Quote */}
        <div className="text-center py-24">
          <div className="w-24 h-px bg-amber-500 mx-auto mb-12"></div>
          
          <h1 className="text-3xl md:text-5xl font-serif text-amber-500 leading-relaxed mb-12">
            The horn does not promise<br />
            an easy battle. It calls the<br />
            faithful to stand.
          </h1>
          
          <div className="w-24 h-px bg-amber-500 mx-auto"></div>
        </div>

        {/* Joel 2:1 + What It Means */}
        <div className="mt-32 pt-16 border-t border-zinc-800">
          <p className="text-amber-500 text-sm tracking-[0.3em] mb-6">THE SCRIPTURE</p>
          
          <div className="border-l-2 border-amber-500 pl-6 mb-8">
            <p className="text-2xl italic text-white font-serif mb-3 leading-relaxed">
              "Blow the trumpet in Zion, declare a holy fast, call a sacred assembly."
            </p>
            <p className="text-amber-500">Joel 2:1</p>
          </div>

          {/* What The Verse Means */}
          <div className="mt-12">
            <p className="text-amber-500 text-sm tracking-[0.3em] mb-6">WHAT IT SAYS</p>
            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                <span className="text-amber-500 font-bold">Blow the trumpet in Zion</span> - 
                This is the war horn. Not for entertainment. For awakening. 
                When God calls, the faithful don't hit snooze.
              </p>
              <p>
                <span className="text-amber-500 font-bold">Declare a holy fast</span> - 
                Vikings prepared for battle by fasting. Christians prepare for war by fasting. 
                Empty yourself so God can fill you for the fight.
              </p>
              <p>
                <span className="text-amber-500 font-bold">Call a sacred assembly</span> - 
                The clan gathers. The church gathers. You don't fight alone. 
                Stormbreakers rise together.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
