# Verification record and usability materials
Group C · 14 September 2026

## Actual evidence and its limits
This document consolidates the earlier verification record. **No new build or browser execution was performed during this final documentation audit.** The current environment provided repository and Figma inspection, but no application runtime/browser session.

| Date / environment | Check | Recorded result | Limit |
| --- | --- | --- | --- |
| 13 September, original project workspace | Production build and TypeScript check | Passed in prior verification record | Not rerun on current repository checkout |
| 13 September, original project workspace | Transaction regression checks | Passed: seed balances, invalid inputs, unknown pass, excess allowance, simulated interruption, 5 L issue, duplicate identifier, exact balance, persistence validation, immutability | Local logic, not production security |
| 13 September, preview browser | Desktop layout | No horizontal overflow recorded at 1363px viewport (1348px body) | One browser/width |
| 13 September, preview browser | 390px iframe/mobile layout and journeys | Reviewed; flows exercised | Iframe emulation, not physical phone |
| 13 September, earlier Sites deployment | Motorist → Attendant → Administrator | 5 L transaction produced TX-003, car 13 L, admin 17 L / 3 transactions | Earlier URL, not current Cloudflare deployment |
| 13 September, earlier Sites deployment | Invalid OTP, forced expiry/resend, unknown pass, invalid/excess litres, interruption/retry, duplicate, empty history | Passed in earlier browser record | Forced expiry, not timed stopwatch; simulated interruption, not actual network loss |
| 13 September, earlier prototype | Language switching | Core role labels/headings switched | Not full translation coverage or fluent-speaker approval |
| 13 September, earlier prototype | Basic keyboard/focus | Limited Tab/Enter and focus checks recorded | Not complete keyboard or screen-reader audit |
| 13 September, earlier prototype | QR | Asset rendered | No independent external QR-decoder check recorded |
| 14 September, GitHub | Source / README inspection | Files accessible; core implementation and README match described demo | Inspection, not execution |
| 14 September, current Cloudflare URL | Web fetch | Could not open: tool returned non-retryable safe-open error | Site availability and journeys remain unverified here |
| 14 September, current Figma | Page metadata inspection | Native sign-in text; multiple other frames expose single image-labelled layers | Full editability, Auto Layout, components and playback not established |

Earlier tested address: https://fuelpass-group-c-proposal.shaffronwazny.chatgpt.site/  
Current team-supplied address: https://fuelpass-2-0.shaffronwazny.workers.dev  
Do not cite the first address's checks as evidence for the second.

Inspected source blobs on main:
- app/page.tsx: 623ce72cc96f27f67d6183fc7118d1161a98cdd6
- lib/demo.ts: f789d666d04950aea5b8d2dd9693c137399f7279
- lib/copy.ts: 84f3cabc5238c84fa7a9e2391f2a3b6053a97881
- app/globals.css: c07eac5e531fe08d8bd739d41ee18302145cc422
- tests/demo.test.mjs: a28057f9a3dd5fcce5ad9c929efcd6a34a3c6028

## Final current-build check sheet — not yet executed
Record actual date, source commit, browser/device, tester and result; leave unexecuted entries as Not run.

```bash
node --experimental-strip-types tests/demo.test.mjs
pnpm exec tsc --noEmit
pnpm build
```

