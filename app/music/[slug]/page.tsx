import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

type Relic = {
  slug: string;
  title: string;
  theme: string;
  scripture: { verse: string; text: string };
  youtubeId?: string;
  youtubeIdBonus?: string; // For Iron Collide Original
  story: string[];
  background: string; // /public/ images
  sagaNext?: string; // slug of next relic
  sagaPrev?: string; // slug of prev relic
  status?: 'live' | 'coming-soon';
};

// RELIC DATA — ADD/EDIT HERE ONLY
const RELICS: Record<string, Relic> = {
  'horn-of-war': {
    slug: 'horn-of-war',
    title: 'Horn of War',
    theme: 'The Call',
    scripture: { verse: 'Joshua 6:5', text: 'When you hear the sound of the horn, all the people shall shout with a great shout.' },
    youtubeId: 'M4wGCg5oCx0',
    story: [
      'This is the summons. The sound that breaks delay.',
      'When the horn blows, the war shifts. You move or you miss it.',
      'No more waiting. No more hiding. The call is now.'
    ],
    background: '/relics/horn-of-war.jpg',
    sagaNext: 'iron-collide'
  },
  'iron-collide': {
    slug: 'iron-collide',
    title: 'Iron Collide',
    theme: 'Pressure',
    scripture: { verse: 'Proverbs 27:17', text: 'As iron sharpens iron, so one man sharpens another.' },
    youtubeId: 'odIsEMUtNJI', // Hybrid
    youtubeIdBonus: 'fIkUDO2emoc', // Original
    story: [
      'Pressure reveals what you are.',
      'Two forces meet. Sparks fly. Weakness burns off.',
      'You don’t survive this by avoiding impact. You get forged by it.'
    ],
    background: '/relics/iron-collide.jpg',
    sagaPrev: 'horn-of-war',
    sagaNext: 'blood-of-the-cross'
  },
  'blood-of-the-cross': {
    slug: 'blood-of-the-cross',
    title: 'Blood of the Cross',
    theme: 'Redemption',
    scripture: { verse: 'Ephesians 1:7', text: 'In Him we have redemption through His blood, the forgiveness of sins.' },
    youtubeId: '4lcbjsNLlzo',
    story: [
      'There is a price for freedom. It was paid in blood.',
      'The cross was not defeat. It was conquest.',
      'Your past ends here. Your future starts now.'
    ],
    background: '/relics/blood-of-the-cross.jpg',
    sagaPrev: 'iron-collide',
    sagaNext: 'heaven-is-calling'
  },
  'heaven-is-calling': {
    slug: 'heaven-is-calling',
    title: 'Heaven Is Calling',
    theme: 'Identity',
    scripture: { verse: 'Romans 8:16', text: 'The Spirit himself testifies with our spirit that we are God’s children.' },
    youtubeId: 'oxNauKuxg4Q',
    story: [
      'You were named before you were born.',
      'The voice calling you is not from this world.',
      'Answer it, and you remember who you are.'
    ],
    background: '/relics/heaven-is-calling.jpg',
    sagaPrev: 'blood-of-the-cross',
    sagaNext: 'im-on-fire'
  },
  'im-on-fire': {
    slug: 'im-on-fire',
    title: "I'm On Fire",
    theme: 'Passion',
    scripture: { verse: 'Luke 12:49', text: 'I have come to bring fire on the earth, and how I wish it were already kindled!' },
    youtubeId: '8XQUhWB_N5M',
    story: [
      'Lukewarm never changed anything.',
      'Passion is not an emotion. It’s a furnace.',
      'Burn for what matters or freeze with the rest.'
    ],
    background: '/relics/im-on-fire.jpg',
    sagaPrev: 'heaven-is-calling',
    sagaNext: 'spiritual-journey'
  },
  'spiritual-journey': {
    slug: 'spiritual-journey',
    title: 'Spiritual Journey',
    theme: 'Growth',
    scripture: { verse: '2 Peter 3:18', text: 'But grow in the grace and knowledge of our Lord and Savior Jesus Christ.' },
    youtubeId: 'umDFjJjh0_c',
    story: [
      'You are not who you were.',
      'The road is long. The weight is real. But you are becoming.',
      'Every step forward is a grave for who you used to be.'
    ],
    background: '/relics/spiritual-journey.jpg',
    sagaPrev: 'im-on-fire',
    sagaNext: 'throne-torn'
  },
  'throne-torn': {
    slug: 'throne-torn',
    title: 'Throne Torn',
    theme: 'Final Revelation',
    scripture: { verse: 'Revelation 19:16', text: 'On his robe and on his thigh he has this name written: King of kings and Lord of lords.' },
    story: [
      'Every false throne falls.',
      'The crown belongs to one.',
      'This is the end of usurpers. The start of true reign.'
    ],
    background: '/relics/throne-torn.jpg',
    sagaPrev: 'spiritual-journey',
    status: 'coming-soon'
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const relic = RELICS[params.slug];
  if (!relic) return { title: 'Relic Not Found' };
  return {
    title: `${relic.title} | Hall of Relics`,
    description: `${relic.theme} — ${relic.scripture.verse}`
  };
}

export async function generateStaticParams() {
  return Object.keys(RELICS).map((slug) => ({ slug }));
}

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = RELICS[params.slug];
  if (!relic) notFound();

  return (
    <main 
      className="min-h-screen bg-black text-zinc-100"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${relic.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        
        {/* Back Button */}
        <Link href="/music" className="inline-block mb-8 text-amber-500 hover:text-amber-400 font-semibold">
          ← All Relics
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-2">{relic.theme}</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6">{relic.title}</h1>
          <div className="border-l-4 border-amber-500 pl-4">
            <p className="text-xl md:text-2xl italic text-zinc-300">"{relic.scripture.text}"</p>
            <p className="text-amber-500 font-bold mt-2">{relic.scripture.verse}</p>
          </div>
        </div>

        {/* Audio / Video Player */}
        {relic.status === 'coming-soon' ? (
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-12 text-center mb-16">
            <p className="text-2xl font-bold text-amber-500">COMING SOON</p>
            <p className="text-zinc-400 mt-2">This relic is being forged.</p>
          </div>
        ) : (
          <div className="space-y-6 mb-16">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${relic.youtubeId}?rel=0&modestbranding=1`}
                title={relic.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {relic.youtubeIdBonus && (
              <div>
                <p className="text-sm text-zinc-400 mb-2">Bonus: Original Version</p>
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${relic.youtubeIdBonus}?rel=0&modestbranding=1`}
                    title={`${relic.title} Original`}
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Story Sections - Scroll Cinematic */}
        <div className="space-y-24 mb-20">
          {relic.story.map((paragraph, i) => (
            <p key={i} className="text-2xl md:text-3xl leading-relaxed font-light text-zinc-200">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Saga Navigation */}
        <div className="flex justify-between border-t border-zinc-800 pt-8">
          {relic.sagaPrev ? (
            <Link href={`/music/${relic.sagaPrev}`} className="text-amber-500 hover:text-amber-400">
              ← {RELICS[relic.sagaPrev].title}
            </Link>
          ) : <div />}
          {relic.sagaNext ? (
            <Link href={`/music/${relic.sagaNext}`} className="text-amber-500 hover:text-amber-400">
              {RELICS[relic.sagaNext].title} →
            </Link>
          ) : <div />}
        </div>

      </div>
    </main>
  );
}
