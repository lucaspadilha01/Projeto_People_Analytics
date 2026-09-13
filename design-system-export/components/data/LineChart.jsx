import React from 'react';

export function LineChart({ series = [], labels = [], yTicks = [], height: heightProp = 150, style }) {
  const height = Number(heightProp) || 150;
  const all = series.flatMap(s => s.points);
  const max = Math.max(...all, 1), min = 0;
  const w = 100, colors = ['var(--series-1)', 'var(--series-3)'];
  const x = i => (i / Math.max(1, labels.length - 1)) * w;
  const y = v => height - ((v - min) / (max - min)) * height;
  return (
    <div style={{ display: 'flex', gap: 8, minWidth: 0, ...style }}>
      {yTicks.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height, font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: 'var(--text-faint)', textAlign: 'right' }}>
          {yTicks.map(t => <span key={t}>{t}</span>)}
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <svg viewBox={'0 0 ' + w + ' ' + height} preserveAspectRatio="none" style={{ display: 'block', width: '100%', height, overflow: 'visible' }}>
          {yTicks.map((t, i) => (
            <line key={i} x1="0" x2={w} y1={i * height / (yTicks.length - 1)} y2={i * height / (yTicks.length - 1)}
              stroke="var(--series-grid)" strokeWidth="1" strokeDasharray="2 3" vectorEffect="non-scaling-stroke" />
          ))}
          {series.map((s, si) => (
            <g key={si}>
              <polyline points={s.points.map((p, i) => x(i) + ',' + y(p)).join(' ')}
                fill="none" stroke={colors[si % colors.length]} strokeWidth="2"
                strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              {s.points.map((p, i) => (
                <circle key={i} cx={x(i)} cy={y(p)} r="3.5" fill={colors[si % colors.length]} vectorEffect="non-scaling-stroke" />
              ))}
            </g>
          ))}
        </svg>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
          {labels.map(l => <span key={l} style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: 'var(--text-faint)' }}>{l}</span>)}
        </div>
      </div>
    </div>
  );
}
