"use client"

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0f",
        color: "#e8e0d0",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          textAlign: "center",
        }}
      >
        <img
          src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
          alt="Jessy Marquez - RunningWolf"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 16,
            border: "1px solid #2a2a3a",
            display: "block",
            marginBottom: 24,
          }}
        />

        <h1 style={{ fontSize: 36, fontWeight: 700, color: "#e8e0d0", margin: "0 0 8px" }}>
          Jessy Marquez
        </h1>

        <p style={{ fontSize: 18, opacity: 0.75, margin: "0 0 24px" }}>
          RunningWolf
        </p>
      </div>
    </main>
  )
}
