import React from 'react';

export function SegmentedToggle({ options = [], value, onChange, style }) {
  return (
    <span style={{ display: 'inline-flex', background: 'var(--accent-soft)', borderRadius: 'var(--radius-pill)', padding: 3, gap: 2, ...style }}>
      {options.map(o => {
        const key = typeof o === 'string' ? o : o.value;
        const on = key === value;
        return (
          <button
            key={key}
            onClick={() => onChange && onChange(key)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, border: 'none', cursor: 'pointer',
              borderRadius: 'var(--radius-pill)', padding: '7px 16px',
              font: 'var(--text-label)', fontFamily: 'var(--font-sans)',
              background: on ? 'var(--accent-strong)' : 'transparent',
              color: on ? '#fff' : 'var(--accent-strong)',
              transition: 'var(--transition-control)'
            }}
          >
            {typeof o === 'string' ? o : <>{o.icon}{o.label}</>}
          </button>
        );
      })}
    </span>
  );
}
