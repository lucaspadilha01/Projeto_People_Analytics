# NexaFlow mobile app — UI kit

Recreation of the three iPhone screens documented on boards `nexaflow_018`, `_019`,
`_020`, `_022` and `_023`: Dashboard analytics, Budget overview, and Timeline progress.

- `MobileApp.jsx` — all three screens plus the shared `Phone` shell (280×600 frame,
  status bar, `MobileAppBar`, scrolling body, `BottomNav`).
- Tabs are live but only Dashboard / Budget / Timeline content exists in the source;
  the other rail destinations are not invented here.
- Charts, gauges and progress rows are the same published primitives as the web kit —
  the mobile screens differ only in column count and card padding (12px instead of 16px).
