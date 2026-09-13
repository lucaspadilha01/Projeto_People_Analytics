import * as React from 'react';

/**
 * Primary action control. Filled violet for the one committing action per view
 * ("Import Data"), outlined secondary for the neighbouring action ("+ Add Project").
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'soft' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Fully rounded — used for filter/tag style actions. */
  pill?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
