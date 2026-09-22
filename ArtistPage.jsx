function ArtistPage({ slug, go }) {
  const artist = (window.ARTISTS || []).find(a => a.slug === slug);
  if (!artist) return <main><Container style={{ paddingTop: 160 }}><p>Not found</p></Container></main>;

  return (
    <main>
      {/* Hero */}
      <div style={{ background: 'var(--zinc-950)' }}>
        <Container style={{ paddingTop: 120, paddingBottom: 80 }}>
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-end' }}>
            <img
              src={artist.image}
              alt={artist.name}
              style={{ width: 320, height: 320, objectFit: 'cover', display: 'block', flexShrink: 0 }}
            />
            <div>
              <div style={{
                fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600,
                letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
                color: 'var(--zinc-500)', marginBottom: 16,
              }}>{artist.genre}</div>
              <div style={{
                fontFamily: 'var(--font-display)', textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-tight)', fontSize: 'clamp(56px, 8vw, 112px)',
                lineHeight: 0.88, color: 'var(--white)',
              }}>{artist.name}</div>
            </div>
          </div>
        </Container>
      </div>

      {/* Discography — coming soon */}
      <Container style={{ paddingTop: 96, paddingBottom: 96 }}>
        <SectionHead kicker="Discography" title="楽曲" />
        <Rule strong />
        <div style={{
          padding: '80px 0', textAlign: 'center',
          fontFamily: 'var(--font-display)', textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-tight)', fontSize: 'clamp(32px, 5vw, 64px)',
          color: 'var(--neutral-300)',
        }}>Coming Soon</div>
        <Rule />
      </Container>

      <Container style={{ paddingBottom: 80, textAlign: 'center' }}>
        <button onClick={() => go('music')} style={btnOutline}>← Global Music Studio</button>
      </Container>
    </main>
  );
}

const btnBase = {
  display: 'inline-flex', alignItems: 'center', gap: '0.5em', cursor: 'pointer',
  fontFamily: 'var(--font-display)', textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-wider)', fontSize: 18, padding: '13px 30px',
  whiteSpace: 'nowrap', transition: 'var(--transition-all)',
};
const btnOutline = { ...btnBase, background: 'transparent', color: 'var(--zinc-950)', border: '2px solid var(--zinc-950)' };

window.ArtistPage = ArtistPage;
