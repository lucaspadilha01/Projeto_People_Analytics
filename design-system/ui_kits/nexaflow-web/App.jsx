const { SidebarNav, TopBar, PageHeader, Button, Logo, NEXAFLOW_NAV } = window.NexaFlowDesignSystem_fd0681;

function App() {
  const [screen, setScreen] = React.useState('dashboard');
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  const label = (NEXAFLOW_NAV.find(n => n.id === screen) || {}).label || 'Dashboard';
  const body = screen === 'dashboard' ? <window.DashboardScreen />
    : screen === 'budget' ? <window.BudgetScreen />
    : screen === 'timeline' ? <window.TimelineScreen />
    : <window.PlaceholderScreen label={label} />;

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: 0, background: 'var(--bg-app)' }}>
      <SidebarNav
        items={NEXAFLOW_NAV}
        active={screen}
        onSelect={id => setScreen(id === 'logout' ? 'dashboard' : id)}
        brand={<Logo height={58} />}
      />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <TopBar user={window.NF_USER} team={window.NF_TEAM} theme={theme}
          onToggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')} />
        <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: 'var(--gap-card)', display: 'flex', flexDirection: 'column', gap: 'var(--gap-card)' }}>
          <PageHeader title="Residential Villa – Phase 2" subtitle={'HR Analytics · ' + label}
            actions={<><Button variant="secondary">+ Add Project</Button><Button>Import Data</Button></>} />
          {body}
        </div>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
