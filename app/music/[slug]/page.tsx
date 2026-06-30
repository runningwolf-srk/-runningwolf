// app/music//page.tsx
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
    coverImage: "/photo6901810056471433797.jpeg", // ← Update this if your actual filename is different
    sections: [
      {
        title: "THE SILENCE",
        text: "Before the battle, everything is still. The enemy whispers that silence means safety. Heaven says silence is surrender."
      },
      {
        title: "THE HORN", 
        text: "Mahalla, the companion anthem to Horn of War, wasn't written in a studio. It was birthed at 3 a.m. when addiction was screaming. The Spirit said: 'Blow the horn.' This became the war cry. The distorted guitars are the alarm. The chant is the army assembling."
      },
      {
        title: "THE ALARM",
        text: "You don’t blow the shofar for ambiance. You blow it because the enemy is at the gate. Blow it over your house. Over your mind. Over your addiction. The day of the Lord is coming — for your chains."
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
    coverImage: "/photo562540372469305624.jpeg", // ← Update this if your actual filename is different
    sections: [
      {
        title: "THE FORGE",
        text: "Iron doesn’t sharpen iron by accident. It takes heat. Pressure. Friction. God will put people in your life that scrape against your pride until Christ is formed in you."
      },
      {
        title: "THE COLLISION",
        text: "Hybrid is the sound of two kingdoms colliding. Your worship against your prison. The drop is the moment God marches out like Isaiah 42:13. You don’t fight FOR victory. You fight FROM it."
      },
      {
        title: "THE EDGE",
        text: "Dull swords get people killed. Let the Spirit sharpen you. Let brotherhood sharpen you. The enemy fears a sharpened saint."
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
    coverImage: "/photo6147556545566856679.jpeg", // ← Update this if your actual filename is different
    sections: [
      {
        title: "THE MOCKERY",
        text: "They gave Him a crown to humiliate Him. Heaven saw a coronation. Every thorn was meant to shame Him. Every thorn was proof He was taking your place. The world laughs at broken people. Jesus put on their mockery and made it royal."
      },
      {
        title: "THE BLOOD", 
        text: "Every thorn drew blood. Every drop paid for rebellion you couldn't cover. This wasn't a minor cut. This was the curse of Genesis 3:18 — thorns from the ground — being crushed on His brow. Your addiction, your shame, your sin drew blood first from His skull."
      },
      {
        title: "THE EXCHANGE",
        text: "He wore the crown of curse so you could wear the crown of life. James 1:12. Your spiritual journey starts here: Your King bled first. Your victory was bought with thorns. Stop wearing shame like a crown. His blood already bought your freedom."
      }
    ]
  },
  "lion-and-lamb": {
    number: "04",
