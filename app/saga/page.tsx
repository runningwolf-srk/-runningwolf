// app/saga//page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const relicsData = {
  "horn-of-war": {
    number: "01",
    total: "07",
    title: "Horn of War",
    subtitle: "The Battle Cry",
    verse: "Joel 2:1",
    verseText: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    youtubeId: "M4wGCg5oCx0",
    isVertical: false,
    coverImage: "/horn-of-war.jpg",
    freeSections: [
      {
        title: "THE SILENCE",
        text: "Before the battle, everything is still. The enemy whispers that silence means safety. Heaven says silence is surrender. You’ve been quiet too long. The war didn’t start when you noticed it — it started when you were born."
      },
      {
        title: "THE HORN",
        text: "Mahalla, the companion anthem to Horn of War, wasn't written in a studio. It was birthed at 3 a.m. when addiction was screaming. The Spirit said: 'Blow the horn.' This became the war cry. The distorted guitars are the alarm. The chant is the army assembling."
      }
    ],
    lockedSections: [
      {
        title: "THE ALARM — TIER 3 SAGA",
        text: "You don’t blow the shofar for ambiance. You blow it because the enemy is at the gate. This chapter contains the full battle strategy: how to blow it over your house, over your mind, over your bloodline. Includes the ancient Viking rune breakdown and the prophetic timeline for your chains breaking. Unlock to read the full saga."
      }
    ]
  },
  "iron-collide": {
    number: "02",
    total: "07",
    title: "Iron Collide",
    subtitle: "Sharpened Together",
    verse: "Proverbs 27:17",
    verseText: "As iron sharpens iron, so one person sharpens another.",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    youtubeId: "odIsEMUtNJI",
    isVertical: false,
    coverImage: "/iron-collide.jpg",
    freeSections: [
      {
        title: "THE FORGE",
        text: "Iron doesn’t sharpen iron by accident. It takes heat. Pressure. Friction. God will put people in your life that scrape against your pride until Christ is formed in you."
      }
    ],
    lockedSections: [
      {
        title: "THE COLLISION — TIER 3 SAGA",
        text: "Hybrid is the sound of two kingdoms colliding. This locked chapter reveals the Viking forge ritual, the Isaiah 42:13 battle map, and how to identify if you’re fighting FOR victory or FROM it. Includes illuminated manuscript pages of the original lyrics written in blood and fire. Upgrade to Tier 3 to unlock the full collision."
      },
      {
        title: "THE EDGE — TIER 3 SAGA",
        text: "Dull swords get people killed. This section contains the sharpening protocol — daily decrees, brotherhood codes, and the enemy’s fear response when saints get sharp. Unlock Tier 3 to access the full armory."
      }
    ]
  },
  "crown-of-thorns": {
    number: "03",
    total: "07",
    title: "Crown of Thorns",
    subtitle: "The King of Pain",
    verse: "Matthew 27:29",
    verseText: "They twisted together a crown of thorns and set it on his head. They put a staff in his right hand. Then they knelt in front of him and mocked him.",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL",
    youtubeId: "umDFjJjh0_c",
    isVertical: false,
    coverImage: "/crown-of-thorns.jpg",
    freeSections: [
      {
        title: "THE MOCKERY",
        text: "They gave Him a crown to humiliate Him. Heaven saw a coronation. Every thorn was meant to shame Him. Every thorn was proof He was taking your place."
      }
    ],
    lockedSections: [
      {
        title: "THE BLOOD — TIER 3 SAGA",
        text: "Every thorn drew blood. This locked chapter contains the medical breakdown of crucifixion, the Genesis 3:18 curse connection, and the specific addictions each thorn paid for. Includes rare artwork of the crown relic. Unlock to see what your shame cost Him."
      },
      {
        title: "THE EXCHANGE — TIER 3 SAGA",
        text: "He wore the crown of curse so you could wear the crown of life. Tier 3 unlocks the full exchange doctrine, James 1:12 activation prayers, and the Viking coronation rite for former addicts. Upgrade to claim your crown."
      }
    ]
  },
  "lion-and-lamb": {
    number: "04",
    total: "07",
    title: "Lion and Lamb",
    subtitle: "The Victorious King",
    verse: "Revelation 5:5",
    verseText: "Then one of the elders said to me, 'Do not weep! See, the Lion of the tribe of Judah, the Root of David, has triumphed. He is able to open the scroll and its seven seals.'",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL",
    youtubeId: "8XQUhWB_N5M",
    isVertical: false,
    coverImage: "/lion-and-lamb.jpg",
    freeSections: [
      {
        title: "THE LAMB",
        text: "He didn't come to dominate. He came to be slaughtered. Weakness was the weapon. The cross looked like defeat. Hell thought it won."
      }
    ],
    lockedSections: [
      {
        title: "THE LION — TIER 3 SAGA",
        text: "The same one who was slain now roars. This saga chapter contains the Revelation 5 scroll breakdown, the 7 seals activation, and how to roar from your wounds. Includes Viking battle roar phonetics. Unlock Tier 3 to awaken the Lion."
      },
      {
        title: "THE THRONE — TIER 3 SAGA",
        text: "He rules not by force, but by sacrifice. Tier 3 reveals Kingdom logic, the scar credentials, and how to stop trying to be the lion. Let the Lamb in you become the Lion through you. Full saga unlock required."
      }
    ]
  },
  "blood-of-cross": {
    number: "05",
    total: "07",
    title: "Blood of the Cross",
    subtitle: "The Covenant",
    verse: "Colossians 1:20",
    verseText: "And through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross.",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL • SACRED",
    youtubeId: "4lcbjsNLlzo",
    isVertical: true,
    coverImage: "/blood-of-cross.jpg",
    freeSections: [
      {
        title: "THE PRICE",
        text: "Peace wasn’t negotiated. It was bled for. The cross wasn’t a symbol of religion — it was a receipt. Paid in full."
      }
    ],
    lockedSections: [
      {
        title: "THE RECONCILING — TIER 3 SAGA",
        text: "Colossians says He reconciled ALL things. This locked chapter lists every addiction, trauma, and bloodline curse covered. Includes communion activation rite and why hell hates this song. Upgrade to see the full reconciliation."
      },
      {
        title: "THE COVENANT — TIER 3 SAGA",
        text: "This is why the enemy hates communion. Tier 3 unlocks the blood covenant law, how to plead the blood, and the Viking oath ritual for permanent freedom. You’re not trying to get clean. You ARE clean. Unlock to enforce it."
      }
    ]
  },
  "heaven-calling": {
    number: "06",
    total: "07",
    title: "Heaven Is Calling",
    subtitle: "The Voice That Finds Us",
    verse: "1 Samuel 3:10",
    verseText: "The Lord came and stood there, calling as at the other times, 'Samuel! Samuel!' Then Samuel said, 'Speak, for your servant is listening.'",
    tags: "CINEMATIC WORSHIP • VIKING • ORCHESTRAL • CHORAL",
    youtubeId: "oxNauKuxg4Q",
    isVertical: true,
    coverImage: "/heaven-calling.jpg",
    freeSections: [
      {
        title: "THE WHISPER",
        text: "Heaven doesn't always shout. Sometimes it whispers your name in the dark. 3 a.m. When you're numb. When you're running."
      }
    ],
    lockedSections: [
      {
        title: "THE ANSWER — TIER 3 SAGA",
        text: "Samuel said 'Speak, for your servant is listening.' This saga reveals your true name — not the one your past gave you. The name spoken before you were born. Includes Viking naming ceremony and how to hear Him at 3 a.m. Unlock Tier 3."
      },
      {
        title: "THE VIKING — TIER 3 SAGA",
        text: "Why Viking? This locked chapter explains the war hymn doctrine, axe-dropping surrender rite, and drum frequencies that match heaven’s heartbeat. This is what it sounds like when a warrior hears his King. Upgrade for the full call."
      }
    ]
  },
  "scars-that-preach": {
    number: "07",
    total: "07",
    title: "Scars That Preach",
    subtitle: "The Living Testimony",
    verse: "Job 23:10",
    verseText: "But he knows the way that I take; when he has tested me, I will come forth as gold.",
    tags: "CINEMATIC WORSHIP • TESTIMONY • ORCHESTRAL",
    youtubeId: "",
    isVertical: false,
    coverImage: "/scars-that-preach.jpg",
    freeSections: [],
    lockedSections: [
      {
        title: "THE FIRE — TIER 3 SAGA",
        text: "Gold isn’t found. It’s refined. This entire relic is Tier 3 sealed. Unlock to read how your scars become sermons. Includes Job’s furnace map, Revelation 12:11 activation, and the final Viking saga. Walk the first six relics, then return."
      }
    ],
    status: "sealed"
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const relic = relicsData[slug as keyof typeof relicsData];
  if (!relic) return { title: "Relic Not Found" };
  return {
    title: `${relic.title} - Stormbreakers Saga`,
    description: relic.subtitle,
  };
}

export default async function SagaRelicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const relic = relicsData[slug as keyof typeof relicsData];

  if (!relic) {
    notFound();
  }

  const isFullySealed = "status" in relic && relic.status === "se
