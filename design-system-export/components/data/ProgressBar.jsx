import React from 'react';

export function ProgressBar({ value: valueProp = 0, label, percentLabel, height: heightProp = 5, tone = 'accent', style }) {
  const value = Number(valueProp) || 0;
  const height = Number(heightProp) || 5;
  const tones = { accent: 'var(--accent)', soft: 'var(--violet-300)', ok: 'var(--status-ok)', warn: 'var(--status-warn)' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0, ...style }}>
      {(label || percentLabel !== undefined) && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ font: 'var(--text-body-sm)', fontFamily: 'var(--font-sans)', color: 'var(--text-body)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
          <span style={{ font: 'var(--text-caption)', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)', flex: '0 0 auto' }}>{percentLabel ?? value + '%'}</span>
        </div>
      )}
      <span style={{ display: 'block', height, borderRadius: 'var(--radius-pill)', background: 'var(--track)', overflow: 'hidden' }}>
        <span style={{ display: 'block', width: Math.max(0, Math.min(100, value)) + '%', height: '100%', borderRadius: 'var(--radius-pill)', background: tones[tone], transition: 'width var(--dur-chart) var(--ease-standard)' }} />
      </span>
    </div>
  );
}
