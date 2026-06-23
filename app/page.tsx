import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <section className="hero-viking" style={{paddingTop: "48px", paddingBottom: "48px"}}>
        <div className="container" style={{textAlign: "center"}}>
          <img 
            src="/hero-viking.jpg"
            alt="Jessy Marquez - RunningWolf"
            style={{ 
              width: "380px", maxWidth: "90vw",
              borderRadius: "16px",
              border: "2px solid #d4a84b",
              boxShadow: "0 0 40px rgba(196,30,30,0.35)"
            }}
          />
          <h1 style={{marginTop: "20px", fontSize: "36px", color: "#d4a84b"}}>Jessy Marquez</h1>
          <div style={{color: "#9a8a7a", letterSpacing: "0.35em", fontSize: "13px"}}>RUNNINGWOLF</div>
          <Link href="/music" className="btn-blood">Enter the Forge →</Link>
        </div>
      </section>
    </>
  )
}
