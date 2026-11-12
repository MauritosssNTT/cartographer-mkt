import { getKnowledgeBase } from "../../../../../lib/kbs";

export function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const kb = getKnowledgeBase(id);
    if (!kb) return Response.json({ error: "Knowledge Base not found" }, { status: 404 });

    return Response.json({
      id: kb.id,
      name: kb.name,
      version: kb.version,
      vendor: kb.vendor,
      description: kb.description,
      tags: kb.tags,
      trustLevel: kb.trustLevel,
      license: kb.license,
      updatedAt: kb.updatedDate,
      quality: kb.quality,
      install: {
        type: "knowledge-pack",
        source: `https://demo.knowledge.market/packs/${kb.id}/${kb.version}`
      }
    });
  });
}
