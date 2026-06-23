import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Stormbreakers - RunningWolf | Jessy Marquez",
  description: "Heavy metal / Viking metal from Guymon, OK",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#0b0a09", color: "#e8e2da", margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <header style={{ padding: "16px 24px", borderBottom: "1px solid #2a1818", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ color: "#e8e2da", textDecoration: "none", fontWeight: 700 }}>
            Stormbreakers - RunningWolf
          </Link>
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/" style={{ color: "#9a8a7a", textDecoration: "none" }}>Home</Link>
            <Link href="/music" style={{ color: "#9a8a7a", textDecoration: "none" }}>Music</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer style={{ padding: "24px", textAlign: "center", color: "#6b5a4a", fontSize: "14px", borderTop: "1px solid #2a1818", marginTop: "40px" }}>
          © 2026 Jessy Marquez / Stormbreakers - RunningWolf
        </footer>
      </body>
    </html>
  )
}