| Check | Expected result | Actual result / evidence |
| --- | --- | --- |
| Open Cloudflare URL in private window | UI loads; proposal/demo labels visible | Not run |
| Reset; Motorist; fresh code 123456 | Signed in; car 18 L | Not run |
| OTP 000000 | Helpful rejection; resend works | Not run |
| Help → Expire demo code; try valid code | Expired message; new code recovers | Not run |
| Vehicle / QR / history; bike history | Correct identifiers and empty bike history | Not run |
| Attendant manual WRONG | Unrecognised pass, recoverable | Not run |
| Fresh car, litres 0, -1, 1.234, then 19 | Invalid/excess rejected; no ledger mutation | Not run |
| Scan simulation; 5 L; review | Car identified; proposed remaining 13 L | Not run |
| Enable simulated interruption; confirm | No new transaction or deduction | Not run |
| Restore; confirm once | TX-003, 13 L remaining | Not run |
| Receipt duplicate check | Rejected; still 13 L and 3 total transactions | Not run |
| Motorist history; admin totals | Same TX-003; admin 17 L / 3 transactions | Not run |
| Station filter and inspect flagged row | Relevant sample records and derived audit | Not run |
| Reload | Valid ledger retained; sign-in not retained | Not run |
| Reset | Car18/bike5, two seed transactions; sign-out | Not run |
| English/Sinhala/Tamil | Core labels change; no blocking overflow | Not run |
| 390px and desktop, keyboard only | No obstructed controls; visible focus and reachable actions | Not run |
| Build, type and logic commands | Exit successfully; retain terminal output | Not run |

## Five-participant formative usability script
**Status: proposed protocol; no participants recruited or tested in this record.**

Recruit five consenting adults with a mix of language preferences and digital confidence. Include motorist experience and, where feasible, station/operations experience. Record whether participants are actual role holders or using a scenario. This convenience sample is exploratory, not representative.

Allow 15–20 minutes each. Use only fictional records. Ask permission before recording; avoid collecting NIC, phone, vehicle records or unnecessary personal information. Use participant codes P01–P05. A moderator runs the same tasks; another teammate records behaviour. Agree actual staffing before sessions.

Opening script: “We are testing a proposal, not you. It uses fictional data and cannot provide fuel. Please say what you expect as you work. You can stop at any time. We will first let you try without help.”

Reset before each participant. Give the demo code and explain the role tabs are a demonstration control; do not explain where each task is completed.

1. **Motorist:** “You are checking the demo car before visiting a station. Sign in. Tell me how much fuel remains and show the pass you would present.” Record interpretation, task completion, time from vehicle selection to QR, errors and assistance.
2. **History:** “Find the car's past transactions, then check the bike's history. What does the bike screen tell you?” Record whether empty means no transactions rather than an error.
3. **Attendant:** “Using the demo car pass, record a 5-litre issue. Tell me what you expect to happen before confirming.” Record recognition of validation, review and receipt.
4. **Recovery:** In a separate reset scenario, ask for 19 L against the fresh car; then enable simulated interruption during a valid 5 L review. Ask “What happened? Has the balance changed? What would you do next?” Do not turn a recovery task into moderator instructions.
5. **Administrator:** “Find the newly recorded transaction and inspect its details. Explain what the review flag does and does not tell you.” Record whether sample flags/audit are mistaken for proven fraud or secure evidence.

After tasks: “What was least clear? What would you change first? Was any wording difficult in your selected language?” Record direct quotations only when actually spoken and permitted.

Mark **Unaided / With assistance / Not completed**. If help is needed, record the exact hint and time before giving it. Do not quietly count assisted tasks as unaided success. Flag critical misunderstandings even if the final button was clicked.

## Blank results template
Study date: [TO COMPLETE]  
Prototype URL and source revision: [TO COMPLETE]  
Moderator / observer: [TO COMPLETE]  
Consent and recording method: [TO COMPLETE]

| Participant | Relevant role experience | Language / device | Task | Completion category | Time, where applicable | Observed behaviour / exact quote | Assistance | Issue severity |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P01 | | | | | | | | |
| P02 | | | | | | | | |
| P03 | | | | | | | | |
| P04 | | | | | | | | |
| P05 | | | | | | | | |

| Issue | Evidence / participant codes | Proposed change | Owner agreed by team | Retest result |
| --- | --- | --- | --- | --- |
| [No findings recorded] | | | | |

Report actual denominators, missing tasks and assisted completion. Keep proposed targets separate from measured observations. No WCAG certification or national impact claim follows from this study.
