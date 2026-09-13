import * as React from 'react';

/** Vendor Payments list item on the Budget screen: name + scope, Pending badge, Paid/Pending split, amber due line. */
export interface VendorPaymentCardProps {
  vendor: React.ReactNode;
  scope?: React.ReactNode;
  paid?: React.ReactNode;
  pending?: React.ReactNode;
  /** e.g. "Due: Dec 5, 2024" — rendered in amber. */
  due?: React.ReactNode;
  status?: React.ReactNode;
  style?: React.CSSProperties;
}
export function VendorPaymentCard(props: VendorPaymentCardProps): JSX.Element;
