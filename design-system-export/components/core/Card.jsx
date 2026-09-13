import React from 'react';

export function Card({ title, meta, action, tone = 'plain', padding, style, children, ...rest }) {
  const tones = {
    plain: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-hairline)' },
    tint: { background: 'var(--surface-tint)', color: 'var(--text-body)', border: '1px solid transparent' },
    accent: { background: 'var(--surface-accent)', color: 'var(--surface-accent-ink)', border: '1px solid transparent' },
    sunken: { background: 'var(--surface-sunken)', color: 'var(--text-body)', border: '1px solid transparent' }
  };
  return (
    <section
      style={{
        borderRadius: 'var(--radius-lg)', padding: padding ?? 'var(--pad-card)',
        boxShadow: tone === 'plain' ? 'var(--shadow-card)' : 'none',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-6)',
        minWidth: 0, ...tones[tone], ...style
      }}
      {...rest}
    >
      {(title || action) && (
        <header style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
          <div style={{ minWidth: 0 }}>
            {title && <h3 style={{ margin: 0, font: 'var(--text-h4)', fontFamily: 'var(--font-sans)', color: tone === 'accent' ? 'inherit' : 'var(--text-heading)' }}>{title}</h3>}
            {meta && <p style={{ margin: '3px 0 0', font: 'var(--text-caption)', fontFamily: 'var(--font-sans)', color: tone === 'accent' ? 'rgba(255,255,255,.78)' : 'var(--text-muted)' }}>{meta}</p>}
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}
