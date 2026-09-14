/** Mobile tab bar — icon-only, 44px targets, active glyph in violet. */
export interface BottomNavProps {
  items?: Array<{ id: string; label: string; icon: string }>;
  active?: string;
  onSelect?: (id: string) => void;
  style?: React.CSSProperties;
}
export function BottomNav(props: BottomNavProps): JSX.Element;
