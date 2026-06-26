import Link from 'next/link';

// ============================================
// HALL OF RELICS — INDEX PAGE v2.1
// Matches the cinematic hook system from [slug]
// ============================================

const relics = [
  { 
    slug: 'heaven-calling', 
    title: 'Heaven Is Calling', 
    hook: 'When every other voice falls silent, heaven still speaks.' 
  },
  { 
    slug: 'iron-collide', 
    title: 'Iron Collide', 
    hook: 'Faith sharpened in the fire of resistance.' 
  },
  { 
    slug: 'iron-collide-worship', 
    title: 'Iron Collide Worship', 
    hook: 'Where the battlefield becomes an altar.' 
  },
  { 
    slug: 'blood-of-cross', 
    title: 'Blood of the Cross', 
    hook: 'Mercy written in sacrifice. Hope carried through suffering.' 
  },
  { 
    slug: 'horn-of-war', 
    title: 'Horn of War', 
    hook: 'The call to stand before the battle begins.' 
  },
  { 
    slug: 'im-on-fire', 
    title: "I'm On Fire", 
    hook: 'Holy fire cannot be contained. It must be released.' 
  },
  { 
    slug: 'spiritual-journey', 
    title: 'Spiritual Journey', 
    hook: 'Survival was never the goal. Purpose was.' 
  },
];

export default function HallOfRelics() {
  return (
    <div className="min-h-screen bg
