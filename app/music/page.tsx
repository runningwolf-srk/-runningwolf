export default function MusicPage() {
  return (
    <div style={{ padding: "24px", maxWidth: "980px", margin: "0 auto" }}>
      <h1>Music Catalog</h1>
      <p style={{ color: "#9a8a7a" }}>Jessy Marquez</p>

      <div style={{ display: "grid", gap: "20px", marginTop: "24px" }}>
        <div>
          <img 
            src="/music/heaven-calling.jpg" 
            alt="Heaven Calling"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <p style={{ color: "#d4a84b" }}>Heaven Calling</p>
        </div>
        <div>
          <img 
            src="/music/iron-collide.jpg" 
            alt="Iron Collide"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <p style={{ color: "#d4a84b" }}>Iron Collide</p>
        </div>
      </div>
    </div>
  )
}
