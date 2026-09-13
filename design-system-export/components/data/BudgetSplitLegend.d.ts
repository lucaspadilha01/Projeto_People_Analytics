import * as React from 'react';

/** Two-column dot legend under the Budget Overview donut (Civil / MEP / Interiors / Contingency). */
export interface BudgetSplitLegendProps {
  items?: Array<{ label: React.ReactNode; percent: number | string; color?: string }>;
  style?: React.CSSProperties;
}
export function BudgetSplitLegend(props: BudgetSplitLegendProps): JSX.Element;
