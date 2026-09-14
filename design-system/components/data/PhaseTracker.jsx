import React from 'react';

export function PhaseTracker({ phases = [], style }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + phases.length + ', minmax(0,1fr))', gap: 8, ...style }}>
      {phases.map((p, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
          <span style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: p.done || p.active ? 'var(--text-body)' : 'var(--text-faint)', textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.label}</span>
          <span style={{ height: 5, borderRadius: 'var(--radius-pill)', background: p.done ? 'var(--accent)' : p.active ? 'var(--violet-300)' : 'var(--track)' }} />
        </div>
      ))}
    </div>
  );
}
