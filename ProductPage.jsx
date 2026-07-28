/**
 * ProductDetailPage — single product overview page, reached from the
 * Products index. Editorial hero + one image/copy split + tags + CTA.
 */
function ProductDetailPage({ slug, go }) {
  const DS = window.AboutTheEngineerDesignSystem_78d035;
  const { Badge } = DS;
  const product = window.PRODUCTS.find(p => p.slug === slug) || window.PRODUCTS[0];
  const isAscii = s => /^[\x00-\x7F]+$/.test(s);

  return (
    <main>
      <Container style={{ paddingTop: 150, paddingBottom: 0 }}>
        <button onClick={() => go('business')} style={{
          background: 'none', border: 'none', padding: 0, cursor: 'pointer',
          fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
          letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
          color: 'var(--neutral-600)', display: 'inline-flex', alignItems: 'center', gap: 8,
        }}>← Products</button>
      </Container>

      <Container style={{ paddingTop: 24, paddingBottom: 60 }}>
        <Eyebrow style={{ display: 'block', marginBottom: 20 }}>Products — {product.jp}</Eyebrow>
        <div style={isAscii(product.name)
          ? { fontFamily: 'var(--font-product)', textTransform: 'uppercase', fontSize: 'clamp(48px, 8vw, 104px)', letterSpacing: '0.02em', lineHeight: 0.92, color: 'var(--zinc-950)' }
          : { fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '0.01em', lineHeight: 1.1, color: 'var(--zinc-950)' }}>{product.name}</div>
      </Container>

      <SplitSection
        kicker="Overview"
        kickerCase="none"
        title={product.jp}
        body={product.desc}
        slotId={'product-' + product.slug}
        fit={product.slug === 'actimo' ? 'contain' : undefined}
        placeholder={'画像をドロップ（' + product.name + '）'}
        action={(
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {product.tags.map(t => (
              <Badge key={t} tone="outline" style={{ color: 'var(--zinc-950)' }}>{t}</Badge>
            ))}
          </div>
        )} />

      <Container style={{ paddingTop: 24, paddingBottom: 120 }}>
        <Rule />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
          <button onClick={() => go('contact')} style={window.btnSolid}>お問い合わせ&nbsp;→</button>
        </div>
      </Container>
    </main>
  );
}

window.ProductDetailPage = ProductDetailPage;
