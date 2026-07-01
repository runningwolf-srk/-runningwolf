export default function MusicPage() {
  const tracks = [
    { id: 1, title: 'Spiritual Journey', youtubeId: 'umDFjJjh0_c', duration: '4:12' },
    { id: 2, title: "I'm on Fire", youtubeId: '8XQUhWB_N5M', duration: '3:28' },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-6xl font-black text-amber-400 mb-4 text-center">
          STORMBREAKERS
        </h1>
        <p className="text-center text-zinc-400 mb-12">
          Cinematic worship and epic spiritual rock forged in fire.
        </p>

        <div className="space-y-3">
          {tracks.map((track) => (
            <div key={track.id} className="bg-zinc-900 rounded-lg p-4 flex items-center justify-between hover:bg-zinc-800 transition">
              <div className="flex items-center gap-4">
                <span className="text-zinc-500 w-6">{track.id}</span>
                <div>
                  <div className="font-bold text-lg">{track.title}</div>
                  <div className="text-zinc-500 text-sm">{track.duration}</div>
                </div>
              </div>
              <a 
                href={`https://youtube.com/watch?v=${track.youtubeId}`}
                target="_blank"
                className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2 rounded-lg font-bold transition"
              >
                ▶ PLAY
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
