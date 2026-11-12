"use client";
import { useState } from "react";
import { Nav } from "./nav";

export function PublishForm() {
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);
  const knowledgeBaseName = name.trim() || "my-knowledge-base";
  const prompt = `Ask Cartographer to publish this Knowledge Base: ${knowledgeBaseName}`;
  async function copyPrompt() {
    try { if (!navigator.clipboard) throw new Error("Clipboard API unavailable"); await navigator.clipboard.writeText(prompt); }
    catch { const textarea = document.createElement("textarea"); textarea.value = prompt; document.body.appendChild(textarea); textarea.select(); document.execCommand("copy"); textarea.remove(); }
    setCopied(true); window.setTimeout(() => setCopied(false), 1800);
  }
  return <><Nav/><main className="publish-page"><div className="page-intro"><div className="eyebrow">CARTOGRAPHER MARKETPLACE</div><h1>Publish a Knowledge Base</h1><p>Ask Cartographer to package and publish your Knowledge Base to the Marketplace.</p></div><section className="publish-agent-card"><label>Knowledge Base name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="my-knowledge-base"/></label><div className="publish-prompt"><div className="agent-back-heading"><div><b>Publish with Cartographer</b><p>Copy this prompt into Cartographer or your coding agent</p></div><span className="paid-badge">Guided</span></div><div className="prompt-box"><pre>{prompt}</pre><button className="copy-icon" onClick={copyPrompt} aria-label="Copy publish prompt" title="Copy prompt">{copied ? "✓" : "⧉"}</button></div><div className="agent-back-actions"><span role="status" aria-live="polite">{copied ? "Copied" : ""}</span></div><p className="publish-note">Cartographer will guide you through authentication, validation and publication.</p></div></section></main></>;
}
