/**
 * SupportPage — dedicated introduction to the foreign-resident life
 * support business. Editorial layout: hero, feature cards, plan, languages, CTA.
 */
function SupportPage({ go }) {
  const features = [
    {
      icon: 'languages', title: '安心の多言語サポート',
      desc: '日本語・英語・ベンガル語・ダリー語の4言語で対応できます。',
    },
    {
      icon: 'message-circle', title: '気軽に相談可能',
      desc: 'アプリのチャット・電話で、いつでも気軽に相談できます。',
    },
    {
      icon: 'building-2', title: '対面での相談もOK',
      desc: '弊社オフィスで、直接顔を合わせて相談できます。',
    },
  ];

  const included = [
    'チャット・電話での生活相談',
    '対面でのご相談',
    '市役所の手続き支援',
    '携帯電話の契約サポート',
    '安心の母国語で相談',
  ];

  const languages = [
    { jp: '日本語', native: '日本語' },
    { jp: '英語', native: 'English' },
    { jp: 'ベンガル語', native: 'বাংলা' },
    { jp: 'ダリー語', native: 'دری' },
  ];

  return (
    <main>
      <PageHero
        kicker="Support — 生活サポート"
        lead="外国人が日本で生活する上での「不便」を、多言語でサポートします。市役所の手続きから携帯電話の契約まで、日々の「困った」に安心の母国語で寄り添います。" />

      {/* Features */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Features" title="生活サポートの特徴" />
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {features.map(f => (
            <div key={f.title} style={{ background: '#F3EEE4', border: '1px solid var(--neutral-200)', padding: '36px 28px', textAlign: 'center' }}>
              <div style={{
                width: 56, height: 56, margin: '0 auto', borderRadius: '50%',
                background: 'var(--white)', border: '1px solid var(--neutral-300)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <i data-lucide={f.icon} style={{ width: 24, height: 24, color: 'var(--zinc-950)' }}></i>
              </div>
              <div style={{ marginTop: 20, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 17, color: 'var(--zinc-950)' }}>{f.title}</div>
              <p style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.75, color: 'var(--text-on-light-muted)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Plan */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Plan" title="ご利用プラン" />
        <Rule strong />
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', padding: '48px 0' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--neutral-600)' }}>生活サポートプラン</div>
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,5vw,64px)', color: 'var(--zinc-950)', lineHeight: 1 }}>月額2,500円</span>
            </div>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {included.map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--zinc-950)' }}>
                <i data-lucide="check" style={{ width: 18, height: 18, flexShrink: 0 }}></i>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Rule />
      </Container>

      {/* Languages */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Languages" title="対応言語" />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14 }}>
          {languages.map(l => (
            <div key={l.jp} style={{ border: '1px solid var(--neutral-300)', borderRadius: 999, padding: '10px 22px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--zinc-950)' }}>{l.jp}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-on-light-muted)' }}>{l.native}</div>
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

window.SupportPage = SupportPage;
