# Akravo.com — 1:1 Pixel-Perfect Next.js Rebuild from Framer

## CRITICAL GOAL: This must be a 1:1 EXACT replica of the current Framer site. Every pixel, every color, every font size, every spacing value, every animation, every hover effect — identical. Do NOT improvise, do NOT "improve", do NOT deviate. The Framer site IS the spec.

---

## Step 0: Connect to the Framer Site via Unframer MCP

Before writing ANY code, connect to the Framer site using the Unframer MCP and thoroughly extract everything.

**MCP Server URL:**
```
https://mcp.unframer.co/mcp?id=9b11ec8309992cda1552abe93b877aa5d926b9d8dd85dd9a965c486c49563d06&secret=TgY8LE47xAeAiH6QESgnK59ZFXEKVyk2
```

**Setup:**
Add this as an MCP server in your config (`.claude/settings.json` or via `claude mcp add`).

**Extraction Process — Do this FIRST before writing any code:**

1. **Discover ALL pages** — List every route/page that exists on akravo.com. Not just the homepage — check for /llm-optimisation, /process, /pricing, /contact, /blog, and any other pages.

2. **For EVERY page discovered, extract:**
   - Full HTML/component structure and hierarchy
   - **Exact CSS values** — not approximations. Get the real hex colors, font-family names, font-sizes in px, font-weights, line-heights, letter-spacing, padding, margin, gap, border-radius, border colors/widths, box-shadows, backdrop-filters, gradients, opacity values
   - All text content verbatim — every headline, paragraph, button label, placeholder text, alt text
   - All image assets, SVGs, icons, logos, background images — download them and save to `/public/images/`
   - All animations/transitions — easing curves, durations, delays, trigger conditions (hover, scroll, load)
   - All hover states, active states, focus states
   - **ALL link targets and URLs** — every CTA button, every nav link, every text link. Extract the exact href/URL each element points to (e.g., Calendly links, external URLs, anchor links, mailto links, download links). Preserve every single link destination exactly as-is.
   - Form configurations (field types, validation, placeholders, form action/submission endpoint)
   - Navigation structure and where each nav item links to
   - Responsive breakpoints and how layouts change at each breakpoint
   - Z-index layering
   - Any scroll-triggered effects

3. **Build EVERY page** discovered — create a Next.js route for each one.

4. **The MCP data is the single source of truth.** The design reference below is a fallback ONLY if the MCP cannot provide certain details.

---

## Project Overview

Rebuild the **entire** akravo.com site (currently on Framer) as a **1:1 pixel-perfect** Next.js 15 App Router project. Every page, every section, every component must look and behave identically to the Framer original. Deploy target is **Vercel**.

**Akravo** is an LLM Optimisation Agency — they help businesses become visible to AI platforms like ChatGPT, Perplexity, and Google AI Overview.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, `src/` directory)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + inline styles where needed to match exact Framer values
- **Animations:** Framer Motion (replicate every Framer animation exactly)
- **Icons:** Extract actual SVG icons from the Framer site via MCP — do NOT substitute with Lucide or other icon libraries unless the exact icon is unavailable
- **Fonts:** Extract the exact fonts from Framer via MCP. Based on visual reference these appear to be Inter (body) + Playfair Display Italic (accent words in headings) — but verify via MCP and use whatever the Framer project actually uses
- **Deployment:** Vercel

---

## Design System — Extract from MCP, Use These as Fallback

### Colors (verify exact values via MCP)
- **Background:** `#0A0A0A` (near-black)
- **Card backgrounds:** `#141414` with `border: 1px solid rgba(255,255,255,0.08)`
- **Primary accent:** `#7C3AED` (purple) — all CTAs, buttons, highlights
- **Primary hover:** `#6D28D9`
- **Body text:** `#A3A3A3` (muted gray)
- **Heading text:** `#FFFFFF` (white)
- **Selection highlight:** `rgba(124, 58, 237, 0.4)`

