"use client"

import Link from "next/link"

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
          "radial-gradient(circle at center, rgba(212,168,75,0.18), transparent 45%), radial-gradient(circle at top, rgba(255,255,255,0.03), transparent 60%), #050507",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(212,168,75,0.18)",
          filter: "blur(90px)",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "pulse 6s ease-in-out infinite",
          zIndex: 0,
        }}
      />

      <div style={{ width: "100%", maxWidth: 600, textAlign: "center", position: "relative", zIndex: 1 }}>
        <img
          src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
          alt="RunningWolf"
          style={{ width: "100%", maxWidth: 420, borderRadius: 16, border: "2px solid #d4a84b", display: "block", margin: "0 auto" }}
        />
        <h1 style={{ fontSize: 36, fontWeight: 700, color: "#d4a84b", margin: "20px 0 4px" }}>
          Jessy Marquez
        </h1>
        <p style={{ letterSpacing: "0.2em", opacity: 0.7, margin: "0 0 24px" }}>
          RUNNINGWOLF
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/music" style={{ padding: "10px 18px", background: "#d4a84b", color: "#050507", borderRadius: 999, textDecoration: "none", fontWeight: 600 }}>
            Music
          </Link>
          <a href="https://youtube.com/@jessymarquez-e5t" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 18px", background: "#1a1a24", color: "#e8e0d0", borderRadius: 999, textDecoration: "none" }}>
            YouTube
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 18px", background: "#1a1a24", color: "#e8e0d0", borderRadius: 999, textDecoration: "none" }}>
            Instagram
          </a>
          <a href="mailto:hello@runningwolf.com" style={{ padding: "10px 18px", background: "#1a1a24", color: "#e8e0d0", borderRadius: 999, textDecoration: "none" }}>
            Email
          </a>
        </div>
      </div>

      <style>{`@keyframes pulse {0%{opacity:.35;transform:translate(-50%,-50%) scale(1)}50%{opacity:.6;transform:translate(-50%,-50%) scale(1.08)}100%{opacity:.35;transform:translate(-50%,-50%) scale(1)}}`}</style>
    </main>
  )
      }
