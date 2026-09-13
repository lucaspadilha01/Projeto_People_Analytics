import * as React from 'react';

/** The full-width search bar that spans the NexaFlow top bar. */
export interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  width?: string | number;
}
export function SearchField(props: SearchFieldProps): JSX.Element;
