One-line: the NexaFlow action button — filled violet `primary` for the single committing action in a view, `secondary` (white + hairline) for the action beside it.

```jsx
<Button>Import Data</Button>
<Button variant="secondary">+ Add Project</Button>
<Button variant="soft" size="sm">Review All</Button>
```

Variants: `primary` (violet fill + violet glow shadow), `secondary` (white, 1px `--border-card`), `soft` (violet-100 fill, violet-600 ink — used for in-card actions), `ghost`, `danger`. Sizes `sm | md | lg`; `pill` for filter-style actions. Never place two `primary` buttons side by side.
