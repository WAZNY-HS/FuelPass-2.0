# Fuel Pass, with a clearer next step: a Group C UX engineering proposal

**Sri Lankan National Fuel Pass Redesign Proposal**  
**Theory to Trade (T2T) Internship · Group C**  
**Audience:** Director Board of the Ceylon Petroleum Corporation, as an assignment presentation

Shaffron Wazny — T2T-B4-26-007  
K.R.F. Nooha — T2T-B4-26-009  
M.Y.F. Zahra — T2T-B4-26-012

*Proposal prototype. Fictional demonstration data. No government or CPC endorsement.*

## A public-service journey we could make tangible

A fuel pass connects several people: the motorist presenting it, the attendant recording a purchase and the administrator reviewing activity. Our proposal focuses on making that connection understandable. Can someone see their remaining allowance, present the correct pass and understand what changed after a transaction?

For our T2T internship assignment, Group C developed a React prototype supported by research documentation and design work. The goal was to practise the end-to-end work of a UX engineer: connect a problem to a design decision, implement the behaviour and explain its limits. This is an AI-assisted team project, with responsibility remaining with the group.

[Insert Figure 1: Current motorist dashboard, captured from the Cloudflare prototype.]  
*Figure 1. The dashboard separates illustrative allocation, usage and remaining allowance for a fictional vehicle.*

## Understanding the existing experience

Our research began with published material rather than interviews. The CPC's announcement dated 16 July 2022 describes the National Fuel Pass as a way to manage fuel distribution through vehicle-linked QR passes. Its documented journey includes obtaining a pass, presenting it at a station, checking allocation and recording the issued quantity. This gave us a service structure to examine. [CPC launch announcement](https://ceypetco.gov.lk/2022/07/16/ministry-of-power-and-energy-launches-national-fuel-pass-to-streamline-fuel-distribution/)

Dates matter. Reporting on 1 September 2023 described the suspension of QR-based rationing. A later Ministry of Energy notice indexed for 15 March 2026 describes reimplementation. We therefore avoid presenting the 2023 suspension as the system's current status. The later notice does not establish the exact rules or quotas on our submission date; all prototype allowances are illustrative. [2023 reporting](https://economynext.com/sri-lanka-ends-qr-code-enabled-fuel-rationing-system-129774/), [Ministry notice](https://energymin.gov.lk/index.php/2026/03/15/news-07-15-03/)

Sri Lanka's language context also shaped the proposal. Sinhala and Tamil are official languages, with English as the link language. We included core interface options in all three, while identifying Sinhala and Tamil translations as drafts for fluent-speaker review. [Official language policy](https://pubad.gov.lk/web/index.php?Itemid=193&id=117&lang=en&option=com_content&view=article)

