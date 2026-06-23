import Link from "next/link"

const catalog = [
  { id: "heaven-calling", title: "Heaven Calling", cover: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp", youtube: "#" },
  { id: "iron-collide", title: "Iron Collide", cover: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp", youtube: "#" },
  { id: "blood-of-cross", title: "Blood of Cross", cover: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp", youtube: "#" },
  { id: "lord-of-lords", title: "Lord of Lords", cover: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp", youtube: "#" },
  { id: "horn-of-war", title: "Horn of War", cover: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp", youtube: "#" },
  { id: "spiritual-journey", title: "Spiritual Journey", cover: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp", youtube: "#" },
]

export default function MusicPage() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "36px", marginBottom: "8px" }}>Music Catalog</h1>
      <p style={{ color: "#9a9590" }}>Jessy Marquez</p>
      <div className="card-grid">
        {catalog.map((t) => (
          <a key={t.id} href={t.youtube} target="_blank" rel="noreferrer" className="music-card">
            <img src={t.cover} alt={t.title} />
            <div className="music-card-body">{t.title}</div>
          </a>
        ))}
      </div>
      <div style={{ marginTop: "24px" }}>
        <Link href="/">← Home</Link>
      </div>
    </div>
  )
}
