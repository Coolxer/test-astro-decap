import { e as createAstro, a as createComponent, b as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, g as renderSlot, d as renderComponent, u as unescapeHTML, F as Fragment, n as renderHead } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import { d as data } from './site_XOOrlhg2.mjs';
/* empty css                          */
import { tv } from 'tailwind-variants';
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';

const favIcon = "/_astro/favicon.D8h6dbEP.ico";

const favIconSvg = new Proxy({"src":"/_astro/favicon.DroVJnCf.svg","width":64,"height":64,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Personal/astro-template/src/assets/favicons/favicon.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("D:/Projects/Personal/astro-template/src/assets/favicons/favicon.svg");
							return target[name];
						}
					});

const appleTouchIcon = new Proxy({"src":"/_astro/apple-touch-icon.DsV_NJhE.png","width":180,"height":180,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Personal/astro-template/src/assets/favicons/apple-touch-icon.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("D:/Projects/Personal/astro-template/src/assets/favicons/apple-touch-icon.png");
							return target[name];
						}
					});

function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}
function buildSlug(slug) {
  if (!slug.startsWith("/"))
    slug = "/" + slug;
  slug = slug.split("/").map(slugify).join("/");
  if (!slug.endsWith("/"))
    slug = slug + "/";
  return slug;
}
function buildToc(headings) {
  const toc = [];
  const parentHeadings = /* @__PURE__ */ new Map();
  headings.forEach((h) => {
    const heading = { ...h, subheadings: [] };
    parentHeadings.set(heading.depth, heading);
    if (heading.depth === 2) {
      toc.push(heading);
    } else {
      const parent = parentHeadings.get(heading.depth - 1);
      if (parent)
        parent.subheadings.push(heading);
    }
  });
  return toc;
}

