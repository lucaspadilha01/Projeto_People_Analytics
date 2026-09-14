import * as React from 'react';

/**
 * Timeline Gantt chart: 150px task column with status glyph, month grid, 14px
 * rounded bars, optional in-bar percentage, and a milestone dot rail.
 * @startingPoint section="Data" subtitle="Project Gantt with milestone rail" viewport="700x330"
 */
export interface GanttRow {
  label: string;
  /** Start offset in month units. */
  start: number;
  /** Duration in month units. */
  span: number;
  status?: 'completed' | 'ontrack' | 'delayed' | 'pending';
  percent?: number;
}
export interface GanttChartProps {
  months?: string[];
  rows?: GanttRow[];
  milestones?: Array<{ at: number; label?: string; done?: boolean }>;
  style?: React.CSSProperties;
}
export function GanttChart(props: GanttChartProps): JSX.Element;
