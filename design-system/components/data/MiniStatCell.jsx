import React from 'react';

const tones = {
  ok: { background: 'var(--status-ok-bg)', color: 'var(--status-ok)' },
  accent: { background: 'var(--accent-softer)', color: 'var(--accent-strong)' },
  warn: { background: 'var(--status-warn-bg)', color: 'var(--status-warn)' },
  neutral: { background: 'var(--surface-sunken)', color: 'var(--text-heading)' }
};

export function MiniStatCell({ label, value, tone = 'neutral', style }) {
  return (
    <div style={{
      border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)',
      padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0,
      background: tones[tone].background, ...style
    }}>
      <span style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>{label}</span>
      <strong style={{ font: 'var(--text-metric-md)', fontFamily: 'var(--font-sans)', color: tones[tone].color }}>{value}</strong>
    </div>
  );
}