const $$Astro$c = createAstro("https://www.lukaszmilos.pl");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    link,
    rawLink = false,
    class: className,
    ...attributes
  } = Astro2.props;
  const button = tv({
    base: "flex flex-row place-items-center justify-center gap-2 text-center transition-all duration-300 ease-in-out",
    variants: {
      variant: {
        primary: "rounded border border-accent bg-accent text-white shadow-md hover:translate-y-1 hover:border-accent-dark hover:bg-accent-dark",
        secondary: "rounded border border-black bg-transparent text-black shadow-md hover:translate-y-1 hover:bg-black hover:text-white",
        tetriary: "rounded border border-white bg-transparent text-white shadow-md hover:translate-y-1 hover:bg-white hover:text-black",
        link: "hover:text-accent"
      },
      size: {
        sm: "px-2 py-2 text-sm leading-none",
        md: "px-4 py-4 text-base",
        lg: "px-6 py-6 text-lg"
      }
    },
    compoundVariants: [
      {
        variant: "link",
        size: ["sm", "md", "lg"],
        class: "pl-0"
      }
    ],
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  });
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(rawLink ? link : buildSlug(link), "href")}${addAttribute([button({ variant, size }), className], "class:list")}${spreadAttributes(attributes)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "D:/Projects/Personal/astro-template/src/components/ui/Button.astro", void 0);


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$b = createAstro("https://www.lukaszmilos.pl");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "D:/Projects/Personal/astro-template/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const data = [
    {
      text: "O mnie",
      href: "/o-mnie"
    },
    {
      text: "Oferta",
      href: "/oferta",
      links: [
        {
          text: "tworzenie strony www",
          href: "/oferta/tworzenie-strony-www"
        },
        {
          text: "tworzenie sklepu www",
          href: "/oferta/tworzenie-sklepu-www"
        },
        {
          text: "poprawa strony (sklepu) www",
          href: "/oferta/poprawa-strony-www"
        },
        {
          text: "wdra\u017Canie narz\u0119dzi cyfrowych",
          href: "/oferta/wdrazanie-narzedzi-cyfrowych"
        },
        {
          text: "automatyzacja proces\xF3w firmowych",
          href: "/oferta/automatyzacja-procesow-firmowych"
        },
        {
          text: "inne",
          href: "/oferta/inne"
        }
      ]
    },
    {
      text: "Portfolio",
      href: "/portfolio"
    },
    {
      text: "Menu",
      href: "/blog"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="fixed start-0 top-0 z-20 flex w-full items-center border-b bg-white shadow-md"> <div class="mx-auto flex min-h-20 w-full max-w-screen-xl flex-wrap items-center justify-between px-4"> <a href="/" class="flex items-center space-x-2 rtl:space-x-reverse"> ${renderComponent($$result, "Icon", $$Icon, { "name": "logo", "class": "text-5xl" })} <div class="flex flex-col justify-center text-lg leading-5"> <span>Łukasz</span> <span>Miłoś</span> </div> </a> <div class="flex min-h-20 items-center space-x-4 md:order-2 md:space-x-0 rtl:space-x-reverse"> ${renderComponent($$result, "Button", $$Button, { "link": buildSlug("/kontakt"), "size": "sm", "class": "display md:hidden" }, { "default": ($$result2) => renderTemplate`Kontakt` })} ${renderComponent($$result, "Button", $$Button, { "link": buildSlug("/kontakt"), "class": "hidden md:flex" }, { "default": ($$result2) => renderTemplate`Kontakt` })} <button id="hamburger-btn" data-collapse-toggle="navbar-sticky" type="button" class="inline-flex h-10 w-10 items-center justify-center rounded p-2 text-sm text-black transition-all duration-300 ease-in-out hover:bg-accent-lightest focus:outline-none md:hidden md:p-0" aria-controls="navbar-sticky" aria-expanded="false"> <span class="sr-only">Otwórz menu główne</span> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div class="mt-12 hidden h-screen w-full items-center justify-between md:order-1 md:mt-0 md:flex md:size-auto" id="navbar-sticky"> <p class="text-center text-h3 md:hidden">Menu główne</p> <ul class="mt-6 flex flex-col gap-2 font-medium md:mt-0 md:flex-row md:items-center md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse"> ${data.map(({ text, href, links }) => renderTemplate`<li class="flex flex-row items-start justify-between md:items-center md:gap-4"> ${links?.length ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(buildSlug(href), "href")} class="block h-full w-auto rounded rounded-r-none border-b border-transparent bg-gray-light p-4 text-black transition-all duration-300 ease-in-out hover:bg-accent-lightest hover:text-accent md:rounded-none md:bg-transparent md:p-0 md:hover:border-accent md:hover:bg-transparent md:hover:text-accent" aria-current="page"> ${text} </a> <div id="accordion-collapse" data-accordion="collapse" class="w-full"> <div id="menu-dropdown-collapse-heading"> <button type="button" class="flex size-full h-[58px] flex-row items-center justify-end gap-4 rounded rounded-l-none border border-b border-transparent border-l-border_color bg-gray-light p-4 text-black transition-all duration-300 ease-in-out hover:bg-accent-lightest hover:text-accent md:justify-between md:border-none md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-accent" data-accordion-target="#menu-dropdown-collapse-body" aria-expanded="false" aria-controls="menu-dropdown-collapse-body"> <svg class="size-4 shrink-0 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path> </svg> </button> </div> <div id="menu-dropdown-collapse-body" class="hidden rounded bg-white md:absolute md:-ml-16 md:mt-8 md:border md:border-border_color md:p-4 md:shadow" aria-labelledby="menu-dropdown-collapse-headin"> <ul class="py-2 text-sm text-gray-dark" aria-labelledby="dropdownLargeButton"> ${links.map(({ text: text2, href: href2 }) => renderTemplate`<li class="hover:accent-dark border-b p-2 duration-300 ease-in-out last:border-none"> <a${addAttribute(buildSlug(href2), "href")}>${text2}</a> </li>`)} </ul> </div> </div> ` })}` : renderTemplate`<a${addAttribute(buildSlug(href), "href")} class="block size-full rounded border-b border-transparent bg-gray-light p-4 text-black transition-all duration-300 ease-in-out hover:bg-accent-lightest hover:text-accent md:rounded-none md:bg-transparent md:p-0 md:hover:border-accent md:hover:bg-transparent md:hover:text-accent" aria-current="page"> ${text} </a>`} </li>`)} </ul> </div> </div> </nav> `;
}, "D:/Projects/Personal/astro-template/src/components/core/Header.astro", void 0);

const $$Astro$a = createAstro("https://www.lukaszmilos.pl");
const socials = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61556981469608",
    svg: "facebook"
  },
  // {
  //   title: "Instagram",
  //   href: "https://www.instagram.com/user",
  //   svg: "instagram",
  // },
  // {
  //   title: "Youtube",
  //   href: "https://www.yotuube.com/@user",
  //   svg: "youtube",
  // },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/lukasz-milos/",
    svg: "linkedin"
  },
  // {
  //   title: "X",
  //   href: "https://www.x.com/user",
  //   svg: "x",
  // },
  {
    title: "Youtube",
    href: "https://www.youtube.com/@lukaszmilos",
    svg: "youtube"
  }
];
const $$Socials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Socials;
  const { itemsStyle, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex space-x-4", className], "class:list")}> ${socials.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} rel="nofollow" target="_blank"${addAttribute(itemsStyle, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "socials/" + social.svg, "class": "size-8" })} <span class="sr-only">${social.title}</span> </a>`)} </div>`;
}, "D:/Projects/Personal/astro-template/src/components/widgets/Socials.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const data = [
    {
      title: "Og\xF3lne",
      links: [
        { text: "Strona g\u0142\xF3wna", href: "/" },
        { text: "O mnie", href: "/o-mnie" },
        { text: "Portfolio", href: "/portfolio" },
        { text: "Blog", href: "/blog" },
        { text: "Kontakt", href: "/kontakt" },
        { text: "Polityka prywatno\u015Bci", href: "/polityka-prywatnosci" }
      ]
    },
    {
      title: "Oferta",
      links: [
        {
          text: "tworzenie strony www",
          href: "/oferta/tworzenie-strony-www"
        },
        {
          text: "tworzenie sklepu www",
          href: "/oferta/tworzenie-sklepu-www"
        },
        {
          text: "poprawa strony (sklepu) www",
          href: "/oferta/poprawa-strony-www"
        },
        {
          text: "wdra\u017Canie narz\u0119dzi cyfrowych",
          href: "/oferta/wdrazanie-narzedzi-cyfrowych"
        },
        {
          text: "automatyzacja proces\xF3w firmowych",
          href: "/oferta/automatyzacja-procesow-firmowych"
        },
        {
          text: "inne",
          href: "/oferta/inne"
        }
      ]
    }
  ];
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<footer class="bg-black px-6 pt-8 text-white"> <div class="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-3 md:py-6"> <div class="flex flex-col gap-2 border-gray-dark md:border-r"> ', ' <div> <p class="text-h3">\u0141ukasz Mi\u0142o\u015B</p> <p class="text-lg">In\u017Cynier IT. Programista. Informatyk.</p> </div> <div class="flex flex-col gap-2 text-gray"> <p>Moc Cyfryzacji - \u0141ukasz Mi\u0142o\u015B</p> <p>NIP: 8172216931</p> <p>REGON: 529387133</p> </div> </div> <hr class="h-px w-full border-0 bg-gray-dark md:hidden"> ', ' </div> <div class="mx-auto mt-8 w-full border-t border-gray-dark py-4 md:flex md:items-center md:justify-between"> <div class="mx-auto w-full max-w-screen-xl"> <p class="text-center text-sm">\n\xA9 <span id="footer-year">', "</span> \u0141ukasz Mi\u0142o\u015B. Wszelkie prawa zastrze\u017Cone.\n</p> </div> </div> ", ' </footer> <script>\n  document.getElementById("footer-year").innerText = new Date().getFullYear()\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "logo", "class": "text-7xl" }), data.map(({ title, links }) => renderTemplate`<div class="border-gray-dark last:border-0 md:border-r"> <p class="mb-2 text-h5">${title}</p> ${links && Array.isArray(links) && links.length > 0 && renderTemplate`<ul class="list-inside list-disc font-medium"> ${links.map(({ text, href }) => renderTemplate`<li class="mb-base"> <a${addAttribute(buildSlug(href), "href")} class="text-accent-light transition-colors duration-300 ease-in-out hover:text-accent"> ${text} </a> </li>`)} </ul>`} <hr class="h-px w-full border-0 bg-gray-dark last:hidden md:hidden"> </div>`), year, renderComponent($$result, "Socials", $$Socials, { "itemsStyle": "text-white", "class": "justify-center" }));
}, "D:/Projects/Personal/astro-template/src/components/core/Footer.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$ScrollToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<button id="scrollToTopBtn" class="fixed bottom-12 right-12 z-50 hidden rounded-full bg-accent p-2 text-white shadow duration-500 ease-in-out hover:bg-accent-dark"> ', ' </button> <script>\n  const btn = document.getElementById("scrollToTopBtn")\n\n  if (btn) {\n    btn?.addEventListener("click", function () {\n      window.scrollTo({\n        top: 0,\n        behavior: "smooth",\n      })\n    })\n\n    window.addEventListener("scroll", function () {\n      if (window.scrollY > 20) btn.style.display = "block"\n      else btn.style.display = "none"\n    })\n  }\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "size-12 rotate-90" }));
}, "D:/Projects/Personal/astro-template/src/components/widgets/ScrollToTop.astro", void 0);

const $$Astro$9 = createAstro("https://www.lukaszmilos.pl");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "D:/Projects/Personal/astro-template/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$8 = createAstro("https://www.lukaszmilos.pl");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "D:/Projects/Personal/astro-template/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$7 = createAstro("https://www.lukaszmilos.pl");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "D:/Projects/Personal/astro-template/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$6 = createAstro("https://www.lukaszmilos.pl");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "D:/Projects/Personal/astro-template/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$5 = createAstro("https://www.lukaszmilos.pl");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "D:/Projects/Personal/astro-template/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$4 = createAstro("https://www.lukaszmilos.pl");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "D:/Projects/Personal/astro-template/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$3 = createAstro("https://www.lukaszmilos.pl");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "D:/Projects/Personal/astro-template/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$2 = createAstro("https://www.lukaszmilos.pl");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "D:/Projects/Personal/astro-template/node_modules/astro-seo/src/SEO.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://www.lukaszmilos.pl");
const $$MySEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MySEO;
  const {
    meta: {
      title,
      noTemplate,
      titleTemplate,
      description,
      canonical,
      noindex,
      nofollow,
      charset,
      image,
      languageAlternates,
      og = true,
      tw = true,
      article = false,
      openGraph = {},
      twitter = {},
      restMeta = {}
    },
    schema
  } = Astro2.props;
  return renderTemplate`<!-- Metadata -->${renderComponent($$result, "SEO", $$SEO, { "titleTemplate": noTemplate ? "%s" : titleTemplate ? titleTemplate : data.site.meta["meta-title-template"], "title": title, "description": description, "canonical": canonical || Astro2.url.href, "noindex": noindex || false, "nofollow": nofollow || false, "charset": charset || "UTF-8", "languageAlternates": languageAlternates || void 0, "openGraph": og ? {
    basic: {
      title: openGraph.basic?.title || (title ? title : data.site.meta["home-title"]),
      type: openGraph.basic?.type || "website",
      image: openGraph.basic?.image || (image?.src ? image.src : data.site.meta["og-image"].src),
      url: openGraph.basic?.url || Astro2.url.href
    },
    optional: {
      audio: openGraph.optional?.audio || void 0,
      description: openGraph.optional?.description || (description ? description : data.site.meta["home-description"]),
      determiner: openGraph.optional?.determiner || "",
      locale: openGraph.optional?.locale || "pl_PL",
      localeAlternate: openGraph.optional?.localeAlternate || void 0,
      siteName: openGraph.optional?.siteName || data.site.meta["home-title"],
      video: openGraph.optional?.video || void 0
    },
    image: {
      url: openGraph.image?.url || Astro2.url.href,
      secureUrl: openGraph.image?.secureUrl || Astro2.url.href,
      type: openGraph.image?.type || "image/jpeg",
      width: openGraph.image?.width || 1200,
      height: openGraph.image?.height || 600,
      alt: openGraph.image?.alt || (image?.alt ? image.alt : data.site.meta["og-image"].alt)
    },
    article: article ? {
      publishedTime: openGraph.article?.publishedTime || void 0,
      modifiedTime: openGraph.article?.modifiedTime || void 0,
      expirationTime: openGraph.article?.expirationTime || void 0,
      authors: openGraph.article?.authors || [data.company.name],
      section: openGraph.article?.section || "post",
      tags: openGraph.article?.tags || void 0
    } : void 0
  } : void 0, "twitter": tw ? {
    card: twitter.card || "summary",
    site: twitter.site || data.site.domain,
    creator: twitter.creator || data.company.name,
    title: twitter.title || (title ? title : data.site.meta["home-title"]),
    image: twitter.image || (image?.src ? image.src : data.site.meta["og-image"].src),
    imageAlt: twitter.imageAlt || (image?.alt ? image.alt : data.site.meta["og-image"].alt),
    description: twitter.description || (description ? description : data.site.meta["home-description"])
  } : void 0, ...restMeta })} <meta name="generator"${addAttribute(Astro2.generator, "content")}> <!-- JSON LD (structured data) --> ${schema && Object.keys(schema).length > 0 && renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)))}`;
}, "D:/Projects/Personal/astro-template/src/components/core/MySEO.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.lukaszmilos.pl");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { meta, schema } = Astro2.props;
  const SITE = data.site;
  return renderTemplate(_a || (_a = __template(['<html lang="pl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Favicons --><link rel="shortcut icon"', '><link rel="icon" type="image/svg+xml"', '><link rel="mask-icon"', ' color="#8D46E7"><link rel="apple-touch-icon" sizes="180x180"', '><!-- Sitemap --><link rel="sitemap"', "><!-- Meta tags -->", '<!-- RSS feed --><link rel="alternate" type="application/rss+xml"', "", '><!-- Google Tag Manager --><script>\n      ;(function (w, d, s, l, i) {\n        w[l] = w[l] || []\n        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })\n        var f = d.getElementsByTagName(s)[0],\n          j = d.createElement(s),\n          dl = l != "dataLayer" ? "&l=" + l : ""\n        j.async = true\n        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl\n        f.parentNode.insertBefore(j, f)\n      })(window, document, "script", "dataLayer", "GTM-NVZP7BLW")\n    <\/script><!-- End Google Tag Manager --><!-- Google Search Console --><!-- {\n    SITE.integrations["google-search-console"] && (\n      <meta\n        name="google-site-verification"\n        content={SITE.integrations["google-search-console"]}\n      />\n    )\n  } --><!-- Analytics --><!-- {\n    SITE.integrations["google-analytics"] ? (\n      <GoogleAnalytics\n        id={SITE.integrations["google-analytics"]}\n        partytown={true}\n      />\n    ) : null\n  } --><!-- Facebook Pixel, Hotjar ... -->', '</head> <body> <!-- Google Tag Manager (noscript) --> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NVZP7BLW" height="0" width="0" style="display:none;visibility:hidden">\n      </iframe> </noscript> <!-- End Google Tag Manager (noscript) --> <div class="flex min-h-screen flex-col justify-between"> ', ' <main class="mt-20"> ', " </main> ", " ", ' </div> <!-- Flowbite interative components --> <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js">\n    <\/script> </body> </html>'])), addAttribute(favIcon, "href"), addAttribute(favIconSvg.src, "href"), addAttribute(favIconSvg.src, "href"), addAttribute(appleTouchIcon.src, "href"), addAttribute("/sitemap-index.xml", "href"), renderComponent($$result, "MySEO", $$MySEO, { "meta": meta, "schema": schema }), addAttribute(SITE.meta["home-title"], "title"), addAttribute(`${Astro2.site}rss.xml`, "href"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "ScrollToTop", $$ScrollToTop, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/Projects/Personal/astro-template/src/layouts/Layout.astro", void 0);

export { $$Button as $, $$Layout as a, $$Icon as b, buildSlug as c, buildToc as d, slugify as s };