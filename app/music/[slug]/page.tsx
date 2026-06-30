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

