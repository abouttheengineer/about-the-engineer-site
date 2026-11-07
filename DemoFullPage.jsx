/**
 * DemoFullPage — a demo shown at full size in a browser-window frame, so it can
 * be read and operated comfortably (the Demo list only shows a small preview).
 * Used by DemoDashboardPage / DemoReservationPage.
 */
function DemoFullPage({ go, kicker, lead, src, label, title, anchor }) {
  const [h, setH] = React.useState(() => Math.max(640, Math.min(900, window.innerHeight - 160)));
  React.useEffect(() => {
    const on = () => setH(Math.max(640, Math.min(900, window.innerHeight - 160)));
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);

  return (
    <main>
      <PageHero kicker={kicker} lead={lead} />

      <Container style={{ paddingBottom: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16 }}>
          <button onClick={() => { try { sessionStorage.setItem('demoTarget', anchor); } catch (e) { /* ignore */ } go('demos'); }} style={window.btnOutline}>←&nbsp;デモ一覧へ戻る</button>
          <button onClick={() => go('contact')} style={window.btnSolid}>無料で相談する&nbsp;→</button>
        </div>
      </Container>

      <Container style={{ paddingBottom: 96 }}>
        <DemoFrame variant="browser" height={h} label={label} src={src} title={title} />
        <p style={{ margin: '20px 0 0', textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.8, color: 'var(--neutral-600)' }}>※ サンプルの数字・名前です。実際の内容は、ご要望に合わせて設計します。</p>
      </Container>

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

window.DemoFullPage = DemoFullPage;
