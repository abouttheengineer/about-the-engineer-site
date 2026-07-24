/* @ds-bundle: {"format":4,"namespace":"AboutTheEngineerDesignSystem_78d035","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"NumberedItem","sourcePath":"components/marketing/NumberedItem.jsx"},{"name":"SectionHeader","sourcePath":"components/marketing/SectionHeader.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"4cadcbe3688e","components/core/Button.jsx":"d0c207d79253","components/core/Card.jsx":"5e2bdfa7cb53","components/marketing/NumberedItem.jsx":"c04003c9715f","components/marketing/SectionHeader.jsx":"d0ea5355d6ae","components/marketing/ServiceCard.jsx":"4060918189f1","components/marketing/StatBlock.jsx":"235aab981a2b","site/BusinessPage.jsx":"c5bdcd4da1e8","site/Chrome.jsx":"c425764c8d1a","site/ConsultingPage.jsx":"d658452f7d13","site/ContactPage.jsx":"d38d951c5e07","site/HomePage.jsx":"d74430b68ec1","site/ProductPage.jsx":"560a6dda5e68","site/image-slot.js":"f5294cfee9fe","site/products-data.js":"20d1a1cbbe1c","site/shared.jsx":"3010a8395fd7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AboutTheEngineerDesignSystem_78d035 = window.AboutTheEngineerDesignSystem_78d035 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge / Tag — About the Engineer
 *
 * Small status & category labels. Square by default (matches the sharp
 * marketing language); pill shape is used inside product-app UI. The
 * "live" tone renders a pulsing dot, as seen in the Spods fan-club app.
 */
function Badge({
  children,
  tone = 'dark',
  // 'dark' | 'light' | 'outline' | 'green' | 'live'
  shape = 'square',
  // 'square' | 'pill'
  style = {},
  ...props
}) {
  const tones = {
    dark: {
      background: 'var(--zinc-950)',
      color: 'var(--white)',
      border: 'transparent'
    },
    light: {
      background: 'var(--white)',
      color: 'var(--zinc-950)',
      border: 'transparent'
    },
    outline: {
      background: 'transparent',
      color: 'currentColor',
      border: 'currentColor'
    },
    green: {
      background: 'var(--spods-green-600)',
      color: 'var(--white)',
      border: 'transparent'
    },
    live: {
      background: 'transparent',
      color: 'var(--white)',
      border: 'rgba(255,255,255,0.6)'
    }
  };
  const t = tones[tone] || tones.dark;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4em',
      fontFamily: tone === 'green' || tone === 'live' ? 'var(--font-ui)' : 'var(--font-display)',
      fontSize: '0.75rem',
      fontWeight: tone === 'green' || tone === 'live' ? 600 : 400,
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: shape === 'pill' ? '0.45em 0.9em' : '0.4em 0.7em',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-none)',
      background: t.background,
      color: t.color,
      border: `1px solid ${t.border}`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, props), tone === 'live' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '0.5em',
      height: '0.5em',
      borderRadius: '50%',
      background: 'var(--red-600)',
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — About the Engineer
 *
 * The brand's CTAs are set in Bebas Neue, ALL-CAPS, letter-spaced, with
 * SHARP corners and no shadow. Two surface tones (dark ink for light
 * backgrounds, light ink for dark backgrounds) × two variants (solid /
 * outline). Hover is a colour INVERSION, transitioned over 300ms.
 */
function Button({
  children,
  variant = 'solid',
  // 'solid' | 'outline'
  tone = 'dark',
  // 'dark' (on light bg) | 'light' (on dark bg)
  size = 'md',
  // 'sm' | 'md' | 'lg'
  arrow = false,
  // append a → glyph
  as = 'button',
  style = {},
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  const Comp = as;
  const sizes = {
    sm: {
      padding: '0.625rem 1.25rem',
      fontSize: '0.95rem'
    },
    md: {
      padding: '0.875rem 2rem',
      fontSize: '1.125rem'
    },
    lg: {
      padding: '1.125rem 2.5rem',
      fontSize: '1.375rem'
    }
  };

  // ink = the brand colour for this tone; paper = its opposite
  const ink = tone === 'dark' ? 'var(--zinc-950)' : 'var(--white)';
  const paper = tone === 'dark' ? 'var(--white)' : 'var(--zinc-950)';
  let bg, color, borderColor;
  if (variant === 'solid') {
    // solid: filled with ink, inverts to paper-fill on hover
    bg = hover ? tone === 'dark' ? 'var(--zinc-700)' : 'var(--zinc-200)' : ink;
    color = paper;
    borderColor = bg;
  } else {
    // outline: bordered, fills with ink on hover
    bg = hover ? ink : 'transparent';
    color = hover ? paper : ink;
    borderColor = ink;
  }
  return /*#__PURE__*/React.createElement(Comp, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.6em',
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      lineHeight: 1,
      fontWeight: 400,
      border: `var(--border-medium) solid ${borderColor}`,
      borderRadius: 'var(--radius-none)',
      background: bg,
      color,
      cursor: 'pointer',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'var(--transition-all)',
      ...sizes[size],
      ...style
    }
  }, props), children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — About the Engineer
 *
 * The workhorse surface. On light sections: white fill, 1px hairline
 * border, SHARP corners, a whisper of shadow; the border darkens on
 * hover. On dark sections ("dark" tone): zinc-800 fill with a zinc-600
 * border — used for stat blocks and panels. No rounding on marketing
 * surfaces. Pass rounded for product-app cards.
 */
