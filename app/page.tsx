<section className="relative h-screen w-full bg-black">
  <Image 
    src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
    alt="RunningWolf - The Stormbreaker"
    fill
    className="object-contain object-center" // Changed from object-cover
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
  <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 text-center px-4">
    <h1 className="text-5xl md:text-8xl font-extrabold mb-4 drop-shadow-2xl">
      JESSY MARQUEZ
    </h1>
    <p className="text-2xl md:text-4xl text-red-500 font-bold mb-8 drop-shadow-2xl">
      RUNNINGWOLF
    </p>
    <Link 
      href="/heaven-calling" 
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all hover:scale-105 border border-red-400/30"
    >
      HEAR THE FIRST HYMN →
    </Link>
  </div>
</section>
