export default function MusicPage() {
  const tracks = [
    { title: "Heaven Calling", img: "/music/heaven-calling.jpg" },
    { title: "Iron Collide", img: "/music/iron-collide.jpg" },
  ]
  const fallback = "/729068345_1706992463868756_7233760520950384832_n~2.jpg"

  return (
    <div style={{ padding: "24px", maxWidth: "980px", margin: "0 auto" }}>
      <h1>Music Catalog</h1>
      <p style={{ color: "#9a8a7a" }}>Jessy Marquez</p>
      <div style={{ display: "grid", gap: "20px", marginTop: "24px" }}>
        {tracks.map(t => (
          <div key={t.title}>
            <img 
              src={t.img} 
              alt={t.title}
              onError={e => (e.currentTarget.src = fallback)}
              style={{ width: "100%", borderRadius: "12px" }}
            />
            <p style={{ color: "#d4a84b" }}>{t.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