function Card({
  children,
  tone = 'light',
  // 'light' | 'dark'
  interactive = false,
  // border darkens on hover
  rounded = false,
  // product-app rounding
  padding = '2rem',
  style = {},
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  const base = tone === 'dark' ? {
    background: 'var(--surface-card-dark)',
    color: 'var(--text-on-dark)',
    border: 'var(--zinc-600)'
  } : {
    background: 'var(--surface-card)',
    color: 'var(--text-on-light)',
    border: 'var(--border-on-light)'
  };
  const hoverBorder = tone === 'dark' ? 'var(--zinc-500)' : 'var(--border-hover-light)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: base.background,
      color: base.color,
      border: `var(--border-hairline) solid ${hover ? hoverBorder : base.border}`,
      borderRadius: rounded ? 'var(--radius-lg)' : 'var(--radius-none)',
      boxShadow: rounded ? 'var(--shadow-product)' : tone === 'light' ? 'var(--shadow-card)' : 'none',
      padding,
      transition: 'var(--transition-colors)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/marketing/NumberedItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NumberedItem — About the Engineer
 *
 * The "APPROACH / WHY CHOOSE US" list row: a left rule that THICKENS on
 * hover (4px → 8px), a large ghosted Bebas Neue index (01, 02…), a title
 * and a Japanese description. Tone adapts to light or dark sections.
 */
function NumberedItem({
  number,
  title,
  description,
  tone = 'light',
  // 'light' | 'dark'
  style = {},
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  const rule = tone === 'dark' ? 'var(--white)' : 'var(--zinc-950)';
  const numColor = tone === 'dark' ? 'var(--zinc-600)' : 'var(--neutral-300)';
  const titleColor = tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  const descColor = tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderLeft: `${hover ? 'var(--border-accent-hover)' : 'var(--border-accent)'} solid ${rule}`,
      paddingLeft: hover ? 'calc(2rem - 4px)' : '2rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      transition: 'var(--transition-all)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1.5rem',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-sm)',
      lineHeight: 1,
      color: numColor,
      flexShrink: 0
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontWeight: 400,
      fontSize: 'var(--display-xs)',
      lineHeight: 1.05,
      letterSpacing: 'var(--tracking-wide)',
      color: titleColor
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: descColor
    }
  }, description)));
}
Object.assign(__ds_scope, { NumberedItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/NumberedItem.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — About the Engineer
 *
 * The standard way sections open: an optional small overline (eyebrow),
 * a large Bebas Neue all-caps title, and an optional Japanese subtitle/
 * lead beneath. Title can be English (display) or Japanese.
 */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  // 'light' | 'dark'
  align = 'left',
  // 'left' | 'center'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  style = {},
  ...props
}) {
  const titleSize = {
    sm: 'var(--display-sm)',
    md: 'var(--display-md)',
    lg: 'var(--display-lg)'
  }[size];
  const titleColor = tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  const subColor = tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      ...style
    }
  }, props), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: tone === 'dark' ? 'var(--text-on-dark-subtle)' : 'var(--text-on-light-subtle)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontWeight: 400,
      fontSize: titleSize,
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: titleColor
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xl)',
      lineHeight: 'var(--leading-snug)',
      color: subColor,
      maxWidth: '46rem',
      ...(align === 'center' ? {
        marginLeft: 'auto',
        marginRight: 'auto'
      } : null)
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ServiceCard — About the Engineer
 *
 * A service / capability tile: a Lucide icon, a Bebas Neue title, and a
 * Japanese description. Builds the SERVICES / OUR SERVICES grids. Pass a
 * Lucide SVG (or any node) as `icon`. Hover darkens the border.
 */
function ServiceCard({
  icon,
  title,
  description,
  style = {},
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: `1px solid ${hover ? 'var(--border-hover-light)' : 'var(--border-on-light)'}`,
      boxShadow: 'var(--shadow-card)',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      transition: 'var(--transition-colors)',
      ...style
    }
  }, props), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '3rem',
      height: '3rem',
      marginBottom: '0.25rem',
      color: 'var(--zinc-950)',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontWeight: 400,
      fontSize: 'var(--display-xs)',
      lineHeight: 1.05,
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-on-light)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-on-light-muted)'
    }
  }, description));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBlock — About the Engineer
 *
 * A headline metric: an oversized Bebas Neue figure over a small label.
 * Used in grids on dark "PROVEN RESULTS / OUR IMPACT" sections, and as
 * the stat strip in the Spods product header.
 */
function StatBlock({
  value,
  label,
  tone = 'dark',
  // 'dark' | 'light'
  align = 'center',
  // 'center' | 'left'
  boxed = false,
  // wrap in a panel (dark sections)
  style = {},
  ...props
}) {
  const valueColor = tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  const labelColor = tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)';
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-sm)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)',
      color: valueColor
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: labelColor,
      letterSpacing: 'var(--tracking-wide)'
    }
  }, label));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      padding: boxed ? '2rem' : 0,
      background: boxed ? 'var(--surface-card-dark)' : 'transparent',
      border: boxed ? '1px solid var(--zinc-600)' : 'none',
      ...style
    }
  }, props), inner);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// site/BusinessPage.jsx
