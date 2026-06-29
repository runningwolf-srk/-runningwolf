import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

type RelicStory = {
  title: string;
  text: string;
};

type Relic = {
  slug: string;
  title: string;
  subtitle: string;
  scripture: string;
  scriptureRef: string;
  theme: string;
  backgroundImage: string;
  audioUrl?: string;
  youtubeId?: string;
  youtubeIdBonus?: string;
  story: RelicStory[];
  sagaNext?: string;
  sagaPrev?: string;
  status?: "live" | "coming-soon";
};

const RELICS: Record<string, Relic> = {
  "horn-of-war": {
    slug: "horn-of-war",
    title: "Horn of War",
    subtitle: "The call to stand before the battle begins.",
    scripture: "Blow the trumpet in Zion, declare a holy fast, call a sacred assembly.",
    scriptureRef: "Joel 2:1",
    theme: "By His Call We Rise",
    backgroundImage: "/relics/horn-of-war.jpg",
    youtubeId: "M4wGCg5oCx0",
    audioUrl: "/audio/horn-of-war.mp3",
    story: [
      {
        title: "WRITTEN 2024",
        text: "Composed when silence felt like surrender. Before the first sword was drawn, the horn sounded. Not to signal fear, but to awaken courage."
      },
      {
        title: "MEANING",
        text: "When you hear the call, you choose: cower or charge."
      }
    ],
    sagaNext: "iron-collide"
  },
  "iron-collide": {
    slug: "iron-collide",
    title: "Iron Collide",
    subtitle: "Faith sharpened in the fire of resistance.",
    scripture: "As iron sharpens iron, so one person sharpens another.",
    scriptureRef: "Proverbs 27:17",
    theme: "By His Strength We Endure",
    backgroundImage: "/relics/iron-collide.jpg",
    youtubeId: "odIsEMUtNJI",
    youtubeIdBonus: "fIkUDO2emoc",
    audioUrl: "/audio/iron-collide.mp3",
    story: [
      {
        title: "WRITTEN 2024",
        text: "Born where comfort died and calling began. Every trial was a hammer. Every enemy, an anvil."
      },
      {
        title: "MEANING",
        text: "Pressure does not destroy you. It forges you."
      }
    ],
    sagaPrev: "horn-of-war",
    sagaNext: "blood-of-the-cross"
  },
  "blood-of-the-cross": {
    slug: "blood-of-the-cross",
    title: "Blood of the Cross",
    subtitle: "Mercy written in sacrifice. Hope carried through suffering.",
    scripture: "And through him to reconcile to himself all things, making peace by his blood, shed on the cross.",
    scriptureRef: "Colossians 1:20",
    theme: "By His Blood We Are Redeemed",
    backgroundImage: "/relics/blood-of-the-cross.jpg",
    youtubeId: "4lcbjsNLlzo",
    audioUrl: "/audio/blood-of-the-cross.mp3",
    story: [
      {
        title: "WRITTEN 2024",
        text: "Written at Golgotha where defeat became invasion. The cross was not the end. It was the turning point."
      },
      {
        title: "MEANING",
        text: "What looked like loss became eternal victory."
      }
    ],
    sagaPrev: "iron-collide",
    sagaNext: "seven-veils"
  },
  "seven-veils": {
    slug: "seven-veils",
    title: "Seven Veils",
    subtitle: "Truth hidden in layers. Revelation comes to those who seek.",
    scripture: "But when one turns to the Lord, the veil is removed.",
    scriptureRef: "2 Corinthians 3:16",
    theme: "By His Light We See",
    backgroundImage: "/relics/seven-veils.jpg",
    audioUrl: "/audio/seven-veils.mp3",
    story: [
      {
        title: "WRITTEN 2024",
        text: "Seven layers between you and truth. Each veil torn is another lie exposed."
      },
      {
        title: "MEANING",
        text: "You cannot see clearly until the veils fall."
      }
    ],
    sagaPrev: "blood-of-the-cross",
    sagaNext: "ghost-code",
    status: "coming-soon"
  },
  "ghost-code": {
    slug: "ghost-code",
    title: "Ghost Code",
    subtitle: "The unseen war. The written law. The spirit that executes.",
    scripture: "For the letter kills, but the Spirit gives life.",
    scriptureRef: "2 Corinthians 3:6",
    theme: "By His Spirit We Live",
    backgroundImage: "/relics/ghost-code.jpg",
    audioUrl: "/audio/ghost-code.mp3",
    story: [
      {
        title: "WRITTEN 2024",
        text: "There is a code running beneath reality. Most never see it. Few can read it."
      },
      {
        title: "MEANING",
        text: "The ghost in the machine is the Holy Ghost in you."
      }
    ],
    sagaPrev: "seven-veils",
    sagaNext: "lion-rises",
    status: "coming-soon"
  },
  "lion-rises": {
    slug: "lion-rises",
    title: "Lion Rises",
    subtitle: "The king does not ask. He roars.",
    scripture: "The lion has roared. Who will not fear? The Lord GOD has spoken.",
    scriptureRef: "Amos 3:8",
    theme: "By His Authority We Rule",
    backgroundImage: "/relics/lion-rises.jpg",
    audioUrl: "/audio/lion-rises.mp3",
    story: [
      {
        title: "WRITTEN 2024",
        text: "He was a lamb once. Now he returns as a lion. The age of silence is over."
      },
      {
        title: "MEANING",
        text: "When the Lion rises, everything bows."
      }
    ],
    sagaPrev: "ghost-code",
    status: "coming-soon"
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const relic = RELICS[params.slug];
  if (!relic) return { title: "Relic Not Found" };
  return {
    title: `${relic.title} | Hall of Relics`,
    description: `${relic.subtitle} — ${relic.scriptureRef}`
  };
}

export async function generateStaticParams() {
  return Object.keys(RELICS).map((slug) => ({ slug }));
}

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = RELICS[params.slug];

  if (!relic) return notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      <div
        className="relative h-[60vh] flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${relic.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="relative z-10 max-w-4xl">
          <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            {relic.theme}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            {relic.title}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-4 max-w-2xl mx-auto">
            {relic.subtitle}
          </p>
          <div className="border-l-4 border-amber-500 pl-6 text-left max-w-2xl mx-auto mt-8">
            <p className="text-lg md:text-xl italic text-zinc-200">
              "{relic.scripture}"
            </p>
            <p className="text-amber-500 font-bold mt-2">{relic.scriptureRef}</p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {relic.status === "coming-soon"? (
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-16 text-center">
              <p className="text-3xl font-black text-amber-500 tracking-wider">COMING SOON</p>
              <p className="text-zinc-500 mt-3">This relic is being forged.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {relic.audioUrl && (
                <div className="bg-zinc-900 p-6 rounded-xl">
                  <p className="text-sm text-zinc-400 mb-3 uppercase tracking-wider">Audio Relic</p>
                  <audio controls className="w-full" src={relic.audioUrl}>
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}

              {relic.youtubeId && (
                <div>
                  <p className="text-sm text-zinc-400 mb-3 uppercase tracking-wider">Video Scroll</p>
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full rounded-xl"
                      src={`https://www.youtube.com/embed/${relic.youtubeId}?rel=0&modestbranding=1`}
                      title={relic.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {relic.youtubeIdBonus && (
                <div>
                  <p className="text-sm text-zinc-400 mb-3 uppercase tracking-wider">Bonus: Original Version</p>
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full rounded-xl"
                      src={`https://www.youtube.com/embed/${relic.youtubeIdBonus}?rel=0&modestbranding=1`}
                      title={`${relic.title} Original`}
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="bg-black px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-16">
          {relic.story.map((section, i) => (
            <div key={i} className="border-l-2 border-zinc-800 pl-8">
              <h2 className="text-2xl font-black text-amber-500 mb-4 tracking-wide">
                {section.title}
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-light">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-zinc-950 border-t border-zinc-900 px-6 py-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-sm">
          {relic.sagaPrev? (
            <Link
              href={`/music/${relic.sagaPrev}`}
              className="text-zinc-400 hover:text-amber-500 transition-colors font-semibold"
            >
              ← {RELICS[relic.sagaPrev].title}
            </Link>
          ) : (
            <Link href="/music" className="text-zinc-600 hover:text-zinc-400">
              ← Hall of Relics
            </Link>
          )}

          <span className="text-zinc-700 uppercase tracking-widest text-xs">Relic Scroll</span>

          {relic.sagaNext? (
            <Link
              href={`/music/${relic.sagaNext}`}
              className="text-zinc-400 hover:text-amber-500 transition-colors font-semibold"
            >
              {RELICS[relic.sagaNext].title} →
            </Link>
          ) : (
            <span className="text-zinc-700">End of Saga</span>
          )}
        </div>
      </div>
    </main>
  );
            }
