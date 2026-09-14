const { Card, Icon } = window.NexaFlowDesignSystem_fd0681;

/* The source case study only documents Dashboard, Budget and Timeline.
   The remaining rail destinations are left deliberately empty rather than invented. */
function PlaceholderScreen({ label }) {
  return (
    <Card style={{ minHeight: 320, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <Icon name="info" size={22} color="var(--text-faint)" />
      <div style={{ font: 'var(--text-h3)', color: 'var(--text-heading)' }}>{label}</div>
      <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)', maxWidth: 420 }}>
        Not documented in the supplied NexaFlow case study. Left blank on purpose — ask the designer
        for the {label.toLowerCase()} screens rather than inventing a layout.
      </div>
    </Card>
  );
}
Object.assign(window, { PlaceholderScreen });
