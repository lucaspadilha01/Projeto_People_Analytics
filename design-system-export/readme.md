# HR Analytics Design System

**HR Analytics** is a data-analytics dashboard product. This system carries its brand identity —
the "HR / ANALYTICS" lockup with its three-column bar mark — on a violet visual foundation, and a
component library built for dense, chart-heavy analytics screens.

- **Brand:** HR Analytics. Identity supplied by the user as `uploads/logo_hr_analytics.svg` and
  recoloured from its original amber/orange gradients into this system's violet palette.
- **Surfaces:** a desktop/tablet web app (the "Dashboard"), and a companion mobile app. Both ship a
  light theme and a deep-indigo dark theme.
- **Visual system + screen patterns:** derived from the 32 uploaded case-study boards (see Sources).
  Those boards documented an architecture project-management dashboard; the *identity* has been
  replaced with HR Analytics, while the colour, type, layout, component and chart systems are kept.

> ⚠️ **The UI-kit screens still carry the source boards' domain content** — construction budgets in
> lakhs, Gantt stages like "GFC Drawings", architect work statistics. The visuals and components are
> right; the subject matter is not HR. Tell me to re-theme it and I'll swap the metrics for headcount,
> attrition, performance and compensation.

## Sources given to me

**Brand:** `uploads/logo_hr_analytics.svg` — the HR Analytics logo as vector (viewBox 500×320; two
horizontal rules, "HR", three rounded bars, letter-spaced "ANALYTICS"; amber→orange gradients). The
geometry is used verbatim, recoloured into this system's violet. Superseded `uploads/Imagem1.png`,
the earlier 164×109 raster.

**Visual system:** 32 exported case-study boards in `uploads/nexaflow_001.png … nexaflow_032.png`
(a Behance-style presentation of a project-management dashboard by Swathy Laxmi M, 2026). Every
colour, type, spacing, component and chart decision in this system was measured off these. Key boards:

| Board | Contents |
|---|---|
| 001, 028 | Cover — tablet dashboard on violet gradient |
| 002 | About / project meta, wordmark + mark |
| 003, 007 | Positioning, problem & solution cards |
| 004 | **Logo** — app icon and wordmark, with rationale |
| 005, 006 | Design process timeline, team photography |
| 009–013 | 4W+H framework, user research stats, persona, empathy map |
| 014, 019, 023, 024 | **Budget** screen, light and dark |
| 015 | **Typography & colour palette** (Inter + 5 hex swatches) |
| 016 | **Grid system** (1440 / 12 col / 60px margin; compact 4 col / 16px) |
| 017, 024 | Dark theme boards |
| 018 | UI design overview — tablet + phone dashboard |
| 020 | **Timeline** screen (Gantt) |
| 021, 022 | Calendar & tasks, cashflow, performance detail |
| 025, 026 | Brand collateral — billboard, signage, notebook |
| 027 | Closing board |
| 029–032 | **Unrelated** — thumbnails for other portfolio projects (SHAREHUB, Neoverse, an architectural portfolio). Ignored. |

⚠️ **No codebase, Figma file or font binaries were provided.** Everything here was measured off
flattened PNG boards, so numeric values are careful readings, not extracted source values. Component
inventory was derived from what the screens actually show. Anywhere the source is silent, this system
says so instead of guessing.

---

## CONTENT FUNDAMENTALS

**Voice.** Third-person-product, never first-person. The product name is the grammatical subject of
nearly every sentence: *"HR Analytics provides a centralized view of headcount, performance, and
cost."* Never "we"; never "I". The reader is addressed indirectly — "teams", "users", the named
stakeholder groups — rather than as "you".

**Sentence shape.** One long declarative sentence naming the capability, then a second clause naming
the outcome. It reads as calm capability statements, not marketing energy:

> *"HR Analytics centralizes people data by tracking headcount, attrition, performance, and
> compensation. It enables teams to monitor trends, identify risks, and make informed decisions."*

