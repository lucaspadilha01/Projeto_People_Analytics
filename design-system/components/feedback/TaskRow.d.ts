import * as React from 'react';

/** Upcoming task / schedule entry — violet title on a tinted block with a time + category meta line. */
export interface TaskRowProps {
  title: React.ReactNode;
  meta?: React.ReactNode;
  tone?: 'tint' | 'sunken';
  /** Trailing violet status dot. */
  dot?: boolean;
  badge?: React.ReactNode;
  style?: React.CSSProperties;
}
export function TaskRow(props: TaskRowProps): JSX.Element;
