/* @ds-bundle: {"format":4,"namespace":"NexaFlowDesignSystem_fd0681","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SearchField","sourcePath":"components/core/SearchField.jsx"},{"name":"SegmentedToggle","sourcePath":"components/core/SegmentedToggle.jsx"},{"name":"Toggle","sourcePath":"components/core/Toggle.jsx"},{"name":"ActivityHeatmap","sourcePath":"components/data/ActivityHeatmap.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"BudgetSplitLegend","sourcePath":"components/data/BudgetSplitLegend.jsx"},{"name":"ChartLegend","sourcePath":"components/data/ChartLegend.jsx"},{"name":"DonutGauge","sourcePath":"components/data/DonutGauge.jsx"},{"name":"GanttChart","sourcePath":"components/data/GanttChart.jsx"},{"name":"LineChart","sourcePath":"components/data/LineChart.jsx"},{"name":"MiniStatCell","sourcePath":"components/data/MiniStatCell.jsx"},{"name":"PhaseTracker","sourcePath":"components/data/PhaseTracker.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"StatTile","sourcePath":"components/data/StatTile.jsx"},{"name":"WorkStatusBars","sourcePath":"components/data/WorkStatusBars.jsx"},{"name":"AlertBanner","sourcePath":"components/feedback/AlertBanner.jsx"},{"name":"ApprovalRow","sourcePath":"components/feedback/ApprovalRow.jsx"},{"name":"FileProgressRow","sourcePath":"components/feedback/FileProgressRow.jsx"},{"name":"InsightTile","sourcePath":"components/feedback/InsightTile.jsx"},{"name":"TaskRow","sourcePath":"components/feedback/TaskRow.jsx"},{"name":"VendorPaymentCard","sourcePath":"components/feedback/VendorPaymentCard.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"MobileAppBar","sourcePath":"components/navigation/MobileAppBar.jsx"},{"name":"PageHeader","sourcePath":"components/navigation/PageHeader.jsx"},{"name":"RangeTabs","sourcePath":"components/navigation/RangeTabs.jsx"},{"name":"NEXAFLOW_NAV","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"20b14ca53292","components/core/Avatar.jsx":"0f0e0a29840c","components/core/Badge.jsx":"9e849e044fa8","components/core/Button.jsx":"b7be62100ed2","components/core/Card.jsx":"2050e98501c0","components/core/Icon.jsx":"e5861baff4db","components/core/IconButton.jsx":"a5bb65434ae1","components/core/Input.jsx":"79dd48d2d002","components/core/SearchField.jsx":"c3bc547872f8","components/core/SegmentedToggle.jsx":"9cc1a1bc65e6","components/core/Toggle.jsx":"2b5956d6ae7f","components/data/ActivityHeatmap.jsx":"f31820bf44ff","components/data/BarChart.jsx":"39c24fbf61a8","components/data/BudgetSplitLegend.jsx":"00cbab21cb73","components/data/ChartLegend.jsx":"d7ca876850ec","components/data/DonutGauge.jsx":"283bb6c0522a","components/data/GanttChart.jsx":"356e1d501c9f","components/data/LineChart.jsx":"44e916c75634","components/data/MiniStatCell.jsx":"d9a67f72d7f8","components/data/PhaseTracker.jsx":"460319de8ef8","components/data/ProgressBar.jsx":"9d628f43311c","components/data/StatTile.jsx":"a765ab98e036","components/data/WorkStatusBars.jsx":"77e77638e67e","components/feedback/AlertBanner.jsx":"133e48a5f8d5","components/feedback/ApprovalRow.jsx":"9d38ca441414","components/feedback/FileProgressRow.jsx":"ca58b22ab1a5","components/feedback/InsightTile.jsx":"1150d6d0ad95","components/feedback/TaskRow.jsx":"c7e433c144eb","components/feedback/VendorPaymentCard.jsx":"77f3afd65ded","components/navigation/BottomNav.jsx":"a0459c9979f5","components/navigation/MobileAppBar.jsx":"d771413081b3","components/navigation/PageHeader.jsx":"8049792bf956","components/navigation/RangeTabs.jsx":"6f0dad807300","components/navigation/SidebarNav.jsx":"a81e447d4527","components/navigation/TopBar.jsx":"b9a39cc26bb1","ui_kits/nexaflow-mobile/MobileApp.jsx":"89d4b20d1c5c","ui_kits/nexaflow-web/App.jsx":"405269ab5590","ui_kits/nexaflow-web/BudgetScreen.jsx":"e70d07dacc84","ui_kits/nexaflow-web/DashboardScreen.jsx":"816063077081","ui_kits/nexaflow-web/PlaceholderScreen.jsx":"763f70e03fe4","ui_kits/nexaflow-web/TimelineScreen.jsx":"f36162050f6b","ui_kits/nexaflow-web/data.jsx":"b7d2fab99896"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NexaFlowDesignSystem_fd0681 = window.NexaFlowDesignSystem_fd0681 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
/* Geometry is the supplied vector logo verbatim (viewBox 500×320): two rules at
   y=17/297, "HR" baseline 145, three bars at x=270/330/390, "ANALYTICS" baseline 235.
   Only the palette is this system's. Rendered INLINE, not through <img>, so the
   wordmark actually gets Inter — an SVG loaded as an image cannot fetch webfonts. */

