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
  const paginatedPosts = paginate(knowledgeBasePosts, {
    pageSize: data.site.blog.itemsPerPage
  });
  return paginatedPosts.map((page) => ({
    params: page.params,
    props: {
      ...page.props
    }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const meta = {
    title: "Baza Wiedzy - Najwa\u017Cniejsze informacje",
    description: "Znajdziesz tutaj bardzo wa\u017Cne informacje z zakresu technologii cyfrowej, a w szczeg\xF3lno\u015Bci stron internetowych. ",
    og: false,
    tw: false
  };
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "page": page, "blogSubTitle": "Baza wiedzy", "meta": meta })}`;
}, "D:/Projects/Personal/astro-template/src/pages/blog/baza-wiedzy/[...page].astro", void 0);

const $$file = "D:/Projects/Personal/astro-template/src/pages/blog/baza-wiedzy/[...page].astro";
const $$url = "/blog/baza-wiedzy/[...page]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
