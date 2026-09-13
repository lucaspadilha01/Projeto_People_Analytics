One-line: every dashboard panel is a `Card`; reach for `tone="accent"` at most once per screen (the "Total Project Budget" hero).

```jsx
<Card title="Calendar & Tasks" action={<span>November 2025</span>}>…</Card>
<Card tone="accent" title="Total Project Budget">…</Card>
```
