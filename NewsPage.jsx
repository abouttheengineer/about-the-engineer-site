/**
 * NewsPage — full news / updates list. Reuses the same NewsList rows
 * shown as a teaser on Home.
 */
function NewsPage() {
  return (
    <main>
      <PageHero
        kicker="News"
        lead="About the Engineerからのお知らせです。" />

      <Container style={{ paddingBottom: 120 }}>
        <NewsList items={window.NEWS} />
      </Container>
    </main>
  );
}

window.NewsPage = NewsPage;
