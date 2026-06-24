import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Nav - Fixed on top */}
      <nav className="fixed top-0 w-full z-30 bg-black/60 backdrop-blur-md px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-bold text-lg">Stormbreakers - RunningWolf</span>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-red-500">Home</Link>
            <Link href="/music" className="hover:text-red-500">Music</Link>
          </div>
        </div>
      </nav>

      {/* SECTION 1: VIKING HERO - FULL SCREEN ONLY */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Viking Background - TAKES FULL SCREEN */}
        <Image 
          src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
          alt="RunningWolf - Stormbreakers"
          fill
          className="object-cover object-top"
          priority
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-10"></div>
        
        {/* Text Overlay - CENTERED ON VIKING */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-20 md:pb-32 text-center px-4">
          <h1 className="text-5xl md:text-8xl font-extrabold mb-4 drop-shadow-2xl">
            JESSY MARQUEZ
          </h1>
          <p className="text-2xl md:text-4xl text-red-500 font-bold mb-8 drop-shadow-2xl">
            RUNNINGWOLF // STORMBREAKERS
          </p>
          <Link 
            href="#heaven-calling" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all hover:scale-105 shadow-2xl"
          >
            [ HEAVEN IS CALLING ]
          </Link>
        </div>
      </section>

      {/* SECTION 2: HEAVEN CALLING - STARTS BELOW HERO */}
      <section id="heaven-calling" className="bg-zinc-950 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
            Heaven Is Calling
          </h2>
          
          <Image 
            src="/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp"
            alt="Heaven Calling - A Worship Anthem"
            width={800}
            height={800}
            className="rounded-lg shadow-2xl shadow-red-900/30 mx-auto mb-12"
          />

          <div className="max-w-4xl mx-auto mb-16">
            <div className="aspect-video w-full">
              <iframe 
                className="rounded-lg w-full h-full"
                src="https://www.youtube.com/embed/oxNauKuxg4Q" 
                title="Heaven Is Calling - RUNNINGWOLF"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold mb-8 text-center">Stormbreakers Playlist</h3>
            <iframe 
              className="rounded-lg"
              src="https://open.spotify.com/embed/playlist/5BxENwMmi8ygKIZLCCvgmS?utm_source=generator&theme=0" 
              width="100%" 
              height="380" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
