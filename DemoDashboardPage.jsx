/** DemoDashboardPage — analytics dashboard sample at full size. */
function DemoDashboardPage({ go }) {
  return (
    <DemoFullPage go={go} anchor="demo-dashboard"
      kicker="Demo — 分析用ダッシュボード"
      lead="実際の画面の大きさで操作できます。期間の切り替え、データの再集計、CSVの出力画面などをお試しください。"
      label="分析用ダッシュボード（サンプル）" title="分析用ダッシュボードのサンプル"
      src="demos/dashboard.html?v=20261107" />
  );
}

window.DemoDashboardPage = DemoDashboardPage;
