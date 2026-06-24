import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-black to-red-950">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        HEAVEN IS <span className="text-red-600">CALLING</span>
      </h1>
      <p className="text-xl text-gray-300 mb-8">RUNNINGWOLF // STORMBREAKERS</p>
      
      <div className="w-full max-w-3xl mb-8">
        <div className="aspect-video w-full">
          <iframe 
            className="rounded-lg w-full h-full shadow-2xl shadow-red-900/50"
            src="https://www.youtube.com/embed/oxNauKuxg4Q?autoplay=1&mute=1" 
            title="Heaven Is Calling - RUNNINGWOLF"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Link 
        href="/music" 
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all hover:scale-105"
      >
        Enter Stormbreakers →
      </Link>
    </div>
  );
}
