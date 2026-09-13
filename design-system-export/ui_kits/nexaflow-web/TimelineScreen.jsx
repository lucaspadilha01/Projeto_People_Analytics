const { Card, GanttChart, ChartLegend, ProgressBar, MiniStatCell, TaskRow } = window.NexaFlowDesignSystem_fd0681;

function TimelineScreen() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2.1fr .85fr', gap: 'var(--gap-card)', alignItems: 'start' }}>
      <Card title="Timeline Gantt Chart" action={
        <ChartLegend align="flex-end" items={[
          { label: 'Completed' }, { label: 'On-track', color: 'var(--series-3)' },
          { label: 'Delayed', color: 'var(--status-warn)' }, { label: 'Pending', color: 'var(--track)' }]} />}>
        <GanttChart months={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
          rows={window.NF_GANTT}
          milestones={[{ at: 1, done: true }, { at: 2, done: true }, { at: 4.2, done: true }, { at: 5, done: true }, { at: 6.6 }, { at: 7.8 }]} />
      </Card>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-card)' }}>
        <Card title="Progress Overview">
          <ProgressBar label="Design Completion" value={92} />
          <ProgressBar label="Material Board" value={85} />
          <ProgressBar label="Drawings" value={75} />
          <ProgressBar label="Overall Timeline" value={65} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <MiniStatCell label="Completed" value="5" tone="ok" />
            <MiniStatCell label="Active" value="3" tone="accent" />
            <MiniStatCell label="Delayed" value="1" tone="warn" />
            <MiniStatCell label="Pending" value="2" />
          </div>
        </Card>
        <Card title="Upcoming Tasks">
          {window.NF_UPCOMING.map(t => <TaskRow key={t.title} {...t} dot />)}
        </Card>
      </div>
    </div>
  );
}
Object.assign(window, { TimelineScreen });
