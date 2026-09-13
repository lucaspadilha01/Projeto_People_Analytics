import React from 'react';

export function Toggle({ checked = false, onChange, label, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer', ...style }}>
      <span
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: 38, height: 22, borderRadius: 'var(--radius-pill)', padding: 3, flex: '0 0 auto',
          background: checked ? 'var(--accent)' : 'var(--track)',
          transition: 'background var(--dur-base) var(--ease-standard)'
        }}
      >
        <span style={{
          display: 'block', width: 16, height: 16, borderRadius: 'var(--radius-pill)', background: '#fff',
          transform: 'translateX(' + (checked ? 16 : 0) + 'px)',
          transition: 'transform var(--dur-base) var(--ease-standard)',
          boxShadow: '0 1px 2px rgba(0,0,0,.2)'
        }} />
      </span>
      {label && <span style={{ font: 'var(--text-body-sm)', fontFamily: 'var(--font-sans)', color: 'var(--text-body)' }}>{label}</span>}
    </label>
  );
}
