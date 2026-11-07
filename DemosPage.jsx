/**
 * DemosPage — interactive sample screens ("開発例") for the consulting service.
 * Reached from the Consulting page. Each demo is a clickable sample with
 * made-up data only.
 */
function DemosPage({ go }) {
  // Jump to the demo the visitor picked on the Consulting page.
  React.useEffect(() => {
    let id = null;
    try { id = sessionStorage.getItem('demoTarget'); sessionStorage.removeItem('demoTarget'); } catch (e) { /* ignore */ }
    if (!id) return undefined;
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'instant' });
    }, 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      <PageHero
        kicker="Demo — デモ"
        lead="開発例を、実際の画面で試せます。ボタンを押したり、画面を切り替えたりして、使い心地をご確認ください。" />

      <Container style={{ paddingBottom: 72 }}>
        <Rule strong />
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16, paddingTop: 40 }}>
          <button onClick={() => go('consulting')} style={window.btnOutline}>←&nbsp;コンサルティングへ戻る</button>
          <button onClick={() => go('contact')} style={window.btnSolid}>無料で相談する&nbsp;→</button>
        </div>
      </Container>

      {/* Interactive demo */}
      <div id="demo" style={{ background: '#EAF1F7', marginBottom: 96 }}>
        <Container style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 700, color: 'var(--neutral-600)' }}>Demo</div>
              <h2 style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(26px, 3.4vw, 40px)', lineHeight: 1.3, color: 'var(--zinc-950)' }}>画面を触って、<br />イメージを確かめる</h2>
              <p style={{ margin: '20px 0 0', maxWidth: 460, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 2, color: 'var(--text-on-light-muted)' }}>
                英会話教室向けの通話アプリの、サンプル画面です。実際のアプリのように、タップして操作できます。生徒と講師、2つの立場で試せます。
              </p>
              <ol style={{ margin: '24px 0 0', padding: 0, listStyle: 'none', maxWidth: 460 }}>
                {['「通話ルームに入室」を押して、通話画面を見る', '「講師を探す」から、レッスンの予約を申請する', '右上を「講師」に切り替えて、申請を承認する'].map((t, i) => (
                  <li key={t} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 12, alignItems: 'center', padding: '10px 0', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--zinc-950)' }}>
                    <span style={{ width: 28, height: 28, borderRadius: 999, background: '#1E3A5F', color: '#fff', fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>{t}
                  </li>
                ))}
              </ol>
              <p style={{ margin: '20px 0 0', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.8, color: 'var(--neutral-600)' }}>※ サンプル画面です。実際のデザインや機能は、ご要望に合わせて設計します。</p>
            </div>
            <DemoFrame src="demos/speakflow.html?v=20261107" title="英会話教室向け通話アプリのサンプル" />
          </div>
        </Container>
      </div>

      {/* Merit of building in-house (English-lesson app) */}
      <Container id="demo-merit" style={{ paddingBottom: 96 }}>
        <div style={{ maxWidth: 760 }}>
          <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 700, color: 'var(--neutral-600)' }}>Merit</div>
          <h2 style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(26px, 3.4vw, 40px)', lineHeight: 1.3, color: 'var(--zinc-950)' }}>自社製にすると、<br />費用のかかり方が変わります</h2>
          <p style={{ margin: '20px 0 0', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 2, color: 'var(--text-on-light-muted)' }}>
            英会話教室では、通話に Google Meet などの会議ツール、予約に有料の予約サイトを使うケースも多くあります。どちらも有料プランを契約すると、講師や予約が増えるたびに月額が上がり、予約サービスは年間契約が必要なものもあります。自社のアプリにすると、予約は自社の機能になり、通話は通話した時間ぶんだけの費用になります。
          </p>
        </div>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, margin: '40px 0' }}>
          {[
            ['通話は Agora の SDK。使った分だけ', '弊社は、通話の仕組みに Agora の SDK を使って開発します。アカウントごとではなく、通話した時間ぶんの従量課金です。講師が増えても、固定費が増えにくくなります。'],
            ['予約サービスの月額・年間契約が不要に', '予約の機能も自社のアプリに含まれるので、予約サイトの月額や年間契約が要りません。講師や予約が増えて、上位のプランに切り替える必要もありません。'],
            ['予約から通話まで、1つのアプリで', '予約・通話・出欠を別々のツールに分けず、ひとつの画面にまとめられます。画面や流れも、教室のやり方に合わせて作れます。録画など、追加の費用がかかる機能もあります。'],
          ].map(([t, b], i) => (
            <div key={t} style={{ border: '1px solid var(--neutral-200)', borderRadius: 12, padding: 24, background: 'var(--white)' }}>
              <div style={{ width: 28, height: 28, borderRadius: 999, background: '#1E3A5F', color: '#fff', fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</div>
              <div style={{ marginTop: 14, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 17, lineHeight: 1.5, color: 'var(--zinc-950)' }}>{t}</div>
              <p style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.8, color: 'var(--text-on-light-muted)' }}>{b}</p>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 20, color: 'var(--zinc-950)', marginBottom: 16 }}>月額の費用を、計算してみる</div>
        <CostCalculator />
      </Container>

      {/* Interactive demo: dashboard */}
      <Container id="demo-dashboard" style={{ paddingBottom: 96 }}>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 700, color: 'var(--neutral-600)' }}>Demo</div>
            <h2 style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(26px, 3.4vw, 40px)', lineHeight: 1.3, color: 'var(--zinc-950)' }}>数字が、ひと目で<br />わかる画面に</h2>
            <p style={{ margin: '20px 0 0', maxWidth: 440, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 2, color: 'var(--text-on-light-muted)' }}>
              分析用ダッシュボードの、サンプル画面です。期間を切り替えたり、データを再集計したりして、実際の使い心地を確かめられます。ここでは小さく表示しています。見づらいときは、大きな画面で操作できます。
            </p>
            <ol style={{ margin: '24px 0 0', padding: 0, listStyle: 'none', maxWidth: 440 }}>
              {['「今月・先月・過去3ヶ月」で、表示する期間を切り替える', '「データを自動再集計」を押して、グラフの更新を見る', '「CSVエクスポート」で、出力の画面を開く'].map((t, i) => (
                <li key={t} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 12, alignItems: 'center', padding: '10px 0', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--zinc-950)' }}>
                  <span style={{ width: 28, height: 28, borderRadius: 999, background: '#1E3A5F', color: '#fff', fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>{t}
                </li>
              ))}
            </ol>
            <div style={{ marginTop: 24 }}>
              <button onClick={() => go('demo-dashboard')} style={window.btnSolid}>大きな画面で操作する&nbsp;→</button>
            </div>
            <p style={{ margin: '20px 0 0', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.8, color: 'var(--neutral-600)' }}>※ サンプルの数字・社名です。実際の内容は、ご要望に合わせて設計します。</p>
          </div>
          <DemoFrame variant="browser" designWidth={800} scale={0.75} height={640} label="分析用ダッシュボード（サンプル）" src="demos/dashboard.html?v=20261107" title="分析用ダッシュボードのサンプル" />
        </div>
      </Container>

      {/* Interactive demo: reservation system */}
      <div id="demo-reservation" style={{ background: '#EAF1F7', marginBottom: 96 }}>
        <Container style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 700, color: 'var(--neutral-600)' }}>Demo</div>
              <h2 style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(26px, 3.4vw, 40px)', lineHeight: 1.3, color: 'var(--zinc-950)' }}>予約も顧客も、<br />1つの画面で</h2>
              <p style={{ margin: '20px 0 0', maxWidth: 420, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 2, color: 'var(--text-on-light-muted)' }}>
                予約・顧客管理システムの、サンプル画面です。予約の時間割を見たり、お客様の顧客カルテを開いたりできます。ここでは小さく表示しています。見づらいときは、大きな画面で操作できます。
              </p>
              <ol style={{ margin: '24px 0 0', padding: 0, listStyle: 'none', maxWidth: 420 }}>
                {['「予約管理」で、スタッフごとの予約の時間割を見る', '予約を押して、お客様の顧客カルテを開く', '「顧客台帳」で、お客様を名前で探す'].map((t, i) => (
                  <li key={t} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 12, alignItems: 'center', padding: '10px 0', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--zinc-950)' }}>
                    <span style={{ width: 28, height: 28, borderRadius: 999, background: '#1E3A5F', color: '#fff', fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>{t}
                  </li>
                ))}
              </ol>
              <div style={{ marginTop: 24 }}>
                <button onClick={() => go('demo-reservation')} style={window.btnSolid}>大きな画面で操作する&nbsp;→</button>
              </div>
              <p style={{ margin: '20px 0 0', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.8, color: 'var(--neutral-600)' }}>※ 架空のお客様名・サンプルデータです。実際の内容は、ご要望に合わせて設計します。</p>
            </div>
            <DemoFrame variant="browser" designWidth={900} scale={0.75} height={680} label="予約・顧客管理システム（サンプル）" src="demos/salon.html?v=20261107b" title="予約・顧客管理システムのサンプル" />
          </div>
        </Container>
      </div>

      {/* CTA */}
      <Container style={{ paddingBottom: 110 }}>
        <Rule strong />
        <div style={{ textAlign: 'center', paddingTop: 56 }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16 }}>
            <button onClick={() => go('consulting')} style={window.btnOutline}>←&nbsp;コンサルティングへ戻る</button>
            <button onClick={() => go('contact')} style={window.btnSolid}>相談する&nbsp;→</button>
          </div>
        </div>
      </Container>
    </main>
  );
}

window.DemosPage = DemosPage;
