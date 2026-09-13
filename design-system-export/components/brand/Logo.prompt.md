One-line: the HR Analytics lockup — "HR" over letter-spaced "ANALYTICS" between two gradient rules, with the three-bar chart mark to the right.

```jsx
<Logo height={58} />                      {/* rail, headers */}
<Logo variant="reversed" height={58} />   {/* on violet or dark indigo */}
<Logo variant="mark" height={20} />       {/* bars only — anywhere under 56px */}
```

**No `assetBase` any more** — the component renders the vector inline, so it needs no file path and
picks up Inter and `--text-heading` / `--accent` from the page. Width is derived from `height`.

**Sizing is the one hard rule:** the lockup never goes below **56px** tall — "ANALYTICS" is ~16% of
the lockup height, so 56px puts it at 9px and 24px would put it at 4px. Under 56px, switch to
`variant="mark"` (16px floor).

The bars carry a vertical **violet-300 → violet-500 → violet-700** gradient and the rules a horizontal
violet-300 → violet-500 → violet-300 — the same violet-on-violet rule as every chart in the system.
Never recolour a single bar, never add a fourth, never re-typeset the wordmark by hand.
