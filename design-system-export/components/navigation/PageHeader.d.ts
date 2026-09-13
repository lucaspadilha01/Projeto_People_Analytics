import * as React from 'react';

/** The "Residential Villa – Phase 2 / Nexaflow Dashboard" bar with + Add Project and Import Data. */
export interface PageHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}
export function PageHeader(props: PageHeaderProps): JSX.Element;
