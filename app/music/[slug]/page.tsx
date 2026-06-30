import { notFound } from 'next/navigation'
import Link from 'next/link'

const RELICS = {
  'horn-of-war': {
    num: '01', 
    total: '07', 
    title: 'HORN OF WAR', 
    subtitle: 'Victory Has a Sound',
    scripture: 'Joshua 6:20', 
    cover: '/REPLACE_WITH_YOUR_HORN_OF_WAR_UUID.webp',
    audio: '/horn-of-war.mp3', 
    video: 'M4wGCg5oCx0',
    story: 'I wrote this in a valley. Not on a mountaintop. The enemy was loud. But God taught me: praise is a weapon.',
    meaning: 'For those in battle. Sound your horn. The walls WILL fall.',
    prev: 'scars-that-preach', 
    next: 'iron-collide'
  },
  'iron-collide': {
    num: '02', 
    total: '07', 
    title: 'IRON COLLIDE', 
    subtitle: 'When Warriors Pray Together',
    scripture: 'Proverbs 27:17', 
    cover: '/REPLACE_WITH_YOUR_IRON_COLLIDE_UUID.webp',
    audio: '/iron-collide.mp3', 
    video: 'odIsEMUtNJI',
    story: 'Lone wolves die. Packs survive. This is the anthem of brotherhood forged in fire.',
    meaning: 'For the isolated. Find your pack. Sharpen each other.',
    prev: 'horn-of-war', 
    next: 'crown-of-thorns'
  },
  'crown-of-thorns': {
    num: '03', 
    total: '07', 
    title: 'CROWN OF THORNS', 
    subtitle: 'Beauty in the Bleeding',
    scripture: 'Isaiah 53:5', 
    cover: '/REPLACE_WITH_YOUR_CROWN_OF_THORNS_UUID.webp',
    audio: '/crown-of-thorns.mp3', 
    video: 'dQw4w9WgXcQ',
    story: 'He wore my shame so I could wear His glory. Every thorn was my name.',
    meaning: 'For the ashamed. Your crown is coming.',
    prev: 'iron-collide', 
    next: 'lion-and-lamb'
  },
  'lion-and-lamb': {
    num: '04', 
    total: '07', 
    title: 'LION & LAMB', 
    subtitle: 'Meekness and Majesty',
    scripture: 'Revelation 5:5-6', 
    cover: '/REPLACE_WITH_YOUR_LION_AND_LAMB_UUID.webp',
    audio: '/lion-and-lamb.mp3', 
    video: 'dQw4w9WgXcQ',
    story: 'He roars and He weeps. Justice and mercy kissed at the cross.',
    meaning: 'For the broken and bold. He is both for you.',
    prev: 'crown-of-thorns', 
    next: 'blood-of-the-cross'
  },
  'blood-of-the-cross': {
    num: '05', 
    total: '07', 
    title: 'BLOOD OF THE CROSS', 
    subtitle: 'The Altar Still Speaks',
    scripture: 'Hebrews 12:24', 
    cover: '/REPLACE_WITH_YOUR_BLOOD_OF_THE_CROSS_UUID.webp',
    audio: '/blood-of-the-cross.mp3', 
    video: '4lcbjsNLlzo',
    story: 'Not my tears. Not my works. Only blood breaks chains.',
    meaning: 'For the bound. Plead the blood. Watch chains fall.',
    prev: 'lion-and-lamb', 
    next: 'heaven-calling'
  },
  'heaven-calling': {
    num: '06', 
    total: '07', 
    title: 'HEAVEN IS CALLING', 
    subtitle: 'The Voice That Finds Us',
    scripture: 'John 10:27', 
    cover: '/REPLACE_WITH_YOUR_HEAVEN_CALLING_UUID.webp',
    audio: '/heaven-calling.mp3', 
    video: 'oxNauKuxg4Q',
    story: 'His voice is louder than my rebellion. Heaven doesn\'t whisper - it calls your name.',
    meaning: 'For the prodigals. Stop running. He\'s calling you home.',
    prev: 'blood-of-the-cross', 
    next: 'scars-that-preach'
  },
  'scars-that-preach': {
    num: '07', 
    total: '07', 
    title: 'SCARS THAT PREACH', 
    subtitle: 'Wounds Become Weapons',
    scripture: 'Galatians 6:17', 
    cover: '/REPLACE_WITH_YOUR_SCARS_THAT_PREACH_UUID.webp',
    audio: '/scars-that-preach.mp3', 
    video: 'dQw4w9WgXcQ',
    story: 'I used to hide them. Now I lift them. My scars prove He heals.',
    meaning: 'For the wounded. Your story will save lives.',
    prev: 'heaven-calling', 
    next: 'horn-of-war'
  }
} as const

type Slug = keyof typeof RELICS

export function generateStaticParams() {
  return Object.keys(RELICS).map(slug => ({ slug }))
}

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = RELICS[params.slug as Slug]
  
  if (!relic) notFound(); // ← THIS SEMICOLON WAS MISSING

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <img 
          src={relic.cover} 
          alt={relic.title} 
          className="w-full rounded-lg mb-8 shadow-2xl" 
        />
        
        <div className="text-yellow-400 text-sm font-bold mb-2 tracking-widest">
          RELIC {relic.num} OF {relic.total}
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black mb-2">{relic.title}</h1>
        <p className="text-xl text-zinc-400 mb-6">{relic.subtitle}</p>
        <div className="text-yellow-400 mb-8 text-lg">{relic.scripture}</div>
        
        {relic.video && relic.video !== 'dQw4w9WgXcQ' && (
          <div className="aspect-video mb-8 rounded-lg overflow-hidden">
            <iframe 
              src={`https://www.youtube.com/embed/${relic.video}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {relic.audio && (
          <audio controls className="w-full mb-8">
            <source src={relic.audio} type="audio/mpeg" />
          </audio>
        )}

        <div className="space-y-6 text-lg leading-relaxed">
          <div>
            <h2 className="text-yellow-400 font-bold mb-2">STORY:</h2>
            <p className="text-zinc-300">{relic.story}</p>
          </div>
          <div>
            <h2 className="text-yellow-400 font-bold mb-2">MEANING:</h2>
            <p className="text-zinc-300">{relic.meaning}</p>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-zinc-800">
          <Link 
            href={`/music/${relic.prev}`} 
            className="text-yellow-400 hover:text-yellow-300 font-bold"
          >
            ← PREV
          </Link>
          <Link 
            href={`/music/${relic.next}`} 
            className="text-yellow-400 hover:text-yellow-300 font-bold"
          >
            NEXT →
          </Link>
        </div>
      </div>
    </div>
  )
                                 }