### Typography (verify exact values via MCP)
- **Headings:** White, large, bold — regular words in sans-serif (likely Inter)
- **Italic accent words** in headings use a serif italic font (likely Playfair Display Italic). Examples: "Invisible", "effective.", "score.", "just simple.", "connect.", "Beat Your Competitors?", "Checklist"
- **Body text:** Sans-serif, muted gray (#A3A3A3)
- **Badges/labels:** Small pill shapes with subtle border

### UI Patterns (verify exact values via MCP)
- **Glassmorphism nav:** Semi-transparent dark bg + backdrop-filter blur + subtle border, pill-shaped
- **Cards:** Dark bg with subtle white border, large border-radius
- **Buttons (primary):** Purple, rounded-full, white text
- **Buttons (secondary):** Transparent with subtle border, rounded-full
- **Badges:** Small rounded-full pills with subtle border

---

## Homepage Sections Reference (Top to Bottom)

Use these as a guide. **The MCP data takes priority** — if the MCP provides different values, use those.

### 1. Navigation (Sticky, Floating)
- Fixed at top center, pill-shaped glass-morphism bar
- Logo: `akravo.` in bordered rounded box
- Links: `LLM Optimisation` | `Process` | `Pricing`
- Right: `Contact` (outline) | `Book a call` (purple)
- Mobile: hamburger menu
- **Extract exact link targets for every nav item and CTA from MCP**

### 2. Hero Section
- Badge: Green dot + "Accepting 3 new clients for Q4"
- Headline: "Your Business is *Invisible* to 200 Million AI Users." (*Invisible* in serif italic)
- Subtext: "ChatGPT, Perplexity, and Google's AI Overview control the new buyer journey. We make sure they recommend you."
- CTAs: "Book a call" (purple) | "Learn How" (outline) — **extract actual link destinations from MCP**
- Logo marquee: Gemini, Meta, Perplexity, Qwen, Mistral, Claude, OpenAI — infinite horizontal scroll

### 3. LLM Optimisation Agency Banner
- Full-width with abstract purple/blue 3D glass background image
- `akravo.` logo + "LLM Optimisation *Agency*" (*Agency* in serif italic)
- Extract the actual background image from MCP if available

### 4. "What We Do" Section
- Badge: "What we do"
- Headline: "Simple, *effective.*" (*effective.* in serif italic)
- Subtext: "Make your brand legible to AI, verifiable on the web, and visible where people ask. in three strategic steps."
- Three service columns with icons:
  1. Prompt Research — "Initially, we map your *intent* taxonomy, and identify entity gaps."
  2. Citation Management — "We build and maintain a *citation graph*, the whole A-Z."
  3. Influencial Monetisation — "We monitor your *answer share* and *citation share* and catch hallucinations"
- CTA: "Book a 20-min call" — **extract actual link from MCP**

### 5. Founder Section
- Headline: "Aim, shoot, *score.*" (*score.* in serif italic)
- Text paragraphs about ChatGPT, Google SGE, competitive edge
- "Our edge: We don't theorize. We implement."
- Attribution: "Fabian van Til" — "Founder of Akravo"
- Photo of Fabian on the right (extract from MCP or use placeholder at `/public/images/fabian.jpg`)

### 6. Pricing Section
- Badge: "Pricing"
- Headline: "Pricing that's *just simple.*" (*just simple.* in serif italic)
- Subtext: "There is no need to overcomplicate pricing, ever."
- **Standard Plan card:** $1,950/month, 3 Month-Project, features list, "Book Call" + "Submit Form" buttons, "Upfront Payment" toggle with "Save 10%" badge, purple gradient orb decoration
- **Enterprise Plan card:** $8,000+, "For Enterprises", features list, "Let's Talk" button, purple gradient orb decoration
- **Extract exact link destinations for all pricing CTAs from MCP**

### 7. Agentic Commerce Section
- Badge: "Agentic Commerce"
- Headline: "Get our *Checklist* for FREE (27 steps)" (*Checklist* in serif italic)
- Text about AI Shopping in eCommerce
- CTAs: "Get Checklist ↗" (purple) | "Book Call" (outline) — **extract actual link destinations from MCP**
- Document preview mockup on the right

### 8. FAQ Section
- Accordion items with + icon:
  1. "Is this just repackaged SEO?"
  2. "Can you guarantee we'll appear in ChatGPT?"
  3. "How long until results?"
  4. "What exactly is LLM optimization?"
  5. "Will this interfere with our regular SEO?"
  6. "How do AI platforms decide what sources to trust?"
- **Extract the actual FAQ answers from MCP** — do not use placeholder text

### 9. Contact Section
- Headline: "Let's *connect.*" (*connect.* in serif italic)
- Subtext: "Ready to take the next step? Let's schedule a call to discuss how we can help your business grow and succeed with AI."
- Form: First Name, Last Name, Email, Website, "Tell us about your business?" textarea
- Submit: "Get in Touch" — full-width purple button
- **Extract form action/submission endpoint from MCP if it exists**

### 10. Final CTA Section
- Abstract purple/blue background
- Badge: Green dot + "Accepting 3 new clients for Q4"
- Headline: "Do you want to *Beat Your Competitors?*" (serif italic)
- Subtext: "Every week you wait, your competitors build stronger AI authority that becomes exponentially harder to overcome."
- CTA: "Book a call" — **extract actual link from MCP**

### 11. Footer
- Left: "Copyright 2025 Akravo. All rights reserved."
- Right: `akravo.` logo
- **Extract any footer links from MCP**

---

## Technical Requirements

### SEO
- Semantic HTML (h1, h2, h3, section, nav, footer)
- Only ONE h1 per page
- Meta title: "Akravo - LLM Optimisation Agency"
- Meta description matching the current site — **extract from MCP**
- Open Graph + Twitter Card meta tags — **extract from MCP**
- JSON-LD structured data (Organization schema)
- Canonical URL: https://akravo.com
- **Extract any existing meta tags, robots.txt, sitemap from the Framer site via MCP**

### Performance
- `next/font` for Google Fonts (no external stylesheet)
- Lazy-load below-the-fold images
- `next/image` for all images
- Minimize "use client" — only where interactivity is needed

### Responsive Design
- Must match the Framer site's responsive behavior **exactly**
- Extract breakpoints from MCP
- Test that mobile, tablet, and desktop all match 1:1

### Animations
- Replicate EVERY animation from the Framer site exactly — scroll animations, hover effects, entrance animations, the logo marquee, FAQ accordion, everything
- Use Framer Motion
- Extract exact timing, easing, and trigger conditions from MCP

### Links & CTAs — CRITICAL
- **Every single link, button, and CTA must point to the exact same destination as on the Framer site**
- Extract all hrefs from MCP — Calendly links, external URLs, anchor links, mailto links, download links, form actions
- Do NOT use placeholder `#` links if the MCP provides real URLs
- If the MCP provides a Calendly or Cal.com URL for "Book a call", use that exact URL
- If there are any external integrations (analytics scripts, chat widgets, tracking pixels), note them in a comment but don't include third-party scripts

### File Structure
```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    [additional-page]/    # One folder per page discovered via MCP
      page.tsx
    api/
      contact/
        route.ts
  components/
    Navbar.tsx
    Hero.tsx
    LogoMarquee.tsx
    Services.tsx
    Founder.tsx
    Pricing.tsx
    AgenticCommerce.tsx
    FAQ.tsx
    ContactForm.tsx
    FinalCTA.tsx
    Footer.tsx
    Badge.tsx
    Button.tsx
    SectionWrapper.tsx
public/
  images/               # All images extracted from Framer
```

---

## FINAL REMINDER

**This is a 1:1 migration, not a redesign.** The output must be visually indistinguishable from the current Framer site. If something looks different, it's wrong. Use the MCP to extract exact values — especially all link targets and CTA destinations. Do not guess. Do not approximate. Do not "improve" the design. Match it exactly.

After building, run `npm run dev` and visually compare every section against the live site at akravo.com. Fix any discrepancies.
