/**
 * Shared editorial-grid primitives for the corporate site.
 * Light-dominant, ruled, magazine-masthead language. All exported to
 * window for cross-file (Babel) access.
 */

function Container({ children, style = {}, id }) {
  return (
    <div id={id} className="abte-gutter" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 var(--page-gutter-lg)', ...style }}>
      {children}
    </div>
  );
}

/* Small uppercase tracked running-head / label */
function Eyebrow({ children, dark = false, style = {} }) {
  return (
    <span style={{
      fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600,
      textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)',
      color: dark ? 'var(--zinc-500)' : 'var(--neutral-600)', ...style,
    }}>{children}</span>
  );
}

function Rule({ dark = false, strong = false, style = {} }) {
  return <div style={{ height: 1, background: strong ? 'var(--zinc-950)' : (dark ? 'var(--zinc-800)' : 'var(--neutral-200)'), ...style }} />;
}

/* Big editorial display heading (Bebas, uppercase) */
function Display({ children, size = 'clamp(48px, 8vw, 128px)', dark = false, style = {} }) {
  return (
    <h1 style={{
      margin: 0, fontFamily: 'var(--font-display)', textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-tight)', lineHeight: 0.9,
      fontSize: size, color: dark ? 'var(--white)' : 'var(--zinc-950)', ...style,
    }}>{children}</h1>
  );
}

/* A page masthead: running head row + giant title + optional lead */
/* Centered page masthead: kicker + big JP-gothic title + lead */
function PageHero({ kicker, title, lead, big = false }) {
  return (
    <Container style={{ paddingTop: big ? 220 : 150, paddingBottom: big ? 100 : 60, textAlign: 'center' }}>
      {kicker && <Eyebrow style={{ display: 'block', marginBottom: 24, fontSize: 27 }}>{kicker}</Eyebrow>}
      {title && <h1 className={big ? 'ph-title-big' : ''} style={{
        margin: 0, fontFamily: 'var(--font-body)', fontWeight: 700,
        fontSize: big ? 'clamp(32px, 5vw, 76px)' : 'clamp(38px, 6vw, 76px)',
        lineHeight: big ? 1.04 : 1.14, letterSpacing: '-0.01em', color: 'var(--zinc-950)',
        whiteSpace: big ? 'nowrap' : 'normal',
        marginBottom: big ? 'clamp(48px, 9vw, 132px)' : 0,
      }}>{title}</h1>}
      {lead && (
        <p style={{
          margin: '28px auto 0', maxWidth: 600, fontFamily: 'var(--font-body)',
          fontSize: 18, lineHeight: 1.85, color: 'var(--text-on-light-muted)',
        }}>{lead}</p>
      )}
    </Container>
  );
}

/* Centered in-page section header: kicker + JP-gothic subhead */
function SectionHead({ kicker, title, style = {} }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 48, ...style }}>
      {kicker && <Eyebrow style={{ display: 'block', marginBottom: 16 }}>{kicker}</Eyebrow>}
      {title && <h2 style={{
        margin: 0, fontFamily: 'var(--font-body)', fontWeight: 700,
        fontSize: 'clamp(26px, 3.2vw, 42px)', lineHeight: 1.2, color: 'var(--zinc-950)',
      }}>{title}</h2>}
    </div>
  );
}

/* A ruled index row: (NN) — Title ........ meta → */
function RuledRow({ number, title, sub, meta, onClick, dark = false }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: 24,
        alignItems: 'center', padding: '28px 0',
        borderTop: `1px solid ${dark ? 'var(--zinc-800)' : 'var(--neutral-200)'}`,
        cursor: onClick ? 'pointer' : 'default',
        paddingLeft: hover && onClick ? 12 : 0,
        transition: 'padding 300ms cubic-bezier(0.4,0,0.2,1)',
      }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: dark ? 'var(--zinc-600)' : 'var(--neutral-300)' }}>{number}</span>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(26px,3.4vw,40px)', letterSpacing: '0.01em', lineHeight: 1, color: dark ? 'var(--white)' : 'var(--zinc-950)' }}>{title}</div>
        {sub && <div style={{ marginTop: 10, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: dark ? 'var(--zinc-400)' : 'var(--text-on-light-muted)', maxWidth: 560 }}>{sub}</div>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        {meta && <Eyebrow dark={dark}>{meta}</Eyebrow>}
        {onClick && <span style={{ fontFamily: 'var(--font-body)', fontSize: 22, color: dark ? 'var(--white)' : 'var(--zinc-950)', transform: hover ? 'translateX(4px)' : 'none', transition: 'transform 300ms' }}>→</span>}
      </div>
    </div>
  );
}

/* Alternating company-intro split: text one side, fillable image the other */
function SplitSection({ kicker, title, body, slotId, placeholder, src, reverse = false, action, kickerCase, titleSize, kickerStyle, id, fit }) {
  const text = (
    <div>
      <Eyebrow style={{ display: 'block', marginBottom: 16, ...(kickerCase ? { textTransform: kickerCase } : {}), ...kickerStyle }}>{kicker}</Eyebrow>
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-body)', fontWeight: titleSize ? 800 : 700,
        fontSize: titleSize || 'clamp(26px, 3.2vw, 44px)', lineHeight: 1.15, color: 'var(--zinc-950)',
      }}>{title}</h2>
      <p style={{
        margin: '20px 0 0', fontFamily: 'var(--font-body)', fontSize: 17,
        lineHeight: 1.85, color: 'var(--text-on-light-muted)', maxWidth: 460,
      }}>{body}</p>
      {action && <div style={{ marginTop: 28 }}>{action}</div>}
    </div>
  );
  const media = (
    <image-slot
      id={slotId}
      src={src}
      shape="rect"
      fit={fit}
      placeholder={placeholder}
      style={{ width: '100%', height: 'auto', aspectRatio: '4 / 3', display: 'block', background: 'var(--neutral-100)', border: '1px solid var(--neutral-200)' }}
    ></image-slot>
  );
  return (
    <Container id={id} style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        {reverse ? <>{media}{text}</> : <>{text}{media}</>}
      </div>
    </Container>
  );
}

Object.assign(window, { Container, Eyebrow, Rule, Display, PageHero, SectionHead, RuledRow, SplitSection });
