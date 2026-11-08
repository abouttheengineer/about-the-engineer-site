/**
 * TechAssistantTermsPage — short terms of use for 「Global Tech Assistant」.
 * Same single-column prose layout as the privacy policy.
 */
function TechAssistantTermsPage({ go }) {
  const h3 = { margin: '0 0 14px', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 20, color: 'var(--zinc-950)' };
  const p = { margin: '0 0 16px', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.9, color: 'var(--text-on-light-muted)' };
  const section = { padding: '40px 0', borderTop: '1px solid var(--neutral-200)' };

  const articles = [
    ['第1条（本サービスの内容）', [
      '「Global Tech Assistant」（以下「本サービス」といいます。）は、合同会社About The Engineer（以下「当社」といいます。）が、お客様の技術的なトラブル（コード、Google Apps Script、Firebase、ドメイン・DNS・SSL、PC・ブラウザ・アカウントの設定など）について、原因の確認、修正、設定のご案内を行うサービスです。あわせて、簡易的なセキュリティ診断を行います。',
    ]],
    ['第2条（セキュリティ診断の性質）', [
      '本サービスのセキュリティ診断は、推奨される設定や、ありがちなミスを確認してご案内する、簡易的なチェックにとどまります。「診断」という名前ですが、本格的な脆弱性診断ではありません。',
      '当社は、確認した範囲についても、弱点（脆弱性）がないこと、安全であること、被害が生じないことを保証しません。',
      '当社が確認していない範囲については、いかなる判断も行いません。',
    ]],
    ['第3条（対象）', [
      '本サービスの対象は、お客様ご自身が管理しているコード、アカウント、サービス、または、管理者の許可を得ているものに限ります。',
      '管理者の許可がないものを対象とするご依頼は、お受けできません。',
    ]],
    ['第4条（お客様のご判断）', [
      '当社のご案内や作業をもとにした設定の変更は、お客様ご自身のご判断で行っていただきます。',
      '変更の前に、必要に応じて、データの控え（バックアップ）をお取りください。',
      '当社は、トラブルが完全に解決することを、お約束するものではありません。',
    ]],
    ['第5条（情報の取り扱い）', [
      'コード、設定、アクセス権などを共有いただくときは、共有する範囲を、あらかじめご確認ください。',
      '当社は、本サービスの提供にあたって知り得た情報を、本サービスの提供の目的以外には使用しません。',
      '当社は、コードや設定の確認に、AIの解析サービス（外部の事業者が提供するもの）を使う場合があります。その際、パスワード、キー、個人情報などは、あらかじめ除いたうえで送ります。',
      'AIの解析サービスの利用を希望されない場合は、お申し込みの際に、その旨をお知らせください。AIを使わずに対応します。',
      '個人情報の取り扱いについては、当社の「プライバシーポリシー」に従います。',
    ]],
    ['第6条（料金）', [
      '本サービスの料金は、初回30分が無料、それ以降は60分あたり5,000円（税抜）です。',
      '修正などの作業は、内容と作業の時間に応じて、お見積りします。',
      '料金のお支払いの方法や時期は、ご相談の際にご案内します。',
    ]],
    ['第7条（禁止事項）', [
      'お客様は、次の行為をしてはなりません。',
      '・管理者の許可なく、他人のコード、アカウント、サービスを対象にご依頼すること',
      '・法令や公序良俗に反する目的で、本サービスを利用すること',
      '・当社の業務を妨げる行為',
    ]],
    ['第8条（免責）', [
      '当社は、当社に故意または重大な過失がある場合を除き、本サービスのご案内や作業の内容、および、それをもとにお客様が行った設定の変更や、その結果について、法的な責任を負いません。',
      '当社が損害賠償の責任を負う場合でも、賠償の額は、当該のご相談について、お客様がお支払いになった料金の額を上限とします。ただし、当社に故意または重大な過失がある場合は、この限りではありません。',
      '前二項の定めにかかわらず、法令により当社が責任を負うこととされている場合は、その法令に従います。',
    ]],
    ['第9条（サービスの変更・中止）', [
      '当社は、必要に応じて、本サービスの内容を変更し、または、提供を中止することがあります。',
    ]],
    ['第10条（準拠法）', [
      '本規約は、日本法に基づいて解釈されます。',
    ]],
  ];

  return (
    <main>
      <PageHero
        kicker="Terms — ご利用規約"
        lead="「Global Tech Assistant」のご利用規約です。セキュリティ診断は、簡易的なチェックであり、安全の保証や、法的な責任をともなうものではありません。" />

      <Container style={{ maxWidth: 760, paddingBottom: 120 }}>
        <Rule strong />
        {articles.map(([title, paras]) => (
          <div key={title} style={section}>
            <h3 style={h3}>{title}</h3>
            {paras.map(t => <p key={t} style={p}>{t}</p>)}
          </div>
        ))}
        <div style={section}>
          <p style={{ ...p, marginBottom: 0 }}>制定日：2026年11月8日</p>
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', paddingTop: 8 }}>
          <button onClick={() => go('tech-assistant')} style={window.btnOutline}>←&nbsp;Global Tech Assistantへ戻る</button>
          <button onClick={() => go('privacy')} style={window.btnOutline}>プライバシーポリシー</button>
        </div>
      </Container>
    </main>
  );
}

window.TechAssistantTermsPage = TechAssistantTermsPage;
