import Link from 'next/link'
import { notFound } from 'next/navigation'

const relics = [
  {
    id: 1,
    title: "Horn of War",
    subtitle: "The Battle Cry",
    verse: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    ref: "Joel 2:1",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    videoId: "M4wGCg5oCx0",
    videoTitle: "Horn of war mahalla",
    backgroundImage: "/images/horn-of-war-bg.jpg",
    progress: "01 / 07",
    devotionalTitle: "THE SILENCE",
    devotional: "Before the horn, there is silence. Not peace - silence. The moment before war breaks. God uses silence to prepare warriors."
  },
  {
    id: 2,
    title: "Iron Collide",
    subtitle: "Sharpened Together",
    verse: "As iron sharpens iron, so one person sharpens another.",
    ref: "Proverbs 27:17",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    videoId: "odIsEMUtNJI",
    videoTitle: "Iron collide hybrid",
    backgroundImage: "/images/iron-collide-bg.jpg",
    progress: "02 / 07",
    devotionalTitle: "THE FORGE",
    devotional: "Iron doesn't sharpen iron by accident. It takes heat. Pressure. Friction. God will put people in your life that scrape against your pride until Christ is formed."
  },
  {
    id: 3,
    title: "Crown of Thorns",
    subtitle: "The King of Pain",
    verse: "They twisted together a crown of thorns and set it on his head. They put a staff in his right hand. Then they knelt in front of him and mocked him.",
    ref: "Matthew 27:29",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL",
    videoId: "umDFjJjh0_c", // Replace with your actual video
    videoTitle: "Spiritual Journey - god kept me alive",
    backgroundImage: "/images/crown-thorns-bg.jpg",
    progress: "03 / 07",
    devotionalTitle: "THE MOCKERY",
    devotional: "They crowned Him to shame Him. But thorns were the curse of Eden. He wore your curse so you could wear His crown."
  },
  {
    id: 4,
    title: "Lion and Lamb",
    subtitle: "The Paradox",
    verse: "Then one of the elders said to me, 'Do not weep! See, the Lion of the tribe of Judah, the Root of David, has triumphed. He is able to open the scroll and its seven seals.'",
    ref: "Revelation 5:5",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL",
    videoId: "8XQUhWB_N5M", // Replace with your actual video
    videoTitle: "Im on fire",
    backgroundImage: "/images/lion-lamb-bg.jpg",
    progress: "04 / 07",
    devotionalTitle: "THE LAMB",
    devotional: "He didn't come to dominate. He came to be slaughtered. Weakness was the weapon. The cross looked like defeat."
  },
  {
    id: 5,
    title: "Blood of the Cross",
    subtitle: "The Covenant",
    verse: "And through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross.",
    ref: "Colossians 1:20",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL • SACRED",
    videoId: "4lcbjsNLlzo",
    videoTitle: "Blood of cross in viking",
    backgroundImage: "/images/blood-of-cross-bg.jpg",
    progress: "05 / 07",
    devotionalTitle: "THE PRICE",
    devotional: "Viking blood oaths bound men to vengeance. Christ's blood binds us to victory. Your sin for His righteousness."
  },
  {
    id: 6,
    title: "Heaven Calling",
    subtitle: "The Voice That Finds Us",
    verse: "The Lord came and stood there, calling as at the other times, 'Samuel! Samuel!' Then Samuel said, 'Speak, for your servant is listening.'",
    ref: "1 Samuel 3:10",
    tags: "CINEMATIC WORSHIP • VIKING • ORCHESTRAL • CHORAL",
    videoId: "oxNauKuxg4Q",
    videoTitle: "Heaven calling in Viking",
    backgroundImage: "/images/heaven-calling-bg.jpg",
    progress: "06 / 07",
    devotionalTitle: "THE CALL",
    devotional: "Heaven doesn't whisper suggestions. It calls names. When God speaks your name, the valley ends and the ascent begins."
  }
]

export default function RelicPage({ params }: { params: { id: string } }) {
  const relicId = parseInt(params.id)
  const relic = relics.find(r => r.id === relicId)

  if (!relic) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-zinc-200 relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${relic.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.4)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      {/* Content */}
      <div className="relative z-10">
        {/* Nav */}
        <div className="bg-black/50 backdrop-blur-md border-b border-zinc-800">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-amber-500 font-bold text-lg">
              Stormbreakers - RunningWolf
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-zinc-400 hover:text-amber-500">Home</Link>
              <Link href="/relics" className="text-zinc-400 hover:text-amber-500">Relics</Link>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Progress */}
          <div className="flex justify-between text-sm text-zinc-500 mb-8">
            <span className="text-amber-500">{relic.progress}</span>
            <span>Journey Progress: {relic.progress.replace(' / ', ' of ')} Relics</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-3">
            {relic.title}
          </h1>
          <p className="text-zinc-400 text-xl mb-12">
            {relic.subtitle}
          </p>

          {/* Scripture */}
          <div className="border-l-4 border-amber-500 pl-6 mb-4">
            <p className="text-xl italic text-zinc-300 leading-relaxed">
              "{relic.verse}"
            </p>
          </div>
          <p className="text-zinc-500 text-sm mb-8 ml-6">{relic.ref}</p>

          {/* Tags */}
          <p className="text-zinc-600 text-xs tracking-widest mb-12">
            {relic.tags}
          </p>

          {/* Album Art Placeholder */}
          <div className="w-full h-px bg-zinc-800 mb-8"></div>

          {/* Relic Experience */}
          <div className="mb-6">
            <p className="text-amber-500 text-sm tracking-widest mb-4">
              ▶ RELIC EXPERIENCE
            </p>
          </div>

          {/* YouTube Embed */}
          <div className="aspect-video bg-zinc-900 mb-12 border border-zinc-800 rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${relic.videoId}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Devotional */}
          <div className="border-t border-zinc-800 pt-8">
            <h3 className="text-amber-500 font-serif text-2xl mb-4">
              {relic.devotionalTitle}
            </h3>
            <p className="text-zinc-300 leading-loose">
              {relic.devotional}
            </p>
          </div>

          {/* Nav */}
          <div className="flex justify-between mt-16 pt-8 border-t border-zinc-800">
            {relicId > 1 ? (
              <Link href={`/relics/${relicId - 1}`} className="text-zinc-500 hover:text-amber-500">
                ← Relic {relicId - 1}
              </Link>
            ) : <div />}
            {relicId < relics.length ? (
              <Link href={`/relics/${relicId + 1}`} className="text-zinc-500 hover:text-amber-500">
                Relic {relicId + 1} →
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
    </main>
  )
}
