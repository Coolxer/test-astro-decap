import { e as createAstro, a as createComponent, b as renderTemplate, d as renderComponent } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_Dgj74dHt.mjs';
import { d as data } from './site_XOOrlhg2.mjs';
import { $ as $$BlogLayout } from './BlogLayout_CW1SDOkk.mjs';

const $$Astro = createAstro("https://www.lukaszmilos.pl");
async function getStaticPaths({
  paginate
}) {
  const posts = (await getCollection("posts")).filter((post) => !post?.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const knowledgeBasePosts = posts.filter((post) => post?.data.knowledgeBase);
  const selectedKnowledgeBasePosts = knowledgeBasePosts.slice(0, 4);
  const categories = [
    ...new Set(posts.map((post) => post?.data.categories).flat())
  ];
  const paginatedPosts = paginate(posts, {
    pageSize: data.site.blog.itemsPerPage
  });
  return paginatedPosts.map((page) => ({
    params: page.params,
    props: {
      ...page.props,
      categories,
      selectedKnowledgeBasePosts
    }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const meta = {
    title: "Blog - Technologia cyfrowa i automatyzacja",
    description: "Blog o zastosowaniu technologii cyfrowej i automatyzacji w firmie. Informacje zar\xF3wno o og\xF3lne jak i \u015Bci\u015Ble techniczne i praktyczne.",
    og: false,
    tw: false
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog \u0141ukasza Mi\u0142o\u015B"
  };
  const { page, categories, selectedKnowledgeBasePosts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "page": page, "categories": categories, "knowledgeBasePosts": selectedKnowledgeBasePosts, "displaySectionTitle": true, "meta": meta, "schema": schema })}`;
}, "D:/Projects/Personal/astro-template/src/pages/blog/[...page].astro", void 0);

const $$file = "D:/Projects/Personal/astro-template/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
