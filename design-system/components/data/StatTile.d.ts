import * as React from 'react';

/**
 * KPI tile from the Project Performance Analytics header — violet-50 fill,
 * 12px label, trend glyph top-right, violet metric with a coloured delta.
 */
export interface StatTileProps {
  label: React.ReactNode;
  value: React.ReactNode;
  /** Signed change string, e.g. "+5%" or "±2%". */
  delta?: React.ReactNode;
  /** Drives glyph + delta colour: up = green, down = red. */
  direction?: 'up' | 'down';
  style?: React.CSSProperties;
}
export function StatTile(props: StatTileProps): JSX.Element;
