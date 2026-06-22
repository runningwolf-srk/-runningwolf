"use client"

import { musicCatalog } from "@/lib/musicCatalog"
import Link from "next/link"

export default function MusicPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0f",
        color: "#e8e0d0",
        fontFamily: "system-ui",
        padding: 24,
      }}
    >
      <h1 style={{ color: "#d4a84b", marginBottom: 8 }}>
        RunningWolf — Music
      </h1>

      <p style={{ opacity: 0.7, marginBottom: 24 }}>
        Catalog / Select a track
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {musicCatalog.map((track) => (
          <a
            key={track.id}
            href={track.youtube}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #2a2a3a",
              borderRadius: 12,
              overflow: "hidden",
              background: "#12121a",
            }}
          >
            <img
              src={track.coverUrl}
              alt={track.title}
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: 12 }}>
              <div style={{ fontWeight: 700, color: "#d4a84b" }}>
                {track.title}
              </div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>
                {track.tag}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div style={{ marginTop: 32 }}>
        <Link href="/" style={{ color: "#d4a84b" }}>
          ← Back Home
        </Link>
      </div>
    </main>
  )
}
