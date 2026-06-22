"use client"

const btnStyle: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: 8,
  background: "#1a1a24",
  color: "#e8e0d0",
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 500,
  border: "1px solid #2a2a3a",
}

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        color: "#e8e0d0",
        background:
          "radial-gradient(circle at top, rgba(212,168,75,0.12), transparent 40%), radial-gradient(circle at bottom, #0b0b0f, #050507)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 520, textAlign: "center" }}>
        <div
          style={{
            padding: 6,
            borderRadius: 18,
            background: "linear-gradient(135deg, rgba(212,168,75,0.6), rgba(0,0,0,0))",
            marginBottom: 24,
            boxShadow: "0 0 40px rgba(212,168,75,0.08)",
          }}
        >
          <img
            src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
            alt="Jessy Marquez - RunningWolf"
            style={{
              width: "100%",
              borderRadius: 14,
              display: "block",
              filter: "contrast(1.05) saturate(1.1)",
            }}
          />
        </div>

        <h1 style={{ fontSize: 36, fontWeight: 700, color: "#d4a84b", margin: "0 0 8px" }}>
          Jessy Marquez
        </h1>

        <p style={{ fontSize: 18, opacity: 0.75, margin: "0 0 24px" }}>
          RunningWolf
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <a href="https://youtube.com/@YOURHANDLE" target="_blank" rel="noopener noreferrer" style={btnStyle}>
            YouTube
          </a>
          <a href="https://instagram.com/YOURHANDLE" target="_blank" rel="noopener noreferrer" style={btnStyle}>
            Instagram
          </a>
          <a href="mailto:you@email.com" style={btnStyle}>
            Email
          </a>
        </div>
      </div>
    </main>
  )
}
