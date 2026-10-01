# Telehealth landing rebuild (from approved mockup)

Status: handed to implementation agent 2026-10-01. Checkpoint progress here.

## Goal
Rework the tfcthrive.com one-pager to the approved adult-first telehealth positioning.
Reference mockup (approved v2, full HTML):
`/Users/tom/.claude/projects/-Users-tom-dev-PepTrak/e4d39513-fcd5-4000-86bb-5e7cd6d7c2e4/tool-results/artifact-0b77e95a-1790867811-c0c5.html`

## Content rules (non-negotiable)
- **Hard wall between practices:** NO mention of in-person sessions, a Naperville office,
  AFC Counselors, child/play therapy, or parent-involved child work. The footer line
  "Naperville-based, serving all of Illinois online" IS approved. Ages: adults + teens 13+.
- **Experience:** say "more than two decades" (licensed since 2004 — verified IDFPR).
  Mockup says "nearly two decades"; update everywhere it appears.
- Drop the mockup's "Proposal — not live" banner and footer note.
- All "Book" CTAs → `https://care.headway.co/providers/simone-shepardson?state=ILLINOIS&utm_source=tfcthrive`
  firing the existing GA4 `book_online_click` event (see `src/lib` tracking helpers, pattern
  already used in Hero/Nav/Contact/Fees). Keep per-location labels (hero, nav, how, final, fees).
- "Free 15-minute consult" CTAs: keep (Headway free-consult toggle is being enabled); link to
  the same Headway URL (consult is requested through Headway) with its own tracking label.
- Fees per mockup: Aetna + BCBS IL in-network via Headway; self-pay $130; out-of-network superbill.
- SEO: title tag "Simone Shepardson, LCPC — Online Therapy in Illinois | Thrive Family Counseling",
  meta description, Simone's name in real text (not only alt), JSON-LD (Person + MedicalBusiness/
  ProfessionalService with telehealth emphasis, no street address).
- Keep: GA4 wiring, PTBanner/PTWelcome components (don't remove), `public/` SMS pages, existing
  portrait asset (reuse repo's image, not the mockup's embedded base64).

## Design
Follow the mockup's structure and CSS closely (it carries the brand: cream #faf6f1, sage #5b7b6a,
warm brown #2d2a26, Cormorant Garamond + DM Sans). Sections: header, hero, about, who (4 cards),
how (4 steps, dark band), fees (3 cards), final CTA, footer. Responsive per mockup breakpoints.
Implement as React components in the existing files (Hero/About/Services→Who/Approach→How/Fees/
Contact→Final/Footer/Nav) — rename/retire components as fits, keep the repo's styling approach.

## Done so far
- Rebuilt all sections per mockup in Tailwind-project plain CSS (`.tl-*` block appended to src/index.css): Nav(header), Hero, About (reuses /simone.jpeg), Who (renamed from Services), How (from Approach), Fees, Final (from Contact; form removed), Footer. Shared `Book` CTA component fires GA4 book_online_click (placements: nav, hero, hero_consult, how, how_consult, final, final_consult).
- index.html: new title, description, canonical, OG, JSON-LD (Person + ProfessionalService/MedicalBusiness).
- `npm run build` passes. Committed locally, not pushed/deployed.

- Blank-sections report investigated: not a code bug. Headless Chrome full-page render (1280x4800) shows How/Fees/Final/Footer painting correctly; DOM computed styles and hit-testing were correct in the live tab. The blanks were stale raster tiles in the automation Chrome tab (DPR 2.5, tall page, partial paint even in the Who/About region at scrollY 1500).

## Remaining
- SHIPPED 2026-10-01: visual review done (headless full-page render), pushed to GitHub, deployed to www.tfcthrive.com; live checks green (title, SMS pages, /afc, wall grep clean).
- Not done: mockup dark-mode theme (site has none); PTWelcome.tsx (unrendered, left as-is) still contains child/family copy; useContactForm hook now unused.
