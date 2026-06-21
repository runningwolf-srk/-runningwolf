// src/lib/musicCatalog.ts

export interface Song {
  id: string
  title: string
  artist: string
  youtubeId: string
  genre: string
  coverArt: string
}

export const musicCatalog: Song[] = [
  {
    id: "iron-collide",
    title: "IRON COLLIDE",
    artist: "RunningWolf",
    youtubeId: "GMRfdPSNVZM",
    genre: "Viking",
    coverArt: "/covers/iron-collide.jpg"
  },
  {
    id: "horn-of-war",
    title: "HORN OF WAR",
    artist: "RunningWolf",
    youtubeId: "UT1c5Q81kVk",
    genre: "Viking",
    coverArt: "/covers/horn-of-war.jpg"
  },
  {
    id: "heaven-calling",
    title: "HEAVEN CALLING",
    artist: "RunningWolf",
    youtubeId: "hRzarTmRdsU",
    genre: "Worship",
    coverArt: "/covers/heaven-calling.jpg"
  },
]]
