import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-30 bg-black/80 backdrop-blur-md px-4 py-3 border-b border-red-900/30">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <span className="font-bold text-lg tracking-widest text-red-500">STORMBREAKERS SAGA</span>
          <div className="hidden md:flex gap-6 text-xs tracking-wider">
            <Link href="#ch1" className="hover:text-red-500">WARRIOR</Link>
            <Link href="#song1" className="hover:text-red-500">HYMN I</Link>
            <Link href="#ch2" className="hover:text-red-500">RUINS</Link>
            <Link href="#song2" className="hover:text-red-500">HYMN II</Link>
          </div>
        </div>
      </nav>

      {/* CHAPTER I: THE WARRIOR - STORY */}
      <section id="ch1" className="relative h-screen w-full overflow-hidden">
        <Image 
          src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
          alt="RunningWolf - The Stormbreaker"
          fill
          className="object-cover object-top scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <p className="text-sm text-red-400 tracking-[0.4em] mb-6 font-semibold">CHAPTER I</p>
          <h1 className="text-6xl md:text-9xl font-extrabold mb-6 drop-shadow-2xl">
            THE WARRIOR
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed mb-10">
            He was not born in a palace. He was forged in the fire. 
            A Viking with a cross on his chest, called to break storms with worship.
            His name: <span className="text-red-500 font-bold">RUNNINGWOLF</span>.
          </p>
          <a href="#song1" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all hover:scale-105 border border-red-400/30">
            HEAR HIS FIRST HYMN ↓
          </a>
        </div>
      </section>

      {/* SONG I: HEAVEN IS CALLING - MUSIC */}
      <section id="song1" className="bg-zinc-950 py-24 md:py-32 border-y border-red-900/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-red-400 tracking-[0.4em] mb-4 font-semibold">HYMN I</p>
          <h2 className="text-4xl md:text-7xl font-bold mb-4">HEAVEN IS CALLING</h2>
          <p className="text-red-500 text-lg mb-12 italic">The anthem that woke the Stormbreakers</p>
          
          <Image 
            src="/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp"
            alt="Heaven Calling - A Worship Anthem"
            width={600}
            height={600}
            className="rounded-lg shadow-2xl shadow-red-900/40 mx-auto mb-12 border border-red-900/30"
          />

          <div className="aspect-video w-full max-w-4xl mx-auto border border-red-900/30 rounded-lg overflow-hidden shadow-2xl shadow-red-900/20 mb-8">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/oxNauKuxg4Q" 
              title="Heaven Is Calling - RUNNINGWOLF"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto">
            "Not the drums of war, but the thunder of worship. This is the sound that made the ruins shake."
          </p>
        </div>
      </section>

      {/* CHAPTER II: THE RUINS - STORY */}
      <section id="ch2" className="bg-black py-24 md:py-40 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="text-sm text-red-400 tracking-[0.4em] mb-6 font-semibold">CHAPTER II</p>
          <h2 className="text-4xl md:text-7xl font-bold mb-8">THE RUINS</h2>
          <div className="text-lg md:text-xl text-white/70 leading-relaxed space-y-6">
            <p>
              The old kingdom fell. The temples crumbled. The songs of the fathers were forgotten.
            </p>
            <p>
              But in the ash, RunningWolf found something — a broken string, a bent cross, a whisper:
            </p>
            <p className="text-2xl text-red-500 font-bold py-6">
              "Worship is your weapon. The storm is your calling."
            </p>
            <p>
              So he lifted his voice where others lifted swords. And the ground began to move.
            </p>
          </div>
          <a href="#song2" className="inline-block mt-12 text-red-400 hover:text-red-300 text-lg">
            ↓ The next hymn rises from the rubble
          </a>
        </div>
      </section>

      {/* SONG II: STORMBREAKERS PLAYLIST - MUSIC */}
      <section id="song2" className="bg-zinc-950 py-24 md:py-32 border-y border-red-900/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-red-400 tracking-[0.4em] mb-4 font-semibold">HYMN II</p>
          <h2 className="text-4xl md:text-7xl font-bold mb-4">THE STORMBREAKERS</h2>
          <p className="text-red-500 text-lg mb-12 italic">One warrior became a clan. One song became an army.</p>
          
          <iframe 
            className="rounded-lg border border-red-900/30 shadow-2xl shadow-red-900/20"
            src="https://open.spotify.com/embed/playlist/5BxENwMmi8ygKIZLCCvgmS?utm_source=generator&theme=0" 
            width="100%" 
            height="420" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16 text-center">
            <div>
              <h4 className="text-xl font-bold mb-2 text-red-500">WORSHIP</h4>
              <p className="text-white/60 text-sm">The weapon before the war</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-red-500">BROTHERHOOD</h4>
              <p className="text-white/60 text-sm">No warrior stands alone</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-red-500">BREAKTHROUGH</h4>
              <p className="text-white/60 text-sm">Storms do not stop us</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER III: THE CLAN - FINALE */}
      <section className="bg-gradient-to-t from-red-950/30 to-black py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-red-400 tracking-[0.4em] mb-6 font-semibold">CHAPTER III</p>
          <h2 className="text-4xl md:text-7xl font-bold mb-6">JOIN THE CLAN</h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            The saga continues. Every new song is a new chapter. 
            Enlist to get the battle hymns before the world hears them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="bg-zinc-900 border border-red-900/40 px-6 py-4 rounded-lg w-full text-white focus:outline-none focus:border-red-500"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg w-full sm:w-auto transition-all hover:scale-105">
              ENLIST
            </button>
          </div>
          <p className="text-xs text-white/40 mt-12">
            Stormbreakers © 2026 — JESSY MARQUEZ // RUNNINGWOLF
          </p>
        </div>
      </section>
    </main>
  );
}
