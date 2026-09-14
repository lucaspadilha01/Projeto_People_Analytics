import * as React from 'react';

/** Monthly Cashflow chart: dashed horizontal gridlines, 2px violet polylines, 3.5px dot markers. */
export interface LineSeries { name?: string; points: number[] }
export interface LineChartProps {
  series?: LineSeries[];
  labels?: string[];
  yTicks?: string[];
  height?: number;
  style?: React.CSSProperties;
}
export function LineChart(props: LineChartProps): JSX.Element;
