import * as React from 'react';

/** Label + right-aligned percentage over a 5px violet track — the Project Timeline / Progress Overview row. */
export interface ProgressBarProps {
  value?: number;
  label?: React.ReactNode;
  /** Override the right-hand readout (defaults to `{value}%`). */
  percentLabel?: React.ReactNode;
  height?: number;
  tone?: 'accent' | 'soft' | 'ok' | 'warn';
  style?: React.CSSProperties;
}
export function ProgressBar(props: ProgressBarProps): JSX.Element;
