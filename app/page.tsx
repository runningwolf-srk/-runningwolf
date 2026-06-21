// app/page.tsx
"use client"

import Link from "next/link"
import { musicCatalog } from "@/lib/musicCatalog"

export default function HomePage() {
  const featured = musicCatalog.find(s => s.id === "heaven-calling")?? musicCatalog[0]

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0f",
        color: "#e8e0d0",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px" }}>
        {/* HERO */}
        <section style={{ textAlign: "center", marginBottom: 56 }}>
          <h1 style={{ fontSize: 52, margin: 0, letterSpacing: "-1px" }}>
            RunningWolf SRK
          </h1>
          <p style={{ opacity: 0.7, marginTop: 8, fontSize: 18 }}>
            Stormbreaker — Guymon, OK
          </p>
          <p style={{ opacity: 0.6, marginTop: 8 }}>
            Viking metal • Cinematic worship • Storm-driven sound
          </p>
          <Link
            href="/music"
            style={{
              display: "inline-block",
              marginTop: 24,
              padding: "12px 24px",
              background: "#d4a84b",
              color: "#0b0b0f",
              borderRadius: 8,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Listen Now →
          </Link>
        </section>

        {/* FEATURED TRACK */}
        <section
          style={{
            background: "#12121a",
            borderRadius: 12,
            padding: 24,
            marginBottom: 48,
          }}
        >
          <h2 style={{ marginTop: 0, color: "#d4a84b" }}>
            Featured: {featured.title}
          </h2>
          <p style={{ opacity: 0.7, marginTop: -8, marginBottom: 16 }}>
            {featured.artist} • {featured.genre}
          </p>
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              src={`https://www.youtube.com/embed/${featured.youtubeId}`}
              title={featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
                borderRadius: 8,
              }}
            />
          </div>
        </section>

        {/* ABOUT */}
        <section style={{ maxWidth: 680, margin: "0 auto", opacity: 0.85, lineHeight: 1.6 }}>
          <h3 style={{ color: "#d4a84b" }}>About</h3>
          <p>
            RunningWolf SRK is a cinematic Viking-inspired sound project blending metal energy with worship atmospheres.
          </p>
          <p>
            Built from Guymon, Oklahoma — forged in storm sound and story-driven music.
          </p>
          <p style={{ marginTop: 24 }}>
            <Link href="/music" style={{ color: "#d4a84b" }}>Browse all tracks →</Link>
            {" · "}
            <Link href="/lab" style={{ color: "#d4a84b" }}>Lab</Link>
          </p>
        </section>
      </div>
    </main>
  )
}
