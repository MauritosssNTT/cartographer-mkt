# ADR 0001: Use a static catalogue and prompt-based agent handoff for the demo

- Status: accepted
- Date: 2026-11-13

## Context

Knowledge Market needs to demonstrate marketplace discovery, KB inspection, a public manifest,
and an agent-native installation and publication journey. The project is an early standalone demo,
so a real catalogue database, identity system, payment service, package registry, and agent
execution backend would create substantial operational and security scope before validating the
product experience.

## Decision

Keep the catalogue as local typed fixture data and make installation and publication explicit
agent handoffs: the UI generates copyable prompts, while the public manifest route serialises a
listing into JSON. The application does not claim to execute installation, publication, payment,
or authentication.

## Consequences

- The demo is deterministic, easy to run, and deployable without configuration.
- Listing data has a single local source of truth and can be replaced later behind a catalogue
  boundary.
- Metrics, installed state, trust, prices, and quality figures are illustrative rather than live.
- A production transition requires explicit designs for identity, authorisation, publication
  workflow, package integrity, billing, persistence, and auditability.

## Alternatives considered

- Build full marketplace services now: rejected because it would obscure validation of the core
  marketplace and agent-handoff experience.
- Let the browser simulate completed installation or publication: rejected because it would
  misrepresent the capability of the system.
