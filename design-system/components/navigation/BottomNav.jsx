import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function BottomNav({ items = [], active, onSelect, style }) {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      background: 'var(--surface-card)', borderTop: '1px solid var(--border-hairline)',
      padding: '8px 6px 10px', ...style
    }}>
      {items.map(it => (
        <button key={it.id} onClick={() => onSelect && onSelect(it.id)} aria-label={it.label}
          style={{
            border: 'none', background: 'transparent', cursor: 'pointer',
            minWidth: 44, minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
          <Icon name={it.icon} size={20} color={it.id === active ? 'var(--accent)' : 'var(--text-faint)'} />
        </button>
      ))}
    </nav>
  );
}