try { (() => {
/**
 * BusinessPage — the studio's own products, presented as its services.
 * Spods is the featured product; FitConnect and KotobaConnect follow.
 */
function BusinessPage({
  go
}) {
  const DS = window.AboutTheEngineerDesignSystem_78d035;
  const {
    Badge
  } = DS;
  const categories = window.PRODUCT_CATEGORIES;
  const isAscii = s => /^[\x00-\x7F]+$/.test(s);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Products \u2014 \u81EA\u793E\u30D7\u30ED\u30C0\u30AF\u30C8"
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 96
    }
  }, categories.map((cat, ci) => {
    const products = window.PRODUCTS.filter(p => p.category === cat.key);
    return /*#__PURE__*/React.createElement("div", {
      key: cat.key,
      style: {
        marginTop: ci === 0 ? 0 : 72
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 16,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--neutral-600)'
      }
    }, cat.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 13,
        color: 'var(--neutral-600)'
      }
    }, cat.jp)), /*#__PURE__*/React.createElement(Rule, {
      strong: true
    }), products.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '40px 0',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        color: 'var(--text-on-light-muted)'
      }
    }, "Coming soon"), products.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: p.slug,
      onClick: () => go('product-' + p.slug),
      style: {
        display: 'grid',
        gridTemplateColumns: '0.32fr 1fr auto',
        gap: 40,
        alignItems: 'start',
        padding: '40px 0',
        borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: isAscii(p.name) ? {
        fontFamily: 'var(--font-product)',
        textTransform: 'uppercase',
        fontSize: 'clamp(34px,4vw,52px)',
        letterSpacing: '0.02em',
        lineHeight: 0.95,
        color: 'var(--zinc-950)'
      } : {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 'clamp(26px,3vw,38px)',
        letterSpacing: '0.01em',
        lineHeight: 1.15,
        color: 'var(--zinc-950)'
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        fontFamily: 'var(--font-ui)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--neutral-600)'
      }
    }, p.jp)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        lineHeight: 1.75,
        color: 'var(--text-on-light-muted)',
        maxWidth: 560
      }
    }, p.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 18,
        flexWrap: 'wrap'
      }
    }, p.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
      key: t,
      tone: "outline",
      style: {
        color: 'var(--zinc-950)'
      }
    }, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: 22,
        color: 'var(--zinc-950)'
      }
    }, "\u2192"))), /*#__PURE__*/React.createElement(Rule, null));
  })));
}
window.BusinessPage = BusinessPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/BusinessPage.jsx", error: String((e && e.message) || e) }); }

// site/Chrome.jsx
try { (() => {
/**
 * SiteHeader — fixed editorial top bar. Wordmark left, uppercase nav
 * right with an active underline. Solid white with a hairline bottom rule.
 */
function SiteHeader({
  page,
  section,
  go
}) {
  const nav = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'consulting-scroll',
    label: 'Consulting'
  }, {
    id: 'business',
    label: 'Products'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(9,9,11,0.88)',
      backdropFilter: 'var(--backdrop-blur)',
      WebkitBackdropFilter: 'var(--backdrop-blur)',
      borderBottom: '1px solid var(--zinc-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 var(--page-gutter-lg)',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: 19,
      color: 'var(--white)'
    }
  }, "About\xA0the\xA0Engineer"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, nav.map(n => {
    const on = n.id === 'about' ? section === 'about' : n.id === 'consulting-scroll' ? section === 'consulting-scroll' || page === 'consulting' && !section : page === n.id && !section;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => go(n.id),
      style: {
        background: 'none',
        border: 'none',
        padding: '4px 0',
        cursor: 'pointer',
        fontFamily: 'var(--font-ui)',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 'var(--tracking-wide)',
        color: on ? 'var(--white)' : 'var(--zinc-500)',
        borderBottom: `2px solid ${on ? 'var(--white)' : 'transparent'}`,
        transition: 'var(--transition-colors)'
      }
    }, n.label);
  }))));
}

/**
 * SiteFooter — oversized Bebas wordmark band over ruled nav columns.
 */
function SiteFooter({
  go
}) {
  const cols = [{
    h: 'Sitemap',
    items: [['Home', 'home'], ['About', 'about'], ['Consulting', 'consulting'], ['Products', 'business'], ['Contact', 'contact']]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--zinc-950)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '72px var(--page-gutter-lg) 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 220px))',
      gap: 40,
      paddingBottom: 48,
      justifyContent: 'end'
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '16px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, c.items.map(([label, dest]) => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go(dest),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--zinc-300)'
    }
  }, label))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--zinc-800)',
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 0.86,
      fontSize: 'clamp(48px, 12vw, 168px)',
      color: 'var(--white)'
    }
  }, "About the Engineer")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      letterSpacing: '0.04em',
      color: 'var(--zinc-600)'
    }
  }, "\xA9 2026 About the Engineer K.K. \u2014 All rights reserved.")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/Chrome.jsx", error: String((e && e.message) || e) }); }

