import { notFound } from 'next/navigation'

// THE SEVEN RELICS - CODEX DATA
const RELICS = {
  'horn-of-war': {
    num: '01',
    total: '07',
    title: 'HORN OF WAR',
    subtitle: 'The Battle Cry',
    scripture: 'Joel 2:1', // CHANGE THIS TO YOUR REAL VERSE
    audio: '/horn-of-war.mp3', // PUT MP3 IN /public FOLDER
    video: 'dQw4w9WgXcQ', // CHANGE TO YOUR YOUTUBE ID
    story: 'This relic was forged when the Lord commanded: "Blow the trumpet in Zion." Mahalla is the war cry that was birthed from this horn.',
    meaning: 'For the warriors who intercede. When hell advances, we sound the horn. This is your signal to stand.',
    prev: 'scars-that-preach',
    next: 'iron-collide'
  },
  'iron-collide': {
    num: '02',
    total: '07',
    title: 'IRON COLLIDE',
    subtitle: 'Sharpened Together',
    scripture: 'Proverbs 27:17',
    audio: '/iron-collide.mp3',
    video: 'dQw4w9WgXcQ',
    story: 'Iron sharpens iron. This relic came from brotherhood. From men who refused to let me stay broken. We collide to make each other stronger.',
    meaning: 'Find your pack. Let them sharpen you. You were forged for battle, not comfort.',
    prev: 'horn-of-war',
    next: 'lamb'
  },
  'lamb': {
    num: '04', // SKIPPED 03 IN YOUR SCREENSHOT - ADJUST IF NEEDED
    total: '07',
    title: 'LAMB',
    subtitle: 'The Victorious King',
    scripture: 'Revelation 5:12',
    audio: '/lamb.mp3',
    video: 'dQw4w9WgXcQ',
    story: 'The Lion is also the Lamb. This relic declares the paradox: He conquered by being slain. Victory through surrender.',
    meaning: 'For those who feel powerless. Your weakness is His strength. The Lamb has overcome.',
    prev: 'iron-collide',
    next: 'blood-of-the-cross'
  },
  'blood-of-the-cross': {
    num: '05',
    total: '07',
    title: 'BLOOD OF THE CROSS',
    subtitle: 'The Covenant',
    scripture: 'Colossians 1:20',
    audio: '/blood-of-the-cross.mp3',
    video: 'dQw4w9WgXcQ',
    story: 'This relic was written in Gethsemane tears. The blood speaks a better word than Abel. It cries: Forgiven.',
    meaning: 'For the guilty and shamed. The blood has not lost its power. You are clean.',
    prev: 'lamb',
    next: 'heaven-is-calling'
  },
  'heaven-is-calling': {
    num: '06',
    total: '07',
    title: 'HEAVEN IS CALLING',
    subtitle: 'The Voice That Finds Us',
    scripture: 'John 10:27',
    audio: '/heaven-is-calling.mp3',
    video: 'dQw4w9WgXcQ',
    story: 'Written when I was running. But His voice is louder than my rebellion. Heaven doesn\'t whisper - it calls your name.',
    meaning: 'For the prodigals. You can hear Him. Stop running. He\'s calling you home.',
    prev: 'blood-of-the-cross',
    next: 'scars-that-preach'
  },
  'scars-that-preach': {
    num: '07',
    total: '07',
    title: 'SCARS THAT PREACH',
    subtitle: 'The Living Testimony',
    scripture: 'Galatians 6:17',
    audio: '/scars-that-preach.mp3',
    video: 'dQw4w9WgXcQ',
    story: 'Your scars are not your shame. They are your sermon. This relic was born from the wounds that became weapons.',
    meaning: 'For the wounded healers. Show your scars. They prove you survived. Now you can lead others out.',
    prev: 'heaven-is-calling',
    next: 'horn-of-war'
  }
}

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = RELICS[params.slug as keyof typeof RELICS]
  
  if (!relic) {
    notFound()
  }

  return (
    <main className="bg-black text-white min-h-screen p-8">
      
      {/* CODEX HEADER */}
      <div className="text-center mb-4">
        <p className="text-gray-500 tracking-[0.3em] text-sm mb-4">THE CODEX</p>
        <h1 className="text-5xl font-bold text-yellow-500 tracking-widest">
          THE SEVEN RELICS
        </h1>
      </div>
      <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
        An archive of worship relics where Scripture, story, and song are forged together.
      </p>

      {/* RELIC CONTENT */}
      <section className="max-w-3xl mx-auto mb-24 pb-16">
        <div className="mb-2">
          <span className="text-yellow-500 font-mono text-sm">{relic.num} / {relic.total}</span>
        </div>
        <h2 className="text-4xl font-bold mb-2">
          {relic.title}
        </h2>
        <p className="text-gray-400 italic mb-2">{relic.subtitle}</p>
        <p className="text-yellow-500 mb-10 font-mono">{relic.scripture}</p>

        <h3 className="text-xl font-bold mt-12 mb-4">🎵 Hear the Relic</h3>
        <audio controls className="w-full mb-12">
          <source src={relic.audio} type="audio/mpeg" />
        </audio>

        <h3 className="text-xl font-bold mt-12 mb-4">📜 Watch the Scroll</h3>
        <iframe 
          className="w-full aspect-video mb-12 rounded"
          src={`https://www.youtube.com/embed/${relic.video}`} 
          title={relic.title}
          allowFullScreen
        ></iframe>

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

    </main>
  )
}

export async function generateStaticParams() {
  return Object.keys(RELICS).map((slug) => ({
    slug: slug,
  }))
}
