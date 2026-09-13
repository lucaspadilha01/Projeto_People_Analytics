import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { ProgressBar } from '../data/ProgressBar.jsx';

export function FileProgressRow({ heading, name, size, percent: percentProp = 0, statusLabel = 'Uploading…', style }) {
  const percent = Number(percentProp) || 0;
  return (
    <div style={{
      border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)',
      padding: 'var(--pad-card)', display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0,
      background: 'var(--surface-card)', ...style
    }}>
      {heading && <span style={{ font: 'var(--text-h4)', fontFamily: 'var(--font-sans)', color: 'var(--text-heading)' }}>{heading}</span>}
      <span style={{ display: 'flex', alignItems: 'center', gap: 9, minWidth: 0 }}>
        <span style={{ width: 28, height: 32, borderRadius: 'var(--radius-xs)', background: 'var(--violet-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
          <Icon name="file" size={15} color="#fff" />
        </span>
        <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <span style={{ font: 'var(--text-body-sm)', fontFamily: 'var(--font-sans)', color: 'var(--text-heading)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</span>
          <span style={{ font: 'var(--text-caption)', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>{size}</span>
        </span>
      </span>
      <ProgressBar value={percent} label={statusLabel} />
    </div>
  );
}
