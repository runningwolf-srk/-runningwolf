import Link from "next/link"

export default function HomePage() {
  return (
    <div className="container" style={{ textAlign: "center", paddingTop: "56px", paddingBottom: "72px" }}>
      <div style={{ position: "relative", display: "inline-block", marginBottom: "24px" }}>
        <img 
          src="/hero.jpg"
          alt="Jessy Marquez"
          style={{ width: "320px", maxWidth: "90vw", borderRadius: "12px", border: "1px solid #2a2a32", display: "block" }}
        />
        <div style={{ 
          position: "absolute", bottom: "12px", left: 0, right: 0,
          color: "#d4a84b", fontWeight: 700, fontSize: "22px",
          letterSpacing: "0.1em", textShadow: "0 2px 8px rgba(0,0,0,0.9)"
        }}>
          Jessy Marquez
        </div>
      </div>

      <p style={{ color: "#9a9590", letterSpacing: "0.2em", marginBottom: "32px" }}>RUNNINGWOLF</p>
      <Link href="/music" className="btn-gold">Listen Now →</Link>
    </div>
  )
}
