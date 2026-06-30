// app/music//page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const relicsData = {
  "horn-of-war": {
    number: "01",
    total: "07",
    title: "Horn of War",
    subtitle: "The Battle Cry",
    verse: "Joel 2:1",
    verseText: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    youtubeId: "M4wGCg5oCx0",
    isVertical: false,
    coverImage: "/horn-of-war.jpg",
    sections: [
      {
        title: "THE SILENCE",
        text: "Before the battle, everything is still. The enemy whispers that silence means safety. Heaven says silence is surrender."
      },
      {
        title: "THE HORN",
        text: "Mahalla, the companion anthem to Horn of War, wasn't written in a studio. It was birthed at 3 a.m. when addiction was screaming. The Spirit said: 'Blow the horn.' This became the war cry. The distorted guitars are the alarm. The chant is the army assembling."
      },
      {
        title: "THE ALARM",
        text: "You don’t blow the shofar for ambiance. You blow it because the enemy is at the gate. Blow it over your house. Over your mind. Over your addiction. The day of the Lord is coming — for your chains."
      }
    ]
  },
  "iron-collide": {
    number: "02",
    total: "07",
    title: "Iron Collide",
    subtitle: "Sharpened Together",
    verse: "Proverbs 27:17",
    verseText: "As iron sharpens iron, so one person sharpens another.",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    youtubeId: "odIsEMUtNJI",
    isVertical: false,
    coverImage: "/iron-collide.jpg",
    sections: [
      {
        title: "THE FORGE",
        text: "Iron doesn’t sharpen iron by accident. It takes heat. Pressure. Friction. God will put people in your life that scrape against your pride until Christ is formed in you."
      },
      {
        title: "THE COLLISION",
        text: "Hybrid is the sound of two kingdoms colliding. Your worship against your prison. The drop is the moment God marches out like Isaiah 42:13. You don’t fight FOR victory. You fight FROM it."
      },
      {
        title: "THE EDGE",
        text: "Dull swords get people killed. Let the Spirit sharpen you. Let brotherhood sharpen you. The enemy fears a sharpened saint."
      }
    ]
  },
  "crown-of-thorns": {
    number: "03",
    total: "07",
    title: "Crown of Thorns",
    subtitle: "The King of Pain",
    verse: "Matthew 27:29",
    verseText: "They twisted together a crown of thorns and set it on his head. They put a staff in his right hand. Then they knelt in front of him and mocked him.",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL",
    youtubeId: "umDFjJjh0_c",
    isVertical: false,
    coverImage: "/crown-of-thorns.jpg",
    sections: [
      {
        title: "THE MOCKERY",
        text: "They gave Him a crown to humiliate Him. Heaven saw a coronation. Every thorn was meant to shame Him. Every thorn was proof He was taking your place. The world laughs at broken people. Jesus put on their mockery and made it royal."
      },
      {
        title: "THE BLOOD",
        text: "Every thorn drew blood. Every drop paid for rebellion you couldn't cover. This wasn't a minor cut. This was the curse of Genesis 3:18 — thorns from the ground — being crushed on His brow. Your addiction, your shame, your sin drew blood first from His skull."
      },
      {
        title: "THE EXCHANGE",
        text: "He wore the crown of curse so you could wear the crown of life. James 1:12. Your spiritual journey starts here: Your King bled first. Your victory was bought with thorns. Stop wearing shame like a crown. His blood already bought your freedom."
      }
    ]
  },
  "lion-and-lamb": {
    number: "04",
    total: "07",
    title: "Lion and Lamb",
    subtitle: "The Victorious King",
    verse: "Revelation 5:5",
    verseText: "Then one of the elders said to me, 'Do not weep! See, the Lion of the tribe of Judah, the Root of David, has triumphed. He is able to open the scroll and its seven seals.'",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL",
    youtubeId: "8XQUhWB_N5M",
    isVertical: false,
    coverImage: "/lion-and-lamb.jpg",
    sections: [
      {
        title: "THE LAMB",
        text: "He didn't come to dominate. He came to be slaughtered. Weakness was the weapon. The cross looked like defeat. Hell thought it won. But the Lamb slain was the key to the scroll. Your brokenness isn't your end — it's where His power starts."
      },
      {
        title: "THE LION",
        text: "The same one who was slain now roars. The grave couldn't hold Him. Death couldn't keep Him. The Lion of Judah has triumphed. When you worship from your wounds, you don't sound like a victim. You sound like victory. He roars through your surrender."
      },
      {
        title: "THE THRONE",
        text: "He rules not by force, but by sacrifice. The scars are His credentials. He conquered by surrendering. He rules by serving. That's Kingdom logic. Stop trying to be the lion. Let the Lamb in you become the Lion through you."
      }
    ]
  },
  "blood-of-cross": {
    number: "05",
    total: "07",
    title: "Blood of the Cross",
    subtitle: "The Covenant",
    verse: "Colossians 1:20",
    verseText: "And through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross.",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL • SACRED",
    youtubeId: "4lcbjsNLlzo",
    isVertical: true,
    coverImage: "/blood-of-cross.jpg",
    sections: [
      {
        title: "THE PRICE",
        text: "Peace wasn’t negotiated. It was bled for. The cross wasn’t a symbol of religion — it was a receipt. Paid in full. Every sin you’ve committed, every chain you’ve forged, every lie you’ve believed was nailed there. The blood settled the debt."
      },
      {
        title: "THE RECONCILING",
        text: "Colossians says He reconciled ALL things. Your past. Your family. Your future. Your addiction. Your trauma. Nothing is too far. The blood doesn’t just cover sin — it makes peace where there was war. Between you and God. Between you and yourself."
      },
      {
        title: "THE COVENANT",
        text: "This is why the enemy hates communion. Why he hates worship. Why he hates this song. Because every time you remember the blood, you’re reminding hell it lost. You’re not trying to get clean. You ARE clean. The blood of the cross says so."
      }
    ]
  },
  "heaven-calling": {
    number: "06",
    total: "07",
    title: "Heaven Is Calling",
    subtitle: "The Voice That Finds Us",
    verse: "1 Samuel 3:10",
    verseText: "The Lord came and stood there, calling as at the other times, 'Samuel! Samuel!' Then Samuel said, 'Speak, for your servant is listening.'",
    tags: "CINEMATIC WORSHIP • VIKING • ORCHESTRAL • CHORAL",
    youtubeId: "oxNauKuxg4Q",
    isVertical: true,
    coverImage: "/heaven-calling.jpg",
    sections: [
      {
        title: "THE WHISPER",
        text: "Heaven doesn't always shout. Sometimes it whispers your name in the dark. 3 a.m. When you're numb. When you're running. When addiction is screaming louder than prayer. That's when He calls. Not to condemn you — to summon you."
      },
      {
        title: "THE ANSWER",
        text: "Samuel said 'Speak, for your servant is listening.' That's the whole war. Not your strength. Not your sobriety streak. Your surrender. Heaven is calling your name right now. Not the name your past gave you. The name your Father spoke over you before you were born."
      },
      {
        title: "THE VIKING",
        text: "Why Viking? Because this isn't safe, clean, churchy worship. This is war hymn. This is what it sounds like when a warrior hears his King and drops his axe. The drums are the heartbeat of heaven. The chant is your spirit saying 'Here I am.' Answer the call."
      }
    ]
  },
  "scars-that-preach": {
    number: "07",
    total: "07",
    title: "Scars That Preach",
    subtitle: "The Living Testimony",
    verse: "Job 23:10",
    verseText: "But he knows the way that I take; when he has tested me, I will come forth as gold.",
    tags: "CINEMATIC WORSHIP • TESTIMONY • ORCHESTRAL",
    youtubeId: "",
    isVertical: false,
    coverImage: "/scars-that-preach.jpg",
    status: "sealed",
    sections: [
      {
        title: "THE FIRE",
        text: "Gold isn’t found. It’s refined. Job lost everything and still said 'He knows the way I take.' Your scars aren’t evidence you failed. They’re proof you survived the furnace. And Heaven doesn’t waste scars. It preaches through them."
      },
      {
        title: "THE TESTIMONY",
        text: "Revelation 12:11 — They overcame by the blood of the Lamb and the word of their testimony. Your story is a weapon. The enemy wants you silent because your scars tell the truth: God brings dead things back to life."
      },
      {
        title: "THE SEAL",
        text: "This relic is sealed until the appointed time. Tier 3 unlocks the full saga. The fire, the gold, the voice that says 'I was there too.' Your scars will preach. But first, walk the first six."
      }
    ]
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const relic = relicsData[slug as keyof typeof relicsData];
  if (!relic) return { title: "Relic Not Found" };
  return {
    title: `${relic.title} - Stormbreakers`,
    description: relic.subtitle,
  };
}

