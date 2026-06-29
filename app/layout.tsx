// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ArchiveBackground from "@/components/ArchiveBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RUNNINGWOLF",
  description: "A sealed archive of seven cinematic worship artifacts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ArchiveBackground />
        {children}
      </body>
    </html>
  );
}
