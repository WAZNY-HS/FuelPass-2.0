# Group C — final submission package
**Sri Lankan National Fuel Pass Redesign Proposal**  
**Theory to Trade (T2T) Internship**  
**Audience:** Director Board of the Ceylon Petroleum Corporation, as an assignment presentation

| Member | Student ID |
| --- | --- |
| Shaffron Wazny | T2T-B4-26-007 |
| K.R.F. Nooha | T2T-B4-26-009 |
| M.Y.F. Zahra | T2T-B4-26-012 |

Prepared 14 September 2026. AI-assisted team project. Proposal prototype, not an official service.

## Read in this order
1. [Final submission audit](final-audit.md): completion status, evidence and exact remaining actions.
2. [Medium-ready case study](case-study.md): approximately 1,900 words, editable Markdown with figure slots/captions.
3. [Research, flows and decision log](research-and-decisions.md).
4. [Project links](project-links.md): current app, source, Figma and honest placeholders.
5. [Contribution table and AI disclosure variants](contributions-and-ai.md).
6. [Twelve-slide presentation and ten anticipated questions](presentation.md).
7. [Three-minute live demo plan](demo-plan.md).
8. [Verification record, five-participant script and blank results template](verification-and-usability.md).

These files are final-content drafts with clearly marked completion dependencies. No current Word/PPTX/PDF/ZIP export or new screenshots were generated in this audit. Earlier exports must be updated from these revised sources before they are described as final.

