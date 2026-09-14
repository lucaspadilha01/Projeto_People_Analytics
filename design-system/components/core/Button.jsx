import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
  font: 'var(--text-button)', letterSpacing: 'var(--tracking-normal)',
  border: '1px solid transparent', borderRadius: 'var(--radius-md)',
  cursor: 'pointer', whiteSpace: 'nowrap', transition: 'var(--transition-control)',
  fontFamily: 'var(--font-sans)'
};

const sizes = {
  sm: { padding: '6px 12px', fontSize: 12, borderRadius: 'var(--radius-sm)' },
  md: { padding: '9px 16px', fontSize: 13 },
  lg: { padding: '12px 20px', fontSize: 14, borderRadius: 'var(--radius-lg)' }
};

const variants = {
  primary: { background: 'var(--accent)', color: 'var(--text-on-accent)', boxShadow: 'var(--shadow-accent)' },
  secondary: { background: 'var(--surface-card)', color: 'var(--text-body)', borderColor: 'var(--border-card)' },
  soft: { background: 'var(--accent-soft)', color: 'var(--accent-strong)' },
  ghost: { background: 'transparent', color: 'var(--text-body)' },
  danger: { background: 'var(--status-risk)', color: '#fff' }
};

export function Button({ variant = 'primary', size = 'md', pill = false, disabled = false, iconLeft, iconRight, style, children, ...rest }) {
  return (
    <button
      disabled={disabled}
      style={{
        ...base, ...sizes[size], ...variants[variant],
        ...(pill ? { borderRadius: 'var(--radius-pill)' } : null),
        ...(disabled ? { opacity: 0.45, cursor: 'not-allowed', boxShadow: 'none' } : null),
        ...style
      }}
      {...rest}
    >
      {iconLeft}{children}{iconRight}
    </button>
  );
}
