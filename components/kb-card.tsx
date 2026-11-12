import Link from "next/link";
import type { KnowledgeBase } from "../lib/kbs";
import { number } from "../lib/format";

export function KbCard({ kb }: { kb: KnowledgeBase }) {
  return <Link href={`/kb/${kb.id}`} className="kb-card"><div className="card-top"><span className="kb-icon" style={{ background: `${kb.accent}22`, color: kb.accent }}>✦</span><span className="price">{kb.price}</span></div><div className="vendor-line"><span className="vendor-avatar" style={{ background: kb.accent }}>{kb.vendorInitials}</span><span className="vendor">{kb.vendor}{kb.verified && <span className="verified">✓ Verified Vendor</span>}</span><span className={`trust ${kb.trustLevel.toLowerCase()}`}>{kb.trustLevel}</span></div><h3>{kb.name}</h3><p>{kb.description}</p><div className="tags">{kb.tags.map((tag) => <span key={tag}>{tag}</span>)}<span className={`tier ${kb.marketTier.toLowerCase()}`}>{kb.marketTier}</span></div><div className="card-meta"><span>★ {kb.rating} <i>({number(kb.ratingCount)})</i></span><span>▤ {kb.documentCount} docs</span><span>↓ {number(kb.installCount)}</span></div><div className="card-bottom"><span>For Cartographer</span><span>v{kb.version} · {kb.updatedAt}</span></div></Link>;
}
