/** The dense hatched bar field in "Architect's Work statistics" — Total / Done / In progress. */
export interface WorkStatusBarsProps {
  /** Number of 1px-gap ticks (60 in the source screens). */
  total?: number;
  /** Fraction rendered in violet-600. */
  done?: number;
  /** Fraction rendered in violet-300, after the done run. */
  inProgress?: number;
  height?: number;
  style?: React.CSSProperties;
}
export function WorkStatusBars(props: WorkStatusBarsProps): JSX.Element;
