import React from 'react';

export function WorkStatusBars({ total: totalProp = 60, done: doneProp = 0.45, inProgress: inProgressProp = 0.3, height: heightProp = 26, style }) {
  const total = Number(totalProp) || 60;
  const done = Number(doneProp) || 0;
  const inProgress = Number(inProgressProp) || 0;
  const height = Number(heightProp) || 26;
  const bars = Array.from({ length: total });
  const doneN = Math.round(total * done), progN = Math.round(total * inProgress);
  return (
    <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end', height, minWidth: 0, ...style }}>
      {bars.map((_, i) => (
        <span key={i} style={{
          flex: 1, height: '100%', borderRadius: 1,
          background: i < doneN ? 'var(--accent-strong)' : i < doneN + progN ? 'var(--violet-300)' : 'var(--violet-100)'
        }} />
      ))}
    </div>
  );
}
