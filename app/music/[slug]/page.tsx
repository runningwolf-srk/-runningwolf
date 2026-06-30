<section className="flex-1 px-6 py-12 md:py-20">
  <div className="max-w-3xl mx-auto pt-8"> {/* Added pt-8 to fix header overlap */}
    
    <p className="text-xs text-amber-500 font-mono mb-4">{relic.number}</p>
    <h1 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight leading-tight">
      {relic.title}
    </h1>
    <p className="text-gray-400 text-xl mb-8">{relic.subtitle}</p>

    <blockquote className="border-l-2 border-amber-500 pl-6 mb-4">
      <p className="text-lg text-gray-200 italic mb-2">"{relic.verseText}"</p>
      <cite className="text-sm text-gray-500 not-italic">{relic.verse}</cite>
    </blockquote>

    <p className="text-xs text-gray-600 tracking-wider mb-12">{relic.tags}</p>

    <div className="mb-16">
      <p className="text-xs text-amber-500 tracking-[0.3em] mb-4 font-mono">▶ RELIC EXPERIENCE</p>
      {/* FIX: Use aspect-[9/16] for vertical, aspect-video for horizontal */}
      <div className={`${relic.slug === 'blood-of-cross' || relic.slug === 'heaven-calling' ? 'aspect-[9/16] max-w-sm mx-auto' : 'aspect-video'} border border-gray-800 bg-gray-950`}>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${relic.youtubeId}?rel=0&modestbranding=1`}
          title={relic.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    <div className="space-y-12">
      {relic.sections.map((section, idx) => (
        <div key={idx} className="border-l border-gray-800 pl-6">
          <h3 className="text-amber-500 font-black text-lg mb-3 tracking-wide">
            {section.title}
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            {section.text}
          </p>
        </div>
      ))}
    </div>

    <div className="border-t border-gray-900 mt-16 pt-8 flex justify-between items-center">
      <Link href="/music" className="text-amber-500 hover:text-amber-400 text-sm font-mono">
        ← RETURN TO HALL
      </Link>
      <p className="text-xs text-gray-700">STORMBREAKERS</p>
    </div>

  </div>
</section>
