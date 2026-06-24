import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const musicCatalog = [
  {
    slug: "heaven-calling",
    title: "Heaven Is Calling",
    youtubeId: "oxNauKuxg4Q",
    cover: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tagline: "A Worship Anthem",
    story: {
      written: "2023, outside a rehab center in Guymon, OK",
      origin: "The ruins weren’t a metaphor. I was walking through real broken homes, addiction, silent fathers. This hymn is what I heard when I stopped swinging and started listening.",
      lyric: "If the sky falls, I’ll still be singing",
      meaning: "For the ones who think God went silent. He didn’t. You just have to get quiet enough to hear Him calling."
    }
  },
];

export async function generateStaticParams() {
  return musicCatalog.map((track) => ({ slug: track.slug }));
}

export default function TrackPage({ params }: { params: { slug: string } }) {
  const track = musicCatalog.find((t) => t.slug === params.slug);
  if (!track) notFound();

  return (
    <main className="bg-[#0b0b0f] text-[#e8e6e3] min-h-screen">
      <header className="bg-black/80 backdrop-blur-md border-b border-yellow-900/30 px-4 py-3 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-base tracking-wide text-yellow-500">
            Stormbreakers - RunningWolf
          </Link>
          <nav className="flex gap-5 text-xs md:text-sm">
            <Link href="/" className="hover:text-yellow-500">Home</Link>
            <Link href="/music" className="text-yellow-500">Music</Link>
            <Link href="/gallery" className="hover:text-yellow-500">Gallery</Link>
          </nav>
        </div>
      </header>

      <section className="py-12 px-4">
        <div className="max
