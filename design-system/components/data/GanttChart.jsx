import React from 'react';
import { Icon } from '../core/Icon.jsx';

const STATUS = {
  completed: 'var(--accent)',
  ontrack: 'var(--violet-300)',
  delayed: 'var(--status-warn-bg)',
  pending: 'var(--track)'
};

export function GanttChart({ months = [], rows = [], milestones = [], style }) {
  const n = Math.max(1, months.length);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0, ...style }}>
      <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 10 }}>
        <span />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + n + ', minmax(0,1fr))' }}>
          {months.map(m => <span key={m} style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: 'var(--text-faint)', textAlign: 'center' }}>{m}</span>)}
        </div>
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 10, alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, font: 'var(--text-body-sm)', fontFamily: 'var(--font-sans)', color: 'var(--text-body)', minWidth: 0 }}>
            <Icon name={r.status === 'pending' ? 'clock' : 'check_circle'} size={13}
              color={r.status === 'delayed' ? 'var(--status-warn)' : r.status === 'pending' ? 'var(--text-faint)' : 'var(--accent)'} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.label}</span>
          </span>
          <div style={{ position: 'relative', height: 18 }}>
            <span style={{
              position: 'absolute', top: 2, height: 14, borderRadius: 'var(--radius-xs)',
              left: (r.start / n) * 100 + '%', width: (r.span / n) * 100 + '%',
              background: STATUS[r.status] || STATUS.ontrack,
              display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 5
            }}>
              {r.percent !== undefined && (
                <span style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: r.status === 'delayed' ? 'var(--status-warn)' : r.status === 'completed' ? '#fff' : 'var(--text-body)' }}>{r.percent}%</span>
              )}
            </span>
          </div>
        </div>
      ))}
      {milestones.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 10, alignItems: 'center', borderTop: '1px solid var(--border-hairline)', paddingTop: 10, marginTop: 2 }}>
          <span style={{ font: 'var(--text-body-sm)', fontFamily: 'var(--font-sans)', color: 'var(--text-body)' }}>Milestones</span>
          <div style={{ position: 'relative', height: 10 }}>
            {milestones.map((m, i) => (
              <span key={i} title={m.label} style={{
                position: 'absolute', top: 2, left: (m.at / n) * 100 + '%', width: 6, height: 6,
                borderRadius: 'var(--radius-pill)', background: m.done ? 'var(--accent)' : 'var(--violet-200)'
              }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
