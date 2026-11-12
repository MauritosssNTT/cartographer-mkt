# Knowledge Market demo

Standalone Next.js demo of an agent-native marketplace for versioned Knowledge Bases. It uses local mock data only; it has no authentication, payments, external database, or external service dependency.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Create a production build with:

```bash
npm run build
npm run start
```

## Deploy to Vercel

Import this repository in Vercel and use the detected Next.js defaults. No environment variables or `vercel.json` configuration are required.

The install prompt derives its manifest origin from the browser at runtime, so it uses `http://localhost:3000` locally and the active Vercel deployment domain in production.

## Public manifest endpoint

Each demo Knowledge Base exposes a machine-readable manifest:

```text
/api/kb/<id>/manifest
```

For example: `/api/kb/italian-markets/manifest`.
