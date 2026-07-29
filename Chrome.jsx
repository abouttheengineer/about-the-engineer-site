/**
 * SiteHeader — fixed editorial top bar. Wordmark left, uppercase nav
 * right with an active underline. Solid white with a hairline bottom rule.
 */
function SiteHeader({ page, section, go }) {
  const nav = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'consulting-scroll', label: 'Consulting' },
    { id: 'business', label: 'Products' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(9,9,11,0.88)', backdropFilter: 'var(--backdrop-blur)',
      WebkitBackdropFilter: 'var(--backdrop-blur)', borderBottom: '1px solid var(--zinc-800)',
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 var(--page-gutter-lg)', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => go('home')} style={{
          background: 'none', border: 'none', padding: 0, cursor: 'pointer',
          fontFamily: 'var(--font-display)', textTransform: 'uppercase',
          letterSpacing: '0.14em', fontSize: 19, color: 'var(--white)',
        }}>About&nbsp;the&nbsp;Engineer</button>
        <nav style={{ display: 'flex', gap: 32 }}>
          {nav.map(n => {
            const on = n.id === 'about' ? section === 'about'
              : n.id === 'consulting-scroll' ? (section === 'consulting-scroll' || (page === 'consulting' && !section))
              : (page === n.id && !section);
            return (
              <button key={n.id} onClick={() => go(n.id)} style={{
                background: 'none', border: 'none', padding: '4px 0', cursor: 'pointer',
                fontFamily: 'var(--font-ui)', textTransform: 'uppercase', fontSize: 12,
                fontWeight: 600, letterSpacing: 'var(--tracking-wide)',
                color: on ? 'var(--white)' : 'var(--zinc-500)',
                borderBottom: `2px solid ${on ? 'var(--white)' : 'transparent'}`,
                transition: 'var(--transition-colors)',
              }}>{n.label}</button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

/**
 * SiteFooter — oversized Bebas wordmark band over ruled nav columns.
 */
function SiteFooter({ go }) {
  const cols = [
    { h: 'Sitemap', items: [['Home','home'],['About','about'],['Consulting','consulting'],['Products','business'],['Contact','contact']] },
  ];
  return (
    <footer style={{ background: 'var(--zinc-950)', color: 'var(--white)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '72px var(--page-gutter-lg) 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 220px))', gap: 40, paddingBottom: 48, justifyContent: 'end' }}>
          {cols.map(c => (
            <div key={c.h}>
              <Eyebrow dark>{c.h}</Eyebrow>
              <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {c.items.map(([label, dest]) => (
                  <li key={label}><button onClick={() => go(dest)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--zinc-300)' }}>{label}</button></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--zinc-800)', paddingTop: 28 }}>
          <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-tight)', lineHeight: 0.86, fontSize: 'clamp(48px, 12vw, 168px)', color: 'var(--white)' }}>About the Engineer</div>
        </div>
        <div style={{ marginTop: 24, fontFamily: 'var(--font-ui)', fontSize: 12, letterSpacing: '0.04em', color: 'var(--zinc-600)' }}>© 2026 About the Engineer GK — All rights reserved.</div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter });
