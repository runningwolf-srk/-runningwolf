import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* Nav */}
      <nav className="bg-zinc-900 px-4 py-3 absolute w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-bold">Stormbreakers - RunningWolf</span>
          <div className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/music">Music</Link>
          </div>
        </div>
      </nav>

      {/* VIKING HERO SECTION */}
      <div className="relative h-screen w-full flex items-center justify-center">
        {/* Full-screen Viking Background */}
        <Image 
          src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
          alt="RunningWolf - Stormbreakers"
          fill
          className="object-cover brightness-50"
          priority
        />
        
        {/* Overlay Text */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-8xl font-bold mb-4">
            JESSY MARQUEZ
          </h1>
          <p className="text-2xl md:text-4xl text-red-500 font-bold mb-8">
            RUNNINGWOLF // STORMBREAKERS
          </p>
          <Link 
            href="/music" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all hover:scale-105"
          >
            [Listen to Heaven Is Calling]
          </Link>
        </div>
      </div>

      {/* Music Section Below */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Heaven Is Calling</h2>
        
        <Image 
          src="/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp"
          alt="Heaven Calling - A Worship Anthem"
          width={800}
          height={800}
          className="rounded-lg shadow-2xl shadow-red-900/30 mx-auto mb-8"
        />

        <div className="max-w-3xl mx-auto mb-12">
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

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Stormbreakers Playlist</h3>
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
    </div>
  );
}