const THEMES = {
  lockup: {
    barTop: '#AF9FDF',
    barMid: '#7A60CA',
    barBot: '#5B43A8',
    ruleA: '#AF9FDF',
    ruleB: '#7A60CA',
    hr: 'var(--text-heading)',
    sub: 'var(--accent)'
  },
  reversed: {
    barTop: '#FFFFFF',
    barMid: '#DFD9F2',
    barBot: '#CFC4EC',
    ruleA: '#FFFFFF',
    ruleB: '#DFD9F2',
    hr: '#FFFFFF',
    sub: '#DFD9F2'
  },
  mono: {
    barTop: '#7A60CA',
    barMid: '#7A60CA',
    barBot: '#7A60CA',
    ruleA: '#7A60CA',
    ruleB: '#5B43A8',
    hr: '#5B43A8',
    sub: '#5B43A8'
  }
};
const BARS = [{
  x: 270,
  y: 85,
  w: 48,
  h: 60
}, {
  x: 330,
  y: 68,
  w: 48,
  h: 77
}, {
  x: 390,
  y: 98,
  w: 48,
  h: 47
}];
const FONT = "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif";
function Logo({
  variant = 'lockup',
  height: heightProp = 58,
  style
}) {
  const height = Number(heightProp) || 58;
  const markOnly = variant === 'mark' || variant === 'mark-reversed';
  const t = THEMES[markOnly ? variant === 'mark-reversed' ? 'reversed' : 'lockup' : THEMES[variant] ? variant : 'lockup'];
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const barId = 'nfbar' + uid,
    ruleId = 'nfrule' + uid;
  const box = markOnly ? '264 62 180 89' : '0 0 500 320';
  const ratio = markOnly ? 180 / 89 : 500 / 320;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: box,
    height: height,
    width: height * ratio,
    role: "img",
    "aria-label": "HR Analytics",
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: barId,
    gradientUnits: "userSpaceOnUse",
    x1: "0",
    y1: "68",
    x2: "0",
    y2: "145"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: t.barTop
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".4",
    stopColor: t.barMid
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: t.barBot
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: ruleId,
    gradientUnits: "userSpaceOnUse",
    x1: "80",
    y1: "0",
    x2: "420",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: t.ruleA
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".5",
    stopColor: t.ruleB
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: t.ruleA
  }))), !markOnly && /*#__PURE__*/React.createElement("rect", {
    x: "80",
    y: "17",
    width: "340",
    height: "6",
    rx: "3",
    fill: 'url(#' + ruleId + ')'
  }), !markOnly && /*#__PURE__*/React.createElement("text", {
    x: "80",
    y: "145",
    fontFamily: FONT,
    fontSize: "104",
    fontWeight: "600",
    letterSpacing: "1",
    fill: t.hr
  }, "HR"), BARS.map(b => /*#__PURE__*/React.createElement("rect", {
    key: b.x,
    x: b.x,
    y: b.y,
    width: b.w,
    height: b.h,
    rx: "10",
    ry: "10",
    fill: 'url(#' + barId + ')'
  })), !markOnly && /*#__PURE__*/React.createElement("text", {
    x: "80",
    y: "235",
    fontFamily: FONT,
    fontSize: "52",
    fontWeight: "500",
    letterSpacing: "5",
    fill: t.sub,
    textLength: "340",
    lengthAdjust: "spacing"
  }, "ANALYTICS"), !markOnly && /*#__PURE__*/React.createElement("rect", {
    x: "80",
    y: "297",
    width: "340",
    height: "6",
    rx: "3",
    fill: 'url(#' + ruleId + ')'
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  src,
  name = '',
  size: sizeProp = 28,
  ring = false,
  style
}) {
  const size = Number(sizeProp) || 28;
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    title: name,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'var(--accent-soft)',
      color: 'var(--accent-strong)',
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      boxShadow: ring ? '0 0 0 2px var(--surface-card)' : 'none',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
function AvatarGroup({
  people = [],
  size: sizeProp = 28,
  max = 4,
  style
}) {
  const size = Number(sizeProp) || 28;
  const shown = people.slice(0, max);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement(Avatar, _extends({
    key: i
  }, p, {
    size: size,
    ring: true,
    style: {
      marginLeft: i === 0 ? 0 : -8
    }
  }))), people.length > max && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -8,
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-sunken)',
      color: 'var(--text-muted)',
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 0 2px var(--surface-card)'
    }
  }, "+", people.length - max));
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: 'var(--surface-sunken)',
    color: 'var(--text-muted)'
  },
  accent: {
    background: 'var(--accent-soft)',
    color: 'var(--accent-strong)'
  },
  ok: {
    background: 'var(--status-ok-bg)',
    color: 'var(--status-ok)'
  },
  warn: {
    background: 'var(--status-warn-bg)',
    color: 'var(--status-warn)'
  },
  risk: {
    background: 'var(--status-risk-bg)',
    color: 'var(--status-risk)'
  },
  info: {
    background: 'var(--status-info-bg)',
    color: 'var(--status-info)'
  }
};
function Badge({
  tone = 'neutral',
  dot = false,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      padding: '3px 8px',
      borderRadius: 'var(--radius-sm)',
      ...tones[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 'var(--radius-pill)',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  font: 'var(--text-button)',
  letterSpacing: 'var(--tracking-normal)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-md)',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'var(--transition-control)',
  fontFamily: 'var(--font-sans)'
};
const sizes = {
  sm: {
    padding: '6px 12px',
    fontSize: 12,
    borderRadius: 'var(--radius-sm)'
  },
  md: {
    padding: '9px 16px',
    fontSize: 13
  },
  lg: {
    padding: '12px 20px',
    fontSize: 14,
    borderRadius: 'var(--radius-lg)'
  }
};
const variants = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--text-on-accent)',
    boxShadow: 'var(--shadow-accent)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    borderColor: 'var(--border-card)'
  },
  soft: {
    background: 'var(--accent-soft)',
    color: 'var(--accent-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)'
  },
  danger: {
    background: 'var(--status-risk)',
    color: '#fff'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  disabled = false,
  iconLeft,
  iconRight,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(pill ? {
        borderRadius: 'var(--radius-pill)'
      } : null),
      ...(disabled ? {
        opacity: 0.45,
        cursor: 'not-allowed',
        boxShadow: 'none'
      } : null),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  title,
  meta,
  action,
  tone = 'plain',
  padding,
  style,
  children,
  ...rest
}) {
  const tones = {
    plain: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-hairline)'
    },
    tint: {
      background: 'var(--surface-tint)',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    accent: {
      background: 'var(--surface-accent)',
      color: 'var(--surface-accent-ink)',
      border: '1px solid transparent'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: padding ?? 'var(--pad-card)',
      boxShadow: tone === 'plain' ? 'var(--shadow-card)' : 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      minWidth: 0,
      ...tones[tone],
      ...style
    }
  }, rest), (title || action) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--text-h4)',
      fontFamily: 'var(--font-sans)',
      color: tone === 'accent' ? 'inherit' : 'var(--text-heading)'
    }
  }, title), meta && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '3px 0 0',
      font: 'var(--text-caption)',
      fontFamily: 'var(--font-sans)',
      color: tone === 'accent' ? 'rgba(255,255,255,.78)' : 'var(--text-muted)'
    }
  }, meta)), action), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Lucide glyph paths — NexaFlow's screens use Lucide-style 1.5px stroke line icons.
   Copied subset so the kit has zero network dependency. viewBox 0 0 24 24. */
