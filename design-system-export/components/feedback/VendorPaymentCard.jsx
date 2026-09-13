import React from 'react';
import { Badge } from '../core/Badge.jsx';

export function VendorPaymentCard({ vendor, scope, paid, pending, due, status = 'Pending', style }) {
  return (
    <div style={{
      border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)',
      padding: '11px 12px', display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0,
      background: 'var(--surface-card)', ...style
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
        <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <strong style={{ font: 'var(--text-label)', fontFamily: 'var(--font-sans)', color: 'var(--text-heading)' }}>{vendor}</strong>
          <span style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--text-muted)' }}>{scope}</span>
        </span>
        <Badge tone="warn">{status}</Badge>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <span style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--text-muted)' }}>Paid</span>
          <strong style={{ font: 'var(--text-label)', fontFamily: 'var(--font-sans)', color: 'var(--text-heading)' }}>{paid}</strong>
        </span>
        <span style={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
          <span style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--text-muted)' }}>Pending</span>
          <strong style={{ font: 'var(--text-label)', fontFamily: 'var(--font-sans)', color: 'var(--text-heading)' }}>{pending}</strong>
        </span>
      </div>
      {due && <span style={{ font: 'var(--text-micro)', fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--status-warn)' }}>{due}</span>}
    </div>
  );
}
