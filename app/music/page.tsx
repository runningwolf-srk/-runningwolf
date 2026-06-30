export default function Hall() {
  return (
    <main className="bg-black text-white min-h-screen p-8">
      <h1 className="text-5xl font-bold text-center mb-4 text-yellow-500">HALL OF RELICS</h1>
      <p className="text-gray-400 text-center mb-16">
        An archive of worship relics where Scripture, story, and song are forged together.
      </p>
      
      <div className="max-w-2xl mx-auto space-y-8">
        <a href="/music/stormbreakers-anthem" className="block border border-yellow-500 p-6 hover:bg-yellow-500/10">
          <h2 className="text-2xl font-bold">RELIC 01: STORMBREAKERS ANTHEM</h2>
          <p className="text-gray-400">Isaiah 61:1</p>
        </a>
        
        <a href="/music/wolfs-prayer" className="block border border-yellow-500 p-6 hover:bg-yellow-500/10">
          <h2 className="text-2xl font-bold">RELIC 02: WOLF'S PRAYER</h2>
          <p className="text-gray-400">Psalm 23:4</p>
        </a>
        
        <a href="/music/iron-collide" className="block border border-yellow-500 p-6 hover:bg-yellow-500/10">
          <h2 className="text-2xl font-bold">RELIC 03: IRON COLLIDE</h2>
          <p className="text-gray-400">Proverbs 27:17</p>
        </a>
      </div>
    </main>
  )
}
