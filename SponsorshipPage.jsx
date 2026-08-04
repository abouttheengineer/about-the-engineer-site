/**
 * SponsorshipPage — introduces the teams About the Engineer sponsors.
 * Currently a single entry (SAGAMIFORCE); built as a list so more can
 * be added later without restructuring.
 *
 * The CTA button breaks from the site's usual sharp monochrome buttons —
 * a rounded pill in the sponsored team's own brand color — by deliberate
 * exception for this page only.
 */
function SponsorshipPage() {
  const sponsors = [
    {
      name: 'SAGAMIFORCE',
      logo: 'sponsor-sagamiforce-logo.jpg',
      color: '#C8102E',
      desc: '合同会社About the EngineerはSAGAMIFORCEを応援しています。',
      url: 'https://sagamiforce.com',
    },
  ];

  return (
    <main>
      <PageHero
        kicker="Sponsorship — 協賛"
        lead="About the Engineerが応援しているチームをご紹介します。" />

      <Container style={{ paddingBottom: 120 }}>
        <Rule strong />
        {sponsors.map((s, i) => (
          <div key={s.name} style={{ padding: '48px 0', borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)' }}>
            <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(28px,3.4vw,44px)', letterSpacing: '0.01em', lineHeight: 1, color: 'var(--zinc-950)', marginBottom: 32 }}>{s.name}</div>
            <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 48, alignItems: 'center' }}>
              {s.logo && (
                <div style={{ border: '1px solid var(--neutral-200)', padding: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={s.logo} alt={s.name + ' ロゴ'} style={{ display: 'block', width: '100%', height: 'auto' }} />
                </div>
              )}
              <div>
                <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.85, color: 'var(--text-on-light-muted)', maxWidth: 480 }}>{s.desc}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{
                  marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 12,
                  fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14, letterSpacing: '0.04em',
                  padding: '12px 14px 12px 28px', borderRadius: 999,
                  border: `2px solid ${s.color}`, color: s.color, background: 'var(--white)',
                  textDecoration: 'none', transition: 'var(--transition-colors)',
                }}>
                  公式サイト
                  <span style={{
                    width: 26, height: 26, borderRadius: '50%', border: `2px solid ${s.color}`,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13,
                  }}>→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
        <Rule />
      </Container>
    </main>
  );
}

window.SponsorshipPage = SponsorshipPage;
