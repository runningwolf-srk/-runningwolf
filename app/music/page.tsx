import Link from 'next/link'

export default function MusicPage() {
  const tracks = [
    { 
      id: 1, 
      title: 'Spiritual Journey', 
      url: 'https://youtu.be/umDFjJjh0_c',
      duration: '3:47'
    },
    { 
      id: 2, 
      title: "I'm on Fire", 
      url: 'https://youtu.be/8XQUhWB_N5M',
      duration: '4:12'
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-amber-400 mb-4">
            STORMBREAKERS MUSIC
          </h1>
          <p className="text-zinc-400">
            Cinematic worship by RunningWolf
          </p>
        </div>
        
        <div className="space-y-4">
          {tracks.map((track) => (
            <div 
              key={track.id} 
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4 hover:border-amber-500/50 transition"
            >
              <div className="flex items-center gap-4">
                <span className="text-zinc-600 text-2xl font-black w-8">
                  {track.id}
                </span>
                <div>
                  <div className="text-xl font-bold">{track.title}</div>
                  <div className="text-zinc-500 text-sm">{track.duration}</div>
                </div>
              </div>
              <a 
                href={track.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-amber-400 text-center"
              >
                PLAY ON YOUTUBE
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-zinc-600 text-sm">
            More tracks coming soon 🔥🐺⚔️
          </p>
          <Link 
            href="/" 
            className="inline-block text-zinc-500 hover:text-amber-400 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
