/**
 * CompanyPage — company detail page, reached from the Home "会社概要"
 * section. Introduces the three divisions (Business Support / Investment /
 * Product Development).
 */
function CompanyPage({ go }) {
  const items = [
    {
      name: 'Business Support', jp: 'ビジネスサポート部',
      desc: '事業の立ち上げから運営まで、お客様のビジネスを支えるサポートを行います。',
    },
    {
      name: 'Investment', jp: '投資事業部',
      desc: '将来性のある事業やプロダクトへの投資を通じて、新しい価値づくりに取り組みます。',
    },
    {
      name: 'Product Development', jp: 'プロダクト開発部',
      desc: 'Actimoをはじめ、自社サービスを企画から開発・運営まで一貫して手がけています。',
      dest: 'business',
    },
  ];

  return (
    <main>
      <PageHero
        kicker="Company — 会社情報"
        lead="About the Engineerの3つの事業部をご紹介します。" />

      {/* Recruit message */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Recruit Message" title="採用メッセージ" />
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(22px, 2.6vw, 32px)', lineHeight: 1.6, color: 'var(--zinc-950)' }}>
            ともにつくる。
          </p>
          <p style={{ margin: '28px 0 0', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 2, color: 'var(--text-on-light-muted)' }}>
            私たちは、世界中の人にとってよりよいサービスを、<br />
            ともにつくる仲間を探しています。<br />
            <br />
            開発、サポート、投資。役割は違っても、<br />
            「すべての人にテクノロジーを」という想いは同じです。<br />
            <br />
            あなたの力を、私たちと一緒に活かしてください。
          </p>
        </div>
      </Container>

      {/* Story — what kind of company we are */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Story" title="私たちはこんな会社です" />
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <p style={{ margin: '0 auto 48px', maxWidth: 640, textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 2, color: 'var(--text-on-light-muted)' }}>
            About the Engineerは、東京・渋谷のテクノロジーカンパニーです。
            エンジニアリングを軸に、自社サービスの開発から、事業の支援、スポーツや音楽の応援まで、
            「すべての人にテクノロジーを」届ける活動をしています。
          </p>
          <Rule strong />
          {[
            { en: 'Build', jp: 'つくる', desc: 'アスリート向けの食事管理サービス「Actimo」や、女性専用のヘルスケアアプリ「miomio」など、暮らしや健康を支えるサービスを自社で企画・開発・運営しています。' },
            { en: 'Support', jp: '支える', desc: 'プロダクト開発で培った知見をもとに、事業戦略からグロース施策までをご支援します。また、外国人の方が日本で暮らす上での「不便」も、多言語でサポートしています。' },
            { en: 'Cheer', jp: '応援する', desc: 'シント＝トロイデンVVや車いすバスケットボールチームSAGAMIFORCE、Vue Fes Japanなど、挑戦する人やコミュニティを応援しています。音楽プロダクションとしても活動しています。' },
          ].map((it, i) => (
            <div key={it.en} className="rgrid" style={{
              display: 'grid', gridTemplateColumns: '0.42fr 1fr', gap: 40, alignItems: 'start',
              padding: '36px 0', borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(24px,2.8vw,36px)', letterSpacing: '0.01em', lineHeight: 1, color: 'var(--zinc-950)' }}>{it.en}</div>
                <div style={{ marginTop: 8, fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, color: 'var(--neutral-600)' }}>{it.jp}</div>
              </div>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-on-light-muted)', maxWidth: 520 }}>{it.desc}</p>
            </div>
          ))}
          <Rule />
        </div>
      </Container>

      <Container style={{ paddingBottom: 120 }}>
        <Rule strong />
        {items.map((it, i) => (
          <div key={it.name}
            onClick={it.dest ? () => go(it.dest) : undefined}
            className="rgrid"
            style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center', padding: '40px 0', borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)', cursor: it.dest ? 'pointer' : 'default' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(28px,3.4vw,44px)', letterSpacing: '0.01em', lineHeight: 1, color: 'var(--zinc-950)' }}>{it.name}</div>
              <div style={{ marginTop: 8, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--neutral-600)' }}>{it.jp}</div>
              <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.75, color: 'var(--text-on-light-muted)', maxWidth: 560 }}>{it.desc}</p>
            </div>
            {it.dest && <div style={{ fontFamily: 'var(--font-body)', fontSize: 22, color: 'var(--zinc-950)' }}>→</div>}
          </div>
        ))}
        <Rule />
      </Container>
    </main>
  );
}

window.CompanyPage = CompanyPage;
