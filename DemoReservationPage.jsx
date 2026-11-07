/** DemoReservationPage — reservation / customer-management sample at full size. */
function DemoReservationPage({ go }) {
  return (
    <DemoFullPage go={go} anchor="demo-reservation"
      kicker="Demo — 予約・顧客管理システム"
      lead="実際の画面の大きさで操作できます。予約の時間割を見たり、お客様の顧客カルテを開いたりして、お試しください。"
      label="予約・顧客管理システム（サンプル）" title="予約・顧客管理システムのサンプル"
      src="demos/salon.html?v=20261107b" />
  );
}

window.DemoReservationPage = DemoReservationPage;
