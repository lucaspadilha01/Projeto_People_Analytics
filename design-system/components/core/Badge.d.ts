import * as React from 'react';

/** Small status pill — vendor payment state, task category, milestone state. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'accent' | 'ok' | 'warn' | 'risk' | 'info';
  /** Leading 5px dot in the current colour. */
  dot?: boolean;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
