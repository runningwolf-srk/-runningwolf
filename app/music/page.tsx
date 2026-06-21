"use client"

import { musicCatalog } from "@/lib/musicCatalog"


export default function Music() {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "48px 24px",
        fontFamily: "system-ui",
        background: "#0b0b0f",
        color: "#e8e0d0",
        minHeight: "100vh",
      }}
    >
      <h1>RunningWolf SRK — Music</h1>
      <p style={{ opacity: 0.7 }}>Viking / Norse selections only</p>

      <div style={{ display: "grid", gap: "24px", marginTop: "32px" }}>
        {musicCatalog.map((t) => (
          <div key={t.id}>
            <h3 style={{ margin: "0 0 8px" }}>{t.title}</h3>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${t.youtube}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: 0, borderRadius: 12 }}
            />
            <p style={{ opacity: 0.6, fontSize: 14 }}>{t.tag}</p>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 48 }}>
        <a href="/" style={{ color: "#e8e0d0" }}>← Home</a>
      </p>
    </main>
  )
}
