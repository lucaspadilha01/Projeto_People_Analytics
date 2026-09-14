import React from 'react';

export function Avatar({ src, name = '', size: sizeProp = 28, ring = false, style }) {
  const size = Number(sizeProp) || 28;
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span
      title={name}
      style={{
        width: size, height: size, borderRadius: 'var(--radius-pill)', flex: '0 0 auto',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
        background: 'var(--accent-soft)', color: 'var(--accent-strong)',
        font: 'var(--text-micro)', fontFamily: 'var(--font-sans)',
        boxShadow: ring ? '0 0 0 2px var(--surface-card)' : 'none', ...style
      }}
    >
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </span>
  );
}

export function AvatarGroup({ people = [], size: sizeProp = 28, max = 4, style }) {
  const size = Number(sizeProp) || 28;
  const shown = people.slice(0, max);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', ...style }}>
      {shown.map((p, i) => (
        <Avatar key={i} {...p} size={size} ring style={{ marginLeft: i === 0 ? 0 : -8 }} />
      ))}
      {people.length > max && (
        <span style={{ marginLeft: -8, width: size, height: size, borderRadius: 'var(--radius-pill)', background: 'var(--surface-sunken)', color: 'var(--text-muted)', font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 2px var(--surface-card)' }}>
          +{people.length - max}
        </span>
      )}
    </span>
  );
}