// site/ConsultingPage.jsx
try { (() => {
/**
 * ConsultingPage — dedicated introduction to the consulting business.
 * Editorial layout: hero, lead statement, support areas, process, CTA.
 */
function ConsultingPage({
  go
}) {
  const services = [{
    n: '01',
    title: '事業戦略・新規事業設計',
    desc: '市場調査から事業仮説の検証まで、新規事業の立ち上げを支援します。',
    deliverables: ['市場・競合分析レポート', '事業計画書・収益モデル', 'MVP検証プラン'],
    format: '4〜8週間 / 週次ミーティング'
  }, {
    n: '02',
    title: 'プロダクト開発支援',
    desc: '自社プロダクトで培った開発体制を活かし、要件定義から実装・リリースまでを支援します。',
    deliverables: ['要件定義書・仕様書', 'UI/UXデザイン', '開発・実装（内製チーム編成含む）'],
    format: '3ヶ月〜 / 常駐 or 週次コミット'
  }];
  const steps = [['Discover', 'ヒアリング・現状分析', '事業フェーズと課題を構造化し、注力すべき論点を定めます。'], ['Design', '仮説・戦略設計', '検証可能な仮説に分解し、優先順位と指標を設計します。'], ['Build', '実行・検証', '施策を実行し、データで効果を検証。素早く学習を回します。'], ['Grow', 'グロース', '勝ち筋を見極め、再現性のある成長の仕組みに育てます。']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Consulting \u2014 \u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0",
    lead: "\u30D7\u30ED\u30C0\u30AF\u30C8\u958B\u767A\u3067\u57F9\u3063\u305F\u77E5\u898B\u3092\u3082\u3068\u306B\u3001\u4E8B\u696D\u6226\u7565\u306E\u7ACB\u6848\u304B\u3089\u30B0\u30ED\u30FC\u30B9\u65BD\u7B56\u306E\u5B9F\u884C\u307E\u3067\u3092\u4E00\u6C17\u901A\u8CAB\u3067\u652F\u63F4\u3057\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    strong: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '56px auto 0',
      textAlign: 'center',
      maxWidth: 880,
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(22px,2.6vw,34px)',
      lineHeight: 1.6,
      color: 'var(--zinc-950)'
    }
  })), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Services",
    title: "\u652F\u63F4\u9818\u57DF"
  }), /*#__PURE__*/React.createElement(Rule, {
    strong: true
  }), services.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1fr 260px',
      gap: 24,
      alignItems: 'start',
      padding: '36px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--neutral-200)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: 'var(--neutral-300)'
    }
  }, "(", s.n, ")"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 'clamp(26px,3.4vw,40px)',
      letterSpacing: '0.01em',
      lineHeight: 1,
      color: 'var(--zinc-950)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--text-on-light-muted)',
      maxWidth: 560
    }
  }, s.desc), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '16px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, s.deliverables.map(d => /*#__PURE__*/React.createElement("li", {
    key: d,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--zinc-950)',
      border: '1px solid var(--neutral-300)',
      borderRadius: 999,
      padding: '6px 14px'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--neutral-600)',
      textAlign: 'right'
    }
  }, s.format))), /*#__PURE__*/React.createElement(Rule, null)), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Process",
    title: "\u9032\u3081\u65B9"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 1,
      background: 'var(--neutral-200)',
      border: '1px solid var(--neutral-200)'
    }
  }, steps.map(([en, jp, d], i) => /*#__PURE__*/React.createElement("div", {
    key: en,
    style: {
      background: 'var(--white)',
      padding: '28px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: 'var(--neutral-300)'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 26,
      letterSpacing: '0.02em',
      lineHeight: 1,
      color: 'var(--zinc-950)'
    }
  }, en), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--neutral-600)'
    }
  }, jp), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-on-light-muted)'
    }
  }, d))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 110
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    strong: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'clamp(26px,3.2vw,42px)',
      lineHeight: 1.3,
      color: 'var(--zinc-950)'
    }
  }, "\u4E8B\u696D\u306E\u6210\u9577\u3092\u3001\u4E00\u7DD2\u306B\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    style: window.btnSolid
  }, "\u76F8\u8AC7\u3059\u308B\xA0\u2192")))));
}
window.ConsultingPage = ConsultingPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/ConsultingPage.jsx", error: String((e && e.message) || e) }); }

