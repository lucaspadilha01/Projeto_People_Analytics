const NF_TEAM = [{ name: 'Amit Patel' }, { name: 'Priya Sharma' }, { name: 'Rajesh Kumar' }];
const NF_USER = { name: 'Sarah Chen', role: 'Project Manager' };

const NF_PERF_BARS = [
  { label: 'Jan', values: [18, 8, 5] }, { label: 'Feb', values: [24, 9, 6] },
  { label: 'Mar', values: [30, 10, 7] }, { label: 'Apr', values: [36, 11, 7] },
  { label: 'May', values: [44, 12, 8] }, { label: 'Jun', values: [52, 13, 8] },
  { label: 'Jul', values: [60, 14, 9] }
];

const NF_STAGES = [
  { label: 'Concept Design', value: 100 }, { label: 'Schematic Design', value: 100 },
  { label: 'Architectural Design', value: 65 }, { label: 'GFC Drawings', value: 0 },
  { label: 'Interior Design', value: 0 }, { label: 'Execution', value: 0 }
];

const NF_WEEK = [
  { weekday: 'Mon', date: 18, level: 3, dots: 2 }, { weekday: 'Tue', date: 19, level: 3, dots: 3 },
  { weekday: 'Wed', date: 20, level: 1, dots: 1 }, { weekday: 'Thu', date: 21, level: 3, dots: 3 },
  { weekday: 'Fri', date: 22, level: 1, dots: 2 }, { weekday: 'Sat', date: 23, level: 0, dots: 0 },
  { weekday: 'Sun', date: 24, level: 1, dots: 2 }
];

const NF_CATEGORY = [
  { label: 'Civil', values: [31, 29] }, { label: 'Carpentry', values: [16, 19] },
  { label: 'Electrical', values: [12, 11] }, { label: 'Plumbing', values: [8, 9] },
  { label: 'Furniture', values: [16, 18] }, { label: 'Materials', values: [11, 13] },
  { label: 'Labor', values: [5, 6] }, { label: 'Contingency', values: [3, 2] }
];

const NF_VENDORS = [
  { vendor: 'Marble Italia', scope: 'Material Supply', paid: '₹12L', pending: '₹3L', due: 'Due: Dec 5, 2024' },
  { vendor: 'Wood Craft Co.', scope: 'Installation', paid: '₹8.4L', pending: '₹2.1L', due: 'Due: Dec 18, 2024' },
  { vendor: 'Lumen Electricals', scope: 'MEP', paid: '₹6.2L', pending: '₹1.4L', due: 'Due: Jan 9, 2025' }
];

const NF_GANTT = [
  { label: 'Concept Design', start: 0, span: 1.1, status: 'completed' },
  { label: 'Space Planning', start: 0.6, span: 0.9, status: 'completed' },
  { label: 'Moodboards', start: 1.1, span: 1, status: 'completed' },
  { label: '3D Visualization', start: 1.8, span: 1.5, status: 'completed' },
  { label: 'Material Selection', start: 2.6, span: 1.8, status: 'completed' },
  { label: 'Working Drawing', start: 3.9, span: 1.4, status: 'ontrack', percent: 75 },
  { label: 'Electrical & Plumbing', start: 4.6, span: 1.7, status: 'ontrack', percent: 60 },
  { label: 'Furniture Layout', start: 5.6, span: 1.1, status: 'delayed', percent: 45 },
  { label: 'Final Presentation', start: 6.4, span: 0.9, status: 'pending' },
  { label: 'Execution Phase', start: 6.9, span: 1.6, status: 'pending' }
];

const NF_UPCOMING = [
  { title: 'Review Electrical Drawings', meta: 'May 28, 2026 · Amit Patel' },
  { title: 'Finalize Furniture Selection', meta: 'May 30, 2026 · Priya Sharma' },
  { title: 'Client Presentation Prep', meta: 'May 2, 2026 · Rajesh Kumar' }
];

Object.assign(window, { NF_TEAM, NF_USER, NF_PERF_BARS, NF_STAGES, NF_WEEK, NF_CATEGORY, NF_VENDORS, NF_GANTT, NF_UPCOMING });
