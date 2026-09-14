import React from 'react';

export function IconButton({ label, size: sizeProp = 34, tone = 'quiet', badge = false, style, children, ...rest }) {
  const size = Number(sizeProp) || 34;
  const tones = {
    quiet: { background: 'transparent', color: 'var(--text-muted)' },
    tinted: { background: 'var(--accent-softer)', color: 'var(--accent)' },
    accent: { background: 'var(--accent)', color: 'var(--text-on-accent)' }
  };
  return (
    <button
      aria-label={label}
      style={{
        position: 'relative', width: size, height: size, display: 'inline-flex',
        alignItems: 'center', justifyContent: 'center', border: 'none',
        borderRadius: 'var(--radius-md)', cursor: 'pointer',
        transition: 'var(--transition-control)', ...tones[tone], ...style
      }}
      {...rest}
    >
      {children}
      {badge && (
        <span style={{ position: 'absolute', top: 6, right: 6, width: 6, height: 6, borderRadius: 'var(--radius-pill)', background: 'var(--status-risk)' }} />
      )}
    </button>
  );
}