const PATHS = {
  grid: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
  folder: 'M3 7a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  box: 'M12 2 3 7v10l9 5 9-5V7zM3 7l9 5 9-5M12 12v10',
  calendar: 'M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 10h18M8 4V2M16 4V2',
  dollar: 'M12 2v20M17 6.5c0-2-2.2-3-5-3s-5 1-5 3.2S9 10 12 10.5s5 1.3 5 3.4-2.2 3.1-5 3.1-5-1-5-3',
  check_square: 'M9 11l3 3 5-6M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z',
  users: 'M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 20v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
  settings: 'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-2.9-1.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 15H2.8a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.2 8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 10 4V3.8a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z',
  logout: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16M21 21l-4.3-4.3',
  message: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  bell: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0',
  sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
  moon: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8',
  trend_up: 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6',
  trend_down: 'M23 18l-9.5-9.5-5 5L1 6M17 18h6v-6',
  file: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M12 6v6l4 2',
  alert_circle: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M12 8v4M12 16h.01',
  info: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M12 16v-4M12 8h.01',
  check_circle: 'M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4 12 14.1l-3-3',
  chevron_right: 'M9 18l6-6-6-6',
  chevron_down: 'M6 9l6 6 6-6',
  plus: 'M12 5v14M5 12h14',
  target: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4',
  menu: 'M3 12h18M3 6h18M3 18h18',
  upload_cloud: 'M16 16l-4-4-4 4M12 12v9M20.4 16.6A5 5 0 0 0 18 7h-1.3A8 8 0 1 0 3 14.3',
  package: 'M16.5 9.4 7.5 4.2M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16M3.3 7 12 12l8.7-5M12 22V12'
};
function Icon({
  name,
  size: sizeProp = 16,
  color = 'currentColor',
  strokeWidth = 1.5,
  style
}) {
  const size = Number(sizeProp) || 16;
  const d = PATHS[name];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: '0 0 auto',
      display: 'block',
      ...style
    },
    "aria-hidden": "true"
  }, d && /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  size: sizeProp = 34,
  tone = 'quiet',
  badge = false,
  style,
  children,
  ...rest
}) {
  const size = Number(sizeProp) || 34;
  const tones = {
    quiet: {
      background: 'transparent',
      color: 'var(--text-muted)'
    },
    tinted: {
      background: 'var(--accent-softer)',
      color: 'var(--accent)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    style: {
      position: 'relative',
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      ...tones[tone],
      ...style
    }
  }, rest), children, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      right: 6,
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--status-risk)'
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  invalid = false,
  iconLeft,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--surface-card)',
      border: '1px solid ' + (invalid ? 'var(--status-risk)' : 'var(--border-field)'),
      borderRadius: 'var(--radius-md)',
      padding: '0 var(--pad-field-x)',
      transition: 'var(--transition-control)'
    }
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--text-body-md)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-heading)',
      padding: 'var(--pad-field-y) 0',
      ...style
    }
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      fontFamily: 'var(--font-sans)',
      color: invalid ? 'var(--status-risk)' : 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchField({
  placeholder = 'Search…',
  width = '100%',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-field)',
      borderRadius: 'var(--radius-md)',
      padding: '0 12px',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 14,
    color: "var(--text-faint)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder,
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-heading)',
      padding: '8px 0'
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedToggle.jsx
try { (() => {
function SegmentedToggle({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      background: 'var(--accent-soft)',
      borderRadius: 'var(--radius-pill)',
      padding: 3,
      gap: 2,
      ...style
    }
  }, options.map(o => {
    const key = typeof o === 'string' ? o : o.value;
    const on = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => onChange && onChange(key),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        padding: '7px 16px',
        font: 'var(--text-label)',
        fontFamily: 'var(--font-sans)',
        background: on ? 'var(--accent-strong)' : 'transparent',
        color: on ? '#fff' : 'var(--accent-strong)',
        transition: 'var(--transition-control)'
      }
    }, typeof o === 'string' ? o : /*#__PURE__*/React.createElement(React.Fragment, null, o.icon, o.label));
  }));
}
Object.assign(__ds_scope, { SegmentedToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedToggle.jsx", error: String((e && e.message) || e) }); }

// components/core/Toggle.jsx
try { (() => {
function Toggle({
  checked = false,
  onChange,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 38,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      padding: 3,
      flex: '0 0 auto',
      background: checked ? 'var(--accent)' : 'var(--track)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 16,
      height: 16,
      borderRadius: 'var(--radius-pill)',
      background: '#fff',
      transform: 'translateX(' + (checked ? 16 : 0) + 'px)',
      transition: 'transform var(--dur-base) var(--ease-standard)',
      boxShadow: '0 1px 2px rgba(0,0,0,.2)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/data/ActivityHeatmap.jsx
try { (() => {
const LEVELS = ['var(--surface-sunken)', 'var(--violet-100)', 'var(--violet-300)', 'var(--accent)'];
function ActivityHeatmap({
  days = [],
  legend = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 0,
      ...style
    }
  }, legend && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 5,
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Less"), LEVELS.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: c
    }
  })), /*#__PURE__*/React.createElement("span", null, "More")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, minmax(0,1fr))',
      gap: 6
    }
  }, days.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: 'l' + i,
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-faint)',
      textAlign: 'center'
    }
  }, d.weekday)), days.map((d, i) => {
    const lvl = d.level ?? 0;
    const strong = lvl >= 2;
    return /*#__PURE__*/React.createElement("span", {
      key: 'd' + i,
      style: {
        aspectRatio: '1',
        borderRadius: 'var(--radius-md)',
        background: LEVELS[lvl],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-micro)',
        fontFamily: 'var(--font-sans)',
        color: strong ? '#fff' : 'var(--text-muted)'
      }
    }, d.date), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 1.5
      }
    }, Array.from({
      length: Math.min(3, d.dots ?? 0)
    }).map((_, j) => /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        width: 2.5,
        height: 2.5,
        borderRadius: 'var(--radius-pill)',
        background: strong ? 'rgba(255,255,255,.85)' : 'var(--violet-300)'
      }
    }))));
  })));
}
Object.assign(__ds_scope, { ActivityHeatmap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ActivityHeatmap.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
function BarChart({
  data = [],
  height: heightProp = 150,
  yTicks = [],
  stacked = false,
  barWidth: barWidthProp = 14,
  rotateLabels = false,
  style
}) {
  const height = Number(heightProp) || 150;
  const barWidth = Number(barWidthProp) || 14;
  const max = Math.max(...data.flatMap(d => stacked ? [(d.values || []).reduce((a, b) => a + b, 0)] : d.values || [d.value || 0]), 1);
  const series = ['var(--series-1)', 'var(--series-2)', 'var(--series-3)', 'var(--series-4)'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      minWidth: 0,
      ...style
    }
  }, yTicks.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height,
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-faint)',
      textAlign: 'right'
    }
  }, yTicks.map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 4,
      borderBottom: '1px solid var(--series-grid)',
      position: 'relative'
    }
  }, yTicks.slice(1).map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: i * height / (yTicks.length - 1) + 'px',
      borderTop: '1px dashed var(--series-grid)',
      opacity: .6
    }
  })), data.map((d, i) => {
    const vals = d.values || [d.value || 0];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: 2,
        position: 'relative'
      }
    }, stacked ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: barWidth,
        display: 'flex',
        flexDirection: 'column-reverse',
        height: vals.reduce((a, b) => a + b, 0) / max * height,
        borderRadius: 'var(--radius-xs)',
        overflow: 'hidden'
      }
    }, vals.map((v, j) => /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        height: v / vals.reduce((a, b) => a + b, 0) * 100 + '%',
        background: series[j % series.length]
      }
    }))) : vals.map((v, j) => /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        width: barWidth,
        height: Math.max(2, v / max * height),
        background: series[j % series.length],
        borderRadius: 'var(--radius-xs) var(--radius-xs) 0 0'
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 4,
      marginTop: 6
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      textAlign: 'center',
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-faint)',
      ...(rotateLabels ? {
        transform: 'rotate(-42deg)',
        transformOrigin: 'top center',
        whiteSpace: 'nowrap'
      } : null)
    }
  }, d.label)))));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/BudgetSplitLegend.jsx
try { (() => {
function BudgetSplitLegend({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px 16px',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: it.color || 'var(--series-1)',
      marginTop: 4,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, it.percent, "%")))));
}
Object.assign(__ds_scope, { BudgetSplitLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BudgetSplitLegend.jsx", error: String((e && e.message) || e) }); }

// components/data/ChartLegend.jsx
try { (() => {
function ChartLegend({
  items = [],
  align = 'center',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      justifyContent: align,
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--text-caption)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: it.color || 'var(--series-1)'
    }
  }), it.label)));
}
Object.assign(__ds_scope, { ChartLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ChartLegend.jsx", error: String((e && e.message) || e) }); }

// components/data/DonutGauge.jsx
try { (() => {
function DonutGauge({
  value: valueProp = 0,
  size: sizeProp = 132,
  thickness: thicknessProp = 13,
  caption,
  sublabel,
  color = 'var(--accent)',
  track = 'var(--track-accent)',
  style,
  children
}) {
  const value = Number(valueProp) || 0;
  const size = Number(sizeProp) || 132;
  const thickness = Number(thicknessProp) || 13;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: '0 0 auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      display: 'block',
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: track,
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: thickness,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - Math.max(0, Math.min(100, value)) / 100),
    style: {
      transition: 'stroke-dashoffset var(--dur-chart) var(--ease-standard)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2
    }
  }, children || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-metric-lg)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, caption ?? value + '%'), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, sublabel))));
}
Object.assign(__ds_scope, { DonutGauge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DonutGauge.jsx", error: String((e && e.message) || e) }); }

// components/data/GanttChart.jsx
try { (() => {
const STATUS = {
  completed: 'var(--accent)',
  ontrack: 'var(--violet-300)',
  delayed: 'var(--status-warn-bg)',
  pending: 'var(--track)'
};
function GanttChart({
  months = [],
  rows = [],
  milestones = [],
  style
}) {
  const n = Math.max(1, months.length);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '150px 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + n + ', minmax(0,1fr))'
    }
  }, months.map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-faint)',
      textAlign: 'center'
    }
  }, m)))), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '150px 1fr',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: r.status === 'pending' ? 'clock' : 'check_circle',
    size: 13,
    color: r.status === 'delayed' ? 'var(--status-warn)' : r.status === 'pending' ? 'var(--text-faint)' : 'var(--accent)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      height: 14,
      borderRadius: 'var(--radius-xs)',
      left: r.start / n * 100 + '%',
      width: r.span / n * 100 + '%',
      background: STATUS[r.status] || STATUS.ontrack,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: 5
    }
  }, r.percent !== undefined && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      color: r.status === 'delayed' ? 'var(--status-warn)' : r.status === 'completed' ? '#fff' : 'var(--text-body)'
    }
  }, r.percent, "%"))))), milestones.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '150px 1fr',
      gap: 10,
      alignItems: 'center',
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 10,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, "Milestones"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 10
    }
  }, milestones.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    title: m.label,
    style: {
      position: 'absolute',
      top: 2,
      left: m.at / n * 100 + '%',
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: m.done ? 'var(--accent)' : 'var(--violet-200)'
    }
  })))));
}
Object.assign(__ds_scope, { GanttChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/GanttChart.jsx", error: String((e && e.message) || e) }); }

// components/data/LineChart.jsx
try { (() => {
function LineChart({
  series = [],
  labels = [],
  yTicks = [],
  height: heightProp = 150,
  style
}) {
  const height = Number(heightProp) || 150;
  const all = series.flatMap(s => s.points);
  const max = Math.max(...all, 1),
    min = 0;
  const w = 100,
    colors = ['var(--series-1)', 'var(--series-3)'];
  const x = i => i / Math.max(1, labels.length - 1) * w;
  const y = v => height - (v - min) / (max - min) * height;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      minWidth: 0,
      ...style
    }
  }, yTicks.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height,
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-faint)',
      textAlign: 'right'
    }
  }, yTicks.map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + w + ' ' + height,
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      width: '100%',
      height,
      overflow: 'visible'
    }
  }, yTicks.map((t, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: "0",
    x2: w,
    y1: i * height / (yTicks.length - 1),
    y2: i * height / (yTicks.length - 1),
    stroke: "var(--series-grid)",
    strokeWidth: "1",
    strokeDasharray: "2 3",
    vectorEffect: "non-scaling-stroke"
  })), series.map((s, si) => /*#__PURE__*/React.createElement("g", {
    key: si
  }, /*#__PURE__*/React.createElement("polyline", {
    points: s.points.map((p, i) => x(i) + ',' + y(p)).join(' '),
    fill: "none",
    stroke: colors[si % colors.length],
    strokeWidth: "2",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  }), s.points.map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i),
    cy: y(p),
    r: "3.5",
    fill: colors[si % colors.length],
    vectorEffect: "non-scaling-stroke"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6
    }
  }, labels.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-faint)'
    }
  }, l)))));
}
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/LineChart.jsx", error: String((e && e.message) || e) }); }

