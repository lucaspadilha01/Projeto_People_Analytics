import * as React from 'react';

/**
 * The signature NexaFlow gauge — round-capped violet arc on a violet-100 track
 * with the percentage centred ("65% Complete", "73% Allocated").
 */
export interface DonutGaugeProps {
  value?: number;
  size?: number;
  thickness?: number;
  /** Big centre text; defaults to `{value}%`. */
  caption?: React.ReactNode;
  sublabel?: React.ReactNode;
  color?: string;
  track?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export function DonutGauge(props: DonutGaugeProps): JSX.Element;
