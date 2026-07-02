import Link from 'next/link'

const relics = [
  {
    slug: 'horn-of-war',
    title: "HORN OF WAR",
    subtitle: "A BATTLE CRY. A LEGEND RISES.",
    image: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp"
  },
  {
    slug: 'heaven-calling',
    title: "HEAVEN CALLING", 
    subtitle: "THE ASCENT BEGINS.",
    image: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp"
  },
  {
    slug: 'iron-collide',
    title: "IRON COLLIDE",
    subtitle: "KINGDOMS CLASH.",
    image: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp"
  },
  {
    slug: 'spiritual-journey',
    title: "SPIRITUAL JOURNEY",
    subtitle: "THE PATH HOME.",
    image: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp"
  },
  {
    slug: 'blood-of-cross',
    title: "BLOOD OF CROSS",
    subtitle: "THE COVENANT SEALED.",
    image: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp"
  },
  {
    slug: 'im-on-fire',
    title: "I'M ON FIRE",
    subtitle: "WILDFIRE SPREADS.",
    image: "/file_0000000065a071f5832301f52d11fb80.png"
  }
]

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        <div className="flex justify-between text-sm text-zinc-500 mb-16 tracking-widest font-sans">
          <Link href="/" className="hover:text-amber-500">← STORMBREAKERS</Link>
          <span>RELICS</span>
          <div className="w-16"></div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-amber-500 mb-4">
            RELICS
          </h1>
          <p className="text-zinc-500 tracking-widest">
            Cinematic Worship • Viking Spirit • Holy Fire
          </p>
          <div className="w-24 h-px bg-amber-500/50 mx-auto mt-8"></div>
        </div>

        <div className="space-y-8">
          {relics.map((relic) => (
            <Link
              key={relic.slug}
              href={`/relics/${relic.slug}`}
              className="block border border-zinc-800 rounded-lg overflow-hidden hover:border-amber-500 transition-all cursor-pointer"
            >
              <div className="aspect-video bg-zinc-900 relative">
                <img 
                  src={relic.image} 
                  alt={relic.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-serif text-white mb-2">
                  {relic.title}
                </h2>
                <p className="text-zinc-400 text-sm tracking-wider">
                  {relic.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}
