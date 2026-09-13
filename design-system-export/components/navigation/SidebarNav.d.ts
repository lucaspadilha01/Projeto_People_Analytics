import * as React from 'react';

/**
 * The 148px NexaFlow rail. Active item is a solid violet rounded row with a
 * 4px trailing dot; everything else is 13px body text with a muted glyph.
 * @startingPoint section="Navigation" subtitle="148px product rail with active state" viewport="700x400"
 */
export interface SidebarItem { id: string; label: string; icon: string }
export interface SidebarNavProps {
  /** Defaults to NEXAFLOW_NAV — the product's real nine-item order. */
  items?: SidebarItem[];
  active?: string;
  onSelect?: (id: string) => void;
  /** Logo lockup slot at the top of the rail. */
  brand?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
}
export function SidebarNav(props: SidebarNavProps): JSX.Element;
export const NEXAFLOW_NAV: SidebarItem[];
