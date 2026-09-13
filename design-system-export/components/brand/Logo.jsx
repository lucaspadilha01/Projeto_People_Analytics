import React from 'react';

/* Geometry is the supplied vector logo verbatim (viewBox 500×320): two rules at
   y=17/297, "HR" baseline 145, three bars at x=270/330/390, "ANALYTICS" baseline 235.
   Only the palette is this system's. Rendered INLINE, not through <img>, so the
   wordmark actually gets Inter — an SVG loaded as an image cannot fetch webfonts. */

const THEMES = {
  lockup:  { barTop: '#AF9FDF', barMid: '#7A60CA', barBot: '#5B43A8', ruleA: '#AF9FDF', ruleB: '#7A60CA', hr: 'var(--text-heading)', sub: 'var(--accent)' },
  reversed:{ barTop: '#FFFFFF', barMid: '#DFD9F2', barBot: '#CFC4EC', ruleA: '#FFFFFF', ruleB: '#DFD9F2', hr: '#FFFFFF', sub: '#DFD9F2' },
  mono:    { barTop: '#7A60CA', barMid: '#7A60CA', barBot: '#7A60CA', ruleA: '#7A60CA', ruleB: '#5B43A8', hr: '#5B43A8', sub: '#5B43A8' }
};

const BARS = [
  { x: 270, y: 85, w: 48, h: 60 },
  { x: 330, y: 68, w: 48, h: 77 },
  { x: 390, y: 98, w: 48, h: 47 }
];

const FONT = "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif";

export function Logo({ variant = 'lockup', height: heightProp = 58, style }) {
  const height = Number(heightProp) || 58;
  const markOnly = variant === 'mark' || variant === 'mark-reversed';
  const t = THEMES[markOnly ? (variant === 'mark-reversed' ? 'reversed' : 'lockup') : (THEMES[variant] ? variant : 'lockup')];
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const barId = 'nfbar' + uid, ruleId = 'nfrule' + uid;
  const box = markOnly ? '264 62 180 89' : '0 0 500 320';
  const ratio = markOnly ? 180 / 89 : 500 / 320;

  return (
    <svg viewBox={box} height={height} width={height * ratio} role="img" aria-label="HR Analytics"
      style={{ display: 'block', flex: '0 0 auto', ...style }}>
      <defs>
        <linearGradient id={barId} gradientUnits="userSpaceOnUse" x1="0" y1="68" x2="0" y2="145">
          <stop offset="0" stopColor={t.barTop} />
          <stop offset=".4" stopColor={t.barMid} />
          <stop offset="1" stopColor={t.barBot} />
        </linearGradient>
        <linearGradient id={ruleId} gradientUnits="userSpaceOnUse" x1="80" y1="0" x2="420" y2="0">
          <stop offset="0" stopColor={t.ruleA} />
          <stop offset=".5" stopColor={t.ruleB} />
          <stop offset="1" stopColor={t.ruleA} />
        </linearGradient>
      </defs>
      {!markOnly && <rect x="80" y="17" width="340" height="6" rx="3" fill={'url(#' + ruleId + ')'} />}
      {!markOnly && (
        <text x="80" y="145" fontFamily={FONT} fontSize="104" fontWeight="600" letterSpacing="1" fill={t.hr}>HR</text>
      )}
      {BARS.map(b => (
        <rect key={b.x} x={b.x} y={b.y} width={b.w} height={b.h} rx="10" ry="10" fill={'url(#' + barId + ')'} />
      ))}
      {!markOnly && (
        <text x="80" y="235" fontFamily={FONT} fontSize="52" fontWeight="500" letterSpacing="5"
          fill={t.sub} textLength="340" lengthAdjust="spacing">ANALYTICS</text>
      )}
      {!markOnly && <rect x="80" y="297" width="340" height="6" rx="3" fill={'url(#' + ruleId + ')'} />}
    </svg>
  );
}
