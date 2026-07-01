import Link from 'next/link'
import { notFound } from 'next/navigation'

const relics = [
  {
    id: 1,
    title: "HORN OF WAR",
    subtitle: "A BATTLE CRY. A LEGEND RISES.",
    videoId: "M4wGCg5oCx0", // HORN OF WAR
    verse: "Blow the trumpet in Zion, declare a holy fast, call a sacred assembly.",
    ref: "Joel 2:1",
    devotional: [
      {
        heading: "The horn does not promise an easy battle.",
        text: "Vikings didn't blow horns to start parties. They blew them to end peace. The sound meant one thing: war has come."
      },
      {
        heading: "It calls the faithful to stand.",
        text: "Standing is a choice. Retreating is easier. But the faithful don't negotiate with darkness."
      }
    ]
  },
  {
    id: 2,
    title: "HEAVEN CALLING",
    subtitle: "THE ASCENT BEGINS.",
    videoId: "oxNauKuxg4Q", // HEAVEN CALLING - THIS ONE WORKS
    verse: "After this I looked, and there before me was a door standing open in heaven. And the voice I had first heard speaking to me like a trumpet said, 'Come up here, and I will show you what must take place after this.'",
    ref: "Revelation 4:1",
    devotional: [
      {
        heading: "Heaven is not passive.",
        text: "It calls. It invites. It commands ascent. You were not made to live in the valley of survival. You were called to the mountain of encounter."
      }
    ]
  },
  {
    id: 3,
    title: "IRON COLLIDE",
    subtitle: "KINGDOMS CLASH.",
    videoId: "odIsEMUtNJI", // IRON COLLIDE
    verse: "Choose this day whom you will serve... but as for me and my house, we will serve the Lord.",
    ref: "Joshua 24:15",
    devotional: [
      {
        heading: "Iron does not bend unless it chooses to.",
        text: "When kingdoms collide, neutral ground burns first. You cannot serve both fear and faith."
      }
    ]
  },
  {
    id: 4,
    title: "SPIRITUAL JOURNEY",
    subtitle: "THE PATH HOME.",
    videoId: "umDFjJjh0_c", // SPIRITUAL JOURNEY
    verse: "Your word is a lamp to my feet and a light to my path.",
    ref: "Psalm 119:105",
    devotional: [
      {
        heading: "Every saga is a journey.",
        text: "Vikings sailed by stars. Believers walk by the Word. You will get lost without it."
      }
    ]
  },
  {
    id: 5,
    title: "BLOOD OF CROSS",
    subtitle: "THE COVENANT SEALED.",
    videoId: "4lcbjsNLIzo", // BLOOD OF CROSS - FIXED: lowercase L not capital I
    verse: "Without the shedding of blood there is no forgiveness.",
    ref: "Hebrews 9:22",
    devotional: [
      {
        heading: "Viking warriors swore blood oaths.",
        text: "Christ sealed a blood covenant. Their blood was for vengeance. His blood was for victory."
      }
    ]
  },
  {
    id: 6,
    title: "I'M ON FIRE",
    subtitle: "WILDFIRE SPREADS.",
    videoId: "8XQUhWB_N5M", // I'M ON FIRE
    verse: "He will baptize you with the Holy Spirit and fire.",
    ref: "Matthew 3:11",
    devotional: [
      {
        heading: "Vikings feared the wildfire.",
        text: "Christians become the wildfire. The Holy Spirit does not visit. He possesses."
      }
    ]
  }
]

export default function RelicPage({ params }: { params: { id: string } }) {
  const relicId = parseInt(params.id)
  const relic = relics.find(r => r.id === relicId)

  if (!relic) {
    notFound()
  }

  const prevRelic = relicId > 1? relicId - 1 : null
  const nextRelic = relicId < 6? relicId + 1 : null

  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="flex justify-between text-sm text-zinc-500 mb-16 tracking-widest font-sans">
          <Link href="/relics" className="hover:text-amber-500">← Hall of Relics</Link>
          <span>RELIC {String(relic.id).padStart(2, '0')}</span>
          <div className="w-16"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif text-amber-500 mb-4 text-center">
          {relic.title}
        </h1>
        <p className="text-zinc-500 text-center mb-16 font-sans tracking-wider">
          {relic.subtitle}
        </p>

        <div className="aspect-video bg-zinc-900 mb-16 border border-zinc-800">
          <iframe
            src={`https://www.youtube.com/embed/${relic.videoId}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mb-16 text-center">
          <p className="text-xl italic text-zinc-400 font-serif leading-relaxed mb-2">
            "{relic.verse}"
          </p>
          <p className="text-amber-500/70 text-sm font-sans">{relic.ref}</p>
        </div>

        <div className="w-24 h-px bg-zinc-800 mx-auto mb-16"></div>

        <div className="space-y-12">
          <h2 className="text-amber-500 font-serif text-2xl text-center">The Devotional</h2>
          {relic.devotional.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-serif text-white mb-4">{section.heading}</h3>
              <p className="text-zinc-300 leading-loose font-sans">{section.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-24 pt-12 border-t border-zinc-800 text-sm font-sans">
          {prevRelic? (
            <Link href={`/relics/${prevRelic}`} className="text-zinc-500 hover:text-amber-500">
              ← Relic {prevRelic}
            </Link>
          ) : (
            <div></div>
          )}

          {nextRelic? (
            <Link href={`/relics/${nextRelic}`} className="text-zinc-500 hover:text-amber-500">
              Relic {nextRelic} →
            </Link>
          ) : (
            <Link href="/relics" className="text-amber-500">
              Back to Hall
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