// site/ContactPage.jsx
try { (() => {
/**
 * ContactPage — company info column + a working-feel inquiry form
 * (client-side only; shows a thank-you state on submit).
 */
function ContactPage({
  go
}) {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    company: '',
    name: '',
    email: '',
    topic: 'コンサルティング',
    message: ''
  });
  const set = k => e => setForm(s => ({
    ...s,
    [k]: e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    color: 'var(--zinc-950)',
    background: 'var(--white)',
    border: '1px solid var(--neutral-300)',
    borderRadius: 'var(--radius-sm)',
    padding: '12px 14px',
    outline: 'none'
  };
  const label = {
    fontFamily: 'var(--font-ui)',
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wide)',
    color: 'var(--neutral-600)',
    marginBottom: 7,
    display: 'block'
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Contact \u2014 \u304A\u554F\u3044\u5408\u308F\u305B",
    title: "\u304A\u554F\u3044\u5408\u308F\u305B",
    lead: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u3054\u76F8\u8AC7\u3001\u5354\u696D\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3053\u3061\u3089\u304B\u3089\u3002\u307E\u305A\u306F\u7121\u6599\u306E\u521D\u56DE\u76F8\u8AC7\u3092\u627F\u308A\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 24,
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    strong: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.5fr 1fr',
      gap: 56,
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, [['Email', 'hello@abouttheengineer.jp'], ['Office', '東京都渋谷区 — 完全リモート対応'], ['Hours', '平日 10:00 – 19:00 JST'], ['Social', 'X · Instagram · note']].map(([h, v]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement(Eyebrow, null, h), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--zinc-950)'
    }
  }, v)))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--neutral-200)',
      padding: '56px 40px',
      textAlign: 'center',
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(Display, {
    size: "clamp(36px,4vw,56px)"
  }, "Thank You"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px auto 0',
      maxWidth: 360,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--text-on-light-muted)'
    }
  }, "\u304A\u554F\u3044\u5408\u308F\u305B\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u30022\u55B6\u696D\u65E5\u4EE5\u5185\u306B\u3054\u9023\u7D61\u3044\u305F\u3057\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSent(false);
      setForm({
        company: '',
        name: '',
        email: '',
        topic: 'コンサルティング',
        message: ''
      });
    },
    style: {
      ...window.btnOutline,
      marginTop: 28
    }
  }, "\u30D5\u30A9\u30FC\u30E0\u306B\u623B\u308B")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "\u4F1A\u793E\u540D / \u5C4B\u53F7"), /*#__PURE__*/React.createElement("input", {
    style: field,
    value: form.company,
    onChange: set('company'),
    placeholder: "\u682A\u5F0F\u4F1A\u793E\u3007\u3007"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "\u304A\u540D\u524D *"), /*#__PURE__*/React.createElement("input", {
    style: field,
    required: true,
    value: form.name,
    onChange: set('name'),
    placeholder: "\u5C71\u7530 \u592A\u90CE"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9 *"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    style: field,
    required: true,
    value: form.email,
    onChange: set('email'),
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "\u3054\u76F8\u8AC7\u5185\u5BB9"), /*#__PURE__*/React.createElement("select", {
    style: field,
    value: form.topic,
    onChange: set('topic')
  }, ['コンサルティング', 'タレントマネジメント', 'イベント企画', 'プロダクト開発', 'その他'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "\u30E1\u30C3\u30BB\u30FC\u30B8 *"), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...field,
      minHeight: 130,
      resize: 'vertical'
    },
    required: true,
    value: form.message,
    onChange: set('message'),
    placeholder: "\u3054\u76F8\u8AC7\u306E\u6982\u8981\u3092\u304A\u66F8\u304D\u304F\u3060\u3055\u3044\u3002"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      ...window.btnSolid,
      alignSelf: 'flex-start',
      fontSize: 18,
      padding: '14px 36px'
    }
  }, "\u9001\u4FE1\u3059\u308B \u2192")))));
}
window.ContactPage = ContactPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/ContactPage.jsx", error: String((e && e.message) || e) }); }

