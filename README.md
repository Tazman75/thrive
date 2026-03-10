# Thrive Family Counseling

Website for Thrive Family Counseling — compassionate counseling for children, adolescents, adults, and families in DuPage County, Illinois.

**Live site:** https://www.tfcthrive.com

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Production build
npm run preview    # Preview production build
```

## Analytics

Google Analytics 4 is integrated via gtag.js in `index.html` (Measurement ID: `G-XQ0MM6DSEH`).

### UTM Tracking

The site detects UTM parameters from inbound links and stores them in sessionStorage for the duration of the visit. UTM params are cleaned from the URL after capture.

**Hook:** `src/hooks/useUTMSource.ts`

### Psychology Today Integration

Visitors arriving with `utm_source=psychologytoday` see a dedicated welcome page (`src/components/PTWelcome.tsx`) with:

- Personalized greeting acknowledging they came from Psychology Today
- Brief intro about Simone and her areas of focus
- Consultation request form (name, email, phone, interest area, message)
- Direct call and email buttons
- "View Full Site" link to explore the full website

**Psychology Today profile URL** (use this as the website link on the PT profile):

```
https://www.tfcthrive.com/?utm_source=psychologytoday&utm_medium=referral&utm_campaign=therapist-profile
```

**Viewing analytics in GA4:**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Navigate to Reports > Acquisition > Traffic Acquisition
3. Look for `psychologytoday` under the Source column to see visit counts, engagement, and conversions from PT

## Project Structure

```
src/
  components/
    Nav.tsx           Navigation bar
    Hero.tsx          Landing hero section
    About.tsx         About the therapist
    Services.tsx      Services offered
    Approach.tsx      Therapeutic approach
    Contact.tsx       Contact form and info
    Footer.tsx        Site footer
    PTWelcome.tsx     Psychology Today landing page
  hooks/
    useInView.ts      Intersection Observer hook for scroll animations
    useUTMSource.ts   UTM parameter detection and storage
  App.tsx             Main app with PT visitor routing
  main.tsx            Entry point
  index.css           Global styles and Tailwind theme
public/               Static assets
tools/                Dev utilities (screenshots)
```

## Client Marketing Channels

### Channel 1 — Psychology Today

- Each therapist profile should link to the site using the UTM-tagged URL above
- Cost: ~$30/month per therapist
- Expected return: 5–20 leads/month
- GA4 tracks click-throughs automatically via UTM parameters

### Tracking Checklist

- [x] Google Analytics 4 installed
- [x] UTM parameter detection
- [x] Psychology Today custom landing page
- [ ] Form submission backend (currently frontend-only)
- [ ] Google Search Console setup
- [ ] Conversion events in GA4 (form submissions, phone clicks)