// components/data/MiniStatCell.jsx
try { (() => {
const tones = {
  ok: {
    background: 'var(--status-ok-bg)',
    color: 'var(--status-ok)'
  },
  accent: {
    background: 'var(--accent-softer)',
    color: 'var(--accent-strong)'
  },
  warn: {
    background: 'var(--status-warn-bg)',
    color: 'var(--status-warn)'
  },
  neutral: {
    background: 'var(--surface-sunken)',
    color: 'var(--text-heading)'
  }
};
function MiniStatCell({
  label,
  value,
  tone = 'neutral',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '8px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0,
      background: tones[tone].background,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-metric-md)',
      fontFamily: 'var(--font-sans)',
      color: tones[tone].color
    }
  }, value));
}
Object.assign(__ds_scope, { MiniStatCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MiniStatCell.jsx", error: String((e && e.message) || e) }); }

// components/data/PhaseTracker.jsx
try { (() => {
function PhaseTracker({
  phases = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + phases.length + ', minmax(0,1fr))',
      gap: 8,
      ...style
    }
  }, phases.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      color: p.done || p.active ? 'var(--text-body)' : 'var(--text-faint)',
      textAlign: 'center',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, p.label), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 5,
      borderRadius: 'var(--radius-pill)',
      background: p.done ? 'var(--accent)' : p.active ? 'var(--violet-300)' : 'var(--track)'
    }
  }))));
}
Object.assign(__ds_scope, { PhaseTracker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/PhaseTracker.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value: valueProp = 0,
  label,
  percentLabel,
  height: heightProp = 5,
  tone = 'accent',
  style
}) {
  const value = Number(valueProp) || 0;
  const height = Number(heightProp) || 5;
  const tones = {
    accent: 'var(--accent)',
    soft: 'var(--violet-300)',
    ok: 'var(--status-ok)',
    warn: 'var(--status-warn)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      ...style
    }
  }, (label || percentLabel !== undefined) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)',
      flex: '0 0 auto'
    }
  }, percentLabel ?? value + '%')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--track)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: Math.max(0, Math.min(100, value)) + '%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: tones[tone],
      transition: 'width var(--dur-chart) var(--ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/StatTile.jsx
try { (() => {
function StatTile({
  label,
  value,
  delta,
  direction = 'up',
  style
}) {
  const good = direction === 'up';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--accent-softer)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: good ? 'trend_up' : 'trend_down',
    size: 14,
    color: good ? 'var(--status-ok)' : 'var(--status-risk)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-metric-md)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-accent)'
    }
  }, value), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      color: good ? 'var(--status-ok)' : 'var(--status-risk)'
    }
  }, delta)));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/data/WorkStatusBars.jsx
