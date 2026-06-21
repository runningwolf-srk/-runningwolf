"use client"

import { musicCatalog } from "@/src/lib/musicCatalog"

function getYoutubeId(url: string) {
  const m = url.match(/(?:shorts\/|v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  return m? m[1] : url
}

export default function Music() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px", fontFamily: "system-ui", background: "#0b0b0f", color: "#e8e0d0", minHeight: "100vh" }}>
      <h1>RunningWolf SRK — Music</h1>
      <p style={{ opacity: 0.7 }}>Viking / Norse</p>
      <div style={{ display: "grid", gap: "24px", marginTop: "32px" }}>
        {musicCatalog.map((t) => (
          <div key={t.id}>
            <h3 style={{ margin: "0 0 8px" }}>{t.title}</h3>
            <iframe width="100%" height="180" src={`https://www.youtube.com/embed/${getYoutubeId(t.youtube)}`} title={t.title} allowFullScreen style={{ border: 0, borderRadius: "12px" }} />
          </div>
        ))}
      </div>
    </main>
  )
}
