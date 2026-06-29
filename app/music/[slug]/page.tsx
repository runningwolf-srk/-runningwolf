// app/music//page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

type StoryItem = {
  title: string;
  text: string;
};

type SongData = {
  slug: string;
  title: string;
  subtitle: string;
  scripture: string;
  youtubeId: string;
  youtubeIdBonus?: string;
  genre: string;
  story: StoryItem[];
  meaning: string;
  sagaNext?: string;
  sagaPrev?: string;
  trackNumber: string;
};

const songs: Record<string, SongData> = {
  "blood-of-the-cross": {
    slug: "blood-of-the-cross",
    title: "Blood of the Cross",
    subtitle: "The Sacrifice",
    scripture: "But he was pierced for our transgressions, he was crushed for our iniquities. — Isaiah 53:5",
    youtubeId: "YOUR_YOUTUBE_ID_1",
    genre: "Cinematic Worship • Orchestral • Choral",
    story: [
      {
        title: "THE WEIGHT",
        text: "Every sin carried. Every shame lifted. The cross was not symbolic. It was execution."
      },
      {
        title: "THE EXCHANGE", 
        text: "His blood for your freedom. His wounds for your healing. The price was paid in full."
      },
      {
        title: "THE VICTORY",
        text: "Death thought it won. The grave thought it held Him. Three days later, the stone rolled away."
      }
    ],
    meaning: "The cross is not the end of the story. It's where your story begins.",
    sagaNext: "horn-of-war",
    trackNumber: "01 / 07"
  },
  "horn-of-war": {
    slug: "horn-of-war",
    title: "Horn of War",
    subtitle: "The Battle Cry",
    scripture: "As iron sharpens iron, so one person sharpens another. — Proverbs 27:17",
    youtubeId: "odIsEMUtNJI",
    youtubeIdBonus: "fIkUD02emoc",
    genre: "Cinematic Worship • Viking War Hymn • Orchestral",
    story: [
      {
        title: "THE SILENCE",
        text: "Before the battle, everything is still. The enemy whispers that silence means safety. Heaven says silence is surrender."
      },
      {
        title: "THE HORN",
        text: "The call goes out, awakening courage. Not to signal fear, but to summon the faithful. One note breaks the spell."
      },
      {
        title: "THE CHOICE",
        text: "Every person must decide whether to stand or retreat. The battlefield is already inside you. The horn just reveals it."
      }
    ],
    meaning: "The horn does not promise an easy battle. It calls the faithful to stand.",
    sagaNext: "iron-collide",
    sagaPrev: "blood-of-the-cross",
    trackNumber: "02 / 07"
  },
  "iron-collide": {
    slug: "iron-collide",
    title: "Iron Collide",
    subtitle: "Sharpened Together",
    scripture: "As iron sharpens iron, so one person sharpens another. — Proverbs 27:17",
    youtubeId: "4wGCg5oCx0",
    genre: "Cinematic Worship • Viking War Hymn • Orchestral",
    story: [
      {
        title: "THE ANVIL",
        text: "You thought the trial was punishment. It was preparation. Sparks fly when purpose meets pressure."
      },
      {
        title: "THE HAMMER",
        text: "God doesn't remove the blow. He directs it. Every strike shapes you into a weapon for His glory."
      },
      {
        title: "THE BLADE",
        text: "Dull swords get people killed. Let the brotherhood sharpen you. Let the Word hone your edge."
      }
    ],
    meaning: "We are forged in community, not in isolation. The collision is the calling.",
    sagaNext: "white-horse",
    sagaPrev: "horn-of-war",
    trackNumber: "03 / 07"
  },
  "white-horse": {
    slug: "white-horse",
    title: "White Horse",
    subtitle: "The Return",
    scripture: "I saw heaven standing open and there before me was a white horse. — Revelation 19:11",
    youtubeId: "YOUR_YOUTUBE_ID_4",
    genre: "Cinematic Worship • Orchestral • Epic",
    story: [
      {
        title: "THE RIDER",
        text: "Faithful and True. His eyes are like blazing fire. He judges with justice and makes war."
      },
      {
        title: "THE ARMIES",
        text: "Heaven follows. Clothed in fine linen, white and clean. Not to watch, but to conquer."
      },
      {
        title: "THE SWORD",
        text: "From His mouth comes a sharp sword. Not steel, but truth. Every lie will fall."
      }
    ],
    meaning: "He's not coming back as a lamb. He's coming back as a King.",
    sagaNext: "crown-of-thorns",
    sagaPrev: "iron-collide",
    trackNumber: "04 / 07"
  },
  "crown-of-thorns": {
    slug: "crown-of-thorns",
    title: "Crown of Thorns",
    subtitle: "The King of Pain",
    scripture: "They twisted together a crown of thorns and set it on his head. — Matthew 27:29",
    youtubeId: "YOUR_YOUTUBE_ID_5",
    genre: "Cinematic Worship • Orchestral • Choral",
    story: [
      {
        title: "THE MOCKERY",
        text: "They gave Him a crown to humiliate Him. Heaven saw a coronation."
      },
      {
        title: "THE BLOOD",
        text: "Every thorn drew blood. Every drop paid for rebellion you couldn't cover."
      },
      {
        title: "THE EXCHANGE",
        text: "He wore the crown of curse so you could wear the crown of life."
      }
    ],
    meaning: "Your King bled first. Your victory was bought with thorns.",
    sagaNext: "lion-and-lamb",
    sagaPrev: "white-horse",
    trackNumber: "05 / 07"
  },
  "lion-and-lamb": {
    slug: "lion-and-lamb",
    title: "Lion and Lamb",
    subtitle: "The Paradox",
    scripture: "See, the Lion of the tribe of Judah has triumphed. — Revelation 5:5",
    youtubeId: "YOUR_YOUTUBE_ID_6",
    genre: "Cinematic Worship • Orchestral • Choral",
    story: [
      {
        title: "THE LAMB",
        text: "He didn't come to dominate. He came to be slaughtered. Weakness was the weapon."
      },
      {
        title: "THE LION",
        text: "The same one who was slain now roars. The grave couldn't hold Him. Death couldn't keep Him."
      },
      {
        title: "THE THRONE",
        text: "He rules not by force, but by sacrifice. The scars are His credentials."
      }
    ],
    meaning: "He conquered by surrendering. He rules by serving. That's Kingdom logic.",
    sagaNext: "seven-seals",
    sagaPrev: "crown-of-thorns",
    trackNumber: "06 / 07"
  },
  "seven-seals": {
    slug: "seven-seals",
    title: "Seven Seals",
    subtitle: "The End and Beginning",
    scripture: "Then I saw in the right hand of him who sat on the throne a scroll with writing on both sides. — Revelation 5:1",
    youtubeId: "YOUR_YOUTUBE_ID_7",
    genre: "Cinematic Worship • Orchestral • Epic Finale",
    story: [
      {
        title: "THE SCROLL",
        text: "History is written. The end is decided. No one was found worthy to open it."
      },
      {
        title: "THE WORTHY ONE",
        text: "Then the Lamb appeared. Slaughtered, yet standing. He alone can break the seals."
      },
      {
        title: "THE NEW SONG",
        text: "They sang a new song: You are worthy. You purchased people for God. The saga continues in eternity."
      }
    ],
    meaning: "The story doesn't end with judgment. It ends with worship.",
    sagaPrev: "lion-and-lamb",
    trackNumber: "07 / 07"
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const song = songs[params.slug];
  if (!song) return { title: "Relic Not Found" };
  
  return {
    title: `${song.title} | RUNNINGWOLF`,
    description: song.meaning,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const song = songs[params.slug];

  if (!song) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <p className="text-amber-500 text-sm tracking-[0.2em] mb-3">{song.trackNumber}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-3">{song.title}</h1>
          <p className="text-xl text-gray-400 mb-4">{song.subtitle}</p>
          <p className="text-gray-300 italic mb-2">{song.scripture}</p>
          <p className="text-sm text-gray-500">{song.genre}</p>
        </div>

        <div className="aspect-video mb-12 rounded-lg overflow-hidden bg-gray-900">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${song.youtubeId}`}
            title={song.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {song.youtubeIdBonus && (
          <div className="mb-12">
            <p className="text-sm text-amber-500 mb-3 tracking-widest">BONUS: LIVE VERSION</p>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-900">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${song.youtubeIdBonus}`}
                title={`${song.title} Live`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <div className="space-y-10 mb-12">
          {song.story.map((item, index) => (
            <div key={index} className="border-l-2 border-amber-500 pl-6">
              <h2 className="text-2xl font-bold text-amber-500 mb-3 tracking-wide">{item.title}</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg mb-12">
          <p className="text-xl text-gray-100 leading-relaxed">{song.meaning}</p>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-gray-800">
          {song.sagaPrev ? (
            <Link 
              href={`/music/${song.sagaPrev}`} 
              className="text-amber-500 hover:text-amber-400 transition-colors"
            >
              ← Previous Relic
            </Link>
          ) : <div />}
          
          {song.sagaNext && (
            <Link 
              href={`/music/${song.sagaNext}`} 
              className="text-amber-500 hover:text-amber-400 transition-colors ml-auto"
            >
              Next Relic →
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
