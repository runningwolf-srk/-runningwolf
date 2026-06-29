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
  youtubeId?: string;
  youtubeIdBonus?: string;
  audioFile?: string;
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
    youtubeId: "umDFjJjh0_c",
    audioFile: "blood-of-the-cross.mp3",
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
    trackNumber: "01 / 10"
  },
  "horn-of-war": {
    slug: "horn-of-war",
    title: "Horn of War",
    subtitle: "The Battle Cry",
    scripture: "As iron sharpens iron, so one person sharpens another. — Proverbs 27:17",
    youtubeId: "odIsEMUtNJI",
    youtubeIdBonus: "fIkUDO2emoc",
    audioFile: "horn-of-war.mp3",
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
    trackNumber: "02 / 10"
  },
  "iron-collide": {
    slug: "iron-collide",
    title: "Iron Collide",
    subtitle: "Sharpened Together",
    scripture: "As iron sharpens iron, so one person sharpens another. — Proverbs 27:17",
    youtubeId: "M4wGCg5oCx0",
    audioFile: "iron-collide.mp3",
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
    trackNumber: "03 / 10"
  },
  "white-horse": {
    slug: "white-horse",
    title: "White Horse",
    subtitle: "The Return",
    scripture: "I saw heaven standing open and there before me was a white horse. — Revelation 19:11",
    youtubeId: "8XQUhWB_N5M",
    audioFile: "white-horse.mp3",
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
    trackNumber: "04 / 10"
  },
  "crown-of-thorns": {
    slug: "crown-of-thorns",
    title: "Crown of Thorns",
    subtitle: "The King of Pain",
    scripture: "They twisted together a crown of thorns and set it on his head. — Matthew 27:29",
    youtubeId: "4lcbjsNLlzo",
    audioFile: "crown-of-thorns.mp3",
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
    trackNumber: "05 / 10"
  },
  "lion-and-lamb": {
    slug: "lion-and-lamb",
    title: "Lion and Lamb",
    subtitle: "The Paradox",
    scripture: "See, the Lion of the tribe of Judah has triumphed. — Revelation 5:5",
    youtubeId: "oxNauKuxg4Q",
    audioFile: "lion-and-lamb.mp3",
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
    trackNumber: "06 / 10"
  },
  "seven-seals": {
    slug: "seven-seals",
    title: "Seven Seals",
    subtitle: "The End and Beginning",
    scripture: "Then I saw in the right hand of him who sat on the throne a scroll with writing on both sides. — Revelation 5:1",
    audioFile: "seven-seals.mp3",
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
    sagaNext: "heaven-is-calling",
    trackNumber: "07 / 10"
  },
  "heaven-is-calling": {
    slug: "heaven-is-calling",
    title: "Heaven Is Calling",
    subtitle: "The Invitation",
    scripture: "Come to me, all you who are weary and burdened, and I will give you rest. — Matthew 11:28",
    audioFile: "heaven-is-calling.mp3",
    genre: "Cinematic Worship • Orchestral • Ambient",
    story: [
      {
        title: "THE WHISPER",
        text: "Before the shout, there was a whisper. Heaven calls the broken before it calls the brave."
      },
      {
        title: "THE VOICE",
        text: "Not condemnation. Invitation. The same voice that spoke worlds now speaks your name."
      },
      {
        title: "THE RESPONSE",
        text: "You can run. You can hide. Or you can answer. The call won't force you. But it won't stop."
      }
    ],
    meaning: "Heaven is not distant. It's calling. Right now.",
    sagaPrev: "seven-seals",
    sagaNext: "im-on-fire",
    trackNumber: "08 / 10"
  },
  "im-on-fire": {
    slug: "im-on-fire",
    title: "I'm On Fire",
    subtitle: "The Commission",
    scripture: "I have come to bring fire on the earth, and how I wish it were already kindled! — Luke 12:49",
    audioFile: "im-on-fire.mp3",
    genre: "Cinematic Worship • Rock • Orchestral",
    story: [
      {
        title: "THE SPARK",
        text: "One encounter. One word. One moment with God and the dry wood of your life ignites."
      },
      {
        title: "THE BLAZE",
        text: "This isn't a candle. It's wildfire. It consumes excuses. It burns through fear."
      },
      {
        title: "THE SPREAD",
        text: "Fire doesn't stay contained. Neither do you. Go set the world ablaze."
      }
    ],
    meaning: "You weren't saved to sit. You were set on fire to send.",
    sagaPrev: "heaven-is-calling",
    sagaNext: "spiritual-journey",
    trackNumber: "09 / 10"
  },
  "spiritual-journey": {
    slug: "spiritual-journey",
    title: "Spiritual Journey",
    subtitle: "The Road",
    scripture: "Your word is a lamp for my feet, a light on my path. — Psalm 119:105",
    audioFile: "spiritual-journey.mp3",
    genre: "Cinematic Worship • Orchestral • Ambient",
    story: [
      {
        title: "THE FIRST STEP",
        text: "The journey starts the moment you say yes. Not when you feel ready. When you move."
      },
      {
        title: "THE VALLEY",
        text: "There will be shadows. There will be silence. The Shepherd doesn't leave you there."
      },
      {
        title: "THE SUMMIT",
        text: "The view is worth the climb. But the summit isn't the point. The walk with Him is."
      }
    ],
    meaning: "The destination is Him. The journey is how you get to know Him.",
    sagaPrev: "im-on-fire",
    trackNumber: "10 / 10"
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const song = songs[params.slug];
  if (!song) return { title: "Relic Not Found | RUNNINGWOLF" };
  
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
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <p className="text-amber-500 text-sm tracking-[0.2em] mb-3">{song.trackNumber}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-3">{song.title}</h1>
          <p className="text-xl text-gray-400 mb-4">{song.subtitle}</p>
          <p className="text-gray-300 italic mb-2">{song.scripture}</p>
          <p className="text-sm text-gray-500">{song.genre}</p>
        </div>

        {/* YouTube Embed - only shows if youtubeId exists */}
        {song.youtubeId && (
          <div className="aspect-video mb-8 rounded-lg overflow-hidden bg-gray-900">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${song.youtubeId}`}
              title={song.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Bonus Video - only shows if youtubeIdBonus exists */}
        {song.youtubeIdBonus && (
          <div className="mb-8">
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

        {/* Audio Player - only shows if audioFile exists */}
        {song.audioFile && (
          <div className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-sm text-amber-500 mb-3 tracking-widest">LISTEN TO RELIC AUDIO</p>
            <audio controls className="w-full" preload="metadata">
              <source src={`/audio/${song.audioFile}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        {/* Story Sections */}
        <div className="space-y-10 mb-12">
          {song.story.map((item, index) => (
            <div key={index} className="border-l-2 border-amber-500 pl-6">
              <h2 className="text-2xl font-bold text-amber-500 mb-3 tracking-wide">{item.title}</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Meaning */}
        <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg mb-12">
          <p className="text-xl text-gray-100 leading-relaxed">{song.meaning}</p>
        </div>

        {/* Saga Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-800">
          {song.sagaPrev? (
            <Link 
              href={`/music/${song.sagaPrev}`} 
              className="text-amber-500 hover:text-amber-400 transition-colors min-h- flex items-center"
            >
              ← Previous Relic
            </Link>
          ) : <div />}
          
          <Link 
            href="/music" 
            className="text-gray-400 hover:text-white transition-colors min-h- flex items-center"
          >
            Hall of Relics
          </Link>
          
          {song.sagaNext? (
            <Link 
              href={`/music/${song.sagaNext}`} 
              className="text-amber-500 hover:text-amber-400 transition-colors min-h- flex items-center ml-auto"
            >
              Next Relic →
            </Link>
          ) : <div />}
        </div>
      </div>
    </main>
  );
}
