export type Track = {
  id: string
  title: string
  artist: string
  youtubeId?: string
}

export const musicCatalog: Track[] = [
  {
    id: "track-1",
    title: "Track 1",
    artist: "RunningWolf",
    youtubeId: "HNYdZTp1qNc"
  },
  {
    id: "track-2",
    title: "Track 2",
    artist: "RunningWolf",
    youtubeId: "UT1c5Q81kVk"
  },
  {
    id: "track-3",
    title: "Track 3",
    artist: "RunningWolf",
    youtubeId: "GMRfdPSNVZM"
  }
]
