"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type RelicStory = {
  title: string;
  text: string;
};

type Relic = {
  slug: string;
  title: string;
  subtitle: string;
  scripture: string;
  scriptureRef: string;
  theme: string;
  backgroundImage: string;
  audioUrl?: string;
  ambientUrl?: string;
  youtubeId?: string;
  youtubeIdBonus?: string;
  story: RelicStory[];
  meaning: string;
  written: string;
  genre: string;
  relicNumber: string;
  sagaNext?: string;
  sagaPrev?: string;
  status?: "live" | "coming-soon";
};

const RELICS: Record<string, Relic> = {
  "horn-of-war": {
    slug: "horn-of-war",
    title: "Horn of War",
    subtitle: "The call to stand before the battle begins.",
    scripture: "Blow the trumpet in Zion, declare a holy fast, call a sacred assembly.",
    scriptureRef: "Joel 2:1",
    theme: "By His Call We Rise",
    backgroundImage: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp",
    audioUrl: "/audio/horn-of-war.mp3",
    ambientUrl: "/audio/wind-horn.mp3",
    youtubeId: "M4wGCg5oCx0",
    written: "2024",
    genre: "Cinematic Worship • Viking War Hymn • Orchestral",
    relicNumber: "01 / 07",
    story: [
      {
        title: "THE SILENCE",
        text: "Before the battle, everything is still. The enemy whispers that silence means safety. Heaven says silence is surrender."
      },
      {
        title: "THE HORN",
        text: "The call goes out, awakening courage. Not to signal fear, but to summon the faithful. One note breaks the spell."
      },
      {
        title: "THE CHOICE",
        text: "Every person must decide whether to stand or retreat. The battlefield is already inside you. The horn just reveals it."
      }
    ],
    meaning: "The horn does not promise an easy battle. It calls the faithful to stand.",
    sagaNext: "iron-collide"
  },
  "iron-collide": {
    slug: "iron-collide",
    title: "Iron Collide",
    subtitle: "Faith sharpened in the fire of resistance.",
    scripture: "As iron sharpens iron, so one person sharpens another.",
    scriptureRef: "Proverbs 27:17",
    theme: "By His Strength We Endure",
    backgroundImage: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "odIsEMUtNJI",
    youtubeIdBonus: "fIkUDO2emoc",
    written: "2024",
    genre: "Cinematic Worship • Viking War Hymn • Orchestral",
    relicNumber: "02 / 07",
    story: [
      {
        title: "THE ANVIL",
        text: "You thought the trial was punishment. It was preparation. You were placed, not abandoned."
      },
      {
        title: "THE HAMMER",
        text: "Every enemy was an anvil. Every hardship, a hammer. You were not being broken. You were being forged."
      },
      {
        title: "THE EDGE",
        text: "Pressure does not destroy the called. It gives them an edge. What tried to crush you sharpened you."
      }
    ],
    meaning: "You were not meant to survive the fire. You were meant to be shaped by it.",
    sagaPrev: "horn-of-war",
    sagaNext: "blood-of-the-cross"
  },
  "blood-of-the-cross": {
    slug: "blood-of-the-cross",
    title: "Blood of the Cross",
    subtitle: "Mercy written in sacrifice. Hope carried through suffering.",
    scripture: "And through him to reconcile to himself all things, making peace by his blood, shed on the cross.",
    scriptureRef: "Colossians 1:20",
    theme: "By His Blood We Are Redeemed",
    backgroundImage: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "4lcbjsNLlzo",
    written: "2024",
    genre: "Cinematic Worship • Orchestral • Choir",
    relicNumber: "03 / 07",
    story: [
      {
        title: "THE PLACE",
        text: "Golgotha. The place of the skull. They saw a man dying. Heaven saw a king conquering."
      },
      {
        title: "THE WORD",
        text: "It is finished. Not a whisper of defeat. A shout of completion. The debt was paid in full."
      },
      {
        title: "THE EXCHANGE",
        text: "What looked like loss became eternal victory. His blood bought your freedom. His death bought your life."
      }
    ],
    meaning: "The cross was not the end of the story. It was the turning point of history.",
    sagaPrev: "iron-collide",
    sagaNext: "spiritual-journey"
  },
  "spiritual-journey": {
    slug: "spiritual-journey",
    title: "Spiritual Journey",
    subtitle: "Survival was never the goal. Purpose was.",
    scripture: "And we know that in all things God works for the good of those who love him.",
    scriptureRef: "Romans 8:28",
    theme: "By His Purpose We Are Led",
    backgroundImage: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "umDFjJjh0_c",
    written: "2024",
    genre: "Cinematic Worship • Ambient • Orchestral",
    relicNumber: "04 / 07",
    story: [
      {
        title: "THE WILDERNESS",
        text: "The desert was not punishment. It was training. Between broken and becoming, God does His best work."
      },
      {
        title: "THE VOICE",
        text: "You thought God was silent. He was speaking. You just had to get quiet enough to hear Him."
      },
      {
        title: "THE BECOMING",
        text: "You are not lost. You are being led. The path is not the problem. The path is the transformation."
      }
    ],
    meaning: "God wastes no wilderness. Every step is preparing you for where you're going.",
    sagaPrev: "blood-of-the-cross",
    sagaNext: "lord-of-lords"
  },
  "lord-of-lords": {
    slug: "lord-of-lords",
    title: "Lord of Lords",
    subtitle: "Every knee will bow. Every tongue confess.",
    scripture: "On his robe and on his thigh he has this name written: King of kings and Lord of lords.",
    scriptureRef: "Revelation 19:16",
    theme: "By His Authority We Rule",
    backgroundImage: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    written: "2024",
    genre: "Cinematic Worship • Epic • Choir",
    relicNumber: "05 / 07",
    story: [
      {
        title: "THE LAMB",
        text: "He came first as a lamb. Silent before His shearers. Led to slaughter without a word."
      },
      {
        title: "THE LION",
        text: "He returns as a lion. The age of silence is over. The age of the roar has begun."
      },
      {
        title: "THE BOW",
        text: "When the Lion rises, everything bows. Kings. Kingdoms. Demons. You. There is no debate."
      }
    ],
    meaning: "He was slain to receive power. He returns to exercise it.",
    sagaPrev: "spiritual-journey",
    sagaNext: "scars-that-preach",
    status: "coming-soon"
  },
  "scars-that-preach": {
    slug: "scars-that-preach",
    title: "Scars That Preach",
    subtitle: "Born through the fire. Testimony in flesh.",
    scripture: "But he was pierced for our transgressions, he was crushed for our iniquities.",
    scriptureRef: "Isaiah 53:5",
    theme: "By His Wounds We Are Healed",
    backgroundImage: "/file_0000000065a071f5832301f52d11fb80.png",
    written: "2024",
    genre: "Cinematic Worship • Intimate • Strings",
    relicNumber: "06 / 07",
    story: [
      {
        title: "THE FIRE",
        text: "They told you to hide your scars. God said display them. Your pain is someone else's map out of hell."
      },
      {
        title: "THE SERMON",
        text: "Your scars are not shame. They are scripture written in flesh. Every wound is a sermon waiting to be preached."
      },
      {
        title: "THE COMMISSION",
        text: "The fire did not consume you. It commissioned you. You survived for a reason. Now go tell."
      }
    ],
    meaning: "Your testimony is not in what you avoided. It's in what you survived.",
    sagaPrev: "lord-of-lords",
    status: "coming-soon"
  }
};

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = RELICS[params.slug];
  const [isNarrating, setIsNarrating] = useState(false);
  const [storyMode, setStoryMode] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const ambientRef = useRef<HTMLAudioElement>(null);
  const relicRef = useRef<HTMLAudioElement>(null);

  if (!relic) return notFound();

  const prevRelic = relic.sagaPrev? RELICS[relic.sagaPrev] : null;
  const nextRelic = relic.sagaNext? RELICS[relic.sagaNext] : null;

  useEffect(() => {
    if (storyMode) {
      document.body.style.overflow = "hidden";
      if (ambientRef.current) {
        ambientRef.current.volume = 0.2;
        ambientRef.current.play().catch(() => {});
      }
    } else {
      document.body.style.overflow = "auto";
      if (ambientRef.current) ambientRef.current.pause();
      window.speechSynthesis.cancel();
      setIsNarrating(false);
    }
  }, [storyMode]);

  const enterStoryMode = () => {
    setStoryMode(true);
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const exitStoryMode = () => {
    setStoryMode(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const narrateStory = () => {
    if (isNarrating) {
      window.speechSynthesis.cancel();
      setIsNarrating(false);
      return;
    }

    const fullText = `${relic.title}. ${relic.subtitle}. ${relic.story.map(s => `${s.title}. ${s.text}`).join('. ')} ${relic.meaning}`;
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.rate = 0.85;
    utterance.pitch = 0.9;
    utterance.onend = () => setIsNarrating(false);
    setIsNarrating(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <audio ref={ambientRef} loop src={relic.ambientUrl || "/audio/wind-horn.mp3"} preload="none" />

      <div className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={relic.backgroundImage}
            alt={relic.title}
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-amber-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-bold mb-6"
          >
            {relic.theme}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight mb-4 md:mb-6 px-2"
          >
            {relic.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-xl md:text-3xl text-zinc-300 mb-12 max-w-2xl mx-auto px-4 font-light"
          >
            {relic.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <button
              onClick={enterStoryMode}
              className="bg-amber-600 hover:bg-amber-500 text-black font-black py-4 px-12 rounded-lg transition-all hover:scale-105 shadow-2xl shadow-amber-600/40 text-lg tracking-wider"
            >
              ENTER STORY MODE
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
