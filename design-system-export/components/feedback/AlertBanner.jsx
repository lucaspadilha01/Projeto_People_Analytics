import React from 'react';
import { Icon } from '../core/Icon.jsx';

const tones = {
  info: { bg: 'var(--accent-softer)', ink: 'var(--accent-strong)', icon: 'info' },
  warn: { bg: 'var(--status-warn-bg)', ink: 'var(--status-warn)', icon: 'alert_circle' },
  risk: { bg: 'var(--status-risk-bg)', ink: 'var(--status-risk)', icon: 'alert_circle' },
  ok: { bg: 'var(--status-ok-bg)', ink: 'var(--status-ok)', icon: 'check_circle' }
};

export function AlertBanner({ tone = 'info', title, detail, style }) {
  const t = tones[tone];
  return (
    <div style={{ display: 'flex', gap: 9, background: t.bg, borderRadius: 'var(--radius-md)', padding: '10px 12px', minWidth: 0, ...style }}>
      <Icon name={t.icon} size={15} color={t.ink} style={{ marginTop: 1 }} />
      <div style={{ minWidth: 0 }}>
        <strong style={{ display: 'block', font: 'var(--text-label)', fontFamily: 'var(--font-sans)', color: t.ink }}>{title}</strong>
        {detail && <span style={{ display: 'block', font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--text-muted)', marginTop: 2 }}>{detail}</span>}
      </div>
    </div>
  );
}
