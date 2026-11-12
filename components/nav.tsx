import Link from "next/link";

export function Nav() {
  return <header className="nav"><Link href="/" className="brand"><span className="brand-mark">✦</span>Cartographer <span>Marketplace</span></Link><nav><Link href="/">Discover</Link><Link href="/my-kbs">My Knowledge Bases</Link><Link href="/publish" className="nav-cta">Publish a KB</Link></nav></header>;
}
