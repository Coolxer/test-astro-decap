import { e as createAstro, a as createComponent, b as renderTemplate, m as maybeRenderHead, f as addAttribute, d as renderComponent } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import { c as buildSlug, $ as $$Button } from './Layout_C-gnpdAt.mjs';
import { a as $$MyImage } from './MyImage_4j3QZG_9.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://www.lukaszmilos.pl");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post, class: className } = Astro2.props;
  const link = buildSlug(`/blog/${post?.slug}/`);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "relative flex flex-col overflow-hidden rounded opacity-75 shadow duration-300 ease-in-out hover:opacity-100",
    className
  ], "class:list")}> <a${addAttribute(link, "href")} class="absolute left-0 top-0 size-full"></a> ${renderComponent($$result, "MyImage", $$MyImage, { "src": "posts/" + post?.data.image.src, "alt": post?.data.image.alt, "width": 500, "height": 500, "rounded": "rounded", "class": "h-60 rounded-b-none", "loading": "eager" })} ${post?.data.knowledgeBase && renderTemplate`<div class="absolute -left-1/4 top-8 h-12 w-full -rotate-45 bg-accent p-4 text-center text-white">
baza wiedzy
</div>`} <div class="flex flex-grow flex-col justify-between gap-2 rounded-b border border-t-0 border-border_color p-6"> <div class="flex flex-col items-start gap-2"> <a${addAttribute(link, "href")} class="duration-300 ease-in-out hover:text-accent"> <h3 class="text-h5">${post?.data.heading}</h3> </a> <p class="line-clamp-3">${post?.data.subheading}</p> </div> <div class="flex flex-row flex-wrap gap-2"> ${post?.data.categories.map((category) => renderTemplate`<a class="block bg-accent-lightest px-2 hover:bg-accent-light"${addAttribute(buildSlug("/blog/kategoria/" + category), "href")}>
#${category} </a>`)} </div> ${renderComponent($$result, "Button", $$Button, { "link": link, "variant": "primary", "size": "sm", "class": "mt-4 self-start" }, { "default": ($$result2) => renderTemplate`Przeczytaj` })} </div> </div>`;
}, "D:/Projects/Personal/astro-template/src/components/blog/PostCard.astro", void 0);

const $$Astro = createAstro("https://www.lukaszmilos.pl");
const $$Categories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Categories;
  const { categories, h3 = false, class: className } = Astro2.props;
  return renderTemplate`${categories.length > 0 && renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex flex-row flex-wrap gap-2", className], "class:list")}>${categories?.map((category) => renderTemplate`<a${addAttribute(buildSlug("/blog/kategoria/" + category), "href")} class="flex place-items-center border border-accent-lightest bg-accent-lightest px-4 py-2 text-center text-sm shadow-sm transition-colors duration-300 ease-in-out hover:bg-transparent">${h3 ? renderTemplate`<h3 class="text-base font-normal">${category}</h3>` : renderTemplate`<p class="text-base font-normal">${category}</p>`}</a>`)}</div>`}`;
}, "D:/Projects/Personal/astro-template/src/components/blog/Categories.astro", void 0);

export { $$PostCard as $, $$Categories as a };
