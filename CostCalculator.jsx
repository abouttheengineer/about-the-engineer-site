/**
 * CostCalculator — rough monthly-cost comparison for an online English school:
 * paying for a Google Workspace plan per teacher vs. an in-house app that pays
 * a video-call service (Agora) per minute. Also estimates the break-even point
 * for the one-off development cost. All numbers are editable assumptions.
 *
 * Price sources (checked 2026-11-07, official pages):
 *  - Google Workspace JP (annual plan, per user per month, tax excluded):
 *      Starter ¥800 (no recording), Standard ¥1,600 (recording).
 *  - Agora Video Calling: HD $3.99 per 1,000 participant-minutes,
 *      first 10,000 minutes per month free. (Volume discounts ignored.)
 *  - A typical paid booking site ("某予約サイト", annual contract, per month; the
 *      list price is tax INCLUDED, converted here to tax-excluded to match
 *      Google Workspace): 9,790 / 19,690 / 28,600 / 66,000 yen. Limits:
 *      reservations per month 200 / 300 / 2,000 / 5,000, registered staff
 *      - / 3 / 20 / unlimited. Over the limit: 1,078 yen (tax incl.) per 50.
 */
function CostCalculator() {
  const NAVY = '#1E3A5F';
  // Booking site, annual contract, tax excluded (list price / 1.1)
  const BOOKING_PLANS = [
    { name: '無料', price: 0, limit: 50, staff: 1 },
    { name: '小規模', price: 8900, limit: 200, staff: 1 },
    { name: 'チーム向け', price: 17900, limit: 300, staff: 3 },
    { name: 'ビジネス向け', price: 26000, limit: 2000, staff: 20 },
    { name: '大規模', price: 60000, limit: 5000, staff: Infinity },
  ];
  const EXTRA_PER_50 = 980;    // booking site: extra 50 reservations, tax excluded
  const FREE_MIN = 10000;      // Agora free minutes per month
  const USD_PER_1000 = 3.99;   // Agora Video HD, per 1,000 participant-minutes

  const [teachers, setTeachers] = React.useState(200);
  const [lessons, setLessons] = React.useState(10);
  const [len, setLen] = React.useState(25);
  const [plan, setPlan] = React.useState(800);
  const [rate, setRate] = React.useState(150);
  const [initial, setInitial] = React.useState(300);   // 万円
  const [ops, setOps] = React.useState(1);             // 万円 / 月
  const [useBooking, setUseBooking] = React.useState(true);

  const yen = n => '¥' + Math.round(n).toLocaleString('ja-JP');
  const man = n => Math.round(n / 10000 * 10) / 10;

  // Monthly cost of paying per teacher account
  const ws = teachers * plan;
  // Reservation service: every lesson is one reservation; every teacher needs to be registered.
  const reservations = teachers * lessons;
  const bookingChoice = BOOKING_PLANS
    .filter(b => b.staff >= teachers)
    .map(b => ({ ...b, extra: Math.ceil(Math.max(0, reservations - b.limit) / 50) * EXTRA_PER_50 }))
    .sort((a, b) => (a.price + a.extra) - (b.price + b.extra))[0] || BOOKING_PLANS[BOOKING_PLANS.length - 1];
  const booking = useBooking ? bookingChoice.price + (bookingChoice.extra || 0) : 0;
  const paid = ws + booking;
  // Monthly call minutes: teacher + student = 2 participants per lesson
  const minutes = teachers * lessons * len * 2;
  const billable = Math.max(0, minutes - FREE_MIN);
  const agora = billable / 1000 * USD_PER_1000 * rate;
  const own = agora + ops * 10000;
  const diff = paid - own;
  const months = diff > 0 ? Math.ceil(initial * 10000 / diff) : null;

  // Lessons per teacher per month at which per-minute fees overtake the account fee
  const perLesson = len * 2 / 1000 * USD_PER_1000 * rate;
  const breakLessons = Math.floor(plan / perLesson);

  const maxBar = Math.max(paid, own, 1);

  const label = { fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, color: 'var(--zinc-950)' };
  const out = { fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15, color: NAVY };
  const field = { padding: '8px 10px', border: '1px solid var(--neutral-300)', borderRadius: 8, fontFamily: 'inherit', fontSize: 14, background: '#fff', color: 'var(--zinc-950)', width: '100%', boxSizing: 'border-box' };

  const slider = (id, text, value, set, min, max, step, unit) => (
    <div style={{ marginTop: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <label htmlFor={id} style={label}>{text}</label>
        <span style={out}>{value.toLocaleString('ja-JP')}<span style={{ fontSize: 12, fontWeight: 400, color: 'var(--neutral-600)', marginLeft: 3 }}>{unit}</span></span>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={e => set(+e.target.value)}
        style={{ width: '100%', marginTop: 8, accentColor: NAVY }} />
    </div>
  );

  const bar = (name, value, color, note) => (
    <div style={{ marginTop: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, fontFamily: 'var(--font-body)', fontSize: 13 }}>
        <span style={{ fontWeight: 700, color: 'var(--zinc-950)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--zinc-950)' }}>{yen(value)}<span style={{ fontWeight: 400, color: 'var(--neutral-600)', fontSize: 12 }}> / 月</span></span>
      </div>
      <div style={{ marginTop: 6, height: 20, background: 'var(--neutral-100)', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ width: `${Math.max(2, value / maxBar * 100)}%`, height: '100%', background: color, borderRadius: '0 4px 4px 0', transition: 'width .2s' }} />
      </div>
      <div style={{ marginTop: 4, fontSize: 11, color: 'var(--neutral-600)' }}>{note}</div>
    </div>
  );

  const sq = c => <span aria-hidden="true" style={{ display: 'inline-block', width: 10, height: 10, background: c, marginRight: 6, borderRadius: 2 }} />;
  const stack = () => (
    <div style={{ marginTop: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, fontFamily: 'var(--font-body)', fontSize: 13 }}>
        <span style={{ fontWeight: 700, color: 'var(--zinc-950)' }}>{useBooking ? '有料サービスの合計（通話 + 予約）' : '有料プランを講師ごとに契約'}</span>
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--zinc-950)' }}>{yen(paid)}<span style={{ fontWeight: 400, color: 'var(--neutral-600)', fontSize: 12 }}> / 月</span></span>
      </div>
      <div style={{ marginTop: 6, height: 20, background: 'var(--neutral-100)', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 2, height: '100%', width: (Math.max(2, paid / maxBar * 100)) + '%', transition: 'width .2s' }}>
          <div style={{ flex: ws, background: '#9CA3AF' }} />
          {booking > 0 && <div style={{ flex: booking, background: '#D1D5DB' }} />}
        </div>
      </div>
      <div style={{ marginTop: 6, fontSize: 11, lineHeight: 1.7, color: 'var(--neutral-600)' }}>
        <div>{sq('#9CA3AF')}通話（Google Workspace）{yen(ws)}　{teachers.toLocaleString('ja-JP')}人 × {plan.toLocaleString('ja-JP')}円（税別）</div>
        {booking > 0 && <div>{sq('#D1D5DB')}予約（某予約サイト・{bookingChoice.name}プラン）{yen(booking)}　月{reservations.toLocaleString('ja-JP')}件・年間契約{bookingChoice.extra ? '、上限超過分 ' + yen(bookingChoice.extra) + ' を含む' : ''}</div>}
      </div>
    </div>
  );

  let verdict;
  if (months === null) {
    verdict = '今回の条件では、月々の費用は自社製のほうが高くなります。費用だけでなく、予約から通話までをひとつにまとめる効果も含めて、ご検討ください。';
  } else if (months > 120) {
    verdict = `月々の差額だけで開発費を回収するには、10年以上かかる見込みです。この規模では、費用よりも「使いやすさ」や「ひとつにまとまる便利さ」が主なメリットになります。`;
  } else {
    verdict = `月々の差額で、開発費を約${months}か月（約${Math.round(months / 12 * 10) / 10}年）で回収できる見込みです。`;
  }

  return (
    <div style={{ background: '#fff', border: '1px solid var(--neutral-200)', borderRadius: 14, padding: 'clamp(20px, 3vw, 32px)', boxShadow: '0 20px 40px rgba(9,9,11,0.08)' }}>
      <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 4vw, 48px)' }}>
        {/* Inputs */}
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: 'var(--zinc-950)' }}>条件を入れる</div>
          {slider('cc-teachers', '講師の人数', teachers, setTeachers, 5, 500, 5, '人')}
          {slider('cc-lessons', '講師1人あたりの月のレッスン数', lessons, setLessons, 2, 80, 1, '回')}
          <div style={{ marginTop: 18 }}>
            <label htmlFor="cc-len" style={label}>1回のレッスンの長さ</label>
            <select id="cc-len" value={len} onChange={e => setLen(+e.target.value)} style={{ ...field, marginTop: 8 }}>
              {[25, 30, 50, 60].map(m => <option key={m} value={m}>{m}分</option>)}
            </select>
          </div>
          <div style={{ marginTop: 18 }}>
            <label htmlFor="cc-plan" style={label}>いま想定している有料プラン（講師1人ごと）</label>
            <select id="cc-plan" value={plan} onChange={e => setPlan(+e.target.value)} style={{ ...field, marginTop: 8 }}>
              <option value={800}>Google Workspace Starter（月800円・録画なし）</option>
              <option value={1600}>Google Workspace Standard（月1,600円・録画あり）</option>
            </select>
          </div>
          <label style={{ ...label, display: 'flex', gap: 8, alignItems: 'flex-start', marginTop: 20, cursor: 'pointer', lineHeight: 1.6 }}>
            <input type="checkbox" checked={useBooking} onChange={e => setUseBooking(e.target.checked)} style={{ marginTop: 3, accentColor: NAVY }} />
            <span>予約システム（予約サイトなど）も、有料で契約している</span>
          </label>
          <details style={{ marginTop: 18 }}>
            <summary style={{ ...label, cursor: 'pointer' }}>前提を変える（自社製の費用など）</summary>
            <div style={{ marginTop: 12, display: 'grid', gap: 12 }}>
              <label style={{ ...label, fontWeight: 400 }}>初期開発費（万円）<input type="number" min="0" step="50" value={initial} onChange={e => setInitial(Math.max(0, +e.target.value))} style={{ ...field, marginTop: 6 }} /></label>
              <label style={{ ...label, fontWeight: 400 }}>運用費（サーバー・保守など、万円 / 月）<input type="number" min="0" step="0.5" value={ops} onChange={e => setOps(Math.max(0, +e.target.value))} style={{ ...field, marginTop: 6 }} /></label>
              <label style={{ ...label, fontWeight: 400 }}>為替（1ドル = 円）<input type="number" min="1" step="1" value={rate} onChange={e => setRate(Math.max(1, +e.target.value))} style={{ ...field, marginTop: 6 }} /></label>
            </div>
          </details>
        </div>

        {/* Results */}
        <div role="status" aria-live="polite">
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: 'var(--zinc-950)' }}>月額の目安</div>
          {stack()}
          {bar('自社製（通話料 + 運用費）', own, NAVY, `通話料（Agora）${yen(agora)}（月${minutes.toLocaleString('ja-JP')}分、無料枠${FREE_MIN.toLocaleString('ja-JP')}分を引く） + 運用費 ${yen(ops * 10000)}。予約の機能も自社製に含まれます。`)}

          <div style={{ marginTop: 22, padding: '16px 18px', background: '#EAF1F7', borderRadius: 12 }}>
            <div style={{ fontSize: 12, color: 'var(--neutral-600)' }}>{diff >= 0 ? '自社製のほうが安い差額' : '自社製のほうが高い差額'}</div>
            <div style={{ marginTop: 4, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 30px)', color: NAVY }}>
              {yen(Math.abs(diff))}<span style={{ fontSize: 13, fontWeight: 400, color: 'var(--neutral-600)' }}> / 月　</span>
              <span style={{ fontSize: 15 }}>{yen(Math.abs(diff) * 12)}</span><span style={{ fontSize: 13, fontWeight: 400, color: 'var(--neutral-600)' }}> / 年</span>
            </div>
            <p style={{ margin: '12px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.8, color: 'var(--zinc-950)' }}>
              <strong>損益分岐の目安:</strong> 初期開発費 {man(initial * 10000).toLocaleString('ja-JP')}万円のとき、{verdict}
            </p>
          </div>

          <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.8, color: 'var(--neutral-600)' }}>
            通話料は、レッスンが増えるほど増えます。講師1人あたり月{breakLessons}回を超えると、通話料のほうが有料プランの月額を上回ります（無料枠を除く）。講師の人数が多く、1人あたりのレッスン数が少ないほど、自社製が有利になります。
          </p>
        </div>
      </div>

      <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--neutral-200)', fontFamily: 'var(--font-body)', fontSize: 12, lineHeight: 1.9, color: 'var(--neutral-600)' }}>
        <div style={{ fontWeight: 700, color: 'var(--zinc-950)', marginBottom: 4 }}>計算の前提</div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>2026年11月時点の公式料金をもとにした概算です。料金や条件は変わることがあります。</li>
          <li>Google Workspace は年間プランの1人あたり月額（税別）です。Google Meet は、個人のGoogleアカウントなら無料でも使えます（3人以上は1回60分まで）。ここでは、有料プランを講師ごとに契約する場合と比べています。</li>
          <li>通話は、弊社が使う Agora の SDK（HDビデオ 1,000分あたり3.99ドル、参加者ごとの課金、月10,000分まで無料）で計算しています。1回のレッスンは、生徒と講師の2人分です。通話量による割引、録画などの追加機能は含みません。</li>
          <li>予約は、有料の某予約サイトの年間契約（最短3か月、年間契約が最安）の月額です。料金表（2026年11月時点）の税込価格を税別に直しています（小規模プラン8,900円、チーム向けプラン17,900円、ビジネス向けプラン26,000円、大規模プラン60,000円）。講師の人数と、月の予約数（レッスン数）に合わせて、必要な最小のプランを選んでいます。上限を超えた分は、50件ごとに980円（税別）です。予約ページの数は足りると仮定し、予約時のカード決済手数料やオプションは含みません。ほかの予約サービスも、月額がかかるのが一般的です。</li>
          <li>初期開発費と運用費は、例として置いた仮の値です。実際は、必要な機能に応じてお見積りします。</li>
        </ul>
      </div>
    </div>
  );
}

window.CostCalculator = CostCalculator;
