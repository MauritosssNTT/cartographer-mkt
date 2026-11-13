"use client";
import { useEffect, useState } from "react";
import type { KnowledgeBase } from "../lib/kbs";

export function InstallButton({ kb }: { kb: KnowledgeBase }) {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState("");
  useEffect(() => setOrigin(window.location.origin), []);
  const manifestUrl = `${origin}/manifests/${kb.id}.json`;
  const prompt = `Install the Cartographer Knowledge Base '${kb.name}' from ${manifestUrl}.`;
  async function copyPrompt() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(prompt);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = prompt; document.body.appendChild(textarea); textarea.select(); document.execCommand("copy"); textarea.remove();
    }
    setCopied(true); window.setTimeout(() => setCopied(false), 1800);
  }

  return <div className={`agent-flip ${flipped ? "is-flipped" : ""}`}>
    <div className="agent-flip-inner">
      <section className="agent-face agent-front" aria-hidden={flipped}>
        <div><span className="price big">{kb.price}</span><span className="version">v{kb.version}</span></div>
        <button className="install" onClick={() => setFlipped(true)} tabIndex={flipped ? -1 : 0}>Install with AI agent</button>
        <small>{kb.license} · Give the prompt to your coding agent</small>
      </section>
      <section className="agent-face agent-back" aria-hidden={!flipped} aria-label="Install prompt">
        <div className="agent-back-heading"><div><b>Install with AI agent</b><p>Copy this prompt into Codex, Claude Code or your coding agent</p></div><span className="paid-badge">{kb.marketTier}</span></div>
        <div className="prompt-box"><pre>{prompt}</pre><button className="copy-icon" onClick={copyPrompt} aria-label="Copy install prompt" title="Copy prompt" tabIndex={flipped ? 0 : -1}>{copied ? "✓" : "⧉"}</button></div>
        <div className="agent-back-actions"><span role="status" aria-live="polite">{copied ? "Copied" : ""}</span><button onClick={() => setFlipped(false)} tabIndex={flipped ? 0 : -1}>Back</button></div>
      </section>
    </div>
  </div>;
}
