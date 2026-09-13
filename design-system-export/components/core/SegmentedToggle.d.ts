import * as React from 'react';

/** Two-up pill switch — the Dark / Light selector on the case-study boards. */
export interface SegmentedToggleProps {
  options?: Array<string | { value: string; label: React.ReactNode; icon?: React.ReactNode }>;
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export function SegmentedToggle(props: SegmentedToggleProps): JSX.Element;
