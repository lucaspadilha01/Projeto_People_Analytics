import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function ApprovalRow({ icon = 'file', label, count, onClick, style }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 9, width: '100%', textAlign: 'left',
      background: 'var(--surface-card)', border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)', padding: '9px 11px', cursor: 'pointer',
      transition: 'var(--transition-control)', ...style
    }}>
      <Icon name={icon} size={15} color="var(--text-muted)" />
      <span style={{ flex: 1, minWidth: 0, font: 'var(--text-body-sm)', fontFamily: 'var(--font-sans)', color: 'var(--text-body)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
      <span style={{ font: 'var(--text-label)', fontFamily: 'var(--font-sans)', color: 'var(--text-heading)' }}>{count}</span>
    </button>
  );
}
