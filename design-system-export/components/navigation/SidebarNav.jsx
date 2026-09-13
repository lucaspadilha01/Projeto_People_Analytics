import React from 'react';
import { Icon } from '../core/Icon.jsx';

export const NEXAFLOW_NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
  { id: 'projects', label: 'Projects', icon: 'folder' },
  { id: 'materials', label: 'Materials', icon: 'box' },
  { id: 'timeline', label: 'Timeline', icon: 'calendar' },
  { id: 'budget', label: 'Budget', icon: 'dollar' },
  { id: 'approvals', label: 'Approvals', icon: 'check_square' },
  { id: 'team', label: 'Team', icon: 'users' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
  { id: 'logout', label: 'Logout', icon: 'logout' }
];

export function SidebarNav({ items = NEXAFLOW_NAV, active, onSelect, brand, width: widthProp = 148, style }) {
  const width = Number(widthProp) || 148;
  return (
    <nav style={{
      width, flex: '0 0 auto', background: 'var(--surface-rail)',
      borderRight: '1px solid var(--border-hairline)',
      padding: '18px 10px', display: 'flex', flexDirection: 'column', gap: 22, ...style
    }}>
      {brand}
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(it => {
          const on = it.id === active;
          return (
            <li key={it.id}>
              <button
                onClick={() => onSelect && onSelect(it.id)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 9,
                  padding: '8px 10px', border: 'none', cursor: 'pointer', textAlign: 'left',
                  borderRadius: 'var(--radius-md)',
                  background: on ? 'var(--accent)' : 'transparent',
                  color: on ? 'var(--text-on-accent)' : 'var(--text-body)',
                  font: 'var(--text-body-sm)', fontFamily: 'var(--font-sans)',
                  transition: 'var(--transition-control)'
                }}
              >
                <Icon name={it.icon} size={15} color={on ? 'currentColor' : 'var(--text-muted)'} />
                <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.label}</span>
                {on && <span style={{ width: 4, height: 4, borderRadius: 'var(--radius-pill)', background: 'currentColor' }} />}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
