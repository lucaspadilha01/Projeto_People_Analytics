import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function StatTile({ label, value, delta, direction = 'up', style }) {
  const good = direction === 'up';
  return (
    <div style={{
      background: 'var(--accent-softer)', border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)', padding: '10px 12px',
      display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0, ...style
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <span style={{ font: 'var(--text-caption)', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>
        <Icon name={good ? 'trend_up' : 'trend_down'} size={14} color={good ? 'var(--status-ok)' : 'var(--status-risk)'} />
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
        <strong style={{ font: 'var(--text-metric-md)', fontFamily: 'var(--font-sans)', color: 'var(--text-accent)' }}>{value}</strong>
        {delta && <span style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: good ? 'var(--status-ok)' : 'var(--status-risk)' }}>{delta}</span>}
      </div>
    </div>
  );
}
