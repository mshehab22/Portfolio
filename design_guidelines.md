# Portfolio Website Design Guidelines

## Design Approach
**Selected Approach:** Hybrid - Drawing from GitHub's clean documentation style + Vercel's minimal portfolio aesthetic + Linear's typography precision.

**Core Principle:** Professional minimalism that lets work speak for itself. No distractions, maximum clarity, credible presentation.

---

## Typography System

**Font Stack:**
- Primary: Inter (Google Fonts) - headings and UI
- Secondary: JetBrains Mono (Google Fonts) - code/tech tags only

**Hierarchy:**
- Page titles: text-4xl md:text-5xl, font-bold
- Section headings: text-2xl md:text-3xl, font-semibold
- Card titles: text-xl, font-semibold
- Body text: text-base, regular weight
- Small text/metadata: text-sm, text-gray-600

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 8, 12, 16, 24 consistently (e.g., p-8, gap-12, mt-16)

**Container Strategy:**
- Max width: max-w-6xl
- Horizontal padding: px-6 md:px-8
- Vertical section spacing: py-16 md:py-24

**Grid Layouts:**
- Project cards: grid-cols-1 md:grid-cols-2 gap-6
- Single column for project detail content

---

## Core Components

### Navigation
- Fixed top navbar with logo/name left, nav links right
- Links: Projects, About, Resume, Contact
- Height: h-16, border-b with subtle divider
- Mobile: Hamburger menu

### Hero Section (Home)
- Clean centered layout with generous whitespace
- Name: Large, bold typography
- Headline: Medium weight, muted color
- Short intro paragraph: max-w-2xl centered
- CTA button to Projects page
- **No hero image** - pure typography focus

### Project Cards
- White background (or subtle gray in light mode)
- Border with hover elevation (shadow-sm to shadow-md transition)
- Padding: p-6
- Structure: Title → Category badge → Status → Short purpose → Tech tags
- "View Details" link bottom-right

### Category Sections
- Games and Software as separate sections on Projects page
- Section headers with category name
- Subtle divider between sections

### Tag/Badge Components
- Tech tags: Rounded pill shape (rounded-full), small padding (px-3 py-1), monospace font
- Category badge: Subtle background, uppercase text-xs tracking-wide
- Status indicator: Small colored dot + text

### Project Detail Page
- Breadcrumb navigation at top
- Large project title
- Metadata row: Category, Status, Tech stack
- Systems section with bullet points as clean list
- Links section with GitHub/Demo/Video buttons as primary CTAs

### Footer
- Simple centered layout
- Social links (GitHub, LinkedIn) as icon links
- Copyright/name text
- Max height: py-12

---

## Images

**No images required** for this minimal portfolio shell. The design relies on typography, whitespace, and clean component structure. When user adds project screenshots later, they will display in:
- Project detail pages: Full-width content images
- Optional: Small thumbnail previews on project cards (if added)

---

## Interaction & Animation

**Minimal Approach:**
- Card hover: Subtle shadow elevation (200ms ease transition)
- Button hover: Slight opacity change (hover:opacity-90)
- Link hover: Underline decoration
- **No page transitions, no scroll animations, no flashy effects**

---

## Color Strategy Notes

Layouts use neutral grays for structure. Actual color values will be determined separately. Focus on:
- Clear hierarchy through size/weight, not color
- Subtle borders and dividers
- Clean contrast for readability

---

## Responsive Behavior

**Mobile-First Adjustments:**
- Single column layouts on mobile
- Larger touch targets (min h-12 for buttons)
- Reduced vertical spacing (py-12 vs py-24)
- Simplified navigation

**Key Breakpoints:** md: 768px, lg: 1024px

---

## Accessibility

- Semantic HTML throughout
- Clear focus states on interactive elements
- Sufficient color contrast
- Keyboard navigation support
- ARIA labels where needed