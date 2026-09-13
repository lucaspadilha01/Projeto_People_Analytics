const {
  Card, Button, Icon, MobileAppBar, BottomNav, StatTile, BarChart, ChartLegend, DonutGauge,
  BudgetSplitLegend, InsightTile, ProgressBar, MiniStatCell, TaskRow, WorkStatusBars
} = window.NexaFlowDesignSystem_fd0681;

const TABS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
  { id: 'projects', label: 'Projects', icon: 'folder' },
  { id: 'materials', label: 'Materials', icon: 'box' },
  { id: 'timeline', label: 'Timeline', icon: 'calendar' },
  { id: 'team', label: 'Team', icon: 'users' }
];

function StatusBar() {
  return (
    <div className="status">
      <span>9:41</span>
      <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center', color: 'var(--text-heading)' }}>▮▮▮ ▾ ▰</span>
    </div>
  );
}

function Phone({ tab, setTab, children }) {
  return (
    <div className="phone">
      <StatusBar />
      <MobileAppBar user={{ name: 'Sarah Chen' }} />
      <div className="body">{children}</div>
      <BottomNav items={TABS} active={tab} onSelect={setTab} />
    </div>
  );
}

function DashboardPhone() {
  return (
    <>
      <Card title="Project Performance Analytics" meta="Task completion, timeline, and budget tracking" padding={12}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <StatTile label="On schedule" value="92%" delta="+5%" />
          <StatTile label="Tasks Completed" value="156" delta="+12%" />
          <StatTile label="Budget Variance" value="-3%" delta="±2%" direction="down" />
          <StatTile label="Budget Variance" value="-3%" delta="±2%" direction="down" />
        </div>
      </Card>
      <Card title="Project Performance Chart" padding={12}>
        <BarChart stacked height={104} barWidth={12} yTicks={['100', '75', '50', '25', '0']} data={window.NF_PERF_BARS_M} />
      </Card>
      <Card title="Architect's Work statistics" padding={12}>
        <div style={{ font: 'var(--text-body-sm)' }}>Work status</div>
        <div style={{ font: 'var(--text-metric-lg)', color: 'var(--text-heading)' }}>75%</div>
        <WorkStatusBars total={44} done={0.45} inProgress={0.3} />
        <ChartLegend align="flex-start" items={[{ label: 'Total' }, { label: 'Done', color: 'var(--series-2)' }, { label: 'In progress', color: 'var(--series-4)' }]} />
      </Card>
    </>
  );
}

function BudgetPhone() {
  return (
    <>
      <Card padding={12}>
        <div style={{ textAlign: 'center', font: 'var(--text-h4)', color: 'var(--text-heading)' }}>Budget Overview</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DonutGauge value={73} sublabel="Allocated" size={126} thickness={14} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ font: 'var(--text-body-sm)' }}>Total Budget</div>
          <div style={{ font: 'var(--text-metric-lg)', color: 'var(--text-heading)' }}>₹85L</div>
          <div style={{ font: 'var(--text-micro)', fontWeight: 400, color: 'var(--text-muted)' }}>₹66.3L allocated</div>
        </div>
        <BudgetSplitLegend items={[
          { label: 'Civil', percent: 35 }, { label: 'MEP', percent: 25, color: 'var(--series-2)' },
          { label: 'Interiors', percent: 28, color: 'var(--series-3)' }, { label: 'Contingency', percent: 12, color: 'var(--series-4)' }]} />
      </Card>
      <InsightTile icon="trend_down" tone="ok" label="Under Budget" value="₹1.8L" note="2.1% savings" />
      <Card tone="accent" title="Total Project Budget" padding={12}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[['Total Allocated', '₹85L'], ['Total Spent', '₹66.3L'], ['Remaining', '₹18.7L'], ['Utilized', '78%']].map(([a, b]) => (
            <div key={a}>
              <div style={{ font: 'var(--text-micro)', fontWeight: 400, color: 'rgba(255,255,255,.8)' }}>{a}</div>
              <div style={{ font: 'var(--text-metric-md)' }}>{b}</div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

function TimelinePhone() {
  return (
    <>
      <Card title="Progress Overview" padding={12}>
        <ProgressBar label="Design Completion" value={92} />
        <ProgressBar label="Material Board" value={85} />
        <ProgressBar label="Drawings" value={75} />
        <ProgressBar label="Overall Timeline" value={65} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <MiniStatCell label="Completed" value="5" tone="ok" />
          <MiniStatCell label="Active" value="3" tone="accent" />
          <MiniStatCell label="Delayed" value="1" tone="warn" />
          <MiniStatCell label="Pending" value="2" />
        </div>
      </Card>
      <Card title="Upcoming Tasks" padding={12}>
        <TaskRow title="Review Electrical Drawings" meta="May 28, 2026 · Amit Patel" dot />
        <TaskRow title="Finalize Furniture Selection" meta="May 30, 2026 · Priya Sharma" dot />
        <TaskRow title="Client Presentation Prep" meta="May 2, 2026 · Rajesh Kumar" dot />
      </Card>
    </>
  );
}

window.NF_PERF_BARS_M = [
  { label: 'Jan', values: [18, 8, 5] }, { label: 'Feb', values: [24, 9, 6] }, { label: 'Mar', values: [30, 10, 7] },
  { label: 'Apr', values: [36, 11, 7] }, { label: 'May', values: [44, 12, 8] }, { label: 'Jun', values: [52, 13, 8] },
  { label: 'Jul', values: [60, 14, 9] }
];

function MobileKit() {
  const [a, setA] = React.useState('dashboard');
  const [b, setB] = React.useState('projects');
  const [c, setC] = React.useState('timeline');
  return (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
      <Phone tab={a} setTab={setA}><DashboardPhone /></Phone>
      <Phone tab={b} setTab={setB}><BudgetPhone /></Phone>
      <Phone tab={c} setTab={setC}><TimelinePhone /></Phone>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<MobileKit />);
