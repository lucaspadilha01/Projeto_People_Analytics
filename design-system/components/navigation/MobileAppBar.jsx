import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Avatar } from '../core/Avatar.jsx';

export function MobileAppBar({ title = 'HR Analytics', user, onMenu, style }) {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px',
      background: 'var(--surface-card)', borderBottom: '1px solid var(--border-hairline)', ...style
    }}>
      <button onClick={onMenu} aria-label="Menu" style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 4, display: 'flex' }}>
        <Icon name="menu" size={18} color="var(--text-body)" />
      </button>
      <strong style={{ flex: 1, minWidth: 0, font: 'var(--text-h4)', fontFamily: 'var(--font-sans)', color: 'var(--text-heading)' }}>{title}</strong>
      <span style={{ width: 28, height: 28, borderRadius: 'var(--radius-md)', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="bell" size={14} color="#fff" />
      </span>
      {user && <Avatar {...user} size={28} />}
    </header>
  );
}
