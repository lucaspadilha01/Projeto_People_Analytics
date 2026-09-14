import * as React from 'react';

/**
 * The dashboard's only container. White + 12px radius + hairline + near-invisible
 * shadow; `accent` is the one violet-filled card allowed per screen.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  /** Sub-line under the title, 12px muted. */
  meta?: React.ReactNode;
  /** Right-aligned header slot — a date stamp, tab pills or an icon button. */
  action?: React.ReactNode;
  tone?: 'plain' | 'tint' | 'accent' | 'sunken';
  padding?: string | number;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
