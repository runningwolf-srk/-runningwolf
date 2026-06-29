"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

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
  youtubeId?: string;
  youtubeIdBonus?: string;
  story: RelicStory[];
  meaning: string;
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
    youtubeId: "M4wGCg5oCx0",
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

  if (!relic) return notFound();

  const prevRelic = relic.sagaPrev ? RELICS[relic.sagaPrev] : null;
  const nextRelic = relic.sagaNext ? RELICS[relic.sagaNext] : null;

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
      {/* HERO */}
      <div className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src={relic.backgroundImage}
            alt={relic.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <p className="text-amber-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-bold mb-4">
            {relic.theme}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight mb-4 md:mb-6 px-2">
            {relic.title}
          </h1>
          <p className="text-xl md:text-3xl text-zinc-300 mb-8 max-w-2xl mx-auto px-4 font-light">
            {relic.subtitle}
          </p>
          
          <button
            onClick={narrateStory}
            className="bg-amber-600 hover:bg-amber-500 text-black font-bold py-3 px-8 rounded-lg transition-colors"
          >
            {isNarrating ? "■ STOP" : "▶ PLAY STORY"}
          </button>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* MUSIC PLAYER - TOP VISIBILITY */}
      {relic.status !== "coming-soon" && relic.youtubeId && (
        <div className="bg-zinc-950 py-12 px-4 md:px-6 border-y border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-zinc-500 mb-4 uppercase tracking-wider text-center">Video Scroll</p>
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${relic.youtubeId}?rel=0&modestbranding=1`}
                title={relic.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* SCRIPTURE SCENE */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-32 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <div className="border-l-4 border-amber-500 pl-6 md:pl-8 text-left">
              <p className="text-2xl md:text-4xl italic text-zinc-200 leading-relaxed font-light">
                "{relic.scripture}"
              </p>
              <p className="text-amber-500 font-bold mt-4 text-lg md:text-xl">{relic.scriptureRef}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* STORY SCENES - 3 PART STRUCTURE */}
      {relic.story.map((scene, i) => (
        <div 
          key={i} 
          className="relative min-h-screen flex items-center justify-center px-4 py-32 bg-black"
        >
          <div className="absolute inset-0 z-0 opacity-15">
            <Image
              src={relic.backgroundImage}
              alt=""
              fill
              className="object-cover blur-sm"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <p className="text-amber-600 font-black text-sm md:text-base mb-4 tracking-[0.3em]">
              SCENE {i + 1}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 leading-tight">
              {scene.title}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-zinc-300 font-light">
              {scene.text}
            </p>
          </motion.div>
        </div>
      ))}

      {/* MEANING - MEMORABLE LINE */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-32 bg-zinc-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="border-t-2 border-b-2 border-amber-600 py-12 px-8">
            <p className="text-2xl md:text-4xl lg:text-5xl font-black text-amber-500 leading-tight">
              {relic.meaning}
            </p>
          </div>
        </motion.div>
      </div>

      {/* BONUS VIDEO */}
      {relic.youtubeIdBonus && relic.status !== "coming-soon" && (
        <div className="bg-black py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-zinc-500 mb-4 uppercase tracking-wider text-center">Original Version</p>
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${relic.youtubeIdBonus}?rel=0&modestbranding=1`}
                title={`${relic.title} Original`}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {relic.status === "coming-soon" && (
        <div className="bg-zinc-950 py-32 px-4 text-center">
          <p className="text-4xl md:text-6xl font-black text-amber-500 tracking-wider">COMING SOON</p>
          <p className="text-zinc-500 mt-4 text-lg">This relic is being forged.</p>
        </div>
      )}

      {/* SAGA NAVIGATION */}
      <div className="bg-black border-t border-zinc-900 px-4 md:px-6 py-8
