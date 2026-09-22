/**
 * Shared product data — used by the Products index (BusinessPage) and each
 * product's own detail page.
 */
window.PRODUCTS = [
  {
    slug: 'actimo',
    name: 'Actimo',
    jp: 'パフォーマンス管理システム',
    desc: '管理栄養士監修のもと、チャットでいつでも食事管理ができるアスリート向けサービス。食事記録・栄養アドバイス・コンディション管理をひとつにまとめ、パフォーマンス向上を食から支えます。',
    tags: ['管理栄養士監修', 'チャット食事管理', 'コンディション管理'],
    category: 'sports',
    logo: 'product-actimo-logo.jpeg',
  },
  {
    slug: 'chibimon-reversi',
    name: 'ちびモンリバーシ',
    jp: 'カジュアルゲーム',
    desc: 'かわいいモンスターたちで遊ぶ、リバーシ（オセロ）ゲーム。',
    tags: ['カジュアルゲーム', 'リバーシ'],
    category: 'entertainment',
  },
  {
    slug: 'miomio',
    name: 'miomio',
    jp: 'パーソナルヘルスケアアプリ',
    desc: '管理栄養士がアプリを通じて健康をサポートする、女性専用のパーソナルヘルスケアサービスです。',
    tags: ['パーソナルヘルスケア', '管理栄養士監修', '女性専用'],
    category: 'healthcare',
    logo: 'product-miomio-logo.png',
    image: 'product-miomio-screenshot.png',
    imageFit: 'contain',
    url: 'http://miomio-life.com/',
  },
];

window.PRODUCT_CATEGORIES = [
  { key: 'sports', label: 'Sports', jp: 'スポーツ領域' },
  { key: 'entertainment', label: 'Entertainment', jp: 'エンタメ領域' },
  { key: 'education', label: 'Education', jp: '教育領域' },
  { key: 'healthcare', label: 'Healthcare', jp: 'ヘルスケア領域' },
];
