/**
 * DashboardMock — clickable sample of an analytics dashboard, shown on the
 * Consulting page as a "development example". Sample numbers only; nothing
 * is fetched or stored. One series per chart (single hue, no legend box),
 * column marks capped at 24px, per-mark tooltip, and a table view.
 */
function DashboardMock() {
  const NAVY = '#1E3A5F';
  const NAVY_HOVER = '#3a679c';
  const INK = 'var(--zinc-950)';
  const MUTED = 'var(--neutral-600)';
  const GRID = 'var(--neutral-200)';

  const metrics = {
    sales:  { label: '売上',   unit: '万円' },
    visits: { label: 'アクセス', unit: '件' },
    orders: { label: '申込',   unit: '件' },
  };
  const periods = {
    week:  { label: '今週', cats: ['月', '火', '水', '木', '金', '土', '日'], per: '1日あたり', prev: '先週' },
    month: { label: '今月', cats: ['第1週', '第2週', '第3週', '第4週'], per: '1週あたり', prev: '先月' },
    year:  { label: '今年', cats: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], per: '1か月あたり', prev: '昨年' },
  };
  const data = {
    sales: {
      week: [42, 38, 51, 47, 63, 72, 55],
      month: [210, 245, 232, 268],
      year: [820, 760, 905, 980, 1040, 990, 1120, 1180, 1090, 1240, 1310, 1400],
    },
    visits: {
      week: [1240, 1180, 1410, 1360, 1620, 1890, 1530],
      month: [8200, 9100, 8800, 9700],
      year: [29800, 28400, 31200, 33500, 35100, 34200, 37800, 39600, 38100, 41900, 43800, 46200],
    },
    orders: {
      week: [18, 15, 22, 20, 27, 31, 24],
      month: [90, 104, 98, 118],
      year: [310, 290, 345, 372, 401, 380, 426, 449, 418, 470, 498, 533],
    },
  };
  const delta = {
    sales:  { week: 8.4, month: 5.1, year: 12.6 },
    visits: { week: 3.2, month: 6.8, year: 9.4 },
    orders: { week: 11.5, month: 4.3, year: 14.2 },
  };

  const [metric, setMetric] = React.useState('sales');
  const [period, setPeriod] = React.useState('week');
  const [table, setTable] = React.useState(false);
  const [hover, setHover] = React.useState(null);

  const vals = data[metric][period];
  const cats = periods[period].cats;
  const unit = metrics[metric].unit;
  const total = vals.reduce((a, b) => a + b, 0);
  const avg = Math.round(total / vals.length);
  const d = delta[metric][period];
  const maxI = vals.indexOf(Math.max(...vals));

  const fmt = n => n.toLocaleString('ja-JP');
  const axisFmt = n => (n >= 10000 ? `${n / 10000}万` : fmt(n));

  // geometry
  const W = 600, H = 250, L = 52, R = 12, T = 28, B = 30;
  const pw = W - L - R, ph = H - T - B;
  const rawMax = Math.max(...vals);
  const mag = Math.pow(10, Math.floor(Math.log10(rawMax)));
  const step = [1, 2, 2.5, 5, 10].map(s => s * mag / 2).find(s => Math.ceil(rawMax / s) <= 5) || mag;
  const yMax = Math.ceil(rawMax / step) * step;
  const ticks = []; for (let v = 0; v <= yMax + 0.001; v += step) ticks.push(Math.round(v));
  const slot = pw / vals.length;
  const bw = Math.min(24, slot * 0.6);
  const y = v => T + ph - (v / yMax) * ph;

  const seg = (on, onClick, label) => (
    <button key={label} onClick={onClick} style={{
      border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 13,
      padding: '7px 14px', borderRadius: 999, background: on ? NAVY : 'transparent', color: on ? '#fff' : INK,
    }}>{label}</button>
  );

  return (
    <div style={{ background: '#fff', border: '1px solid var(--neutral-200)', borderRadius: 14, overflow: 'hidden', boxShadow: '0 20px 40px rgba(9,9,11,0.10)' }}>
      {/* Window bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', background: 'var(--neutral-100)', borderBottom: '1px solid var(--neutral-200)' }}>
        {[0, 1, 2].map(i => <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--neutral-300)' }} />)}
        <span style={{ marginLeft: 8, fontSize: 12, color: MUTED }}>売上ダッシュボード（サンプル）</span>
      </div>

      <div style={{ padding: 'clamp(16px, 3vw, 28px)' }}>
        {/* Filters: one row above the content they scope */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 24px', alignItems: 'center' }}>
          <div role="group" aria-label="期間" style={{ display: 'flex', gap: 2, background: 'var(--neutral-100)', borderRadius: 999, padding: 3 }}>
            {Object.entries(periods).map(([k, p]) => seg(period === k, () => { setPeriod(k); setHover(null); }, p.label))}
          </div>
          <div role="group" aria-label="指標" style={{ display: 'flex', gap: 2, background: 'var(--neutral-100)', borderRadius: 999, padding: 3 }}>
            {Object.entries(metrics).map(([k, m]) => seg(metric === k, () => { setMetric(k); setHover(null); }, m.label))}
          </div>
        </div>

        {/* Stat tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 18 }}>
          {[
            [`${metrics[metric].label}の合計`, fmt(total), unit],
            [`${periods[period].per}の平均`, fmt(avg), unit],
            [`${periods[period].prev}との比較`, `${d >= 0 ? '+' : '−'}${Math.abs(d).toFixed(1)}`, '%'],
          ].map(([l, v, u], i) => (
            <div key={l} style={{ border: '1px solid var(--neutral-200)', borderRadius: 12, padding: '14px 16px' }}>
              <div style={{ fontSize: 12, color: MUTED }}>{l}</div>
              <div style={{ marginTop: 6, display: 'flex', alignItems: 'baseline', gap: 4 }}>
                {i === 2 && <span aria-hidden="true" style={{ fontSize: 12, color: INK }}>{d >= 0 ? '▲' : '▼'}</span>}
                <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 'clamp(18px, 2.4vw, 26px)', color: INK }}>{v}</span>
                <span style={{ fontSize: 12, color: MUTED }}>{u}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart card */}
        <div style={{ marginTop: 14, border: '1px solid var(--neutral-200)', borderRadius: 12, padding: '16px 16px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: INK }}>{metrics[metric].label}の推移</div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>{periods[period].label}・単位: {unit}</div>
            </div>
            <button onClick={() => setTable(t => !t)} style={{ border: '1px solid var(--neutral-300)', background: '#fff', borderRadius: 999, padding: '5px 12px', fontFamily: 'inherit', fontSize: 12, fontWeight: 700, color: INK, cursor: 'pointer' }}>{table ? 'グラフで見る' : '表で見る'}</button>
          </div>

          {!table && (
            <div style={{ position: 'relative', marginTop: 8 }}>
              <svg viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', width: '100%', height: 'auto' }} role="img" aria-label={`${metrics[metric].label}の推移を示す棒グラフ`}>
                {ticks.map(t => (
                  <g key={t}>
                    <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="#e5e5e5" strokeWidth="1" />
                    <text x={L - 8} y={y(t) + 4} textAnchor="end" fontSize="11" fill="#525252">{axisFmt(t)}</text>
                  </g>
                ))}
                {vals.map((v, i) => {
                  const cx = L + slot * i + slot / 2;
                  const top = y(v), h = T + ph - top, r = Math.min(4, h);
                  const on = hover === i;
                  return (
                    <g key={i}>
                      <path d={`M${cx - bw / 2},${T + ph} V${top + r} Q${cx - bw / 2},${top} ${cx - bw / 2 + r},${top} H${cx + bw / 2 - r} Q${cx + bw / 2},${top} ${cx + bw / 2},${top + r} V${T + ph} Z`} fill={on ? NAVY_HOVER : NAVY} />
                      {i === maxI && <text x={cx} y={top - 8} textAnchor="middle" fontSize="12" fontWeight="700" fill="#18181b">{fmt(v)}</text>}
                      <text x={cx} y={H - 10} textAnchor="middle" fontSize="11" fill="#525252">{cats[i]}</text>
                      <rect x={L + slot * i} y={T} width={slot} height={ph + 4} fill="transparent" tabIndex={0}
                        aria-label={`${cats[i]} ${fmt(v)}${unit}`}
                        onPointerMove={() => setHover(i)} onPointerLeave={() => setHover(null)}
                        onFocus={() => setHover(i)} onBlur={() => setHover(null)} style={{ outline: 'none' }} />
                    </g>
                  );
                })}
                <line x1={L} x2={W - R} y1={T + ph} y2={T + ph} stroke="#d4d4d4" strokeWidth="1" />
              </svg>
              {hover !== null && (
                <div style={{
                  position: 'absolute', pointerEvents: 'none', zIndex: 2,
                  left: `${((L + slot * hover + slot / 2) / W) * 100}%`, top: `${(y(vals[hover]) / H) * 100}%`,
                  transform: 'translate(-50%, calc(-100% - 12px))', background: '#18181b', color: '#fff',
                  borderRadius: 8, padding: '6px 10px', fontSize: 12, whiteSpace: 'nowrap',
                }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{fmt(vals[hover])}<span style={{ fontWeight: 400, fontSize: 11, marginLeft: 3 }}>{unit}</span></div>
                  <div style={{ opacity: 0.75, marginTop: 1 }}>{cats[hover]}</div>
                </div>
              )}
            </div>
          )}

          {table && (
            <div style={{ marginTop: 10, maxHeight: 260, overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead><tr>
                  <th style={{ textAlign: 'left', padding: '8px 0', color: MUTED, fontWeight: 700, borderBottom: '1px solid var(--neutral-200)' }}>{periods[period].label}</th>
                  <th style={{ textAlign: 'right', padding: '8px 0', color: MUTED, fontWeight: 700, borderBottom: '1px solid var(--neutral-200)' }}>{metrics[metric].label}（{unit}）</th>
                </tr></thead>
                <tbody>{vals.map((v, i) => (
                  <tr key={i}>
                    <td style={{ padding: '8px 0', borderBottom: '1px solid var(--neutral-200)', color: INK }}>{cats[i]}</td>
                    <td style={{ padding: '8px 0', borderBottom: '1px solid var(--neutral-200)', textAlign: 'right', color: INK, fontWeight: 700 }}>{fmt(v)}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

window.DashboardMock = DashboardMock;
