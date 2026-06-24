import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section className="relative h-screen w-full">
        <Image 
          src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
          alt="RunningWolf"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-9xl font-extrabold mb-6">
            JESSY MARQUEZ
          </h1>
          <p className="text-2xl md:text-4xl text-red-500 font-bold mb-12">
            RUNNINGWOLF
          </p>
          <Link 
            href="/heaven-calling" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all hover:scale-105"
          >
            HEAR THE FIRST HYMN →
          </Link>
        </div>
      </section>
    </main>
  );
}
