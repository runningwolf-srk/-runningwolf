import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hall of Relics | Running Wolf",
  description: "Cinematic war hymns. Truth in audio form."
};

const RELICS_LIST = [
  { slug: "horn-of-war", title: "Horn of War", number: "01", status: "live" },
  { slug: "iron-collide", title: "Iron Collide", number: "02", status: "live" },
  { slug: "blood-of-the-cross", title: "Blood of the Cross", number: "03", status: "live" },
  { slug: "spiritual-journey", title: "Spiritual Journey", number: "04", status: "live" },
  { slug: "lord-of-lords", title: "Lord of Lords", number: "05", status: "coming-soon" },
  { slug: "scars-that-preach", title: "Scars That Preach", number: "06", status: "coming-soon" },
];

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            HALL OF RELICS
          </h1>
          <p className="text-zinc-400 text-lg">
            Each relic is a weapon. Each song is a war hymn.
          </p>
        </div>

        <div className="space-y-4">
          {RELICS_LIST.map((relic) => (
            <Link
              key={relic.slug}
              href={`/music/${relic.slug}`}
              className="block group"
            >
              <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300 hover:bg-zinc-900/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-zinc-900 rounded flex items-center justify-center">
                      <span className="text-zinc-600 text-xs font-bold">
                        {relic.number}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-600 uppercase tracking-widest mb-1">
                        RELIC {relic.number}
                      </p>
                      <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-amber-500 transition-colors">
                        {relic.title}
                      </h2>
                      {relic.status === "coming-soon" && (
                        <p className="text-xs text-amber-600 font-bold mt-1">
                          COMING SOON
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-amber-500 text-2xl group-hover:translate-x-2 transition-transform">
                    ▶
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
