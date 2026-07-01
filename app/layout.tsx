import './globals.css'

export const metadata = {
  title: 'Stormbreakers - RunningWolf',
  description: 'Cinematic worship by Jessy Marquez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
