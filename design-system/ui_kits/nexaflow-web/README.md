# NexaFlow web app — UI kit

Click-through recreation of the NexaFlow desktop/tablet web app as documented in the
supplied case-study boards (`uploads/nexaflow_001, _008, _014, _017–_024, _027`).

## Screens
| File | Screen | Source board |
|---|---|---|
| `DashboardScreen.jsx` | Dashboard — completion gauge, pending approvals, performance analytics, work statistics, project timeline, calendar & tasks | 001, 008, 018, 021 |
| `BudgetScreen.jsx` | Budget — overview donut, accent budget hero, category breakdown, cashflow, vendor payments | 014, 019, 023, 024 |
| `TimelineScreen.jsx` | Timeline — Gantt chart, progress overview, upcoming tasks | 020 |
| `PlaceholderScreen.jsx` | Projects / Materials / Approvals / Team / Settings | **not documented in the source** — intentionally blank |

## Interaction
- Rail switches screens; `Logout` returns to Dashboard.
- Sun/moon button in the top bar flips `data-theme` between light and the deep-indigo dark theme (boards 017, 024).
- `Review All` zeroes the Pending Approvals counter; range tabs on the analytics card are live.

## Notes
Every screen composes the published primitives — no component is re-implemented here.
Layout column ratios were measured off the boards; they are not a 12-column snap.
