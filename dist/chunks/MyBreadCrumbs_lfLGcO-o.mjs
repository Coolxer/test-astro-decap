import { e as createAstro, a as createComponent, b as renderTemplate, m as maybeRenderHead, s as spreadAttributes, f as addAttribute, g as renderSlot, d as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const schemaJson = (parts) => JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: parts.map((part, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@id": part.href,
      name: part.text
    }
  }))
});

const findSeparator = (slug) => {
  const separators = ["-", "_"];
  for (const separator of separators) {
    if (slug.includes(separator)) {
      return separator;
    }
  }
};
const unSlugTrimmed = (slug) => {
  const separator = findSeparator(slug);
  if (separator) {
    return slug.split(separator).join(" ").trim();
  }
  return slug;
};
const formatLinkText = (slug, format) => {
  const slugToFormat = unSlugTrimmed(slug);
  switch (format) {
    case "lower":
      return slugToFormat.toLowerCase();
    case "capitalized":
      return slugToFormat.split(" ").map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ).join(" ");
    case "sentence":
      return slugToFormat.charAt(0).toUpperCase() + slugToFormat.slice(1);
    default:
      return slug;
  }
};

const generateCrumbs = ({
  crumbs,
  paths,
  indexText,
  hasTrailingSlash,
  linkTextFormat,
  customBaseUrl,
  excludeCurrentPage
}) => {
  if (crumbs && crumbs?.length > 0) {
    return crumbs;
  }
  const parts = [];
  const baseUrl = "/";
  const basePartCount = baseUrl.split("/").filter((s) => s).length;
  if (customBaseUrl) {
    paths.unshift(customBaseUrl);
  }
  paths.forEach((text, index) => {
    const generateHref = `/${paths.slice(0, index + 1).join("/")}`;
    const addTrailingSlash = hasTrailingSlash ? `${generateHref}/` : generateHref;
    const finalHref = addTrailingSlash;
    const matches = text.match(/^(.+?)(\.[a-z0-9]+)?\/?$/i);
    if (matches && matches[2]) {
      text = matches[1];
    }
    parts.push({
      text: formatLinkText(text, linkTextFormat),
      href: finalHref
    });
  });
  if (!customBaseUrl) {
    parts.unshift({
      text: indexText,
      href: baseUrl
    });
  }
  if (!customBaseUrl && basePartCount > 1) {
    let toRemove = basePartCount - 1;
    while (toRemove--) {
      parts.shift();
    }
  }
  parts[0] = {
    text: indexText,
    href: parts[0]?.href
  };
  if (excludeCurrentPage) {
    parts.pop();
  }
  return parts;
};

const $$Astro$2 = createAstro("https://www.lukaszmilos.pl");
const $$BreadcrumbLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BreadcrumbLink;
  const { attrs, mainBemClass, isIndex, isCurrent } = Astro2.props;
  const cssClasses = [
    `${mainBemClass}__link`,
    { "is-current": isCurrent },
    { "is-index": isIndex }
  ];
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(attrs)}${addAttribute(cssClasses, "class:list")}${addAttribute(isCurrent ? "location" : false, "aria-current")}> ${renderSlot($$result, $$slots["index"])} </a>`;
}, "D:/Projects/Personal/astro-template/node_modules/astro-breadcrumbs/src/BreadcrumbLink.astro", void 0);

const $$BreadcrumbSeparator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="c-breadcrumbs__separator" aria-hidden="true"> ${renderSlot($$result, $$slots["separator"])} </span>`;
}, "D:/Projects/Personal/astro-template/node_modules/astro-breadcrumbs/src/BreadcrumbSeparator.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.lukaszmilos.pl");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const {
    indexText = "Home",
    mainBemClass = "c-breadcrumbs",
    ariaLabel = "breadcrumbs",
    crumbs = [],
    schemaJsonScript = true,
    ellipsisAriaLabel = "Show hidden navigation",
    truncated = false,
    linkTextFormat,
    customBaseUrl,
    excludeCurrentPage = false
  } = Astro2.props;
  const paths = Astro2.url.pathname.split("/").filter((crumb) => crumb);
  const hasTrailingSlash = Astro2.url.pathname.endsWith("/");
  const pathLength = paths?.length;
  const UUID = crypto.randomUUID();
  const parts = generateCrumbs({
    crumbs,
    paths,
    indexText,
    hasTrailingSlash,
    linkTextFormat,
    customBaseUrl,
    excludeCurrentPage
  });
  const isLastElement = (index, array) => index + 1 === array.length;
  return renderTemplate`${renderComponent($$result, "astro-breadcrumbs", "astro-breadcrumbs", { "data-main-bem-class": mainBemClass, "data-id": UUID, "data-path-length": pathLength, "data-truncated": truncated }, { "default": () => renderTemplate` ${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}${addAttribute(mainBemClass, "class")}${addAttribute(UUID, "id")}> <ol${addAttribute(`${mainBemClass}__crumbs${Astro2.slots.has("separator") ? " has-separators" : " has-no-separators"}`, "class")}> ${parts.map(({ text, ...attrs }, index, array) => {
    const lastElement = isLastElement(index, array);
    if (excludeCurrentPage && lastElement) {
      return null;
    }
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${index === 1 && pathLength > 1 && truncated && renderTemplate`<li${addAttribute(`${mainBemClass}__crumb has-ellipsis`, "class")}> <button type="button"${addAttribute(ellipsisAriaLabel, "aria-label")}${addAttribute(`${mainBemClass}__truncated-button`, "class")}> ${renderSlot($$result2, $$slots["ellipsis"], renderTemplate`…`)} </button> ${renderComponent($$result2, "BreadcrumbSeparator", $$BreadcrumbSeparator, {}, { "seperator": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["separator"])}` })} </li>`}<li${addAttribute(`${mainBemClass}__crumb`, "class")}> ${renderComponent($$result2, "BreadcrumbLink", $$BreadcrumbLink, { "attrs": attrs, "mainBemClass": mainBemClass, "isIndex": index === 0, "isCurrent": lastElement }, { "index": ($$result3) => renderTemplate`${Astro2.slots.has("index") && index === 0 ? renderTemplate`${renderSlot($$result3, $$slots["index"])}` : text}` })} ${Astro2.slots.has("separator") && !lastElement && renderTemplate`${renderComponent($$result2, "BreadcrumbSeparator", $$BreadcrumbSeparator, {}, { "separator": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["separator"])}` })}`} </li> ` })}`;
  })} </ol> </nav> ` })} ${schemaJsonScript && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(schemaJson(parts)))} `;
}, "D:/Projects/Personal/astro-template/node_modules/astro-breadcrumbs/src/Breadcrumbs.astro", void 0);

const $$Astro = createAstro("https://www.lukaszmilos.pl");
const $$MyBreadCrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MyBreadCrumbs;
  const { class: className, ...attributes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "class:list": ["", className], "indexText": "strona g\u0142\xF3wna", "linkTextFormat": "lower", ...attributes }, { "separator": ($$result2) => renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg>` })}`;
}, "D:/Projects/Personal/astro-template/src/components/widgets/MyBreadCrumbs.astro", void 0);

export { $$MyBreadCrumbs as $ };
