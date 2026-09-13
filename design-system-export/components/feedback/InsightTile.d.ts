import * as React from 'react';

/**
 * Small stacked insight card on the Budget screen — tinted glyph tile, label,
 * metric, and a quiet footnote ("Under Budget ₹1.8L / 2.1% savings").
 */
export interface InsightTileProps {
  icon?: string;
  tone?: 'ok' | 'warn' | 'risk' | 'accent';
  label: React.ReactNode;
  value: React.ReactNode;
  note?: React.ReactNode;
  style?: React.CSSProperties;
}
export function InsightTile(props: InsightTileProps): JSX.Element;
