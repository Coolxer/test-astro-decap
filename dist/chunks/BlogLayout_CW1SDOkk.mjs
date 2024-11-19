import { e as createAstro, a as createComponent, b as renderTemplate, m as maybeRenderHead, f as addAttribute, d as renderComponent } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import { b as $$Icon, $ as $$Button, c as buildSlug, a as $$Layout } from './Layout_C-gnpdAt.mjs';
import { $ as $$Section } from './Section_Bj4Y0GJ-.mjs';
import { $ as $$Row } from './MyImage_4j3QZG_9.mjs';
import { $ as $$PostCard, a as $$Categories } from './Categories_KRAKBI77.mjs';
import { d as data } from './site_XOOrlhg2.mjs';
import { $ as $$MyBreadCrumbs } from './MyBreadCrumbs_lfLGcO-o.mjs';

const $$Astro$1 = createAstro("https://www.lukaszmilos.pl");
const $$PagePagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PagePagination;
  const { page } = Astro2.props;
  const generatePageNumbers = () => {
    const maxPagesToShow = 5;
    const currentPage = page.currentPage;
    let pages = [];
    const lastPage = Math.ceil(page.total / data.site.blog.itemsPerPage);
    if (lastPage <= maxPagesToShow) {
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, "...", lastPage];
      } else if (currentPage >= lastPage - 2) {
        pages = [1, "...", lastPage - 2, lastPage - 1, lastPage];
      } else {
        pages = [1, "...", currentPage, "...", lastPage];
      }
    }
    return pages;
  };
  const pageNumbers = generatePageNumbers();
  return renderTemplate`${page && page.data && page.data.length > 0 && renderTemplate`${maybeRenderHead()}<nav aria-label="Page navigation" class="py-4"><ul class="flex items-center text-base"><li>${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="ms-0 flex h-12 items-center justify-center rounded-s-lg border border-e-0 border-border_color bg-white px-4 leading-tight text-gray-dark hover:bg-gray-light"><span class="sr-only">Poprzednie</span>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "size-6" })}</a>` : renderTemplate`<div class="ms-0 flex h-12 items-center justify-center rounded-s-lg border border-e-0 border-border_color bg-white px-4 leading-tight text-gray">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "size-6" })}</div>`}</li>${pageNumbers.map(
    (num) => num === "..." ? renderTemplate`<li class="px-base flex h-12 items-center justify-center border border-e-0 border-s-0 border-border_color bg-white leading-tight text-gray">
...
</li>` : renderTemplate`<li><a${addAttribute(num !== 1 ? `/blog/${num}/` : "/blog/", "href")}${addAttribute([
      "flex h-12 items-center justify-center border border-e-0 border-s-0 border-border_color px-4 leading-tight",
      num === page.currentPage ? "bg-accent-lightest text-accent hover:bg-accent-light hover:text-accent-dark" : "bg-white text-gray-dark hover:bg-gray-light"
    ], "class:list")}${addAttribute(num === page.currentPage ? "page" : void 0, "aria-current")}>${num}</a></li>`
  )}<li>${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="flex h-12 items-center justify-center rounded-e-lg border border-s-0 border-border_color bg-white px-4 leading-tight text-gray-dark hover:bg-gray-light"><span class="sr-only">Następne</span>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "size-6" })}</a>` : renderTemplate`<div class="flex h-12 items-center justify-center rounded-e-lg border border-s-0 border-border_color bg-white px-4 leading-tight text-gray">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "size-6" })}</div>`}</li></ul></nav>`}`;
}, "D:/Projects/Personal/astro-template/src/components/blog/PagePagination.astro", void 0);

const $$Astro = createAstro("https://www.lukaszmilos.pl");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const {
    page,
    categories,
    knowledgeBasePosts,
    blogSubTitle,
    displaySectionTitle = false,
    meta,
    schema
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": meta, "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="align-center flex flex-col items-center bg-accent-darkest px-6 py-8 text-white md:py-16"> <div class="flex max-w-prose flex-col items-center justify-center gap-4 text-center"> ${renderComponent($$result2, "MyBreadCrumbs", $$MyBreadCrumbs, {})} <h1>Blog</h1> ${blogSubTitle && renderTemplate`<p class="text-h4">${blogSubTitle}</p>`} </div> </header>   ${renderComponent($$result2, "Section", $$Section, { "center": true }, { "default": ($$result3) => renderTemplate`${page && page.data && page.data.length > 0 ? renderTemplate`<div class="flex flex-col gap-16"> <div class="flex flex-col gap-4"> ${displaySectionTitle && renderTemplate`<h2>Wszystkie posty</h2>`} ${renderComponent($$result3, "Row", $$Row, { "maxColumns": 3, "placement": "items-stretch" }, { "default": ($$result4) => renderTemplate`${page.data.map((post) => renderTemplate`${renderComponent($$result4, "PostCard", $$PostCard, { "post": post })}`)}` })} </div> ${categories && renderTemplate`<div class="flex flex-col gap-2"> <h2>Kategorie</h2> ${renderComponent($$result3, "Categories", $$Categories, { "categories": categories, "h3": true })} </div>`} <div class="flex items-center justify-center self-center"> ${renderComponent($$result3, "PagePagination", $$PagePagination, { "page": page })} </div>  ${knowledgeBasePosts && knowledgeBasePosts?.length > 0 && renderTemplate`<div class="flex flex-row items-center justify-between rounded bg-accent-dark px-8 py-16 text-white shadow"> <p class="text-h5">
Poznaj kluczowe kwestie technologii w firmie
</p> ${renderComponent($$result3, "Button", $$Button, { "link": buildSlug("/blog/baza-wiedzy"), "variant": "tetriary" }, { "default": ($$result4) => renderTemplate`
Zobacz bazę wiedzy
` })} </div>`}  </div>` : renderTemplate`<div class="flex flex-col gap-4 self-center"> <p class="text-h5">Niestety, ale nie ma jeszcze postów</p> ${renderComponent($$result3, "Button", $$Button, { "link": buildSlug("/") }, { "default": ($$result4) => renderTemplate`Wróć do strony głównej` })} </div>`}` })} ` })}`;
}, "D:/Projects/Personal/astro-template/src/layouts/BlogLayout.astro", void 0);

export { $$BlogLayout as $ };
