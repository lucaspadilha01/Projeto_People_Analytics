import * as React from 'react';

/** Weekly activity heatmap from Calendar & Tasks: 7 rounded day tiles, 4 violet intensity levels, dot load indicators. */
export interface ActivityHeatmapProps {
  days?: Array<{ weekday: string; date: number | string; level?: 0 | 1 | 2 | 3; dots?: number }>;
  legend?: boolean;
  style?: React.CSSProperties;
}
export function ActivityHeatmap(props: ActivityHeatmapProps): JSX.Element;
