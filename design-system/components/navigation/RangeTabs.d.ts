/** The 1W / 1M / 6M / 1Y range switch in the corner of analytics cards. */
export interface RangeTabsProps {
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export function RangeTabs(props: RangeTabsProps): JSX.Element;
