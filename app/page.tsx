import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#0b0b0f] text-[#e8e6e3] min-h-screen">
      <header className="bg-black/80 backdrop-blur-md border-b border-yellow-900/30 px-4 py-3 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-bold text-base tracking-wide text-yellow-500">
            Stormbreakers - RunningWolf
          </span>
          <nav className="flex gap-4 text-xs">
            <Link href="/" className="text-yellow-500">Home</Link>
            <Link href="/heaven-calling" className="hover:text-yellow-500">Music</Link>
          </nav>
        </div>
      </header>

      <section className="py-3 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative w-16 h-16 mx-auto rounded-full overflow-hidden border border-yellow-600/50 mb-2">
            <Image 
              src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
              alt="RunningWolf"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <h1 className="text-lg font-bold text-yellow-500">Jessy Marquez</h1>
          <p className="text-xs text-white/60 tracking-[0.3em] mb-2">RUNNINGWOLF</p>
          <Link href="/heaven-calling" className="text-yellow-500 text-xs font-semibold">
            Listen Now →
          </Link>
        </div>
      </section>

      <section className="bg-black py-12 px-4 border-t border-yellow-900/20">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-yellow-500 tracking-[0.3em] mb-4 text-center font-semibold">
            THE SAGA
          </p>
          <h2 className="text-2xl font-bold mb-6 text-center">
            This Is Stormbreakers
          </h2>
          <div className="space-y-4 text-base text-white/80 leading-relaxed">
            <p>
              <span className="text-yellow-500 font-bold">RunningWolf</span> isn&apos;t a stage name. 
              It&apos;s the name the fire gave Jessy Marquez when everything else burned down.
            </p>
            <p>
              The ruins behind him aren&apos;t CGI. They&apos;re real — broken homes, silent fathers, 
              addiction, religion without power. He was called to walk through them not with a sword, 
              but with worship.
            </p>
            <p className="text-lg text-yellow-500 font-semibold py-4 text-center border-y border-yellow-900/30">
              &quot;Worship is your weapon.<br/>The storm is your calling.&quot;
            </p>
            <p>
              <span className="text-yellow-500 font-bold">Stormbreakers</span> is the sound of that calling. 
              Music for the ones fighting battles in the dark. Anthems written in the rubble, 
              not in a studio. Each song is a hymn for the clan — the addicted, the broken, the chosen.
            </p>
            <p>
              You&apos;re here because the storm brought you. The first hymn is <span className="text-yellow-500">&quot;Heaven Is Calling.&quot;</span> 
              It&apos;s waiting.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/heaven-calling" 
              className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg text-sm transition-all hover:scale-105"
            >
              ENTER THE FIRST HYMN
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b0b0f] py-6 text-center text-white/40 text-xs border-t border-yellow-900/20">
        <p>Stormbreakers © 2026 — JESSY MARQUEZ // RUNNINGWOLF</p>
      </footer>
    </main>
  );
}