try { (() => {
function WorkStatusBars({
  total: totalProp = 60,
  done: doneProp = 0.45,
  inProgress: inProgressProp = 0.3,
  height: heightProp = 26,
  style
}) {
  const total = Number(totalProp) || 60;
  const done = Number(doneProp) || 0;
  const inProgress = Number(inProgressProp) || 0;
  const height = Number(heightProp) || 26;
  const bars = Array.from({
    length: total
  });
  const doneN = Math.round(total * done),
    progN = Math.round(total * inProgress);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      alignItems: 'flex-end',
      height,
      minWidth: 0,
      ...style
    }
  }, bars.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: '100%',
      borderRadius: 1,
      background: i < doneN ? 'var(--accent-strong)' : i < doneN + progN ? 'var(--violet-300)' : 'var(--violet-100)'
    }
  })));
}
Object.assign(__ds_scope, { WorkStatusBars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/WorkStatusBars.jsx", error: String((e && e.message) || e) }); }

// components/feedback/AlertBanner.jsx
try { (() => {
const tones = {
  info: {
    bg: 'var(--accent-softer)',
    ink: 'var(--accent-strong)',
    icon: 'info'
  },
  warn: {
    bg: 'var(--status-warn-bg)',
    ink: 'var(--status-warn)',
    icon: 'alert_circle'
  },
  risk: {
    bg: 'var(--status-risk-bg)',
    ink: 'var(--status-risk)',
    icon: 'alert_circle'
  },
  ok: {
    bg: 'var(--status-ok-bg)',
    ink: 'var(--status-ok)',
    icon: 'check_circle'
  }
};
function AlertBanner({
  tone = 'info',
  title,
  detail,
  style
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      background: t.bg,
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 15,
    color: t.ink,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      font: 'var(--text-label)',
      fontFamily: 'var(--font-sans)',
      color: t.ink
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, detail)));
}
Object.assign(__ds_scope, { AlertBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/AlertBanner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ApprovalRow.jsx
try { (() => {
function ApprovalRow({
  icon = 'file',
  label,
  count,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      width: '100%',
      textAlign: 'left',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '9px 11px',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, count));
}
Object.assign(__ds_scope, { ApprovalRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ApprovalRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/FileProgressRow.jsx
try { (() => {
function FileProgressRow({
  heading,
  name,
  size,
  percent: percentProp = 0,
  statusLabel = 'Uploading…',
  style
}) {
  const percent = Number(percentProp) || 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 0,
      background: 'var(--surface-card)',
      ...style
    }
  }, heading && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h4)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, heading), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 32,
      borderRadius: 'var(--radius-xs)',
      background: 'var(--violet-300)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "file",
    size: 15,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-heading)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, size))), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: percent,
    label: statusLabel
  }));
}
Object.assign(__ds_scope, { FileProgressRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/FileProgressRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/InsightTile.jsx
try { (() => {
function InsightTile({
  icon = 'trend_down',
  tone = 'ok',
  label,
  value,
  note,
  style
}) {
  const ink = tone === 'ok' ? 'var(--status-ok)' : tone === 'warn' ? 'var(--status-warn)' : tone === 'risk' ? 'var(--status-risk)' : 'var(--accent)';
  const bg = tone === 'ok' ? 'var(--status-ok-bg)' : tone === 'warn' ? 'var(--status-warn-bg)' : tone === 'risk' ? 'var(--status-risk-bg)' : 'var(--accent-softer)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--pad-card)',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-icon-tile)',
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: ink
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-metric-md)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, value))), note && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, note));
}
Object.assign(__ds_scope, { InsightTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/InsightTile.jsx", error: String((e && e.message) || e) }); }

// components/feedback/TaskRow.jsx
try { (() => {
function TaskRow({
  title,
  meta,
  tone = 'tint',
  dot = false,
  badge,
  style
}) {
  const bg = tone === 'tint' ? 'var(--surface-tint)' : 'var(--surface-sunken)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 'var(--radius-md)',
      padding: '9px 11px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-accent)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--accent)',
      flex: '0 0 auto'
    }
  })), (meta || badge) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 11,
    color: "var(--text-faint)"
  }), meta, badge));
}
Object.assign(__ds_scope, { TaskRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TaskRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/VendorPaymentCard.jsx
try { (() => {
function VendorPaymentCard({
  vendor,
  scope,
  paid,
  pending,
  due,
  status = 'Pending',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 0,
      background: 'var(--surface-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-label)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, vendor), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, scope)), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "warn"
  }, status)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, "Paid"), /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-label)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, paid)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, "Pending"), /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-label)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, pending))), due && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      color: 'var(--status-warn)'
    }
  }, due));
}
Object.assign(__ds_scope, { VendorPaymentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/VendorPaymentCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function BottomNav({
  items = [],
  active,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-hairline)',
      padding: '8px 6px 10px',
      ...style
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => onSelect && onSelect(it.id),
    "aria-label": it.label,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      minWidth: 44,
      minHeight: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 20,
    color: it.id === active ? 'var(--accent)' : 'var(--text-faint)'
  }))));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MobileAppBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MobileAppBar({
  title = 'HR Analytics',
  user,
  onMenu,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onMenu,
    "aria-label": "Menu",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 4,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "menu",
    size: 18,
    color: "var(--text-body)"
  })), /*#__PURE__*/React.createElement("strong", {
    style: {
      flex: 1,
      minWidth: 0,
      font: 'var(--text-h4)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 'var(--radius-md)',
      background: 'var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell",
    size: 14,
    color: "#fff"
  })), user && /*#__PURE__*/React.createElement(__ds_scope.Avatar, _extends({}, user, {
    size: 28
  })));
}
Object.assign(__ds_scope, { MobileAppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MobileAppBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PageHeader.jsx
try { (() => {
function PageHeader({
  title,
  subtitle,
  actions,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: '12px 16px',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--text-h4)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      font: 'var(--text-caption)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, actions));
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/RangeTabs.jsx
try { (() => {
function RangeTabs({
  options = ['1W', '1M', '6M', '1Y'],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2,
      background: 'var(--accent-softer)',
      borderRadius: 'var(--radius-sm)',
      padding: 2,
      ...style
    }
  }, options.map(o => {
    const on = o === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      onClick: () => onChange && onChange(o),
      style: {
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-xs)',
        padding: '3px 7px',
        font: 'var(--text-micro)',
        fontFamily: 'var(--font-sans)',
        background: on ? 'var(--accent)' : 'transparent',
        color: on ? '#fff' : 'var(--text-muted)',
        transition: 'var(--transition-control)'
      }
    }, o);
  }));
}
Object.assign(__ds_scope, { RangeTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/RangeTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
const NEXAFLOW_NAV = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'grid'
}, {
  id: 'projects',
  label: 'Projects',
  icon: 'folder'
}, {
  id: 'materials',
  label: 'Materials',
  icon: 'box'
}, {
  id: 'timeline',
  label: 'Timeline',
  icon: 'calendar'
}, {
  id: 'budget',
  label: 'Budget',
  icon: 'dollar'
}, {
  id: 'approvals',
  label: 'Approvals',
  icon: 'check_square'
}, {
  id: 'team',
  label: 'Team',
  icon: 'users'
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'settings'
}, {
  id: 'logout',
  label: 'Logout',
  icon: 'logout'
}];
function SidebarNav({
  items = NEXAFLOW_NAV,
  active,
  onSelect,
  brand,
  width: widthProp = 148,
  style
}) {
  const width = Number(widthProp) || 148;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width,
      flex: '0 0 auto',
      background: 'var(--surface-rail)',
      borderRight: '1px solid var(--border-hairline)',
      padding: '18px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      ...style
    }
  }, brand, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("li", {
      key: it.id
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onSelect && onSelect(it.id),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        padding: '8px 10px',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        borderRadius: 'var(--radius-md)',
        background: on ? 'var(--accent)' : 'transparent',
        color: on ? 'var(--text-on-accent)' : 'var(--text-body)',
        font: 'var(--text-body-sm)',
        fontFamily: 'var(--font-sans)',
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 15,
      color: on ? 'currentColor' : 'var(--text-muted)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, it.label), on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'currentColor'
      }
    })));
  })));
}
Object.assign(__ds_scope, { NEXAFLOW_NAV, SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopBar({
  user,
  team = [],
  theme = 'light',
  onToggleTheme,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 16px',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SearchField, {
    style: {
      flex: 1,
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Messages"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message",
    size: 16
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Notifications",
    badge: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell",
    size: 16
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Toggle theme",
    onClick: onToggleTheme
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: theme === 'dark' ? 'moon' : 'sun',
    size: 16
  })), team.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.AvatarGroup, {
    people: team,
    size: 26,
    max: 3
  }), user && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      paddingLeft: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, _extends({}, user, {
    size: 30
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-accent)'
    }
  }, user.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, user.role))));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nexaflow-mobile/MobileApp.jsx
