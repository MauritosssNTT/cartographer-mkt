import type { KnowledgeBase } from "../lib/kbs";

const descriptions = {
  Knowledge: "Documentation, references and curated domain knowledge.",
  Skills: "Reusable agent instructions and workflows.",
  MCP: "Tools and external capabilities exposed to the agent.",
  Hooks: "Automated behaviors triggered during agent workflows."
};

export function KnowledgeBaseContents({ kb }: { kb: KnowledgeBase }) {
  const items = [
    ["◈", "Knowledge", kb.contents.knowledgeSources, "source", "sources"],
    ["✦", "Skills", kb.contents.skills, "skill", "skills"],
    ["⌘", "MCP", kb.contents.mcpServers, "server", "servers"],
    ["↻", "Hooks", kb.contents.hooks, "hook", "hooks"]
  ] as const;
  return <section className="detail-section"><h2>What&apos;s inside</h2><div className="contents-grid">{items.map(([icon, name, count, singular, plural]) => <div className="content-item" key={name}><span className="content-icon">{icon}</span><div><b>{name}</b><strong>{count} {count === 1 ? singular : plural}</strong><p>{descriptions[name]}</p></div></div>)}</div></section>;
}
