const {
  Card, Button, Icon, DonutGauge, BudgetSplitLegend, BarChart, LineChart, ChartLegend,
  InsightTile, VendorPaymentCard, IconButton
} = window.NexaFlowDesignSystem_fd0681;

function BudgetScreen() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '.78fr 1.5fr .82fr', gap: 'var(--gap-card)', alignItems: 'start' }}>
      <Card title="Budget Overview">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DonutGauge value={73} sublabel="Allocated" size={132} thickness={13} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-body)' }}>Total Budget</div>
          <div style={{ font: 'var(--text-metric-lg)', color: 'var(--text-heading)' }}>₹85L</div>
          <div style={{ font: 'var(--text-micro)', fontWeight: 400, color: 'var(--text-muted)' }}>₹66.3L allocated</div>
        </div>
        <BudgetSplitLegend items={[
          { label: 'Civil', percent: 35 },
          { label: 'MEP', percent: 25, color: 'var(--series-2)' },
          { label: 'Interiors', percent: 28, color: 'var(--series-3)' },
          { label: 'Contingency', percent: 12, color: 'var(--series-4)' }]} />
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-card)' }}>
        <Card tone="accent" title="Total Project Budget" padding="var(--pad-card-lg)">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 16 }}>
            {[['Total Allocated', '₹85L', '100% of budget'], ['Total Spent', '₹66.3L', '78% utilized'], ['Remaining', '₹18.7L', '22% available']].map(([a, b, c]) => (
              <div key={a}>
                <div style={{ font: 'var(--text-caption)', color: 'rgba(255,255,255,.82)' }}>{a}</div>
                <div style={{ font: 'var(--text-metric-lg)', margin: '3px 0' }}>{b}</div>
                <div style={{ font: 'var(--text-micro)', fontWeight: 400, color: 'rgba(255,255,255,.78)' }}>{c}</div>
              </div>
            ))}
          </div>
          <div style={{ height: 8, borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,.3)' }}>
            <div style={{ width: '78%', height: '100%', borderRadius: 'var(--radius-pill)', background: '#fff' }} />
          </div>
        </Card>
        <Card title="Category Breakdown">
          <BarChart height={150} barWidth={11} rotateLabels yTicks={['₹32L', '₹24L', '₹16L', '₹8L', '₹0L']} data={window.NF_CATEGORY} />
          <ChartLegend items={[{ label: 'Actual Cost' }, { label: 'Planned Cost', color: 'var(--series-3)' }]} style={{ marginTop: 22 }} />
        </Card>
        <Card title="Change Orders & Variations" action={<Button variant="secondary" size="sm">Add Change Order</Button>}>
          <div style={{ font: 'var(--text-caption)', color: 'var(--text-muted)' }}>The source boards show this panel's header only — contents intentionally left blank.</div>
        </Card>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-card)' }}>
        <InsightTile icon="trend_down" tone="ok" label="Under Budget" value="₹1.8L" note="2.1% savings" />
        <InsightTile icon="alert_circle" tone="warn" label="Pending  Approvals" value="2" note="Change orders awaiting" />
        <Card title="Monthly Cashflow">
          <LineChart height={132} labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
            yTicks={['₹60L', '₹45L', '₹30L', '₹15L', '₹0L']}
            series={[{ name: 'Actual', points: [6, 10, 16, 21, 31, 43, 53] }, { name: 'Planned', points: [7, 11, 15, 23, 33, 41, 50] }]} />
          <ChartLegend items={[{ label: 'Actual' }, { label: 'Planned', color: 'var(--series-3)' }]} />
        </Card>
        <Card title="Vendor Payments" action={<IconButton label="Export"><Icon name="download" size={15} /></IconButton>}>
          {window.NF_VENDORS.map(v => <VendorPaymentCard key={v.vendor} {...v} />)}
        </Card>
      </div>
    </div>
  );
}
Object.assign(window, { BudgetScreen });
