/**
 * SecurityPage — security diagnosis service (own page, reached from the
 * Business page). Layout follows a landing-page pattern: hero → menu →
 * typical cases → flow → price → CTA, in the site's white / navy style.
 * Inquiries go to the Contact page with the topic pre-selected.
 */
const SECURITY_PLANS = [
  { name: '簡易診断', sub: 'ツールによる自動診断', price: '3万円〜' },
  { name: 'Webサイト・Webアプリ診断', sub: '手動の確認を含む診断', price: '10万円〜' },
  { name: 'AI・LLMを使ったアプリの診断', sub: 'AIを使った機能の弱点の確認', price: '20万円〜' },
];
window.SECURITY_PLANS = SECURITY_PLANS;

function SecurityPage({ go }) {
  const NAVY = '#1E3A5F';

  // Open the Contact page with 「セキュリティ診断」 already selected.
  const consult = () => {
    try { sessionStorage.setItem('contactTopic', 'セキュリティ診断'); } catch (e) { /* ignore */ }
    go('contact');
  };
  const jump = id => { const e = document.getElementById(id); if (e) window.scrollTo({ top: e.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' }); };

  const icons = {
    scan: <g><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.4-4.4" /><path d="M8 11h6" /></g>,
    shield: <g><path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.1 7.5 9.5 4.4-1.4 7.5-4.9 7.5-9.5V6L12 3Z" /><path d="m9 12 2.2 2.2L15.5 10" /></g>,
    ai: <g><path d="M11 3l2 5.5L18.5 10.5 13 12.5 11 18l-2-5.5L3.5 10.5 9 8.5 11 3Z" /><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></g>,
  };

  const menu = [
    {
      icon: 'scan', title: '簡易診断', sub: 'ツールによる自動診断', price: SECURITY_PLANS[0].price,
      desc: '診断ツールを使って、よく知られた弱点がないかを短い期間で調べます。まず現状を知りたい方に向いています。',
      items: ['よく知られた弱点の確認', '結果のご報告', '対応の優先順位のご案内'],
    },
    {
      icon: 'shield', title: 'Webサイト・Webアプリ診断', sub: '手動の確認を含む診断', price: SECURITY_PLANS[1].price,
      desc: 'ツールに加えて、エンジニアが手作業で確認します。ログインや権限、入力欄などの弱点を調べます。',
      items: ['ログイン・権限まわりの確認', '入力欄からの攻撃への強さの確認', '診断報告書のお渡し'],
    },
    {
      icon: 'ai', title: 'AI・LLMを使ったアプリの診断', sub: 'AIを使った機能の弱点の確認', price: SECURITY_PLANS[2].price,
      desc: 'AIを使った機能ならではの弱点を調べます。AIへの不正な指示や、情報の漏えいなどを確認します。',
      items: ['不正な指示（プロンプト）への強さの確認', '情報の漏えいの確認', '診断報告書のお渡し'],
    },
  ];

  const cases = [
    { tag: '公開の前に', title: '新しいサイトやサービスを、公開する前に確認したい', text: '公開してから弱点が見つかると、対応に手間がかかります。公開の前に、一度確認できます。' },
    { tag: '取引先から', title: '取引先から、セキュリティ対策の確認を求められた', text: '診断の結果を、報告書の形でお渡しします。対策の状況を説明するときの材料になります。' },
    { tag: '古いシステム', title: '前任者が作った、中身のよくわからないシステムが不安', text: '作った人がいなくなったシステムでも、外から弱点を調べて、気をつける点をお伝えします。' },
    { tag: 'AIの導入', title: 'AIの機能を入れたが、情報が漏れないか心配', text: 'AIを使った機能は、これまでと違う弱点があります。AIならではの点も含めて確認します。' },
  ];

  const steps = [
    ['ご相談・お見積り', 'Consult', '診断したい対象と範囲をうかがい、お見積りします。'],
    ['診断の実施', 'Diagnose', 'お客様の許可をいただいた対象に、診断を行います。'],
    ['報告書のお渡し', 'Report', '見つかった問題と、その対策をまとめた報告書をお渡しします。'],
    ['対応のご相談', 'Follow-up', '見つかった問題への対応も、ご相談ください。'],
  ];

  const check = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 4 }}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>;

  return (
    <main>
      <PageHero
        kicker="Security — セキュリティ診断"
        lead="Webサイトやアプリに、攻撃を受けやすい弱点がないかを調べます。結果は報告書にまとめて、見つかった問題への対応までご相談いただけます。" />

      {/* CTA */}
      <Container style={{ paddingBottom: 96 }}>
        <Rule strong />
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16, paddingTop: 48 }}>
          <button onClick={consult} style={window.btnSolid}>診断を相談する&nbsp;→</button>
          <button onClick={() => jump('security-menu')} style={window.btnOutline}>診断メニューを見る</button>
        </div>
      </Container>

      {/* Menu */}
      <div id="security-menu" style={{ background: '#EAF1F7', marginBottom: 96 }}>
        <Container style={{ paddingTop: 88, paddingBottom: 96 }}>
          <SectionHead kicker="Menu" title="診断メニュー" style={{ marginBottom: 20 }} />
          <p style={{ margin: '0 auto 48px', maxWidth: 560, textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.9, color: 'var(--text-on-light-muted)' }}>
            調べる対象に合わせて、3つの診断からお選びいただけます。
          </p>
          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'stretch' }}>
            {menu.map(m => (
              <div key={m.title} style={{ background: 'var(--white)', border: '1px solid #D5E2EE', borderRadius: 16, padding: 'clamp(24px, 3vw, 32px)', boxShadow: '0 16px 36px rgba(30,58,95,0.08)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: NAVY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[m.icon]}</svg>
                </div>
                <div style={{ marginTop: 22, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(20px, 2vw, 24px)', lineHeight: 1.4, color: 'var(--zinc-950)' }}>{m.title}</div>
                <div style={{ marginTop: 4, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--neutral-600)' }}>{m.sub}</div>
                <p style={{ margin: '16px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.9, color: 'var(--text-on-light-muted)' }}>{m.desc}</p>
                <ul style={{ margin: '18px 0 0', padding: '18px 0 0', listStyle: 'none', borderTop: '1px solid var(--neutral-200)', display: 'grid', gap: 10 }}>
                  {m.items.map(it => (
                    <li key={it} style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--zinc-950)' }}>{check}<span>{it}</span></li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto', paddingTop: 22 }}>
                  <div style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 20, color: NAVY, background: '#EAF1F7', borderRadius: 999, padding: '8px 18px' }}>
                    {m.price}<span style={{ marginLeft: 4, fontSize: 12, fontWeight: 400, color: 'var(--neutral-600)' }}>（税抜）</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Typical cases */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Case" title="こんなときに、ご相談ください" />
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {cases.map(c => (
            <div key={c.title} style={{ position: 'relative', border: '1px solid var(--neutral-200)', borderRadius: 12, padding: '28px 28px 28px 34px', background: 'var(--white)', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 6, background: NAVY }} />
              <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, color: NAVY, background: '#EAF1F7', borderRadius: 999, padding: '4px 12px' }}>{c.tag}</span>
              <div style={{ marginTop: 14, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 18, lineHeight: 1.5, color: 'var(--zinc-950)' }}>{c.title}</div>
              <p style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.9, color: 'var(--text-on-light-muted)' }}>{c.text}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Flow */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Flow" title="診断の進め方" />
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--neutral-200)', border: '1px solid var(--neutral-200)' }}>
          {steps.map(([jp, en, d], i) => (
            <div key={en} style={{ background: 'var(--white)', padding: '28px 22px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--neutral-300)' }}>0{i + 1}</div>
              <div style={{ marginTop: 14, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 20, lineHeight: 1.3, color: 'var(--zinc-950)' }}>{jp}</div>
              <div style={{ marginTop: 6, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--neutral-600)' }}>{en}</div>
              <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--text-on-light-muted)' }}>{d}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Price */}
      <Container id="security-price" style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Price" title="料金（参考）" />
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {SECURITY_PLANS.map((p, i, arr) => (
            <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, padding: '20px 0', borderTop: '1px solid var(--neutral-200)', borderBottom: i === arr.length - 1 ? '1px solid var(--neutral-200)' : 'none' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 17, color: 'var(--zinc-950)' }}>{p.name}</div>
                <div style={{ marginTop: 3, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--neutral-600)' }}>{p.sub}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(20px, 2.4vw, 26px)', color: NAVY, whiteSpace: 'nowrap' }}>
                {p.price}<span style={{ marginLeft: 4, fontSize: 12, fontWeight: 400, color: 'var(--neutral-600)' }}>（税抜）</span>
              </div>
            </div>
          ))}
          <p style={{ margin: '18px 0 0', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.9, color: 'var(--neutral-600)' }}>
            ※ 料金は参考です。対象の大きさによって変わります。診断は、お客様の許可をいただいた対象にだけ行います。はじめてのご相談は、30分まで無料です。
          </p>
        </div>
      </Container>

      {/* CTA */}
      <Container style={{ paddingBottom: 110 }}>
        <Rule strong />
        <div style={{ textAlign: 'center', paddingTop: 56 }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16 }}>
            <button onClick={() => go('business')} style={window.btnOutline}>←&nbsp;ビジネスのページへ戻る</button>
            <button onClick={consult} style={window.btnSolid}>診断を相談する&nbsp;→</button>
          </div>
        </div>
      </Container>
    </main>
  );
}

window.SecurityPage = SecurityPage;
