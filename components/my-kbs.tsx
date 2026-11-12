"use client";
import Link from "next/link";
import { Nav } from "./nav";
import { knowledgeBases } from "../lib/kbs";

export function MyKnowledgeBases() {
  const installed = knowledgeBases.slice(0, 3);
  return <><Nav/><main className="content-page"><div className="page-intro"><div className="eyebrow">YOUR CARTOGRAPHER WORKSPACE</div><h1>My Cartographer Knowledge Bases</h1><p>Knowledge Bases available to your Cartographer workspace in this demo.</p></div><div className="installed-list">{installed.map((kb) => <article className="installed" key={kb.id}><div className="kb-icon" style={{ background: `${kb.accent}22`, color: kb.accent }}>✦</div><div className="installed-copy"><div className="vendor">{kb.vendor}{kb.verified && <span className="verified">✓ Verified</span>}</div><Link href={`/kb/${kb.id}`}><h2>{kb.name}</h2></Link><p>Version {kb.version} · {kb.documentCount} documents · updated {kb.updatedAt}</p></div><span className="status">● Installed</span></article>)}</div><div className="empty-add"><h2>Looking for something else?</h2><p>Browse the Cartographer Marketplace for a new Knowledge Base.</p><Link href="/" className="secondary-link">Browse marketplace →</Link></div></main></>;
}
