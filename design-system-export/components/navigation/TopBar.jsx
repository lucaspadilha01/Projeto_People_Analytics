import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { SearchField } from '../core/SearchField.jsx';
import { Avatar, AvatarGroup } from '../core/Avatar.jsx';

export function TopBar({ user, team = [], theme = 'light', onToggleTheme, style }) {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px',
      background: 'var(--surface-card)', borderBottom: '1px solid var(--border-hairline)', ...style
    }}>
      <SearchField style={{ flex: 1, minWidth: 0 }} />
      <IconButton label="Messages"><Icon name="message" size={16} /></IconButton>
      <IconButton label="Notifications" badge><Icon name="bell" size={16} /></IconButton>
      <IconButton label="Toggle theme" onClick={onToggleTheme}><Icon name={theme === 'dark' ? 'moon' : 'sun'} size={16} /></IconButton>
      {team.length > 0 && <AvatarGroup people={team} size={26} max={3} />}
      {user && (
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 4 }}>
          <Avatar {...user} size={30} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
            <span style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', color: 'var(--text-accent)' }}>{user.name}</span>
            <span style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--text-muted)' }}>{user.role}</span>
          </span>
        </span>
      )}
    </header>
  );
}
