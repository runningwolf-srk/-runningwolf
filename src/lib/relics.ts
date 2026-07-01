import Link from 'next/link';
import Image from 'next/image';
import { RELICS } from '@/src/lib/relics';

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-6xl font-black text-amber-400 mb-12 text-center">HALL OF RELICS</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {RELICS.map((relic) => (
            <Link key={relic.id} href={`/relics/${relic.id}`} className="group">
              <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-amber-500">
                <Image src={relic.cover} alt={relic.title} width={400} height={400} className="w-full aspect-square object-cover" />
                <div className="p-4">
                  <div className="text-amber-500 text-xs font-bold">{relic.subtitle}</div>
                  <h2 className="text-xl font-bold group-hover:text-amber-400">{relic.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
                      }
