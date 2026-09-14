# Fuel Pass proposal prototype

T2T Internship · Group C

- Shaffron Wazny — Student ID: T2T-B4-26-007
- K.R.F.Nooha — Student ID: T2T-B4-26-009
- M.Y.F.Zahra — Student ID: T2T-B4-26-012

AI-assisted assignment prototype for discussion with the Ceylon Petroleum Corporation. No official endorsement. Individual contributions must be completed by the team; none are attributed here. Student IDs are present only in this source README and private submission documents, not in app content or public assets.

## Setup

Requires Node 22.13 or newer and pnpm (use the pinned packageManager in package.json). No API keys, paid services or backend accounts are needed for the demonstration.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open the localhost URL printed by the development command. Production build: `pnpm build`. The included Vinext starter builds a React/TypeScript application for Cloudflare Workers. `pnpm start` runs the production output through local Wrangler. Sites hosting metadata belongs to the original project; create your own hosting project before deploying elsewhere. Do not reuse another account's project ID.

## Demo credentials and walkthrough

1. Motorist: request a new demo code if necessary, enter `123456` (expires after two minutes). No real telephone number or NIC is requested.
2. Car `DEMO-CAR-01`: 30 L illustrative allocation, 12 L seeded usage, 18 L remaining. Bike `DEMO-BIKE-02`: 5 L available, no initial history.
3. Open QR pass. The SVG encodes only `DEMO-PASS-001` or `DEMO-PASS-002`. These are not official passes.
4. Attendant: Simulate scan loads the car pass; manual entry supports either demo pass. Enter 5 L, review, confirm. Receipt `TX-003` leaves the car with 13 L.
5. Return to Motorist, select the car and view history; Administrator shows the same transaction. Inspect a row to see a derived demo audit trail.
6. Reset demo restores the deterministic seed and signs out. Demo controls also expose network interruption and forced OTP expiry.

## Error checks

Use 000000 for an invalid OTP; Expire demo code for expiry; WRONG for unknown pass; 0, -1, text, or more than two decimal places for invalid litres; 19 L on a fresh car for insufficient allowance. Toggle network interruption before confirming: no state change occurs, and restoring it allows retry. Check duplicate protection on a receipt resubmits the same transaction ID and must not deduct fuel twice.

## Architecture and boundaries

- `app/page.tsx`: role views, forms, navigation, state persistence, focus handling.
- `lib/demo.ts`: deterministic seed, allowance calculations, validation and idempotent demo transaction function.
- `lib/copy.ts`: English, Sinhala and Tamil core UI strings. Translations are drafts; supporting explanatory prose and audit descriptions retain English.
- `app/globals.css`: shared colour, typography, spacing and responsive rules.
- `components/ui`: reused accessible React primitives (button, tabs, switch).
- `public/qr-*.svg`: real QR encoding of fictional demo identifiers.

All role views share one in-memory state and one localStorage key in a single browser tab. This is not cross-device synchronization or a multi-user database. Multiple tabs are not a supported concurrent workflow. No real SMS, account verification, eligibility check, government integration, live quota, fuel pricing, station inventory, queues or fraud detection exists. Demo timestamps are deterministic scenario times, not the actual time of dispensing. Station filters inspect fictional records. The flagged seed is not evidence of fraud. Audit events are reconstructed from the transaction, not independent or immutable logs.

Local validation and duplicate checking demonstrate intended behaviour; anyone can modify browser data. Production needs server-authoritative transactions, authentication and role authorization, official agreements/integrations, privacy review, real OTP delivery and rate limiting, idempotency and concurrent transaction handling, secure audit storage, monitoring, backups and accessibility/user testing. No offline dispensing is allowed in this prototype. Do not deploy it as an operational fuel system.

Shared-device users should sign out and Reset demo. No real data should be entered. Browser storage failure falls back to memory with a visible warning. No user interviews or usability outcomes are claimed. See the submission pack for actual verification results, research, Figma limitations and team-review tasks.

## Design

Navy #102D43, teal #087F75, light background #F3F7FA, borders #D8E3E9; Arial and available Sinhala/Tamil system fallbacks; 48px primary controls; visible keyboard focus. Figma MCP access was blocked by the connected Starter plan limit. The submission includes an unexecuted editable Figma plugin import package; the native file is not a completed prototype.

## Credits and AI use

Prepared with ChatGPT assistance in research synthesis, design, implementation and documentation. The team must review translations, research currency, code and usability before presenting. Add genuine individual contributions and the genuine shared AI conversation URL to the submission. No individual roles are invented.

## Repeat the logic checks

```bash
node --experimental-strip-types tests/demo.test.mjs
pnpm exec tsc --noEmit
pnpm build
```

These are developer checks, not user research or WCAG certification. The demo test verifies balance arithmetic, invalid inputs, offline rejection and duplicate transaction behaviour.
