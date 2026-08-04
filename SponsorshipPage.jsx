/**
 * SponsorshipPage — introduces the teams About the Engineer sponsors.
 * Currently a single entry (SAGAMIFORCE); built as a list so more can
 * be added later without restructuring.
 */
function SponsorshipPage() {
  const sponsors = [
    {
      name: 'SAGAMIFORCE',
      logo: 'sponsor-sagamiforce-logo.jpg',
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
          <div key={s.name} className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center', padding: '40px 0', borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)' }}>
            <div>
              {s.logo && (
                <img src={s.logo} alt={s.name + ' ロゴ'} style={{ display: 'block', width: 200, height: 'auto', marginBottom: 24, border: '1px solid var(--neutral-200)' }} />
              )}
              <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(28px,3.4vw,44px)', letterSpacing: '0.01em', lineHeight: 1, color: 'var(--zinc-950)' }}>{s.name}</div>
              <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.75, color: 'var(--text-on-light-muted)', maxWidth: 560 }}>{s.desc}</p>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--zinc-950)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
              公式サイト <span style={{ fontSize: 18 }}>→</span>
            </a>
          </div>
        ))}
        <Rule />
      </Container>
    </main>
  );
}

window.SponsorshipPage = SponsorshipPage;
