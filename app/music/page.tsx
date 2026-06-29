// app/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stormbreakers - RunningWolf",
  description: "Cinematic worship and epic spiritual rock forged in fire. For the addicted, the broken, the chosen.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen text-white antialiased relative z-0 flex flex-col">
      
      {/* Nav - NO GALLERY */}
      <header className="w-full border-b border-gray-900 bg-black/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-amber-500 font-black tracking-tight text-lg">
            Stormbreakers - RunningWolf
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-amber-500">Home</Link>
            <Link href="/music" className="text-gray-400 hover:text-white transition-colors">Music</Link>
          </nav>
        </div>
      </header>

      {/* Hero - NO GALLERY BUTTON */}
      <section className="flex-1 flex items-center justify-center px-6 py-12 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-amber-500/30 ring-offset-4 ring-offset-black">
              <img 
                src="/images/avatar.jpg" 
                alt="Jessy Marquez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-amber-500 mb-3 tracking-tight">
            Jessy Marquez
          </h1>
          
          <p className="text-sm md:text-base text-gray-500 tracking-[0.4em] mb-8 font-mono">
            RUNNINGWOLF
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 font-light">
            Cinematic worship and epic spiritual rock forged in fire. <span className="text-amber-500 font-semibold">Stormbreakers</span> is for the addicted, the broken, the chosen.
          </p>

          <Link 
            href="/music"
            className="inline-block w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-black font-black text-lg px-12 py-4 transition-colors tracking-wide"
          >
            ♫ Enter Music
          </Link>

        </div>
      </section>

      {/* Saga Tease */}
      <section className="border-t border-gray-900 py-12 md:py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-amber-500 tracking-[0.3em] mb-6 font-mono">
            THE SAGA
          </p>
          <blockquote className="text-xl md:text-2xl text-amber-500 font-light leading-relaxed">
            "Worship is your weapon. The storm is your calling."
          </blockquote>
        </div>
      </section>

    </main>
  );
}
