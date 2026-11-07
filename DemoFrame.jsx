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
 * Usage: <DemoFrame src="demos/x.html?v=1" title="..." />
 */
function DemoFrame({ src, title, width = 374, height = 704, scale = 0.8, sandbox = 'allow-scripts allow-same-origin' }) {
  const [wide, setWide] = React.useState(() => window.innerWidth >= 768);
  React.useEffect(() => {
    const on = () => setWide(window.innerWidth >= 768);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);

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
