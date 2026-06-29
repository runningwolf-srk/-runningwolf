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
        text: "The call goes out, awakening courage. Not to signal fear, but to summon the faithful. One note breaks
