import { notFound } from 'next/navigation'
import Image from 'next/image'

const RELICS = {
  'horn-of-war': {
    num: '01', total: '07', title: 'HORN OF WAR', subtitle: 'A Battle Cry. A Legend Rises.',
    scripture: 'Joel 2:1', 
    cover: '/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp',
    audio: '/horn-of-war.mp3', video: 'dQw4w9WgXcQ',
    story: 'This relic was forged when the Lord commanded: "Blow the trumpet in Zion." Mahalla is the war cry that was birthed from this horn.',
    meaning: 'For the warriors who intercede. When hell advances, we sound the horn. This is your signal to stand.',
    prev: 'heaven-calling', next: 'iron-collide'
  },
  'iron-collide': {
    num: '02', total: '07', title: 'IRON COLLIDE', subtitle: 'An Epic Hard Rock Anthem',
    scripture: 'Proverbs 27:17',
    cover: '/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp',
    audio: '/iron-collide.mp3', video: 'dQw4w9WgXcQ',
    story: 'Iron sharpens iron. This relic came from brotherhood. From men who refused to let me stay broken. We collide to make each other stronger.',
    meaning: 'Find your pack. Let them sharpen you. You were forged for battle, not comfort.',
    prev: 'horn-of-war', next: 'blood-of-cross'
  },
  'blood-of-cross': {
    num: '03', total: '07', title: 'BLOOD OF CROSS', subtitle: 'By His Wounds We Are Healed',
    scripture: 'Colossians 1:20',
    cover: '/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp',
    audio: '/blood-of-cross.mp3', video: 'dQw4w9WgXcQ',
    story: 'This relic was written in Gethsemane tears. The blood speaks a better word than Abel. It cries: Forgiven.',
    meaning: 'For the guilty and shamed. The blood has not lost its power. You are clean.',
    prev: 'iron-collide', next: 'scars-that-preach'
  },
  'scars-that-preach': {
    num: '04', total: '07', title: 'SCARS THAT PREACH', subtitle: 'Born Through The Fire',
    scripture: 'Galatians 6:17',
    cover: '/file_0000000065a071f5832301f52d11fb80.png',
    audio: '/scars-that-preach.mp3', video: 'dQw4w9WgXcQ',
    story: 'Your scars are not your shame. They are your sermon. This relic was born from the wounds that became weapons.',
    meaning: 'For the wounded healers. Show your scars. They prove you survived. Now you can lead others out.',
    prev: 'blood-of-cross', next: 'lord-of-lords'
  },
  'lord-of-lords': {
    num: '05', total: '07', title: 'LORD OF LORDS', subtitle: 'A Spiritual Anthem',
    scripture: 'Revelation 19:16',
    cover: '/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp',
    audio: '/lord-of-lords.mp3', video: 'dQw4w9WgXcQ',
    story: 'He is King of Kings. This relic declares His throne. Every knee will bow to the Lord of Lords.',
    meaning: 'For those who need to remember who reigns. Bow to no other name. He holds all authority.',
    prev: 'scars-that-preach', next: 'spiritual-journey'
  },
  'spiritual-journey': {
    num: '06', total: '07', title: 'SPIRITUAL JOURNEY', subtitle: 'A Journey To His Presence',
    scripture: 'Psalm 42:1',
    cover: '/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp',
    audio: '/spiritual-journey.mp3', video: 'dQw4w9WgXcQ',
    story: 'This relic was born in the secret place. When worship becomes your warfare and His presence becomes your home.',
    meaning: 'For the seekers. His presence is the destination, not the platform. Keep walking.',
    prev: 'lord-of-lords', next: 'heaven-calling'
  },
  'heaven-calling': {
    num: '07', total: '07', title: 'HEAVEN CALLING', subtitle: 'A Worship Anthem',
    scripture: 'John 10:27',
    cover: '/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp',
    audio: '/heaven-calling.mp3', video: 'dQw4w9WgXcQ',
    story: 'Written when I was running. But His voice is louder than my rebellion. Heaven doesn\'t whisper - it calls your name.',
    meaning: 'For the prodigals. You can hear Him. Stop running. He\'s calling you home.',
    prev: 'spiritual-journey', next: 'horn-of-war'
  }
}

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = RELICS[params.slug as keyof typeof RELICS]
  if (!relic) notFound()

  return (
    <main className="bg-black text-white min-h-screen">
      <div className="relative h-80 w-full">
        <Image src={relic.cover} alt={relic.title} fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>
      
      <div className="p-8 -mt-32 relative z-10">
        <div className="text-center mb-4">
          <p className="text-gray-500 tracking-[0.3em] text-sm mb-4">THE CODEX</p>
          <h1 className="text-5xl font-bold text-yellow-500 tracking-widest">THE SEVEN RELICS</h1>
        </div>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          An archive of worship relics where Scripture, story, and song are forged together.
        </p>

        <section className="max-w-3xl mx-auto mb-24 pb-16">
          <div className="mb-2">
            <span className="text-yellow-500 font-mono text-sm">{relic.num} / {relic.total}</span>
          </div>
          <h2 className="text-4xl font-bold mb-2">{relic.title}</h2>
          <p className="text-gray-400 italic mb-2">{relic.subtitle}</p>
          <p className="text-yellow-500 mb-10 font-mono">{relic.scripture}</p>

          <h3 className="text-xl font-bold mt-12 mb-4">🎵 Hear the Relic</h3>
          <audio controls className="w-full mb-12">
            <source src={relic.audio} type="audio/mpeg" />
          </audio>

          <h3 className="text-xl font-bold mt-12 mb-4">📜 Watch the Scroll</h3>
          <iframe className="w-full aspect-video mb-12 rounded" src={`https://www.youtube.com/embed/${relic.video}`} title={relic.title} allowFullScreen></iframe>

          <h3 className="text-xl font-bold mt-12 mb-4">Story</h3>
          <p className="text-gray-300 mb-10 leading-relaxed text-lg">{relic.story}</p>

          <h3 className="text-xl font-bold mt-12 mb-4">Meaning</h3>
          <p className="text-gray-300 mb-16 leading-relaxed text-lg">{relic.meaning}</p>

          <div className="text-center my-20 text-yellow-500 font-bold tracking-widest text-lg">
            The horn has sounded. The forge awaits. Continue to the next relic.
          </div>

          <div className="flex justify-between mt-12 text-yellow-500 font-bold">
            <a href={`/music/${relic.prev}`} className="hover:text-yellow-300">← RELIC {RELICS[relic.prev as keyof typeof RELICS].num}</a>
            <a href="/saga" className="hover:text-yellow-300">THE CODEX</a>
            <a href={`/music/${relic.next}`} className="hover:text-yellow-300">RELIC {RELICS[relic.next as keyof typeof RELICS].num} →</a>
          </div>
        </section>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return Object.keys(RELICS).map((slug) => ({ slug }))
}
