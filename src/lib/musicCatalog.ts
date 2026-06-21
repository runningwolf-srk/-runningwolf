export type Track = {
  id: string
  title: string
  artist: string
  youtubeId?: string
}

export const musicCatalog: Track[] = [
  { id: "track-1", title: "Song 1", artist: "RunningWolf", youtubeId: "" },
  { id: "track-2", title: "Song 2", artist: "RunningWolf", youtubeId: "" },
  { id: "track-3", title: "Song 3", artist: "RunningWolf", youtubeId: "" }
]
