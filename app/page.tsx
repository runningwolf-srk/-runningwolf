import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        
        {/* Avatar */}
        <div className="w-48 h-48 rounded-full mx-auto mb-8 border-2 border-amber-500/30 overflow-hidden">
          <img
            src="/729068345_1706992463868756_8236103091302264582_n.jpg"
            alt="RunningWolf - Stormbreaker"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-amber-500 mb-4 font-serif">
          STORMBREAKERS
        </h1>
        
        <p className="text-zinc-400 text-lg mb-2">
          RunningWolf - Jessy Marquez
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-amber-500/50 mx-auto my-6"></div>

        {/* Tagline */}
        <p className="
