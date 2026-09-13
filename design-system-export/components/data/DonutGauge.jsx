import React from 'react';

export function DonutGauge({ value: valueProp = 0, size: sizeProp = 132, thickness: thicknessProp = 13, caption, sublabel, color = 'var(--accent)', track = 'var(--track-accent)', style, children }) {
  const value = Number(valueProp) || 0;
  const size = Number(sizeProp) || 132;
  const thickness = Number(thicknessProp) || 13;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: size, height: size, flex: '0 0 auto', ...style }}>
      <svg width={size} height={size} style={{ display: 'block', transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={thickness} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={thickness}
          strokeLinecap="round" strokeDasharray={c}
          strokeDashoffset={c * (1 - Math.max(0, Math.min(100, value)) / 100)}
          style={{ transition: 'stroke-dashoffset var(--dur-chart) var(--ease-standard)' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        {children || (
          <>
            <strong style={{ font: 'var(--text-metric-lg)', fontFamily: 'var(--font-sans)', color: 'var(--text-heading)' }}>{caption ?? value + '%'}</strong>
            {sublabel && <span style={{ font: 'var(--text-caption)', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>{sublabel}</span>}
          </>
        )}
      </div>
    </div>
  );
}
