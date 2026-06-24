import Image from "next/image";
import Link from "next/link";

const hymns = [
  {
    slug: "heaven-calling",
    title: "Heaven Is Calling",
    cover: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tagline: "A Worship Anthem",
    story: "Written when worship was the only weapon left."
  },
  // When you add Iron Collide:
  // {
  //   slug: "iron-collide",
  //   title: "Iron Collide",
  //   cover: "/iron-collide-cover.jpg",
  //   tagline: "Strength and perseverance through fire",
  //   story: "A battle anthem for when life hits you like hammer on anvil."
  // },
];

export default function MusicPage() {
  return (
    <div className="bg-[#0b0b0f] text-[#e8e6e3] min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2 text-center" style={{fontFamily: 'Cinzel, serif', fontWeight: 900}}>
          The Hymns
        </h1>
        <p className="text-white/60 text-center mb-12">Each song is a weapon. Choose yours.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hymns.map((hymn) => (
            <div key={hymn.slug} className="bg-black border border-yellow-900/30 rounded-xl overflow-hidden shadow-xl shadow-yellow-900/10 hover:shadow-yellow-900/30 transition-all hover:-translate-y-1">
              <div className="relative aspect-square">
                <Image src={hymn.cover} alt={hymn.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-500 mb-2">{hymn.title}</h3>
                <p className="text-sm text-white/70 mb-4 italic">{hymn.tagline}</p>
                <p className="text-xs text-white/50 mb-6">{hymn.story}</p>
                <div className="flex gap-3">
                  <Link 
                    href={`/${hymn.slug}`}
                    className="flex-1 bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded text-center text-sm"
                  >
                    ▶️ Play
                  </Link>
                  <Link 
                    href={`/${hymn.slug}#story`}
                    className="flex-1 border border-yellow-600/60 hover:bg-yellow-600/10 text-yellow-500 py-2 px-4 rounded text-center text-sm"
                  >
                    📖 Story
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if only 1 song */}
        {hymns.length === 1 && (
          <div className="text-center mt-16 py-12 border-t border-yellow-900/20">
            <p className="text-white/50 text-sm mb-4">More hymns are being forged in the fire...</p>
            <p className="text-yellow-500 text-xs tracking-[0.3em]">THE SAGA CONTINUES</p>
          </div>
        )}
      </div>
    </div>
  );
            }
