import * as React from 'react';

/** Circular member photo; falls back to violet-tinted initials when no src. */
export interface AvatarProps {
  src?: string;
  name?: string;
  size?: number;
  /** 2px surface-coloured ring — used when avatars overlap. */
  ring?: boolean;
  style?: React.CSSProperties;
}
export function Avatar(props: AvatarProps): JSX.Element;

/** Overlapping -8px stack of team avatars, as shown left of the top-bar profile. */
export interface AvatarGroupProps {
  people?: AvatarProps[];
  size?: number;
  max?: number;
  style?: React.CSSProperties;
}
export function AvatarGroup(props: AvatarGroupProps): JSX.Element;
