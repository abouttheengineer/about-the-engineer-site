/**
 * ReservationMock — clickable sample of a reservation / customer-ledger
 * system for shops and salons, shown on the Consulting page as a
 * "development example". Fictional names and sample data only; nothing is
 * fetched or stored. Tabs: 予約 (day grid, add / cancel) and 顧客 (ledger).
 */
function ReservationMock() {
  const NAVY = '#1E3A5F';
  const PALE = '#EAF1F7';
  const BOOKED = '#D3E2F1';
  const INK = 'var(--zinc-950)';
  const MUTED = 'var(--neutral-600)';
  const LINE = 'var(--neutral-200)';

  const days = [['月', 10], ['火', 11], ['水', 12], ['木', 13], ['金', 14]];
  const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  const staff = ['佐藤', '田中'];
  const menus = ['カット', 'カラー', 'トリートメント'];
  const customers = [
    { id: 1, name: '山田 花子', visits: 12, last: '10/28', note: 'カラーは明るめがお好み。' },
    { id: 2, name: '鈴木 美咲', visits: 7, last: '11/02', note: '予約の前日にリマインド希望。' },
    { id: 3, name: '高橋 健太', visits: 3, last: '10/15', note: 'カットは短めで、月1回ペース。' },
    { id: 4, name: '伊藤 さくら', visits: 21, last: '11/05', note: 'トリートメントを毎回ご利用。' },
    { id: 5, name: '渡辺 悠', visits: 1, last: '11/01', note: '初回のご来店。次回の案内を送付済み。' },
  ];
  const cname = id => customers.find(c => c.id === id).name;

  const [tab, setTab] = React.useState('book');
  const [day, setDay] = React.useState(0);
  const [bookings, setBookings] = React.useState({
    '0-11:00-0': { c: 1, m: 'カット' },
    '0-14:00-1': { c: 2, m: 'カラー' },
    '0-16:00-0': { c: 4, m: 'トリートメント' },
    '1-10:00-1': { c: 3, m: 'カット' },
    '2-13:00-0': { c: 5, m: 'カット' },
  });
  const [sel, setSel] = React.useState(null);
  const [fc, setFc] = React.useState(1);
  const [fm, setFm] = React.useState(menus[0]);
  const [msg, setMsg] = React.useState('');
  const [q, setQ] = React.useState('');
  const [open, setOpen] = React.useState(null);
  const panelRef = React.useRef(null);
  React.useEffect(() => {
    if (panelRef.current) panelRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [sel, msg]);

  const key = (t, s) => `${day}-${t}-${s}`;
  const dayCount = Object.keys(bookings).filter(k => k.startsWith(`${day}-`)).length;
  const parse = k => { const [d, t, s] = k.split('-'); return { d: +d, t, s: +s }; };

  const add = () => {
    setBookings(b => ({ ...b, [sel]: { c: +fc, m: fm } }));
    const { t } = parse(sel);
    setMsg(`${cname(+fc)} 様の予約を、${days[day][1]}日 ${t} に入れました。`);
    setSel(null);
  };
  const cancel = () => {
    setBookings(b => { const n = { ...b }; delete n[sel]; return n; });
    setMsg('予約をキャンセルしました。');
    setSel(null);
  };

  const pill = (on, onClick, label, k) => (
    <button key={k || label} onClick={onClick} style={{
      border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 13,
      padding: '7px 14px', borderRadius: 999, background: on ? NAVY : 'transparent', color: on ? '#fff' : INK,
    }}>{label}</button>
  );
  const field = { width: '100%', boxSizing: 'border-box', padding: '9px 10px', border: '1px solid var(--neutral-300)', borderRadius: 8, fontFamily: 'inherit', fontSize: 14, background: '#fff', color: INK };
  const primary = { border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 13, padding: '10px 18px', borderRadius: 999, background: NAVY, color: '#fff' };
  const ghost = { ...primary, background: '#fff', color: INK, border: '1px solid var(--neutral-300)' };

  const upcoming = id => Object.entries(bookings)
    .filter(([, v]) => v.c === id)
    .map(([k, v]) => ({ ...parse(k), m: v.m }))
    .sort((a, b) => a.d - b.d || a.t.localeCompare(b.t));

  const selB = sel ? bookings[sel] : null;
  const selP = sel ? parse(sel) : null;

  return (
    <div style={{ background: '#fff', border: '1px solid var(--neutral-200)', borderRadius: 14, overflow: 'hidden', boxShadow: '0 20px 40px rgba(9,9,11,0.10)' }}>
      {/* Window bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', background: 'var(--neutral-100)', borderBottom: '1px solid var(--neutral-200)' }}>
        {[0, 1, 2].map(i => <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--neutral-300)' }} />)}
        <span style={{ marginLeft: 8, fontSize: 12, color: MUTED }}>予約・顧客管理（サンプル）</span>
      </div>

      <div style={{ padding: 'clamp(14px, 3vw, 24px)' }}>
        <div role="group" aria-label="表示" style={{ display: 'inline-flex', gap: 2, background: 'var(--neutral-100)', borderRadius: 999, padding: 3 }}>
          {[['book', '予約'], ['cust', '顧客']].map(([k, l]) => pill(tab === k, () => { setTab(k); setSel(null); setMsg(''); }, l, k))}
        </div>

        {tab === 'book' && (
          <div style={{ marginTop: 16 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
              <div role="group" aria-label="日付" style={{ display: 'flex', gap: 6 }}>
                {days.map(([d, n], i) => (
                  <button key={d} onClick={() => { setDay(i); setSel(null); setMsg(''); }} style={{
                    border: `1px solid ${day === i ? NAVY : 'var(--neutral-300)'}`, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700,
                    background: day === i ? NAVY : '#fff', color: day === i ? '#fff' : INK, borderRadius: 10, padding: '6px 10px', fontSize: 12, lineHeight: 1.3, minWidth: 44,
                  }}>{d}<br /><span style={{ fontSize: 14 }}>{n}</span></button>
                ))}
              </div>
              <div style={{ fontSize: 13, color: MUTED }}>この日の予約 <strong style={{ color: INK, fontSize: 16 }}>{dayCount}</strong> 件</div>
            </div>

            {/* Day grid */}
            <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '48px 1fr 1fr', gap: 4 }}>
              <div />
              {staff.map(s => <div key={s} style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: MUTED, padding: '2px 0 4px' }}>{s}</div>)}
              {times.map(t => (
                <React.Fragment key={t}>
                  <div style={{ fontSize: 12, color: MUTED, paddingTop: 12 }}>{t}</div>
                  {staff.map((s, si) => {
                    const k = key(t, si);
                    const b = bookings[k];
                    const on = sel === k;
                    return (
                      <button key={k} onClick={() => { setSel(k); setMsg(''); setFc(1); setFm(menus[0]); }}
                        aria-label={`${s} ${t} ${b ? cname(b.c) + ' 様 ' + b.m : '空き'}`}
                        style={{
                          minHeight: 44, borderRadius: 8, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', padding: '4px 8px',
                          border: on ? `2px solid ${NAVY}` : `1px solid ${b ? BOOKED : LINE}`,
                          background: b ? BOOKED : '#fff', color: INK,
                        }}>
                        {b ? (
                          <span><span style={{ display: 'block', fontSize: 12, fontWeight: 700, lineHeight: 1.3 }}>{cname(b.c)}</span><span style={{ display: 'block', fontSize: 11, color: MUTED, lineHeight: 1.3 }}>{b.m}</span></span>
                        ) : <span style={{ fontSize: 11, color: 'var(--neutral-300)' }}>空き</span>}
                      </button>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>

            {msg && <div role="status" ref={panelRef} style={{ marginTop: 14, padding: '10px 14px', borderRadius: 10, background: PALE, color: NAVY, fontSize: 13, fontWeight: 700 }}>{msg}</div>}

            {sel && !selB && (
              <div ref={panelRef} style={{ marginTop: 14, border: `1px solid ${LINE}`, borderRadius: 12, padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>予約を入れる <span style={{ fontWeight: 400, color: MUTED, fontSize: 12, marginLeft: 6 }}>{days[selP.d][1]}日({days[selP.d][0]}) {selP.t}・{staff[selP.s]}</span></div>
                <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <label style={{ fontSize: 12, color: MUTED }}>お客様
                    <select value={fc} onChange={e => setFc(e.target.value)} style={{ ...field, marginTop: 4 }}>
                      {customers.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </label>
                  <label style={{ fontSize: 12, color: MUTED }}>メニュー
                    <select value={fm} onChange={e => setFm(e.target.value)} style={{ ...field, marginTop: 4 }}>
                      {menus.map(m => <option key={m}>{m}</option>)}
                    </select>
                  </label>
                </div>
                <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
                  <button onClick={add} style={primary}>予約を入れる</button>
                  <button onClick={() => setSel(null)} style={ghost}>閉じる</button>
                </div>
              </div>
            )}

            {sel && selB && (
              <div ref={panelRef} style={{ marginTop: 14, border: `1px solid ${LINE}`, borderRadius: 12, padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>予約の内容 <span style={{ fontWeight: 400, color: MUTED, fontSize: 12, marginLeft: 6 }}>{days[selP.d][1]}日({days[selP.d][0]}) {selP.t}・{staff[selP.s]}</span></div>
                <div style={{ marginTop: 10, fontSize: 15, fontWeight: 700 }}>{cname(selB.c)} 様 <span style={{ fontWeight: 400, fontSize: 13, color: MUTED }}>／ {selB.m}</span></div>
                <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
                  <button onClick={cancel} style={{ ...primary, background: '#d64545' }}>予約をキャンセル</button>
                  <button onClick={() => setSel(null)} style={ghost}>閉じる</button>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === 'cust' && (
          <div style={{ marginTop: 16 }}>
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="お客様の名前で探す" aria-label="お客様を検索" style={field} />
            <div style={{ marginTop: 12 }}>
              {customers.filter(c => c.name.includes(q)).map(c => {
                const on = open === c.id;
                const ups = upcoming(c.id);
                return (
                  <div key={c.id} style={{ borderTop: `1px solid ${LINE}` }}>
                    <button onClick={() => setOpen(on ? null : c.id)} aria-expanded={on} style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 14, alignItems: 'center', border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', padding: '12px 0', textAlign: 'left', color: INK }}>
                      <span style={{ fontWeight: 700, fontSize: 14 }}>{c.name}</span>
                      <span style={{ fontSize: 12, color: MUTED }}>来店 {c.visits}回</span>
                      <span aria-hidden="true" style={{ color: NAVY }}>{on ? '−' : '＋'}</span>
                    </button>
                    {on && (
                      <div style={{ background: PALE, borderRadius: 10, padding: '12px 14px', marginBottom: 12, fontSize: 13, lineHeight: 1.8 }}>
                        <div><span style={{ color: MUTED, marginRight: 8 }}>前回の来店</span>{c.last}</div>
                        <div><span style={{ color: MUTED, marginRight: 8 }}>メモ</span>{c.note}</div>
                        <div><span style={{ color: MUTED, marginRight: 8 }}>今後の予約</span>
                          {ups.length === 0 ? 'なし' : ups.map(u => `${days[u.d][1]}日(${days[u.d][0]}) ${u.t} ${u.m}`).join(' ／ ')}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              {customers.filter(c => c.name.includes(q)).length === 0 && <div style={{ padding: '16px 0', fontSize: 13, color: MUTED }}>該当するお客様がいません。</div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

window.ReservationMock = ReservationMock;
