import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function InsightTile({ icon = 'trend_down', tone = 'ok', label, value, note, style }) {
  const ink = tone === 'ok' ? 'var(--status-ok)' : tone === 'warn' ? 'var(--status-warn)' : tone === 'risk' ? 'var(--status-risk)' : 'var(--accent)';
  const bg = tone === 'ok' ? 'var(--status-ok-bg)' : tone === 'warn' ? 'var(--status-warn-bg)' : tone === 'risk' ? 'var(--status-risk-bg)' : 'var(--accent-softer)';
  return (
    <div style={{
      background: 'var(--surface-card)', border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)', padding: 'var(--pad-card)', boxShadow: 'var(--shadow-card)',
      display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0, ...style
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
        <span style={{ width: 32, height: 32, borderRadius: 'var(--radius-icon-tile)', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
          <Icon name={icon} size={15} color={ink} />
        </span>
        <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <span style={{ font: 'var(--text-caption)', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>{label}</span>
          <strong style={{ font: 'var(--text-metric-md)', fontFamily: 'var(--font-sans)', color: 'var(--text-heading)' }}>{value}</strong>
        </span>
      </div>
      {note && <span style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--text-muted)' }}>{note}</span>}
    </div>
  );
}
