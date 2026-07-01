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
      'The battle belongs to the Lord'
    ],
    audio: '/audio/horn-of-war.mp3',
    cover: '/REPLACE_WITH_YOUR_HORN_OF_WAR_UUID.webp',
  },
  {
    slug: 'iron-collide',
    title: 'Iron Collide',
    scripture: 'Proverbs 27:17 - "As iron sharpens iron, so one person sharpens another."',
    lyrics: [
      'Iron collide, sparks in the night',
      'Brother to brother, we stand and fight',
      'No man left behind in this fire',
      'Sharpen my heart with Your fire'
    ],
    audio: '/audio/iron-collide.mp3',
    cover: '/REPLACE_WITH_YOUR_IRON_COLLIDE_UUID.webp',
  },
  {
    slug: 'crown-of-thorns',
    title: 'Crown of Thorns',
    scripture: 'John 19:5 - "Jesus came out wearing the crown of thorns and the purple robe."',
    lyrics: [
      'He wore my crown of thorns',
      'So I could wear His crown of life',
      'Blood for blood, love for shame',
      'Every thorn declares His name'
    ],
    audio: '/audio/crown-of-thorns.mp3',
    cover: '/REPLACE_WITH_YOUR_CROWN_OF_THORNS_UUID.webp',
  },
  {
    slug: 'lion-and-lamb',
    title: 'Lion and Lamb',
    scripture: 'Revelation 5:5-6 - "The Lion of Judah... a Lamb, looking as if it had been slain"',
    lyrics: [
      'He roars like a lion',
      'Bleeds like a lamb',
      'King and sacrifice',
      'I am who I am',
      'Worthy is the Lamb'
    ],
    audio: '/audio/lion-and-lamb.mp3',
    cover: '/REPLACE_WITH_YOUR_LION_AND_LAMB_UUID.webp',
  },
  {
    slug: 'blood-of-the-cross',
    title: 'Blood of the Cross',
    scripture: 'Colossians 1:20 - "...making peace through his blood, shed on the cross."',
    lyrics: [
      'Nothing but the blood',
      'That ran from Calvary',
      'Breaks every chain in me',
      'Speaks a better word for me'
    ],
    audio: '/audio/blood-of-the-cross.mp3',
    cover: '/REPLACE_WITH_YOUR_BLOOD_OF_THE_CROSS_UUID.webp',
  },
  {
    slug: 'heaven-calling',
    title: 'Heaven Calling',
    scripture: 'Philippians 3:14 - "I press on toward the goal... the prize of the upward call of God"',
    lyrics: [
      'I hear heaven calling my name',
      'This world is not my home',
      'Set my eyes on higher ground',
      'Til I wear that golden crown'
    ],
    audio: '/audio/heaven-calling.mp3',
    cover: '/REPLACE_WITH_YOUR_HEAVEN_CALLING_UUID.webp',
  },
  {
    slug: 'scars-that-preach',
    title: 'Scars That Preach',
    scripture: 'Galatians 6:17 - "...for I bear on my body the marks of Jesus."',
    lyrics: [
      'These scars, they preach',
      'A story only pain can teach',
      'He writes glory on my wounds',
      'My brokenness sings of You'
    ],
    audio: '/audio/scars-that-preach.mp3',
    cover: '/REPLACE_WITH_YOUR_SCARS_THAT_PREACH_UUID.webp',
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
    <main className="min-h-screen bg-zinc-950 text-white">
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
              {relic.title}
            </h1>
            
            <p className="text-zinc-400 italic mb-6 text-lg leading-relaxed">
              {relic.scripture}
            </p>
            
            <audio controls className="w-full mb-8 rounded-lg">
              <source src={relic.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
              <h2 className="text-amber-400 font-bold mb-4 text-xl">Lyrics</h2>
              <div className="space-y-3 text-lg text-zinc-200 leading-relaxed">
                {relic.lyrics.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
