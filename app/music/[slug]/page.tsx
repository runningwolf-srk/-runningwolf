import { notFound } from 'next/navigation'

// YOUR 3 RELICS - EDIT THIS PART ONLY
const RELICS = {
  'stormbreakers-anthem': {
    num: '01',
    total: '07',
    title: 'STORMBREAKERS ANTHEM',
    scripture: 'Isaiah 61:1',
    audio: '/stormbreakers.mp3',
    video: 'dQw4w9WgXcQ', // YouTube ID
    story: 'This relic was forged in the fire of addiction recovery. Written at 3am when the Lord said "Write for the ones in chains." This is their freedom song.',
    meaning: 'For the addicted, the broken, the chosen. If you hear this, you are called to break storms, not be broken by them.',
    prev: 'iron-collide',
    next: 'wolfs-prayer'
  },
  'wolfs-prayer': {
    num: '02',
    total: '07',
    title: "WOLF'S PRAYER",
    scripture: 'Psalm 23:4',
    audio: '/wolfs-prayer.mp3',
    video: 'dQw4w9WgXcQ',
    story: "Written in the valley. When the shadow of death was real and the Shepherd's voice was the only thing keeping me breathing.",
    meaning: 'You are not alone in the dark. The pack runs with you. The Shepherd leads you.',
    prev: 'stormbreakers-anthem',
    next: 'iron-collide'
  },
  'iron-collide': {
    num: '03',
    total: '07',
    title: 'IRON COLLIDE',
    scripture: 'Proverbs 27:17',
    audio: '/iron-collide.mp3',
    video: 'dQw4w9WgXcQ',
    story: 'Iron sharpens iron. This relic came from brotherhood. From men who refused to let me stay broken. We collide to make each other stronger.',
    meaning: 'Find your pack. Let them sharpen you. You were forged for battle, not comfort.',
    prev: 'wolfs-prayer',
    next: 'stormbreakers-anthem'
  }
}

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = RELICS[params.slug as keyof typeof RELICS]
  
  if (!relic) {
    notFound()
  }

  return (
    <main className="bg-black text-white min-h-screen p-8">
      
      {/* HALL HEADER */}
      <h1 className="text-5xl font-bold text-center mb-4 text-yellow-500 tracking-widest">
        HALL OF RELICS
      </h1>
      <p className="text-gray-400 text-center mb-16">
        An archive of worship relics where Scripture, story, and song are forged together.
      </p>

      {/* RELIC CONTENT */}
      <section className="max-w-3xl mx-auto mb-24 pb-16">
        <h2 className="text-3xl font-bold mb-2">
          RELIC {relic.num} OF {relic.total}: {relic.title}
        </h2>
        <p className="text-gray-500 mb-8">{relic.scripture}</p>

        <h3 className="text-xl font-bold mt-10 mb-4">🎵 Hear the Relic</h3>
        <audio controls className="w-full mb-10">
          <source src={relic.audio} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>

        <h3 className="text-xl font-bold mt-10 mb-4">📜 Watch the Scroll</h3>
        <iframe 
          className="w-full aspect-video mb-10 rounded"
          src={`https://www.youtube.com/embed/${relic.video}`} 
          title={relic.title}
          allowFullScreen
        ></iframe>

        <h3 className="text-xl font-bold mt-10 mb-4">Story</h3>
        <p className="text-gray-300 mb-8 leading-relaxed">{relic.story}</p>

        <h3 className="text-xl font-bold mt-10 mb-4">Meaning</h3>
        <p className="text-gray-300 mb-12 leading-relaxed">{relic.meaning}</p>

        <div className="text-center my-16 text-yellow-500 font-bold tracking-widest text-lg">
          The horn has sounded. The forge awaits. Continue to the next relic.
        </div>

        <div className="flex justify-between mt-8 text-yellow-500 font-bold">
          <a href={`/music/${relic.prev}`}>← RELIC {RELICS[relic.prev as keyof typeof RELICS].num}</a>
          <a href="/hall">HALL OF RELICS</a>
          <a href={`/music/${relic.next}`}>RELIC {RELICS[relic.next as keyof typeof RELICS].num} →</a>
        </div>
      </section>

    </main>
  )
}

// Tells Next.js which pages to build
export async function generateStaticParams() {
  return Object.keys(RELICS).map((slug) => ({
    slug: slug,
  }))
}
