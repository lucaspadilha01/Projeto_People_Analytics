import * as React from 'react';

/** Mobile header: hamburger, product name, violet notification tile, avatar. */
export interface MobileAppBarProps {
  title?: string;
  user?: { name?: string; src?: string };
  onMenu?: () => void;
  style?: React.CSSProperties;
}
export function MobileAppBar(props: MobileAppBarProps): JSX.Element;
