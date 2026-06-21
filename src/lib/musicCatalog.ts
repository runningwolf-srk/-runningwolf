export type Track = {
  id: string
  title: string
  artist: string
  youtubeId: string
  coverUrl: string
  note?: string
}

export const musicCatalog: Track[] = [
  {
    id: "iron-collide",
    title: "IRON COLLIDE",
    artist: "RunningWolf",
    youtubeId: "HNYdZTp1qNc",
    coverUrl: "/covers/iron-collide.jpg",
    note: "Viking energy"
  },
  {
    id: "horn-of-war",
    title: "HORN OF WAR",
    artist: "RunningWolf",
    youtubeId: "UT1c5Q81kVk",
    coverUrl: "/covers/horn-of-war.jpg",
    note: "War cry aesthetic"
  },
  {
    id: "spiritual-journey",
    title: "SPIRITUAL JOURNEY",
    artist: "RunningWolf",
    youtubeId: "GMRfdPSNVZM",
    coverUrl: "/covers/spiritual-journey.jpg",
    note: "Mystic path"
  }
]
