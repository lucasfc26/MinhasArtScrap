---
name: Artisanal Archive
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#4f4444'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#817474'
  outline-variant: '#d2c3c3'
  surface-tint: '#6f5959'
  primary: '#6f5959'
  on-primary: '#ffffff'
  primary-container: '#f4d7d7'
  on-primary-container: '#725c5c'
  inverse-primary: '#dcc0c0'
  secondary: '#536255'
  on-secondary: '#ffffff'
  secondary-container: '#d4e4d3'
  on-secondary-container: '#576659'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffda6d'
  on-tertiary-container: '#775e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f9dcdc'
  primary-fixed-dim: '#dcc0c0'
  on-primary-fixed: '#271718'
  on-primary-fixed-variant: '#564242'
  secondary-fixed: '#d7e7d6'
  secondary-fixed-dim: '#bbcbbb'
  on-secondary-fixed: '#111e14'
  on-secondary-fixed-variant: '#3c4a3e'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is crafted for a high-end scrapbook store management experience, blending the tactile warmth of physical crafting with the precision of modern digital tools. The aesthetic is rooted in **Modern Minimalism** with a **Tactile** twist, evoking the feeling of premium stationery and organized creativity.

The target audience consists of boutique owners and creative professionals who value aesthetics as much as utility. The UI should feel like a clean, sun-drenched studio: spacious, calm, and inspiring. We achieve this through generous whitespace, a sophisticated "paper-like" layering system, and subtle gold accents that signify quality and curation.

## Colors
The palette is built on a foundation of "warm neutrals" to prevent the interface from feeling cold or overly clinical.

- **Primary (Pastel Pink):** Used for primary actions and gentle brand moments. It represents the "soft" side of creativity.
- **Secondary (Sage Green):** Applied to success states, stock indicators, and growth-related metrics. It provides a natural, grounded contrast.
- **Accent (Gold):** Reserved for high-end highlights, premium membership badges, or "Featured" items. Use sparingly to maintain its value.
- **Neutral (Cream & White):** The "Paper" of the application. We use a mix of pure white for active cards and a warm cream (#FAF9F6) for the background to reduce eye strain and add a vintage feel.

## Typography
This design system employs a sophisticated pairing of an elegant transitional serif for storytelling and a low-contrast geometric sans-serif for functional data.

- **Headlines:** Playfair Display provides an editorial, "scrapbook title" feel. It should be used for page headers, card titles, and promotional banners.
- **Body & UI:** DM Sans is chosen for its exceptional legibility and modern, understated character. It ensures that complex inventory lists and management tables remain readable.
- **Labels:** Use uppercase with slight letter spacing for categories and table headers to create a rhythmic, organized structure.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous margins to reinforce the feeling of "luxury and air."

- **Desktop:** 12-column grid with a 1280px max-width. Gutters are wide (24px) to prevent the UI from feeling cluttered.
- **Mobile:** 4-column grid with 16px side margins.
- **Spacing Rhythm:** Based on an 8px base unit. We prioritize vertical "stack" spacing (48px+) between major sections to allow the eye to rest, mimicking the layout of a physical scrapbook page.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows**. We avoid heavy dropshadows in favor of soft, diffused blurs that suggest a light paper overlapping another.

- **Level 0 (Background):** The Cream (#FAF9F6) base layer.
- **Level 1 (Cards/Surface):** Pure White (#FFFFFF) with a very soft, large-radius shadow (0px 4px 20px rgba(0,0,0,0.04)). This is the primary container for content.
- **Level 2 (Modals/Overlays):** Elevated with a more pronounced shadow and a subtle 1px border in a slightly darker cream to define the edges against the background.
- **Gold Highlights:** Used as a "0.5 depth" stroke (1px) around specific active elements to draw the eye without adding physical weight.

## Shapes
The shape language is distinctly friendly and approachable. We use **Rounded** (Level 2) as the default for most components.

- **Standard Components:** Buttons, Input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Main content areas and large product cards use 1rem (16px) or 1.5rem (24px) to emphasize the soft, organic nature of the brand.
- **Pills:** Used exclusively for status badges and tags to provide a visual distinction from functional buttons.

## Components

### Buttons
- **Primary:** Background in Pastel Pink, text in Dark Grey. No bold borders; use a soft shadow on hover.
- **Secondary:** Transparent background with a 1px Sage Green border.
- **Ghost/Tertiary:** Text only, using the Accent Gold for high-importance links.

### Inputs & Tables
- **Inputs:** Soft cream background with a 1px "Bone" border. On focus, the border transitions to Pastel Pink with a soft glow.
- **Tables:** Minimalist. No vertical borders. Horizontal dividers are very faint (1px light grey/cream). The header row uses the uppercase Label-MD typography.

### Cards
- White background, 16px border radius. 
- Use a "Gold Accent" top-border (2px) for "Premium" or "Featured" inventory items.

### Navigation (Sidebar & Navbar)
- **Sidebar:** Clean white surface, fixed to the left. Active states are indicated by a soft Sage Green vertical pill behind the icon/text.
- **Navbar:** Transparent or semi-transparent with a backdrop blur, keeping the focus on the page title in Playfair Display.

### Feedback (Alerts & Skeletons)
- **Alerts:** Use the Sage Green (Success) and a soft Muted Rose (Error). Backgrounds should be highly desaturated versions of these colors.
- **Skeletons:** A shimmering gradient moving between Light Cream and White, maintaining the soft aesthetic even during load states.