import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

type Relic = {
  slug: string;
  title: string;
  scripture: string;
  lyrics: string[];
  audio: string;
  cover: string;
};

const RELICS: Relic[] = [
  {
    slug: 'horn-of-war',
    title: 'Horn of War',
    scripture: 'Joel 2:1 - "Blow the trumpet in Zion; sound the alarm on my holy hill."',
    lyrics: [
      'I hear the horn of war',
      'Calling saints to the front',
      'No more silence, no retreat',
      'We rise with a shout',
      'Victory belongs to the Lord'
    ],
    audio: '/audio/horn-of-war.mp3',
    cover: '/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp',
  },
  {
    slug: 'iron-collide',
    title: 'Iron Collide',
    scripture: 'Proverbs 27:17 - "As iron sharpens iron, so one person sharpens another."',
    lyrics: [
      'When iron collides with iron',
      'Sparks fly in the fire',
      'We are forged in battle',
      'Sharper than before'
    ],
    audio: '/audio/iron-collide.mp3',
    cover: '/placeholder.webp',
  },
  {
    slug: 'crown-of-thorns',
    title: 'Crown of Thorns',
    scripture: 'Matthew 27:29 - "They twisted together a crown of thorns and set it on his head."',
    lyrics: [
      'He wore my crown of thorns',
      'So I could wear His crown',
      'The pain became my glory',
      'The cross became my crown'
    ],
    audio: '/audio/crown-of-thorns.mp3',
    cover: '/placeholder.webp',
  },
  {
    slug: 'lion-and-lamb',
    title: 'Lion and Lamb',
    scripture: 'Revelation 5:5-6 - "See, the Lion of the tribe of Judah... Then I saw a Lamb"',
    lyrics: [
      'He\'s the Lion and the Lamb',
      'Roaring with mercy in His eyes',
      'Conquering through sacrifice',
      'The Lion and the Lamb'
    ],
    audio: '/audio/lion-and-lamb.mp3',
    cover: '/placeholder.webp',
  },
  {
    slug: 'blood-of-the-cross',
    title: 'Blood of the Cross',
    scripture: 'Colossians 1:20 - "Making peace through his blood, shed on the cross."',
    lyrics: [
      'By the blood of the cross',
      'I am redeemed',
      'Every chain is broken',
      'By the blood of the cross'
    ],
    audio: '/audio/blood-of-the-cross.mp3',
    cover: '/placeholder.webp',
  },
  {
    slug: 'heaven-calling',
    title: 'Heaven Calling',
    scripture: 'Philippians 3:14 - "I press on toward the goal for the prize of the upward call of God"',
    lyrics: [
      'I hear heaven calling',
      'Calling me higher',
      'This world is not my home',
      'I\'m running to the throne'
    ],
    audio: '/audio/heaven-calling.mp3',
    cover: '/placeholder.webp',
  },
  {
    slug: 'scars-that-preach',
    title: 'Scars That Preach',
    scripture: 'Galatians 6:17 - "I bear on my body the marks of Jesus."',
    lyrics: [
      'These scars that preach',
      'They tell of His grace',
      'Every wound a witness',
      'Every scar His name'
    ],
    audio: '/audio/scars-that-preach.mp3',
    cover: '/placeholder.webp',
  },
];

export async function generateStaticParams() {
  return RELICS.map((relic) => ({
    slug: relic.slug,
  }));
}

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = RELICS.find((r) => r.slug === params.slug);
  
  if (!relic) notFound();
  
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          href="/music" 
          className="inline-block text-amber-400 hover:text-amber-300 mb-8 font-semibold"
        >
          ← Back to Hall of Relics
        </Link>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <Image 
              src={relic.cover} 
              alt={relic.title}
              width={600}
              height={600}
              className="rounded-xl shadow-2xl w-full border border-amber-900/30"
              priority
            />
          </div>
          
          <div>
            <h1 className="text-5xl font-black text-amber-400 mb-3 tracking-tight">
              {relic.title.toUpperCase()}
            </h1>
            
            <p className="text-zinc-300 mb-6 text-lg leading-relaxed">
              {relic.scripture}
            </p>
            
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-6">
              <h2 className="text-amber-400 font-bold mb-4 text-xl">Prophecy</h2>
              <div className="space-y-2">
                {relic.lyrics.map((line, i) => (
                  <p key={i} className="text-lg text-zinc-200 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <audio controls className="w-full">
              <source src={relic.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </main>
  );
}
