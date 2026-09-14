import React from 'react';

const LEVELS = ['var(--surface-sunken)', 'var(--violet-100)', 'var(--violet-300)', 'var(--accent)'];

export function ActivityHeatmap({ days = [], legend = true, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0, ...style }}>
      {legend && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 5, font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: 'var(--text-faint)' }}>
          <span>Less</span>
          {LEVELS.map((c, i) => <span key={i} style={{ width: 8, height: 8, borderRadius: 2, background: c }} />)}
          <span>More</span>
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0,1fr))', gap: 6 }}>
        {days.map((d, i) => <span key={'l' + i} style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: 'var(--text-faint)', textAlign: 'center' }}>{d.weekday}</span>)}
        {days.map((d, i) => {
          const lvl = d.level ?? 0;
          const strong = lvl >= 2;
          return (
            <span key={'d' + i} style={{
              aspectRatio: '1', borderRadius: 'var(--radius-md)', background: LEVELS[lvl],
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2
            }}>
              <span style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: strong ? '#fff' : 'var(--text-muted)' }}>{d.date}</span>
              <span style={{ display: 'flex', gap: 1.5 }}>
                {Array.from({ length: Math.min(3, d.dots ?? 0) }).map((_, j) => (
                  <span key={j} style={{ width: 2.5, height: 2.5, borderRadius: 'var(--radius-pill)', background: strong ? 'rgba(255,255,255,.85)' : 'var(--violet-300)' }} />
                ))}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
