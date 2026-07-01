import Link from 'next/link'

const chapters = [
  {
    id: 1,
    title: "THE HORN",
    track: "HORN OF WAR",
    subtitle: "A BATTLE CRY. A LEGEND RISES.",
    verse: "Blow the trumpet in Zion, declare a holy fast, call a sacred assembly.",
    ref: "Joel 2:1",
    story: "Before any war begins, the silence must break. The horn is not music - it is command. God doesn't whisper when kingdoms are at stake. He sounds the alarm. This track is the moment heaven interrupts earth. The faithful don't negotiate with darkness. They stand when the horn calls."
  },
  {
    id: 2,
    title: "THE SILENCE", 
    track: "SCARS THAT PREACH",
    subtitle: "BORN THROUGH THE FIRE",
    verse: "He was pierced for our transgressions, he was crushed for our iniquities.",
    ref: "Isaiah 53:5",
    story: "Every Viking has scars. Every saint has scars. The enemy uses your wounds to shame you. God uses your wounds to preach. This song is testimony. Silence means you bled for nothing. But when you speak, your scars become weapons. Your pain becomes proof that you survived."
  },
  {
    id: 3,
    title: "THE CHOICE",
    track: "IRON COLLIDE", 
    subtitle: "AN EPIC HARD ROCK ANTHEM",
    verse: "Choose this day whom you will serve... but as for me and my house, we will serve the Lord.",
    ref: "Joshua 24:15",
    story: "Iron does not bend unless it chooses to. When kingdoms collide, neutral ground burns first. This track is the moment of decision. You cannot serve both fear and faith. The battlefield is inside you. Will you retreat to comfort, or collide with your calling?"
  },
  {
    id: 4,
    title: "THE ASCENT",
    track: "HEAVEN CALLING",
    subtitle: "A WORSHIP ANTHEM", 
    verse: "Come up here, and I will show you what must take place after this.",
    ref: "Revelation 4:1",
    story: "Vikings climbed mountains to meet their gods. Christians climb in prayer to meet the true God. Heaven is not passive - it calls. This song is the response. You were not made to live in the valley of survival. You were called to the mountain of encounter."
  },
  {
    id: 5,
    title: "THE JOURNEY",
    track: "SPIRITUAL JOURNEY",
    subtitle: "A JOURNEY TO HIS PRESENCE",
    verse: "Your word is a lamp to my feet and a light to my path.",
    ref: "Psalm 119:105", 
    story: "Every saga is a journey. Every pilgrim has a path. Vikings sailed by stars. Believers walk by the Word. This track is the map. You will get lost without it. You will wander in circles. But with His light, even the wilderness becomes a road home."
  },
  {
    id: 6,
    title: "THE SACRIFICE",
    track: "BLOOD OF CROSS",
    subtitle: "BY HIS WOUNDS WE ARE HEALED",
    verse: "Without the shedding of blood there is no forgiveness.",
    ref: "Hebrews 9:22",
    story: "Viking warriors swore blood oaths. Christ sealed a blood covenant. The difference? Their blood was for vengeance. His blood was for victory. This song is the exchange. Your sin for His righteousness. Your death for His life. The cross is where the war was won."
  },
  {
    id: 7,
    title: "THE CROWN",
    track: "LORD OF LORDS",
    subtitle: "A SPIRITUAL ANTHEM",
    verse: "On his robe and on his thigh he has this name written: King of kings and Lord of lords.",
    ref: "Revelation 19:16",
    story: "Every saga ends with a throne. Every war ends with a king. Vikings fought for Jarls. We bow to the King of kings. This track is the coronation. All other battles bow to this one truth: Jesus reigns. The Stormbreakers don't fight for victory. We fight FROM victory."
  }
]

export default function SagaPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <div className="max-w-3xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="flex justify-between text-sm text-zinc-500 mb-20 tracking-widest font-sans">
          <Link href="/relics" className="hover:text-amber-500">← Relics</Link>
          <span>THE STORMBREAKERS SAGA</span>
          <Link href="/music" className="hover:text-amber-500">Armory →</Link>
        </div>

        {/* Intro */}
        <div className="text-center mb-32">
          <h1 className="text-5xl md:text-7xl font-serif text-amber-500 mb-6">THE SAGA</h1>
          <p className="text-zinc-400">Seven chapters. Seven battles. One King.</p>
          <div className="w-24 h-px bg-amber-500/50 mx-auto mt-8"></div>
        </div>

        {/* Chapters */}
        {chapters.map((chapter, index) => (
          <section key={chapter.id} id={`scene-${chapter.id}`} className="mb-40">
            
            {/* Chapter Header */}
            <p className="text-amber-500 text-sm tracking-[0.3em] mb-4 font-sans">
              CHAPTER {chapter.id}
            </p>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-2">
              {chapter.title}
            </h2>
            <p className="text-amber-500/70 text-sm mb-8 font-sans uppercase tracking-wider">
              From: {chapter.track} - {chapter.subtitle}
            </p>

            {/* Scripture */}
            <div className="border-l-2 border-amber-500 pl-6 mb-8">
              <p className="text-xl italic text-zinc-300 font-serif mb-2 leading-relaxed">
                "{chapter.verse}"
              </p>
              <p className="text-amber-500 font-sans">{chapter.ref}</p>
            </div>

            {/* Story - The Music Meaning */}
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-zinc-300 leading-relaxed font-sans">
                {chapter.story}
              </p>
            </div>

            {/* Divider unless last chapter */}
            {index < chapters.length - 1 && (
              <div className="w-full h-px bg-zinc-800 mt-20"></div>
            )}
          </section>
        ))}

        {/* Footer */}
        <div className="text-center pt-20 border-t border-zinc-800">
          <p className="text-zinc-600 text-sm italic font-serif">
            "By His call we rise. By His blood we stand. By His name we conquer."
          </p>
        </div>

      </div>
    </main>
  )
}
