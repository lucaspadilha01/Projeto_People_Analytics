import * as React from 'react';

/** Upload tile: violet document glyph, filename + weight, then an Uploading… progress row. */
export interface FileProgressRowProps {
  heading?: React.ReactNode;
  name: React.ReactNode;
  size?: React.ReactNode;
  percent?: number;
  statusLabel?: React.ReactNode;
  style?: React.CSSProperties;
}
export function FileProgressRow(props: FileProgressRowProps): JSX.Element;
