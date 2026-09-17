# FuelPass 2.0

## Overview

FuelPass 2.0 is a redesign proposal for the Sri Lankan National Fuel Pass experience, developed by Group C for the Theory to Trade (T2T) Internship UI/UX assignment. The React prototype connects allowance checking, pass presentation, fuel issuance and transaction review using fictional demo data.

## Key Features

- Simulated OTP sign-in with resend and expiry recovery.
- Vehicle selection, remaining allowance, QR pass and transaction history.
- Simulated scanning and manual pass entry.
- Litre validation, dispensing review, confirmation and receipt.
- Shared browser-local state across all three roles.
- Duplicate transaction checks and simulated interruption recovery.
- Administrative sample totals, station filtering and record inspection.
- English, Sinhala and Tamil core interface options.
- Responsive layouts, labelled controls, visible keyboard focus and Reset demo.

## User Roles

| Role | Main tasks |
| --- | --- |
| Motorist | Sign in, select a vehicle, check allowance, open a QR pass and review history |
| Attendant | Validate a demo pass, enter litres, review and confirm dispensing |
| Administrator | Inspect sample activity, filter station records and review transaction details |

The role selector supports demonstration; it is not secure role-based authentication.

## Technology Stack

React 19, TypeScript, Vinext/Vite, Tailwind CSS and custom CSS, reusable UI primitives, Lucide React, browser localStorage, QR SVG assets, and Cloudflare Workers/Wrangler.

## Live Prototype

[Open the FuelPass 2.0 prototype](https://fuelpass-2-0.shaffronwazny.workers.dev)

Hosted on Cloudflare Workers.

## Figma Design

[Open the Group C Figma design](https://www.figma.com/design/4yt80npyfAzcukprbG33bf/Fuel-Pass-%E2%80%93-Editable-Figma-Prototype?node-id=21-66&t=ntacjKLPefTbjpc7-1)

If the selected frame does not open, use the [file-level link](https://www.figma.com/design/4yt80npyfAzcukprbG33bf/Fuel-Pass-%E2%80%93-Editable-Figma-Prototype).

## AI-assisted process
https://chatgpt.com/share/6aaaaa77-edbc-83e9-8460-be85cb3d37f6

## Additional AI threads
https://share.gemini.google/9PE0KzGQ5wE8
https://share.gemini.google/gpd2YDPGrdjZ
https://share.gemini.google/PuMCgIqfkQJt
https://share.gemini.google/3WNZi9BNweUj
https://share.gemini.google/udomChXB3inC

## Medium Documentation 

https://medium.com/@z8636138/fuelpass-2-0-designing-a-clearer-fuel-pass-experience-for-sri-lanka-4463b3101841?sharedUserId=z8636138

## Getting Started

Requires Node.js **22.13.0 or newer** and **pnpm 11.25.0**, as specified in package.json. No API keys or paid APIs are required for the demo.

```bash
git clone https://github.com/WAZNY-HS/FuelPass-2.0.git
cd FuelPass-2.0
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

If Corepack is unavailable, enable it for your Node environment or install the pinned pnpm version directly. Open the local URL printed in the terminal. The portable development script requests port **5173**.

Build and preview production output locally:

```bash
pnpm build
pnpm start
```

The preview uses local Wrangler with the generated dist/server/wrangler.json. It does not publish a deployment. Bash-based helper scripts may require WSL or another Bash environment on Windows.

Run developer checks:

```bash
node --experimental-strip-types tests/demo.test.mjs
pnpm exec tsc --noEmit
pnpm build
```

## Demo

Use OTP **123456**. It expires after two minutes; choose **Send a new demo code** to recover. Do not enter real personal or vehicle records.

| Vehicle | Pass identifier | Starting allowance remaining |
| --- | --- | --- |
| DEMO-CAR-01 | DEMO-PASS-001 | 18 L |
| DEMO-BIKE-02 | DEMO-PASS-002 | 5 L |

1. As Motorist, sign in, select the car and open its QR pass.
2. Switch to Attendant. Use **Simulate scan** or enter DEMO-PASS-001 manually.
3. Enter **5 L**, review and confirm once. Receipt **TX-003** leaves **13 L** remaining.
4. Return to Motorist to see the updated history. Administrator totals show **17 L** across **3 transactions**.
5. **Reset demo** restores the seed data and signs the motorist out.

Error examples: OTP **000000**, pass **WRONG**, invalid litres **0** or **-1**, or **19 L** against the fresh car. Help exposes forced OTP expiry and simulated interruption; the receipt's duplicate check must not deduct twice. The bike initially has no history.

## Project Structure

| Path | Purpose |
| --- | --- |
| app/page.tsx | Role views, forms, navigation and shared state |
| app/globals.css | Shared styling and responsive layouts |
| lib/demo.ts | Seed records, allowance calculations and transaction validation |
| lib/copy.ts | Core interface translations |
| components/ui/ | Reusable interface primitives |
| public/qr-*.svg | Fictional QR pass assets |
| tests/demo.test.mjs | Transaction-logic regression checks |
| scripts/ | Development and build helpers |

## Prototype Limitations

- Allowances, stations, flags and timestamps are illustrative, not current government data.
- OTP and scanning are simulated. No official identity, eligibility or government integrations exist.
- Transactions persist in localStorage in the current browser. Concurrent tabs, multiple users and cross-device synchronization are unsupported; sign-in is not persisted.
- Local validation and duplicate checks are demonstration logic, not production security or fraud prevention. Audit descriptions are reconstructed from records.
- No offline dispensing, full vehicle-registration form, notifications centre, station finder, quota transfer/request or separate operator login is implemented.
- Sinhala/Tamil translations are drafts requiring fluent-speaker review; some supporting text remains English. Broader accessibility evaluation is still needed.

Use sign-out and Reset demo after shared-device demonstrations. Production would require a secure backend, server-authoritative transactions, official integrations and further engineering and validation.

## Team

**Group C · Theory to Trade (T2T) Internship**

- Shaffron Wazny — T2T-B4-26-007
- K.R.F. Nooha — T2T-B4-26-009
- M.Y.F. Zahra — T2T-B4-26-012

## AI-Assisted Workflow

AI tools, including ChatGPT, supported ideation, design exploration, development, debugging and documentation. The team reviewed, refined and tested outputs and made the final project decisions.

## Disclaimer

This is an academic/internship redesign proposal prototype. It is **not the official Sri Lankan National Fuel Pass system or an official CPC product**, has no claimed government endorsement, and does not authorise real fuel collection.
