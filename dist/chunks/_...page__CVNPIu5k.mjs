import { e as createAstro, a as createComponent, b as renderTemplate, d as renderComponent } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_Dgj74dHt.mjs';
import { s as slugify } from './Layout_C-gnpdAt.mjs';
import { d as data } from './site_XOOrlhg2.mjs';
import { $ as $$BlogLayout } from './BlogLayout_CW1SDOkk.mjs';

const $$Astro = createAstro("https://www.lukaszmilos.pl");
async function getStaticPaths({
  paginate
}) {
  const posts = (await getCollection("posts")).filter((post) => !post?.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const categories = [
    ...new Set(posts.map((post) => post?.data.categories).flat())
  ];
  return categories.flatMap((category) => {
    const filteredPosts = posts.filter(
      (post) => post?.data.categories.includes(category)
    );
    const paginatedPosts = paginate(filteredPosts, {
      params: { category: slugify(category) },
      pageSize: data.site.blog.itemsPerPage
    });
    return paginatedPosts.map((page) => ({
      params: page.params,
      props: {
        ...page.props,
        categories
      }
    }));
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { category } = Astro2.params;
  const { page, categories } = Astro2.props;
  const meta = {
    title: `${category} - Blog techniczny`,
    description: `Zobacz posty z kategorii ${category}. Na blog znajdziesz te\u017C innej cenne i ciekawe informacje`,
    og: false,
    tw: false
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog \u0141ukasza Mi\u0142o\u015B",
    articleSection: `${category}`
  };
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "page": page, "categories": categories, "blogSubTitle": `Kategoria: ${category}`, "meta": meta, "schema": schema })}`;
}, "D:/Projects/Personal/astro-template/src/pages/blog/kategoria/[category]/[...page].astro", void 0);

const $$file = "D:/Projects/Personal/astro-template/src/pages/blog/kategoria/[category]/[...page].astro";
const $$url = "/blog/kategoria/[category]/[...page]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
