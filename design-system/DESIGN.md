# HR Analytics Design System — Design Tokens & Architecture Specification (`DESIGN.md`)

> **Standard:** Google Labs / Stitch Design System Standard  
> **Product:** HR Analytics Dashboard & Mobile Companion  
> **Source of Truth:** Design Tokens, Foundations, Components & Visual Specs  
> **Theme Support:** Light Mode (`:root`) & Dark Indigo Mode (`[data-theme="dark"]`)  

---

## 1. Design Philosophy & Brand Foundation

HR Analytics is an enterprise-grade People Analytics & Workforce Intelligence platform. Its visual language conveys clarity, analytical precision, and executive calm.

- **Primary Hue:** Structured around a calibrated violet palette (`#7A60CA`), avoiding noisy multi-color palettes in favor of a monochromatic violet-on-violet hierarchy for dense data displays.
- **Brand Geometry:** Three-column rising bar mark representing analytical progress and workforce growth.
- **Typography:** Inter across all weights, ensuring razor-sharp tabular data and metric legibility.
- **Surface Elevation:** Hairline borders (`1px #EAEAEC`) and micro-shadows; zero glassmorphism or high-blur distractions.
- **Accent Card Rule:** Exactly **one** violet-accent hero card per screen to anchor visual hierarchy; all other cards remain crisp white / dark indigo.

---

## 2. Design Tokens: Color System

### 2.1 Brand Ramp (Violet)
| Token | Hex Value | Role / Application |
|---|---|---|
| `--violet-700` | `#5B43A8` | Deepest violet; pressed states, mono mark text, dark theme accents |
| `--violet-600` | `#6A4FD8` | Strong accent; hover states, dark mode surface accent |
| `--violet-500` | `#7A60CA` | **Core Brand Accent**; primary buttons, active indicators, chart series 1 |
| `--violet-400` | `#9580D4` | Medium violet; chart series 2, hero surface accent |
| `--violet-300` | `#AF9FDF` | Light-medium violet; chart series 3, active borders |
| `--violet-200` | `#CFC4EC` | Soft violet; chart series 4, subtle dividers |
| `--violet-100` | `#DFD9F2` | Subtle tint; track accents, soft button fills, badges |
| `--violet-50` | `#EFECF9` | Ultra-soft tint; surface tint, active table rows, stat backdrops |
| `--violet-25` | `#F6F4FC` | Hover tint for neutral cards & lists |

### 2.2 Neutrals (Light Surfaces & Typography)
| Token | Hex Value | Role |
|---|---|---|
| `--neutral-0` | `#FFFFFF` | Card surfaces, modal backgrounds, text on accent |
| `--neutral-25` | `#FAFAFB` | Inset backgrounds, table headers |
| `--neutral-50` | `#F1F1F1` | **App canvas background** (`--bg-app`) |
| `--neutral-100` | `#EAEAEC` | **Hairline borders** (`--border-hairline`), tracks |
| `--neutral-200` | `#DFE0E4` | Card borders, field outlines, chart grid lines |
| `--neutral-300` | `#C7C8CE` | Disabled borders, subtle iconography |
| `--neutral-400` | `#9A9BA4` | Faint text (`--text-faint`), placeholder copy |
| `--neutral-500` | `#71727C` | Muted text (`--text-muted`), secondary metadata |
| `--neutral-600` | `#4E4F58` | Subheadings, active neutral icons |
| `--neutral-700` | `#33343B` | Body copy (`--text-body`) |
| `--neutral-800` | `#1F2027` | High-contrast copy |
| `--neutral-900` | `#111218` | Primary headings (`--text-heading`), KPI numerals |

### 2.3 Dark Theme Ramp (Deep Indigo)
| Token | Hex Value | Role in `[data-theme="dark"]` |
|---|---|---|
| `--indigo-950` | `#0F0B26` | Dark App canvas background |
| `--indigo-900` | `#171139` | Dark Page background, sunken surfaces, rail |
| `--indigo-850` | `#1C1545` | Dark Card surface (`--surface-card`) |
| `--indigo-800` | `#241B54` | Dark Surface tint / softer accent |
| `--indigo-700` | `#2E2368` | Dark Card borders, soft accent buttons |
| `--indigo-600` | `#3A2D80` | Dark Accent tracks |

### 2.4 Semantic Status Colors
| Status | Ink Token | Ink Hex | BG Token | BG Hex |
|---|---|---|---|---|
| **Success (On-track / Under budget)** | `--status-ok` | `#2BA76A` | `--status-ok-bg` | `#E4F5EC` |
| **Warning (Pending / Delay)** | `--status-warn` | `#E0812F` | `--status-warn-bg` | `#FCEFE2` |
| **Critical (Risk / High Variance)** | `--status-risk` | `#DC5B54` | `--status-risk-bg` | `#FBE9E8` |
| **Information (Active / Blue tag)** | `--status-info` | `#4C7EE0` | `--status-info-bg` | `#E8EFFC` |

