"use client"
import Link from "next/link"

const catalog = [
  { title: "Heaven Calling", cover: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp", ... },
{ title: "Iron Collide", cover: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp", ... },
{ title: "Blood of Cross", cover: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp", ... },
{ title: "Lord of Lords", cover: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp", ... },
{ title: "Horn of War", cover: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp", ... },
{ title: "Spiritual Journey", cover: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp", ... },

export default function MusicPage() {
  return (
    <main style={{ minHeight: "100vh", fontFamily: "system-ui", color: "#e8e0d0", background: "radial-gradient(circle at center, rgba(212,168,75,0.08), transparent 45%), #050507", padding: "48px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <Link href="/" style={{ color: "#d4a84b", textDecoration: "none", fontSize: 13, opacity: 0.8 }}>← RunningWolf</Link>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: "#d4a84b", margin: "12px 0 6px" }}>Music Catalog</h1>
          <p style={{ fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.55, margin: 0 }}>Jessy Marquez</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
          {catalog.map((t) => (
            <a key={t.id} href={t.youtube} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "#12121a", border: "1px solid #2a2a3a", borderRadius: 16, overflow: "hidden", textDecoration: "none", color: "inherit" }}>
              <div style={{ aspectRatio: "1 / 1", overflow: "hidden", background: "#0b0b0f" }}>
                <img src={t.cover} alt={t.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ padding: "14px 16px" }}>
                <div style={{ fontWeight: 600, fontSize: 16 }}>{t.title}</div>
                <div style={{ fontSize: 12, opacity: 0.6, marginTop: 4 }}>{t.tag}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
