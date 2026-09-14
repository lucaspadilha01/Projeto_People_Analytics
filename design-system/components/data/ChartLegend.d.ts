import * as React from 'react';

/** Dot + 12px caption legend sitting under every chart, centred by default. */
export interface ChartLegendProps {
  items?: Array<{ label: React.ReactNode; color?: string }>;
  align?: 'flex-start' | 'center' | 'flex-end';
  style?: React.CSSProperties;
}
export function ChartLegend(props: ChartLegendProps): JSX.Element;
