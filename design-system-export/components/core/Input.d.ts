import * as React from 'react';

/** Single-line text field: white, 1px --border-field, 8px radius, 13px label above. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  invalid?: boolean;
  iconLeft?: React.ReactNode;
}
export function Input(props: InputProps): JSX.Element;
