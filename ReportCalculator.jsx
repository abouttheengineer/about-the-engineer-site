/**
 * ReportCalculator — rough estimate of what automating the monthly SNS / ad
 * reporting work could save per month / year. The one-off development cost is
 * deliberately left out (it depends on the case; quoted separately).
 * All inputs are editable assumptions; nothing is sent anywhere.
 */
function ReportCalculator() {
  const NAVY = '#1E3A5F';

  const [people, setPeople] = React.useState(1);       // 担当者の人数
  const [hours, setHours] = React.useState(15);        // 1人あたり、月のレポート作業時間
  const [rate, setRate] = React.useState(2500);        // 1時間あたりの人件費
  const [cut, setCut] = React.useState(70);            // 自動化でなくなる作業の割合 (%)
  const [ops, setOps] = React.useState(1);             // 運用費（万円 / 月）

  const yen = n => '¥' + Math.round(n).toLocaleString('ja-JP');
  const totalHours = people * hours;
  const now = totalHours * rate;                       // いまの人件費 / 月
  const savedHours = totalHours * cut / 100;
  const after = now - savedHours * rate + ops * 10000; // 自動化後 = 残る作業 + 運用費
  const diff = now - after;
  const maxBar = Math.max(now, after, 1);

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
        <div style={{ width: Math.max(2, value / maxBar * 100) + '%', height: '100%', background: color, borderRadius: '0 4px 4px 0', transition: 'width .2s' }} />
      </div>
      <div style={{ marginTop: 4, fontSize: 11, color: 'var(--neutral-600)' }}>{note}</div>
    </div>
  );

  return (
    <div style={{ background: '#fff', border: '1px solid var(--neutral-200)', borderRadius: 14, padding: 'clamp(20px, 3vw, 32px)', boxShadow: '0 20px 40px rgba(9,9,11,0.08)' }}>
      <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 4vw, 48px)' }}>
        {/* Inputs */}
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: 'var(--zinc-950)' }}>条件を入れる</div>
          {slider('rc-people', 'レポートを作る担当者の人数', people, setPeople, 1, 30, 1, '人')}
          {slider('rc-hours', '1人あたり、月のレポート作業時間', hours, setHours, 1, 60, 1, '時間')}
          {slider('rc-cut', '自動化でなくなる作業の割合', cut, setCut, 20, 90, 5, '%')}
          <p style={{ margin: '6px 0 0', fontSize: 11, lineHeight: 1.7, color: 'var(--neutral-600)' }}>CSVの手作業の集計、グラフ作り、資料づくりなどが、自動化でなくなる割合の仮定です。</p>
          <details style={{ marginTop: 18 }}>
            <summary style={{ ...label, cursor: 'pointer' }}>前提を変える（人件費・運用費）</summary>
            <div style={{ marginTop: 12, display: 'grid', gap: 12 }}>
              <label style={{ ...label, fontWeight: 400 }}>1時間あたりの人件費（円）<input type="number" min="0" step="100" value={rate} onChange={e => setRate(Math.max(0, +e.target.value))} style={{ ...field, marginTop: 6 }} /></label>
              <label style={{ ...label, fontWeight: 400 }}>運用費（サーバー・保守など、万円 / 月）<input type="number" min="0" step="0.5" value={ops} onChange={e => setOps(Math.max(0, +e.target.value))} style={{ ...field, marginTop: 6 }} /></label>
            </div>
          </details>
        </div>

        {/* Results */}
        <div role="status" aria-live="polite">
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: 'var(--zinc-950)' }}>月のコストの目安</div>
          {bar('いまのレポート作業', now, '#9CA3AF', people + '人 × ' + hours + '時間 × ' + yen(rate) + '（月' + totalHours.toLocaleString('ja-JP') + '時間）')}
          {bar('自動化したあと', after, NAVY, '残る作業 ' + yen(now - savedHours * rate) + ' + 運用費 ' + yen(ops * 10000))}

          <div style={{ marginTop: 22, padding: '16px 18px', background: '#EAF1F7', borderRadius: 12 }}>
            <div style={{ fontSize: 12, color: 'var(--neutral-600)' }}>{diff >= 0 ? '月に減らせる費用' : '月に増える費用'}</div>
            <div style={{ marginTop: 4, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 30px)', color: NAVY }}>
              {yen(Math.abs(diff))}<span style={{ fontSize: 13, fontWeight: 400, color: 'var(--neutral-600)' }}> / 月　</span>
              <span style={{ fontSize: 15 }}>{yen(Math.abs(diff) * 12)}</span><span style={{ fontSize: 13, fontWeight: 400, color: 'var(--neutral-600)' }}> / 年</span>
            </div>
            <p style={{ margin: '12px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.8, color: 'var(--zinc-950)' }}>
              {diff > 0 ? '毎月のレポート作業にかかる費用が、このくらい減る見込みです。' : '今回の条件では、月々の費用は減りません。費用だけでなく、過去のデータを残して分析できる効果も含めて、ご検討ください。'}
            </p>
            <p style={{ margin: '8px 0 0', fontSize: 12, color: 'var(--neutral-600)' }}>減らせる作業時間は、月{Math.round(savedHours).toLocaleString('ja-JP')}時間（年{Math.round(savedHours * 12).toLocaleString('ja-JP')}時間）です。</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--neutral-200)', fontFamily: 'var(--font-body)', fontSize: 12, lineHeight: 1.9, color: 'var(--neutral-600)' }}>
        <div style={{ fontWeight: 700, color: 'var(--zinc-950)', marginBottom: 4 }}>計算の前提</div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>作業時間、人件費、なくなる作業の割合、運用費は、例として置いた仮の値です。実際は、いまの業務をうかがって、お見積りします。</li>
          <li>初期の開発費は、内容によって変わるため、ここには含めていません。ご要望に合わせて、お見積りします。</li>
          <li>過去のデータを数年分残して、さかのぼって分析できる効果は、金額に含めていません。</li>
        </ul>
      </div>
    </div>
  );
}

window.ReportCalculator = ReportCalculator;
