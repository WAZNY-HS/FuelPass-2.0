# Sri Lankan National Fuel Pass Redesign Proposal

**Theory to Trade (T2T) Internship · Group C**

## 1. Project Overview

This is Group C's UI/UX and software prototype project exploring a clearer National Fuel Pass experience for Sri Lanka. It connects motorists, station attendants and administrators through a demonstration of allowance checking, QR pass presentation, fuel issuance and transaction review.

The project was developed through an AI-assisted team workflow. It uses fictional records and illustrative allowances and is a proposal for discussion, not an operational government service.

## 2. Assignment Context

The T2T internship assignment asks the team to redesign and develop the National Fuel Pass as a proposal prototype for the Director Board of the Ceylon Petroleum Corporation.

The learning goal is to practise the end-to-end workflow of a modern UX engineer: understanding requirements, exploring user experiences, making design decisions, implementing a React prototype, checking its behaviour and documenting the process.

Submission materials include a Medium-ready case study, design work, AI-assistance references and a hosted React application. See the [final submission package](submission/README.md) for the case study, audit, research, presentation, demo guide and actual verification boundaries. Deliverables have separate completion statuses.

## 3. Objectives

- Make remaining fuel allowance easy to understand.
- Connect pass validation, dispensing confirmation and transaction history.
- Provide clear validation messages and recovery paths.
- Support mobile layouts for motorists and attendants and a wider administrative view.
- Provide English, Sinhala and Tamil core interface options.
- Demonstrate a repeatable workflow using sample data without collecting personal records.

## 4. Key Features

- Simulated OTP sign-in, code resend and expiry.
- Selection between two fictional vehicles.
- Dashboard showing remaining allowance, used litres and illustrative allocation.
- QR passes encoding fictional pass identifiers.
- Transaction history and an empty-history state.
- Simulated scanning and manual pass entry.
- Litre validation, transaction review, confirmation and receipt.
- A shared browser-local ledger that updates all three role views.
- Duplicate transaction checks and simulated network-interruption recovery.
- Administrative totals, station filtering, a seeded review flag and reconstructed audit details.
- Demo reset, sign-out, help and a browser-storage fallback warning.

The interface uses navy `#102D43`, teal `#087F75`, background `#F3F7FA` and borders `#D8E3E9`. Typography uses Arial with available Sinhala/Tamil font fallbacks. Primary controls have a 48px minimum height, with visible keyboard-focus indicators and labelled inputs.

## 5. User Roles

| Role | Demonstrated tasks |
| --- | --- |
| Citizen / Motorist | Use demo OTP, select a vehicle, check allowance, present a QR pass and review history |
| Station Operator / Attendant | Simulate a scan or enter a pass, validate litres, review and confirm dispensing, and view a receipt |
| Administrator | Inspect sample totals, filter station activity and review transaction details |

The role selector is for demonstration. It does not implement secure role-based authorization or separate operator and administrator accounts.

## 6. Technology Stack

| Technology | Purpose |
| --- | --- |
| React 19 and TypeScript | Interface components, state and typed transaction logic |
| Vinext and Vite | Application development and build tooling |
| Tailwind CSS and custom CSS | Styling and responsive layouts |
| Reusable UI primitives | Buttons, tabs and switches |
| Lucide React | Interface icons |
| Browser localStorage | Persistence of fictional transactions in the current browser |
| QR SVG assets | Encoding of fictional pass identifiers |
| Cloudflare Workers and Wrangler | Hosting and local production-runtime tooling |
| Git and GitHub | Source control and team repository |

The repository includes starter infrastructure and additional dependencies. Their presence does not imply that the demo uses a production database or every bundled capability.

## 7. Live Prototype