(Source phrasing, for the rhythm: *"Nexaflow centralizes project finances by tracking allocations,
expenses, cash flow, and vendor payments. It enables teams to monitor spending, identify budget
risks, and make informed financial decisions."*)

**Triads everywhere.** Lists come in threes: *clarity, collaboration, and control* · *Simple, Smart,
Productive* · *approvals, collaboration, and project tracking*. If you write a list for HR Analytics,
make it three items.

**The tagline pattern.** Clipped imperatives, then one violet payoff line:
**Plan. Track. Approve. Deliver.** *All in one flow.*

**Casing.** Sentence case for everything in the UI — headings, buttons, labels ("Pending Approvals",
"Import Data", "Review All", "Add Change Order"). The brand name is written **HR Analytics** in body
copy and product chrome. The only all-caps in the system is the lockup's own "ANALYTICS" line, which
is artwork, not text — never set it as live type, and never ALL-CAPS anything else in the product.

**Labels are nouns, actions are verbs.** Card titles: "Budget Overview", "Category Breakdown",
"Vendor Payments", "Architect's Work statistics". Buttons: "Import Data", "Review All",
"+ Add Change Order". Metric sub-labels stay lowercase and quiet: "100% of budget", "78% utilized",
"22% available", "2.1% savings", "3 drawings pending".

**Numbers carry the message.** Percentages and currency are the loudest type on screen; the words
around them are 11–12px. Currency is Indian lakh-notation with the rupee glyph — `₹85L`, `₹66.3L`,
`₹18.7L`, `₹32L`. Counts are zero-padded when they're the hero number: `03`, not `3`. Deltas are
always signed: `+5%`, `+12%`, `±2%`, `-3%`.

**Status language.** A fixed vocabulary: *Completed · On-track · Delayed · Pending · Under Budget ·
Items Awaiting · Uploading…*. Alerts state the fact then the cause: *"3-day delay detected /
Schematic Stage delayed due to client"*.

**Emoji.** Not used in the product. The only emoji in the source are four illustrative badges on the
empathy-map research board (Think / Feel / Does / Says) — a case-study device, never UI. **Do not use
emoji in HR Analytics interfaces.**

---

## VISUAL FOUNDATIONS

### Colour
One hue does all the work. The published palette is five swatches — `#7A60CA` (primary), `#9580D4`,
`#AF9FDF`, `#DFD9F2`, `#F1F1F1` — extended here into a full ramp (`--violet-25 … --violet-700`) plus
a neutral ramp. Semantic aliases (`--accent`, `--surface-card`, `--text-body`, `--border-hairline`)
are what you should actually write; raw ramp steps are for building new aliases.

Status colour is used sparingly and only for meaning: green `#2BA76A` (on-track, under budget), amber
`#E0812F` (delayed, pending payment), red `#DC5B54` (negative variance), blue for informational tags.
Charts are deliberately **violet-on-violet** — `--series-1…4` are four steps of the same hue. There is
no rainbow categorical palette anywhere in this system; do not invent one. The logo's three bars follow
the same rule — violet-500, violet-300, violet-400.

Dark theme (`[data-theme="dark"]`) remaps surfaces to deep indigo (`#0F0B26` app, `#171139` page,
`#1C1545` card) and keeps the violet accent unchanged. Text inks lift to lavender-whites.

### Typography
**Inter**, one family, four weights (400/500/600/700). Headings and all metrics are 600 with tight
tracking (`-0.015em`); body copy is 400. Three fixed metric sizes carry the dashboard: 40px (hero
count), 28px (gauge centre), 20px (KPI tile). Supporting labels sit at 12px and 11px — dense but never
below 11px. No serif, no mono, no display face.

### Spacing, grid, layout
1440px canvas, 12 columns, 60px margins, 24px gutters; compact breakpoint is 4 columns with 16px
margins. Inside the app: a fixed **148px left rail**, a 56px top bar, then a card mosaic on a 12px gap.
Cards use 16px padding (12px on mobile) and a 12px internal stack gap. Columns are *not* snapped to
equal fractions — the real screens use measured ratios like `1.15fr .72fr 1.35fr`.

### Corners, borders, shadows
Radii: 6px fields, 8px controls and inner tiles, 12px cards, 16–20px hero/collateral blocks, pill for
toggles and progress tracks. Borders are a single 1px hairline (`--border-hairline`, `#EAEAEC`) — never
a coloured left-border accent. Shadows are almost invisible: `--shadow-card` is a 1–3px near-black at
4–5% opacity. The one intentional shadow is `--shadow-accent`, a violet glow under primary buttons.
No glassmorphism, no blur, no inner shadows in the product UI. (The case-study boards use frosted
translucent panels as a presentation device — that is board styling, not app styling.)

### Backgrounds
The app body is `#F1F1F1`; cards are white. Backgrounds are flat — no textures, no patterns, no
hand-drawn illustration. **Gradients exist only in brand collateral**: the cover boards use a soft
violet-to-white vertical wash, and the grid diagram uses violet→transparent columns. Never gradient a
card, button or chart fill in the product.

### Accent card rule
Exactly **one** violet-filled card per screen carries the headline number (the "Total Project Budget"
hero on Budget). Everything else is white. Violet-50/100 tints are used freely for inner tiles,
tinted task rows, and KPI tiles.

### Imagery
Cool, daylit, realistic photography: architecture teams reviewing drawings in bright white studios;
product shots on violet grounds; cut-out business-portrait persona figures on violet cards. No filters,
no grain, no duotone. Photos are cropped to 12–16px radius rectangles. Charts and gauges — not
illustration — are the visual interest in the product itself.

### Motion
Restrained and functional. 80ms press feedback, 140ms hover/focus, 200ms toggles and panels, 600ms for
chart and gauge fills (the donut arc and bars animate in on load). Easing is a single
`cubic-bezier(.2,.7,.3,1)`. **No bounce, no spring, no parallax, no entrance animation on page load
beyond the chart fill.** Respect `prefers-reduced-motion` by dropping the chart fill to instant.

### States
- **Hover:** background deepens one ramp step (secondary buttons go to `--violet-25`; rail rows to
  `--violet-50`); primary buttons darken to `--accent-strong`. Never opacity-fade a control.
- **Press:** `scale(.985)` plus the darker background; no colour inversion.
- **Focus:** 3px violet ring at 22% (`--glow-focus`), never removed.
- **Active nav:** solid violet fill, white ink, and a small 4px trailing dot — the dot is a system
  signature, keep it.
- **Disabled:** 45% opacity, shadow removed.
- **Selected range / theme:** filled violet pill on a violet-100 track.

### Fixed elements & transparency
Rail and top bar are fixed; the card mosaic scrolls under them. Transparency is used in exactly two
places: white at 30–82% for text and tracks *inside* the accent violet card, and the 2px surface-
coloured ring separating overlapping avatars. Nothing else is translucent.

---

## ICONOGRAPHY

The screens use a **thin-stroke outline set at 1.5px, 24×24 geometry, round caps and joins** — visually
Lucide / Feather. No filled icons, no two-tone icons, no icon font, no emoji, no unicode glyphs as
icons. Glyph sizes in use: 14px (top bar, inside fields), 15–16px (rail, card headers, list rows),
18–20px (mobile tab bar, insight tiles).

⚠️ **Substitution flagged:** the source is flattened PNGs, so no icon SVGs could be copied out.
`components/core/Icon.jsx` ships a hand-transcribed **Lucide-geometry** subset covering exactly the
glyphs the screens use (`grid folder box calendar dollar check_square users settings logout search
message bell sun moon trend_up trend_down file download clock alert_circle info check_circle
chevron_right chevron_down plus target menu upload_cloud package`). If you have the original Figma
file, replace this with the real exported set — and tell me, I'll swap it.

Icon colour rules: `--text-muted` by default, `--accent` when the row is active or the tile is violet-
tinted, semantic ink inside status tiles, white on the accent card. Icons never carry colour for
decoration.

### Logo
The HR Analytics lockup: **"HR"** set semibold, **"ANALYTICS"** letter-spaced beneath it, a
three-column bar mark to the right, and a gradient rule above and below. The bars read as a rising
chart — the product's whole premise in one glyph.

**Use the `<Logo>` component.** It renders the vector **inline**, not through `<img>`, which matters:
an SVG loaded as an image runs in a restricted document that cannot fetch the page's webfonts, so an
`<img>`-mounted lockup silently falls back to Helvetica/Arial. Inline, the wordmark gets Inter and
picks up `--text-heading` / `--accent` from the theme. The component takes no `assetBase`.

| Variant | Use |
|---|---|
| `lockup` | Primary — "HR" in `--text-heading`, "ANALYTICS" in `--accent` |
| `reversed` | White + violet-100, for violet and dark-indigo grounds |
| `mono` | Single violet hue — one-colour print, low-contrast placements |
| `mark` / `mark-reversed` | Bars only — favicon, collapsed rail, app tile |

Standalone files for handoff (outside this system, or in plain HTML that can't mount React) live at
`assets/hr-analytics-logo.svg`, `-reversed.svg`, `-mono.svg`, `hr-analytics-mark.svg` and
`hr-analytics-mark-reversed.svg`. In those files the wordmark is live `<text>` in Inter — fine when the
SVG is **inlined** into a page that loads Inter, but expect a Helvetica/Arial fallback if you reference
one with `<img src>`. The bar marks are pure geometry and are identical either way.

Bars carry a **vertical** gradient — violet-300 at the top through violet-500 to violet-700 at the
bottom — replacing the source's yellow→orange→deep-orange ramp step for step. The rules run
violet-300 → violet-500 → violet-300 horizontally. Bar heights and positions are the source file's
(60 / 77 / 47 tall at x 270 / 330 / 390, all bottom-aligned to the "HR" baseline). Clear space equals
the height of the "HR" cap on all four sides.

**Minimum sizes — the one hard rule.** The letter-spaced "ANALYTICS" line is roughly 16% of the
lockup's height, so the lockup never goes below **56px** (that puts the sub-line at 9px). At 24px it
would render at 4px. Anywhere under 56px — compact chrome, favicons, a collapsed rail — use
`variant="mark"`, minimum **16px**.

**Never redraw it, never set it in live text, never recolour a single bar** — reference the SVG via
`<Logo>`.

The source gradients (`#E8E500 → #F9A800 → #E05512` for the bars, `#F3C300 → #EE9C00 → #F3C300` for
the rules) were mapped onto the violet ramp stop for stop, so the mark's internal contrast is unchanged.

#### Archived marks
`assets/logo-mark.png`, `logo-icon.png` and `logo-lockup-vertical.png` are the *previous* brand's
mark, extracted from the case-study boards. They are kept only as provenance for where the visual
system came from — **do not use them in HR Analytics work.**

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | The entry point consumers link — `@import` lines only |
| `tokens/` | `fonts.css` `colors.css` `typography.css` `spacing.css` `radius.css` `elevation.css` `motion.css` `dark.css` |
| `assets/` | **Brand:** `hr-analytics-logo.svg` `-reversed.svg` `-mono.svg` `hr-analytics-mark.svg` `hr-analytics-mark-reversed.svg` · **Imagery:** `img-team-collab.png` `img-signage.png` `img-notebook.png` · **Archived source marks:** `logo-mark.png` `logo-icon.png` `logo-lockup-vertical.png` |
| `guidelines/*.card.html` | 20 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `templates/dashboard/` | `Dashboard.dc.html` — the analytics dashboard as a reusable template |
| `components/` | React primitives, grouped by concern — see below |
| `ui_kits/nexaflow-web/` | Web app: Dashboard, Budget, Timeline (+ blank placeholders). **Source-domain content** — see the warning at the top |
| `ui_kits/nexaflow-mobile/` | Mobile app: three phone screens. Same caveat |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-Skills front matter for use outside this project |

### Components

**`components/brand/`** — `Logo`

**`components/core/`** — `Button` · `IconButton` · `Badge` · `Card` · `Input` · `SearchField` ·
`Avatar` · `AvatarGroup` · `Toggle` · `SegmentedToggle` · `Icon` (+ `ICON_NAMES`)

**`components/data/`** — `StatTile` · `ProgressBar` · `DonutGauge` · `BarChart` · `LineChart` ·
`ChartLegend` · `PhaseTracker` · `ActivityHeatmap` · `GanttChart` · `MiniStatCell` ·
`WorkStatusBars` · `BudgetSplitLegend`

**`components/navigation/`** — `SidebarNav` (+ `NEXAFLOW_NAV`) · `TopBar` · `PageHeader` ·
`RangeTabs` · `BottomNav` · `MobileAppBar`

**`components/feedback/`** — `AlertBanner` · `FileProgressRow` · `ApprovalRow` · `TaskRow` ·
`VendorPaymentCard` · `InsightTile`

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when + usage).

### Intentional additions

These have no standalone counterpart in the source but were needed to build the screens faithfully:

- **`Icon`** — the boards show glyphs but no icon component; a wrapper was required (see the
  substitution note above).
- **`Logo`** — renders the supplied HR Analytics vector inline, so the mark is never redrawn and the
  wordmark always gets Inter.
- **`PlaceholderScreen`** (UI kit only) — marks rail destinations the source never designed, so
  nobody mistakes an invention for the real thing.

### Known gaps

- **The UI kits and template still use the source boards' domain data** (construction budgets, Gantt
  drawing stages, architect work statistics). Identity is HR Analytics; content is not yet. This is
  the biggest open item.

- **Font binaries.** Inter is loaded from Google Fonts via `tokens/fonts.css`. If the project has
  licensed Inter files, drop them in `assets/fonts/` and I'll convert the `@import` to `@font-face`.
- **Undesigned screens.** Projects, Materials, Approvals, Team, Settings.
- **Undesigned states.** Empty states, loading skeletons, error states, modals/dialogs, toasts and
  form validation appear nowhere in the source. Nothing was invented for them.
- **The "Change Orders & Variations" and "Construction Fee details" panels** on the Budget screen are
  cropped in every board — headers only, contents unknown.
