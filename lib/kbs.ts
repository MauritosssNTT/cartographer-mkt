import cartographerDevKitManifest from "../public/manifests/cartographer-dev-kit.json";

export type TrustLevel = string;
export type MarketTier = string;
type Source = { name: string; type: string; syncedAt: string };
type Release = { version: string; date: string; summary: string };

export type KnowledgeBase = {
  id: string;
  name: string;
  description: string;
  version: string;
  source: { kind: string; remote: string; branch: string };
  vendor: string;
  vendorInitials: string;
  vendorPublishedCount: number;
  tags: string[];
  verified: boolean;
  trustLevel: TrustLevel;
  marketTier: MarketTier;
  price: string;
  license: string;
  updatedAt: string;
  updatedDate: string;
  documentCount: number;
  sourceCount: number;
  installCount: number;
  rating: number;
  ratingCount: number;
  category: string;
  accent: string;
  contents: { knowledgeSources: number; skills: number; mcpServers: number; hooks: number };
  quality: { lastSync: string; verifiedSources: string; cadence: string; maintainedBy: string };
  sources: Source[];
  changelog: Release[];
};

// This public manifest is the single source of truth for the marketplace's first KB.
export const cartographerDevKit: KnowledgeBase = cartographerDevKitManifest;
export const knowledgeBases = [cartographerDevKit];
export const getKnowledgeBase = (id: string) => knowledgeBases.find((kb) => kb.id === id);
