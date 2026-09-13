import * as React from 'react';

/**
 * Line-icon wrapper. NexaFlow's screens use a Lucide-style 1.5px stroke set;
 * this ships the subset the product actually uses so kits have no CDN dependency.
 * Intentional addition — the source boards show glyphs but no icon component.
 */
export interface IconProps {
  name: 'grid' | 'folder' | 'box' | 'calendar' | 'dollar' | 'check_square' | 'users' | 'settings' | 'logout' | 'search' | 'message' | 'bell' | 'sun' | 'moon' | 'trend_up' | 'trend_down' | 'file' | 'download' | 'clock' | 'alert_circle' | 'info' | 'check_circle' | 'chevron_right' | 'chevron_down' | 'plus' | 'target' | 'menu' | 'upload_cloud' | 'package';
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
export const ICON_NAMES: string[];
