import * as React from 'react';

/** In-card notice — the "3-day delay detected / Schematic Stage delayed due to client" block. */
export interface AlertBannerProps {
  tone?: 'info' | 'warn' | 'risk' | 'ok';
  title: React.ReactNode;
  detail?: React.ReactNode;
  style?: React.CSSProperties;
}
export function AlertBanner(props: AlertBannerProps): JSX.Element;
