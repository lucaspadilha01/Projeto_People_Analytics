import React from 'react';

export function RangeTabs({ options = ['1W', '1M', '6M', '1Y'], value, onChange, style }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2, background: 'var(--accent-softer)', borderRadius: 'var(--radius-sm)', padding: 2, ...style }}>
      {options.map(o => {
        const on = o === value;
        return (
          <button key={o} onClick={() => onChange && onChange(o)} style={{
            border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-xs)', padding: '3px 7px',
            font: 'var(--text-micro)', fontFamily: 'var(--font-sans)',
            background: on ? 'var(--accent)' : 'transparent',
            color: on ? '#fff' : 'var(--text-muted)', transition: 'var(--transition-control)'
          }}>{o}</button>
        );
      })}
    </span>
  );
}
