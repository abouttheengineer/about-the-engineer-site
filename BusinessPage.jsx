/**
 * BusinessPage — the studio's own products, presented as its services.
 * Spods is the featured product; FitConnect and KotobaConnect follow.
 */
function BusinessPage({ go }) {
  const DS = window.AboutTheEngineerDesignSystem_78d035;
  const { Badge } = DS;
  const categories = window.PRODUCT_CATEGORIES;
  const isAscii = s => /^[\x00-\x7F]+$/.test(s);

  return (
    <main>
      <PageHero
        kicker="Products — 自社プロダクト" />

      <Container style={{ paddingBottom: 96 }}>
        {categories.map((cat, ci) => {
          const products = window.PRODUCTS.filter(p => p.category === cat.key);
          return (
            <div key={cat.key} style={{ marginTop: ci === 0 ? 0 : 72 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--neutral-600)' }}>{cat.label}</span>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--neutral-600)' }}>{cat.jp}</span>
              </div>
              <Rule strong />
              {products.length === 0 && (
                <div style={{ padding: '40px 0', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-on-light-muted)' }}>Coming soon</div>
              )}
              {products.map((p, i) => (
                <div key={p.slug}
                  onClick={() => go('product-' + p.slug)}
                  className="rgrid"
                  style={{ display: 'grid', gridTemplateColumns: '0.32fr 1fr auto', gap: 40, alignItems: 'start', padding: '40px 0', borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)', cursor: 'pointer' }}>
                  <div>
                    <div style={isAscii(p.name)
                      ? { fontFamily: 'var(--font-product)', textTransform: 'uppercase', fontSize: 'clamp(34px,4vw,52px)', letterSpacing: '0.02em', lineHeight: 0.95, color: 'var(--zinc-950)' }
                      : { fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '0.01em', lineHeight: 1.15, color: 'var(--zinc-950)' }}>{p.name}</div>
                    <div style={{ marginTop: 8, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--neutral-600)' }}>{p.jp}</div>
                  </div>
                  <div>
                    <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.75, color: 'var(--text-on-light-muted)', maxWidth: 560 }}>{p.desc}</p>
                    <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
                      {p.tags.map(t => (
                        <Badge key={t} tone="outline" style={{ color: 'var(--zinc-950)' }}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <div style={{ alignSelf: 'center', fontFamily: 'var(--font-body)', fontSize: 22, color: 'var(--zinc-950)' }}>→</div>
                </div>
              ))}
              <Rule />
            </div>
          );
        })}
      </Container>
    </main>
  );
}

window.BusinessPage = BusinessPage;
