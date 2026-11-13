# Development guidelines for agent-assisted changes

These rules apply whenever a coding agent generates, edits, reviews, or proposes code for this
repository. They make the output understandable, reviewable and safe to continue in later
sessions.

## Before changing code

1. State the user-facing outcome and the files or boundaries likely to change.
2. Read the relevant route, component, data contract and existing documentation before editing.
3. Reuse the vocabulary in [CONTEXT.md](../CONTEXT.md). If a term is ambiguous, resolve it
   before adding it to code or copy.
4. Identify whether the change affects a public contract: URL, manifest field, catalogue shape,
   client-visible status, or agent prompt.
5. For a durable architectural trade-off, create an ADR before or alongside the implementation.

## Implementation rules

- Keep route components focused on routing and composition; put reusable UI in `components/`
  and catalogue/domain data in `lib/`.
- Keep the catalogue as the single source of truth. Do not duplicate KB metadata in pages,
  components or API routes.
- Use server components by default. Add `"use client"` only where browser state, events, or
  browser APIs are required.
- Keep the manifest endpoint and detail page aligned with the `KnowledgeBase` type. An unknown
  KB must remain a 404, not a partial or invented response.
- Treat values derived from browser state, route parameters, or future external publication input
  as untrusted. Validate them at the boundary once a real write or integration is introduced.
- Do not imply that a demo action has installed, paid for, authenticated, or published anything
  unless the corresponding backend capability exists.

## Documentation and decisions

Update [architecture.md](architecture.md) whenever responsibilities, data flow, deployment, or
integration boundaries change. Update [CONTEXT.md](../CONTEXT.md) when a domain term becomes
canonical or changes meaning.

Create an ADR in `docs/adr/` only when the decision is:

1. expensive to reverse;
2. non-obvious without its context; and
3. a considered choice among real alternatives.

ADRs use the next zero-padded number and include status, context, decision, consequences, and
the alternatives considered. Do not use an ADR for routine refactors, temporary implementation
details, or unresolved ideas.

## Verification and handoff

1. Run `npm run build` after implementation changes, unless the user explicitly asks for a
   documentation-only or planning-only change.
2. Check the affected route manually when practical, including an unknown-KB path for catalogue
   or manifest changes.
3. Report what changed, how it was verified, and any assumption or deferred decision.
4. Record relevant architecture, contract, and domain discoveries in the Cartographer KB before
   ending the session.