### 2.5 Violet-on-Violet Chart Series Tokens
All data visualizations follow a strict single-hue violet ramp rather than multi-color rainbows:
- `--series-1`: `var(--violet-500)` (`#7A60CA`)
- `--series-2`: `var(--violet-400)` (`#9580D4`)
- `--series-3`: `var(--violet-300)` (`#AF9FDF`)
- `--series-4`: `var(--violet-200)` (`#CFC4EC`)
- `--series-grid`: `var(--neutral-200)` (Dark mode: `#332877`)

---

## 3. Typography Scale & Specifications

- **Font Family:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`
- **Font Weight Tokens:**
  - Regular: `--fw-regular: 400`
  - Medium: `--fw-medium: 500`
  - Semibold: `--fw-semibold: 600`
  - Bold: `--fw-bold: 700`
- **Tracking Tokens:**
  - Tight (Headings & Numbers): `--tracking-tight: -0.015em`
  - Normal: `--tracking-normal: 0`
  - Wide: `--tracking-wide: 0.04em`
  - Caps/Artwork: `--tracking-caps: 0.08em`

### Type Scale Matrix
| Token | Weight / Size / Line-Height | Intended Usage |
|---|---|---|
| `--text-display` | `600 44px/1.12` | Hero splash & cover titles |
| `--text-h1` | `600 32px/1.20` | Top-level page titles |
| `--text-h2` | `600 24px/1.28` | Major section headers |
| `--text-h3` | `600 18px/1.35` | Card titles, modal headers |
| `--text-h4` | `600 15px/1.40` | Subsection titles, compact card headers |
| `--text-metric-xl` | `600 40px/1.05` | Hero KPI counts (e.g. `03`, `249`) |
| `--text-metric-lg` | `600 28px/1.10` | Donut gauge center metrics, secondary KPIs |
| `--text-metric-md` | `600 20px/1.15` | Stat tile values, table metric summaries |
| `--text-body-lg` | `400 16px/1.55` | Longform analytical summaries |
| `--text-body-md` | `400 14px/1.55` | Default body text |
| `--text-body-sm` | `400 13px/1.50` | Dense table rows, list items |
| `--text-caption` | `400 12px/1.45` | Chart axis labels, timestamps, metadata |
| `--text-micro` | `500 11px/1.35` | Badges, micro status tags, metric delta tags |
| `--text-label` | `500 13px/1.35` | Form labels, input headers |
| `--text-button` | `500 13px/1.00` | Button interactive labels |

---

## 4. Spacing, Grid & Layout Tokens

### 4.1 Spacing Scale
| Token | Value | Token | Value |
|---|---|---|---|
| `--space-1` | `2px` | `--space-7` | `16px` |
| `--space-2` | `4px` | `--space-8` | `20px` |
| `--space-3` | `6px` | `--space-9` | `24px` |
| `--space-4` | `8px` | `--space-10` | `32px` |
| `--space-5` | `10px` | `--space-11` | `40px` |
| `--space-6` | `12px` | `--space-12` | `60px` |

### 4.2 Application Layout Architecture
- **Desktop Grid:** Max width `1440px`, 12 columns, `60px` margins, `24px` gutters.
- **Compact Grid:** 4 columns, `16px` margins.
- **Fixed Left Rail:** `--rail-width: 148px`
- **Fixed Top Bar:** `--topbar-height: 56px`
- **Card Mosaic Gap:** `--gap-card: 12px`
- **Card Internal Padding:** `--pad-card: 16px` (Mobile: `12px`, Large: `20px`)
- **Interactive Minimum Tap:** `--tap-min: 44px`

---

## 5. Elevation, Shadows & Corner Radii

### 5.1 Corner Radii
| Token | Value | Usage |
|---|---|---|
| `--radius-xs` | `4px` | Sub-pixel chips, mini tags |
| `--radius-sm` | `6px` | Form inputs, search fields, inner sub-tiles |
| `--radius-md` | `8px` | Buttons, select menus, segmented toggles |
| `--radius-lg` | `12px` | Standard cards, dashboard containers |
| `--radius-xl` | `16px` | Modal dialogs, hero callouts |
| `--radius-2xl` | `20px` | Large presentation cards |
| `--radius-3xl` | `28px` | Specialty mobile cards |
| `--radius-pill` | `999px` | Badges, status pills, slider tracks |

### 5.2 Elevation & Shadows
- `--shadow-none`: `none`
- `--shadow-hairline`: `0 0 0 1px var(--border-card)`
- `--shadow-card`: `0 1px 2px rgba(17,18,24,.04), 0 1px 3px rgba(17,18,24,.05)` (Dark: `0 1px 2px rgba(0,0,0,.3)`)
- `--shadow-raised`: `0 2px 6px rgba(17,18,24,.05), 0 8px 20px rgba(17,18,24,.06)` (Dark: `0 8px 24px rgba(0,0,0,.35)`)
- `--shadow-overlay`: `0 12px 40px rgba(17,18,24,.12)` (Dark: `0 16px 48px rgba(0,0,0,.5)`)
- `--shadow-accent`: `0 6px 18px rgba(122,96,202,.28)` (Dark: `0 6px 18px rgba(106,79,216,.45)`)
- `--glow-focus`: `0 0 0 3px rgba(122,96,202,.22)` (Dark: `0 0 0 3px rgba(149,128,212,.3)`)

---

## 6. Motion & Animation Tokens

- **Durations:**
  - `--dur-instant: 80ms` (Press feedback)
  - `--dur-fast: 140ms` (Hover, focus transitions)
  - `--dur-base: 200ms` (Modals, drawers, accordion toggle)
  - `--dur-slow: 320ms` (Major view transitions)
  - `--dur-chart: 600ms` (Donut gauge reveal, bar chart fill on load)
- **Easings:**
  - `--ease-standard: cubic-bezier(.2, .7, .3, 1)`
  - `--ease-out: cubic-bezier(0, 0, .2, 1)`
  - `--ease-in-out: cubic-bezier(.4, 0, .2, 1)`
- **Interaction Micro-transitions:**
  - Press Scale: `--press-scale: 0.985`
  - Hover Lift: `--hover-lift: -1px`
  - `prefers-reduced-motion`: Durations drop to `0ms` instantly.

---

## 7. Component Library Inventory

The HR Analytics Design System ships with 30 production-ready canonical React components grouped across 5 modules:

1. **Brand (`components/brand/`):**
   - `<Logo variant="lockup|reversed|mono|mark|mark-reversed" height={58} />`
2. **Core (`components/core/`):**
   - `<Button variant="primary|secondary|soft|ghost|danger" size="sm|md|lg" pill disabled />`
   - `<IconButton label="Alerts" badge tone="neutral|tinted|accent" />`
   - `<Badge tone="neutral|accent|ok|warn|risk|info" dot>`
   - `<Card title="..." meta="..." action={...} tone="plain|tint|accent|sunken">`
   - `<Input label="..." placeholder="..." />`
   - `<SearchField placeholder="Search..." />`
   - `<Avatar name="Sarah Chen" src="..." size={28} ring />`
   - `<AvatarGroup people={[...]} max={4} />`
   - `<Toggle checked={true} onChange={...} label="..." />`
   - `<SegmentedToggle options={[...]} value="..." onChange={...} />`
   - `<Icon name="..." size={16} color="currentColor" strokeWidth={1.5} />`
3. **Data Display (`components/data/`):**
   - `<StatTile label="On schedule" value="92%" delta="+5%" direction="up|down" />`
   - `<ProgressBar label="Concept Design" value={100} />`
   - `<DonutGauge value={65} sublabel="Complete" size={148} thickness={14} />`
   - `<BarChart stacked height={118} barWidth={16} data={[...]} yTicks={[...]} />`
   - `<LineChart data={[...]} height={120} />`
   - `<ChartLegend items={[{label: 'Done', color: 'var(--series-2)'}, ...]} />`
   - `<PhaseTracker phases={[{label: 'Concept', done: true}, ...]} />`
   - `<ActivityHeatmap days={[{weekday: 'Mon', level: 3, dots: 2}, ...]} />`
   - `<GanttChart stages={[...]} />`
   - `<MiniStatCell label="..." value="..." />`
   - `<WorkStatusBars total={64} done={0.45} inProgress={0.3} />`
   - `<BudgetSplitLegend items={[...]} />`
4. **Feedback & Lists (`components/feedback/`):**
   - `<AlertBanner tone="info|warn|risk|ok" title="..." detail="..." />`
   - `<ApprovalRow icon="file" label="Design Files" count={1} onClick={...} />`
   - `<FileProgressRow heading="In Progress" name="Report.pdf" size="5.1Mb" percent={45} />`
   - `<InsightTile icon="trend_up" title="..." description="..." tone="neutral|accent" />`
   - `<TaskRow title="Review employee headcount" meta="09:00 AM" done={false} />`
   - `<VendorPaymentCard vendor="..." amount="..." status="..." />`
5. **Navigation (`components/navigation/`):**
   - `<SidebarNav active="dashboard" onSelect={...} brand={<Logo />} />`
   - `<TopBar user={{name: 'Lucas Padilha', role: 'HR Lead'}} team={[...]} />`
   - `<PageHeader title="Headcount & Turnover" subtitle="Overview" actions={<Button />} />`
   - `<RangeTabs value="1Y" onChange={...} options={['1M', '3M', '6M', '1Y', 'ALL']} />`
   - `<BottomNav items={[...]} active="dashboard" onSelect={...} />`
   - `<MobileAppBar title="HR Analytics" onBack={...} onSearch={...} />`

---

## 8. Linting & Design System Adherence

To maintain total fidelity to design tokens, the system integrates an AST lint configuration (`.oxlintrc.json`):
- **Raw Hex Colors Prohibited:** Enforces CSS variables `var(--violet-500)`, `var(--neutral-900)`, etc.
- **Raw Pixel Spacing Prohibited:** Enforces spacing tokens `var(--space-*)`, `var(--gap-card)`, `var(--pad-card)`.
- **Strict Component Imports:** Must import via root entrypoint `import { Button, Card } from 'design-system'`.
- **Props Validation:** Component props and valid union literals are strictly enforced at lint time.
