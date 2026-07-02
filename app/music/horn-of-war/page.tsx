export default function HornOfWarRelic() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-amber-500 text-sm uppercase mb-2">Hall of Relics</p>
          <h1 className="text-4xl font-bold mb-2">Horn of War</h1>
          <p className="text-zinc-400">RunningWolf</p>
        </div>

        {/* YouTube War Anthem */}
        <div className="mb-8 rounded-lg overflow-hidden border border-zinc-800">
          <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/9vP0NPrEv9s" 
            title="Horn of War - Lord of Lords"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full aspect-video"
          />
        </div>

        <div className="border-l-4 border-amber-500 pl-4 mb-8 bg-zinc-900/50 py-4">
          <p className="text-zinc-300 italic">
            "Blow the trumpet in Zion; sound the alarm on my holy hill."
          </p>
          <p className="text-amber-500 text-sm mt-2">Joel 2:1</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-serif text-white mb-4">THE SILENCE</h2>
          <p className="text-zinc-300 leading-loose font-sans">
            Before any war begins, the silence must break. The horn is not music - it is command. 
            God doesn't whisper when kingdoms are at stake. He sounds the alarm. 
            The faithful don't negotiate with darkness. They stand when the horn calls.
          </p>
        </div>

        <div className="text-center mb-12">
          <button className="bg-zinc-800 hover:bg-amber-600 text-zinc-100 px-8 py-3 rounded-lg transition-colors">
            👍 This hit
          </button>
        </div>

        <div className="text-center">
          <a href="/saga/1" className="text-zinc-500 hover:text-amber-500 text-sm">
            Read the full chapter → THE HORN
          </a>
        </div>
      </div>
    </main>
  )
}
