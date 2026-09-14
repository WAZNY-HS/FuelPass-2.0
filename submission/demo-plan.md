# Live demo plan
**Current URL:** [Open Cloudflare prototype](https://fuelpass-2-0.shaffronwazny.workers.dev)  
**Duration:** approximately 3 minutes, separate from the five-minute slide presentation.  
**Primary driver:** Shaffron; Nooha explains motorist context, Zahra explains interaction/recovery, Shaffron explains state and admin.

## Preflight before the audience arrives
Run the current-host check sheet in verification-and-usability.md. This plan uses inspected source behaviour; it is not evidence that a live check already passed.

Open one browser tab, select English and Reset demo. Select Motorist. Resend code immediately before starting if necessary: **123456** expires after two minutes. Keep the same tab throughout so the role views share the ledger. Do not use real NIC, phone or vehicle records. Prepare a local copy and authentic screenshots as backups. A local server must already be running; use the localhost URL printed by pnpm dev.

## Main sequence

| Time | Screen / exact action | Expected source-defined result | What to say |
| --- | --- | --- | --- |
| 0:00–0:15 | Open current URL; point to proposal/demo labels | Three demo roles visible | “This is our proposal using fictional data. The role selector lets us demonstrate one connected transaction.” |
| 0:15–0:35 | Motorist; Send a new demo code if needed; enter 123456; Verify and continue | Motorist overview | “Sign-in is simulated. We do not collect a real telephone number.” |
| 0:35–0:55 | Select DEMO-CAR-01; show remaining amount; open QR pass | 18 L remaining; DEMO-PASS-001 | “The selected vehicle has eighteen illustrative litres remaining. This QR identifies a demo record.” |
| 0:55–1:10 | Open History; briefly select DEMO-BIKE-02 and its History; restore car | Car seed records; bike empty state | “History explains previous issues, and an unused vehicle has a clear empty state.” |
| 1:10–1:35 | Choose Attendant; Simulate scan or manually validate DEMO-PASS-001; enter 5; Review | Correct car; proposed remaining 13 L | “At the station, validation comes before confirmation. The attendant reviews the quantity and remaining allowance.” |
| 1:35–1:55 | Confirm once; show receipt TX-003; choose Check duplicate protection | 13 L; duplicate rejected without another deduction | “One confirmation records five litres. Replaying the same demo transaction does not deduct again.” |
| 1:55–2:15 | Return to Motorist; choose car; open overview/history | 13 L and TX-003 | “This is the same local ledger, so the motorist sees the recorded issue.” |
| 2:15–2:45 | Choose Administrator; show totals; inspect TX-003, then seeded flagged record; use station filter if time | 17 L, 3 transactions; derived audit and sample flag | “The administrator can move from totals to a record. These audit descriptions and flags are illustrative, not secure fraud evidence.” |
| 2:45–3:00 | End on admin or return to overview | No additional changes needed | “The prototype demonstrates a connected journey. Official integrations, secure multi-user transactions and further user evaluation remain future work.” |

A demo-role transition is not a separate login. Do not invent attendant credentials or demonstrate missing registration/finder/transfer modules.

## Optional error sequence — 60–90 seconds
Run after the main demonstration or during questions; reset first so expected values are predictable.

1. Motorist: enter **000000** to show invalid OTP; resend and use **123456**. For expiry, Help and demo controls → **Expire demo code**, then try the code and resend.
2. Attendant: manually enter **WRONG**, then correct to **DEMO-PASS-001**.
3. Enter **19** litres against the fresh car's 18 L; show insufficient allowance; change to **5**.
4. Review, enable simulated interruption in demo controls, confirm: no save. Restore the connection simulation, retry once, show **TX-003 / 13 L**.
5. Explain: “We are simulating failure handling. This is not a test of real network loss and does not support offline dispensing.”

For a brief language demonstration, switch Sinhala then Tamil and return to English. Say “Core translations are drafts requiring fluent-speaker review”; do not claim complete translation coverage.

## Recovery if the presentation environment fails
- Expired OTP: resend; do not repeatedly retry the same expired code.
- Unexpected balance: Reset demo, restart; do not improvise arithmetic.
- Browser reload: sign in again; the ledger may remain until reset.
- Hosted page unavailable: state the failure, then use a previously tested local server or authentic backup screenshots. Identify the backup as local or static.
- Figma playback unavailable: show design-file evidence and acknowledge incomplete wiring; do not call screenshots interactive.
- Never report an unobserved result just because it is expected by this script.