export default async function RelicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const relic = relicsData[slug as keyof typeof relicsData];

  if (!relic) {
    notFound();
  }

  const isSealed = "status" in relic && relic.status === "sealed";

  return (
    <main className="min-h-screen text-white antialiased relative bg-black">
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-black"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <header className="w-full border-b border-gray-900 bg-black/60 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-amber-500 font-black tracking-tight text-lg">
            Stormbreakers - RunningWolf
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/music" className="text-amber-500">
              Relics
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10 px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-8">
            <p className="text-xs text-amber-500 font-mono mb-6 tracking-[0.4em]">
              {relic.number} / {relic.total}
            </p>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-3 tracking-tight leading-none">
              {relic.title}
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-light">{relic.subtitle}</p>
          </div>

          <div className="relative my-12 p-8 md:p-12 border border-amber-500/20 bg-gradient-to-br from-gray-950 to-black rounded-xl shadow-[0_0_60px_rgba(245,158,11,0.08)]">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 to-transparent"></div>
            <blockquote>
              <p className="text-xl md:text-2xl text-gray-100 italic leading-relaxed mb-4">
                "{relic.verseText}"
              </p>
              <cite className="text-sm text-amber-500/80 not-italic font-mono tracking-wider">
                {relic.verse}
              </cite>
            </blockquote>
          </div>

          <p className="text-xs text-gray-600 tracking-[0.3em] mb-12 uppercase">{relic.tags}</p>

          {relic.coverImage && (
            <div className="mb-16 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative border border-gray-800 rounded-xl overflow-hidden bg-black">
                <img 
                  src={relic.coverImage} 
                  alt={`${relic.title} Album Art`} 
                  className="w-full h-auto block" 
                />
              </div>
            </div>
          )}

          {isSealed? (
            <div className="mb-16 border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent p-12 text-center rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNWE2MWIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDE2em0wLTEwdi0ySDI0djJoMTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <p className="text-amber-500 font-black text-2xl mb-3 tracking-[0.3em]">🔒 TIER 3 SEALED</p>
                <p className="text-gray-400 text-sm">This relic unlocks when the saga begins. Walk the first six.</p>
              </div>
            </div>
          ) : (
            <div className="mb-20">
              <p className="text-xs text-amber-500 tracking-[0.4em] mb-6 font-mono">▶ RELIC EXPERIENCE</p>
              <div
                className={`${relic.isVertical? "aspect-[9/16] max-w-sm mx-auto" : "aspect-video"} relative group`}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-amber-600/30 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative border border-gray-800 bg-gray-950 rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${relic.youtubeId}?rel=0&modestbranding=1&color=white`}
                    title={relic.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-16">
            {relic.sections.map((section, idx) => (
              <div key={idx} className="relative pl-8 border-l border-gray-800 hover:border-amber-500/50 transition-colors duration-300">
                <div className="absolute -left-[5px] top-0 w-2 h-2 bg-amber-500 rounded-full"></div>
                <h3 className="text-amber-500 font-black text-xl md:text-2xl mb-4 tracking-wide">{section.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{section.text}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-900 mt-20 pt-8 flex justify-between items-center">
            <Link href="/music" className="text-amber-500 hover:text-amber-400 text-sm font-mono tracking-wider transition-colors">
              ← RETURN TO HALL
            </Link>
            <p className="text-xs text-gray-700 tracking-[0.3em]">STORMBREAKERS</p>
          </div>
        </div>
      </section>
    </main>
  );
        }
