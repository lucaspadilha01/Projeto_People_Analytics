import * as React from 'react';

/** Violet column chart — grouped (Category Breakdown) or stacked (Project Performance). */
export interface BarDatum { label: string; value?: number; values?: number[] }
export interface BarChartProps {
  data?: BarDatum[];
  height?: number;
  /** Axis labels rendered top-to-bottom, e.g. ['₹32L','₹24L','₹16L','₹8L','₹0L']. */
  yTicks?: string[];
  stacked?: boolean;
  barWidth?: number;
  /** -42° x-axis labels, as on Category Breakdown. */
  rotateLabels?: boolean;
  style?: React.CSSProperties;
}
export function BarChart(props: BarChartProps): JSX.Element;
