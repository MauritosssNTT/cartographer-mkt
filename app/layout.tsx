import type { Metadata } from "next";
import "./globals.css";
import "./agent-flip.css";
import "./marketplace-enhancements.css";
import "./marketplace-tiers.css";
import "./cartographer-brand.css";
import "./atlas.css";

export const metadata: Metadata = {
  title: "Cartographer Marketplace",
  description: "The official Cartographer Marketplace for trusted Knowledge Bases built for AI agents."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<footer className="site-footer">Cartographer Marketplace <span>— Knowledge built for AI agents.</span></footer></body></html>;
}
