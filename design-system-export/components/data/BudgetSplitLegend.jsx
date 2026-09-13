import React from 'react';

export function BudgetSplitLegend({ items = [], style }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px', ...style }}>
      {items.map((it, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, minWidth: 0 }}>
          <span style={{ width: 8, height: 8, borderRadius: 'var(--radius-pill)', background: it.color || 'var(--series-1)', marginTop: 4, flex: '0 0 auto' }} />
          <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span style={{ font: 'var(--text-body-sm)', fontFamily: 'var(--font-sans)', color: 'var(--text-body)' }}>{it.label}</span>
            <span style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>{it.percent}%</span>
          </span>
        </span>
      ))}
    </div>
  );
}
