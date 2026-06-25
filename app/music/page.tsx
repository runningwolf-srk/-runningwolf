"use client";
import Link from "next/link";

const hymns = [
  {
    slug: "heaven-calling",
    title: "Heaven Is Calling", 
    cover: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tagline: "A Worship Anthem",
    shortStory: "Written when worship was the only weapon left."
  },
  {
    slug: "iron-collide",
    title: "Iron Collide",
    cover: "/iron-collide-cover.webp",
    tagline: "Where Worship Meets War", 
    shortStory: "Metal isn’t evil — silence is."
  },
  {
    slug: "mahalla-rising",
    title: "Mahalla Rising",
    cover: "/mahalla-cover.webp",
    tagline: "Ancient Drums, Eternal King",
    shortStory: "The nations will hear."
  },
  {
    slug: "suno-weapon",
    title: "Suno Weapon", // CHANGE THIS TO REAL TITLE
    cover: "/suno-weapon-cover.webp", // CHANGE THIS FILENAME
    tagline: "Forged by AI, Anointed by Fire", 
    shortStory: "5 minutes of pure warfare."
  },
];

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Hall of Relics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {hymns.map((hymn) => (
          <Link 
            key={hymn.slug} 
            href={`/music/${hymn.slug}`}
            className="group border border-zinc-800 rounded-lg overflow-hidden hover:border-red-600 transition-all"
          >
            <img 
              src={hymn.cover} 
              alt={hymn.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{hymn.title}</h2>
              <p className="text-red-500 mb-3">{hymn.tagline}</p>
              <p className="text-zinc-400">{hymn.shortStory}</p>
              <button className="mt-4 bg-red-600 px-4 py-2 rounded font-bold hover:bg-red-700">
                Enter Shrine →
              </button>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