// site/HomePage.jsx
try { (() => {
/**
 * HomePage — centered editorial masthead for the product studio, then a
 * centered "What we do" index (self-products + consulting).
 */
function HomePage({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    big: true,
    title: "\u3059\u3079\u3066\u306E\u4EBA\u306B\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC"
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 72,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('business'),
    style: btnSolid
  }, "\u30D7\u30ED\u30C0\u30AF\u30C8\u3092\u898B\u308B\xA0\u2192"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    style: btnOutline
  }, "\u304A\u554F\u3044\u5408\u308F\u305B"))), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 8,
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "What we do",
    title: "\u4E8B\u696D\u5185\u5BB9"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 40,
      maxWidth: 920,
      margin: '0 auto'
    }
  }, [['System', 'システム開発', '企画から開発・運用まで、一気通貫でプロダクトをつくります。', null], ['Consulting', 'コンサルティング', '事業戦略とグロースを、実践知をもとに伴走支援します。', 'consulting'], ['Media', 'メディア事業', 'エンジニアと技術の発信を通じて、学びと出会いを届けます。', null]].map(([en, jp, desc, dest]) => /*#__PURE__*/React.createElement("div", {
    key: en,
    onClick: dest ? () => go(dest) : undefined,
    style: {
      textAlign: 'center',
      cursor: dest ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      height: 200,
      margin: '0 auto',
      borderRadius: '50%',
      border: '1px solid var(--neutral-300)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      padding: 24,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: 13,
      color: 'var(--neutral-600)'
    }
  }, en), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--zinc-950)'
    }
  }, jp)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px auto 0',
      maxWidth: 240,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-on-light-muted)'
    }
  }, desc))))), /*#__PURE__*/React.createElement(SplitSection, {
    kicker: "Product Studio",
    kickerCase: "none",
    kickerStyle: {
      fontSize: 20
    },
    title: "\u81EA\u793E\u30B5\u30FC\u30D3\u30B9\u306E\u958B\u767A\u30FB\u904B\u55B6",
    body: "Actimo\u3092\u306F\u3058\u3081\u3001\u81EA\u793E\u30B5\u30FC\u30D3\u30B9\u3092\u4F01\u753B\u304B\u3089\u958B\u767A\u30FB\u904B\u55B6\u307E\u3067\u4E00\u8CAB\u3057\u3066\u624B\u304C\u3051\u3066\u3044\u307E\u3059\u3002",
    slotId: "home-product-studio",
    placeholder: "\u753B\u50CF\u3092\u30C9\u30ED\u30C3\u30D7\uFF08\u30D7\u30ED\u30C0\u30AF\u30C8\uFF09",
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => go('business'),
      style: btnSolid
    }, "\u30D7\u30ED\u30C0\u30AF\u30C8\u3092\u898B\u308B\xA0\u2192")
  }), /*#__PURE__*/React.createElement(SplitSection, {
    reverse: true,
    kicker: "Global Media Studio",
    kickerCase: "none",
    kickerStyle: {
      fontSize: 20
    },
    title: "\u82B8\u80FD\u30FB\u97F3\u697D\u30D7\u30ED\u30C0\u30AF\u30C8\u4E8B\u696D",
    body: "\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u306E\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u3068\u97F3\u697D\u30D7\u30ED\u30C0\u30AF\u30C8\u306E\u4F01\u753B\u30FB\u5236\u4F5C\u3092\u884C\u3046\u3001\u82B8\u80FD\u30FB\u97F3\u697D\u4E8B\u696D\u3067\u3059\u3002",
    slotId: "home-intro-media",
    placeholder: "\u753B\u50CF\u3092\u30C9\u30ED\u30C3\u30D7\uFF08\u82B8\u80FD\u30FB\u97F3\u697D\uFF09",
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => go('contact'),
      style: btnSolid
    }, "\u304A\u554F\u3044\u5408\u308F\u305B\xA0\u2192")
  }), /*#__PURE__*/React.createElement(SplitSection, {
    kicker: "Global Tech Studio",
    kickerCase: "none",
    kickerStyle: {
      fontSize: 20
    },
    title: "\u53E4\u7740\u30FB\u98DF\u54C1\u30FB\u5316\u7CA7\u54C1\u306E\u30AA\u30F3\u30E9\u30A4\u30F3\u8CA9\u58F2",
    body: "\u53E4\u7740\u3001\u30B3\u30FC\u30D2\u30FC\u8C46\u3001\u5316\u7CA7\u54C1\u306A\u3069\u3092\u30AA\u30F3\u30E9\u30A4\u30F3\u3067\u8CA9\u58F2\u3059\u308B\u7269\u8CA9\u4E8B\u696D\u3067\u3059\u3002",
    slotId: "home-intro-retail",
    placeholder: "\u753B\u50CF\u3092\u30C9\u30ED\u30C3\u30D7\uFF08\u7269\u8CA9\uFF09",
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => go('contact'),
      style: btnSolid
    }, "\u304A\u554F\u3044\u5408\u308F\u305B\xA0\u2192")
  }), /*#__PURE__*/React.createElement(SplitSection, {
    reverse: true,
    id: "consulting-section",
    kicker: "Consulting",
    kickerCase: "none",
    kickerStyle: {
      fontSize: 20
    },
    title: "\u4E8B\u696D\u6226\u7565\u30FB\u30B0\u30ED\u30FC\u30B9\u652F\u63F4",
    body: "\u30D7\u30ED\u30C0\u30AF\u30C8\u958B\u767A\u3067\u57F9\u3063\u305F\u77E5\u898B\u3092\u3082\u3068\u306B\u3001\u4E8B\u696D\u6226\u7565\u306E\u7ACB\u6848\u304B\u3089\u30B0\u30ED\u30FC\u30B9\u65BD\u7B56\u306E\u5B9F\u884C\u307E\u3067\u3092\u652F\u63F4\u3057\u307E\u3059\u3002\u30C7\u30FC\u30BF\u306B\u57FA\u3065\u304D\u3001\u691C\u8A3C\u53EF\u80FD\u306A\u4EEE\u8AAC\u304B\u3089\u6210\u9577\u3092\u3064\u304F\u308A\u307E\u3059\u3002",
    slotId: "home-intro-consulting",
    src: window.__resources && window.__resources.consultingImg || "img-home-intro-consulting.png",
    placeholder: "\u753B\u50CF\u3092\u30C9\u30ED\u30C3\u30D7\uFF08\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\uFF09",
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => go('consulting'),
      style: btnSolid
    }, "\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\u306B\u3064\u3044\u3066\xA0\u2192")
  }), /*#__PURE__*/React.createElement("div", {
    id: "about-section",
    style: {
      background: 'var(--zinc-950)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 96,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true,
    style: {
      display: 'block',
      marginBottom: 16
    }
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'clamp(26px, 3.2vw, 42px)',
      lineHeight: 1.2,
      color: 'var(--white)'
    }
  }, "\u4F1A\u793E\u6982\u8981")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, [['会社名', 'About the Engineer 株式会社'], ['所在地', '東京都'], ['事業内容', 'システム開発／コンサルティング／メディア事業']].map(([k, v], i, arr) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: 24,
      alignItems: 'baseline',
      padding: '20px 0',
      borderTop: '1px solid var(--zinc-800)',
      borderBottom: i === arr.length - 1 ? '1px solid var(--zinc-800)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--white)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    style: btnSolidInverse
  }, "\u304A\u554F\u3044\u5408\u308F\u305B\xA0\u2192")))), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 96,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Message",
    title: "\u4EE3\u8868\u30E1\u30C3\u30BB\u30FC\u30B8"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center',
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "home-about-message",
    shape: "rect",
    placeholder: "\u753B\u50CF\u3092\u30C9\u30ED\u30C3\u30D7\uFF08\u4EE3\u8868\uFF09",
    style: {
      width: '100%',
      height: 'auto',
      aspectRatio: '4 / 3',
      display: 'block',
      background: 'var(--neutral-100)',
      border: '1px solid var(--neutral-200)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'clamp(20px, 2.2vw, 26px)',
      lineHeight: 1.6,
      color: 'var(--zinc-950)'
    }
  }, "\u3068\u3082\u306B\u3064\u304F\u308B\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.9,
      color: 'var(--text-on-light-muted)'
    }
  }, "\u3068\u3082\u306B\u3064\u304F\u308B\u3001\u3092\u3082\u3063\u3068\u30FC\u306B\u3001\u5168\u3066\u306E\u4EBA\u306B\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u3067\u3088\u308A\u3088\u3044\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u304D\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.9,
      color: 'var(--text-on-light-muted)'
    }
  }, "\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u306F\u3001\u5C02\u9580\u5BB6\u3060\u3051\u306E\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3059\u3079\u3066\u306E\u4EBA\u304C\u305D\u306E\u6069\u6075\u3092\u53D7\u3051\u3089\u308C\u308B\u4F53\u9A13\u3092\u3064\u304F\u308B\u3053\u3068\u3092\u3001 \u3053\u308C\u304B\u3089\u3082\u4E8B\u696D\u306E\u8EF8\u306B\u636E\u3048\u3066\u3044\u304D\u307E\u3059\u3002")))));
}
const btnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5em',
  cursor: 'pointer',
  fontFamily: 'var(--font-display)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-wider)',
  fontSize: 18,
  padding: '13px 30px',
  whiteSpace: 'nowrap',
  transition: 'var(--transition-all)'
};
const btnSolid = {
  ...btnBase,
  background: 'var(--zinc-950)',
  color: 'var(--white)',
  border: '2px solid var(--zinc-950)'
};
const btnOutline = {
  ...btnBase,
  background: 'transparent',
  color: 'var(--zinc-950)',
  border: '2px solid var(--zinc-950)'
};
const btnSolidInverse = {
  ...btnBase,
  background: 'var(--white)',
  color: 'var(--zinc-950)',
  border: '2px solid var(--white)'
};
window.HomePage = HomePage;
Object.assign(window, {
  btnSolid,
  btnOutline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/HomePage.jsx", error: String((e && e.message) || e) }); }

// site/ProductPage.jsx
try { (() => {
/**
 * ProductDetailPage — single product overview page, reached from the
 * Products index. Editorial hero + one image/copy split + tags + CTA.
 */
function ProductDetailPage({
  slug,
  go
}) {
  const DS = window.AboutTheEngineerDesignSystem_78d035;
  const {
    Badge
  } = DS;
  const product = window.PRODUCTS.find(p => p.slug === slug) || window.PRODUCTS[0];
  const isAscii = s => /^[\x00-\x7F]+$/.test(s);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 150,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('business'),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--neutral-600)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, "\u2190 Products")), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 24,
      paddingBottom: 60
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      display: 'block',
      marginBottom: 20
    }
  }, "Products \u2014 ", product.jp), /*#__PURE__*/React.createElement("div", {
    style: isAscii(product.name) ? {
      fontFamily: 'var(--font-product)',
      textTransform: 'uppercase',
      fontSize: 'clamp(48px, 8vw, 104px)',
      letterSpacing: '0.02em',
      lineHeight: 0.92,
      color: 'var(--zinc-950)'
    } : {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'clamp(36px, 6vw, 72px)',
      letterSpacing: '0.01em',
      lineHeight: 1.1,
      color: 'var(--zinc-950)'
    }
  }, product.name)), /*#__PURE__*/React.createElement(SplitSection, {
    kicker: "Overview",
    kickerCase: "none",
    title: product.jp,
    body: product.desc,
    slotId: 'product-' + product.slug,
    placeholder: '画像をドロップ（' + product.name + '）',
    action: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, product.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
      key: t,
      tone: "outline",
      style: {
        color: 'var(--zinc-950)'
      }
    }, t)))
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 24,
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    style: window.btnSolid
  }, "\u304A\u554F\u3044\u5408\u308F\u305B\xA0\u2192"))));
}
window.ProductDetailPage = ProductDetailPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/ProductPage.jsx", error: String((e && e.message) || e) }); }

