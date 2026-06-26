import Link from 'next/link';

const relics = [
  { slug: 'heaven-calling', title: 'Heaven Is Calling', hook: 'When every other voice falls silent, heaven still speaks.' },
  { slug: 'iron-collide', title: 'Iron Collide', hook: 'Faith sharpened in the fire of resistance.' },
  { slug: 'iron-collide-worship', title: 'Iron Collide Worship', hook: 'Where the battlefield becomes an altar.' },
  { slug: 'blood-of-cross', title: 'Blood of the Cross', hook: 'Mercy written in sacrifice. Hope carried through suffering.' },
  { slug: 'horn-of-war', title: 'Horn of War', hook: 'The call to stand before the battle begins.' },
  { slug: 'im-on-fire', title: "I'm On Fire", hook: 'Holy fire cannot be contained. It must be released.' },
  { slug: 'spiritual-journey', title: 'Spiritual Journey', hook: 'Survival was never the goal. Purpose was.' },
];

export default function HallOfRelics() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
          HALL OF RELICS
        </h1>
        <p className="text-xl text-zinc-400 mb-16 italic">
          A cinematic worship mythology database
        </p>
        
        <div className="grid gap-6">
          {relics.map((relic) => (
            <Link 
              key={relic.slug}
              href={`/music/${relic.slug}`}
              className="block p-8 border border-zinc-800 rounded-lg hover:border-amber-600 hover:bg-zinc-950 transition-all text-left group"
            >
              <h2 className="text-3xl font-bold mb-2 group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'Cinzel, serif' }}>
                {relic.title}
              </h2>
              <p className="text-zinc-400 italic">
                {relic.hook}
              </p>
            </Link>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
      `}</style>
    </div>
  );
}
