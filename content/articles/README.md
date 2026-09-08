# Blog article drafts (staged — NOT published)

Five SEO articles drafted 2026-07-15 for review. Nothing in `content/` is part of the
Vite build (`src/` + `public/` only), so these cannot reach the live site until we
build the blog routing and move approved articles into it.

## Publishing order & cadence (per SEO plan)

One article every 2 weeks, in numbered order. Each publish: submit URL in Google
Search Console, add internal links from the two most related articles.

| # | File | Target keyword | Funnel stage |
|---|------|----------------|--------------|
| 1 | `01-therapy-for-gifted-children-naperville.md` | therapist for gifted child Naperville | Cornerstone / local |
| 2 | `02-twice-exceptional-anxiety-adhd.md` | twice exceptional child anxiety ADHD | Authority / shareable |
| 3 | `03-after-the-autism-evaluation-illinois.md` | what to do after autism diagnosis child Illinois | High-intent / referral partner |
| 4 | `04-insurance-child-therapy-aetna-bcbs-illinois.md` | does Aetna / BCBS Illinois cover child therapy | Bottom-funnel / converts |
| 5 | `05-online-therapy-teens-illinois.md` | online therapy for teens Illinois | Objection-handling |

## Conventions used in the drafts

- Frontmatter carries `metaTitle` (≤60 chars) and `metaDescription` (≤155 chars) for the page `<head>`.
- `[link: →N]` markers show where internal links to article N go once URLs exist.
- Every article ends with the same CTA block pointing at the Headway booking URL
  (`src/lib/booking.ts`); when the blog template is built, wire the CTA through
  `trackBookOnlineClick('blog_cta')` so per-article conversion shows in GA4.
- Voice: first-person Simone. No free-consultation offers anywhere (booking goes
  through Headway only). No invented statistics — quantitative claims kept general.
