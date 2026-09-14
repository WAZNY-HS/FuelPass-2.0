# Final presentation content and speaker script
Group C · 12 slides · approximately 5 minutes, plus optional 3-minute live demo  
Each member leads four slides, approximately 100 seconds total. Notes are the spoken script; do not read every bullet. This is editable presentation content, not an exported PPTX. Replace visual directions with actual project artefacts.

## Slide 1 — Sri Lankan National Fuel Pass Redesign Proposal
**Primary presenter:** Shaffron Wazny · 25 seconds

**Exact slide content**
- Theory to Trade (T2T) Internship · Group C
- Shaffron Wazny — T2T-B4-26-007
- K.R.F. Nooha — T2T-B4-26-009
- M.Y.F. Zahra — T2T-B4-26-012
- Proposal for discussion with the Director Board of the Ceylon Petroleum Corporation
- Internship prototype · Demo data · No official endorsement

**Visual:** Real motorist dashboard, with proposal label visible.

**Speaker notes:** “We are Group C: Shaffron Wazny, Nooha and Zahra. Our T2T assignment explores a clearer fuel-pass journey across motorists, attendants and administrators. We will show the design rationale, the connected React demonstration and the remaining work. This is a proposal using fictional data, not an official service.”

## Slide 2 — The challenge: make a transaction understandable
**Primary presenter:** K.R.F. Nooha · 25 seconds

**Exact slide content**
- Motorist: How much remains, and which pass do I show?
- Attendant: Can I record this quantity, and did it save?
- Administrator: Which record explains the activity?
- Goal: clear handoffs across one connected journey

**Visual:** Three role cards linked by a single transaction.

**Speaker notes:** “Our problem statement focuses on understanding a transaction. Each role has a different question, but the answers must agree. We hypothesise that visible allowance, review before confirmation and a receipt can reduce uncertainty. We have not measured reduced queues, errors or confusion.”

## Slide 3 — Research: separate dates, evidence and assumptions
**Primary presenter:** K.R.F. Nooha · 25 seconds

**Exact slide content**
- CPC, July 2022: documented QR allocation workflow
- September 2023: reported suspension
- Ministry indexed notice, March 2026: reimplementation
- No submission-date quota or price claim
- Desk research; no participant interviews

**Visual:** Three-date timeline; small direct source links in slide footer.

**Speaker notes:** “We used published material, prioritising official sources. The historical system changed over time, so the 2023 suspension should not be described as its current status. The later Ministry notice provides context, but our values remain fictional. Language, literacy, shared devices and connectivity require further user research.”

## Slide 4 — UX process and scope
**Primary presenter:** K.R.F. Nooha · 25 seconds

**Exact slide content**
- Published context → problem and role assumptions
- Three core flows → interface → React behaviour
- Technical checks → documented limitations
- Prioritised: pass, dispensing and review
- Deferred: registration, finder, notifications and transfers

**Visual:** Actual flow documentation; add genuine wireframe inset only if available.

**Speaker notes:** “The process connects requirements to behaviour and evidence. We prioritised three journeys that can be demonstrated together. Some earlier requested modules are outside the implemented scope. Our wireframe evidence also needs final organisation in Figma; we will not present a newly drawn diagram as an earlier workshop artefact.”

## Slide 5 — One transaction, three views
**Primary presenter:** M.Y.F. Zahra · 25 seconds

**Exact slide content**
- Motorist: OTP → vehicle → allowance → QR → history
- Attendant: pass → litres → review → confirm → receipt
- Administrator: totals → filter → inspect record
- Errors include correction and retry paths

**Visual:** User flow from research-and-decisions.md, rendered into the slide.

**Speaker notes:** “The flow places validation before dispensing confirmation. A motorist opens the pass, the attendant records a valid quantity, and both history and administration show the resulting record. Error states return the user to a useful next action. The role selector is a demonstration control, not secure authorization.”

## Slide 6 — Design system and accessibility decisions
**Primary presenter:** M.Y.F. Zahra · 25 seconds

**Exact slide content**
- Navy #102D43 · Teal #087F75 · Background #F3F7FA
- Readable hierarchy and labelled inputs
- 48px minimum primary controls and visible focus
- English, Sinhala and Tamil core options
- Draft translations; further accessibility review needed

**Visual:** Actual CSS-derived swatches and real control examples; label as implementation tokens if not Figma variables.

**Speaker notes:** “We use the same colours, hierarchy and controls across roles. Large primary controls support touch interaction, while labels and visible focus support navigation. Sinhala and Tamil copy is a draft, and some supporting text remains English. These choices are design intentions, not a claim of accessibility certification.”

## Slide 7 — Key screens and recovery
**Primary presenter:** M.Y.F. Zahra · 25 seconds

**Exact slide content**
- Remaining allowance beside vehicle identity
- QR pass with fictional identifier
- Review and receipt show the effect of dispensing
- Invalid entry and interruption explain recovery

**Visual:** Actual mobile dashboard, QR, review/receipt and one error state. Do not create fictional screens.

**Speaker notes:** “The dashboard prioritises the selected vehicle and what remains. The pass then supports the station interaction. Review and receipt make the deduction explicit. Showing an interruption state helps explain whether a transaction saved. In this prototype the interruption is simulated; no offline dispensing is supported.”

