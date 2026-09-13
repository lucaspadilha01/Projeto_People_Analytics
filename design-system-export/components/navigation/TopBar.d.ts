import * as React from 'react';

/** Product top bar: full-width search, three quiet icon buttons, presence stack, then the signed-in user block. */
export interface TopBarProps {
  user?: { name: string; role?: string; src?: string };
  team?: Array<{ name?: string; src?: string }>;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
  style?: React.CSSProperties;
}
export function TopBar(props: TopBarProps): JSX.Element;