// site/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = window.__resources && window.__resources.imageSlotsState || '../.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/image-slot.js", error: String((e && e.message) || e) }); }

// site/products-data.js
try { (() => {
/**
 * Shared product data — used by the Products index (BusinessPage) and each
 * product's own detail page.
 */
window.PRODUCTS = [{
  slug: 'actimo',
  name: 'Actimo',
  jp: 'アスリート応援プラットフォーム',
  desc: '月額応援、投げ銭、試合連動の参加機能で、ファンとアスリートをつなぐ新しい応援体験を。企画・開発・グロースまでを自社で手がけています。',
  tags: ['月額応援', '投げ銭', '試合連動'],
  category: 'sports'
}, {
  slug: 'chibimon-reversi',
  name: 'ちびモンリバーシ',
  jp: 'カジュアルゲーム',
  desc: 'かわいいモンスターたちで遊ぶ、リバーシ（オセロ）ゲーム。',
  tags: ['カジュアルゲーム', 'リバーシ'],
  category: 'entertainment'
}];
window.PRODUCT_CATEGORIES = [{
  key: 'sports',
  label: 'Sports',
  jp: 'スポーツ領域'
}, {
  key: 'entertainment',
  label: 'Entertainment',
  jp: 'エンタメ領域'
}, {
  key: 'education',
  label: 'Education',
  jp: '教育領域'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/products-data.js", error: String((e && e.message) || e) }); }

// site/shared.jsx
try { (() => {
/**
 * Shared editorial-grid primitives for the corporate site.
 * Light-dominant, ruled, magazine-masthead language. All exported to
 * window for cross-file (Babel) access.
 */

function Container({
  children,
  style = {},
  id
}) {
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 var(--page-gutter-lg)',
      ...style
    }
  }, children);
}

/* Small uppercase tracked running-head / label */
function Eyebrow({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: dark ? 'var(--zinc-500)' : 'var(--neutral-600)',
      ...style
    }
  }, children);
}
function Rule({
  dark = false,
  strong = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: strong ? 'var(--zinc-950)' : dark ? 'var(--zinc-800)' : 'var(--neutral-200)',
      ...style
    }
  });
}

/* Big editorial display heading (Bebas, uppercase) */
function Display({
  children,
  size = 'clamp(48px, 8vw, 128px)',
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 0.9,
      fontSize: size,
      color: dark ? 'var(--white)' : 'var(--zinc-950)',
      ...style
    }
  }, children);
}

