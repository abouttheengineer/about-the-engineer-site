/**
 * ConsultingPage — dedicated introduction to the consulting business.
 * Editorial layout: hero, lead statement, support areas, process, CTA.
 */
function ConsultingPage({ go }) {
  const services = [
    {
      n: '01', title: 'スマホアプリ（iOS）',
      desc: 'iPhoneで使えるアプリを、企画から開発、App Storeでの公開まで手がけます。',
      forWho: '自社のアプリを出したい方 / 店舗やサービスをアプリ化したい方',
      deliverables: ['アプリの企画・画面設計', 'iPhoneアプリの開発', 'App Storeへの公開・運用'],
    },
    {
      n: '02', title: 'WEBアプリ（業務用システム等）',
      desc: 'ブラウザで使えるシステムを開発します。会社の仕事をラクにする業務用システムなどに対応します。',
      forWho: '紙やExcelでの管理をやめたい方 / 社内の作業を効率化したい方',
      deliverables: ['業務用システム', '管理画面・社内ツール', 'お客様向けWEBサービス'],
    },
    {
      n: '03', title: 'プロダクト開発支援',
      desc: '新しいサービスやアプリを形にするお手伝いをします。「何を作ればよいか」の整理から、開発・リリースまで伴走します。',
      forWho: '新しいサービスのアイデアがある方 / 何から始めればよいか迷っている方',
      deliverables: ['アイデアの整理・要件定義', '画面・使い勝手の設計', '開発・リリースの進行支援'],
    },
  ];
  const examples = [
    {
      title: '分析用ダッシュボード', kind: 'WEBアプリ',
      desc: '売上やアクセスなどのデータを、グラフでひと目で確認できるWEBアプリです。毎月の集計作業を、画面を開くだけで済ませられます。',
      rows: [['対象', '社内の営業・マーケティング担当'], ['対応端末', 'パソコン・タブレット'], ['開発内容', '画面設計、データ連携、グラフ表示、管理画面']],
      tags: ['売上の見える化', 'グラフ表示', 'データ自動集計'],
      demo: 'demo-dashboard',
    },
    {
      title: '英会話教室向けの通話アプリ', kind: 'スマホアプリ（iOS）',
      desc: '生徒と講師が、アプリから直接ビデオ通話でレッスンを受けられます。予約からレッスンまでを、1つのアプリで完結できます。',
      rows: [['対象', '英会話教室の生徒・講師'], ['対応端末', 'iPhone'], ['開発内容', '画面設計、通話機能、レッスン予約、通知']],
      tags: ['ビデオ通話', 'レッスン予約', 'プッシュ通知'],
      demo: 'demo',
    },
    {
      title: '予約・顧客管理システム', kind: 'WEBアプリ',
      desc: '店舗やサロンの予約と、お客様の情報をまとめて管理できるシステムです。電話や紙の台帳での管理を置き換えます。',
      rows: [['対象', '店舗・サロンのスタッフ'], ['対応端末', 'パソコン・スマートフォン'], ['開発内容', '予約画面、顧客台帳、スタッフ用管理画面']],
      tags: ['予約管理', '顧客台帳', 'リマインド通知'],
    },
  ];
  const steps = [
    ['Hearing', 'ヒアリング', 'お困りごとやご希望を、お聞きします。'],
    ['Design', '設計', '作るものの内容と画面を、一緒に決めます。'],
    ['Build', '開発', '決めた内容をもとに、アプリやシステムを作ります。'],
    ['Release', '公開・運用', '公開後も、改善や保守を続けます。'],
  ];

  return (
    <main>
      <PageHero
        kicker="Consulting — コンサルティング"
        lead="スマホアプリやWEBシステムの開発から、新しいサービスづくりまで、ITの力でお客様のビジネスを支援します。" />

      {/* CTA */}
      <Container style={{ paddingBottom: 96 }}>
        <Rule strong />
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16, paddingTop: 48 }}>
          <button onClick={() => go('contact')} style={window.btnSolid}>無料で相談する&nbsp;→</button>
          <button onClick={() => { const e = document.getElementById('examples'); if (e) e.scrollIntoView({ behavior: 'smooth' }); }} style={window.btnOutline}>開発例を見る</button>
        </div>
      </Container>

      {/* Support areas */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Services" title="支援領域" />
        <Rule strong />
        {services.map((s, i) => (
          <div key={s.n} className="rgrid" style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 24, alignItems: 'start', padding: '36px 0', borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--neutral-300)' }}>({s.n})</span>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(24px,3vw,36px)', lineHeight: 1.3, color: 'var(--zinc-950)' }}>{s.title}</div>
              <p style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--text-on-light-muted)', maxWidth: 560 }}>{s.desc}</p>
              <p style={{ margin: '12px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--zinc-950)', maxWidth: 560 }}><strong style={{ marginRight: 8 }}>こんな方に</strong>{s.forWho}</p>
              <ul style={{ margin: '16px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {s.deliverables.map(d => (
                  <li key={d} style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tracking-wide)', color: 'var(--zinc-950)', border: '1px solid var(--neutral-300)', borderRadius: 999, padding: '6px 14px' }}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <Rule />
      </Container>

      {/* Examples */}
      <Container id="examples" style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Examples" title="開発例" />
        <p style={{ margin: '-24px auto 48px', textAlign: 'center', maxWidth: 560, fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.8, color: 'var(--neutral-600)' }}>
          どのようなものが作れるかを、一般的な例でご紹介します。
        </p>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {examples.map(ex => (
            <div key={ex.title} style={{ border: '1px solid var(--neutral-200)', borderRadius: 12, padding: 28, background: 'var(--white)' }}>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--neutral-600)' }}>{ex.kind}</div>
              <div style={{ marginTop: 8, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 20, lineHeight: 1.4, color: 'var(--zinc-950)' }}>{ex.title}</div>
              <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.8, color: 'var(--text-on-light-muted)' }}>{ex.desc}</p>
              <dl style={{ margin: '20px 0 0' }}>
                {ex.rows.map(([k, v]) => (
                  <div key={k} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 12, padding: '10px 0', borderTop: '1px solid var(--neutral-200)' }}>
                    <dt style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, color: 'var(--neutral-600)' }}>{k}</dt>
                    <dd style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.7, color: 'var(--zinc-950)' }}>{v}</dd>
                  </div>
                ))}
              </dl>
              {ex.demo && (
                <button onClick={() => { const e = document.getElementById(ex.demo); if (e) e.scrollIntoView({ behavior: 'smooth' }); }} style={{ ...window.btnOutline, marginTop: 16, fontSize: 13, padding: '8px 18px' }}>画面を触ってみる&nbsp;↓</button>
              )}
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {ex.tags.map(t => (
                  <li key={t} style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: 'var(--zinc-950)', border: '1px solid var(--neutral-300)', borderRadius: 999, padding: '4px 12px' }}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p style={{ margin: '24px 0 0', textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--neutral-600)' }}>※ 上記は一般的な例です。実際の内容は、ご要望に合わせてご提案します。</p>
      </Container>

      {/* Interactive demo */}
      <div id="demo" style={{ background: '#EAF1F7', marginBottom: 96 }}>
        <Container style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 700, color: 'var(--neutral-600)' }}>Demo</div>
              <h2 style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(26px, 3.4vw, 40px)', lineHeight: 1.3, color: 'var(--zinc-950)' }}>画面を触って、<br />イメージを確かめる</h2>
              <p style={{ margin: '20px 0 0', maxWidth: 460, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 2, color: 'var(--text-on-light-muted)' }}>
                英会話教室向けの通話アプリの、サンプル画面です。実際のアプリのように、タップして操作できます。
              </p>
              <ol style={{ margin: '24px 0 0', padding: 0, listStyle: 'none', maxWidth: 460 }}>
                {['「レッスンに入る」を押して、通話画面を見る', '通話中に、ミュートやカメラを切り替える', '「予約」タブで、次のレッスンを予約する'].map((t, i) => (
                  <li key={t} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 12, alignItems: 'center', padding: '10px 0', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--zinc-950)' }}>
                    <span style={{ width: 28, height: 28, borderRadius: 999, background: '#1E3A5F', color: '#fff', fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>{t}
                  </li>
                ))}
              </ol>
              <p style={{ margin: '20px 0 0', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.8, color: 'var(--neutral-600)' }}>※ サンプル画面です。実際のデザインや機能は、ご要望に合わせて設計します。</p>
            </div>
            <LessonAppMock />
          </div>
        </Container>
      </div>

      {/* Interactive demo: dashboard */}
      <Container id="demo-dashboard" style={{ paddingBottom: 96 }}>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
          <DashboardMock />
          <div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 700, color: 'var(--neutral-600)' }}>Demo</div>
            <h2 style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(26px, 3.4vw, 40px)', lineHeight: 1.3, color: 'var(--zinc-950)' }}>数字が、ひと目で<br />わかる画面に</h2>
            <p style={{ margin: '20px 0 0', maxWidth: 420, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 2, color: 'var(--text-on-light-muted)' }}>
              分析用ダッシュボードの、サンプル画面です。期間や指標を切り替えて、グラフの変化を確かめられます。
            </p>
            <ol style={{ margin: '24px 0 0', padding: 0, listStyle: 'none', maxWidth: 420 }}>
              {['「今週・今月・今年」で期間を切り替える', '「売上・アクセス・申込」で指標を切り替える', '棒にカーソルを合わせて、数字を見る'].map((t, i) => (
                <li key={t} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 12, alignItems: 'center', padding: '10px 0', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--zinc-950)' }}>
                  <span style={{ width: 28, height: 28, borderRadius: 999, background: '#1E3A5F', color: '#fff', fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>{t}
                </li>
              ))}
            </ol>
            <p style={{ margin: '20px 0 0', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.8, color: 'var(--neutral-600)' }}>※ サンプルの数字です。実際の内容は、ご要望に合わせて設計します。</p>
          </div>
        </div>
      </Container>

      {/* Process */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Process" title="進め方" />
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--neutral-200)', border: '1px solid var(--neutral-200)' }}>
          {steps.map(([en, jp, d], i) => (
            <div key={en} style={{ background: 'var(--white)', padding: '28px 22px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--neutral-300)' }}>0{i + 1}</div>
              <div style={{ marginTop: 14, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 20, lineHeight: 1.3, color: 'var(--zinc-950)' }}>{jp}</div>
              <div style={{ marginTop: 6, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--neutral-600)' }}>{en}</div>
              <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--text-on-light-muted)' }}>{d}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* CTA */}
      <Container style={{ paddingBottom: 110 }}>
        <Rule strong />
        <div style={{ textAlign: 'center', paddingTop: 56 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => go('contact')} style={window.btnSolid}>相談する&nbsp;→</button>
          </div>
        </div>
      </Container>
    </main>
  );
}

window.ConsultingPage = ConsultingPage;