try { (() => {
const {
  Card,
  Button,
  Icon,
  MobileAppBar,
  BottomNav,
  StatTile,
  BarChart,
  ChartLegend,
  DonutGauge,
  BudgetSplitLegend,
  InsightTile,
  ProgressBar,
  MiniStatCell,
  TaskRow,
  WorkStatusBars
} = window.NexaFlowDesignSystem_fd0681;
const TABS = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'grid'
}, {
  id: 'projects',
  label: 'Projects',
  icon: 'folder'
}, {
  id: 'materials',
  label: 'Materials',
  icon: 'box'
}, {
  id: 'timeline',
  label: 'Timeline',
  icon: 'calendar'
}, {
  id: 'team',
  label: 'Team',
  icon: 'users'
}];
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "status"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 4,
      alignItems: 'center',
      color: 'var(--text-heading)'
    }
  }, "\u25AE\u25AE\u25AE \u25BE \u25B0"));
}
function Phone({
  tab,
  setTab,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(MobileAppBar, {
    user: {
      name: 'Sarah Chen'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, children), /*#__PURE__*/React.createElement(BottomNav, {
    items: TABS,
    active: tab,
    onSelect: setTab
  }));
}
function DashboardPhone() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    title: "Project Performance Analytics",
    meta: "Task completion, timeline, and budget tracking",
    padding: 12
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "On schedule",
    value: "92%",
    delta: "+5%"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Tasks Completed",
    value: "156",
    delta: "+12%"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Budget Variance",
    value: "-3%",
    delta: "\xB12%",
    direction: "down"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Budget Variance",
    value: "-3%",
    delta: "\xB12%",
    direction: "down"
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Project Performance Chart",
    padding: 12
  }, /*#__PURE__*/React.createElement(BarChart, {
    stacked: true,
    height: 104,
    barWidth: 12,
    yTicks: ['100', '75', '50', '25', '0'],
    data: window.NF_PERF_BARS_M
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Architect's Work statistics",
    padding: 12
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)'
    }
  }, "Work status"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-metric-lg)',
      color: 'var(--text-heading)'
    }
  }, "75%"), /*#__PURE__*/React.createElement(WorkStatusBars, {
    total: 44,
    done: 0.45,
    inProgress: 0.3
  }), /*#__PURE__*/React.createElement(ChartLegend, {
    align: "flex-start",
    items: [{
      label: 'Total'
    }, {
      label: 'Done',
      color: 'var(--series-2)'
    }, {
      label: 'In progress',
      color: 'var(--series-4)'
    }]
  })));
}
function BudgetPhone() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    padding: 12
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      font: 'var(--text-h4)',
      color: 'var(--text-heading)'
    }
  }, "Budget Overview"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(DonutGauge, {
    value: 73,
    sublabel: "Allocated",
    size: 126,
    thickness: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)'
    }
  }, "Total Budget"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-metric-lg)',
      color: 'var(--text-heading)'
    }
  }, "\u20B985L"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-micro)',
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, "\u20B966.3L allocated")), /*#__PURE__*/React.createElement(BudgetSplitLegend, {
    items: [{
      label: 'Civil',
      percent: 35
    }, {
      label: 'MEP',
      percent: 25,
      color: 'var(--series-2)'
    }, {
      label: 'Interiors',
      percent: 28,
      color: 'var(--series-3)'
    }, {
      label: 'Contingency',
      percent: 12,
      color: 'var(--series-4)'
    }]
  })), /*#__PURE__*/React.createElement(InsightTile, {
    icon: "trend_down",
    tone: "ok",
    label: "Under Budget",
    value: "\u20B91.8L",
    note: "2.1% savings"
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    title: "Total Project Budget",
    padding: 12
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, [['Total Allocated', '₹85L'], ['Total Spent', '₹66.3L'], ['Remaining', '₹18.7L'], ['Utilized', '78%']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-micro)',
      fontWeight: 400,
      color: 'rgba(255,255,255,.8)'
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-metric-md)'
    }
  }, b))))));
}
function TimelinePhone() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    title: "Progress Overview",
    padding: 12
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Design Completion",
    value: 92
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Material Board",
    value: 85
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Drawings",
    value: 75
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Overall Timeline",
    value: 65
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(MiniStatCell, {
    label: "Completed",
    value: "5",
    tone: "ok"
  }), /*#__PURE__*/React.createElement(MiniStatCell, {
    label: "Active",
    value: "3",
    tone: "accent"
  }), /*#__PURE__*/React.createElement(MiniStatCell, {
    label: "Delayed",
    value: "1",
    tone: "warn"
  }), /*#__PURE__*/React.createElement(MiniStatCell, {
    label: "Pending",
    value: "2"
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Upcoming Tasks",
    padding: 12
  }, /*#__PURE__*/React.createElement(TaskRow, {
    title: "Review Electrical Drawings",
    meta: "May 28, 2026 \xB7 Amit Patel",
    dot: true
  }), /*#__PURE__*/React.createElement(TaskRow, {
    title: "Finalize Furniture Selection",
    meta: "May 30, 2026 \xB7 Priya Sharma",
    dot: true
  }), /*#__PURE__*/React.createElement(TaskRow, {
    title: "Client Presentation Prep",
    meta: "May 2, 2026 \xB7 Rajesh Kumar",
    dot: true
  })));
}
window.NF_PERF_BARS_M = [{
  label: 'Jan',
  values: [18, 8, 5]
}, {
  label: 'Feb',
  values: [24, 9, 6]
}, {
  label: 'Mar',
  values: [30, 10, 7]
}, {
  label: 'Apr',
  values: [36, 11, 7]
}, {
  label: 'May',
  values: [44, 12, 8]
}, {
  label: 'Jun',
  values: [52, 13, 8]
}, {
  label: 'Jul',
  values: [60, 14, 9]
}];
function MobileKit() {
  const [a, setA] = React.useState('dashboard');
  const [b, setB] = React.useState('projects');
  const [c, setC] = React.useState('timeline');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Phone, {
    tab: a,
    setTab: setA
  }, /*#__PURE__*/React.createElement(DashboardPhone, null)), /*#__PURE__*/React.createElement(Phone, {
    tab: b,
    setTab: setB
  }, /*#__PURE__*/React.createElement(BudgetPhone, null)), /*#__PURE__*/React.createElement(Phone, {
    tab: c,
    setTab: setC
  }, /*#__PURE__*/React.createElement(TimelinePhone, null)));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(MobileKit, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nexaflow-mobile/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nexaflow-web/App.jsx
try { (() => {
const {
  SidebarNav,
  TopBar,
  PageHeader,
  Button,
  Logo,
  NEXAFLOW_NAV
} = window.NexaFlowDesignSystem_fd0681;
function App() {
  const [screen, setScreen] = React.useState('dashboard');
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const label = (NEXAFLOW_NAV.find(n => n.id === screen) || {}).label || 'Dashboard';
  const body = screen === 'dashboard' ? /*#__PURE__*/React.createElement(window.DashboardScreen, null) : screen === 'budget' ? /*#__PURE__*/React.createElement(window.BudgetScreen, null) : screen === 'timeline' ? /*#__PURE__*/React.createElement(window.TimelineScreen, null) : /*#__PURE__*/React.createElement(window.PlaceholderScreen, {
    label: label
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      minHeight: 0,
      background: 'var(--bg-app)'
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    items: NEXAFLOW_NAV,
    active: screen,
    onSelect: id => setScreen(id === 'logout' ? 'dashboard' : id),
    brand: /*#__PURE__*/React.createElement(Logo, {
      height: 58
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    user: window.NF_USER,
    team: window.NF_TEAM,
    theme: theme,
    onToggleTheme: () => setTheme(t => t === 'light' ? 'dark' : 'light')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: 'auto',
      padding: 'var(--gap-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-card)'
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Residential Villa \u2013 Phase 2",
    subtitle: 'HR Analytics · ' + label,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "+ Add Project"), /*#__PURE__*/React.createElement(Button, null, "Import Data"))
  }), body)));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nexaflow-web/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nexaflow-web/BudgetScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Card,
  Button,
  Icon,
  DonutGauge,
  BudgetSplitLegend,
  BarChart,
  LineChart,
  ChartLegend,
  InsightTile,
  VendorPaymentCard,
  IconButton
} = window.NexaFlowDesignSystem_fd0681;
function BudgetScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.78fr 1.5fr .82fr',
      gap: 'var(--gap-card)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Budget Overview"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(DonutGauge, {
    value: 73,
    sublabel: "Allocated",
    size: 132,
    thickness: 13
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-body)'
    }
  }, "Total Budget"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-metric-lg)',
      color: 'var(--text-heading)'
    }
  }, "\u20B985L"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-micro)',
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, "\u20B966.3L allocated")), /*#__PURE__*/React.createElement(BudgetSplitLegend, {
    items: [{
      label: 'Civil',
      percent: 35
    }, {
      label: 'MEP',
      percent: 25,
      color: 'var(--series-2)'
    }, {
      label: 'Interiors',
      percent: 28,
      color: 'var(--series-3)'
    }, {
      label: 'Contingency',
      percent: 12,
      color: 'var(--series-4)'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-card)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    title: "Total Project Budget",
    padding: "var(--pad-card-lg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 16
    }
  }, [['Total Allocated', '₹85L', '100% of budget'], ['Total Spent', '₹66.3L', '78% utilized'], ['Remaining', '₹18.7L', '22% available']].map(([a, b, c]) => /*#__PURE__*/React.createElement("div", {
    key: a
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'rgba(255,255,255,.82)'
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-metric-lg)',
      margin: '3px 0'
    }
  }, b), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-micro)',
      fontWeight: 400,
      color: 'rgba(255,255,255,.78)'
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '78%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: '#fff'
    }
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Category Breakdown"
  }, /*#__PURE__*/React.createElement(BarChart, {
    height: 150,
    barWidth: 11,
    rotateLabels: true,
    yTicks: ['₹32L', '₹24L', '₹16L', '₹8L', '₹0L'],
    data: window.NF_CATEGORY
  }), /*#__PURE__*/React.createElement(ChartLegend, {
    items: [{
      label: 'Actual Cost'
    }, {
      label: 'Planned Cost',
      color: 'var(--series-3)'
    }],
    style: {
      marginTop: 22
    }
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Change Orders & Variations",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Add Change Order")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, "The source boards show this panel's header only \u2014 contents intentionally left blank."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-card)'
    }
  }, /*#__PURE__*/React.createElement(InsightTile, {
    icon: "trend_down",
    tone: "ok",
    label: "Under Budget",
    value: "\u20B91.8L",
    note: "2.1% savings"
  }), /*#__PURE__*/React.createElement(InsightTile, {
    icon: "alert_circle",
    tone: "warn",
    label: "Pending  Approvals",
    value: "2",
    note: "Change orders awaiting"
  }), /*#__PURE__*/React.createElement(Card, {
    title: "Monthly Cashflow"
  }, /*#__PURE__*/React.createElement(LineChart, {
    height: 132,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    yTicks: ['₹60L', '₹45L', '₹30L', '₹15L', '₹0L'],
    series: [{
      name: 'Actual',
      points: [6, 10, 16, 21, 31, 43, 53]
    }, {
      name: 'Planned',
      points: [7, 11, 15, 23, 33, 41, 50]
    }]
  }), /*#__PURE__*/React.createElement(ChartLegend, {
    items: [{
      label: 'Actual'
    }, {
      label: 'Planned',
      color: 'var(--series-3)'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Vendor Payments",
    action: /*#__PURE__*/React.createElement(IconButton, {
      label: "Export"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }))
  }, window.NF_VENDORS.map(v => /*#__PURE__*/React.createElement(VendorPaymentCard, _extends({
    key: v.vendor
  }, v))))));
}
Object.assign(window, {
  BudgetScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nexaflow-web/BudgetScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nexaflow-web/DashboardScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Icon,
  DonutGauge,
  StatTile,
  ProgressBar,
  BarChart,
  ChartLegend,
  PhaseTracker,
  ActivityHeatmap,
  WorkStatusBars,
  AlertBanner,
  FileProgressRow,
  ApprovalRow,
  TaskRow,
  RangeTabs
} = window.NexaFlowDesignSystem_fd0681;
function DashboardScreen() {
  const [range, setRange] = React.useState('1Y');
  const [approvals, setApprovals] = React.useState(3);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .72fr 1.35fr',
      gap: 'var(--gap-card)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "",
    style: {
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(DonutGauge, {
    value: 65,
    sublabel: "Complete",
    size: 148,
    thickness: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-heading)'
    }
  }, "Current Phase"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-accent)',
      marginTop: 3
    }
  }, "Design Development")), /*#__PURE__*/React.createElement(PhaseTracker, {
    phases: [{
      label: 'Concept',
      done: true
    }, {
      label: 'Scheme',
      done: true
    }, {
      label: 'Design',
      done: true
    }, {
      label: 'GFC'
    }, {
      label: 'Execution'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Pending Approvals",
    style: {
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-metric-xl)',
      color: 'var(--text-heading)'
    }
  }, String(approvals).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, "Items Awaiting")), /*#__PURE__*/React.createElement(ApprovalRow, {
    icon: "file",
    label: "Design Files",
    count: 1
  }), /*#__PURE__*/React.createElement(ApprovalRow, {
    icon: "package",
    label: "Material",
    count: 2
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "soft",
    onClick: () => setApprovals(0),
    style: {
      width: '100%'
    }
  }, "Review All")), /*#__PURE__*/React.createElement(Card, {
    title: "Project Performance Analytics",
    meta: "Task completion, timeline, and budget tracking",
    action: /*#__PURE__*/React.createElement(RangeTabs, {
      value: range,
      onChange: setRange
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "On schedule",
    value: "92%",
    delta: "+5%"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Tasks Completed",
    value: "156",
    delta: "+12%"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Budget Variance",
    value: "-3%",
    delta: "\xB12%",
    direction: "down"
  })), /*#__PURE__*/React.createElement(BarChart, {
    stacked: true,
    height: 118,
    barWidth: 16,
    yTicks: ['100', '75', '50', '25', '0'],
    data: window.NF_PERF_BARS
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Architect's Work statistics",
    style: {
      gridColumn: 'span 1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-body)'
    }
  }, "Work status"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-metric-lg)',
      color: 'var(--text-heading)'
    }
  }, "75%")), /*#__PURE__*/React.createElement(ChartLegend, {
    align: "flex-end",
    items: [{
      label: 'Total'
    }, {
      label: 'Done',
      color: 'var(--series-2)'
    }, {
      label: 'In progress',
      color: 'var(--series-4)'
    }]
  })), /*#__PURE__*/React.createElement(WorkStatusBars, {
    total: 64,
    done: 0.45,
    inProgress: 0.3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(FileProgressRow, {
    heading: "In Progress",
    name: "Elevation details.pdf",
    size: "5.1Mb",
    percent: 45
  }), /*#__PURE__*/React.createElement(FileProgressRow, {
    heading: "Completed",
    name: "Scheme R1.pdf",
    size: "8.2Mb",
    percent: 100
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-heading)',
      marginBottom: 10
    }
  }, "Drawing Statistics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--surface-tint)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 'var(--radius-md)',
      background: 'var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file",
    size: 15,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-heading)'
    }
  }, "Architecture drawing set"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, "3 drawings pending"))))), /*#__PURE__*/React.createElement(Card, {
    title: "Project Timeline"
  }, /*#__PURE__*/React.createElement(AlertBanner, {
    tone: "info",
    title: "3-day delay detected",
    detail: "Schematic Stage delayed due to client"
  }), window.NF_STAGES.map(s => /*#__PURE__*/React.createElement(ProgressBar, {
    key: s.label,
    label: s.label,
    value: s.value
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Calendar & Tasks",
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        font: 'var(--text-caption)',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 13,
      color: "var(--text-muted)"
    }), "November 2025")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-tint)',
      borderRadius: 'var(--radius-md)',
      padding: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(DonutGauge, {
    value: 65,
    size: 74,
    thickness: 9,
    caption: "65%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-body)'
    }
  }, "Today's Progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--text-heading)',
      margin: '2px 0 6px'
    }
  }, "2 of 5 completed"), /*#__PURE__*/React.createElement(ChartLegend, {
    align: "flex-start",
    items: [{
      label: '3 Pending',
      color: 'var(--series-3)'
    }, {
      label: '2 Done'
    }]
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-heading)',
      marginBottom: 8
    }
  }, "Activity Heatmap"), /*#__PURE__*/React.createElement(ActivityHeatmap, {
    days: window.NF_WEEK
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-heading)',
      marginBottom: 8
    }
  }, "Today's Schedule"), /*#__PURE__*/React.createElement(TaskRow, {
    title: "Review floor plan revisions",
    meta: "09:00 AM",
    badge: /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, "Design")
  }))));
}
Object.assign(window, {
  DashboardScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nexaflow-web/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nexaflow-web/PlaceholderScreen.jsx
try { (() => {
const {
  Card,
  Icon
} = window.NexaFlowDesignSystem_fd0681;

/* The source case study only documents Dashboard, Budget and Timeline.
   The remaining rail destinations are left deliberately empty rather than invented. */
function PlaceholderScreen({
  label
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      minHeight: 320,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 22,
    color: "var(--text-faint)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      maxWidth: 420
    }
  }, "Not documented in the supplied NexaFlow case study. Left blank on purpose \u2014 ask the designer for the ", label.toLowerCase(), " screens rather than inventing a layout."));
}
Object.assign(window, {
  PlaceholderScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nexaflow-web/PlaceholderScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nexaflow-web/TimelineScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Card,
  GanttChart,
  ChartLegend,
  ProgressBar,
  MiniStatCell,
  TaskRow
} = window.NexaFlowDesignSystem_fd0681;
function TimelineScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2.1fr .85fr',
      gap: 'var(--gap-card)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Timeline Gantt Chart",
    action: /*#__PURE__*/React.createElement(ChartLegend, {
      align: "flex-end",
      items: [{
        label: 'Completed'
      }, {
        label: 'On-track',
        color: 'var(--series-3)'
      }, {
        label: 'Delayed',
        color: 'var(--status-warn)'
      }, {
        label: 'Pending',
        color: 'var(--track)'
      }]
    })
  }, /*#__PURE__*/React.createElement(GanttChart, {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    rows: window.NF_GANTT,
    milestones: [{
      at: 1,
      done: true
    }, {
      at: 2,
      done: true
    }, {
      at: 4.2,
      done: true
    }, {
      at: 5,
      done: true
    }, {
      at: 6.6
    }, {
      at: 7.8
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-card)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Progress Overview"
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Design Completion",
    value: 92
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Material Board",
    value: 85
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Drawings",
    value: 75
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Overall Timeline",
    value: 65
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(MiniStatCell, {
    label: "Completed",
    value: "5",
    tone: "ok"
  }), /*#__PURE__*/React.createElement(MiniStatCell, {
    label: "Active",
    value: "3",
    tone: "accent"
  }), /*#__PURE__*/React.createElement(MiniStatCell, {
    label: "Delayed",
    value: "1",
    tone: "warn"
  }), /*#__PURE__*/React.createElement(MiniStatCell, {
    label: "Pending",
    value: "2"
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Upcoming Tasks"
  }, window.NF_UPCOMING.map(t => /*#__PURE__*/React.createElement(TaskRow, _extends({
    key: t.title
  }, t, {
    dot: true
  }))))));
}
Object.assign(window, {
  TimelineScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nexaflow-web/TimelineScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nexaflow-web/data.jsx
try { (() => {
const NF_TEAM = [{
  name: 'Amit Patel'
}, {
  name: 'Priya Sharma'
}, {
  name: 'Rajesh Kumar'
}];
const NF_USER = {
  name: 'Sarah Chen',
  role: 'Project Manager'
};
const NF_PERF_BARS = [{
  label: 'Jan',
  values: [18, 8, 5]
}, {
  label: 'Feb',
  values: [24, 9, 6]
}, {
  label: 'Mar',
  values: [30, 10, 7]
}, {
  label: 'Apr',
  values: [36, 11, 7]
}, {
  label: 'May',
  values: [44, 12, 8]
}, {
  label: 'Jun',
  values: [52, 13, 8]
}, {
  label: 'Jul',
  values: [60, 14, 9]
}];
const NF_STAGES = [{
  label: 'Concept Design',
  value: 100
}, {
  label: 'Schematic Design',
  value: 100
}, {
  label: 'Architectural Design',
  value: 65
}, {
  label: 'GFC Drawings',
  value: 0
}, {
  label: 'Interior Design',
  value: 0
}, {
  label: 'Execution',
  value: 0
}];
const NF_WEEK = [{
  weekday: 'Mon',
  date: 18,
  level: 3,
  dots: 2
}, {
  weekday: 'Tue',
  date: 19,
  level: 3,
  dots: 3
}, {
  weekday: 'Wed',
  date: 20,
  level: 1,
  dots: 1
}, {
  weekday: 'Thu',
  date: 21,
  level: 3,
  dots: 3
}, {
  weekday: 'Fri',
  date: 22,
  level: 1,
  dots: 2
}, {
  weekday: 'Sat',
  date: 23,
  level: 0,
  dots: 0
}, {
  weekday: 'Sun',
  date: 24,
  level: 1,
  dots: 2
}];
const NF_CATEGORY = [{
  label: 'Civil',
  values: [31, 29]
}, {
  label: 'Carpentry',
  values: [16, 19]
}, {
  label: 'Electrical',
  values: [12, 11]
}, {
  label: 'Plumbing',
  values: [8, 9]
}, {
  label: 'Furniture',
  values: [16, 18]
}, {
  label: 'Materials',
  values: [11, 13]
}, {
  label: 'Labor',
  values: [5, 6]
}, {
  label: 'Contingency',
  values: [3, 2]
}];
const NF_VENDORS = [{
  vendor: 'Marble Italia',
  scope: 'Material Supply',
  paid: '₹12L',
  pending: '₹3L',
  due: 'Due: Dec 5, 2024'
}, {
  vendor: 'Wood Craft Co.',
  scope: 'Installation',
  paid: '₹8.4L',
  pending: '₹2.1L',
  due: 'Due: Dec 18, 2024'
}, {
  vendor: 'Lumen Electricals',
  scope: 'MEP',
  paid: '₹6.2L',
  pending: '₹1.4L',
  due: 'Due: Jan 9, 2025'
}];
const NF_GANTT = [{
  label: 'Concept Design',
  start: 0,
  span: 1.1,
  status: 'completed'
}, {
  label: 'Space Planning',
  start: 0.6,
  span: 0.9,
  status: 'completed'
}, {
  label: 'Moodboards',
  start: 1.1,
  span: 1,
  status: 'completed'
}, {
  label: '3D Visualization',
  start: 1.8,
  span: 1.5,
  status: 'completed'
}, {
  label: 'Material Selection',
  start: 2.6,
  span: 1.8,
  status: 'completed'
}, {
  label: 'Working Drawing',
  start: 3.9,
  span: 1.4,
  status: 'ontrack',
  percent: 75
}, {
  label: 'Electrical & Plumbing',
  start: 4.6,
  span: 1.7,
  status: 'ontrack',
  percent: 60
}, {
  label: 'Furniture Layout',
  start: 5.6,
  span: 1.1,
  status: 'delayed',
  percent: 45
}, {
  label: 'Final Presentation',
  start: 6.4,
  span: 0.9,
  status: 'pending'
}, {
  label: 'Execution Phase',
  start: 6.9,
  span: 1.6,
  status: 'pending'
}];
const NF_UPCOMING = [{
  title: 'Review Electrical Drawings',
  meta: 'May 28, 2026 · Amit Patel'
}, {
  title: 'Finalize Furniture Selection',
  meta: 'May 30, 2026 · Priya Sharma'
}, {
  title: 'Client Presentation Prep',
  meta: 'May 2, 2026 · Rajesh Kumar'
}];
Object.assign(window, {
  NF_TEAM,
  NF_USER,
  NF_PERF_BARS,
  NF_STAGES,
  NF_WEEK,
  NF_CATEGORY,
  NF_VENDORS,
  NF_GANTT,
  NF_UPCOMING
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nexaflow-web/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.SegmentedToggle = __ds_scope.SegmentedToggle;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.ActivityHeatmap = __ds_scope.ActivityHeatmap;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.BudgetSplitLegend = __ds_scope.BudgetSplitLegend;

__ds_ns.ChartLegend = __ds_scope.ChartLegend;

__ds_ns.DonutGauge = __ds_scope.DonutGauge;

__ds_ns.GanttChart = __ds_scope.GanttChart;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.MiniStatCell = __ds_scope.MiniStatCell;

__ds_ns.PhaseTracker = __ds_scope.PhaseTracker;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.WorkStatusBars = __ds_scope.WorkStatusBars;

__ds_ns.AlertBanner = __ds_scope.AlertBanner;

__ds_ns.ApprovalRow = __ds_scope.ApprovalRow;

__ds_ns.FileProgressRow = __ds_scope.FileProgressRow;

__ds_ns.InsightTile = __ds_scope.InsightTile;

__ds_ns.TaskRow = __ds_scope.TaskRow;

__ds_ns.VendorPaymentCard = __ds_scope.VendorPaymentCard;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.MobileAppBar = __ds_scope.MobileAppBar;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.RangeTabs = __ds_scope.RangeTabs;

__ds_ns.NEXAFLOW_NAV = __ds_scope.NEXAFLOW_NAV;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
