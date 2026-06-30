// app/saga/page.tsx
import Link from "next/link";

const relics = [
  {
    slug: "horn-of-war",
    number: "01",
    title: "Horn of War",
    subtitle: "The Battle Cry",
    tier: "Free + Tier 3 Saga"
  },
  {
    slug: "iron-collide",
    number: "02", 
    title: "Iron Collide",
    subtitle: "Sharpened Together",
    tier: "Free + Tier 3 Saga"
  },
  {
    slug: "crown-of-thorns",
    number: "03",
    title: "Crown of Thorns", 
    subtitle: "The King of Pain",
    tier: "Free + Tier 3 Saga"
  },
  {
    slug: "lion-and-lamb",
    number: "04",
    title: "Lion and Lamb",
    subtitle: "The Victorious King", 
    tier: "Free + Tier 3 Saga"
  },
  {
    slug: "blood-of-cross",
    number: "05",
    title: "Blood of the Cross",
    subtitle: "The Covenant",
    tier: "Free + Tier 3 Saga"
  },
  {
    slug: "heaven-calling",
    number: "06",
    title: "Heaven Is Calling",
    subtitle: "The Voice That Finds Us",
    tier: "Free + Tier 3 Saga"
  },
  {
    slug: "scars-that-preach",
    number: "07",
    title: "Scars That Preach",
    subtitle: "The Living Testimony",
    tier: "Tier 3 Sealed"
  }
];

export default function SagaPage() {
  return (
    <main className="min-h-screen text-amber-100 antialiased relative bg-[#0a0a0a]">
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-amber-600/5 rounded-full blur-3xl"></div>
      </div>

      <header className="w-full border-b border-amber-900/30 bg-black/70 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-amber-500 font-black tracking-tight text-lg">
            Stormbreakers - RunningWolf
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-amber-200/70 hover:text-amber-200 transition-colors">
              Home
            </Link>
            <Link href="/saga" className="text-amber-500">
              Saga
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10 px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <p className="text-xs text-amber-600 font-mono mb-4 tracking-[0.4em]">THE CODEX</p>
            <h1 className="text-5xl md:text-7xl font-black text-amber-200 mb-4 tracking-tight leading-none drop-shadow-[0_2px_20px_rgba(245,158,11,0.2)]">
              The Seven Relics
            </h1>
            <p className="text-amber-100/60 text-lg max-w-2xl mx-auto">
              Cinematic worship forged in fire. Read free. Upgrade to unlock the full saga.
            </p>
            <p className="text-amber-700/50 text-xs mt-6 italic">
              *Each relic has companion anthems forged in the same fire. Mahalla is the war cry of Horn of War.*
            </p>
          </div>

          <div className="grid gap-6">
            {relics.map((relic) => (
              <Link 
                key={relic.slug} 
                href={`/saga/${relic.slug}`}
                className="group block animate-fadeIn"
              >
                <div className="relative border border-amber-900/30 bg-gradient-to-r from-stone-950/80 to-black/80 rounded-lg p-6 md:p-8 hover:border-amber-600/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                  <div className="absolute -inset-px bg-gradient-to-r from-amber-600/0 via-amber-600/10 to-amber-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="text-amber-600 font-mono text-sm">
                        {relic.number} / 07
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-black text-amber-200 mb-1 group-hover:text-amber-100 transition-colors">
                          {relic.title}
                        </h2>
                        <p className="text-amber-100/50 text-sm italic">{relic.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-xs text-amber-700 font-mono tracking-wider">{relic.tier}</p>
                      <div className="text-amber-600 group-hover:translate-x-1 transition-transform duration-300 mt-1">→</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center border-t border-amber-900/30 pt-12">
            <p className="text-amber-700/60 text-sm mb-4">⚔️ VIKING CHRISTIAN CODEX ⚔️</p>
            <p className="text-amber-100/40 text-xs max-w-xl mx-auto">
              Free chapters available to all. Upgrade to Tier 3 to unlock the full saga, illuminated manuscripts, and ancient rune teachings.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
