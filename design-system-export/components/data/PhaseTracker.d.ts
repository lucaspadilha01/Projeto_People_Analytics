import * as React from 'react';

/** The Concept → Scheme → Design → GFC → Execution stage strip under the completion gauge. */
export interface PhaseTrackerProps {
  phases?: Array<{ label: string; done?: boolean; active?: boolean }>;
  style?: React.CSSProperties;
}
export function PhaseTracker(props: PhaseTrackerProps): JSX.Element;
