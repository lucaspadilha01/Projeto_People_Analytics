import * as React from 'react';

/** The 2×2 Completed / Active / Delayed / Pending counter grid on the Timeline screen. */
export interface MiniStatCellProps {
  label: React.ReactNode;
  value: React.ReactNode;
  tone?: 'ok' | 'accent' | 'warn' | 'neutral';
  style?: React.CSSProperties;
}
export function MiniStatCell(props: MiniStatCellProps): JSX.Element;
