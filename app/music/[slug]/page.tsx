'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const songs = {
  "horn-of-war": {
    title: "Horn of War",
    subtitle: "The Call to Battle",
    youtubeId: "YOUTUBE_ID_HERE",
    bgImage: "https://images.unsplash.com/photo-1519563459339-59bb6d7f5e5e",
    story: (
      <div className="max-w-2xl mx-auto text-left space-y-6 text-zinc-300">
        <h2 className="text-2xl font-bold text-white">The Story</h2>
        <p>
          <strong>Origin:</strong> The horn blast that awakens the sleeping warband. This is the call — not to violence, but to purpose.
        </p>
        <p>
          Every movement needs a sound that says "we're here." This is ours.
        </p>
      </div>
    ),
  },
  "iron-collide": {
    title: "Iron Collide",
    subtitle: "When Faith Meets the Fight",
    youtubeId: "YOUTUBE_ID_HERE", 
    bgImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    story: (
      <div className="max-w-2xl mx-auto text-left space-y-6 text-zinc-300">
        <h2 className="text-2xl font-bold text-white">The Story</h2>
        <p>
          <strong>Origin:</strong> Forged in the fire of spiritual warfare. This track is the sound of a believer who refuses to bow.
        </p>
        <p>
          You don't fight FOR victory. You fight FROM it. The iron collides, but the outcome is already written.
        </p>
        <p className="text-amber-400 font-semibold">
          This is the anthem for when hell presses in — and you press back harder.
        </p>
      </div>
    ),
  },
  "blood-of-cross": {
    title: "Blood of the Cross",
    subtitle: "By His Wounds We Are Healed",
    youtubeId: "YOUTUBE_ID_HERE",
    bgImage: "https://images.unsplash.com/photo-1507692049790-de58290a4334",
    story: (
      <div className="max-w-2xl mx-auto text-left space-y-6 text-zinc-300">
        <h2 className="text-2xl font-bold text-white">The Story</h2>
        <p>
          <strong>Origin:</strong> Forged through cinematic worship and inspired by the sacrifice of Christ. 
          A song of redemption, mercy, and hope that points to the power of the cross.
        </p>
        <p>
          This isn’t background music. This is altar time. This is the moment where war meets worship — 
          where the battle wasn’t fought with swords, but finished with surrender.
        </p>
        <p className="text-red-400 font-semibold">
          Five minutes of worship is a small offering in light of such great sacrifice.
        </p>
      </div>
    ),
  },
  "heaven-calling": {
    title: "Heaven Calling",
    subtitle: "The Sound of Eternity",
    youtubeId: "YOUTUBE_ID_HERE",
    bgImage: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e",
    story: (
      <div className="max-w-2xl mx-auto text-left space-y-6 text-zinc-300">
        <h2
