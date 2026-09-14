import React from 'react';
import { Icon } from './Icon.jsx';

export function SearchField({ placeholder = 'Search…', width = '100%', style, ...rest }) {
  return (
    <span style={{
      display: 'flex', alignItems: 'center', gap: 8, width,
      background: 'var(--surface-card)', border: '1px solid var(--border-field)',
      borderRadius: 'var(--radius-md)', padding: '0 12px', ...style
    }}>
      <Icon name="search" size={14} color="var(--text-faint)" />
      <input
        placeholder={placeholder}
        style={{
          flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
          font: 'var(--text-body-sm)', fontFamily: 'var(--font-sans)', color: 'var(--text-heading)', padding: '8px 0'
        }}
        {...rest}
      />
    </span>
  );
}
