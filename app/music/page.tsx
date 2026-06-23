export default function MusicPage() {
  return (
    <div style={{ padding: "24px", maxWidth: "980px", margin: "0 auto", color: "#e8e2da" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "4px" }}>Music Catalog</h1>
      <p style={{ color: "#9a8a7a", marginBottom: "24px" }}>Jessy Marquez</p>

      <div style={{ display: "grid", gap: "20px" }}>
        <div style={{ background: "#141011", border: "1px solid #2a1818", borderRadius: "14px", overflow: "hidden" }}>
          <img src="/music/heaven-calling.jpg" alt="Heaven Calling" style={{ width: "100%", display: "block" }} />
          <div style={{ padding: "14px 16px", color: "#d4a84b", fontWeight: 600 }}>Heaven Calling</div>
        </div>
        <div style={{ background: "#141011", border: "1px solid #2a1818", borderRadius: "14px", overflow: "hidden" }}>
          <img src="/music/iron-collide.jpg" alt="Iron Collide" style={{ width: "100%", display: "block" }} />
          <div style={{ padding: "14px 16px", color: "#d4a84b", fontWeight: 600 }}>Iron Collide</div>
        </div>
      </div>
    </div>
  )
}
