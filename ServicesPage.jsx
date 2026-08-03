/**
 * ServicesPage — "Business" hub. A single index linking out to the three
 * business lines (Product Studio / Consulting / Support), each of which
 * keeps its own dedicated page and deep link.
 */
function ServicesPage({ go }) {
  const items = [
    {
      name: 'Product Studio', jp: '自社サービス開発',
      desc: 'Actimoをはじめ、自社サービスを企画から開発・運営まで一貫して手がけています。',
      dest: 'business',
    },
    {
      name: 'Consulting', jp: 'コンサルティング',
      desc: 'プロダクト開発で培った知見をもとに、事業戦略の立案からグロース施策の実行までを支援します。',
      dest: 'consulting',
    },
    {
      name: 'Support', jp: '外国人サポート',
      desc: '外国人が日本で生活する上での「不便」を、多言語でサポートします。',
      dest: 'support',
    },
  ];

  return (
    <main>
      <PageHero
        kicker="Business — 事業内容"
        lead="About the Engineerの3つの事業をご紹介します。" />

      <Container style={{ paddingBottom: 120 }}>
        <Rule strong />
        {items.map((it, i) => (
          <div key={it.name}
            onClick={() => go(it.dest)}
            className="rgrid"
            style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center', padding: '40px 0', borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)', cursor: 'pointer' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(28px,3.4vw,44px)', letterSpacing: '0.01em', lineHeight: 1, color: 'var(--zinc-950)' }}>{it.name}</div>
              <div style={{ marginTop: 8, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--neutral-600)' }}>{it.jp}</div>
              <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.75, color: 'var(--text-on-light-muted)', maxWidth: 560 }}>{it.desc}</p>
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 22, color: 'var(--zinc-950)' }}>→</div>
          </div>
        ))}
        <Rule />
      </Container>
    </main>
  );
}

window.ServicesPage = ServicesPage;
