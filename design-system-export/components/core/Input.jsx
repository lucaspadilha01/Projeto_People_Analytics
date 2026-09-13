import React from 'react';

export function Input({ label, hint, invalid = false, iconLeft, style, ...rest }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
      {label && <span style={{ font: 'var(--text-label)', fontFamily: 'var(--font-sans)', color: 'var(--text-body)' }}>{label}</span>}
      <span style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'var(--surface-card)', border: '1px solid ' + (invalid ? 'var(--status-risk)' : 'var(--border-field)'),
        borderRadius: 'var(--radius-md)', padding: '0 var(--pad-field-x)', transition: 'var(--transition-control)'
      }}>
        {iconLeft}
        <input
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            font: 'var(--text-body-md)', fontFamily: 'var(--font-sans)', color: 'var(--text-heading)',
            padding: 'var(--pad-field-y) 0', ...style
          }}
          {...rest}
        />
      </span>
      {hint && <span style={{ font: 'var(--text-caption)', fontFamily: 'var(--font-sans)', color: invalid ? 'var(--status-risk)' : 'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}
