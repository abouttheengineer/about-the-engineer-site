/**
 * DemoFrame — embeds a self-contained demo page (HTML in demos/) inside a
 * phone-shaped frame. The demo runs in a sandboxed iframe (no popups, forms or
 * top navigation), so its styles and scripts stay separate from the site.
 * Only embed first-party files: same-origin is allowed so the page's own
 * relative assets load everywhere.
 *
 * On wide screens the phone is drawn at `scale` of its design size (the demo
 * keeps its normal layout, only the picture shrinks); on narrow screens it
 * fills the available width at full size.
 * Usage: <DemoFrame src="demos/x.html?v=1" title="..." />   (phone)
 *        <DemoFrame variant="browser" height={640} label="..." src=... title=... />   (wide app, full width)
 *        <DemoFrame variant="browser" designWidth={800} scale={0.75} height={640} ... />   (wide app shrunk into a column)
 */
function DemoFrame({ src, title, width = 374, height = 704, scale = 0.8, sandbox = 'allow-scripts allow-same-origin', variant = 'phone', label = '', designWidth = 0 }) {
  const [wide, setWide] = React.useState(() => window.innerWidth >= 768);
  React.useEffect(() => {
    const on = () => setWide(window.innerWidth >= 768);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);

  // Width of the space this frame sits in (used to shrink a browser frame to fit).
  const holder = React.useRef(null);
  const [cw, setCw] = React.useState(0);
  React.useEffect(() => {
    const el = holder.current;
    if (!el) return undefined;
    const on = () => setCw(el.clientWidth);
    on();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(on);
    ro.observe(el);
    return () => ro.disconnect();
  }, [variant, wide]);

  const bar = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', background: 'var(--neutral-100)', borderBottom: '1px solid var(--neutral-200)' }}>
      {[0, 1, 2].map(i => <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--neutral-300)' }} />)}
      {label && <span style={{ marginLeft: 8, fontSize: 12, color: 'var(--neutral-600)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>}
    </div>
  );
  const winStyle = { background: '#fff', border: '1px solid var(--neutral-200)', borderRadius: 14, overflow: 'hidden', boxShadow: '0 20px 40px rgba(9,9,11,0.10)' };

  // Browser-window frame for wide apps (dashboards, admin screens).
  //  - designWidth set, wide screen: the app is drawn at designWidth and shrunk to fit
  //    (at most `scale`), so it keeps its desktop layout in a narrow column.
  //  - otherwise: full width, no scaling (the app's own responsive layout applies).
  if (variant === 'browser' && designWidth && wide) {
    const s = cw ? Math.min(scale, cw / designWidth) : 0;
    return (
      <div ref={holder} style={{ width: '100%', minWidth: 0 }}>
        {s > 0 && (
          <div style={{ ...winStyle, width: designWidth * s, maxWidth: '100%', margin: '0 auto' }}>
            {bar}
            <div style={{ width: designWidth * s, height: height * s, overflow: 'hidden' }}>
              <div style={{ width: designWidth, height, transform: `scale(${s})`, transformOrigin: '0 0' }}>
                <iframe src={src} title={title} loading="lazy" sandbox={sandbox} style={{ display: 'block', width: '100%', height: '100%', border: 0 }} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (variant === 'browser') {
    return (
      <div style={winStyle}>
        {bar}
        <iframe src={src} title={title} loading="lazy" sandbox={sandbox}
          style={{ display: 'block', width: '100%', height: wide ? height : Math.min(height, 560), border: 0 }} />
      </div>
    );
  }

  const frame = {
    boxSizing: 'content-box', margin: '0 auto', overflow: 'hidden',
    border: '8px solid var(--zinc-950)', borderRadius: 38,
    background: '#fff', boxShadow: '0 20px 40px rgba(9,9,11,0.18)',
  };
  const iframe = { display: 'block', width: '100%', height: '100%', border: 0 };

  if (wide) {
    return (
      <div style={{ ...frame, width: width * scale, height: height * scale }}>
        <div style={{ width, height, transform: `scale(${scale})`, transformOrigin: '0 0' }}>
          <iframe src={src} title={title} loading="lazy" sandbox={sandbox} style={iframe} />
        </div>
      </div>
    );
  }
  return (
    <div style={{ ...frame, width: `min(${width}px, calc(100vw - 64px))`, height }}>
      <iframe src={src} title={title} loading="lazy" sandbox={sandbox} style={iframe} />
    </div>
  );
}

window.DemoFrame = DemoFrame;
