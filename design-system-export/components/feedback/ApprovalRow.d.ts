import * as React from 'react';

/** Pending Approvals queue row — glyph, label, right-aligned count. */
export interface ApprovalRowProps {
  icon?: string;
  label: React.ReactNode;
  count?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function ApprovalRow(props: ApprovalRowProps): JSX.Element;
