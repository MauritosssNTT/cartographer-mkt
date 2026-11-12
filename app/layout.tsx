import type { Metadata } from "next";
import "./globals.css";
import "./agent-flip.css";
import "./marketplace-enhancements.css";
import "./marketplace-tiers.css";
import "./cartographer-brand.css";
import "./atlas.css";
import "./publish-agent.css";
import "./capabilities.css";

export const metadata: Metadata = {
  title: "The (un)official Cartographer Marketplace",
  description: "An unofficial marketplace concept for trusted Knowledge Bases built for Cartographer."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<footer className="site-footer">Built as an unofficial marketplace concept for Cartographer.</footer></body></html>;
}
