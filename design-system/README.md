# HR Analytics Design System

A modern, highly-polished design system and React component library tailored for dense, analytics-heavy People Analytics & Workforce Management dashboards and mobile companions.

Built on a crisp violet design foundation with strict **violet-on-violet** data visualization hierarchy, hairline surfaces, micro-elevation, and first-class light/dark indigo theming.

---

## 📁 Architecture & Folder Structure

```
design-system/
├── DESIGN.md                 # Source of Truth: Tokens, foundations, Stitch/Google Labs specs
├── README.md                 # Design system guide & developer documentation
├── SKILL.md                  # Agent skill configuration & integration metadata
├── styles.css                # Central CSS entrypoint (imports all token files)
├── index.js                  # Main ES/CommonJS export of all React components
├── index.d.ts                # Main TypeScript declarations index
├── .oxlintrc.json            # Design system adherence & linting rules
├── _ds_manifest.json         # Manifest metadata & component registry
├── _ds_bundle.js             # Standalone runtime bundle for browser execution
├── tokens/                   # Core CSS design tokens
│   ├── colors.css            # Brand ramp, neutrals, status & semantic aliases
│   ├── dark.css              # Deep indigo dark theme mapping
│   ├── elevation.css         # Shadows, glows & focus rings
│   ├── fonts.css             # Inter typography font definitions
│   ├── motion.css            # Durations, easings & transitions
│   ├── radius.css            # Corner radii scale
│   ├── spacing.css           # Spacing scale & 12-col grid metrics
│   └── typography.css        # Font scale, line heights & tracking
├── assets/                   # Brand vector assets and photography
│   ├── hr-analytics-logo.svg # Canonical recolored vector logo
│   ├── hr-analytics-*.svg    # Reversed, mono, and mark variations
│   ├── img-*.png             # Studio & team photography
│   └── archived/             # Historical provenance marks
├── components/               # 30 Production React Components (.jsx, .d.ts, .prompt.md)
│   ├── brand/                # Logo
│   ├── core/                 # Avatar, Badge, Button, Card, Icon, IconButton, Input, Search, Toggles
│   ├── data/                 # Gauges, Bar/Line charts, Heatmap, Gantt, Stat tiles, Trackers
│   ├── feedback/             # Alerts, Approvals, File uploads, Insights, Tasks, Payment cards
│   └── navigation/           # SidebarNav, TopBar, PageHeader, RangeTabs, BottomNav, MobileAppBar
├── ui_kits/                  # Full application screen assemblies
│   ├── nexaflow-web/         # Complete desktop dashboard, budget & timeline views
│   └── nexaflow-mobile/      # Companion mobile app screens
├── templates/                # Declarative dashboard templates
│   └── dashboard/            # Dashboard.dc.html, ds-base.js, support.js
└── reference/                # Standalone Visual Reference Hub
    ├── index.html            # Interactive Visual Showcase (open directly in browser)
    ├── guidelines/           # 21 Visual specimen cards (colors, type, grid, spacing, etc.)
    ├── components/           # Component specimen cards (core, data, feedback, navigation)
    └── apps/                 # Standalone web app, mobile app, and template demonstrations
```

---

## 🚀 Getting Started

### 1. Linking Design Tokens & Styles

Include `styles.css` in your application root or HTML head:

```html
<link rel="stylesheet" href="./design-system/styles.css">
```

Or import directly in your CSS / SCSS:

```css
@import './design-system/styles.css';
```

### 2. Importing React Components

Import components cleanly from the design system root:

```jsx
import {
  Button,
  Card,
  DonutGauge,
  StatTile,
  SidebarNav,
  TopBar,
  Icon
} from './design-system';

export function AnalyticsOverview() {
  return (
    <Card title="Headcount Overview" meta="Active Workforce">
      <StatTile label="Total Employees" value="249" delta="+4.2%" />
      <DonutGauge value={88} sublabel="Retention Rate" size={140} thickness={12} />
      <Button variant="primary" iconLeft={<Icon name="plus" size={14} />}>
        New Analysis
      </Button>
    </Card>
  );
}
```

### 3. Enabling Dark Theme

Toggle the `data-theme="dark"` attribute on the `<html>` or `<body>` element:

```html
<html data-theme="dark">
  <!-- The dark indigo palette is automatically applied across all tokens -->
</html>
```

---

## 🎨 Design Tokens Summary

For complete specifications, see [DESIGN.md](file:///c:/Users/lucas/OneDrive/%C3%81rea%20de%20Trabalho/Analise_dados_google_MD/Projeto_People_Analytics/design-system/DESIGN.md).

- **Brand Core:** `--violet-500` (`#7A60CA`), `--accent`, `--accent-strong` (`#6A4FD8`)
- **Neutrals:** Light background `--neutral-50` (`#F1F1F1`), Card surface `--neutral-0` (`#FFFFFF`), Hairline `--neutral-100` (`#EAEAEC`)
- **Dark Indigo:** Background `--indigo-950` (`#0F0B26`), Card surface `--indigo-850` (`#1C1545`)
- **Typography:** `Inter` (Weights: 400, 500, 600, 700; Metric sizes: 40px, 28px, 20px)
- **Grid:** 1440px / 12-columns, 148px fixed left rail, 56px top bar, 12px card mosaic gap.
- **Data Visualizations:** Violet-on-violet hierarchy (`--series-1` through `--series-4`), no rainbow clutter.

---

## 🔍 Visual Reference Hub

To inspect and test all components, guidelines, and screens directly in your browser without any build step:

Open `design-system/reference/index.html` in your browser.

- **21 Guidelines Cards:** Colors, Typography, Grid, Motion, Radii, Logo sizing, Spacing anatomy.
- **5 Component Specimen Cards:** Interactive live React demos of all 30 controls.
- **3 Interactive Applications:** Desktop Web App, Mobile Companion App, and Dashboard Template.

---

## 🛡️ Linting & Adherence

A dedicated lint configuration is provided in `design-system/.oxlintrc.json` (and mirrored at `.oxlintrc.json` in the project root). It validates:
- Disallowing raw hex colors (must use tokens like `var(--violet-500)`).
- Disallowing raw pixel values in components.
- Enforcing imports strictly via `index.js`.
- Strict validation of component prop types.
