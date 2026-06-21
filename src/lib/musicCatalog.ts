export type Track = {
  id: string
  title: string
  artist: string
  youtubeId?: string
  coverUrl?: string
}

export const musicCatalog: Track[] = [
  { id: "iron-collide", title: "IRON COLLIDE", artist: "RunningWolf", youtubeId: "dQw4w9WgXcQ", coverUrl: "" },
  { id: "horn-of-war", title: "HORN OF WAR", artist: "RunningWolf", youtubeId: "dQw4w9WgXcQ", coverUrl: "" },
  { id: "running-wolf-iii", title: "RUNNING WOLF III", artist: "RunningWolf", youtubeId: "dQw4w9WgXcQ", coverUrl: "" }
]
