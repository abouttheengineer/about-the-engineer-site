/**
 * TechAssistantPage — 「Global Tech Assistant」: a consultation desk for
 * technical trouble (code, GAS, Firebase, domain / SSL, PC & accounts) plus a
 * light security check. Layout follows a landing-page pattern in the site's
 * white / navy style: hero → what we handle → typical trouble → flow → price →
 * notes (polite disclaimer) → CTA.
 * It has its own application form (not the shared Contact page), modelled on a
 * 「無料・緊急トラブル診断申し込み」 form: pick the trouble type, the target date, details.
 */
function TechAssistantPage({ go }) {
  const NAVY = '#1E3A5F';

  // 申し込みフォーム（このページ専用。共通のお問い合わせページとは別）
  const CATS = [
    { v: 'コードの修復', icon: 'code' },
    { v: 'GASの修復・新規作成', icon: 'gas' },
    { v: 'Firebaseの設定・障害', icon: 'fire' },
    { v: 'ドメイン・DNS・SSL', icon: 'globe' },
    { v: 'PC・ブラウザ・アカウントの設定', icon: 'laptop' },
    { v: 'セキュリティ診断', icon: 'shield' },
    { v: 'その他・よくわからない', icon: 'cube' },
  ];
  const DEADLINES = ['【至急】即日〜3日以内', '1週間以内', 'まずは状況を相談したい'];
  const EMPTY = { category: CATS[0].v, deadline: DEADLINES[0], company: '', name: '', email: '', github: '', message: '' };
  const [form, setForm] = React.useState(EMPTY);
  const [agree, setAgree] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState(false);
  const set = k => e => setForm(s => ({ ...s, [k]: e.target.value }));
  const submit = async e => {
    e.preventDefault();
    if (!agree) return;
    setSending(true);
    setError(false);
    try {
      const res = await fetch('https://formspree.io/f/xdaqvjpd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: '【Global Tech Assistant】無料・緊急トラブル診断のお申し込み',
          service: 'Global Tech Assistant',
          category: form.category, deadline: form.deadline,
          company: form.company, name: form.name, email: form.email,
          github: form.github, message: form.message,
          terms_agreed: 'ご利用規約に同意',
        }),
      });
      if (res.ok) setSent(true); else setError(true);
    } catch (err) {
      setError(true);
    } finally {
      setSending(false);
    }
  };
  const consult = () => jump('ta-apply');
  const field = {
    width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 15,
    color: 'var(--zinc-950)', background: 'var(--white)', border: '1px solid var(--neutral-300)',
    borderRadius: 'var(--radius-sm)', padding: '12px 14px', outline: 'none',
  };
  const lab = { display: 'block', marginBottom: 6, fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, color: 'var(--zinc-950)' };
  const req = <span style={{ marginLeft: 6, color: '#C2410C', fontWeight: 700 }}>*</span>;
  const jump = id => { const e = document.getElementById(id); if (e) window.scrollTo({ top: e.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' }); };

  const icons = {
    code: <g><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m13.5 5-3 14" /></g>,
    gas: <g><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5" /><path d="m10 13-2 2 2 2M14 13l2 2-2 2" /></g>,
    fire: <g><path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 .3 1.5 1 2 2 2-.5-3 0-6 1-8Z" /></g>,
    globe: <g><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z" /></g>,
    laptop: <g><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2 20h20" /></g>,
    shield: <g><path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.1 7.5 9.5 4.4-1.4 7.5-4.9 7.5-9.5V6L12 3Z" /><path d="m9 12 2.2 2.2L15.5 10" /></g>,
    cube: <g><path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></g>,
  };

  const areas = [
    { icon: 'code', title: 'コードの修復', sub: 'GitHub', desc: '引き継ぎ資料のないコードも、中身を調べて、修正の方法をご提案します。', items: ['フロント・バックエンドの不具合の修正', 'Pull Request（PR）でのお渡し', '仕様書のないコードの読み解き'] },
    { icon: 'gas', title: 'GASの修復・新規作成', sub: 'Google Apps Script', desc: '止まってしまったGoogle Apps Scriptの修復と、新しい自動化の作成に対応します。', items: ['トリガーのエラーや、仕様変更への対応', 'スプレッドシートの集計・通知の修正', '業務の自動化スクリプトの作成'] },
    { icon: 'fire', title: 'Firebaseの設定・障害', sub: 'Firebase', desc: 'Hosting、Firestore、Functions、認証、セキュリティルールなどの設定とトラブルに対応します。', items: ['Hosting・カスタムドメインのエラー', 'Firestoreのセキュリティルールの調整', 'Functionsのデプロイエラーの修正'] },
    { icon: 'globe', title: 'ドメイン・DNS・SSL', sub: 'Domain / DNS / SSL', desc: '「保護されていません」の警告や、DNS・メールの設定のトラブルに対応します。', items: ['SSL証明書の発行・更新のエラー', 'DNSレコードの切り替え設定', 'メールが届かない問題の改善（SPF・DKIM・DMARC）'] },
    { icon: 'laptop', title: 'PC・ブラウザ・アカウントの設定', sub: 'PC / Browser / Accounts', desc: 'ブラウザの通信エラーや、PCの環境づくり、管理者アカウントの整理に対応します。', items: ['Chromeの通信エラー（CORS・Cookieなど）', '退職者のアクセス権の整理', 'Google Workspace・Microsoft 365の権限整理'] },
    { icon: 'shield', title: 'セキュリティ診断', sub: 'Security Check', desc: '設定ミスや、ありがちな弱点がないかを、簡易的にチェックします。本格的な脆弱性診断ではありません。', items: ['推奨される設定の確認', '共有・公開の設定の確認', '気をつける点のご案内'] },
  ];
  const cases = [
    { tag: '前任者がいない', title: '引き継ぎ資料がなく、コードの修正やデプロイができない', text: '作った人が辞めてしまい、コードの中身も、直し方も、だれにもわからない。' },
    { tag: 'GASの停止', title: 'Google Apps Scriptが急に止まり、業務が止まった', text: '毎日動いていた、スプレッドシートやフォームの自動連携が、突然エラーになった。' },
    { tag: 'Firebaseの障害', title: 'Firebaseのエラーや権限で、画面が表示されない', text: 'Hostingへの反映に失敗した、または、Firestoreのルールの変更で、データの権限エラーが出ている。' },
    { tag: 'ドメイン・SSL', title: '「保護されていません」と表示され、メールも届かない', text: 'DNSやSSLの設定の不備で、サイトが危険と表示されたり、相手にメールが届かなくなったりした。' },
  ];
  const steps = [
    ['状況の共有', 'Share', '状況をうかがい、必要に応じて、GitHubへの招待（読み取りのみ）や、アクセス権の共有をお願いします。'],
    ['調査・ご報告', 'Report', '原因を調べて、問題の箇所、お見積り、直し方のプランをご報告します。'],
    ['修正', 'Fix', 'ご承認をいただいたあとに、修正を行い、修正した箇所がわかる形でお渡しします。'],
    ['動作の確認', 'Done', '本番の環境で、動作を確認して、完了です。'],
  ];
  const can = ['トラブルの原因の切り分けと、修正のご提案・対応', '設定の確認と、アドバイス', '簡易的なセキュリティのチェック'];
  const cannot = ['「弱点（脆弱性）がない」「安全です」と保証すること', '本格的な脆弱性診断（専門の診断サービス）の代わりになること', '被害が起きないことや、完全に復旧することを、お約束すること'];
  const fine = [
    'セキュリティ診断は、推奨される設定や、ありがちなミスを確認してご案内する、簡易的なチェックです。「診断」という名前ですが、本格的な脆弱性診断ではありません。',
    '確認した範囲についても、弱点がないこと、安全であること、被害が生じないことを保証するものではありません。',
    'ご案内や作業をもとにした設定の変更や、その結果については、お客様ご自身のご判断でお願いいたします。当社は、故意または重大な過失がある場合を除き、法的な責任を負いかねます。',
    '当社が損害賠償の責任を負う場合でも、賠償の額は、当該のご相談について、お支払いいただいた料金の額を上限とします（当社に故意または重大な過失がある場合を除きます）。',
    '対象は、お客様ご自身が管理している（または、管理者の許可を得ている）コード、アカウント、サービスです。',
    'コードや設定、アクセス権などを共有いただくときは、共有する範囲を、あらかじめご確認ください。',
  ];

  const check = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 5 }}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>;

  return (
    <main>
      <PageHero
        kicker="Tech Support — 技術トラブル相談"
        title="Global Tech Assistant"
        lead="コード、GAS、Firebase、ドメイン・SSLなどの、「どこに頼めばいいかわからない」技術のトラブルを、原因の切り分けから、解決までお手伝いします。" />

      {/* CTA */}
      <Container style={{ paddingBottom: 96 }}>
        <Rule strong />
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16, paddingTop: 48 }}>
          <button onClick={consult} style={window.btnSolid}>相談してみる&nbsp;→</button>
          <button onClick={() => jump('ta-areas')} style={window.btnOutline}>対応できること</button>
        </div>
        <p style={{ margin: '22px 0 0', textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--neutral-600)' }}>初回30分は無料です</p>
      </Container>

      {/* What we handle */}
      <div id="ta-areas" style={{ background: '#EAF1F7', marginBottom: 96 }}>
        <Container style={{ paddingTop: 88, paddingBottom: 96 }}>
          <SectionHead kicker="Support" title="対応できること" style={{ marginBottom: 20 }} />
          <p style={{ margin: '0 auto 48px', maxWidth: 560, textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.9, color: 'var(--text-on-light-muted)' }}>
            開発の現場のトラブルから、社内の自動化、クラウド、ドメインの設定まで、幅広くご相談いただけます。
          </p>
          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'stretch' }}>
            {areas.map(a => (
              <div key={a.title} style={{ background: 'var(--white)', border: '1px solid #D5E2EE', borderRadius: 16, padding: 'clamp(24px, 3vw, 32px)', boxShadow: '0 16px 36px rgba(30,58,95,0.08)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: NAVY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[a.icon]}</svg>
                </div>
                <div style={{ marginTop: 22, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(19px, 1.9vw, 22px)', lineHeight: 1.4, color: 'var(--zinc-950)' }}>{a.title}</div>
                <div style={{ marginTop: 4, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--neutral-600)' }}>{a.sub}</div>
                <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.9, color: 'var(--text-on-light-muted)' }}>{a.desc}</p>
                <ul style={{ margin: 'auto 0 0', padding: '18px 0 0', listStyle: 'none', borderTop: '1px solid var(--neutral-200)', display: 'grid', gap: 10 }}>
                  {a.items.map(it => (
                    <li key={it} style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.7, color: 'var(--zinc-950)' }}>{check}<span>{it}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Typical trouble */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Trouble" title="こんなお困りごとに" />
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {cases.map(c => (
            <div key={c.title} style={{ position: 'relative', border: '1px solid var(--neutral-200)', borderRadius: 12, padding: '28px 28px 28px 34px', background: 'var(--white)', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 6, background: NAVY }} />
              <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, color: NAVY, background: '#EAF1F7', borderRadius: 999, padding: '4px 12px' }}>{c.tag}</span>
              <div style={{ marginTop: 14, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 18, lineHeight: 1.5, color: 'var(--zinc-950)' }}>{c.title}</div>
              <p style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.9, color: 'var(--text-on-light-muted)' }}>{c.text}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Flow */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Flow" title="進め方" />
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--neutral-200)', border: '1px solid var(--neutral-200)' }}>
          {steps.map(([jp, en, d], i) => (
            <div key={en} style={{ background: 'var(--white)', padding: '28px 22px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--neutral-300)' }}>0{i + 1}</div>
              <div style={{ marginTop: 14, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 20, lineHeight: 1.3, color: 'var(--zinc-950)' }}>{jp}</div>
              <div style={{ marginTop: 6, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--neutral-600)' }}>{en}</div>
              <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--text-on-light-muted)' }}>{d}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Price */}
      <Container id="ta-price" style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Price" title="料金" />
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 760, margin: '0 auto' }}>
          <div style={{ border: '1px solid var(--neutral-200)', borderRadius: 16, padding: 28, background: '#EAF1F7', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--neutral-600)' }}>はじめての方</div>
            <div style={{ marginTop: 10, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: NAVY }}>初回30分 無料</div>
          </div>
          <div style={{ border: '1px solid var(--neutral-200)', borderRadius: 16, padding: 28, background: 'var(--white)', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--neutral-600)' }}>続きをご希望の方</div>
            <div style={{ marginTop: 10, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: NAVY }}>60分 5,000円<span style={{ marginLeft: 4, fontSize: 13, fontWeight: 400, color: 'var(--neutral-600)' }}>（税抜）</span></div>
          </div>
        </div>
        <p style={{ margin: '20px auto 0', maxWidth: 760, textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.9, color: 'var(--neutral-600)' }}>
          ※ 修正などの作業は、内容と作業の時間に応じて、お見積りします。
        </p>
      </Container>

      {/* Notice: pop but polite */}
      <Container id="ta-notice" style={{ paddingBottom: 96 }}>
        <div style={{ background: '#FFF7E0', border: '1px solid #F3D98B', borderRadius: 24, padding: 'clamp(24px, 4vw, 48px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#F5B83D', color: '#5A3B00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 22, flexShrink: 0 }}>!</div>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(20px, 2.4vw, 26px)', lineHeight: 1.4, color: 'var(--zinc-950)' }}>ご利用にあたって</div>
              <div style={{ marginTop: 4, fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.8, color: '#6B5420' }}>ご利用にあたり、できること・できないことを、あらかじめご案内いたします。</div>
            </div>
          </div>

          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 28 }}>
            <div style={{ background: '#fff', borderRadius: 16, padding: '22px 24px' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: '#1B6B3A' }}>できること</div>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
                {can.map(t => <li key={t} style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--zinc-950)' }}><span aria-hidden="true" style={{ color: '#1B6B3A', fontWeight: 700 }}>○</span><span>{t}</span></li>)}
              </ul>
            </div>
            <div style={{ background: '#fff', borderRadius: 16, padding: '22px 24px' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: '#8A5A00' }}>できないこと</div>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
                {cannot.map(t => <li key={t} style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--zinc-950)' }}><span aria-hidden="true" style={{ color: '#8A5A00', fontWeight: 700 }}>×</span><span>{t}</span></li>)}
              </ul>
            </div>
          </div>

          <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px dashed #E2C56E' }}>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: 'var(--zinc-950)' }}>免責事項</div>
            <ol style={{ margin: '12px 0 0', paddingLeft: 22, display: 'grid', gap: 8 }}>
              {fine.map(t => <li key={t} style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.9, color: '#4A3B14' }}>{t}</li>)}
            </ol>
            <button onClick={() => go('tech-assistant-terms')} style={{ marginTop: 16, background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: NAVY, textDecoration: 'underline' }}>ご利用規約をひらく →</button>
          </div>
        </div>
      </Container>

      {/* Application form (own form for this service) */}
      <Container id="ta-apply" style={{ paddingBottom: 96 }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, color: NAVY, background: '#EAF1F7', borderRadius: 999, padding: '5px 14px' }}>初回30分 無料</span>
          <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.3, color: 'var(--zinc-950)' }}>無料・緊急トラブル診断のお申し込み</h2>
          <p style={{ margin: '14px auto 0', maxWidth: 560, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.9, color: 'var(--text-on-light-muted)' }}>
            専門の知識は、必要ありません。該当する項目を選んで、いまのお困りごとをお知らせください。
          </p>
        </div>

        <div style={{ maxWidth: 820, margin: '0 auto', border: '1px solid var(--neutral-200)', borderRadius: 20, padding: 'clamp(22px, 4vw, 44px)', background: 'var(--white)', boxShadow: '0 20px 40px rgba(9,9,11,0.06)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#EAF1F7', color: NAVY, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
              </div>
              <div style={{ marginTop: 18, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 22, color: 'var(--zinc-950)' }}>お申し込みを受け付けました</div>
              <p style={{ margin: '12px auto 0', maxWidth: 460, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.9, color: 'var(--text-on-light-muted)' }}>
                内容を確認のうえ、担当者より、ご連絡いたします。
              </p>
              <button onClick={() => { setSent(false); setForm(EMPTY); setAgree(false); }} style={{ ...window.btnOutline, marginTop: 22 }}>もう一度、申し込む</button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div>
                <span style={lab}>1. 相談したい内容{req}<span style={{ marginLeft: 8, fontWeight: 400, fontSize: 12, color: 'var(--neutral-600)' }}>※ タップして選択</span></span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10 }}>
                  {CATS.map(c => {
                    const on = form.category === c.v;
                    return (
                      <button key={c.v} type="button" onClick={() => setForm(s => ({ ...s, category: c.v }))} aria-pressed={on}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '16px 10px', borderRadius: 12, cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, lineHeight: 1.4, textAlign: 'center', border: '1.5px solid ' + (on ? NAVY : 'var(--neutral-300)'), background: on ? '#EAF1F7' : '#fff', color: on ? NAVY : 'var(--zinc-950)' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[c.icon]}</svg>
                        <span>{c.v}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <span style={lab}>2. 希望する時期{req}</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10 }}>
                  {DEADLINES.map(d => {
                    const on = form.deadline === d;
                    return (
                      <label key={d} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px 10px', borderRadius: 12, cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textAlign: 'center', border: '1.5px solid ' + (on ? NAVY : 'var(--neutral-300)'), background: on ? '#EAF1F7' : '#fff', color: on ? NAVY : 'var(--zinc-950)' }}>
                        <input type="radio" name="ta-deadline" value={d} checked={on} onChange={set('deadline')} style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }} />
                        {d}
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div><label style={lab} htmlFor="ta-company">会社名 / 屋号</label><input id="ta-company" style={field} value={form.company} onChange={set('company')} placeholder="株式会社〇〇" /></div>
                <div><label style={lab} htmlFor="ta-name">ご担当者名{req}</label><input id="ta-name" style={field} required value={form.name} onChange={set('name')} placeholder="山田 太郎" /></div>
              </div>
              <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div><label style={lab} htmlFor="ta-email">メールアドレス{req}</label><input id="ta-email" type="email" style={field} required value={form.email} onChange={set('email')} placeholder="name@company.com" /></div>
                <div><label style={lab} htmlFor="ta-github">GitHubリポジトリのURL・関連の情報<span style={{ marginLeft: 6, fontWeight: 400, fontSize: 12, color: 'var(--neutral-600)' }}>（任意）</span></label><input id="ta-github" style={field} value={form.github} onChange={set('github')} placeholder="https://github.com/org/repo または 不明" /></div>
              </div>
              <div>
                <label style={lab} htmlFor="ta-message">お困りごとの症状・出ているエラー{req}</label>
                <textarea id="ta-message" style={{ ...field, minHeight: 130, resize: 'vertical' }} required value={form.message} onChange={set('message')} placeholder="例：GASのスプレッドシート連携が急に止まった／Firebaseのカスタムドメインの設定後にSSLエラーが出る／仕様書のないコードの不具合を直したい" />
              </div>

              <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.8, color: 'var(--zinc-950)', cursor: 'pointer' }}>
                <input type="checkbox" required checked={agree} onChange={e => setAgree(e.target.checked)} style={{ marginTop: 6, width: 16, height: 16, accentColor: NAVY, flexShrink: 0 }} />
                <span>
                  <a href="#tech-assistant-terms" target="_blank" rel="noopener" style={{ color: NAVY, fontWeight: 700 }}>ご利用規約</a>
                  に同意します。セキュリティ診断は簡易的なチェックであり、安全を保証するものではないことを確認しました。
                </span>
              </label>

              {error && (
                <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--red-600)' }}>
                  送信に失敗しました。時間をおいて再度お試しいただくか、{' '}
                  <a href="mailto:info@abouttheengineer.com" style={{ color: 'inherit' }}>info@abouttheengineer.com</a> まで直接ご連絡ください。
                </p>
              )}
              <div style={{ textAlign: 'center' }}>
                <button type="submit" disabled={sending || !agree} style={{ ...window.btnSolid, fontSize: 18, padding: '14px 44px', opacity: (sending || !agree) ? 0.6 : 1, cursor: (sending || !agree) ? 'default' : 'pointer' }}>
                  {sending ? '送信中…' : <>無料で診断を申し込む&nbsp;→</>}
                </button>
                <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: 12, lineHeight: 1.8, color: 'var(--neutral-600)' }}>
                  送信いただいた内容は、ご相談への対応のためにのみ使用します。くわしくは、<a href="#privacy" target="_blank" rel="noopener" style={{ color: 'inherit' }}>プライバシーポリシー</a>をご覧ください。
                </p>
              </div>
            </form>
          )}
        </div>
      </Container>

      <Container style={{ paddingBottom: 110 }}>
        <Rule strong />
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 48 }}>
          <button onClick={() => go('business')} style={window.btnOutline}>←&nbsp;ビジネスのページへ戻る</button>
        </div>
      </Container>
    </main>
  );
}

window.TechAssistantPage = TechAssistantPage;