/* A page masthead: running head row + giant title + optional lead */
/* Centered page masthead: kicker + big JP-gothic title + lead */
function PageHero({
  kicker,
  title,
  lead,
  big = false
}) {
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: big ? 220 : 150,
      paddingBottom: big ? 100 : 60,
      textAlign: 'center'
    }
  }, kicker && /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      display: 'block',
      marginBottom: 24,
      fontSize: 27
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: big ? 'clamp(32px, 5vw, 76px)' : 'clamp(38px, 6vw, 76px)',
      lineHeight: big ? 1.04 : 1.14,
      letterSpacing: '-0.01em',
      color: 'var(--zinc-950)',
      whiteSpace: big ? 'nowrap' : 'normal',
      marginBottom: big ? 'clamp(48px, 9vw, 132px)' : 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px auto 0',
      maxWidth: 600,
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.85,
      color: 'var(--text-on-light-muted)'
    }
  }, lead));
}

/* Centered in-page section header: kicker + JP-gothic subhead */
function SectionHead({
  kicker,
  title,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48,
      ...style
    }
  }, kicker && /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      display: 'block',
      marginBottom: 16
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'clamp(26px, 3.2vw, 42px)',
      lineHeight: 1.2,
      color: 'var(--zinc-950)'
    }
  }, title));
}

/* A ruled index row: (NN) — Title ........ meta → */
function RuledRow({
  number,
  title,
  sub,
  meta,
  onClick,
  dark = false
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1fr auto',
      gap: 24,
      alignItems: 'center',
      padding: '28px 0',
      borderTop: `1px solid ${dark ? 'var(--zinc-800)' : 'var(--neutral-200)'}`,
      cursor: onClick ? 'pointer' : 'default',
      paddingLeft: hover && onClick ? 12 : 0,
      transition: 'padding 300ms cubic-bezier(0.4,0,0.2,1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: dark ? 'var(--zinc-600)' : 'var(--neutral-300)'
    }
  }, number), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 'clamp(26px,3.4vw,40px)',
      letterSpacing: '0.01em',
      lineHeight: 1,
      color: dark ? 'var(--white)' : 'var(--zinc-950)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.7,
      color: dark ? 'var(--zinc-400)' : 'var(--text-on-light-muted)',
      maxWidth: 560
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, meta && /*#__PURE__*/React.createElement(Eyebrow, {
    dark: dark
  }, meta), onClick && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 22,
      color: dark ? 'var(--white)' : 'var(--zinc-950)',
      transform: hover ? 'translateX(4px)' : 'none',
      transition: 'transform 300ms'
    }
  }, "\u2192")));
}

/* Alternating company-intro split: text one side, fillable image the other */
function SplitSection({
  kicker,
  title,
  body,
  slotId,
  placeholder,
  src,
  reverse = false,
  action,
  kickerCase,
  titleSize,
  kickerStyle,
  id
}) {
  const text = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      display: 'block',
      marginBottom: 16,
      ...(kickerCase ? {
        textTransform: kickerCase
      } : {}),
      ...kickerStyle
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: titleSize ? 800 : 700,
      fontSize: titleSize || 'clamp(26px, 3.2vw, 44px)',
      lineHeight: 1.15,
      color: 'var(--zinc-950)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.85,
      color: 'var(--text-on-light-muted)',
      maxWidth: 460
    }
  }, body), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, action));
  const media = /*#__PURE__*/React.createElement("image-slot", {
    id: slotId,
    src: src,
    shape: "rect",
    placeholder: placeholder,
    style: {
      width: '100%',
      height: 'auto',
      aspectRatio: '4 / 3',
      display: 'block',
      background: 'var(--neutral-100)',
      border: '1px solid var(--neutral-200)'
    }
  });
  return /*#__PURE__*/React.createElement(Container, {
    id: id,
    style: {
      paddingTop: 56,
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, reverse ? /*#__PURE__*/React.createElement(React.Fragment, null, media, text) : /*#__PURE__*/React.createElement(React.Fragment, null, text, media)));
}
Object.assign(window, {
  Container,
  Eyebrow,
  Rule,
  Display,
  PageHero,
  SectionHead,
  RuledRow,
  SplitSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.NumberedItem = __ds_scope.NumberedItem;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
