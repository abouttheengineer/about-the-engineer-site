/**
 * HomePage — centered editorial masthead for the product studio, then a
 * centered "What we do" index (self-products + consulting).
 */
function HomePage({ go }) {
  return (
    <main>
      {/* Masthead */}
      <PageHero
        big
        title="すべての人にテクノロジー" />

      <Container style={{ paddingBottom: 72, textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => go('business')} style={btnSolid}>プロダクトを見る&nbsp;→</button>
          <button onClick={() => go('contact')} style={btnOutline}>お問い合わせ</button>
        </div>
      </Container>

      {/* What we do — three pillars */}
      <Container style={{ paddingTop: 8, paddingBottom: 80 }}>
        <SectionHead kicker="What we do" title="事業内容" />
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, maxWidth: 920, margin: '0 auto' }}>
          {[
            ['System', 'システム開発', '企画から開発・運用まで、一気通貫でプロダクトをつくります。', null],
            ['Consulting', 'コンサルティング', '事業戦略とグロースを、実践知をもとに伴走支援します。', 'consulting'],
            ['Support', '外国人サポート', '日本での生活の「困った」を、多言語でサポートします。', 'support'],
          ].map(([en, jp, desc, dest]) => (
            <div key={en} onClick={dest ? () => go(dest) : undefined}
              style={{ textAlign: 'center', cursor: dest ? 'pointer' : 'default' }}>
              <div style={{
                width: 200, height: 200, margin: '0 auto', borderRadius: '50%',
                border: '1px solid var(--neutral-300)', display: 'flex',
                flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: 10, padding: 24, boxSizing: 'border-box',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 13, color: 'var(--neutral-600)' }}>{en}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 22, color: 'var(--zinc-950)' }}>{jp}</span>
              </div>
              <p style={{ margin: '20px auto 0', maxWidth: 240, fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--text-on-light-muted)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Product Studio — featured introduction */}
      <SplitSection
        kicker="Product Studio"
        kickerCase="none"
        kickerStyle={{ fontSize: 20 }}
        title="自社サービスの開発・運営"
        body="Actimoをはじめ、自社サービスを企画から開発・運営まで一貫して手がけています。"
        slotId="home-product-studio"
        placeholder="画像をドロップ（プロダクト）"
        action={<button onClick={() => go('business')} style={btnSolid}>プロダクトを見る&nbsp;→</button>} />

      <SplitSection
        reverse
        kicker="Global Life Support"
        kickerCase="none"
        kickerStyle={{ fontSize: 20 }}
        title="外国人向け生活サポート"
        body="日本での「困った」を多言語でサポート。アプリのチャット・電話相談、オフィスでの対面相談、どちらも可能です。市役所の手続きや携帯電話の契約など、日々の生活に関する相談に、安心の母国語で対応します。1回500円から利用できます。"
        slotId="home-life-support"
        placeholder="画像をドロップ（生活サポート）"
        action={<button onClick={() => go('support')} style={btnSolid}>詳しく見る&nbsp;→</button>} />

      {/* Temporarily hidden — restore by uncommenting.
      <SplitSection
        reverse
        kicker="Global Media Studio"
        kickerCase="none"
        kickerStyle={{ fontSize: 20 }}
        title="芸能・音楽プロダクト事業"
        body="アーティストのマネジメントと音楽プロダクトの企画・制作を行う、芸能・音楽事業です。"
        slotId="home-intro-media"
        placeholder="画像をドロップ（芸能・音楽）"
        action={<button onClick={() => go('contact')} style={btnSolid}>お問い合わせ&nbsp;→</button>} />

      <SplitSection
        kicker="Global Tech Studio"
        kickerCase="none"
        kickerStyle={{ fontSize: 20 }}
        title="古着・食品・化粧品のオンライン販売"
        body="古着、コーヒー豆、化粧品などをオンラインで販売する物販事業です。"
        slotId="home-intro-retail"
        placeholder="画像をドロップ（物販）"
        action={<button onClick={() => go('contact')} style={btnSolid}>お問い合わせ&nbsp;→</button>} />
      */}

      <SplitSection
        id="consulting-section"
        kicker="Consulting"
        kickerCase="none"
        kickerStyle={{ fontSize: 20 }}
        title="事業戦略・グロース支援"
        body="プロダクト開発で培った知見をもとに、事業戦略の立案からグロース施策の実行までを支援します。データに基づき、検証可能な仮説から成長をつくります。"
        slotId="home-intro-consulting"
        src={(window.__resources && window.__resources.consultingImg) || "img-home-intro-consulting.png"}
        placeholder="画像をドロップ（コンサルティング）"
        action={<button onClick={() => go('consulting')} style={btnSolid}>コンサルティングについて&nbsp;→</button>} />

      {/* About — company story + profile, moved to the bottom of Home */}
      <div id="about-section" style={{ background: 'var(--zinc-950)' }}>
        <Container style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Eyebrow dark style={{ display: 'block', marginBottom: 16 }}>About</Eyebrow>
            <h2 style={{
              margin: 0, fontFamily: 'var(--font-body)', fontWeight: 700,
              fontSize: 'clamp(26px, 3.2vw, 42px)', lineHeight: 1.2, color: 'var(--white)',
            }}>会社概要</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            {[
              ['会社名', '合同会社About the Engineer'],
              ['代表者', 'LEKAM TANIO'],
              ['所在地', '東京都渋谷区神南１丁目１１−４ ＦＰＧリンクス神南 5階'],
              ['事業内容', 'システム開発／コンサルティング／外国人サポート'],
              ['定休日', '毎週水曜日'],
            ].map(([k, v], i, arr) => (
              <div key={k} className="rgrid" style={{
                display: 'grid', gridTemplateColumns: '200px 1fr', gap: 24,
                alignItems: 'baseline', padding: '20px 0',
                borderTop: '1px solid var(--zinc-800)',
                borderBottom: i === arr.length - 1 ? '1px solid var(--zinc-800)' : 'none',
              }}>
                <Eyebrow dark>{k}</Eyebrow>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--white)' }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
            <button onClick={() => go('contact')} style={btnSolidInverse}>お問い合わせ&nbsp;→</button>
          </div>
        </Container>
      </div>

      {/* Message — CEO / representative message */}
      <Container style={{ paddingTop: 96, paddingBottom: 96 }}>
        <SectionHead kicker="Message" title="代表メッセージ" />
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', maxWidth: 1080, margin: '0 auto' }}>
          <image-slot
            id="home-about-message"
            shape="rect"
            placeholder="画像をドロップ（代表）"
            style={{ width: '100%', height: 'auto', aspectRatio: '4 / 3', display: 'block', background: 'var(--neutral-100)', border: '1px solid var(--neutral-200)' }}
          ></image-slot>
          <div>
            <p style={{
              margin: 0, fontFamily: 'var(--font-body)', fontWeight: 700,
              fontSize: 'clamp(20px, 2.2vw, 26px)', lineHeight: 1.6, color: 'var(--zinc-950)',
            }}>
              ともにつくる。
            </p>
            <p style={{
              margin: '28px 0 0', fontFamily: 'var(--font-body)', fontSize: 16,
              lineHeight: 1.9, color: 'var(--text-on-light-muted)',
            }}>
              世界中の人にとって、よりよいサービスをともにつくっていきたいと考えています。すべての人にテクノロジーを。
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

const btnBase = {
  display: 'inline-flex', alignItems: 'center', gap: '0.5em', cursor: 'pointer',
  fontFamily: 'var(--font-display)', textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-wider)', fontSize: 18, padding: '13px 30px',
  whiteSpace: 'nowrap', transition: 'var(--transition-all)',
};
const btnSolid = { ...btnBase, background: 'var(--zinc-950)', color: 'var(--white)', border: '2px solid var(--zinc-950)' };
const btnOutline = { ...btnBase, background: 'transparent', color: 'var(--zinc-950)', border: '2px solid var(--zinc-950)' };
const btnSolidInverse = { ...btnBase, background: 'var(--white)', color: 'var(--zinc-950)', border: '2px solid var(--white)' };

window.HomePage = HomePage;
Object.assign(window, { btnSolid, btnOutline });
