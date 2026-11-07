/**
 * ConsultingPage — dedicated introduction to the consulting business.
 * Editorial layout: hero, lead statement, support areas, process, CTA.
 */
function ConsultingPage({ go }) {
  // 支援領域は3つ: プロダクト開発支援 / AI支援 / Webサイト制作
  const areas = [
    {
      n: '01', icon: 'product', image: 'assets/phone-product.png', title: 'プロダクト開発|支援', en: 'Product Development',
      desc: '新しいサービスやアプリを形にするお手伝いをします。「何を作ればよいか」の整理から、開発・リリースまで伴走します。',
      forWho: '新しいサービスのアイデアがある方 / 何から始めればよいか迷っている方',
      deliverables: ['アイデアの整理・要件定義', 'スマホアプリ（iOS）の開発', 'WEBシステムの開発'],
    },
    {
      n: '02', icon: 'web', title: 'Webサイト制作', en: 'Website Production',
      desc: '会社やお店、サービスを紹介するWebサイトを、企画から制作、公開まで手がけます。',
      forWho: '会社やお店のサイトを作りたい方 / いまのサイトを作り直したい方',
      deliverables: ['サイトの構成・デザイン', 'Webサイトの制作', 'サイトの公開'],
    },
    {
      n: '03', icon: 'ai', title: 'AI支援', en: 'AI Support',
      desc: '業務や自社のサービスに、AIを取り入れるお手伝いをします。バックオフィス業務の効率化など、活用のご相談から、実際の開発まで対応します。',
      forWho: 'バックオフィスの作業を減らしたい方 / 自社のサービスにAIの機能を入れたい方',
      deliverables: ['AI活用のご相談', 'バックオフィス支援', '業務へのAI導入支援', 'AIを使った機能の開発'],
    },
  ];
  // 線で描いたアイコン（外部の画像は使わない）
  const icons = {
    product: <g><path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="m3 12.5 9 5 9-5" /><path d="m3 17 9 5 9-5" /></g>,
    ai: <g><path d="M11 3l2 5.5L18.5 10.5 13 12.5 11 18l-2-5.5L3.5 10.5 9 8.5 11 3Z" /><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></g>,
    web: <g><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /><path d="M7 6.5h.01M10 6.5h.01" /><path d="M7 13h6M7 16h10" /></g>,
  };
  const examples = [
    {
      title: 'SNS分析ダッシュボード', kind: 'WEBアプリ',
      desc: 'Instagram などのSNSの分析データを、CSVで取り込んでためていき、数年分をグラフで確認できるWEBアプリです。標準の画面では見られない長い期間の推移も、ひと目でわかります。',
      rows: [['対象', 'SNS運用の担当者・マーケティング担当'], ['対応端末', 'パソコン・タブレット'], ['開発内容', '画面設計、CSV取り込み、データ蓄積、グラフ表示'], ['参考料金', '2万円〜（税抜）']],
      tags: ['データの蓄積', '前年との比較', 'レポートの自動化'],
      demo: 'demo-dashboard',
    },
    {
      title: '英会話教室向けの通話アプリ', kind: 'スマホアプリ（iOS）',
      desc: '生徒と講師が、アプリから直接ビデオ通話でレッスンを受けられます。予約からレッスンまでを、1つのアプリで完結できます。',
      rows: [['対象', '英会話教室の生徒・講師'], ['対応端末', 'iPhone'], ['開発内容', '画面設計、通話機能、レッスン予約、通知'], ['参考料金', '10万円〜（税抜。API連携、アプリ本体のコーディング支援を含む）']],
      tags: ['ビデオ通話', 'レッスン予約', 'プッシュ通知'],
      demo: 'demo',
    },
    {
      title: '予約・顧客管理システム', kind: 'WEBアプリ',
      desc: '店舗やサロンの予約と、お客様の情報をまとめて管理できるシステムです。電話や紙の台帳での管理を置き換えます。',
      rows: [['対象', '店舗・サロンのスタッフ'], ['対応端末', 'パソコン・スマートフォン'], ['開発内容', '予約画面、顧客台帳、スタッフ用管理画面'], ['参考料金', '2万円〜（税抜）']],
      tags: ['予約管理', '顧客台帳', 'リマインド通知'],
      demo: 'demo-reservation',
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
      <div style={{ background: '#EAF1F7', marginBottom: 96 }}>
        <Container style={{ paddingTop: 88, paddingBottom: 96 }}>
          <SectionHead kicker="Services" title="支援領域" style={{ marginBottom: 20 }} />
          <p style={{ margin: '0 auto 52px', maxWidth: 560, textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.9, color: 'var(--text-on-light-muted)' }}>
            ITの力で、お客様のビジネスを支える3つの領域です。
          </p>
          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'stretch' }}>
            {areas.map(s => (
              <div key={s.n} style={{ background: 'var(--white)', border: '1px solid #D5E2EE', borderRadius: 16, padding: 'clamp(24px, 3vw, 36px)', boxShadow: '0 16px 36px rgba(30,58,95,0.08)', display: 'flex', flexDirection: 'column' }}>
                {/* 上のパネル: 画像があれば画像、なければ大きな線のアイコン */}
                <div style={{ position: 'relative', height: 210, borderRadius: 12, background: 'linear-gradient(160deg, #EAF1F7 0%, #D5E2EE 100%)', overflow: 'hidden', display: 'flex', alignItems: s.image ? 'flex-end' : 'center', justifyContent: 'center' }}>
                  {s.image ? (
                    <img src={s.image} alt="スマホアプリの画面のイメージ" style={{ display: 'block', height: 236, width: 'auto', marginBottom: -26 }} />
                  ) : (
                    <svg width="92" height="92" viewBox="0 0 24 24" fill="none" stroke="#1E3A5F" strokeOpacity="0.55" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[s.icon]}</svg>
                  )}
                  <span style={{ position: 'absolute', top: 14, left: 14, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '0.04em', color: '#fff', background: '#1E3A5F', borderRadius: 999, padding: '5px 12px', lineHeight: 1 }}>{s.n}</span>
                </div>
                <div style={{ marginTop: 24, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(24px, 2.6vw, 30px)', lineHeight: 1.3, color: 'var(--zinc-950)' }}>{s.title.split('|').map(t => <span key={t} style={{ display: 'inline-block' }}>{t}</span>)}</div>
                <div style={{ marginTop: 6, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: '0.04em', color: '#1E3A5F' }}>{s.en}</div>
                <p style={{ margin: '18px 0 0', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.9, color: 'var(--text-on-light-muted)' }}>{s.desc}</p>
                <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--neutral-200)' }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, color: 'var(--zinc-950)' }}>こんな方に</div>
                  <p style={{ margin: '6px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.8, color: 'var(--zinc-950)' }}>{s.forWho}</p>
                </div>
                <ul style={{ margin: 'auto 0 0', padding: '22px 0 0', listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {s.deliverables.map(d => (
                    <li key={d} style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: '#1E3A5F', background: '#EAF1F7', borderRadius: 999, padding: '6px 14px' }}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

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
                <button onClick={() => { try { sessionStorage.setItem('demoTarget', ex.demo); } catch (e) { /* ignore */ } go('demos'); }} style={{ ...window.btnOutline, marginTop: 16, fontSize: 13, padding: '8px 18px' }}>画面を触ってみる&nbsp;→</button>
              )}
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {ex.tags.map(t => (
                  <li key={t} style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: 'var(--zinc-950)', border: '1px solid var(--neutral-300)', borderRadius: 999, padding: '4px 12px' }}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p style={{ margin: '24px 0 0', textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--neutral-600)' }}>※ 上記は一般的な例です。参考料金は目安で、内容によって変わります。実際の内容は、ご要望に合わせてご提案します。</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>
          <button onClick={() => go('demos')} style={window.btnOutline}>デモ一覧を見る&nbsp;→</button>
        </div>
      </Container>

      {/* Other fees */}
      <Container id="price" style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Price" title="その他の料金" />
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { label: '運用保守', price: '月5,000円〜', unit: '（税抜）', desc: '公開したあとの運用と保守を承ります。内容は、ご利用の状況に合わせてご相談します。' },
            { label: '初回のご相談', price: '30分まで無料', unit: '', desc: 'はじめてのご相談は、30分まで無料です。お困りごとやご希望を、お聞かせください。' },
            { label: '都度のシステム相談・作業', price: '60分 5,000円', unit: '（税抜）', desc: 'システムのご相談を、1回ごとにご利用いただけます。ドメイン設定などの単発の作業も承ります（作業時間に応じて、お見積りします）。' },
          ].map(p => (
            <div key={p.label} style={{ border: '1px solid var(--neutral-200)', borderRadius: 12, padding: 28, background: 'var(--white)' }}>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--neutral-600)' }}>{p.label}</div>
              <div style={{ marginTop: 10, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(22px, 2.4vw, 28px)', lineHeight: 1.3, color: '#1E3A5F' }}>
                {p.price}<span style={{ fontSize: 13, fontWeight: 400, color: 'var(--neutral-600)', marginLeft: 4 }}>{p.unit}</span>
              </div>
              <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.8, color: 'var(--text-on-light-muted)' }}>{p.desc}</p>
            </div>
          ))}
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
