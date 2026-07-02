import Link from 'next/link'

const tracks = [
  {
    slug: "horn-of-war",
    title: "HORN OF WAR",
    subtitle: "A BATTLE CRY. A LEGEND RISES.",
    img: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp"
  },
  {
    slug: "heaven-calling",
    title: "HEAVEN CALLING", 
    subtitle: "A WORSHIP ANTHEM",
    img: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp"
  },
  {
    slug: "scars-that-preach",
    title: "SCARS THAT PREACH",
    subtitle: "BORN THROUGH THE FIRE",
    img: "/file_0000000065a071f5832301f52d11fb80.png"
  },
  {
    slug: "spiritual-journey",
    title: "SPIRITUAL JOURNEY",
    subtitle: "A JOURNEY TO HIS PRESENCE", 
    img: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp"
  },
  {
    slug: "iron-collide",
    title: "IRON COLLIDE",
    subtitle: "AN EPIC HARD ROCK ANTHEM",
    img: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp"
  },
  {
    slug: "blood-of-cross",
    title: "BLOOD OF CROSS",
    subtitle: "BY HIS WOUNDS WE ARE HEALED",
    img: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp"
  },
  {
    slug: "lord-of-lords",
    title: "LORD OF LORDS",
    subtitle: "A SPIRITUAL ANTHEM",
    img: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp"
  }
] // <- Check this closing bracket + comma situation

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        <div className="text-center mb-16">
          <Link href="/" className="text-zinc-500 hover:text-amber-500 text-sm mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-amber-500 mb-4 font-serif">
            THE ARMORY
          </h1>
          <p className="text-zinc-400">Cinematic Worship • Viking Spirit • Holy Fire</p>
          <div className="w-24 h-px bg-amber-500/50 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <Link key={track.slug} href={`/music/track?slug=${track.slug}`} className="group">
              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-colors duration-200">
                <img 
                  src={track.img} 
                  alt={track.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 font-serif">
                    {track.title}
                  </h3>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider">
                    {track.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-24 pt-12 border-t border-zinc-800">
          <p className="text-zinc-600 text-sm italic">
            "Blow the trumpet in Zion..." - Joel 2:1
          </p>
        </div>

      </div>
    </main>
  )
}
