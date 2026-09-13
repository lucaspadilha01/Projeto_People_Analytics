import React from 'react';

export function PageHeader({ title, subtitle, actions, style }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
      background: 'var(--surface-card)', border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)', padding: '12px 16px', boxShadow: 'var(--shadow-card)', ...style
    }}>
      <div style={{ minWidth: 0 }}>
        <h2 style={{ margin: 0, font: 'var(--text-h4)', fontFamily: 'var(--font-sans)', color: 'var(--text-heading)' }}>{title}</h2>
        {subtitle && <p style={{ margin: '2px 0 0', font: 'var(--text-caption)', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>{subtitle}</p>}
      </div>
      {actions && <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>{actions}</div>}
    </div>
  );
}
