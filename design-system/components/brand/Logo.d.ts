import * as React from 'react';

/**
 * HR Analytics lockup. Renders the supplied vector logo **inline** (not through
 * \`<img>\`) so the wordmark gets Inter and the mark scales without limit — an SVG
 * loaded as an image cannot fetch the page's webfonts. Geometry is the source file
 * verbatim; only the palette is this system's.
 *
 * - \`lockup\` — "HR" in \`--text-heading\`, "ANALYTICS" in \`--accent\`, violet-gradient
 *   bars and rules. The default.
 * - \`reversed\` — white and violet-100, for violet or dark-indigo grounds.
 * - \`mono\` — single violet hue, for one-colour print or low-contrast placements.
 * - \`mark\` / \`mark-reversed\` — the three bars only: favicons, collapsed rail, app tiles.
 *
 * Standalone files live in /assets for handoff; inside this system always use the
 * component. Width is derived from \`height\` — the lockup is 500:320, the mark 180:89.
 */
export interface LogoProps {
  variant?: 'lockup' | 'reversed' | 'mono' | 'mark' | 'mark-reversed';
  /**
   * Rendered height in px. **Lockup minimum 56px** — "ANALYTICS" sits at ~16% of the
   * lockup height, so smaller drops it below 9px. Use \`variant="mark"\`
   * (minimum 16px) for compact chrome instead.
   */
  height?: number;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