## Recommended final submission folder
Use **FuelPass-Group-C-Final/** as the top-level folder. The table specifies the exact packaging plan; it does not claim these export folders/files have already been generated.

| Folder / file | Put inside |
| --- | --- |
| README.md | Copy this index; replace pending checks with dated actual outcomes and record submitted source revision |
| 01_Case_Study/case-study.md | Final reviewed Markdown from this package |
| 01_Case_Study/case-study.docx | Word version with title page, actual figures/captions and working links |
| 01_Case_Study/case-study.pdf | Optional read-only backup matching the Word version |
| 01_Case_Study/research-and-decisions.md | Sources/access dates, hypotheses, personas, flows and scope |
| 02_Figma_Design/figma-links.md | Current file link, working frame links, genuine tested playback link, permissions and known limitations |
| 02_Figma_Design/FuelPass-Group-C.fig | Native local copy exported from Figma after completion, if export is permitted |
| 02_Figma_Design/handoff-notes.md | Tokens/components, frame inventory, supported flows and remaining limitations |
| 03_React_Source/FuelPass-2.0/ | Repository source snapshot with package.json, lockfile, source, tests, scripts and technical README; omit node_modules, build output and secrets |
| 03_React_Source/source-revision.txt | Actual commit SHA, snapshot date and repository URL |
| 04_Presentation/presentation.md | Slide content/speaker notes from this package |
| 04_Presentation/Group-C-FuelPass.pptx | Editable slide deck assembled from presentation.md |
| 04_Presentation/Group-C-FuelPass.pdf | Matching presentation backup |
| 04_Presentation/demo-plan.md | Timed steps, credentials, expected values and fallback plan |
| 05_Screenshots/ | Authentic final images listed below, plus capture-notes.md with URL/date/viewport/scenario |
| 06_AI_Threads/AI-thread-links.md | Genuine reviewed share links and short purpose labels |
| 07_Verification/verification-and-usability.md | Dated actual checks plus proposed protocol clearly separated |
| 07_Verification/results.md | Actual results if sessions occur; otherwise clearly unfilled template |
| 08_Submission_Admin/final-audit.md | Updated audit after closing or acknowledging gaps |
| 08_Submission_Admin/contributions-and-ai.md | Confirmed team responsibilities and disclosure variants |
| 08_Submission_Admin/project-links.md | One consistent final set of links |

### Screenshot capture list
Use a clean demo and capture real output. Keep proposal/demo labelling visible. Suggested names:

- 01-motorist-dashboard-mobile.png — car, 18 L before issue.
- 02-qr-pass-mobile.png — fictional car pass.
- 03-attendant-review.png — 5 L review, expected 13 L.
- 04-receipt.png — TX-003 and remaining 13 L.
- 05-history-after-issue.png — same TX-003.
- 06-admin-desktop.png — 17 L / 3 sample transactions.
- 07-validation-error.png — invalid/excess entry with recovery.
- 08-figma-native-layers.png — genuinely editable layers, not just a canvas screenshot.
- 09-design-system.png — actual components/tokens; label implementation-only swatches accurately.
- 10-wireframes.png — genuine earlier wireframe or explicitly retrospective diagram.

Do not rename an earlier Sites screenshot as a Cloudflare capture. Screenshots are publication illustrations, not a substitute for editable Figma screens.

### Word and slide export steps
Open case-study.md in VS Code for editing. To prepare Word, copy the rendered article into Word, apply heading styles, put project/team details on the title page, insert the actual figures and verify hyperlinks. Save as case-study.docx and export PDF if required. This audit has not created a new DOCX.

For slides, transfer each slide's exact content into PowerPoint or another editable presentation app. Put notes in speaker notes and use authentic visuals. Preserve the five-minute speaker allocation, then export PPTX/PDF. No Medium publication is authorized or performed by this package.

## Final pre-submission checklist
Recommended coordination follows the team's stated responsibility areas; all members review the final result.

### Highest-priority evidence checks
- [ ] Zahra: replace image-only Figma core screens with native editable text, controls and layouts.
- [ ] Zahra: verify reusable components/variants, Auto Layout, styles/tokens and mobile/desktop coverage.
- [ ] Zahra: organize cover, foundations, components, role screens and prototype flows; add genuine wireframes.
- [ ] Zahra: connect core actions, back buttons, errors/recovery and start points; test each flow in Present mode.
- [ ] Zahra: copy a current frame link and actual playback link; verify team can edit/duplicate and instructor can view.
- [ ] Shaffron: open Cloudflare in a private window; run all three journeys and record actual results.
- [ ] Shaffron: run build, TypeScript and logic checks on the submitted revision; retain results.
- [ ] All: add and test genuine AI-thread links, after reviewing shared content.

### App, language and evidence
- [ ] Demo OTP 123456 and resend/expiry work on current host.
- [ ] Reset produces car18/bike5 and two seeded transactions.
- [ ] One 5 L issue produces car13 and admin17 L / 3 transactions; duplicate replay does not deduct again.
- [ ] Invalid pass/litres, excess allowance, interruption/retry and empty history recover correctly.
- [ ] Mobile and desktop layouts are checked; keyboard focus/actions remain usable.
- [ ] Core language switching checked; Sinhala/Tamil drafts reviewed or clearly marked pending.
- [ ] Student IDs are absent from hosted UI; README/submission attribution is correct.
- [ ] Current screenshots match submitted source and carry demo labels.
- [ ] Historical verification is not relabelled as current-host verification.
- [ ] No fabricated interviews, usability rates, official approval, security or live quota claims.

### Publication and presentation
- [ ] Nooha: proofread case-study language, sources, access dates, scope and captions.
- [ ] All: confirm exact names/IDs and primary contribution wording.
- [ ] All: keep app terminology Motorist / Attendant / Administrator consistent.
- [ ] Source README, article and slides agree on Cloudflare, Figma status and feature scope.
- [ ] AI disclosure remains concise and team-responsible; thread placeholders resolved or acknowledged.
- [ ] Replace article figure slots with actual figures; test Medium formatting in a draft.
- [ ] Save updated Word and slide versions; do not submit old exports as revised files.
- [ ] Rehearse five-minute slides plus optional three-minute demo; each member practises their section.
- [ ] Test GitHub/design/app links from an account without privileged access.
- [ ] Save source revision, native Figma copy where permitted, screenshots and PDF/local-demo backups.

## A. COMPLETE AND READY
- Inspected React source and technical README in GitHub.
- Final case-study text, audit, source/decision log and documented flows.
- Team responsibility table and three AI-disclosure versions.
- Twelve-slide content, balanced notes and anticipated questions.
- Timed demo instructions, verification boundaries, participant script and blank results template.

## B. NEEDS FINAL EDIT
- Figma native editability, page organization, components and flow connections.
- Current Cloudflare browser/build verification record.
- Case-study figures and completion statements after checks.
- Team-confirmed attribution, translation/accessibility review.
- Updated editable Word document and assembled presentation exports.

## C. STILL MISSING
- Genuine shared AI-thread links.
- Verified Figma playback link and completed core flow evidence.
- Final current-host screenshots and dated browser results.
- Final DOCX/PPTX/PDF exports and packaged source snapshot.
- Formal participant results (not conducted; disclose rather than invent).
- Medium publication link only if publication is required; article content already supplied.

## Exact remaining actions, in priority order
1. Finish or explicitly acknowledge the Figma gaps; test playback and editing permissions.
2. Run the current Cloudflare/browser and local build checks, record the source revision and results.
3. Add genuine AI-thread and Figma playback links; verify external access.
4. Capture final figures; update the article and audit only where new evidence supports completion.
5. Confirm contribution/translation wording, create the Word and slide exports, and proofread.
6. Rehearse the demo, create the source/design backups and assemble the folder.
7. Submit the package; publish to Medium only when the team intends to do so.
