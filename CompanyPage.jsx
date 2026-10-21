/**
 * CompanyPage — company detail page, reached from the Home "会社概要"
 * section. Layout follows a recruit-site pattern: banner hero, then
 * alternating background bands, each with a left-aligned
 * "ENGLISH 日本語" heading — Message / Story / Divisions (Product Development / Business Support / Investment).
 */
function CompanyPage({ go }) {
  const divisions = [
    {
      name: 'Product Development', jp: 'プロダクト開発部',
      desc: 'Actimoをはじめ、自社サービスを企画から開発・運営まで一貫して手がけています。',
      dest: 'business',
    },
    {
      name: 'Business Support', jp: 'ビジネスサポート部',
      desc: 'プロダクト開発で培った知見をもとに、事業戦略の立案からグロース施策の実行までを支援します。',
      dest: 'consulting',
    },
    {
      name: 'Investment', jp: '投資事業部',
      dest: 'investment',
      desc: '将来性のある事業やプロダクトへの投資を通じて、新しい価値づくりに取り組みます。',
    },
  ];

  const story = [
    { en: 'Build', jp: 'つくる', desc: 'アスリート向けの食事管理サービス「Actimo」や、女性専用のヘルスケアアプリ「miomio」など、暮らしや健康を支えるサービスを自社で企画・開発・運営しています。' },
    { en: 'Support', jp: '支える', desc: 'プロダクト開発で培った知見をもとに、事業戦略からグロース施策までをご支援します。また、外国人の方が日本で暮らす上での「不便」も、多言語でサポートしています。' },
    { en: 'Cheer', jp: '応援する', desc: 'シント＝トロイデンVVや車いすバスケットボールチームSAGAMIFORCE、Vue Fes Japanなど、挑戦する人やコミュニティを応援しています。音楽プロダクションとしても活動しています。' },
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
          <h1 style={{ margin: 0, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 'clamp(36px, 6vw, 64px)', letterSpacing: '-0.01em', lineHeight: 1, color: 'var(--white)' }}>Company</h1>
          <div style={{ marginTop: 16, fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: 'var(--zinc-400)' }}>会社について</div>
        </Container>
      </div>

      {/* Message */}
      <div id="message" style={{ background: 'var(--neutral-50)' }}>
        <Container style={{ paddingTop: 96, paddingBottom: 96 }}>
          <Heading en="Message" jp="採用メッセージ" />
          <div className="rgrid" style={{ ...card, padding: 'clamp(32px, 6vw, 72px)', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
            <div>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: 1.5, color: 'var(--zinc-950)' }}>
                ともにつくる。
              </p>
              <p style={{ margin: '28px 0 0', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 2.1, color: 'var(--text-on-light-muted)', maxWidth: 620 }}>
                私たちは、世界中の人にとってよりよいサービスを、<br />
                ともにつくる仲間を探しています。<br />
                <br />
                開発、ビジネスサポート、投資。役割は違っても、<br />
                「すべての人にテクノロジーを」という想いは同じです。<br />
                <br />
                あなたの力を、私たちと一緒に活かしてください。
              </p>
            </div>
            <img src="assets/5083746_s.jpg" alt="" style={{ display: 'block', width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 12 }} />
          </div>
        </Container>
      </div>

      {/* Story */}
      <div id="story" style={{ background: '#EAF1F7' }}>
        <Container style={{ paddingTop: 96, paddingBottom: 96 }}>
          <Heading en="Story" jp="私たちはこんな会社です" />
          <p style={{ margin: '0 0 48px', maxWidth: 680, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 2, color: 'var(--text-on-light-muted)' }}>
            About the Engineerは、東京・渋谷のテクノロジーカンパニーです。
            エンジニアリングを軸に、自社サービスの開発から、事業の支援、スポーツや音楽の応援まで、
            「すべての人にテクノロジーを」届ける活動をしています。
          </p>
          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {story.map(it => (
              <div key={it.en} style={{ ...card, padding: 32 }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 'clamp(28px,3vw,38px)', letterSpacing: '-0.01em', lineHeight: 1, color: 'var(--zinc-950)' }}>{it.en}</div>
                <div style={{ marginTop: 8, fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, color: 'var(--neutral-600)' }}>{it.jp}</div>
                <p style={{ margin: '20px 0 0', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--text-on-light-muted)' }}>{it.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Divisions */}
      <div id="divisions" style={{ background: 'var(--neutral-50)' }}>
        <Container style={{ paddingTop: 96, paddingBottom: 120 }}>
          <Heading en="Divisions" jp="事業部" />
          <div style={{ ...card, padding: '8px clamp(24px, 5vw, 56px)' }}>
            {divisions.map((d, i) => (
              <div key={d.name}
                onClick={d.dest ? () => go(d.dest) : undefined}
                className="rgrid"
                style={{ display: 'grid', gridTemplateColumns: '0.36fr 1fr auto', gap: 32, alignItems: 'center', padding: '32px 0', borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)', cursor: d.dest ? 'pointer' : 'default' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(19px,2vw,24px)', lineHeight: 1.3, color: 'var(--zinc-950)' }}>{d.jp}</div>
                  <div style={{ marginTop: 6, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--neutral-600)' }}>{d.name}</div>
                </div>
                <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-on-light-muted)' }}>{d.desc}</p>
                <div style={{ width: 36, textAlign: 'right', fontFamily: 'var(--font-body)', fontSize: 20, color: '#1E3A5F' }}>{d.dest ? '→' : ''}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </main>
  );
}

window.CompanyPage = CompanyPage;
