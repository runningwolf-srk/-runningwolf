import Image from 'next/image'
import Link from 'next/link'

const RELICS = [
  {
    slug: 'horn-of-war',
    num: '01',
    title: 'HORN OF WAR',
    subtitle: 'The Battle Cry',
    scripture: 'Joel 2:1',
    cover: '/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp'
  },
  {
    slug: 'iron-collide',
    num: '02', 
    title: 'IRON COLLIDE',
    subtitle: 'Sharpened Together',
    scripture: 'Proverbs 27:17',
    cover: '/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp'
  },
  {
    slug: 'crown-of-thorns',
    num: '03',
    title: 'CROWN OF THORNS', 
    subtitle: 'The King of Pain',
    scripture: 'John 19:5',
    cover: '/crown-of-thorns.webp'
  },
  {
    slug: 'lion-and-lamb',
    num: '04',
    title: 'LION AND LAMB',
    subtitle: 'The Victorious King', 
    scripture: 'Revelation 5:5-6',
    cover: '/lion-and-lamb.webp'
  },
  {
    slug: 'blood-of-the-cross',
    num: '05',
    title: 'BLOOD OF THE CROSS',
    subtitle: 'The Covenant',
    scripture: 'Colossians 1:20',
    cover: '/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp'
  },
  {
    slug: 'heaven-calling',
    num: '06',
    title: 'HEAVEN IS CALLING',
    subtitle: 'The Voice That Finds Us',
    scripture: 'John 10:27',
    cover: '/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp'
  },
  {
    slug: 'scars-that-preach',
    num: '07',
    title: 'SCARS THAT PREACH',
    subtitle: 'The Living Testimony',
    scripture: 'Galatians 6:17',
    cover: '/file_0000000065a071f5832301f52d11fb80.png'
  }
]

export default function HallOfRelics() {
  return (
    <main className="bg-black text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 tracking-[0.3em] text-sm mb-4">THE CODEX</p>
          <h1 className="text-5xl font-bold text-yellow-500 tracking-widest mb-4">THE SEVEN RELICS</h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            An archive of worship relics where Scripture, story, and song are forged together.
            Enter the Hall. Choose your relic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RELICS.map((relic) => (
            <Link 
              key={relic.slug} 
              href={`/music/${relic.slug}`}
              className="group block bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-yellow-500 transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={relic.cover} 
                  alt={relic.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-yellow-500 font-mono text-sm bg-black/50 px-2 py-1 rounded">
                    {relic.num} / 07
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-1 group-hover:text-yellow-500 transition-colors">
                  {relic.title}
                </h2>
                <p className="text-gray-400 italic mb-2">{relic.subtitle}</p>
                <p className="text-yellow-500 font-mono text-sm">{relic.scripture}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/saga" 
            className="text-yellow-500 font-bold hover:text-yellow-300 tracking-widest"
          >
            ← RETURN TO THE CODEX
          </Link>
        </div>
      </div>
    </main>
  )
}
