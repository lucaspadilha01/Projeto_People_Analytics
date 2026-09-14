const {
  Card, Button, Badge, Icon, DonutGauge, StatTile, ProgressBar, BarChart, ChartLegend,
  PhaseTracker, ActivityHeatmap, WorkStatusBars, AlertBanner, FileProgressRow, ApprovalRow,
  TaskRow, RangeTabs
} = window.NexaFlowDesignSystem_fd0681;

function DashboardScreen() {
  const [range, setRange] = React.useState('1Y');
  const [approvals, setApprovals] = React.useState(3);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.15fr .72fr 1.35fr', gap: 'var(--gap-card)', alignItems: 'start' }}>
      <Card title="" style={{ gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
          <DonutGauge value={65} sublabel="Complete" size={148} thickness={14} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ font: 'var(--text-h4)', color: 'var(--text-heading)' }}>Current Phase</div>
          <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-accent)', marginTop: 3 }}>Design Development</div>
        </div>
        <PhaseTracker phases={[{ label: 'Concept', done: true }, { label: 'Scheme', done: true }, { label: 'Design', done: true }, { label: 'GFC' }, { label: 'Execution' }]} />
      </Card>

      <Card title="Pending Approvals" style={{ gap: 10 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ font: 'var(--text-metric-xl)', color: 'var(--text-heading)' }}>{String(approvals).padStart(2, '0')}</div>
          <div style={{ font: 'var(--text-caption)', color: 'var(--text-muted)' }}>Items Awaiting</div>
        </div>
        <ApprovalRow icon="file" label="Design Files" count={1} />
        <ApprovalRow icon="package" label="Material" count={2} />
        <Button variant="soft" onClick={() => setApprovals(0)} style={{ width: '100%' }}>Review All</Button>
      </Card>

      <Card title="Project Performance Analytics" meta="Task completion, timeline, and budget tracking"
        action={<RangeTabs value={range} onChange={setRange} />}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 10 }}>
          <StatTile label="On schedule" value="92%" delta="+5%" />
          <StatTile label="Tasks Completed" value="156" delta="+12%" />
          <StatTile label="Budget Variance" value="-3%" delta="±2%" direction="down" />
        </div>
        <BarChart stacked height={118} barWidth={16} yTicks={['100', '75', '50', '25', '0']} data={window.NF_PERF_BARS} />
      </Card>

      <Card title="Architect's Work statistics" style={{ gridColumn: 'span 1' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-body)' }}>Work status</div>
            <div style={{ font: 'var(--text-metric-lg)', color: 'var(--text-heading)' }}>75%</div>
          </div>
          <ChartLegend align="flex-end" items={[{ label: 'Total' }, { label: 'Done', color: 'var(--series-2)' }, { label: 'In progress', color: 'var(--series-4)' }]} />
        </div>
        <WorkStatusBars total={64} done={0.45} inProgress={0.3} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <FileProgressRow heading="In Progress" name="Elevation details.pdf" size="5.1Mb" percent={45} />
          <FileProgressRow heading="Completed" name="Scheme R1.pdf" size="8.2Mb" percent={100} />
        </div>
        <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: 12 }}>
          <div style={{ font: 'var(--text-h4)', color: 'var(--text-heading)', marginBottom: 10 }}>Drawing Statistics</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--surface-tint)', borderRadius: 'var(--radius-md)', padding: '10px 12px' }}>
            <span style={{ width: 30, height: 30, borderRadius: 'var(--radius-md)', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="file" size={15} color="#fff" />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ font: 'var(--text-body-sm)', color: 'var(--text-heading)' }}>Architecture drawing set</span>
              <span style={{ font: 'var(--text-micro)', fontWeight: 400, color: 'var(--text-muted)' }}>3 drawings pending</span>
            </span>
          </div>
        </div>
      </Card>

      <Card title="Project Timeline">
        <AlertBanner tone="info" title="3-day delay detected" detail="Schematic Stage delayed due to client" />
        {window.NF_STAGES.map(s => <ProgressBar key={s.label} label={s.label} value={s.value} />)}
      </Card>

      <Card title="Calendar & Tasks" action={
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, font: 'var(--text-caption)', color: 'var(--text-muted)' }}>
          <Icon name="calendar" size={13} color="var(--text-muted)" />November 2025
        </span>}>
        <div style={{ background: 'var(--surface-tint)', borderRadius: 'var(--radius-md)', padding: 12, display: 'flex', alignItems: 'center', gap: 14 }}>
          <DonutGauge value={65} size={74} thickness={9} caption="65%" />
          <div style={{ minWidth: 0 }}>
            <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-body)' }}>Today's Progress</div>
            <div style={{ font: 'var(--text-h3)', color: 'var(--text-heading)', margin: '2px 0 6px' }}>2 of 5 completed</div>
            <ChartLegend align="flex-start" items={[{ label: '3 Pending', color: 'var(--series-3)' }, { label: '2 Done' }]} />
          </div>
        </div>
        <div>
          <div style={{ font: 'var(--text-h4)', color: 'var(--text-heading)', marginBottom: 8 }}>Activity Heatmap</div>
          <ActivityHeatmap days={window.NF_WEEK} />
        </div>
        <div>
          <div style={{ font: 'var(--text-h4)', color: 'var(--text-heading)', marginBottom: 8 }}>Today's Schedule</div>
          <TaskRow title="Review floor plan revisions" meta="09:00 AM" badge={<Badge tone="accent">Design</Badge>} />
        </div>
      </Card>
    </div>
  );
}
Object.assign(window, { DashboardScreen });
