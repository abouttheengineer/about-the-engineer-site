/**
 * ConsultingPage — dedicated introduction to the consulting business.
 * Editorial layout: hero, lead statement, support areas, process, CTA.
 */
function ConsultingPage({ go }) {
  const services = [
    {
      n: '01', title: '事業戦略・新規事業設計',
      desc: '市場調査から事業仮説の検証まで、新規事業の立ち上げを支援します。',
      deliverables: ['市場・競合分析レポート', '事業計画書・収益モデル', 'MVP検証プラン'],
      format: '4〜8週間 / 週次ミーティング',
    },
    {
      n: '02', title: 'プロダクト開発支援',
      desc: '自社プロダクトで培った開発体制を活かし、要件定義から実装・リリースまでを支援します。',
      deliverables: ['要件定義書・仕様書', 'UI/UXデザイン', '開発・実装（内製チーム編成含む）'],
      format: '3ヶ月〜 / 常駐 or 週次コミット',
    },
  ];
  const steps = [
    ['Discover', 'ヒアリング・現状分析', '事業フェーズと課題を構造化し、注力すべき論点を定めます。'],
    ['Design', '仮説・戦略設計', '検証可能な仮説に分解し、優先順位と指標を設計します。'],
    ['Build', '実行・検証', '施策を実行し、データで効果を検証。素早く学習を回します。'],
    ['Grow', 'グロース', '勝ち筋を見極め、再現性のある成長の仕組みに育てます。'],
  ];

  return (
    <main>
      <PageHero
        kicker="Consulting — コンサルティング"
        lead="プロダクト開発で培った知見をもとに、事業戦略の立案からグロース施策の実行までを一気通貫で支援します。" />

      {/* Lead statement */}
      <Container style={{ paddingBottom: 96 }}>
        <Rule strong />
        <p style={{
          margin: '56px auto 0', textAlign: 'center', maxWidth: 880,
          fontFamily: 'var(--font-body)', fontSize: 'clamp(22px,2.6vw,34px)',
          lineHeight: 1.6, color: 'var(--zinc-950)',
        }}>
        </p>
      </Container>

      {/* Support areas */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Services" title="支援領域" />
        <Rule strong />
        {services.map((s, i) => (
          <div key={s.n} className="rgrid" style={{ display: 'grid', gridTemplateColumns: '64px 1fr 260px', gap: 24, alignItems: 'start', padding: '36px 0', borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--neutral-300)' }}>({s.n})</span>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(26px,3.4vw,40px)', letterSpacing: '0.01em', lineHeight: 1, color: 'var(--zinc-950)' }}>{s.title}</div>
              <p style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--text-on-light-muted)', maxWidth: 560 }}>{s.desc}</p>
              <ul style={{ margin: '16px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {s.deliverables.map(d => (
                  <li key={d} style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tracking-wide)', color: 'var(--zinc-950)', border: '1px solid var(--neutral-300)', borderRadius: 999, padding: '6px 14px' }}>{d}</li>
                ))}
              </ul>
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--neutral-600)', textAlign: 'right' }}>{s.format}</div>
          </div>
        ))}
        <Rule />
      </Container>

      {/* Process */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Process" title="進め方" />
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--neutral-200)', border: '1px solid var(--neutral-200)' }}>
          {steps.map(([en, jp, d], i) => (
            <div key={en} style={{ background: 'var(--white)', padding: '28px 22px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--neutral-300)' }}>0{i + 1}</div>
              <div style={{ marginTop: 14, fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 26, letterSpacing: '0.02em', lineHeight: 1, color: 'var(--zinc-950)' }}>{en}</div>
              <div style={{ marginTop: 8, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--neutral-600)' }}>{jp}</div>
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
