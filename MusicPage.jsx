/**
 * MusicPage — Global Music Studio introduction.
 * Music production, distribution, artist management, live events.
 */
function MusicPage({ go }) {
  const services = [
    {
      n: '01', title: '楽曲制作',
      desc: '企画・作詞・作曲からレコーディング、ミキシング・マスタリングまで、楽曲制作を自社で一貫して手がけます。',
      deliverables: ['楽曲企画・コンセプト設計', 'レコーディング・ミキシング', 'マスタリング・納品'],
      format: '楽曲単位 / プロジェクト単位',
    },
    {
      n: '02', title: '音楽配信',
      desc: 'Spotify・Apple Music・Amazon Musicなど主要プラットフォームへの配信を自社レーベルとして行います。',
      deliverables: ['ストリーミング配信（国内外）', 'リリース戦略・プロモーション', '収益管理・レポーティング'],
      format: 'リリース単位',
    },
    {
      n: '03', title: 'アーティストマネジメント',
      desc: '所属アーティストのキャリア設計から、スケジュール管理・メディア対応・ブランディングまでをフルサポートします。',
      deliverables: ['キャリアプランニング', 'メディア・タイアップ交渉', 'SNS・プロモーション運営'],
      format: '専属契約 / 業務委託',
    },
    {
      n: '04', title: 'ライブ・イベント企画',
      desc: '所属アーティストによるライブ、リリースイベント、コラボレーションイベントの企画・制作・運営を行います。',
      deliverables: ['企画書・制作進行', '会場手配・チケット販売', '当日運営・ステージ管理'],
      format: 'イベント単位',
    },
  ];

  return (
    <main>
      <Container style={{ paddingTop: 120, paddingBottom: 0, textAlign: 'center' }}>
        <img src="gms_logo.png" alt="Global Music Studio" style={{ height: 96, width: 'auto', display: 'inline-block' }} />
      </Container>
      <PageHero
        lead="楽曲制作から配信、アーティストマネジメント、ライブ・イベントまで。音楽に関わるすべてを自社で一貫して手がけます。" />

      {/* Services */}
      <Container style={{ paddingBottom: 96 }}>
        <SectionHead kicker="Services" title="事業領域" />
        <Rule strong />
        {services.map((s, i) => (
          <div key={s.n} className="rgrid" style={{
            display: 'grid', gridTemplateColumns: '64px 1fr 260px', gap: 24,
            alignItems: 'start', padding: '36px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--neutral-300)' }}>({s.n})</span>
            <div>
              <h3 style={{ margin: '0 0 12px', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 20, color: 'var(--zinc-950)' }}>{s.title}</h3>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-on-light-muted)' }}>{s.desc}</p>
            </div>
            <div>
              <Eyebrow style={{ display: 'block', marginBottom: 10 }}>成果物・対応内容</Eyebrow>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {s.deliverables.map(d => (
                  <li key={d} style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-on-light-muted)', paddingLeft: 16, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>—</span>{d}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 16, fontFamily: 'var(--font-ui)', fontSize: 12, letterSpacing: '0.04em', color: 'var(--neutral-500)' }}>{s.format}</div>
            </div>
          </div>
        ))}
      </Container>

      {/* Artists */}
      <Container style={{ paddingTop: 80, paddingBottom: 0 }}>
        <SectionHead kicker="Artists" title="所属アーティスト" />
      </Container>
      <div style={{ background: 'var(--zinc-950)' }}>
        <Container style={{ paddingTop: 96, paddingBottom: 96 }}>
          <Eyebrow dark style={{ display: 'block', marginBottom: 48 }}>Artists</Eyebrow>
          <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
            <img
              src="artist-01.png"
              alt="YOZORA"
              style={{ width: 280, height: 280, objectFit: 'cover', display: 'block', flexShrink: 0 }}
            />
            <div style={{ paddingTop: 8 }}>
              <div style={{
                fontFamily: 'var(--font-display)', textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-tight)', fontSize: 'clamp(48px, 6vw, 80px)',
                lineHeight: 0.92, color: 'var(--white)',
              }}>YOZORA</div>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA */}
      <Container style={{ paddingTop: 96, paddingBottom: 96, textAlign: 'center' }}>
        <SectionHead kicker="Contact" title="お問い合わせ" />
        <p style={{
          margin: '0 auto 40px', maxWidth: 560, fontFamily: 'var(--font-body)', fontSize: 16,
          lineHeight: 1.8, color: 'var(--text-on-light-muted)',
        }}>
          楽曲制作・アーティスト契約・イベント出演など、Global Music Studioへのお問い合わせはこちらから。
        </p>
        <button onClick={() => go('contact')} style={btnSolid}>お問い合わせ&nbsp;→</button>
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
const btnSolidInverse = { ...btnBase, background: 'var(--white)', color: 'var(--zinc-950)', border: '2px solid var(--white)' };

window.MusicPage = MusicPage;
