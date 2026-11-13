# Architecture

## Purpose and scope

Knowledge Market is a standalone Next.js demo of an agent-native marketplace for versioned
Cartographer Knowledge Bases. It demonstrates discovery, detail inspection, agent-guided
installation, publication prompting, a personal installed-KB view, and a machine-readable
manifest endpoint.

The application deliberately has no authentication, payment flow, persistence layer, external
API, or real package installation. The catalogue is fixture data, and all install and publish
actions provide a prompt that a user can give to an AI agent.

## System shape

```text
Browser
  ├── /                         Marketplace discovery and client-side filters
  ├── /kb/:id                   Server-rendered KB detail page
  ├── /my-kbs                   Demo installed-KB view
  └── /publish                  Client-side prompt generator

Next.js application
  ├── app/                      Route entry points and API route
  ├── components/               UI components and browser interactions
  └── lib/kbs.ts                Catalogue fixture and lookup function

GET /api/kb/:id/manifest
  └── Serialises a catalogue item as an installation manifest, or returns 404.
```

## Runtime responsibilities

| Area | Responsibility | Current implementation |
| --- | --- | --- |
| Route layer | Maps URLs to screens and API handlers | Next.js App Router under `app/` |
| Catalogue | Defines all marketplace metadata | In-memory `knowledgeBases` in `lib/kbs.ts` |
| Marketplace UI | Filters catalogue by text, category, price, vendor, trust, and capability | Client component `components/marketplace.tsx` |
| Detail UI | Renders metadata, provenance, releases, related KBs, and install prompt | `components/kb-detail.tsx` |
| Agent handoff | Produces copyable natural-language prompts | `install-button.tsx` and `publish-form.tsx` |
| Integration surface | Exposes a compact JSON manifest for one catalogue item | `app/api/kb/[id]/manifest/route.ts` |

## Data flow

1. `lib/kbs.ts` exports the complete static catalogue and `getKnowledgeBase(id)`.
2. Pages and API handlers read that module directly; no storage or network request occurs.
3. The marketplace screen filters the catalogue in the browser with `useMemo`.
4. The detail route resolves the route parameter, loads the item, and returns a Next.js 404 when
   the ID is unknown.
5. The manifest route resolves the same item and returns its public package metadata; an unknown
   ID yields a JSON 404 response.
6. The install button derives the manifest URL from `window.location.origin`, so its prompt is
   correct for both local development and the deployed host.

## Boundaries and future seams

The fixture module is the current catalogue boundary. If persistence is introduced, preserve the
`KnowledgeBase` shape and the lookup contract behind a repository or catalogue service rather
than importing a database client throughout components. Authentication, billing, publication and
installation are intentionally outside the demo boundary; each needs its own ownership,
authorisation and audit model before implementation.

## Operational notes

- Node.js 20.9+ is required.
- `npm run dev` runs the local application; `npm run build` creates a production build.
- Vercel can deploy the app using standard Next.js defaults and currently needs no environment
  variables.
- The manifest endpoint is an interface contract. Changes must remain backwards compatible or
  be versioned and recorded in an ADR.
