/**
 * InvestmentPage — 投資事業部. Same banner-hero / alternating-band layout
 * as CompanyPage: Overview / Investment Policy / Programs / Contact.
 */
function InvestmentPage({ go }) {
  const policy = [
    { jp: '対象領域', en: 'Focus', items: ['シード〜アーリーステージのテクノロジー / DX / Web3領域'] },
    { jp: '投資形態', en: 'Type', items: ['株式引受', 'J-KISS', 'ファンド出資'] },
  ];

  const programs = [
    {
      title: 'シード・学生起業家への直接出資（J-KISS型）',
      amount: '1口 10万〜30万円',
      desc: '大学発ベンチャーや、創業直後の若い起業家に「応援金」として少額出資するアプローチです。',
      example: {
        amount: '30万円',
        uses: ['法人設立・登記費用', 'サービスの試作・開発費', 'サーバー・ツール利用料'],
        flow: [
          { t: '出資', d: 'J-KISS（新株予約権）の契約を結び、出資を行います。' },
          { t: '事業を進める', d: '起業家は、いただいた資金で事業の立ち上げに取り組みます。' },
          { t: '次の資金調達', d: '次の資金調達などのタイミングで、契約の条件に沿って株式へ転換されます。' },
        ],
      },
    },
  ];

  const Heading = ({ en, jp, dark = false }) => (
    <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px 18px', marginBottom: 48 }}>
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-ui)', fontWeight: 700,
        fontSize: 'clamp(32px, 4.6vw, 52px)', letterSpacing: '-0.01em', lineHeight: 1,
        color: dark ? 'var(--white)' : 'var(--zinc-950)',
      }}>{en}</h2>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, color: dark ? 'var(--zinc-400)' : 'var(--neutral-600)' }}>{jp}</span>
    </div>
  );

  const card = { background: 'var(--white)', border: '1px solid var(--neutral-200)', borderRadius: 12 };

  return (
    <main>
      {/* Banner hero */}
      <div style={{ background: 'var(--zinc-950)', paddingTop: 72 }}>
        <Container style={{ paddingTop: 72, paddingBottom: 72, textAlign: 'center' }}>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 'clamp(36px, 6vw, 64px)', letterSpacing: '-0.01em', lineHeight: 1, color: 'var(--white)' }}>Investment</h1>
          <div style={{ marginTop: 16, fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: 'var(--zinc-400)' }}>投資事業部</div>
        </Container>
      </div>

      {/* Overview */}
      <div style={{ background: 'var(--neutral-50)' }}>
        <Container style={{ paddingTop: 96, paddingBottom: 96 }}>
          <Heading en="Overview" jp="事業概要" />
          <div className="rgrid" style={{ ...card, padding: 'clamp(32px, 6vw, 72px)', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
            <div>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(22px, 2.8vw, 34px)', lineHeight: 1.5, color: 'var(--zinc-950)' }}>
                新しい価値づくりに、ともに挑む。
              </p>
              <p style={{ margin: '28px 0 0', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 2.1, color: 'var(--text-on-light-muted)' }}>
                投資事業部は、将来性のある事業やプロダクトへの投資を通じて、新しい価値づくりに取り組む部署です。
                自社でプロダクトを開発・運営してきた経験を活かし、事業の立ち上げから成長までを見据えた関わり方を大切にしています。
              </p>
            </div>
            <img src="assets/006.jpeg" alt="" style={{ display: 'block', width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 12 }} />
          </div>
        </Container>
      </div>

      {/* Policy */}
      <div style={{ background: 'var(--neutral-100)' }}>
        <Container style={{ paddingTop: 96, paddingBottom: 96 }}>
          <Heading en="Investment Policy" jp="投資方針" />
          <div style={{ ...card, padding: '8px clamp(24px, 5vw, 56px)' }}>
            {policy.map((it, i) => (
              <div key={it.en} className="rgrid" style={{ display: 'grid', gridTemplateColumns: '0.3fr 1fr', gap: 32, alignItems: 'center', padding: '32px 0', borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(19px,2vw,24px)', lineHeight: 1.3, color: 'var(--zinc-950)' }}>{it.jp}</div>
                  <div style={{ marginTop: 6, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--neutral-600)' }}>{it.en}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {it.items.map(t => (
                    <span key={t} style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, lineHeight: 1.6, color: 'var(--zinc-950)', background: 'var(--neutral-100)', borderRadius: 999, padding: '6px 18px' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Programs */}
      <div style={{ background: 'var(--neutral-50)' }}>
        <Container style={{ paddingTop: 96, paddingBottom: 96 }}>
          <Heading en="Programs" jp="投資の取り組み" />
          {programs.map((pg, i) => (
            <div key={pg.title} style={{ ...card, padding: 'clamp(28px, 5vw, 56px)', marginTop: i === 0 ? 0 : 24 }}>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 700, color: 'var(--neutral-600)' }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{ marginTop: 10, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(20px, 2.4vw, 28px)', lineHeight: 1.5, color: 'var(--zinc-950)' }}>{pg.title}</div>
              <div style={{ display: 'inline-block', marginTop: 16, fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: 'var(--white)', background: 'var(--zinc-950)', borderRadius: 999, padding: '6px 18px' }}>{pg.amount}</div>
              <p style={{ margin: '24px 0 0', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 2, color: 'var(--text-on-light-muted)', maxWidth: 640 }}>{pg.desc}</p>
              {pg.example && (
                <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--neutral-200)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 12px' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 18, color: 'var(--zinc-950)' }}>出資のイメージ</span>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--neutral-600)' }}>Example</span>
                  </div>
                  <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '0.5fr 1fr', gap: 32, marginTop: 24, alignItems: 'start' }}>
                    <div style={{ background: 'var(--neutral-50)', border: '1px solid var(--neutral-200)', borderRadius: 12, padding: '24px 28px' }}>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, color: 'var(--neutral-600)' }}>出資額（例）</div>
                      <div style={{ marginTop: 6, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 44px)', lineHeight: 1.1, color: 'var(--zinc-950)' }}>{pg.example.amount}</div>
                      <div style={{ marginTop: 20, fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, color: 'var(--neutral-600)' }}>使い道の例</div>
                      <ul style={{ margin: '8px 0 0', padding: 0, listStyle: 'none' }}>
                        {pg.example.uses.map(u => (
                          <li key={u} style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.9, color: 'var(--zinc-950)' }}>・{u}</li>
                        ))}
                      </ul>
                    </div>
                    <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                      {pg.example.flow.map((f, fi) => (
                        <li key={f.t} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, padding: fi === 0 ? '0 0 20px' : '20px 0', borderTop: fi === 0 ? 'none' : '1px solid var(--neutral-200)' }}>
                          <span style={{ width: 32, height: 32, borderRadius: 999, background: 'var(--zinc-950)', color: 'var(--white)', fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{fi + 1}</span>
                          <div>
                            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: 'var(--zinc-950)' }}>{f.t}</div>
                            <div style={{ marginTop: 4, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-on-light-muted)' }}>{f.d}</div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <p style={{ margin: '24px 0 0', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.8, color: 'var(--neutral-600)' }}>※ あくまで一例です。実際の条件は、案件ごとにご相談のうえ決定します。</p>
                </div>
              )}
            </div>
          ))}
        </Container>
      </div>

      {/* Contact */}
      <div style={{ background: 'var(--white)' }}>
        <Container style={{ paddingTop: 96, paddingBottom: 120, textAlign: 'center' }}>
          <Heading en="Contact" jp="お問い合わせ" />
          <p style={{ margin: '-16px auto 32px', maxWidth: 560, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 2, color: 'var(--text-on-light-muted)' }}>
            投資に関するご相談は、お問い合わせフォームからご連絡ください。
          </p>
          <button onClick={() => go('contact')} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5em', cursor: 'pointer',
            fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15, padding: '14px 32px',
            background: 'var(--zinc-950)', color: 'var(--white)', border: '2px solid var(--zinc-950)', borderRadius: 999,
          }}>お問い合わせ&nbsp;→</button>
        </Container>
      </div>
    </main>
  );
}

window.InvestmentPage = InvestmentPage;
