/**
 * PrivacyPolicyPage — long-form legal document. Single-column prose,
 * narrower measure than the marketing pages for readability; the layout
 * is already mobile-safe since it has no multi-column grid to collapse.
 */
function PrivacyPolicyPage({ go }) {
  const h3 = { margin: '0 0 14px', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 20, color: 'var(--zinc-950)' };
  const p = { margin: '0 0 16px', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.9, color: 'var(--text-on-light-muted)' };
  const ul = { margin: '0 0 16px', padding: 0, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 10 };
  const li = { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-on-light-muted)' };
  const strong = { color: 'var(--zinc-950)', fontWeight: 700 };
  const section = { padding: '40px 0', borderTop: '1px solid var(--neutral-200)' };

  return (
    <main>
      <PageHero
        kicker="Privacy Policy — プライバシーポリシー"
        lead="合同会社About The Engineer（以下「当社」といいます。）は、当社が提供するすべてのWebサービスおよびモバイルアプリケーション（以下総称して「本サービス」といいます。）における、ユーザーの個人情報を含むプライバシー情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。" />

      <Container style={{ maxWidth: 760, paddingBottom: 120 }}>
        <Rule strong />

        <div style={section}>
          <h3 style={h3}>1. 取得する情報</h3>
          <p style={p}>当社は、本サービスの提供にあたり、ユーザーから以下の情報を取得・収集する場合があります。</p>
          <ul style={ul}>
            <li style={li}><span style={strong}>アカウント登録情報：</span> 氏名、メールアドレス、パスワード等</li>
            <li style={li}><span style={strong}>属性・身体情報：</span> 生年月日、性別、身長、体重等</li>
            <li style={li}><span style={strong}>健康・医療情報：</span> ユーザーが任意に入力または選択した健康状態、医療に関する記録等（要配慮個人情報を含みます）</li>
            <li style={li}><span style={strong}>画像データ：</span> ユーザーが撮影または選択して本サービスにアップロードした写真・画像</li>
            <li style={li}><span style={strong}>位置情報および活動データ：</span> GPSによる位置情報、歩数、消費カロリー等の活動量データ（Apple HealthKit等の端末機能経由での取得を含みます）</li>
            <li style={li}><span style={strong}>利用ログおよび端末情報：</span> IPアドレス、アクセスログ、端末識別子、OS、ブラウザ種別等</li>
            <li style={li}><span style={strong}>通知用トークン：</span> プッシュ通知を送信するための端末識別トークン</li>
          </ul>
        </div>

        <div style={section}>
          <h3 style={h3}>2. 情報の利用目的</h3>
          <p style={p}>当社は、取得した情報を以下の目的で利用します。</p>
          <ul style={ul}>
            <li style={li}>本サービスの提供、維持、保護および改善のため</li>
            <li style={li}>ユーザー登録の受付、本人確認および認証のため</li>
            <li style={li}>ユーザーに応じたコンテンツ、機能および関連情報の提供・表示のため</li>
            <li style={li}>お問い合わせ、不具合、不当利用への対応のため</li>
            <li style={li}>サービスに関する重要なお知らせやプッシュ通知等の案内のため</li>
            <li style={li}>本サービスの利用状況の統計・分析および新たなサービスの企画・開発のため</li>
          </ul>
        </div>

        <div style={section}>
          <h3 style={h3}>3. 要配慮個人情報および健康・医療情報の取扱い</h3>
          <p style={{ ...p, marginBottom: 0 }}>当社は、ユーザーの健康状態や医療情報等の要配慮個人情報を取得・利用する場合、法令に基づく場合を除き、あらかじめユーザー本人の同意を得た上で適切に取り扱います。</p>
        </div>

        <div style={section}>
          <h3 style={h3}>4. Apple HealthKitデータの特別取扱い</h3>
          <p style={p}>当社は、Apple HealthKit（HealthKit API）から取得したデータについて、以下のとおり取り扱います。</p>
          <ul style={{ ...ul, marginBottom: 0 }}>
            <li style={li}>HealthKitから取得した身体・健康・活動データは、本サービス内での健康管理機能の提供およびユーザーの利便性向上の目的（読み取りのみ）に使用します。</li>
            <li style={li}>HealthKitから取得したデータを、広告・マーケティング・データマイニング、その他の商用目的で使用・共有することは一切ありません。</li>
            <li style={li}>HealthKitから取得したデータを第三者に開示または提供することはありません（法令に基づく場合を除く）。</li>
          </ul>
        </div>

        <div style={section}>
          <h3 style={h3}>5. 外部サービスおよびAI技術の利用</h3>
          <p style={p}>当社は、本サービスの機能提供および品質向上のため、以下の外部サービスを利用することがあります。</p>
          <ul style={{ ...ul, marginBottom: 0 }}>
            <li style={li}><span style={strong}>Google Firebase：</span> ユーザー認証、データベース保存、プッシュ通知配信、アプリのパフォーマンス解析のために利用します。</li>
            <li style={li}><span style={strong}>AI API（Google Gemini、OpenAI等）：</span> ユーザーが入力したデータやコンテンツの解析・処理、AI機能の提供のためにデータを処理する場合があります。当社は、送信されたデータがAIモデルの自動学習目的等に使用されないよう、適切に管理・契約されたAPIを通じて運用します。</li>
            <li style={li}><span style={strong}>その他クラウドサービス：</span> データを安全に保存・管理するためのサーバーおよびクラウドインフラを利用します。</li>
          </ul>
        </div>

        <div style={section}>
          <h3 style={h3}>6. 第三者提供および安全管理措置</h3>
          <p style={p}>当社は、以下の場合を除き、ユーザーの同意を得ることなく第三者に個人情報を提供することはありません。</p>
          <ul style={ul}>
            <li style={li}>法令に基づく場合</li>
            <li style={li}>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li style={li}>利用目的の達成に必要な範囲内において、個人情報の取扱いの全部または一部を信頼できる委託先に委託する場合</li>
          </ul>
          <p style={{ ...p, marginBottom: 0 }}>当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために、必要かつ適切なセキュリティ措置を講じます。</p>
        </div>

        <div style={section}>
          <h3 style={h3}>7. Cookieおよび識別子の利用（Cookieポリシー）</h3>
          <p style={p}>当社は、Webサービスの利便性向上、アクセス解析、セッション維持等のために、Cookie（クッキー）および類似の技術（ローカルストレージや端末識別子等）を使用することがあります。</p>
          <ul style={{ ...ul, marginBottom: 0 }}>
            <li style={li}><span style={strong}>利用目的：</span> ログイン状態の保持、ユーザー設定の記憶、サービスの利用状況分析</li>
            <li style={li}><span style={strong}>無効化について：</span> ユーザーはブラウザの設定変更によりCookieの機能を無効化（オプトアウト）することができます。ただし、Cookieを無効化した場合、本サービスの一部機能が利用できなくなる場合があります。</li>
          </ul>
        </div>

        <div style={section}>
          <h3 style={h3}>8. 個人情報の開示・訂正・利用停止等</h3>
          <p style={{ ...p, marginBottom: 0 }}>当社は、ユーザー本人から個人情報の開示、訂正、追加、削除、利用停止、または第三者提供の停止（以下「開示等」といいます。）を求められた場合、ご本人であることを確認させていただいた上で、法令の定めに従い遅滞なく対応いたします。</p>
        </div>

        <div style={section}>
          <h3 style={h3}>9. プライバシーポリシーの改定</h3>
          <p style={{ ...p, marginBottom: 0 }}>当社は、法令の変更や事業内容の変更等に応じて、本ポリシーを改定することがあります。重要な変更がある場合は、本サービス内または当社Webサイトにて適切にお知らせします。</p>
        </div>

        <div style={section}>
          <h3 style={h3}>10. お問い合わせ窓口</h3>
          <p style={p}>当社の個人情報の取扱いに関するご質問、開示等のご請求、その他のお問い合わせは、以下の窓口までご連絡ください。</p>
          <p style={{ ...p, marginBottom: 20 }}>
            合同会社About The Engineer<br />
            個人情報問合せ窓口<br />
            メールアドレス：<a href="mailto:hello@abouttheengineer.jp" style={{ color: 'inherit' }}>hello@abouttheengineer.jp</a>
          </p>
          <button onClick={() => go('contact')} style={window.btnSolid}>お問い合わせフォームへ&nbsp;→</button>
        </div>

        <div style={{ paddingTop: 40 }}>
          <p style={{ ...p, marginBottom: 0, fontSize: 13 }}>
            <span style={strong}>【附則】</span><br />
            制定・施行日：2026年8月13日
          </p>
        </div>
      </Container>
    </main>
  );
}

window.PrivacyPolicyPage = PrivacyPolicyPage;
