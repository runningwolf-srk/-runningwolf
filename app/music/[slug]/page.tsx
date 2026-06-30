"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

type Relic = {
  title: string;
  subtitle: string;
  description: string;
  scripture: string;
  scriptureRef: string;
  lyrics?: string;
  story?: string;
  audioUrl?: string;
  status?: "live" | "coming-soon" | "new-music" | "locked";
  price?: number;
};

const RELICS: Record<string, Relic> = {
  "horn-of-war": {
    title: "Horn of War",
    subtitle: "The Call of Battle",
    description: `A battle hymn for the weary. This relic awakens the warrior spirit.`,
    scripture: `Every person must decide whether to stand or retreat. It's not an easy battle. It calls the faithful to stand.`,
    scriptureRef: "Ephesians 6:13",
    lyrics: `Sound the horn\nWake the dawn\nWe march at first light`,
    story: `The horn was forged in the fires of the first war. When blown, it calls all who hear it to remember their oath.`,
    audioUrl: "/audio/horn-of-war.mp3",
    status: "live"
  },
  "wolf-of-the-sage": {
    title: "Wolf of the Sage",
    subtitle: "Faith sharpened in the fire of brotherhood",
    description: `A relic of wisdom and ferocity. The wolf runs with the pack, but thinks with the sage.`,
    scripture: `As iron sharpens iron, so one person sharpens another.`,
    scriptureRef: "Proverbs 27:17",
    lyrics: `Eyes in the dark\nTeeth in the light\nWe run as one`,
    story: `The sage raised the wolf pup on scripture and steel. Now the wolf guards the sacred texts.`,
    audioUrl: "/audio/wolf-of-the-sage.mp3",
    status: "new-music", // LOCKED - Tier 2 or 3
    price: 7
  },
  "lions-mane": {
    title: "Lion's Mane",
    subtitle: "Crown of Courage",
    description: `To wear the mane is to carry the weight of the pride.`,
    scripture: `Be strong and courageous. Do not be afraid; do not be discouraged.`,
    scriptureRef: "Joshua 1:9",
    lyrics: `Roar through the pain\nReign through the flame`,
    story: `The mane was taken from the first lion that bowed to the King. It holds no fear.`,
    audioUrl: "/audio/lions-mane.mp3",
    status: "coming-soon"
  }
};

// Simple 3-tier check using localStorage
function usePaymentAccess() {
  const [tier, setTier] = useState<0 | 1 | 2 | 3>(0);
  
  useEffect(() => {
    const savedTier = localStorage.getItem("warrior_tier");
    if (savedTier) setTier(Number(savedTier) as 0 | 1 | 2 | 3);
  }, []);

  const unlockTier = (newTier: 1 | 2 | 3) => {
    localStorage.setItem("warrior_tier", String(newTier));
    setTier(newTier);
  };

  const hasStory = tier === 1 || tier === 3;
 const hasNewMusic = tier === 2 || tier === 3;

 return { tier, hasStory, hasNewMusic, unlockTier };
 }

// Paywall Component
function Paywall({ tier, price, onUnlock }: { tier: string; price: number; onUnlock: () => void }) {
  return (
    <div className="border-2 border-amber-500 bg-black/80 p-6 rounded-lg text-center">
      <h3 className="text-2xl font-bold text-amber-400 mb-2">🔒 LOCKED RELIC</h3>
      <p className="text-gray-300 mb-4">Unlock {tier} access for ${price}</p>
      <button
        onClick={onUnlock}
        className="bg-amber-600 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded"
      >
        Unlock for ${price}
      </button>
      <p className="text-xs text-gray-500 mt-3">*Demo: Click to simulate payment</p>
    </div>
  );
}

export default function RelicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const relic = RELICS; // ← CRITICAL: MAKE SURE THIS SAYS [slug]
  
  const [storyMode, setStoryMode] = useState(false);
  const [isNarrating, setIsNarrating] = useState(false);
  const { hasStory, hasNewMusic, unlockTier } = usePaymentAccess();

  useEffect(() => {
    if (!storyMode ||!relic?.story) return;
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, [storyMode, relic]);

  const handleNarrate = () => {
    if (!relic?.story) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(relic.story);
    utterance.onstart = () => setIsNarrating(true);
    utterance.onend = () => setIsNarrating(false);
    window.speechSynthesis.speak(utterance);
  };

  if (!relic) {
    return <main className="p-8 text-center">Relic not found</main>;
  }

  const storyLocked = relic.story &&!hasStory;
  const musicLocked = relic.status === "new-music" &&!hasNewMusic;

  return (
    <main className="min-h-screen bg-zinc-950 text-gray-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-400 mb-2">{relic.title}</h1>
        <p className="text-xl text-gray-400 mb-6">{relic.subtitle}</p>
        
        <div className="bg-zinc-900 p-6 rounded-lg mb-6">
          <p className="text-gray-300 mb-4">{relic.description}</p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-400">
            {relic.scripture}
            <cite className="block text-amber-500 mt-2 not-italic">— {relic.scriptureRef}</cite>
          </blockquote>
        </div>

        {relic.audioUrl && (
          <div className="mb-6">
            {musicLocked? (
              <Paywall 
                tier="New Music" 
                price={relic.price || 7} 
                onUnlock={() => unlockTier(2)} 
              />
            ) : (
              <audio controls className="w-full" src={relic.audioUrl} />
            )}
          </div>
        )}

        {relic.lyrics && (
          <div className="bg-zinc-900 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-3">Lyrics</h2>
            <pre className="whitespace-pre-wrap text-gray-300 font-sans">{relic.lyrics}</pre>
          </div>
        )}

        {relic.story && (
          <div className="bg-zinc-900 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-bold text-amber-400">Story</h2>
              {!storyLocked && (
                <button
                  onClick={() => setStoryMode(!storyMode)}
                  className="bg-amber-600 hover:bg-amber-500 text-black px-4 py-2 rounded font-bold"
                >
                  {storyMode? "Hide Story" : "Read Story"}
                </button>
              )}
            </div>

            {storyLocked? (
              <Paywall 
                tier="Story Mode" 
                price={5} 
                onUnlock={() => unlockTier(1)} 
              />
            ) : storyMode? (
              <>
                <p className="text-gray-300 mb-4">{relic.story}</p>
                <button
                  onClick={handleNarrate}
                  disabled={isNarrating}
                  className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded"
                >
                  {isNarrating? "Narrating..." : "🔊 Narrate"}
                </button>
              </>
            ) : null}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => unlockTier(3)}
            className="bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-bold px-8 py-4 rounded-lg text-lg"
          >
            Unlock All Access - $10
          </button>
          <p className="text-xs text-gray-500 mt-2">Story Mode + New Music + Future Relics</p>
        </div>
      </div>
    </main>
  );
        }

