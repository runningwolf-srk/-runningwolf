import Link from 'next/link'
import { notFound } from 'next/navigation'

const chapters = [
  {
    id: 1,
    title: "THE HORN",
    verse: "Blow the trumpet in Zion, declare a holy fast, call a sacred assembly.",
    ref: "Joel 2:1",
    text: "Before any war begins, the silence must break. The horn is not music - it is command. God doesn't whisper when kingdoms are at stake. He sounds the alarm. The faithful don't negotiate with darkness. They stand when the horn calls."
  },
  {
    id: 2,
    title: "THE SCARS", 
    verse: "He was pierced for our transgressions, he was crushed for our iniquities.",
    ref: "Isaiah 53:5",
    text: "Every Viking has scars. Every saint has scars. The enemy uses your wounds to shame you. God uses your wounds to preach. Silence means you bled for nothing. But when you speak, your scars become weapons. Your pain becomes proof that you survived."
  },
  {
    id: 3,
    title: "THE IRON",
    verse: "Choose this day whom you will serve... but as for me and my house, we will serve the Lord.",
    ref: "Joshua 24:15",
    text: "Iron does not bend unless it chooses to. When kingdoms collide, neutral ground burns first. You cannot serve both fear and faith. The battlefield is inside you. Will you retreat to comfort, or collide with your calling?"
  },
  {
    id: 4,
    title: "THE CALLING",
    verse: "Come up here, and I will show you what must take place after this.",
    ref: "Revelation 4:1",
    text: "Vikings climbed mountains to meet their gods. Christians climb in prayer to meet the true God. Heaven is not passive - it calls. You were not made to live in the valley of survival. You were called to the mountain of encounter."
  },
  {
    id: 5,
    title: "THE PATH",
    verse: "Your word is a lamp to my feet and a light to my path.",
    ref: "Psalm 119:105", 
    text: "Every saga is a journey. Every pilgrim has a path. Vikings sailed by stars. Believers walk by the Word. You will get lost without it. You will wander in circles. But with His light, even the wilderness becomes a road home."
  },
  {
    id: 6,
    title: "THE BLOOD",
    verse: "Without the shedding of blood there is no forgiveness.",
    ref: "Hebrews 9:22",
    text: "Viking warriors swore blood oaths. Christ sealed a blood covenant. The difference? Their blood was for vengeance. His blood was for victory. Your sin for His righteousness. Your death for His life. The cross is where the war was won."
  },
  {
    id: 7,
    title: "THE FIRE",
    verse: "He will baptize you with the Holy Spirit and fire.",
    ref: "Matthew 3:11",
    text: "Vikings feared the wildfire. Christians become the wildfire. This is not emotion - this is invasion. The Holy Spirit does not visit. He possesses. When He sets you ablaze, you don't just feel warm. You become dangerous to darkness."
  }
]

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapterId = parseInt(params.id)
  const chapter = chapters.find(c => c.id === chapterId)
  
  if (!chapter) {
    notFound()
  }

  const prevChapter = chapterId > 1 ? chapterId - 1 : null
  const nextChapter = chapterId < 7 ? chapterId + 1 : null

  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <div className="max-w-2xl mx-auto px-6 py-20">
        
        <div className="flex justify-between text-sm text-zinc-500 mb-16 tracking-widest font-sans">
          <Link href="/saga" className="hover:text-amber-500">← Contents</Link>
          <span>Chapter {chapter.id}</span>
          <div className="w-16"></div>
        </div>

        <article>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-12">
            {chapter.title}
          </h1>

          <div className="mb-12">
            <p className="text-xl italic text-zinc-400 font-serif leading-relaxed mb-2">
              "{chapter.verse}"
            </p>
            <p className="text-amber-500/70 text-sm font-sans">{chapter.ref}</p>
          </div>

          <div className="w-16 h-px bg-zinc-800 mb-12"></div>

          <p className="text-lg text-zinc-300 leading-loose font-sans">
            {chapter.text}
          </p>
        </article>

        <div className="flex justify-between mt-24 pt-12 border-t border-zinc-800 text-sm font-sans">
          {prevChapter ? (
            <Link href={`/saga/${prevChapter}`} className="text-zinc-500 hover:text-amber
