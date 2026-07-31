/**
 * ContactPage — company info column + a working-feel inquiry form
 * (client-side only; shows a thank-you state on submit).
 */
function ContactPage({ go }) {
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [form, setForm] = React.useState({ company: '', name: '', email: '', topic: 'コンサルティング', message: '' });
  const set = (k) => (e) => setForm(s => ({ ...s, [k]: e.target.value }));
  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch('https://formspree.io/f/xdaqvjpd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
      else setError(true);
    } catch (err) {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const field = {
    width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 15,
    color: 'var(--zinc-950)', background: 'var(--white)', border: '1px solid var(--neutral-300)',
    borderRadius: 'var(--radius-sm)', padding: '12px 14px', outline: 'none',
  };
  const label = { fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--neutral-600)', marginBottom: 7, display: 'block' };

  return (
    <main>
      <PageHero kicker="Contact — お問い合わせ" title="お問い合わせ"
        lead="プロジェクトのご相談、協業のお問い合わせはこちらから。まずは無料の初回相談を承ります。" />

      <Container style={{ paddingTop: 24, paddingBottom: 100 }}>
        <Rule strong />
        <div style={{ display: 'grid', gridTemplateColumns: '0.5fr 1fr', gap: 56, paddingTop: 48 }}>
          {/* Info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {[
              ['Email', 'hello@abouttheengineer.jp'],
              ['Office', '東京都渋谷区 — 完全リモート対応'],
              ['Hours', '平日 10:00 – 19:00 JST'],
              ['Social', 'X · Instagram · note'],
            ].map(([h, v]) => (
              <div key={h}>
                <Eyebrow>{h}</Eyebrow>
                <div style={{ marginTop: 8, fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--zinc-950)' }}>{v}</div>
              </div>
            ))}
          </div>

          {/* Form / thank-you */}
          {sent ? (
            <div style={{ border: '1px solid var(--neutral-200)', padding: '56px 40px', textAlign: 'center', alignSelf: 'start' }}>
              <Display size="clamp(36px,4vw,56px)">Thank You</Display>
              <p style={{ margin: '18px auto 0', maxWidth: 360, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: 'var(--text-on-light-muted)' }}>
                お問い合わせありがとうございます。2営業日以内にご連絡いたします。
              </p>
              <button onClick={() => { setSent(false); setForm({ company:'', name:'', email:'', topic:'コンサルティング', message:'' }); }} style={{ ...window.btnOutline, marginTop: 28 }}>フォームに戻る</button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div><span style={label}>会社名 / 屋号</span><input style={field} value={form.company} onChange={set('company')} placeholder="株式会社〇〇" /></div>
                <div><span style={label}>お名前 *</span><input style={field} required value={form.name} onChange={set('name')} placeholder="山田 太郎" /></div>
              </div>
              <div><span style={label}>メールアドレス *</span><input type="email" style={field} required value={form.email} onChange={set('email')} placeholder="you@example.com" /></div>
              <div>
                <span style={label}>ご相談内容</span>
                <select style={field} value={form.topic} onChange={set('topic')}>
                  {['コンサルティング','アプリ開発','在日外国人サポート','その他'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><span style={label}>メッセージ *</span><textarea style={{ ...field, minHeight: 130, resize: 'vertical' }} required value={form.message} onChange={set('message')} placeholder="ご相談の概要をお書きください。" /></div>
              {error && (
                <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--red-600)' }}>
                  送信に失敗しました。時間をおいて再度お試しいただくか、{' '}
                  <a href="mailto:hello@abouttheengineer.jp" style={{ color: 'inherit' }}>hello@abouttheengineer.jp</a> まで直接ご連絡ください。
                </p>
              )}
              <button type="submit" disabled={sending} style={{ ...window.btnSolid, alignSelf: 'flex-start', fontSize: 18, padding: '14px 36px', opacity: sending ? 0.6 : 1, cursor: sending ? 'default' : 'pointer' }}>
                {sending ? '送信中…' : <>送信する&nbsp;→</>}
              </button>
            </form>
          )}
        </div>
      </Container>
    </main>
  );
}

window.ContactPage = ContactPage;
