/** 38×22 pill switch used for Settings preferences. */
export interface ToggleProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Toggle(props: ToggleProps): JSX.Element;
