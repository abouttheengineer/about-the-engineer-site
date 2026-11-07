/**
 * DemoFrame — embeds a self-contained demo page (HTML in demos/) inside a
 * phone-shaped frame. The demo runs in a sandboxed iframe (no popups, forms or
 * top navigation), so its styles and scripts stay separate from the site.
 * Only embed first-party files: same-origin is allowed so the page's own
 * relative assets load everywhere.
 * Usage: <DemoFrame src="demos/x.html?v=1" title="..." />
 */
function DemoFrame({ src, title, width = 390, height = 720, sandbox = 'allow-scripts allow-same-origin' }) {
  return (
    <div style={{
      width: `min(${width}px, calc(100vw - 48px))`, height, boxSizing: 'border-box', margin: '0 auto',
      border: '8px solid var(--zinc-950)', borderRadius: 38, overflow: 'hidden',
      background: '#fff', boxShadow: '0 20px 40px rgba(9,9,11,0.18)',
    }}>
      <iframe
        src={src} title={title} loading="lazy"
        sandbox={sandbox}
        style={{ display: 'block', width: '100%', height: '100%', border: 0 }} />
    </div>
  );
}

window.DemoFrame = DemoFrame;
