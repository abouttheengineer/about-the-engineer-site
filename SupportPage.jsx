/**
 * SupportPage — dedicated introduction to the foreign-resident life
 * support business. Editorial layout: hero, lead statement, services, pricing, CTA.
 */
function SupportPage({ go }) {
  const services = [
    {
      n: '01', title: 'アプリでの相談',
      desc: 'チャット・電話で、いつでも気軽に相談できます。',
    },
    {
      n: '02', title: '対面での相談',
      desc: '弊社オフィスで、直接顔を合わせて相談できます。',
    },
    {
      n: '03', title: '市役所手続き支援',
      desc: '住民登録や各種申請など、市役所での手続きをサポートします。',
    },
    {
      n: '04', title: '携帯電話の契約サポート',
      desc: '携帯電話の契約・プラン選びまで、わかりやすくサポートします。',
    },
  ];

  return (
    <main>
      <PageHero
        kicker="Support — 生活サポート"
        lead="外国人が日本で生活する上での「不便」を、多言語でサポートします。市役所の手続きから携帯電話の契約まで、日々の「困った」に安心の母国語で寄り添います。" />

      {/* Services */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Services" title="サポート内容" />
        <Rule strong />
        {services.map((s, i) => (
          <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 24, alignItems: 'start', padding: '36px 0', borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--neutral-300)' }}>({s.n})</span>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(26px,3.4vw,40px)', letterSpacing: '0.01em', lineHeight: 1, color: 'var(--zinc-950)' }}>{s.title}</div>
              <p style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--text-on-light-muted)', maxWidth: 560 }}>{s.desc}</p>
            </div>
          </div>
        ))}
        <Rule />
      </Container>

      {/* Pricing */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Pricing" title="料金" />
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '12px 0' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,5vw,64px)', color: 'var(--zinc-950)', lineHeight: 1 }}>500円</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-on-light-muted)' }}>/ 1回</span>
        </div>
      </Container>

      {/* CTA */}
      <Container style={{ paddingBottom: 110 }}>
        <Rule strong />
        <div style={{ textAlign: 'center', paddingTop: 56 }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(26px,3.2vw,42px)', lineHeight: 1.3, color: 'var(--zinc-950)' }}>日本での生活を、一緒に。</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
            <button onClick={() => go('contact')} style={window.btnSolid}>相談する&nbsp;→</button>
          </div>
        </div>
      </Container>
    </main>
  );
}

window.SupportPage = SupportPage;
