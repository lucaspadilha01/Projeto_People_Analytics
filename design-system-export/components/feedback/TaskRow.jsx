import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function TaskRow({ title, meta, tone = 'tint', dot = false, badge, style }) {
  const bg = tone === 'tint' ? 'var(--surface-tint)' : 'var(--surface-sunken)';
  return (
    <div style={{ background: bg, borderRadius: 'var(--radius-md)', padding: '9px 11px', display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0, ...style }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ flex: 1, minWidth: 0, font: 'var(--text-body-sm)', fontFamily: 'var(--font-sans)', color: 'var(--text-accent)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span>
        {dot && <span style={{ width: 5, height: 5, borderRadius: 'var(--radius-pill)', background: 'var(--accent)', flex: '0 0 auto' }} />}
      </span>
      {(meta || badge) && (
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--text-muted)' }}>
          <Icon name="clock" size={11} color="var(--text-faint)" />
          {meta}{badge}
        </span>
      )}
    </div>
  );
}
