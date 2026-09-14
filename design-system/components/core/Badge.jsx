import React from 'react';

const tones = {
  neutral: { background: 'var(--surface-sunken)', color: 'var(--text-muted)' },
  accent: { background: 'var(--accent-soft)', color: 'var(--accent-strong)' },
  ok: { background: 'var(--status-ok-bg)', color: 'var(--status-ok)' },
  warn: { background: 'var(--status-warn-bg)', color: 'var(--status-warn)' },
  risk: { background: 'var(--status-risk-bg)', color: 'var(--status-risk)' },
  info: { background: 'var(--status-info-bg)', color: 'var(--status-info)' }
};

export function Badge({ tone = 'neutral', dot = false, style, children, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        font: 'var(--text-micro)', fontFamily: 'var(--font-sans)',
        padding: '3px 8px', borderRadius: 'var(--radius-sm)',
        ...tones[tone], ...style
      }}
      {...rest}
    >
      {dot && <span style={{ width: 5, height: 5, borderRadius: 'var(--radius-pill)', background: 'currentColor' }} />}
      {children}
    </span>
  );
}
