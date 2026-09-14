import React from 'react';

export function BarChart({ data = [], height: heightProp = 150, yTicks = [], stacked = false, barWidth: barWidthProp = 14, rotateLabels = false, style }) {
  const height = Number(heightProp) || 150;
  const barWidth = Number(barWidthProp) || 14;
  const max = Math.max(...data.flatMap(d => stacked ? [(d.values || []).reduce((a, b) => a + b, 0)] : (d.values || [d.value || 0])), 1);
  const series = ['var(--series-1)', 'var(--series-2)', 'var(--series-3)', 'var(--series-4)'];
  return (
    <div style={{ display: 'flex', gap: 8, minWidth: 0, ...style }}>
      {yTicks.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height, font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: 'var(--text-faint)', textAlign: 'right' }}>
          {yTicks.map(t => <span key={t}>{t}</span>)}
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ height, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 4, borderBottom: '1px solid var(--series-grid)', position: 'relative' }}>
          {yTicks.slice(1).map((t, i) => (
            <span key={i} style={{ position: 'absolute', left: 0, right: 0, top: (i * height / (yTicks.length - 1)) + 'px', borderTop: '1px dashed var(--series-grid)', opacity: .6 }} />
          ))}
          {data.map((d, i) => {
            const vals = d.values || [d.value || 0];
            return (
              <div key={i} style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 2, position: 'relative' }}>
                {stacked ? (
                  <span style={{ width: barWidth, display: 'flex', flexDirection: 'column-reverse', height: (vals.reduce((a, b) => a + b, 0) / max) * height, borderRadius: 'var(--radius-xs)', overflow: 'hidden' }}>
                    {vals.map((v, j) => <span key={j} style={{ height: (v / vals.reduce((a, b) => a + b, 0)) * 100 + '%', background: series[j % series.length] }} />)}
                  </span>
                ) : vals.map((v, j) => (
                  <span key={j} style={{ width: barWidth, height: Math.max(2, (v / max) * height), background: series[j % series.length], borderRadius: 'var(--radius-xs) var(--radius-xs) 0 0' }} />
                ))}
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 4, marginTop: 6 }}>
          {data.map((d, i) => (
            <span key={i} style={{
              flex: 1, textAlign: 'center', font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: 'var(--text-faint)',
              ...(rotateLabels ? { transform: 'rotate(-42deg)', transformOrigin: 'top center', whiteSpace: 'nowrap' } : null)
            }}>{d.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
