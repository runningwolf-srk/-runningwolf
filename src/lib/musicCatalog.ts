export type Track = {
  id: string
  title: string
  artist: string
  youtubeId?: string
  note?: string
}

export const musicCatalog: Track[] = [
  {
    id: "iron-collide",
    title: "IRON COLLIDE",
    artist: "RunningWolf",
    youtubeId: "HNYdZTp1qNc",
    note: "Viking energy"
  },
  {
    id: "horn-of-war",
    title: "HORN OF WAR",
    artist: "RunningWolf",
    youtubeId: "UT1c5Q81kVk",
    note: "War cry aesthetic"
  },
  {
    id: "spiritual-journey",
    title: "SPIRITUAL JOURNEY",
    artist: "RunningWolf",
    youtubeId: "GMRfdPSNVZM",
    note: "Cinematic worship"
  }
]
