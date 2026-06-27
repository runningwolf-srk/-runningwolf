export type RelicEnding = 'declarative' | 'metaphor' | 'unresolved';
export type RelicTheme = 'war' | 'worship' | 'fire';

export interface Relic {
  slug: string;
  relicNumber: number;
  title: string;
  tagline: string;
  byLine: string;
  theme: RelicTheme;
  coverImage: string;
  bgImage: string;
  youtubeId: string;
  written: string;
  origin: string;
  story: string[];
  meaning: string;
  meaningType: RelicEnding;
}

export const relics: Relic[] = [
  {
    slug: 'horn-of-war',
    relicNumber: 1,
    title: 'Horn of War',
    tagline: 'The call to stand before the battle begins.',
    byLine: 'By His Call We Rise',
    theme: 'war',
    coverImage: '/covers/horn-of-war.webp',
    bgImage: '/covers/horn-of-war.webp',
    youtubeId: 'dQw4w9WgXcQ', // REPLACE WITH YOUR YOUTUBE ID
    written: '2024',
    origin: 'Composed when silence felt like surrender.',
    story: [
      'Before the first sword was drawn, the horn sounded.',
      'Not to signal fear, but to awaken courage.',
      'When you hear that sound, you choose.',
      'Cower, or charge.'
    ],
    meaning: 'The horn does not ask if you are ready.',
    meaningType: 'unresolved'
  },
  {
    slug: 'iron-collide',
    relicNumber: 2,
    title: 'Iron Collide',
    tagline: 'Faith sharpened in the fire of resistance.',
    byLine: 'By His Strength We Endure',
    theme: 'war',
    coverImage: '/covers/iron-collide.webp',
    bgImage: '/covers/iron-collide.webp',
    youtubeId: 'dQw4w9WgXcQ', // REPLACE
    written: '2024',
    origin: 'Born where comfort died.',
    story: [
      'Two blades. One forge. No mercy.',
      'Iron only strengthens when it strikes iron.',
      'Every trial was a hammer. Every enemy, an anvil.',
      'Stop praying for easy battles. Start praying for stronger steel.'
    ],
    meaning: 'The anvil knows your name.',
    meaningType: 'metaphor'
  },
  {
    slug: 'iron-collide-worship',
    relicNumber: 3,
    title: 'Iron Collide Worship',
    tagline: 'Where the battlefield becomes an altar.',
    byLine: 'By His Presence We Surrender',
    theme: 'war',
    coverImage: '/covers/iron-collide-worship.webp',
    bgImage: '/covers/iron-collide-worship.webp',
    youtubeId: 'dQw4w9WgXcQ', // REPLACE
    written: '2024',
    origin: 'Written on knees in war dirt.',
    story: [
      'The same battlefield. The same scars. A different sound.',
      'Where defiance once screamed, surrender now kneels.',
      'Not weakness. Weaponized worship.',
      'The enemy expected a sword. He got a song.'
    ],
    meaning: 'Some wars are won bowing.',
    meaningType: 'declarative'
  },
  {
    slug: 'blood-of-cross',
    relicNumber: 4,
    title: 'Blood of the Cross',
    tagline: 'Mercy written in sacrifice. Hope carried through suffering.',
    byLine: 'By His Blood We Are Redeemed',
    theme: 'worship',
    coverImage: '/covers/blood-of-cross.webp',
    bgImage: '/covers/blood-of-cross.webp',
    youtubeId: 'dQw4w9WgXcQ', // REPLACE
    written: '2024',
    origin: 'Written where the sky went dark.',
    story: [
      'Golgotha was not a defeat. It was an invasion.',
      'Hell celebrated for three days.',
      'Then the stone moved.',
      'Every drop was a declaration: "You are mine."'
    ],
    meaning: 'The grave is empty.',
    meaningType: 'unresolved'
  },
  {
    slug: 'heaven-calling',
    relicNumber: 5,
    title: 'Heaven Is Calling',
    tagline: 'When every other voice falls silent, heaven still speaks.',
    byLine: 'By His Voice We Are Known',
    theme: 'worship',
    coverImage: '/covers/heaven-calling.webp',
    bgImage: '/covers/heaven-calling.webp',
    youtubeId: 'dQw4w9WgXcQ', // REPLACE
    written: '2024',
    origin: 'Forged when worship became the only weapon.',
    story: [
      '"Heaven is calling out my name."',
      'Even in stillness, we are not forgotten.',
      'What once felt distant became the sound that draws near.',
      'Divine calling is not earned—it is answered.'
    ],
    meaning: 'God speaks most clearly when words fail.',
    meaningType: 'declarative'
  },
  {
    slug: 'im-on-fire',
    relicNumber: 6,
    title: 'I\'m On Fire',
    tagline: 'The flame of faith was never meant to stay hidden.',
    byLine: 'By His Fire We Are Ignited',
    theme: 'fire',
    coverImage: '/covers/im-on-fire.webp',
    bgImage: '/covers/im-on-fire.webp',
    youtubeId: 'dQw4w9WgXcQ', // REPLACE
    written: '2024',
    origin: 'Born when lukewarm became unbearable.',
    story: [
      'Tongues of fire. Hurricane wind.',
      'Dead religion catching flame.',
      'You cannot fake this fire. You can only carry it.',
      'The difference between a spark and a wildfire is surrender.'
    ],
    meaning: 'The fire does not ask permission.',
    meaningType: 'metaphor'
  },
  {
    slug: 'spiritual-journey',
    relicNumber: 7,
    title: 'Spiritual Journey',
    tagline: 'Survival was never the goal. Purpose was.',
    byLine: 'By His Purpose We Are Led',
    theme: 'fire',
    coverImage: '/covers/spiritual-journey.webp',
    bgImage: '/covers/spiritual-journey.webp',
    youtubeId: 'dQw4w9WgXcQ', // REPLACE
    written: '2024',
    origin: 'Written in the middle of nowhere.',
    story: [
      'The road was longer than promised.',
      'The night, darker than expected.',
      'He was not lost. He was being led.',
      'The destination was never the point. The transformation was.'
    ],
    meaning: 'And the road continues...',
    meaningType: 'unresolved'
  }
];

export function getRelicBySlug(slug: string): Relic | undefined {
  return relics.find(r => r.slug === slug);
}

export function getAdjacentRelics(slug: string) {
  const currentIndex = relics.findIndex(r => r.slug === slug);
  const prev = relics[currentIndex - 1] || relics[relics.length - 1];
  const next = relics[currentIndex + 1] || relics[0];
  return { prev, next, currentIndex };
}
