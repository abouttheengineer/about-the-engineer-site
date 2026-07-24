/**
 * Shared product data — used by the Products index (BusinessPage) and each
 * product's own detail page.
 */
window.PRODUCTS = [
  {
    slug: 'actimo',
    name: 'Actimo',
    jp: 'アスリート応援プラットフォーム',
    desc: '月額応援、投げ銭、試合連動の参加機能で、ファンとアスリートをつなぐ新しい応援体験を。企画・開発・グロースまでを自社で手がけています。',
    tags: ['月額応援', '投げ銭', '試合連動'],
    category: 'sports',
  },
  {
    slug: 'chibimon-reversi',
    name: 'ちびモンリバーシ',
    jp: 'カジュアルゲーム',
    desc: 'かわいいモンスターたちで遊ぶ、リバーシ（オセロ）ゲーム。',
    tags: ['カジュアルゲーム', 'リバーシ'],
    category: 'entertainment',
  },
];

window.PRODUCT_CATEGORIES = [
  { key: 'sports', label: 'Sports', jp: 'スポーツ領域' },
  { key: 'entertainment', label: 'Entertainment', jp: 'エンタメ領域' },
  { key: 'education', label: 'Education', jp: '教育領域' },
];
