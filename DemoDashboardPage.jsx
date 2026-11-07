/** DemoDashboardPage — SNS analytics dashboard sample at full size. */
function DemoDashboardPage({ go }) {
  return (
    <DemoFullPage go={go} anchor="demo-dashboard"
      kicker="Demo — SNS分析ダッシュボード"
      lead="実際の画面の大きさで操作できます。毎月のCSVを取り込んで、グラフが過去へ伸びるようすや、前年との比較をお試しください。"
      label="SNS分析ダッシュボード（サンプル）" title="SNS分析ダッシュボードのサンプル"
      src="demos/sns.html?v=20261107" />
  );
}

window.DemoDashboardPage = DemoDashboardPage;
