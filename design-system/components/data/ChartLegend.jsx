import React from 'react';

export function ChartLegend({ items = [], align = 'center', style }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: align, ...style }}>
      {items.map((it, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: 'var(--text-caption)', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>
          <span style={{ width: 8, height: 8, borderRadius: 'var(--radius-pill)', background: it.color || 'var(--series-1)' }} />
          {it.label}
        </span>
      ))}
    </div>
  );
}