## Slide 8 — Figma: current evidence and completion work
**Primary presenter:** M.Y.F. Zahra · 25 seconds

**Exact slide content**
- Current file is accessible
- Native editable sign-in text and frames verified
- Several other core screens currently expose image layers
- Complete native screens, components and flow connections
- Playback and duplication still require checks

**Visual:** Real Figma Layers panel for frame 7:451 beside one image-based frame; link to current file.

**Speaker notes:** “The final audit found a distinction between having a Figma file and having a fully editable prototype. Sign-in contains native editable layers, but several other screens contain image references. The remaining work is to replace those references with native screens and verify components, connections and team editing permissions.”

## Slide 9 — React implementation
**Primary presenter:** Shaffron Wazny · 25 seconds

**Exact slide content**
- React + TypeScript; Vinext/Vite tooling
- Shared browser-local transaction state
- Deterministic demo records and Reset demo
- Local validation and duplicate-ID checks
- No secure backend or official integration

**Visual:** Compact file map: page.tsx / demo.ts / copy.ts / globals.css.

**Speaker notes:** “The implementation separates the role interface, transaction logic, language copy and styling. A shared local ledger makes one confirmed transaction visible across all three roles. Reset restores the same starting scenario. These controls demonstrate expected behaviour; local validation is not production security.”

## Slide 10 — Hosted prototype and demonstration
**Primary presenter:** Shaffron Wazny · 25 seconds

**Exact slide content**
- Cloudflare Workers: fuelpass-2-0.shaffronwazny.workers.dev
- Demo OTP: 123456
- Car starts at 18 L; issue 5 L; remaining 13 L
- Administrator: 17 L recorded across 3 transactions
- Source: WAZNY-HS/FuelPass-2.0

**Visual:** Current live browser screenshot after the final preflight check.

**Speaker notes:** “The team supplied this Cloudflare deployment as the current prototype. Our demonstration starts with the motorist, records five litres as an attendant, then checks the same record in administration. We must run the preflight on this address before presenting; earlier browser checks covered a different deployment.”

**Optional transition:** “We will now show that connected scenario.” Run demo-plan.md, then return to Slide 11.

## Slide 11 — Outcomes and validation limits
**Primary presenter:** K.R.F. Nooha · 25 seconds

**Exact slide content**
- Outcome: source-backed connected proposal
- Earlier build, logic and browser checks recorded
- Current deployment needs final browser verification
- No formal participant study or national impact result
- Next: Figma completion, language review, formative testing

**Visual:** Two columns: demonstrated capability / remaining evidence.

**Speaker notes:** “Our outcome is a proposal that can demonstrate consistent transaction state, not a measured improvement to the national service. Earlier technical checks provide bounded evidence. We still need current-host verification and broader accessibility review. A five-participant script is ready, but its results template remains empty.”

## Slide 12 — Group responsibility and next step
**Primary presenter:** Shaffron Wazny · 25 seconds

**Exact slide content**
- Shaffron: technical implementation, integration and deployment
- Nooha: UX research and case-study documentation
- Zahra: UI/UX design and Figma
- Shared: ideation, review, testing, refinement and submission
- AI supported the workflow; Group C owns the decisions
- Proposal for review, not a request for operational deployment

**Visual:** Team contribution table and compact project links.

**Speaker notes:** “Our primary responsibilities supported one shared project. AI helped with exploration, code and documentation; we reviewed and refined suggestions and remain responsible for the submission. The next step is to complete the design evidence and test the proposal with people. We welcome feedback on clarity and the transaction journey.”

## Ten likely questions and honest answers

| Question | Answer |
| --- | --- |
| Is this the official Fuel Pass? | No. It is a T2T Group C proposal using fictional records, with no claimed CPC or government endorsement. |
| Are the allowances current government quotas? | No. The 30 L car allocation and 5 L bike allocation are illustrative scenario values. |
| Did you interview motorists or station staff? | No interviews are documented. Research is based on published sources; personas and pain-point hypotheses require participant validation. |
| What did testing establish? | Earlier records support specified technical checks and browser scenarios on the prior deployment. They do not establish usability improvements or current Cloudflare behaviour. |
| Is the Figma prototype fully editable? | Not yet established. Native sign-in text is verified, but several other inspected screens contain image references; connections and duplication need checks. |
| Does the app prevent fraud? | No. Local duplicate checks demonstrate intended behaviour. Users can modify browser data, and the seeded review flag is fictional. |
| Can several stations use it simultaneously? | No. It uses one browser-local ledger. A production service needs server authority, concurrency handling and secure role access. |
| Does it work offline or scan real passes? | Dispensing is blocked during a simulated interruption. The scanner is a simulation/manual fallback; it is not a real camera or official pass integration. |
| How did AI contribute? | It supported ideation, technical/code work and documentation. The team reviewed/refined outputs and remains responsible for design, integration, testing and claims. |
| What would you prioritise next? | Complete native Figma journeys, verify the current hosted build, review translations/accessibility and run formative participant sessions before considering production integration. |