- **Hosted prototype:** [Open FuelPass 2.0](https://fuelpass-2-0.shaffronwazny.workers.dev)
- **GitHub repository:** [WAZNY-HS/FuelPass-2.0](https://github.com/WAZNY-HS/FuelPass-2.0)
- **Hosting platform:** Cloudflare Workers
- **Figma design file:** [Current Group C file](https://www.figma.com/design/4yt80npyfAzcukprbG33bf/Fuel-Pass-%E2%80%93-Editable-Figma-Prototype)
- **Final submission:** [Package index and completion checklist](submission/README.md)

The hosted URL is the team's current deployment. The final documentation audit could not open it through its web tool; a fresh browser check is pending. Earlier recorded browser checks covered the previous hosting address. The Figma file is partially editable; a verified playback link is still needed.

Use the demo credentials below. Do not enter real NIC numbers, telephone numbers or vehicle records.

## 8. Local Setup

### Prerequisites

- Git.
- Node.js **22.13.0 or newer**, as declared in `package.json`.
- pnpm matching the repository's `packageManager` field, currently **11.25.0**.

No API keys, paid APIs or backend accounts are required to run the demonstration locally. Publishing your own Worker requires your own Cloudflare access.

### Install and run

```bash
git clone https://github.com/WAZNY-HS/FuelPass-2.0.git
cd FuelPass-2.0
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

If Corepack is unavailable, install or enable it for your Node environment, or install the pnpm version declared in `package.json`.

Open the **Local** URL printed in the terminal. The portable development script requests port **5173**; use the actual address reported by the running server. Keep the terminal open while using the local app.

### Build and run production output locally

```bash
pnpm build
pnpm start
```

The build produces the application for Cloudflare Workers. `pnpm start` runs the generated output with local Wrangler using `dist/server/wrangler.json`. It is a local preview command, not a deployment command.

Retain the repository's lockfile. If using starter installation helpers or the managed build path on Windows, note that those helpers use Bash; WSL or another suitable Bash environment may be needed. Any retained Sites metadata belongs to the original scaffold and should not be reused as another account's hosting identity.

### Developer checks

```bash
node --experimental-strip-types tests/demo.test.mjs
pnpm exec tsc --noEmit
pnpm build
```

The regression script covers starting balances, invalid inputs, unknown passes, excess allowance, simulated interruption, a 5 L transaction, duplicate transaction IDs, exact-balance dispensing, persistence validation and input immutability.

These checks support technical verification. They are not participant usability research or WCAG certification. Consult the submission verification record for dated results and test conditions.

## 9. Demo Instructions

### Starting data

| Vehicle | Pass identifier | Illustrative allocation | Initially used | Initially remaining |
| --- | --- | --- | --- | --- |
| `DEMO-CAR-01` | `DEMO-PASS-001` | 30 L | 12 L | 18 L |
| `DEMO-BIKE-02` | `DEMO-PASS-002` | 5 L | 0 L | 5 L |

These allocations are demonstration values, not current government quotas.

### Connected walkthrough

1. Select **Motorist** and use OTP **`123456`**. The demo code expires after two minutes; choose **Send a new demo code** if needed.
2. Select the car and check its 18 L remaining allowance. Open its QR pass and review transaction history. Select the bike to see empty history.
3. Switch to **Attendant**. Choose **Simulate scan**, or manually enter `DEMO-PASS-001`.
4. Enter **5 L**, review the proposed deduction and confirm once.
5. Receipt **`TX-003`** shows **13 L** remaining. Return to the motorist's car view to see the updated allowance and record.
6. Open **Administrator**. The sample totals now show **17 L** recorded and **3 transactions**. Inspect `TX-003` or the seeded flagged record.
7. Choose **Reset demo** to restore the starting ledger and clear the motorist's signed-in state. Select Motorist if another role is still open.

### Error and recovery demonstrations

| Scenario | How to try it |
| --- | --- |
| Invalid OTP | Enter `000000` |
| Expired OTP | In Help, choose **Expire demo code**, then try signing in; resend to recover |
| Unrecognised pass | Enter `WRONG` |
| Invalid litres | Enter `0`, `-1`, text or more than two decimal places |
| Insufficient allowance | Request `19` L for the fresh car with 18 L remaining |
| Interrupted connection | Enable the simulated interruption before confirmation; restore it and retry |
| Duplicate submission | On a receipt, choose **Check duplicate protection**; the same transaction must not deduct twice |

The interruption control is a simulation. It is not a real network-loss test or an offline dispensing system.

## 10. Project Structure

| Path | Responsibility |
| --- | --- |
| `app/page.tsx` | Role views, forms, navigation, shared state, persistence and focus handling |
| `app/globals.css` | Colours, typography, spacing and responsive styling |
| `lib/demo.ts` | Seed records, allowance calculations, validation and duplicate transaction handling |
| `lib/copy.ts` | English, Sinhala and Tamil core interface strings |
| `components/ui/` | Reusable UI primitives |
| `public/qr-*.svg` | QR assets for fictional pass identifiers |
| `tests/demo.test.mjs` | Transaction-logic regression checks |
| `scripts/run-framework.mjs` | Development and build entry point |
| `package.json` | Dependencies, package-manager version and available commands |

All role views use one in-memory ledger and the localStorage key `group-c-fuel-demo-v1`. The browser retains valid sample transactions across reloads; motorist sign-in is not persisted. If storage is unavailable, the app falls back to memory and displays a warning.

## 11. AI-Assisted Workflow

Group C used AI tools, including ChatGPT, as productivity and support tools within the team's workflow. Assistance covered brainstorming and ideation, UX/UI exploration, requirement analysis, content refinement, technical guidance, code generation and improvement, debugging, documentation and deployment guidance.

The team reviewed and refined AI suggestions, made project and design decisions, tested the prototype, worked with the source code, configured the development environment, used Git and GitHub, and deployed and verified the application. AI-assisted outputs formed part of this process alongside the team's practical work and review.

This describes the collective workflow. Primary responsibility areas below were supplied by the team and should be confirmed by each member. Team prototype checks are distinct from formal participant research; no interviews or participant usability findings are claimed here.

## 12. Team Members

**Programme:** Theory to Trade (T2T) Internship  
**Group:** Group C

| Team member | Student ID | Primary responsibility area |
| --- | --- | --- |
| Shaffron Wazny | T2T-B4-26-007 | Technical implementation, integration and deployment |
| K.R.F. Nooha | T2T-B4-26-009 | UX research and case-study documentation |
| M.Y.F. Zahra | T2T-B4-26-012 | UI/UX design and Figma |

Ideation, requirement discussions, design/prototype review, testing, refinement and final presentation/submission preparation are shared responsibilities. These are team-declared coordination areas, not independent ownership or proof that every associated artefact is complete. See the [full contribution statement](submission/contributions-and-ai.md).

Student IDs are included here for assignment attribution. This README is public in the repository; the application interface does not display these IDs.

## 13. Current Prototype Limitations

- **Demonstration data:** Allowances, stations, flags, receipts and timestamps are fictional or deterministic scenario values. They do not establish current quotas, prices, station availability or eligibility.
- **Simulated identity and scanning:** No real SMS, identity verification, official account validation or camera-scanning workflow is implemented. QR assets encode only demo identifiers.
- **Local state:** The ledger is browser-local. Concurrent tabs, multiple users and cross-device synchronization are not supported. Browser data can be modified by its user.
- **Demo safeguards:** Local validation and duplicate checks illustrate expected behaviour; they are not production security or fraud prevention.
- **Audit limits:** Audit text is reconstructed from transactions, not an independent, immutable or tamper-resistant event log. The seeded review flag is not evidence of fraud.
- **Language and accessibility review:** Core controls support English, Sinhala and Tamil. Sinhala/Tamil translations remain drafts requiring fluent-speaker review; some supporting and audit prose remains English. Broader keyboard, screen-reader, device and accessibility testing is still needed.
- **Scope:** Full citizen onboarding, real vehicle registration, a notifications centre, a station finder, quota transfer/request, payments and separate operator login are not implemented. Help explains demo registration using the supplied fictional vehicles.
- **Figma status:** The current file was structurally inspected on 14 September 2026. It contains a native editable sign-in screen, but several other core screen frames expose only image-labelled layers. Full native editability, Auto Layout/component usage, prototype connections and duplication permissions remain to be completed or verified. The supplied deep-link node 21:66 was not found; use the file-level link above. See the [audit](submission/final-audit.md) for node-level evidence.
- **Research and validation:** No user interviews, formal participant usability results, official approvals or national service improvements are claimed. Refer to the submission materials for research sources, actual verification evidence and remaining review tasks.

A production service would require server-authoritative transactions, authentication and role authorization, official integration agreements, privacy review, secure OTP delivery and rate limiting, concurrency and idempotency controls, reliable audit storage, monitoring, backups, and further accessibility and user testing. No offline dispensing is supported.

On shared devices, sign out and reset the demo after use. Never use this prototype to store actual personal or fuel-entitlement information.

## 14. Disclaimer

This project is a **T2T Group C proposal prototype** prepared for an internship UI/UX assignment and discussion with the Director Board of the Ceylon Petroleum Corporation.

It is **not the official Sri Lankan National Fuel Pass system**, is not connected to government systems, and has no claimed government endorsement. It does not authorize fuel collection or dispense real fuel. Use it for learning, review and demonstration only.
