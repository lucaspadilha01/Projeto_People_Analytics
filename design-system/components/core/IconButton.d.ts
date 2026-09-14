import * as React from 'react';

/** Square 34px icon affordance used in the top bar (chat, notifications, theme). */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name — required, the button has no text. */
  label: string;
  size?: number;
  tone?: 'quiet' | 'tinted' | 'accent';
  /** Red 6px unread dot in the top-right corner. */
  badge?: boolean;
  children?: React.ReactNode;
}
export function IconButton(props: IconButtonProps): JSX.Element;