National digital-literacy statistics provide context for avoiding assumptions about technical confidence. They do not tell us whether a particular person can use our prototype. Weak connectivity, shared devices and differing confidence are design considerations to investigate, not measured findings from our own study. [DCS Computer Literacy 2024](https://www.statistics.gov.lk/Resource/en/ComputerLiteracy/Bulletins/AnnualBuletinComputerLiteracy-2024.pdf)

Sources were reviewed during preparation on 13 September 2026; the Ministry's indexed announcement was checked again on 14 September. The research log records access limitations.

## The problem and the people involved

Our problem statement is: **How might we help motorists and station staff understand and complete a fuel-pass transaction, while making its resulting record clear to an administrator?**

The documented workflow involves several handoffs. Our design hypotheses are that a prominent remaining balance, an explicit confirmation step and a clear receipt could reduce uncertainty at those handoffs. We have not measured reduced confusion, queue times or errors.

We used three provisional role descriptions: a motorist checking a family vehicle, an attendant entering litres during a busy shift and an operations reviewer inspecting station records. These are working assumptions, not interview-based personas. Station managers are relevant stakeholders too, but a separate manager module is outside this prototype.

## Choosing a focused scope

We prioritised one connected scenario over a long feature list. The motorist signs in with a simulated OTP, selects a vehicle, checks allowance, opens a QR pass and reviews history. The attendant validates that pass, enters litres, reviews the deduction and confirms a receipt. The administrator sees the same transaction in sample operational data.

Full registration, a notification centre, a station finder and quota transfers are not implemented in the inspected source. Separate operator authentication is also absent. Keeping these boundaries visible prevents the presentation from promising functionality the demonstration cannot show.

The learning objective is a coherent transaction journey. We can explain and check its states without requiring real personal records, official integrations or paid APIs.

[Insert Figure 2: Documented three-role user flow from the submission research log.]  
*Figure 2. One demonstration transaction connects pass presentation, dispensing confirmation and administrative review.*

## From structure to interface

The interface groups tasks by role, then gives each screen a clear next action. For motorists, the balance and pass are central. For attendants, validation precedes entry and review. For administrators, summary information leads to individual records.

Wireframes should show how these priorities became screen structure. Our final audit found that a dedicated wireframe section was not visible in the inspected Figma page. We will include genuine prior wireframes where available; a diagram created for this article must be labelled as retrospective documentation rather than evidence of an earlier workshop.

[Insert Figure 3: Actual wireframe artefact, with its date or “retrospective structure diagram” label.]  
*Figure 3. Screen structure for the core transaction journey; provenance should match the artefact supplied.*

## A consistent visual language

The implemented interface combines navy headings, teal actions and a light background. The source uses navy #102D43, teal #087F75 and background #F3F7FA. These choices create a consistent public-service presentation without using official endorsement language.

Readable body text, labelled inputs, visible focus indicators and primary controls with a 48-pixel minimum height support interaction. Text accompanies status changes so meaning does not depend only on colour. Mobile layouts support motorist and attendant tasks, while administration benefits from a wider view.

These are accessibility decisions, not a certification. Full keyboard, screen-reader, language and device reviews remain necessary. The WCAG guidance provides a reference for further evaluation. [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/)

[Insert Figure 4: Actual design tokens/components, clearly distinguishing Figma components from a documentation swatch.]  
*Figure 4. Shared visual choices used to keep role views consistent.*

## Three redesigned experiences

The motorist uses demo code **123456**, with resend and expiry recovery. No real phone number or identity record is needed. The car begins with 18 litres remaining from an illustrative 30-litre allocation and 12 litres of seeded usage. The bike provides an empty-history example.

The QR pass encodes a fictional identifier. It demonstrates pass presentation but cannot authorise real fuel collection. A manually entered identifier provides a reliable fallback for the attendant demonstration.

[Insert Figure 5: Car QR pass with proposal and demo labels visible.]  
*Figure 5. The pass represents DEMO-PASS-001, a fictional identifier.*

The attendant enters 5 litres, checks the proposed result and confirms. The resulting receipt leaves 13 litres for the car. Validation handles an unknown pass, invalid litres and insufficient allowance. A simulated interruption blocks saving until restored. Replaying the same transaction identifier demonstrates duplicate handling without a second deduction.

The administrator then sees 17 litres across three sample transactions. Station filtering and record inspection demonstrate review. A seeded flag is a discussion example, not automated fraud detection; audit descriptions are reconstructed from transactions rather than independently secured logs.

## What the Figma file currently demonstrates

The supplied Figma file exists. Structural inspection on 14 September found a native sign-in frame containing editable text and nested frames. However, several dashboard, QR and history frames expose only an image-labelled layer. The provided node 21:66 was not found.

We therefore describe the design as **partially editable**. Complete reusable components, Auto Layout, language screens and prototype connections still need verification or completion. A design URL alone does not prove a working interactive prototype. This limitation is visible in our submission audit and should be resolved before claiming full Figma completion.

[Insert Figure 6: Figma Layers panel showing a genuinely editable screen.]  
*Figure 6. Native layers in the sign-in screen; other core screens require the same level of editability.*

## Building the React prototype

React and TypeScript support the interface and transaction logic, with Vinext/Vite tooling, reusable UI primitives, custom styling and Lucide icons. The repository separates role screens, language strings, visual rules and demo calculations.

The important implementation decision is a shared browser-local ledger. A confirmed transaction updates the motorist, attendant and administrator views within the same demonstration. This avoids three disconnected screens that merely appear to describe the same event.

Local persistence makes a demonstration repeatable across reloads, and Reset demo restores deterministic starting data. This is not a multi-user backend. Browser data can be edited by its user, and concurrent tabs or devices are not supported.

The source is available on GitHub. The current hosted address uses Cloudflare Workers, as supplied by the team. Hosting a prototype does not make it a production service.

## Checking behaviour honestly

The earlier verification record, dated 13 September, reports successful production build, TypeScript checking and transaction-logic checks. It also records browser walkthroughs on the earlier Sites deployment, covering the connected role journey, validation and recovery states.

Those checks are technical evidence under stated conditions. They are not interviews, formal usability research or proof of WCAG compliance. The current Cloudflare URL could not be opened by the audit's web tool, so a fresh browser verification is still required. This access failure is not evidence that the application is unavailable.

We have prepared a short five-participant script and an empty results template. Proposed targets include four of five participants completing key tasks without assistance. These remain targets; no participant success rate is claimed.

## Outcomes, limits and the next iteration

The tangible outcome is a source-backed proposal in which one demonstration transaction changes all relevant role views. The project also provides documented recovery scenarios, a repeatable ledger and a basis for design discussion.

We cannot claim shorter national queues, reduced fraud or improved public satisfaction. Production would require official agreements, secure authentication, server-authoritative allowances, concurrent transaction handling, independent audit storage, privacy review and operational monitoring.

The immediate priorities are completing editable Figma screens and connections, checking the current hosted build, reviewing translations and adding final evidence images. Participant sessions would then help test the assumptions behind hierarchy and confirmation wording.

## AI assistance and team responsibility

Group C used AI tools, including ChatGPT, to support ideation, requirement exploration, UX/UI exploration, content refinement, technical guidance, code generation and improvement, debugging, documentation and deployment guidance. The team reviewed and refined outputs, made decisions and worked with the implementation and deployment. AI supported the workflow; the group remains responsible for the submission.

Primary responsibility areas were technical implementation, integration and deployment for **Shaffron Wazny**; UX research and case-study documentation for **K.R.F. Nooha**; and UI/UX design and Figma for **M.Y.F. Zahra**. These are team-declared areas, not claims of independent ownership. Ideation, review, testing, refinement and presentation preparation were shared responsibilities.

The central lesson is that a screen, an implemented behaviour and a verified outcome are different forms of evidence. Keeping them aligned makes a proposal easier to explain and defend. Our next review should ask whether people understand the transaction, not simply whether the interface looks finished.

## Project links

- [Live React prototype — Cloudflare Workers](https://fuelpass-2-0.shaffronwazny.workers.dev)
- [GitHub source and README](https://github.com/WAZNY-HS/FuelPass-2.0)
- [Figma design file — partial editability verified](https://www.figma.com/design/4yt80npyfAzcukprbG33bf/Fuel-Pass-%E2%80%93-Editable-Figma-Prototype)
- Interactive Figma playback: **[ADD REAL PRESENT-MODE SHARE LINK AFTER TESTING]**
- AI assistance thread: **[ADD GENUINE SHARED CHATGPT CONVERSATION LINK]**
- Additional AI threads, if applicable: **[ADD ACTUAL LINKS AND SHORT PURPOSE LABELS]**

*Publication note: insert the actual figures and missing links, then update only those completion statements supported by new evidence. No Medium publication has been performed.*
