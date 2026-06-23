import Link from "next/link"

export default function HomePage() {
  return (
    <div className="container" style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "56px" }}>
      <img 
        src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
        alt="Jessy Marquez - RunningWolf"
        style={{ 
          width: "420px", 
          maxWidth: "92vw",
          borderRadius: "16px",
          border: "2px solid #d4a84b",
          boxShadow: "0 0 40px rgba(196,30,30,0.3)",
          display: "block",
          margin: "0 auto"
        }}
      />
      <h1 style={{marginTop: "18px", fontSize: "32px", color: "#d4a84b"}}>Jessy Marquez</h1>
      <div style={{color: "#9a8a7a", letterSpacing: "0.35em", fontSize: "13px", marginBottom: "24px"}}>RUNNINGWOLF</div>
      <Link href="/music" className="btn-blood">Listen Now →</Link>
    </div>
  )
}
