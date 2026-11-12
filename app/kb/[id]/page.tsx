import { KnowledgeBaseDetail } from "../../../components/kb-detail";

export default async function KnowledgeBasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <KnowledgeBaseDetail id={id} />;
}
